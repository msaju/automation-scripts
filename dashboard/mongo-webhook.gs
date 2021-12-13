function insertToMongDB(){

var sh1 =  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("History");
var rng =  sh1.getDataRange().getValues();
//Get total rows
var numRow = sh1.getDataRange().getNumRows();
var numCol = sh1.getDataRange().getNumColumns();


Logger.log(numRow);
Logger.log(numCol);
//Logger.log(lastRow);
//Logger.log(rng[0][0]);
//for(var i=numRow-1;i<numRow; i++){
//Row index starts from 0, so get the last updated row by doing -1
  for(var i=numRow-1;i<numRow; i++){
      var formData = {
        'date': rng[i][0],
        'Clang Scan': rng[i][1],
        'Coverity': rng[i][2],
        'Line Coverage': rng[i][3],
        'Function Coverage' : rng[i][4],
      }
       var params = {
      'method' : 'post',
      'payload': formData
      }
      Logger.log(params);
      Logger.log(i);
      var getId = UrlFetchApp.fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/app-code-metrics-vzmus/service/google-webhook/incoming_webhook/webhook0', params);

  }
}
