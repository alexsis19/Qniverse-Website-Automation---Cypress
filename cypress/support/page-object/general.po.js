class GeneralElement{
target(){
    cy.get("a[target='_blank']").invoke('removeAttr', 'target');
}
scrolltobottom(){
    cy.scrollTo('bottom');
}
scrolltotop(){
    cy.scrollTo('top');
}
}
export default GeneralElement