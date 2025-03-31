describe("Price", () => {
  it("should be able to see the car's price", () => {
    cy.visit("/price?brand=1&model=1&year=1992-1")

    cy.get("h1").first().should("have.text", "Acura Integra GS 1.8 1992")

    cy.get("h2").first().should("have.text", "R$ 11.148,00")
  })

  it("should redirect to home page if the car is not found", () => {
    cy.visit("/price?brand=1&model=1&year=1992-3")

    cy.location("pathname").should("eq", "/")

    cy.get(".MuiAlert-message").should(
      "have.text",
      "Carro não encontrado. Realize a pesquisa novamente.",
    )
  })
})
