describe('Teste de Cadastro de Contato', () => {
    it('Preenche e submete o formulário de contato', () => {
        cy.visit('/index.html') 
        cy.get('#name').type('Fulano de Tal')
        cy.get('#email').type('fulano@example.com')
        cy.get('#message').type('Esta é uma mensagem de teste.')
        cy.get('form').submit()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Formulário enviado com sucesso!`)
        })
    })
})
