function init(){
    var text = function makePhrases(){
      var words1 = ["Paulaner-Paulaner", 
      "OeTTINGER", 
      "Flensburger",
      "Grotwerg",
      "Hacker-Pschorr", 
      "Kaltenberg", 
      "Krombacher",  
      "Allgauer", 
      "Erdinger", 
      "Franziskaner"];
       var rand1 = Math.floor(Math.random() * words1.length);
      var phrase = words1[rand1];
      return phrase;
    }
    document.getElementById('generate').onclick = 
   function(){ document.getElementById('text').innerHTML = text(); };
  }
  window.onload = init;
  
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(8289);

console.log('Сервер стартовал!');