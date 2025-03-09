/// reference types ="Cypress" />
describe ("My first test suite", function()
{
  it("my first test case",function()
  {
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  cy  .get('.search-keyword').type('ca')
  cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    //Parent Child Chaining
    cy.get('.products').find('.product').should('have.length',4)

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    cy.get('.products').find('.product').each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      const pro = $el.find('h4.product-name').text()
      if(pro.includes('Cashews'))
      {
        cy.wrap($el).find('button').click()
      }
    })
})})