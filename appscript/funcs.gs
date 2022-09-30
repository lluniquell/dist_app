function userClicked(rackInfo, locaCode){
  var ss = SpreadsheetApp.openByUrl(url);
  var hws = ss.getSheetByName("History");
  var dws = ss.getSheetByName("Data");
  var data = dws.getRange(2,1,1633,1).getValues();
  var date = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'Y M dd');

  
  var newdata = [rackInfo["location"],rackInfo["brandName"],
                  rackInfo["goodName"],rackInfo["innerQuantity"],
                  rackInfo["boxQuantity"],rackInfo["addQuantity"],
                  ,date,rackInfo["exDate"],
                 rackInfo["choosePallet"],rackInfo["moreInfo"],
                 rackInfo["workuser"],rackInfo["maxBox"]];


  hws.appendRow(newdata);
  
   var position = String([data]).indexOf(rackInfo["location"])/8;

   if(position > -1){
    
     var findloca1 = dws.getRange(position+2, 1, 1, 1); //파레트랙명
     findloca1.setValue([newdata[0]]);
     var findloca2 = dws.getRange(position+2, 2, 1, 1);   // 브랜드명
     findloca2.setValue([newdata[1]]);
     var findloca3 = dws.getRange(position+2, 3, 1, 1);   // 상품명
     findloca3.setValue([newdata[2]]);
     var findloca4 = dws.getRange(position+2, 4, 1, 1);   // 내품수량
     findloca4.setValue([newdata[3]]);
     var findloca5 = dws.getRange(position+2, 5, 1, 1);   // 박스수량
     findloca5.setValue([newdata[4]]);
     var findloca6 = dws.getRange(position+2, 6, 1, 1);   // 추가수량
     findloca6.setValue([newdata[5]]);
     // var findloca7 = dws.getRange(position+2, 7, 1, 1);   // 총수량 업데이트 안함
     // findloca7.setValue([newdata[6]);
     var findloca8 = dws.getRange(position+2, 8, 1, 1);   // 최종수정일
     findloca8.setValue([newdata[7]]);
     //findloca8.setNumberFormat('yyyy-mm-dd');
     var findloca9 = dws.getRange(position+2, 9, 1, 1);   // 유통기한
     findloca9.setValue([newdata[8]]);
     var findloca10 = dws.getRange(position+2, 10, 1, 1); // 파레트종류 
     findloca10.setValue([newdata[9]]);
     var findloca11 = dws.getRange(position+2, 11, 1, 1); // 비고
     findloca11.setValue([newdata[10]]);
     var findloca12 = dws.getRange(position+2, 12, 1, 1); // 작업자
     findloca12.setValue([newdata[11]]);
     var findloca13 = dws.getRange(position+2, 13, 1, 1); //최대사용율 업데이트 안함
     findloca13.setValue([newdata[12]]);
 
}  
}


function getload(locaCode){
  var ss = SpreadsheetApp.openByUrl(url);
  var dws = ss.getSheetByName("Data");
  var data = dws.getDataRange().getValues();
  
  var  locationList = data.map(function(r){ return r[0]; });
  var  brandName = data.map(function(r){ return r[1]; });
  var  goodName = data.map(function(r){ return r[2]; });
  var  innerQuantity = data.map(function(r){ return r[3]; });
  var  boxQuantity = data.map(function(r){ return r[4]; });
  var  addQuantity = data.map(function(r){ return r[5]; });
  var  totalQuatity = data.map(function(r){ return r[6]; });
  var  lastDay = data.map(function(r){ return r[7]; });
  var  exDate = data.map(function(r){ return r[8]; });
  var  choosePallet = data.map(function(r){ return r[9]; });
  var  moreInfo = data.map(function(r){ return r[10]; });
  var  workuser = data.map(function(r){ return r[11]; });
  var  maxBox = data.map(function(r){ return r[12]; });
  var  palletRate = data.map(function(r){ return r[13]; });

  var position = locationList.indexOf(locaCode);
  

    if(position > -1){
      
      var dataArray = [
        brandName[position],
        goodName[position],
        innerQuantity[position],
        boxQuantity[position],
        addQuantity[position],
        totalQuatity[position],
        lastDay[position],
        exDate[position],
        choosePallet[position],
        moreInfo[position],
        workuser[position],
        maxBox[position],
        palletRate[position]];

   
   return  dataArray
    
    }};
  
  

 
