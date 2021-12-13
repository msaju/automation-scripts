function weeklyEmailReport() {
    //Get Dashboard Data
    var dashboard = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dashboard");
    //get dashboard data
    const hdr = dashboard.getRange("B1").getValue();
    
      var ss = SpreadsheetApp.getActive();
      var sheet = ss.getSheetByName("History");
      var chart = sheet.getCharts()[0];

    const tblhdr = dashboard.getRange("B5:C5").getValues();
    const descr = tblhdr[0][0];
    const value = tblhdr[0][1];

    var dataGrid = dashboard.getRange(6, 2, 4, 2).getValues(); //loads the data in this range at the time
    var message = ""; //container to hold final email content
   
    var htmltemplate = HtmlService.createTemplateFromFile("chart");
    htmltemplate.hdr = hdr;
    htmltemplate.descr = descr;
    htmltemplate.value = value;
    htmltemplate.dataGrid = dataGrid;
    htmltemplate.url = ss.getUrl();
    
    const htmlemail = htmltemplate.evaluate().getContent();

     // Send Dashboard Email.
     var emailRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email").getRange("B2");
     var emailAddress = emailRange.getValue();
     var subject = 'Gluster Code Metrics Weekly Report ';
     var body = "";
     var options = {
       htmlBody: htmlemail,
       inlineImages: {
         imageKey: chart.getBlob()
       }
     };
    //console.log(htmlemail);
    MailApp.sendEmail(emailAddress, subject,"", options);

       
 };
