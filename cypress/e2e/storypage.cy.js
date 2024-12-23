import Story from "../support/page-object/story.po"
import GeneralElement from "../support/page-object/general.po";
describe("Story Module", () => {
    const story = new Story();
    const general = new GeneralElement();
    beforeEach(() => {
      cy.visit("/");
      cy.reload();
      story.storybtn().click();
    });
    // afterEach(() => {
    //     cy.waitUntil(() => cy.url().should('include', '/'), { timeout: 10000, interval: 500 }); 
    //   });
    it("Valid story page - Unveil the curtains", () => {
        // story.storybtn().click();
        general.scrolltobottom();
        general.target();
        story.Unveilthecurtains().click();
    })
    it("Valid story page - employee management test scenario", () => {
        // story.storybtn().click();
        general.scrolltobottom();
        general.target();
        story.EmployeeEngagement().click();
    })
    it("Valid story page - Apply now", () => {
        // story.storybtn().click();
        general.scrolltobottom();
        general.target();
        story.Applynowbtn().click();
    })
    it("Valid story page - Apply now - See Open Positions", () => {
        // story.storybtn().click();
        general.scrolltobottom();
        general.target();
        story.Applynowbtn().click();
        story.SeeOpenPositionbtn();
    })
    it("Valid story page - Internship Programs", () => {
        // story.storybtn().click();
        general.scrolltobottom();
        general.target();
        story.Applynowbtn().click();
        story.InternshipProgramsbtn().click();
    })
})