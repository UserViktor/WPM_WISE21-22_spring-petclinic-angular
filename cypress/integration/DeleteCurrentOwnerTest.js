context('Delete Current Owner',() => {
   it('should delete current owner',()=>{
      cy.visit('http://localhost:4200/petclinic/owners/1/')
})
   it('should delete a owner',()=>{
       cy.get('#deletebtn').click();
   })
})
