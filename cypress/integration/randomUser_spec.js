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

  it('Should display instructions & a random user on load', () => {
    cy.get('h2').contains('Instructions')
    cy.get('.user-info').should('be.visible')
    cy.get('.user-name').should('be.visible').contains('Name:')
    cy.get('.user-age').should('be.visible').contains('Age:')
    cy.get('.user-gender').should('be.visible').contains('Gender:')
    cy.get('.user-location').should('be.visible').contains('Location:')
    cy.get('.user-quote').should('be.visible').contains('My favorite quote:')
  })

  it('Should have a button to generate another user or save a user', () => {
    cy.get('.generate-user-btn').click()
    cy.get('.save-user-btn').click()
  })

  it('Should take the user to the saved user page on button click', () => {
    cy.get('.saved-link').click()
    cy.url().should('eq', 'http://localhost:3000/savedUsers')
    // Should contain the error message saying there are no saved users
  })
})