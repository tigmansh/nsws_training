/* eslint-disable no-undef */

 import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      
    });

    it("should make GET request and render initial groceries data", () => {
      cy.intercept("GET", `**/groceries`).as("getGroceries");
      cy.visit(url);
      cy.wait("@getGroceries");
      cy.wait(500);
      cy.get(".grocery_data").children().its("length").should("eq", 15);

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should be able to filter the grocery data on frontend", () => {
      cy.intercept("GET", `**/groceries`).as("getGroceries");
      cy.visit(url);
      cy.wait("@getGroceries");     
      cy.get(".search_box").type("olive")
      cy.wait(500);
      cy.get(".grocery_data").children().its("length").should("eq", 1);

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should be able to filter the grocery data on frontend-2", () => {
      cy.intercept("GET", `**/groceries`).as("getGroceries");
      cy.visit(url);
      cy.wait("@getGroceries");

      cy.get(".search_box").type("h");
      cy.wait(500);
      cy.get(".grocery_data").children().its("length").should("eq", 2);

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should be able to show all data after the input box is cleared", () => {
      cy.intercept("GET", `**/groceries`).as("getGroceries");
      cy.visit(url);
      cy.wait("@getGroceries");

      cy.get(".search_box").type("h");
      cy.get(".search_box").clear();
      cy.wait(500);
      cy.get(".grocery_data").children().its("length").should("eq", 15);

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
