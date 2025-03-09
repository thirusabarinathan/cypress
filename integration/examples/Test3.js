//cypress - Spec - any test case in javascript is called as Spec file
///<reference types = "Cypress" />

describe('My First Test suite', function()
{
it('My First test case', function()
{
//Open the URL
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
})

})