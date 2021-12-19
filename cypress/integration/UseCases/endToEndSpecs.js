describe("Fields Validation and form submission", function(){
    let url = 'http://fixturefinder.herokuapp.com/'

    it('Title Verification', function(){
        cy
          .visit(url)
          .title().should('eq','Fixture Findr');
    })

    it("End to end testing", function(){
        
        //console.log(cy.getText())
        //cy.log(cy.getText())
        // while (getText) {
            let text = ''
            let getText = true
            cy.getText().then(val=>{
                text = val
                //console.log(val)
            })
            while(getText){
                console.log(text)
            
            if(text !== 'Thu 16th December 2021'){
                cy.contains('button', 'Previous Day').click()
                cy.getText().then(val=>{
                    text = val
                    console.log(val)
                })
                continue;


            }
            cy.log('out of if condition', text)
            getText = false
        }


        
            
        //         cy.log('in while loop')
        //         if (text !== 'Thu 16th December 2021') {
        //             cy.log('click previous day')

        //           cy.contains('button', 'Previous Day').click()
        //             text = cy.getText()
        //           continue;
        //         }
        //         cy.log('I am here')
        //         getText = false;
        

        //     // if(text==='Thu 16th December 2021'){
        //     //     cy.log('16th')
        //     // }

        //     // else {
        //     //             cy.log('inside 16th')
        //     //             cy.contains('button','Previous Day').click()
        //     //     }

            
        // }

        
        

        // if(cy.get(".date").invoke('text').should('have.text','Thu 16th December 2021')){
        //     cy.log('Not 16th')

        // }
        //     else {

        //         cy.contains('button','Previous Day').click()

        //     }

        })




})