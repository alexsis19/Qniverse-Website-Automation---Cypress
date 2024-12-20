class Homepage{
    EmployeeEngagement(){
        cy.get("(//a[@class='btn btn-primary'])[3]").should('exist').should('be.visible');
    }
}
export default Homepage