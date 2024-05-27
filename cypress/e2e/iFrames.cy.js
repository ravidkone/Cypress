
describe('Frames Concept', () => {

    it('Approch_1', () => {
        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
let iframe=cy.get('[name="globalSqa"')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type("Welcome");

    })

})