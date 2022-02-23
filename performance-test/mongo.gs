function connectToMongDB(){

var sh1 =  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("small-file");
var rng =  sh1.getDataRange().getValues();
//Get total rows
var numRow = sh1.getDataRange().getNumRows();
var numCol = sh1.getDataRange().getNumColumns();


//Logger.log(numRow);
//Logger.log(numCol);
//Logger.log(lastRow);
//Logger.log(rng[0][0]);

//Row index starts from 0, so get the last updated row by doing -1
  for(var i=numRow-1;i<numRow; i++){
      var formData = {
        'date': rng[i][0],
        'create': rng[i][2],
        'ls-l': rng[i][4],
        'chmod': rng[i][6],
        'stat' : rng[i][8],
        'read' : rng[i][10],
        'append': rng[i][12],
        'rename': rng[i][14],
        'delete-renamed' : rng[i][16],
        'mkdir' : rng[i][18],
        'rmdir' : rng[i][20],
        'cleanup' : rng[i][22]
      }
       var params = {
      'method' : 'post',
      'payload': formData
      }
      Logger.log(params);
      Logger.log(i);
      var getId = UrlFetchApp.fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/perf-database-lfkak/service/googlesheet-service/incoming_webhook/webhook2', params);

 }

}
