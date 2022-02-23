function parseEmailDataToSpreadsheet() {
  // Get the active spreadsheet and make sure the first
  // sheet is the active one
  var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

   // Get out labels by name
  var label_perf = GmailApp.getUserLabelByName("ibm-perf");
 
  // The threads currently assigned to the 'ibm-perf' label
  var threads = label_perf.getThreads();
 
  // Process each one in turn, assuming there's only a single
  // message in each thread
  // Log the time zone of the script.
    var timeZone = Session.getScriptTimeZone();
    Logger.log(timeZone);

  for (var t in threads) {
    var thread = threads[t];
    //Logger.log(t);

    //check only unread threads
    if(thread.isUnread()){
      // Get the attachments of the latest mail in the thread.
    var attachments = thread.getMessages()[0].getAttachments()[0];
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("small-file");
    var lastRow = sheet.getLastRow();
    
    //Logger.log(attachments);
    var csvData = Utilities.parseCsv(attachments.getDataAsString(), ",");
    
    Logger.log(csvData);
    sheet.getRange(lastRow +1, 1, csvData.length, csvData[0].length).setValues(csvData);
    
    //This is a hack to avoid addind baseline data from the csv into spread sheet
    lastRow = sheet.getLastRow();
    sheet.deleteRow(lastRow);
    // There is a problem with date parsing, its not happening with mm/dd/yyyy format
    // hence inserting the date manually
    var dateCell = sheet.getRange(lastRow-1,1);
    //var date = new Date().toLocaleDateString();
   // var date = new Date();
    var date = thread.getMessages()[0].getDate();
    Logger.log(date);
    dateCell.setValue(date);
    
       
    //mark thread as done to avoid any duplicate entries in future runs
    thread.markRead();
    
   
    }
    
   
  }
}
