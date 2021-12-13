function recordHistory() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Dashboard");
  var source = sheet.getRange("C6");
  var values = source.getValues();
  values[0][0] = new Date().toLocaleDateString();
  var sheet1 = ss.getSheetByName("History");
  //Set date
  sheet1.appendRow(values[0]);
  //var source = sheet.getRange("A2:E2");
  var values = source.getValues();
  var lastRow = sheet1.getLastRow();
  var lastColumn = 1;
  var lastCell = sheet1.getRange(lastRow, lastColumn +1);
  //Set Clang
  lastCell.setValue(values);
 
 //Set Coverity
  var source = sheet.getRange("C7:D7");
  var values = source.getValues();
  var lastRow = sheet1.getLastRow();
  var lastColumn = 2;
  var lastCell = sheet1.getRange(lastRow, lastColumn +1);
  lastCell.setValue(values);
 
  //Set Line Coverage
  var source = sheet.getRange("C8");
  var values = source.getValue().replace("%","");
  var lastRow = sheet1.getLastRow();
  var lastColumn = 3;
  var lastCell = sheet1.getRange(lastRow, lastColumn +1);
  lastCell.setValue(values);
 
 //Set Fn Cov
  var source = sheet.getRange("C9");
  var values = source.getValue().replace("%","");
  var lastRow = sheet1.getLastRow();
  var lastColumn = 4;
  var lastCell = sheet1.getRange(lastRow, lastColumn +1);
  lastCell.setValue(values);
  
    // Fetch the Coverity Data
  //var Coverity = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dashboard").getRange("C4"); 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Dashboard");
  var source = sheet.getRange("C7");//Coverity Warning Count
  var WarningCount = source.getValues();
  
  
  // var WarningCount = Coverity.getValue();
  // Check Coverity Threshold
  if (WarningCount > 19){
    // Fetch the email address
    var emailRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email").getRange("B2");
    // var ss = SpreadsheetApp.getActiveSpreadsheet();
    // var sheet = ss.getSheetByName("Email");
    // var source = sheet.getRange("B2");
    var emailAddress = emailRange.getValue();
   
    // Send Alert Email.
    var message = 'Current Threshold: 21. Coverity Warning Latest Count:  ' + WarningCount; // Second column
    var subject = 'Coverity Warning Alert ';
    MailApp.sendEmail(emailAddress, subject, message);
  }
    
    //Check CLANG Threshold
    var source = sheet.getRange("C6");//CLANG Warning Count
    var WarningCount = source.getValues();
    if (WarningCount > 87){
    // Fetch the email address
    var emailRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email").getRange("B2");
    // var ss = SpreadsheetApp.getActiveSpreadsheet();
    // var sheet = ss.getSheetByName("Email");
    // var source = sheet.getRange("B2");
    var emailAddress = emailRange.getValue();
   
    // Send Alert Email.
    var message = 'Current Threshold: 87. CLANG Warning Latest Count:  ' + WarningCount; // Second column
    var subject = 'CLANG Warning Alert ';
    console.log(message);
    //MailApp.sendEmail(emailAddress, subject, message);
    } 
            
 };
