
describe('Test spec', () =>{

it('test case 1',()=>{
    cy.visit("http://www.automationpractice.pl/index.php")
    cy.get("#search_query_top").type("T-shirt")
    cy.get("[name='submit_search']").click()

    cy.get(".product-name").contains("Faded Short Sleeve T-shirts")
})

})