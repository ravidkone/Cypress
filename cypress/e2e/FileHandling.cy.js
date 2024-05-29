import 'cypress-file-upload';

describe('File handling', ()=>{

it('Single File Upload', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    
    cy.get('#file-upload').attachFile('Test1.pdf');
    cy.get('#file-submit').click()
    cy.wait(3000)
    cy.get("div[class='example'] h3").should('be.visible')


})

it('File Upload - Rename', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    
    cy.get('#file-upload').attachFile({filePath:'Test1.pdf',fileName:'MyFile.pdf'});
    cy.get('#file-submit').click()
    cy.wait(3000)
    cy.get("div[class='example'] h3").should('be.visible')
    cy.get('#uploaded-files').then( (e)=>{
      let text=e.text();
      cy.log(text);
    })

    
})

it('File Upload - Drag and Drop', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')

    cy.get('#drag-drop-upload').attachFile('Test1.pdf',{subjectType:'drag-n-drop'})
    cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
    .contains('Test1.pdf')
})

it('Multiple Files Upload', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    cy.get('#filesToUpload').attachFile(["Test1.pdf","Test2.pdf"])
    cy.get("body > div:nth-child(7) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > p:nth-child(6) > strong:nth-child(1)").contains('Files You Selected:')
    
})

it.only('File Upload Shadow dop', () => {

    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

    cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Test1.pdf')
    cy.wait(2000)
    cy.get('.smart-item-name',{includeShadowDom:true}).should('have.text','Test1.pdf')

    
})

})