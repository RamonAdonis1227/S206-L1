describe('Teste do site escolhido para a Prova Prática', () => {
 
  function gerardados(){

    let horas = new Date().getHours().toString()
    let minutos = new Date().getMinutes().toString()
    let segundos = new Date().getSeconds().toString()
    let telefone = 55035998 + horas + minutos + segundos
    let email = 'ramonzinho' + horas + minutos + segundos + '@hotmail.com'
    let userInfo = [telefone, email]
  
    return userInfo       
    
  } 

  it('Testando a criação de usuário', () => {

    let info = gerardados()
    cy.visit('https://automationintesting.online/')
    cy.get('[data-testid="ContactName"]').type('Ramon')
    cy.get('[data-testid="ContactEmail"]').type(info[1])
    cy.get('[data-testid="ContactPhone"]').type(info[0])
    cy.get('[data-testid="ContactSubject"]').type('subject123321')
    cy.get('[data-testid="ContactDescription"]').type('Hello there, Im Ramon and I wanna make an appointment!')
    cy.get('#submitContact').click()

  })
 
  it('Testando a criação de usuário com dado incorreto', () => {

    let info = gerardados()
    cy.visit('https://automationintesting.online/')
    cy.get('[data-testid="ContactName"]').type('Adonis')
    cy.get('[data-testid="ContactEmail"]').type(info[1])
    cy.get('[data-testid="ContactPhone"]').type(info[0])
    cy.get('[data-testid="ContactSubject"]').type('subject123321')
    cy.get('[data-testid="ContactDescription"]').type('Hello')
    cy.get('#submitContact').click()
    cy.get('.alert > :nth-child(1)').should('contain.text', 'Message must be between')
  })

  it('Testando a reserva de um quarto com meus dados sem escolher a data', () => {

    let info = gerardados()
    cy.visit('https://automationintesting.online/')
    cy.get('.col-sm-7 > .btn').click()


    cy.get('.room-booking-form > .form-control').type('Ramon')
    cy.get('.col-sm-4 > :nth-child(2) > .form-control').type('Abreu')
    cy.get('.col-sm-4 > :nth-child(3) > .form-control').type(info[1])
    cy.get('.col-sm-4 > :nth-child(4) > .form-control').type(info[0])
    cy.get('.col-sm-4 > .btn-outline-primary').click()
    cy.get('.alert > :nth-child(1)').should('have.text', 'não deve ser nulo')    

  })
  
  it('Testando se o endereço da empresa está corretamente digitado', () => {
  
    cy.get('.contact > :nth-child(3) > :nth-child(2)').should('have.text', ' The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')

  })

})

