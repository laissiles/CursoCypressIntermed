const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, //oculta o token da requisição no visual
      requestMode: true,// ajuda no visual que estaria disponivel só se usassemos cy.api
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})
