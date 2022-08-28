describe ('Cadastro no site buger-eats', ()=>{
    it ('Acesso ao site', ()=> {
      cy.visit('https://buger-eats.vercel.app/')
      cy.get('a[href="/deliver"]').click()
    })
})
context('Preenchimento errado do cadastro', ()=>{

    it ('Dados', ()=>{
      cy.get('input[name="name"]').type('123 da silva')
      cy.get('input[name="cpf"]').type('asd123')
      cy.get('input[name="email"]').type('pedro12!')
      cy.get('input[name="whatsapp"]').type('223@asd')
      })
    
    it ('Enderço', ()=>{
      cy.get('input[name="postalcode"]').type('asd')
      cy.get('input[type="button"][value="Buscar CEP"]').click()
      cy.wait(2000)
      cy.get('input[name="address-number"').type('a@1')
      cy.get('input[name="address-details"').type('@@a1')
      })
    
    it ('Método de entrega', ()=>{
      cy.contains('Moto').click()
      cy.contains('Bicicleta').click()
      })
    
    it ('Upload de documento', ()=>{
      cy.get('input[accept^="image"]').attachFile('teste;odt')
      })
    
    it ('Finalizar cadasto', ()=>{
      cy.get('button[type="submit"]').click()
      cy.get('button[class="swal2-confirm swal2-styled"]').click()
    })
})