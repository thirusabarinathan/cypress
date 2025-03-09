//cypress - Spec - any test case in javascript is called as Spec file
///<reference types = "Cypress" />

describe('My First Test suite', function()
{
it('My First test case', function()
{
//Open the URL
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
//search for  the web element and tupe the words
cy.get('.search-keyword').type('Ca')
//wait for the elements to load
cy.wait(2000)
//writing the assertion conditions  for length
cy.get('.product:visible').should('have.length',4)
//Parent childchaining
cy.get('.products').find('.product').should('have.length',4)  
//to  get the desired product using index
cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
//to get a targeted product wit their name
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el, index, $list) => {
    const textVeg = $el.find('h4.product-name').text()
   if(textVeg.includes('Cashews'))
   {
    cy.wrap($el).find('button').click()
   }
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
})
})