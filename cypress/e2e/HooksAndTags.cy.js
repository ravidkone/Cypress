//before: before starting all it() blocks it will execute once
//after: After all it() blocks it will execute once
//beforeEach: beforeEach will execute multiple times before starting each it() block
//AfterEach: AfterEach will execute multiple times after completion each it() block


describe('Hooks and Tags',()=>{

    before('Launcg Browser',()=>{
        cy.log('Laucng Browser')
    })

    after('Close Browser',()=>{
        cy.log('Close Browser')
    })

    beforeEach('Open URL',()=>{
        cy.log('Login to application')
    })

    afterEach('Close Browser',()=>{
        cy.log('logout from application')
    })

it('Search',()=>{

    cy.log('*** Search Function ****')
})

it('Advance Search',()=>{
    cy.log('*** Advance Search Function ****')
})

it('Listening Products',()=>{

    cy.log('*** Listing Products ****')
})

})