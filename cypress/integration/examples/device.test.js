/*
Cypress is an end-to-end test where developers can set up, write, running and debugging tests,
Cypress involves therefore testing an application’s workflow from beginning to end 
*/
describe('My device test', () => {
    it('Visits the overview device page', () => {
        cy.visit('http://130.226.98.69:3000/login');
        cy.get('.action-register').click();
        cy.get('.action-login').click();
    
        // Get an email input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('fake@email.com');
            
        // Get an password input, type into it and verify that the value has been updated
        cy.get('.action-password')
        .type('Ming#1359');
        cy.get('.action-submit').click();
            
        // When you login a test will be conducted to check if the user got a cookie.
        cy.getCookie('auth').should('have.property','value','60acf473a59f68158d97b64d');
        cy.wait(5000);
    
        cy.visit('http://130.226.98.69:3000/devices');
        cy.wait(2000);
        cy.get('.add-device').click();
        cy.get('.name-input')
        .type('samsungtv');
    
        cy.get('.energy-consumption')
        .type('136');
            
        // This will enter the time interval for the device to turn on.
        cy.get('.time-00').click();
        cy.get('.time-02').click();
        cy.get('.time-04').click();
        cy.get('.time-05').click();
        cy.get('.time-07').click();
        cy.get('.time-11').click();
        cy.get('.time-13').click();
        cy.get('.time-17').click();
        cy.get('.time-18').click();
        cy.get('.time-21').click();
    
        cy.get('.submit-device').click();
        cy.wait(3000);
    
        // Returns to device page
        cy.visit('http://130.226.98.69:3000/devices');
    
        //cy.get('a[href*="devices/edit/608ab1934378f36adc8c60a6"]').click();
        // Edit device phase
        cy.get('.device-edit')
        //.eq(1)
        .click();
    
        cy.get('.name-input')
        .clear()
        .type('SamsungTVQLED');
    
        cy.get('.energy-consumption')
        .clear()
        .type('148');
        cy.get('.time-00').click();
        cy.get('.time-11').click();
        cy.get('.time-18').click();
    
        cy.get('.update-button').click();
    
        // Delete device phase
        cy.visit('http://130.226.98.69:3000/devices');
        cy.get('.delete-device')
        //.eq(1)
        .click();
    });

});