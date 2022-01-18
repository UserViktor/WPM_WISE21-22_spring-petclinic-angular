#Useful variable
ARG DOCKER_HUB="docker.io"
#Create build process to build the project
FROM $DOCKER_HUB/library/node:14.18.2-alpine as build
#Copy the local folder to the container
COPY . /workspace/
#Helper variable during build 
ARG NPM_REGISTRY=" https://registry.npmjs.org"
#Install dependencies and build project
RUN echo "registry = \"$NPM_REGISTRY\"" > /workspace/.npmrc                              && \
    cd /workspace/                                                                       && \
    npm install                                                                          && \
    npm run build 
#Create nginx stage for serving the content
FROM $DOCKER_HUB/library/nginx:latest AS runtime
#Set current working directory to nginx assets directory
WORKDIR /usr/share/nginx/html
#Copy static content from builder stage
COPY  --from=build /workspace/dist/ ./petclinic
#Configuration for nginx server
RUN chmod a+rwx /var/cache/nginx /var/run /var/log/nginx                        && \
    sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf && \
    sed -i.bak 's+server\_name\(.*\)localhost;+server\_name  localhost;\n    root \/usr\/share\/nginx\/html\/petclinic;\n    index index.html;+g' /etc/nginx/conf.d/default.conf &&\
    sed -i.bak 's+location\s/\s{+location \/petclinic\/ {+g' /etc/nginx/conf.d/default.conf && \
    sed -i.bak 's+\<root\(.*\)\/usr\/share\/nginx\/html;+alias \/usr\/share\/nginx\/html\/petclinic\/;+g' /etc/nginx/conf.d/default.conf && \
    sed -i.bak 's+\<index\(.*\)index.html\sindex.htm;+try_files $uri$args $uri$args\/ \/petclinic/index.html;+g' /etc/nginx/conf.d/default.conf && \    
    sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
#Error site location fix
RUN mv 50x.html ./petclinic/
#Expose port 8080 to the outside
EXPOSE 8080
#Use user nginx
USER nginx
#Check if the service is running healthy
HEALTHCHECK     CMD     [ "service", "nginx", "status" ]


