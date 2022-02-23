function main_emailDataToSpreadsheet() {
  // Get the active spreadsheet and make sure the first
  // sheet is the active one
  var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Process the pending emails
  processPerf_(activeSheet);
  trim_val();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName("perf-data");
   
  var i = 2;
  for(var k=0;k<11;k++){
   s.insertColumns(i,3);
   i= i+4;
  }
  var j = s.getLastColumn();
  s.deleteColumn(j);
  j = s.getLastColumn();

k = 1;
var r = s.getRange(1,1);
var l = s.getLastRow();
for (m=0; m < l; m++){
  k = 1;
  for (i=0; i< j; i++){
      r = s.getRange(m+1,k);
      r.splitTextToColumns(",");
      k = k+ 4
    }
}
j = s.getLastColumn();
k = 4;
  for (i=0; i< j; i++){
     s.deleteColumn(k);
     k = k+ 3;
  }

  //s.insertColumns(7,4);

  
  
  
};

function processPerf_(sheet) {

  // Get out labels by name
  var label_perf = GmailApp.getUserLabelByName("perf-report");
  
  // The threads currently assigned to the 'perf' label
  var threads = label_perf.getThreads();
  
  // Process each one in turn, assuming there's only a single
  // message in each thread
  for (var t in threads) {
    var thread = threads[t];

    // Gets the message body
    var message = thread.getMessages()[0].getPlainBody();
    //var test = thread.getMessages()[0].getBody();
   // Logger.log(test);

    var date = thread.getMessages()[0].getDate().toLocaleDateString();
    
    //Logger.log(date);
    
    //Logger.log(message);
    // Process the messages here
    
    message = message.substr(message.search("create")); //Get the beginning of the important part + cut off the beginning

    //Logger.log(message);
    message = message.split("\n");

   
    //message = message.split(" ").join(",");
    //message = message.replace(/(^\s+|\s+$)/g,' ');
    //message = message.toString().replace(/\s+/g, " ").trim();
    //Logger.log(message);
   
    //message = message.concat(message,date);
    //Logger.log(message);
    //message.forEach(row => row.unshift(date));
    Logger.log(message);
    //sheet.appendRow(message);

    
  }
}

function trim_val() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName("perf-data");
  var r = s.getDataRange();

  var v = r.getValues();
  
  for(var k=0;k<v.length;k++)
    for(var j=0;j<v[0].length;j++){
      v[k][j]=v[k][j].toString().replace(/\s+/g, " ").trim();
      v[k][j]=v[k][j].toString().split(" ").join(", ");
          
      
    }
     // r.splitTextToColumns(",");
     //r.splitTextToColumns();
      r.setValues(v);

  
};
