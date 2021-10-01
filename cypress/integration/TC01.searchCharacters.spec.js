//Following is the test case where we validate whether a valid character search is working as expected
//We are also validating whether an invalid character search results in displaying 'Not found'
describe('Search for characters', () => {
    let getCharacters
    //before every 'it' block, the following beforeEach will run
    beforeEach(() => {
        cy.fixture('characters').then((charactersData) => {
            getCharacters = charactersData
        })
        cy.navigateToSearchPage()
        cy.get('#people').click()
    })

    //Below 'it' block test the character search functionality
    it('Search for characters', () => {
        //we are looping the fixture data json file to validate multiple test data
        for (let i = 0; i < getCharacters.length; i++) {
            //in case of invalid data the result 'Not found' is validated
            if (getCharacters[i].name == "invalidData") {
                cy.get('#query').type(getCharacters[i].name)
                cy.findByText('Search').click()
                cy.findByText(getCharacters[i].result).should('be.visible')
                cy.get('#query').clear()
            }
            //in case of a valid search, the character details are validated
            else {
                cy.get('#query').type(getCharacters[i].name)
                cy.findByText('Search').click()
                cy.get('h6').should('contain', getCharacters[i].name)
                cy.findByText('Gender:').next().should('contain', getCharacters[i].gender)
                cy.findByText('Birth year:').next().should('contain', getCharacters[i].birthYear)
                cy.findByText('Eye color:').next().should('contain', getCharacters[i].eyeColor)
                cy.findByText('Skin color:').next().should('contain', getCharacters[i].skinColor)
                cy.get('#query').clear()
            }
        }
    })

})