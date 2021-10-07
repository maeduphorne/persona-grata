describe('Saved User page render', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/savedUsers')
  });

  it('Should navigate to Saved User page', () => {
    cy.saveUsers()
    cy.url().should('eq', 'http://localhost:3000/savedUsers')
      .url().should('not.eq', 'http://localhost:3000/')
  })

  it('Should display a set of suggested questions on load', () => {
    cy.saveUsers()
    cy.get('aside').contains('Questions to ask about your new user:')
    cy.get('.questions-list').should('be.visible')
      .first().contains('What does this user do for a living?')
  })

  it('Should display multiple user cards', () => {
    cy.saveUsers()
    cy.get('.user-info').should(($userInfo) => {
      expect($userInfo).to.have.length(2)
    })
  })

  it('Each card should contain the user\'s information', () => {
    cy.saveUsers()
    cy.get('.user-info').first()
    .get('.user-name').should('be.visible').contains('Name:')
    .get('.user-age').should('be.visible').contains('Age:')
    .get('.user-gender').should('be.visible').contains('Gender:')
  })

  it('Should have a button to navigate back to the home page', () => {
    cy.saveUsers()
    cy.get('.home-link').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display an error masssage when there are no saved users', () => {
    cy.get('.no-saved').contains('You have not saved any users yet!')
  })
})

describe('Route Error', () => {
  it('Should display error if path is not correct', () => {
    cy.visit('http://localhost:3000/hotdogs')
    cy.get('.error-message').contains('Oops - something went wrong!')
  })

  it('Should give user the option to return home by clicking the header', () => {
    cy.visit('http://localhost:3000/hotdogs')
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})