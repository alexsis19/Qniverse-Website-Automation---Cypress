class Story{
    storybtn(){
       return cy.get("a[href='https://qniverse.co.uk/story/']").first().should('exist').should('be.visible');
    }
    EmployeeEngagement(){
       return cy.get("a[class='btn btn-primary']").eq(2).should('exist').should('be.visible');
    }
    Unveilthecurtains(){
        return cy.get("a[class='btn btn-primary']").eq(3).should('exist').should('be.visible');
    }
    Applynowbtn(){
        return cy.xpath("//a[contains(.,'Apply Now')]").should('exist').should('be.visible');
    }
    SeeOpenPositionbtn(){
        return cy.xpath("//span[contains(.,'See Open Positions')]").first().should('exist').should('be.visible');
    }
    InternshipProgramsbtn(){
        return cy.xpath("//span[contains(.,'Internship Programs')]").first().should('exist').should('be.visible');
    }
}
export default Story
