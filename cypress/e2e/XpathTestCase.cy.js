
describe("Xpath Test", () =>{
   
    it("xpath test1", () =>{

        cy.visit("http://www.automationpractice.pl/index.php")

        cy.xpath("//a[@title='Women']").click()

        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',7)

    })


})