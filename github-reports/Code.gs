function startOfWeekReportGenerator() {
  
  //Read data from Source 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var srcSheet = ss.getSheetByName("last-week");
  var source = srcSheet.getDataRange();
  var values = source.getValues();
  var count = values.length;
    //Set date 
  values[0][0] = new Date().toLocaleDateString();
    //Set count
  values[0][1] = count;
    

  //Add data to History
  var destSheet = ss.getSheetByName("History");

  destSheet.appendRow(values[0]);
  
  var source = srcSheet.getDataRange();
  var values = source.getValues();
  var numRows = values.length;
    //Set date
  //destSheet.appendRow(numRows);
  
  
  var numCol = values[0].length;
  var lastRow = destSheet.getLastRow();
  var lastColumn = 3;// Date is already inserted
  var targetRange = destSheet.getRange(lastRow,lastColumn,numRows,numCol);
  
  targetRange.setValues(values);
  // resize for better readability
  destSheet.autoResizeColumn(1);
  destSheet.autoResizeColumn(2);
  destSheet.autoResizeColumn(3);

}
