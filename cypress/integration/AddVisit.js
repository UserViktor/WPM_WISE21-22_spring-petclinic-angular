context('Find', () => {



  it('Eine Owner Seite rufen', () => {
    cy.visit('http://localhost:4200/petclinic/owners/1')
  })


  it('Visit hinzufügen', () => {

   // cy.get();
    cy.get('#addVisitButton').click();
    cy.get('#kalender').type('06/02.2020');
    cy.get('#description').type('Bespiel Termin für Pet');
    cy.get('button[type=submit]').as('Add Visit').click();
  })


})
