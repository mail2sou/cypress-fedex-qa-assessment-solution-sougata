// Following are the test cases which were mentioned as 'Additional flows' in the readme
describe('Additional Flows', () => {
    let getMultipleSearchData
    //before every 'it' block, the following beforeEach will run
    beforeEach(() => {
        cy.fixture('additionalFlows').then((multipleSearchData) => {
            getMultipleSearchData = multipleSearchData
        })
        cy.navigateToSearchPage()
    })

    //Following are test cases related to the additional flows (2nd and 3rd point)
    it('Additional Flows 2 and 3', () => {
        cy.get('#planets').click()
        //below we are validating whether using enter we are able to search planets
        cy.get('#query').type(getMultipleSearchData.name + '{enter}')
        //validation of planet search details
        cy.get('h6').should('contain', getMultipleSearchData.name)
        cy.findByText('Population:').next().should('contain', getMultipleSearchData.population)
        cy.findByText('Climate:').next().should('contain', getMultipleSearchData.climate)
        cy.findByText('Gravity:').next().should('contain', getMultipleSearchData.gravity)
        //we click on the people radio button and we should get 'Not found' as this planet name is not a character
        cy.get('#people').click()
        cy.findByText('Search').click()
        //we are validating whether 'Not found' is diplayed
        cy.findByText('Not found.').should('be.visible')
    })

    //Below we are validating whether partial character search is working as expected
    it('Additional Flow 4 for multiple characters', () => {
        cy.get('#people').click()
        cy.get('#query').type(getMultipleSearchData.multipleSearchCharacter)
        cy.findByText('Search').click()
        cy.get('app-character > div > div').find('h6').then((countResultSet) => {
            cy.log(countResultSet.length);
            for (let i = 0; i < countResultSet.length; i++) {
                cy.get('h6').should('not.be.null')
                cy.findAllByText('Gender:').next().should('not.be.null')
                cy.findAllByText('Birth year:').next().should('not.be.null')
                cy.findAllByText('Eye color:').next().should('not.be.null')
                cy.findAllByText('Skin color:').next().should('not.be.null')
                cy.get('#query').clear()
            }
        })
    })

    //Below we are validating whether partial planet search is working as expected
    it('Additional Flow 4 for multiple planet', () => {
        cy.get('#planets').click()
        cy.get('#query').type(getMultipleSearchData.multipleSearchPlanet)
        cy.findByText('Search').click()
        cy.get('app-planet > div > div').find('h6').then((countResultSet) => {
            cy.log(countResultSet.length);
            for (let i = 0; i < countResultSet.length; i++) {
                cy.get('h6').should('not.be.null')
                cy.findAllByText('Population:').next().should('not.be.null')
                cy.findAllByText('Climate:').next().should('not.be.null')
                cy.findAllByText('Gravity:').next().should('not.be.null')
                cy.get('#query').clear()
            }
        })
    })

    //Below we are validating whether previous search results are removed when we clear the "Search form"
    it('Additional Flow 1', () => {
        cy.get('#planets').click()
        //below we are validating whether using enter we can search
        cy.get('#query').type(getMultipleSearchData.name + '{enter}')
        cy.get('h6').should('contain', getMultipleSearchData.name)
        cy.findByText('Population:').next().should('contain', getMultipleSearchData.population)
        cy.findByText('Climate:').next().should('contain', getMultipleSearchData.climate)
        cy.findByText('Gravity:').next().should('contain', getMultipleSearchData.gravity)
        cy.get('#query').clear()
        //we have now cleared the "Search form"
        cy.findByText('Search').click()
        //validating whether previous search results are removed
        cy.findByText(getMultipleSearchData.name).should('not.be.visible') //this fails and it's a defect as previous search results are not removed
    })

})
