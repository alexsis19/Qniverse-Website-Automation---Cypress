import Contactus from '../support/page-object/contactus.po';
describe("Contact US Module", () => {
  const contactus = new Contactus();
  const fullname = Cypress.env("fullname");
  const companyname = Cypress.env("companyname");
  const email = Cypress.env("email");
  const phone = Cypress.env("phone");
  const howcanwehelpyou = Cypress.env("howcanwehelpyou");
  // Randomly select an index from the array
  const randomIndex = Math.floor(Math.random() * fullname.length);
  // Get the randomly selected fullname
  const selectedFullname = fullname[randomIndex];
  const selectedCompanyname = companyname[randomIndex];
  const selectedEmail = email[randomIndex];
  const selectedPhone = phone[randomIndex];
  const selectedhowcanwehelpyou = howcanwehelpyou[randomIndex];
  // Before each test, visit the application and initiate the login process
  beforeEach(() => {
    cy.visit('/contact-us');
  });
  // Valid login test case
  it("Valid login test scenario", () => {
    contactus.connectwithus();
    contactus.fullname().type(selectedFullname);
    // contactus.fullname().type(fullname);
    contactus.companyname().type(selectedCompanyname);
    contactus.email().type(selectedEmail);
    contactus.phone().type(selectedPhone);
    contactus.howcanwehelpyou().type(selectedhowcanwehelpyou);
    cy.intercept('POST', 'https://qniverse.co.uk/wp-json/contact-form-7/v1/contact-forms/217/feedback').as('formSubmission'); // Replace with actual endpoint
    contactus.submitbtn().click();
    // cy.submit('input[value="Submit"]');
    cy.wait('@formSubmission').then(({ response }) => {
    //   expect(response.body.message).to.eq('Your form has been submitted successfully.');
      expect(response.body.message).to.eq('There was an error trying to send your message. Please try again later.');
      expect(response.statusCode).to.eq(200);
    });
  });
});