#language: pt

Funcionalidade: Quando eu fizer o login com sucesso ou inválido,
Devo ser redirecionado para a página inicial ou receber uma mensagem de erro.

Cenário: Login com sucesso
Dado que eu estou na página de login
Quando inserir um email válido e uma senha válida
E clicar no botão de login
Então devo ser redirecionado para a página inicial

Cenário: Login inválido
Dado que eu estou na página de login 
Quando inserir um email inválido ou uma senha inválida
E clicar no botão de login
Então devo receber uma mensagem de erro indicando que o login falhou