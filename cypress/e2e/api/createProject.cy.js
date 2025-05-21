import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    beforeEach(() => cy.api_deleteProjects())
    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        cy.api_createProject(project) // faz a requisição
            .then(response => {// valida a resposta da requisição de criação
                expect(response.status).to.equal(201) //valida o codigo da requisição para criação com sucesso
                expect(response.body.name).to.equal(project.name) //valida que o nome do projeto é igual
                expect(response.body.description).to.equal(project.description) // valida a descrição
            })
    })
})
