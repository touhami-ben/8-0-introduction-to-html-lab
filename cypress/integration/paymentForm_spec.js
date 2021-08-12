require( "@testing-library/cypress/add-commands")

describe("paymentForm", () => {
  it("should visit the payment form", () => {
    cy.visit("./paymentForm.html");
  });
  it("should have a main header", () => {
    cy.get("h1")
      .should("have.length", 1)
      .should(($h1) => {
        expect($h1.text().trim()).equal("Payment Form");
      });
  });

  it("should include a single form tag", () => {
    cy.get("form").should("have.length", 1).and("be.visible");
  });

  it("should include a single p tag explaining required fields", () => {
    cy.get("p")
      .should("have.length", 1)
      .and("have.text", "Required fields are marked by *");
  });

  it("should have the 2 sub headers", () => {
    cy.get("h2")
      .should("have.length", 2)
      .and((subs) => {
        expect(subs[0]).to.contain.text("Contact Information");
        expect(subs[1]).to.contain.text("Payment Information");
      });
  });

  it("should have 4 radio buttons", () => {
    cy.get("input[type='radio']").should("have.length", 4);
    cy.get("input[type='radio']").first().should("be.checked");
    cy.contains("Mx.");
    cy.contains("Mr.");
    cy.contains("Ms.");
    cy.contains("Mrs.");
  });
  it("should have an name input with Name as placeholder", () => {
    cy.get("input[placeholder='Name']").should("have.attr", "type", "text");
    cy.get("input[placeholder='Name']").should("have.attr", "required");
  });
  it("should have an email input with Email as placeholder", () => {
    cy.get("input[placeholder='Email']").should("have.attr", "type", "email");
    cy.get("input[placeholder='Email']").should("have.attr", "required");
  });

  it("should have a select with 4 different card types", () => {
      cy.get("select").children().should('have.length', 4)
          cy.get("option").should((ops) => {
            expect(ops[0]).to.contain.text("Visa");
            expect(ops[1]).to.contain.text("Mastercard");
            expect(ops[2]).to.contain.text("American Express");
            expect(ops[3]).to.contain.text("Discover");
          });

    cy.get("select").select("visa")
    cy.get("select").should("have.value","visa")

    cy.get("select").select("mastercard")
    cy.get("select").should("have.value", "mastercard");

    cy.get("select").select("americanExpress")
    cy.get("select").should("have.value", "americanExpress");

    cy.get("select").select("discover")
    cy.get("select").should("have.value", "discover");
  })

    it("should have an Credit Card input with Name as placeholder", () => {
      cy.get("input[placeholder='xxxx xxxx xxxx xxxx']").should("have.attr", "type", "tel");
      cy.get("input[placeholder='xxxx xxxx xxxx xxxx']").should(
        "have.attr",
        "required"
      );
    });
    it("should have an Expiration input with 'mm/yy' as placeholder", () => {
      cy.get("input[placeholder='mm/yy']").should("have.attr", "type", "text");
      cy.get("input[placeholder='mm/yy']").should("have.attr", "required");
    });

    it("should have a submit button", () => {
           cy.findByText("Submit Payment").should("exist");
           cy.get("form").within(() => {
             cy.findByText("Submit Payment").should("exist");
           });
           cy.findByText("Submit Payment").should("have.attr", "type", "submit")
           cy.get("form").submit()
    })
});
