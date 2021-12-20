describe("Fields Validation and form submission", function () {

    let url = "http://fixturefinder.herokuapp.com/";
  
    it("Title Verification", function () {
      cy.visit(url).title().should("eq", "Fixture Findr");
    });

  
    it("Navigating to 16th of Dec 2021 for more fixtures", async () => {
      let txtCheck = false;
      while (!txtCheck) {
        let text = await cy.getText();
        if (!text?.includes("Thu 16th December 2021")) {
            cy.wait(3000)
              .contains("button", "Previous Day").debug().click();
          continue;
        }
        txtCheck = true;
      }
      cy.contains('span','26 fixtures')
        .should('be.visible')
    });


    it("Verifying table Header in English", function () {
        cy.get('table')
          .contains('span','Competition')
          .get('table')
          .contains('span','Kick-Off')
          .get('table')
          .contains('span','Home Team')
          .get('table')
          .contains('span','Score')
          .get('table')
          .contains('span','Away Team')

      });

    it('Switching the Language to German and then Verifying the table headers', function() {

        cy.get('[for="de_loc"]')
          .click()
          .wait(2000)
          .get('table')
          .contains('span','Wettbewerb')
          .get('table')
          .contains('span','Anstoß')
          .get('table')
          .contains('span','Heim Mannschaft')
          .get('table')
          .contains('span','Ergebnis')
          .get('table')
          .contains('span','Auswärts Mannschaft')

    })
    
    it('Changing the country and validating the fixtures',function(){
        cy.get('[id="dropdownMenu1"]')
          .click()
          .wait(1000)
          .contains('span','Deutschland')
          .wait(2000)
          .contains('span','0 fixtures')
          .contains('span','England')
          .wait(2000)
          .contains('span','5 fixtures')   
    
    })




  });