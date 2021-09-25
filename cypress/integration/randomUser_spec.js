describe('Main page render', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should have a header with the App\'s anme on page load', () => {
    cy.get('h1').contains('Persona Grata')
  })

  it('Should display a set of suggested questions on load', () => {
    
  })

  it('Should display a random user on load', () => {

  })

  it('Should generate another user on button click', () => {

  })

  it('Should take the user to the saved user page on button click', () => {

  })
})