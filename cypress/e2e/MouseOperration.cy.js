describe('Mouse Operation', ()=>{

    // beforeEach('Visit the website', ()=>{
    //     cy.visit('https://www.flipkart.com/')
    //     cy.wait(3000)
    // })

    it.skip('Mouse Hover', ()=>{
        cy.visit('https://www.flipkart.com/')

        cy.get('[data-observerid-179fbc44-265c-4b9c-83fe-3b98410a00c3="da4e9d72-425b-4bc5-931d-3fd93942c82b"] > .YBLJE4 > ._1XjE3T > :nth-child(1)',{force:true})
        .should('be.visible')
        cy.wait(3000)
        cy.xpath("//div[@class='_1wE2Px']")
        .trigger('mouseover').click();
        cy.wait(3000)
        cy.xpath("//a[text()='Audio']")
        .should('be.visible');
    })

    it.only('Right Click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Approch 1
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // cy.get('.context-menu-icon-copy > span').should('be.visible')

        //Approch 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible')

        
    })

    it.skip('Double Click', ()=>{
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')
        cy.frameLoaded('#iframeResult') // load the frame to interact with elements
        
        //Approch 1 - cy.get('xpathOfElement').trigger('dbclick');
      //  cy.iframe('#iframeResult').find('body h2').trigger('dblclick')
      //  cy.iframe('#iframeResult').find('#demo').contains('Hello World ')
 

        //Approch 2
        cy.iframe('#iframeResult').find('body h2').dblclick();

                
    })

    it('Drag and Drop using plugin', ()=>{
    //Install double-click plugin using: npm install --save-dev @4tw/cypress-drag-drop
        cy.get("source").drag('destination',{force:true}) //force:true is used to do hard click
        
    })

    it.skip('Scroling page', ()=>{

        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/');
        cy.wait(3000)
        cy.get('body > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(79) > div:nth-child(1) > div:nth-child(2)')
        .scrollIntoView({duration:2000})
        
    })

})