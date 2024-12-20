import Story from "../support/page-object/story.po"
import GeneralElement from "../support/page-object/general.po";
describe("Story Module", () => {
    const story = new Story();
    const general = new GeneralElement();
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Valid story page - employee management test scenario", () => {
        story.storybtn().click();
        general.scrolltobottom();
        general.target();
        story.EmployeeEngagement().click();
    })
    it("Valid story page - Unveil the curtains", () => {
        story.storybtn().click();
        general.scrolltobottom();
        general.target();
        story.Unveilthecurtains().click();
    })
})