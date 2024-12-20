class Contactus{
contactusbtn(){
return cy.get("//a[contains(.,'Contact Us')]").should("exist").should("be.visible")}
connectwithus(){
return cy.get('select[name="talkabout"]')
.select("Let's talk about: Our Bug Prevention Program")
.should('have.value', "Let's talk about: Our Bug Prevention Program");}
fullname(){
return cy.get('input[name="your-name"]').should("exist").should("be.visible")}
companyname(){
return cy.get('input[name="your-comapny"]').should("exist").should("be.visible")}
email(){
return cy.get('input[name="your-email"]').should("exist").should("be.visible")}
phone(){
return cy.get('input[placeholder="Phone*"]').should("exist").should("be.visible")}
howcanwehelpyou(){
return cy.get('textarea[name="your-message"]').should("exist").should("be.visible")}
submitbtn(){
    return cy.get('input[value="Submit"]').should("exist").should("be.visible")}
}
export default Contactus