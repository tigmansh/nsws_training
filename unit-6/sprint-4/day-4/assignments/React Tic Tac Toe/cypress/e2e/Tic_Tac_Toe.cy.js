/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//   },
// ];

data.forEach(({ submission_link: url, id,  json_server_link: server_url}) => {
  describe("Tic Tac Toe Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("checking Basic Structure", function () {
      //for 2 marks
      cy.visit(url);
      cy.get(".square").eq(0).should("have.text", "")
      cy.get(".square").eq(1).should("have.text", "")
      cy.get(".square").eq(2).should("have.text", "")
      cy.get(".square").eq(3).should("have.text", "")
      cy.get(".square").eq(4).should("have.text", "")
      cy.get(".square").eq(5).should("have.text", "")
      cy.get(".square").eq(6).should("have.text", "")
      cy.get(".square").eq(7).should("have.text", "")
      cy.get(".square").eq(8).should("have.text", "")

      cy.get(".status").should("contain", "X")

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("check if X as winner works correctly", function () {
      cy.visit(url);

      cy.get(".square").eq(0).click()
      cy.get(".square").eq(1).click()
      cy.get(".square").eq(4).click()
      cy.get(".square").eq(2).click()
      cy.get(".square").eq(8).click()
  
      cy.get(".status").should("contain", "Winner")
      cy.get(".status").should("contain", "X")

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("check if O as winner works correctly", function () {
      cy.visit(url);

      cy.get(".square").eq(0).click()
      cy.get(".square").eq(3).click()
      cy.get(".square").eq(6).click()
      cy.get(".square").eq(4).click()
      cy.get(".square").eq(7).click()
      cy.get(".square").eq(5).click()
  
      cy.get(".status").should("contain", "Winner")
      cy.get(".status").should("contain", "O")

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("check if draw works correctly", function () {
      cy.visit(url);

      cy.get(".square").eq(0).click()
      cy.get(".square").eq(4).click()
      cy.get(".square").eq(8).click()
      cy.get(".square").eq(6).click()
      cy.get(".square").eq(2).click()
      cy.get(".square").eq(5).click()
      cy.get(".square").eq(3).click()
      cy.get(".square").eq(1).click()
      cy.get(".square").eq(7).click()
  
      cy.get(".status").should("contain", "Draw")

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("Toggling of player works correctly", () => {
      //1 marks
      cy.visit(url);

      cy.get(".status").should("contain", "Next player")
      cy.get(".status").should("contain", "X")

      cy.get(".square").eq(0).click()
      cy.get(".status").should("contain", "Next player")
      cy.get(".status").should("contain", "O")

      cy.get(".square").eq(4).click()
      cy.get(".status").should("contain", "Next player")
      cy.get(".status").should("contain", "X")

      cy.get(".square").eq(8).click()
      cy.get(".status").should("contain", "Next player")
      cy.get(".status").should("contain", "O")

      cy.then(() => {
        acc_score += 2;
      })
    });


    it("check if click is not allowed on filled square", () => {
      //1 marks
      cy.visit(url);

      cy.get(".square").eq(0).click()
      cy.get(".square").eq(0).should("have.text", "X")

      cy.get(".square").eq(0).click()
      cy.get(".square").eq(0).should("have.text", "X")

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("check if click is not allowed after win", () => {
      //1 marks
      cy.visit(url);

      cy.get(".square").eq(0).click()
      cy.get(".square").eq(1).click()
      cy.get(".square").eq(4).click()
      cy.get(".square").eq(2).click()
      cy.get(".square").eq(8).click()


      cy.get(".square").eq(5).click()
      cy.get(".square").eq(5).should("have.text", "")

      cy.then(() => {
        acc_score += 2;
      })
    });

    it("check if click is not allowed after draw", () => {
      //1 marks
      cy.visit(url);

      cy.get(".square").eq(0).click()
      cy.get(".square").eq(4).click()
      cy.get(".square").eq(8).click()
      cy.get(".square").eq(6).click()
      cy.get(".square").eq(2).click()
      cy.get(".square").eq(5).click()
      cy.get(".square").eq(3).click()
      cy.get(".square").eq(1).click()
      cy.get(".square").eq(7).click()


      cy.get(".square").eq(0).click()  
      cy.get(".square").eq(0).should("have.text", "X")

      cy.then(() => {
        acc_score += 2;
      })
    });


    it("Restart button working as per the expectation",()=>{
      cy.visit(url);
      cy.get(".square").eq(0).click()
      cy.get(".square").eq(4).click()
      cy.get(".square").eq(8).click()      
      cy.get(".square").eq(0).should("have.text", "X")
      cy.get(".square").eq(4).should("have.text", "O")
      cy.get(".square").eq(8).should("have.text", "X")
      cy.get(".restart button").click();
      cy.get(".square").eq(0).should("have.text", "")
      cy.get(".square").eq(1).should("have.text", "")
      cy.get(".square").eq(2).should("have.text", "")
      cy.get(".square").eq(3).should("have.text", "")
      cy.get(".square").eq(4).should("have.text", "")
      cy.get(".square").eq(5).should("have.text", "")
      cy.get(".square").eq(6).should("have.text", "")
      cy.get(".square").eq(7).should("have.text", "")
      cy.get(".square").eq(8).should("have.text", "")
      cy.get(".status").should("contain", "Next player")
      cy.get(".status").should("contain", "X")
      cy.then(() => {
        acc_score += 3;
      })
    })

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