describe('Check box and Radio suite', () => {

    // it('Radio button test Case', () => {

    //     cy.visit("https://testautomationpractice.blogspot.com/")

    //     //verify if radio buttons are visible
    //     cy.get('#male').should('be.visible')
    //     cy.get('#female').should('be.visible')

    //     //select radio button and verify if its checked
    //     cy.get('#male').check().should('be.checked')

    //     //verify if female radio button checked
    //     cy.get('#female').should('not.be.checked')

    //     //check female and verify
    //     cy.get('#female').check().should('be.checked')
    //     cy.get('#male').should('not.be.checked')

    //     cy.get('#male').check().should('be.checked')
    //     cy.get('#female').check().should('be.checked')
    //     cy.get('#male').should('not.be.checked')

    // })

    it('Check box validation', () => {

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#sunday').should('be.visible')
        cy.get('#monday').should('be.visible')

        //select the checkbox
        cy.get('#sunday').check().should('be.checked')
        cy.get('#monday').check().should('be.checked')

        //uncheck the checkbox
        cy.get('#sunday').uncheck().should('not.be.checked')
        cy.get('#monday').uncheck().should('not.be.checked')

        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')



    })

})