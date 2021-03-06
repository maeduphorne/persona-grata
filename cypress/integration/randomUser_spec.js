describe('Main page render', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.wait(1500)
  });

  it('Should have a header with the App\'s name on page load', () => {
    cy.get('h1').contains('Persona Grata')
  })

  it('Should display a set of suggested questions on load', () => {
    cy.get('aside').contains('Questions to ask about your new user:')
    cy.get('.questions-list').should('be.visible')
      .first().contains('What does this user do for a living?')
  })

  it('Should display instructions & a user on load', () => {
    cy.intercept('https://randomuser.me/api/', {fixture: 'userInfo-fixture.json'})
      .intercept('https://api.quotable.io/random?tags=famous-quotes', {fixture: 'userQuote-fixture.json'})
      .visit('http://localhost:3000/')
    cy.get('h2').contains('Below is a random user to help inspire you while creating a User Persona.')
    cy.wait(2000)
    cy.get('.user-info').should('be.visible')
    cy.get('.user-name').should('be.visible').contains('Zoe Brown')
    cy.get('.user-age').should('be.visible').contains('36')
    cy.get('.user-gender').should('be.visible').contains('female')
    cy.get('.user-location').should('be.visible').contains('Armstrong')
    cy.get('.user-quote').should('be.visible').contains('A house divided against itself cannot stand.')
  })

  it('Should have a button to generate another user or save a user', () => {
    cy.get('.generate-user-btn').should('be.visible').click()
    cy.get('.save-user-btn').click()
  })

  it('Should take the user to the saved user page on button click', () => {
    cy.get('.saved-link').click()
    cy.url().should('eq', 'http://localhost:3000/savedUsers')
    cy.get('.no-saved').contains('You have not saved any users yet!')
  })

})