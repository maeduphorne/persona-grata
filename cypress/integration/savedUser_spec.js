describe('Saved User page render', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.wait(500)
    cy.get('.save-user-btn').click()
    cy.get('.generate-user-btn').click()
    cy.wait(500)
    cy.get(".save-user-btn").click()
    cy.get('.saved-link').click()
  });

  it('Should navigate to Saved User page', () => {
    cy.url().should('eq', 'http://localhost:3000/savedUsers')
      .url().should('not.eq', 'http://localhost:3000/')
  })

  it('Should display a set of suggested questions on load', () => {
    cy.get('aside').contains('Questions to ask about your new user:')
    cy.get('.questions-list').should('be.visible')
      .first().contains('What does this user do for a living?')
  })

  it('Should display multiple user cards', () => {
    cy.get('.user-info').should(($userInfo) => {
      expect($userInfo).to.have.length(2)
    })
    
  })

  it('Each card should contain the user\'s information', () => {
    
  })

  it('Should have a button to navigate back to the home page', () => {
    
  })
})