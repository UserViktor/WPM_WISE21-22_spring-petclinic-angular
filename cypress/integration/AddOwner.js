context('Owner Hinzufügen', () => {

  it('Add owner Seite soll besucht werden', ()=> {
    cy.visit('http://localhost:4200/petclinic/owners/add')
  })

  it('Owner hinzufügen, der nicht im Sytem ist', ()=>{
    cy.get('#firstName').type('Dilara');
    cy.get('#lastName').type('Kara');
    cy.get('#address').type('Musterstraße 20');
    cy.get('#city').type('Bremen');
    cy.get('#telephone').type('017274837483');
    cy.get('button[type=submit]').as('Add Owner').click();
  // cy.wait(500);
  })


  it('Add owner Seite soll besucht werden', ()=> {
    cy.visit('http://localhost:4200/petclinic/owners/add')
  })

  it('Owner hinzufügen, der bereits im Sytem drin ist', ()=>{
    cy.get('#firstName').type('Dilara');
    cy.get('#lastName').type('Kara');
    cy.get('#address').type('Musterstraße 20');
    cy.get('#city').type('Bremen');
    cy.get('#telephone').type('017274837483');
    cy.get('button[type=submit]').as('Add Owner').click();

  })

/////////////////////////////////////////////////////////////
  it('Add owner Seite soll besucht werden', ()=> {
    cy.visit('http://localhost:4200/petclinic/owners/add')
  })

  it('Owner hinzufügen, der nicht im Sytem ist', ()=>{
    cy.get('#firstName').type('Dilara');
    cy.get('#lastName').type('Kara');
    cy.get('#address').type('Musterstraße 20');
    cy.get('#city').type('Bremen');
    cy.get('#telephone').type('017274837483');
    cy.get('button[type=submit]').as('Add Owner').click();
     cy.wait(500);
  })

  it('Add owner Seite soll besucht werden', ()=> {
    cy.visit('http://localhost:4200/petclinic/owners/add')
  })

  it('Owner hinzufügen, der bereits im Sytem drin ist', ()=>{
    cy.get('#firstName').type('Dilara');
    cy.get('#lastName').type('Kara');
    cy.get('#address').type('Musterstraße 20');
    cy.get('#city').type('Bremen');
    cy.get('#telephone').type('017274837483');
    cy.get('button[type=submit]').as('Add Owner').click();

  })

})
