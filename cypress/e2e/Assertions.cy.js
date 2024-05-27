
describe('Assertion suite', () =>{

 it('Implicit Assertaion', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('contain','OrangeHRM')
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('include','orangehrmlive.com/web')
    

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value','Admin')


 })

 it('Explicit Assertion', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('contain','OrangeHRM')

    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get("[type='submit']").click()

    let expName='manda user'
    cy.get('.oxd-userdropdown-name').then ( (x) =>{ 
            let actName=x.text()
            expect(expName).to.equal(actName)

            assert.equal(actName,expName)
    })

    



 })

})