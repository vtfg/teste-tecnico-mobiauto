describe("Search", () => {
  it("should be able to visit the page", () => {
    cy.visit("/")

    cy.get("h1")
      .first()
      .should("have.text", "Consulte o valor de um veículo de forma gratuita.")

    cy.get("button").contains("Consultar preço").should("be.disabled")
  })

  it("should be able to select a car brand", () => {
    cy.visit("/")

    cy.get("input#brand").click()

    cy.get("li#brand-option-0").click()

    cy.get("input#brand").should("have.value", "Acura")
  })

  it("should be able to select a brand model", () => {
    cy.visit("/")

    cy.get("input#brand").click()

    cy.get("li#brand-option-0").click()

    cy.get("input#brand").should("have.value", "Acura")

    cy.get("input#model").click()

    cy.get("li#model-option-0").click()

    cy.get("input#model").should("have.value", "Integra GS 1.8")
  })

  it("should be able to select a model year", () => {
    cy.visit("/")

    cy.get("input#brand").click()

    cy.get("li#brand-option-0").click()

    cy.get("input#brand").should("have.value", "Acura")

    cy.get("input#model").click()

    cy.get("li#model-option-0").click()

    cy.get("input#model").should("have.value", "Integra GS 1.8")

    cy.get("input#year").click()

    cy.get("li#year-option-0").click()

    cy.get("input#year").should("have.value", "1992 Gasolina")

    cy.get("button").contains("Consultar preço").should("be.not.disabled")
  })

  it("should be able to search the selected car's price", () => {
    cy.visit("/")

    cy.get("input#brand").click()

    cy.get("li#brand-option-0").click()

    cy.get("input#brand").should("have.value", "Acura")

    cy.get("input#model").click()

    cy.get("li#model-option-0").click()

    cy.get("input#model").should("have.value", "Integra GS 1.8")

    cy.get("input#year").click()

    cy.get("li#year-option-0").click()

    cy.get("input#year").should("have.value", "1992 Gasolina")

    cy.get("button").contains("Consultar preço").should("be.not.disabled")

    cy.get("button").contains("Consultar preço").click()

    cy.location("pathname").should("eq", "/price")
  })
})
