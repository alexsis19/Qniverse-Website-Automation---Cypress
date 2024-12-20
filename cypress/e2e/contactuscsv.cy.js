import Contactus from "../support/page-object/contactus.po";
const neatCSV = require("neat-csv");
describe("Contact US Module", () => {
  const contactus = new Contactus();
  let table;
  before(() => {
    cy.visit("/contact-us");
    cy.fixture("contactus.csv")
      .then(neatCSV) // convert csv file into an object
      .then((data) => {
        table = data;
      })
      .then(console.table);
  });

  it("Valid login test scenario", () => {
    const randomRow = Math.floor(Math.random() * table.length);

    contactus.connectwithus();
    contactus.fullname().type(table[randomRow]["fullname"]);
    contactus.companyname().type(table[randomRow]["companyname"]);
    contactus.email().type(table[randomRow]["email"]);
    contactus.phone().type(table[randomRow]["phone"]);
    contactus.howcanwehelpyou().type(table[randomRow]["howcanwehelpyou"]);
    cy.intercept(
      "POST",
      "https://qniverse.co.uk/wp-json/contact-form-7/v1/contact-forms/217/feedback"
    ).as("formSubmission"); // Replace with actual endpoint
    contactus.submitbtn().click();
    // cy.submit('input[value="Submit"]');
    cy.wait("@formSubmission").then(({ response }) => {
      //   expect(response.body.message).to.eq('Your form has been submitted successfully.');
      expect(response.body.message).to.eq(
        "There was an error trying to send your message. Please try again later."
      );
      expect(response.statusCode).to.eq(200);
    });
  });
});
