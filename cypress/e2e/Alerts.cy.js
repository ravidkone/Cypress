describe('Alerts', () =>{
    it.skip('Alert Test case', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert', (t) => {

        expect(t).to.contains('I am a JS Alert')
    })
    //cy.on('window:confirm',()=>true) cypress will write this code and cloese the pop up
    cy.get('#result').should('have.text','You successfully clicked an alert')

})

it('Alert confirm - ok', ()=> {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()
    
    cy.on('window:alert', (t) => {

        expect(t).to.contains('I am a JS Confirm')
    })
    //cy.on('window:confirm',()=>true) cypress will write this code and close the JS pop up

    cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Alert confirm - cancel', ()=> {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        
        cy.on('window:alert', (t) => {
    
            expect(t).to.contains('I am a JS Confirm');
        })
    
        cy.on('window:confirm',()=>false); // to clcik on the cancel button in the pop up
        
        cy.get('#result').should('have.text','You clicked: Cancel');
    
        })

    it('Prompt confirm - ok', ()=> {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('Welcome')

        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: Welcome')
    
        })

        it('Prompt confirm - cancel', ()=> {

            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            
            cy.window().then((win) => {
                cy.stub(win,'prompt').returns('Welcome')
    
            })
            cy.get("button[onclick='jsPrompt()']").click()
         //   cy.on('window:prompt',()=>false); // to clcik on the cancel button in the pop up
         //   cy.get('#result').should('have.text','You entered: null')
        
            })

            it('Auth-Alert', ()=> {
                //approch 1
                cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}});
                
                cy.get("div[class='example'] p").should('have.contain','Congratulations')
                })

                it('Auth-Alert2', ()=> {
                    //approch 2
                    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
                    
                    cy.get("div[class='example'] p").should('have.contain','Congratulations')
                    })


})