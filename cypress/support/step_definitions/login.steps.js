import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`que eu estou na página de login`, () => {
    cy.visit('login.html'); 
});

When(`inserir um email válido e uma senha válida`, () => {
    cy.get('#email').type('admin@biblioteca.com');
    cy.get('#password').type('admin123');
});

When(`clicar no botão de login`, () => {
    cy.get('#login-btn').click();
});

Then(`devo ser redirecionado para a página inicial`, () => {
    cy.get('h1').should('contain', 'Painel Administrativo');
});

When(`inserir um email inválido ou uma senha inválida`, () => {
    cy.get('#email').type('email-invalido@example.com');
    cy.get('#password').type('admin123');
});

Then(`devo receber uma mensagem de erro indicando que o login falhou`, () => {
    cy.get('#alert-container')
        .should('be.visible')
        .and('contain', 'Email ou senha incorretos.');
});