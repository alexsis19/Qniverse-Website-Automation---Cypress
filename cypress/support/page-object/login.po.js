class Login {
  Captialselector(){
    return cy.get(".select2-selection__placeholder").should("exist").should("be.visible");
  }
  CapitalTextBox(){
    return cy.get("input[role='textbox']").should("exist").should("be.visible")
  }
  CapitalSelect(){
    return cy.get("li:nth-child(1)").should("exist").should("be.visible")
  }
  Username() {
    return cy.get("#username").should("exist").should("be.visible");
  }
  Password() {
    return cy.get("#password").should("exist").should("be.visible");
  }
  LoginBtn() {
    return cy.get("button[type='submit']").should("exist").should("be.visible");
  }
  LoginResponseCode(){
    return cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  }

}

export default Login;
