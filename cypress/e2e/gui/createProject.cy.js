import { faker } from '@faker-js/faker'

describe('Criar projeto', () => {
// condição antes do teste, aqui, por exemplo estar logado
    beforeEach(()=>{
        cy.login()
    })

    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)        }
      cy.criar_projeto(project)

        // validação se o projeto foi criado
        cy.contains(project.name).should('be.visible') // valida se o nome do projeto aparece na tela
        cy.contains(project.description).should('be.visible') // valida se a descrição esta na tela


    })
})