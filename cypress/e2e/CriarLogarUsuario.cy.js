/* eslint-disable no-undef */

/// <reference types="cypress" />

const apiKey = 'AIzaSyD-71clEQrpIlbH0T47fVg6GUe96ZuWJUY'
const login = {
  email: 'teste@teste.com',
  password: 123456,
}
const usuario = {
  displayName: 'Usuário de teste',
  email: null,
  idToken: null,
  localId: null,
  targetProjectId: null,
}
describe('Cadastrar e Logar Usuário', () => {
  before(() => {
    cy.visit('/cadastrar')
  })
  it('deve cadastrar o usuario de teste', () => {
    cy.request(
      'POST',
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      login
    ).then((response) => {
      usuario.idToken = response.body.idToken
      usuario.localId = response.body.localId
      usuario.email = response.body.email
    })
  })
  it('deve atualizar o nome do usuario', () => {
    const dtoUSuario = {
      nome: usuario.displayName,
      email: usuario.email,
    }
    cy.request(
      'POST',
      `https://backend-lista-compras-default-rtdb.firebaseio.com/${usuario.localId}/dados-usuarios.json?auth=${usuario.idToken}

      `,
      dtoUSuario
    )
  })
  it('Não deve deixar cadastrar um usuário já cadastrado', () => {
    cy.get('#name').type('Usuário de teste')
    cy.get('#email').type('teste@teste.com')
    cy.get('#password').type(123456)
    cy.get('.div-form > .button > span').click()
    cy.get('p > div').should(
      'contain',
      'Já existe uma conta com o endereço de email fornecido.'
    )
    cy.get('.modal-card-foot > .button > span').click()
    cy.get('#cadastrar').click()
  })
  // Serve para excluir o usuario cadastrado
  // it('Deve excluir o usuaro de teste', () => {
  //   cy.request(
  //     'POST',
  //     'https://identitytoolkit.clients6.google.com/v1/accounts:delete?alt=json&key=${apiKey}',
  //     {
  //       idToken: usuario.idToken,
  //     }
  //   )
  // })
  it('Deve logar o usuaro de teste', () => {
    cy.visit('/login')
    cy.get('#email').type('teste@teste.com')
    cy.get('#password').type(123456)
    cy.get('.div-form > .button').click()
  })
})
