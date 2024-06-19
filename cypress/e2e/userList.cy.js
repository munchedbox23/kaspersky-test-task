describe("checking the functionality of the user list", () => {
  beforeEach(() => {
    cy.intercept('GET', '/users', {
      fixture: 'users.json'
    }).as('getUsers'); 
    cy.visit("/users-list").viewport(1920, 1080);
  });

  it("should render users correctly", () => {
    cy.contains("Отображение");
  });
});
