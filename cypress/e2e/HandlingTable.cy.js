describe('Handling Table data', ()=> {

        beforeEach('Login', () => {
            cy.visit('https://practice.expandtesting.com/tables')
          
        })

        it('Check Number of rows and column', ()=>{
            cy.get('#table1>tbody>tr').should('have.length','4')
            cy.get('#table1>thead>tr>th').should('have.length','6')

        })

        it('Check cell data from specific rows and column', ()=>{
            cy.get('#table1>tbody>tr:nth-child(2)>td:nth-child(2)').contains('Frank')
            
        })

        it.only('Read all the row and column data from first row', ()=>{
            cy.get('#table1>tbody>tr')
                .each( ($row,index,$rows) =>{
                    cy.wrap($row).within( () =>{
                        cy.get('td').each( ($col, index, $cols) =>{
                            cy.log($col.text())
                        })
                    })
                })
            
        })

        it.skip('Pagination', ()=>{
            let totalPageNum;
            //find the total number of pages
            cy.get('xpath of the page count').then( (e)=>{
                let pageNumber=e.text(); //showing 1 to 10 of 2345 (568 Pages)
                totalPageNum=pageNumber.substring(pageNumber.indexOf("(")+1,pageNumber.indexOf("Pages")-1);
                cy.log("Total Page numbers==>"+totalPageNum);

                for(let p=1;p<=totalPageNum;p++){
                    if(totalPageNum>1){
                        cy.log("Active Page Number: "+p)
                        cy.get("xpath of the pagination"+p+" number").click()
                        cy.wait(3000);

                        cy.get('#table1>tbody>tr')
                        .each( ($row,index,$rows)=>{
                            cy.wrap($row).within( ()=>{
                                cy.get('xpath of row data').then( (e)=>{
                                    cy.log(e.text()); // to print specific row data
                                })
                            })
                        })

                    }
                }
            })

            
        })



})