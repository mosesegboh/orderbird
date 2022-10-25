describe('Testing the Page elements', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0/')
  })

  it('Test for the proper rendering of the table and its contents', () => {
    cy.get('.table-auto')
    cy.contains('First Name')
    cy.contains('Last Name')
    cy.contains('Email')
    cy.contains('@')
  })

  it('Test for the pop up functionality', () => {
    cy.get('#app > div > div > table > tbody > tr:nth-child(1)').click()
    cy.get('.rounded-md').should('be.visible')
  })

  it('Test for the sort functionality', () => {
    cy.get('#mySort').first().click({ multiple: true })
    cy.get('#app > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')
    cy.contains('a')
  })
})