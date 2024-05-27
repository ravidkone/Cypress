describe('template spec', () => {
    it('test1', () => {
      cy.visit('https://example.cypress.io')
      cy.title().should('eq','Cypress.io: Kitchen Sink')
    })

    it('test2', () => {
      cy.visit('https://example.cypress.io')
      cy.title().should('eq','Cypress.io: Kitchen Sink123')
    })

  })