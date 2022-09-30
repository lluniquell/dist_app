function include(filename){
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function render(file,agrsObject){
  
  var tmp = HtmlService.createTemplateFromFile(file);
  if(agrsObject){
    var keys = Object.keys(agrsObject);
    
    keys.forEach(function(key){
       tmp[key] = agrsObject[key];
    });    
  }

  return tmp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
