


context('Find', () => {

  it('Owner Seite soll besucht werden können', ()=> {
    cy.visit('http://localhost:4200/petclinic/owners')
  })

  it('Eingegebene Owner soll gefunden werden, Mit Großbuchstabe', ()=>{
    cy.get('#lastName').type('Davis');
    cy.get('button[type=submit]').as('Find').click();
    cy.get('#lastName').clear();
  })

  it('Eingegebene Pet soll gefunden werden, Mit Großbuchstabe ', ()=>{
    cy.get('#lastName').type('Leo');
    cy.get('button[type=submit]').as('Find').click();
    cy.get('#lastName').clear();
  })

  it('Eingegebene Description soll gefunden werden, Mit Großbuchstabe', ()=>{
    cy.get('#lastName').type('Spayed');
    cy.get('button[type=submit]').as('Find').click();
    cy.get('#lastName').clear();
  })

  it('Eingegebene Owner soll gefunden werden, Mit Kleinbuchstaben', ()=>{
    cy.get('#lastName').type('davis');
    cy.get('button[type=submit]').as('Find').click();
    cy.get('#lastName').clear();
  })

  it('Eingegebene Pet soll gefunden werden, Mit Kleinbuchstaben', ()=>{
    cy.get('#lastName').type('leo');
    cy.get('button[type=submit]').as('Find').click();
    cy.get('#lastName').clear();
  })

  it('Eingegebene Description soll gefunden werden, Mit Kleinbuchstabe', ()=>{
    cy.get('#lastName').type('spayed');
    cy.get('button[type=submit]').as('Find').click();
    cy.get('#lastName').clear();
  })


})

