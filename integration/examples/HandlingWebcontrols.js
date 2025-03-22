//cypress - Spec - any test case in javascript is called as Spec file
///<reference types = "Cypress" />

describe('My First Test suite', function()
{
it('My First test case', function()
{
//Open the URL
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//select the checkbox and verify if it is checkd
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//unselct the checkbox and verify if it is unselected
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//select multiple checkboxes 
cy.get('input[type="checkbox"]').check(['option2','option3'])
//select the  static drop down
cy.get('select').select('option2').should('have.value','option2')
//select dynamic dropdownlist
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($e1, index, $list) =>
{
    if($e1.text()==="India")
    {
        $e1.click()
    }

})

//chekc for visible and not visible texts

cy.get('#autocomplete').should('have.value','India')
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


//handle radio buttons is same as check box

cy.get('[value="radio2"]').check().should('be.checked')

})
})
