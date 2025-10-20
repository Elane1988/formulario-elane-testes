const { test, expect } = require('@playwright/test');

test.describe('Formulário Elane - Testes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${__dirname}/../index.html`);
  });

  test('Deve mostrar erro se campos estiverem vazios', async ({ page }) => {
    await page.click('[data-test="submit"]');
    const resultado = await page.locator('#resultado');
    await expect(resultado).toHaveText(/Por favor preencha login e senha/);
  });

  test('Deve enviar login e senha corretamente', async ({ page }) => {
    await page.fill('[data-test="login"]', 'usuario_teste');
    await page.fill('[data-test="senha"]', '123456');
    await page.click('[data-test="submit"]');

    const resultado = await page.locator('#resultado');
    await expect(resultado).toHaveText(/Login recebido com sucesso!/);
  });
});
