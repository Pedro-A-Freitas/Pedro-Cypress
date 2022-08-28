describe ('Cadastro no site buger-eats', ()=>{

    it ('Acesso ao site', ()=> {
      cy.visit('https://buger-eats.vercel.app/')
      cy.get('a[href="/deliver"]').click()
    })
  })
  context('Preenchimento correto do cadastro', ()=>{
  
    it ('Dados', ()=>{
      cy.get('input[name="name"]').type('Pedro de Azevedo Freitas')
      cy.get('input[name="cpf"]').type('14121100760')
      cy.get('input[name="email"]').type('pedrodeafreitas@gmail.com')
      cy.get('input[name="whatsapp"]').type('21997123566')
    })
  
    it ('Enderço', ()=>{
      cy.get('input[name="postalcode"]').type('21765000')
      cy.get('input[type="button"][value="Buscar CEP"]').click()
      cy.wait(2000)
      cy.get('input[name="address-number"').type('1000')
      cy.get('input[name="address-details"').type('Fundos')
    })
  
    it ('Método de entrega', ()=>{
      cy.contains('Moto').click()
    })
  
    it ('Upload de documento', ()=>{
      cy.get('input[accept^="image"]').attachFile('cnh.jpg')
    })
  
    it ('Finalizar cadasto', ()=>{
      cy.get('button[type="submit"]').click()
      cy.get('button[class="swal2-confirm swal2-styled"]').click()
    })
  })