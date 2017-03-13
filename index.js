var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("coucou!!!!");
})

app.listen(3001);
console.log("la magie c ici:" + 3001);
