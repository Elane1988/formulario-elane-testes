describe("Formulário Elane - Testes com Cypress", () => {
  beforeEach(() => {
    cy.visit("/index.html"); // baseUrl já definido no config
  });

  it("Deve mostrar erro se campos estiverem vazios", () => {
    cy.get('[data-test="submit"]').click();
    cy.get("#resultado").should("contain.text", "Por favor preencha login e senha");
  });

  it("Deve enviar login e senha corretamente", () => {
    cy.get('[data-test="login"]').type("usuario_teste");
    cy.get('[data-test="senha"]').type("123456");
    cy.get('[data-test="submit"]').click();
    cy.get("#resultado").should("contain.text", "Login recebido com sucesso!");
  });
});
