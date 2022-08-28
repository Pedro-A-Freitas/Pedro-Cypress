describe ('Cadastro no site buger-eats', ()=>{

    it ('Acesso ao site', ()=> {
      cy.visit('https://buger-eats.vercel.app/')
      cy.get('a[href="/deliver"]').click()
    })
})
context('Preenchimento errado do cadastro', ()=>{

    it ('Dados', ()=>{
      cy.get('input[name="name"]').type('')
      cy.get('input[name="cpf"]').type('')
      cy.get('input[name="email"]').type('')
      cy.get('input[name="whatsapp"]').type('')
      })
    
    it ('Enderço', ()=>{
      cy.get('input[name="postalcode"]').type('')
      cy.get('input[type="button"][value="Buscar CEP"]').click()
      cy.wait(2000)
      cy.get('input[name="address-number"').type('')
      cy.get('input[name="address-details"').type('')
      })
    
    it ('Método de entrega', ()=>{
      cy.contains('').click()
      cy.contains('').click()
      })
    
    it ('Upload de documento', ()=>{
      cy.get('input[accept^="image"]').attachFile('')
      })
    
    it ('Finalizar cadasto', ()=>{
      cy.get('button[type="submit"]').click()
      cy.get('button[class="swal2-confirm swal2-styled"]').click()
    })
})