describe("Multiple Window", () =>{
    it('Approch_1', ()=> {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example >a').invoke('removeAttr','target').click()
      
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        cy.go('back')
    })

    it('Approch_2', ()=> {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example >a').then((e)=>{

            let url=e.prop('href')
            cy.visit(url)
        })
      
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        cy.go('back')
    })




})