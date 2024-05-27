
describe('Dropdpwn suite', () => {

    it.skip('dropdown with select test case', () =>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Italy')
        .should('have.value','Italy')

    })

    it.skip('dropdown with select test case', () =>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('[aria-label="Country"]').click()
        cy.get('.select2-search__field').type('Iran').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')

    })

    it.skip('Auto suggest drop down test case', () =>{

        cy.visit("https://www.wikipedia.org/")

        cy.get('[name="search"]').click()
        cy.get('[name="search"]').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()
        cy.get('.mw-page-title-main').should('have.text','Delhi University')


    })

    it('Dynamic drop down test case', () =>{

        cy.visit("https://www.google.com/")

        cy.get('.gLFyf').click()
        cy.get('.gLFyf').type('Cypress Automation')
        cy.wait(2000)

        cy.get('.wM6W7d>span').should('have.length','13')
        cy.get('.wM6W7d>span').each( ($el, index, $list) => {
            if($el.text()=='cypress automation tutorial')
                cy.wrap($el).click();

        } )
        cy.get('.gLFyf').should('have.value','cypress automation tutorial')

        // cy.get('.suggestion-title').contains('Delhi University').click()
        // cy.get('.mw-page-title-main').should('have.text','Delhi University')


    })


    

})