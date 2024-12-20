class Apps {
  NavLink() {
    return cy
      .get("#O365_MainLink_NavMenu")
      .should("exist")
      .should("be.visible");
  }
  AllAppsLink() {
    return cy
      .get("#allAppsLink")
      .should("exist")
      .should("be.visible")
      .then(function ($el) {
        const href = $el.attr("href");
        cy.visit(href, {
          force: true, // Open in the same tab
        });
      });
  }
}
export default Apps;
