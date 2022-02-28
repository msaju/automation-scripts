function dailyReport() {
//Get Dashboard Data
    var dashboard = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DashBoard");
    //get dashboard data
    const hdr = dashboard.getRange("C2").getValue();
    
    const tblhdr = dashboard.getRange("C6:D6").getValues();
    const descr = tblhdr[0][0];
    const value = tblhdr[0][1];

    var dataGrid = dashboard.getRange(7, 3, 8, 2).getValues(); //loads the data in this range at the time
    var message = ""; //container to hold final email content
   
    const htmltemplate = HtmlService.createTemplateFromFile("email");
    htmltemplate.hdr = hdr;
    htmltemplate.descr = descr;
    htmltemplate.value = value;
    htmltemplate.dataGrid = dataGrid;
    
    const htmlemail = htmltemplate.evaluate().getContent();

    // Send Dashboard Email.
    // var emailRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email").getRange("B2");
    // var emailAddress = emailRange.getValue();
     var emailAddress = "sajmoham@redhat.com";
     var subject = 'Build Systems Daily Status Report ';
    //console.log(htmlemail);
    MailApp.sendEmail(emailAddress, subject,"", {htmlBody:htmlemail});



}
