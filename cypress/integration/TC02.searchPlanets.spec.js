//Following is the test case where we validate whether a valid planet search is working as expected
//We are also validating whether an invalid planet search results in displaying 'Not found'
describe('Search for planets', () => {
    let getPlanets
    //before every 'it' block, the following beforeEach will run
    beforeEach(() => {
        cy.fixture('planets').then((planetsData) => {
            getPlanets = planetsData
        })
        cy.navigateToSearchPage()
        cy.get('#planets').click()
    })

    //Below 'it' block test the planet search functionality
    it('Search for planets', () => {
        //we are looping the fixture data json file to validate multiple test data
        for (let i = 0; i < getPlanets.length; i++) {
            //in case of invalid data the result 'Not found' is validated
            if (getPlanets[i].name == "invalidData") {
                cy.get('#query').type(getPlanets[i].name)
                cy.findByText('Search').click()
                cy.findByText(getPlanets[i].result).should('be.visible')
                cy.get('#query').clear()
            }
            //in case of a valid search, the planet details are validated
            else {
                cy.get('#query').type(getPlanets[i].name)
                cy.findByText('Search').click()
                cy.get('h6').should('contain', getPlanets[i].name)
                cy.findByText('Population:').next().should('contain', getPlanets[i].population)
                cy.findByText('Climate:').next().should('contain', getPlanets[i].climate)
                cy.findByText('Gravity:').next().should('contain', getPlanets[i].gravity)
                cy.get('#query').clear()
            }
        }
    })

})