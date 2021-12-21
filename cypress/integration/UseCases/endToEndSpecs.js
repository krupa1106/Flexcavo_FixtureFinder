describe("Fields Validation and form submission", function () {

    let url = "http://fixturefinder.herokuapp.com/";
  
    it.only("Title Verification", function () {
      cy.visit(url).title().should("eq", "Fixture Findr")
      const tDate= Cypress.moment().format('MMMM Do YYYY')
      cy.log(tDate)
    });

  
    it("Navigating to 16th of Dec 2021 for more fixtures", async () => {
      let txtCheck = false;
    //   while (!txtCheck) {
    //     let text = await cy.getText();
    //     if (!text?.includes("Thu 16th December 2021")) {
    //         cy.wait(3000)
    //           .contains("button", "Previous Day").debug().click();
    //       continue;
    //     }
    //     txtCheck = true;
    //   }
    //   cy.contains('span','26 fixtures')
    //     .should('be.visible')

        // I am clicking on the previous day untill I could see the test 16Th Dec so that I could have more fixtures to vaidate and write test cases.
        while (!txtCheck) {
            await cy.getText().then((val) => {
            if (!val?.includes("Thu 16th December 2021"))
                cy.wait(2000)
                  .contains("button", "Previous Day")
                  .click();
            else txtCheck = true;
            });
        }
        cy.contains("span", "26 fixtures").should("be.visible");
        
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
          .get('.de-txt')
          .click()
          .wait(2000)
          .get('.numberOfFixtures')
          .should('have.text','0 Spiele')
          .click()
          .get('[id="dropdownMenu1"]')
          .click()
          .get('.en-txt')
          .click()
          .wait(2000)
          .get('.numberOfFixtures')
          .should('have.text','5 Spiele')
    
    })

    it('Switching back to English and search for Real Madrid Match', function(){
      cy.get('[for="en_loc"]')
        .click()
        .get('[id="dropdownMenu1"]')
        .click()
        .wait(1000)
        .get('.all-txt')
        .click()
        .get('.team-filter')
        .clear()
        .type('real madrid')
        .wait(1000)
        .get('table')
        .contains('strong', 'Real Madrid')
        // Also Verifying only 1 fixture is the result
        .get('.numberOfFixtures')
        .should('have.text','1 fixtures')

    })





});