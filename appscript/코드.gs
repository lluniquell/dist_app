var url = "https://docs.google.com/spreadsheets/d/1b-GnNe4Ry5q1mzQgDA7-5Vy4GWKORwVNJwQMnRCU3K0/edit?usp=sharing";

function doGet(e) {
  
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var palletList = ws.getRange(2,1,ws.getLastRow()-1,1).getValues();
  var userList = ws.getRange(2,3,ws.getLastRow()-2,1).getValues();
  
  var palletListArray = palletList.map(function(r){ return '<option>' + r[0] + '</option>'; }).join('');
  var userListArray = userList.map(function(r){ return '<option>' + r[0] + '</option>'; }).join('');
  
  return render("page", {palletList: palletListArray, userList: userListArray });


  
}

 




