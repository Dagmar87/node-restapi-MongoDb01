var express = require("express");
var mongoose = require("mongoose");

var app = express();

var url = "mongodb+srv://usuario:senha>@produtosdb.yq3w2.mongodb.net/"

var db = mongoose.connection;

app.get("/", function (req, res) {
	res.send("Conectado ao banco de dados produtosdb do MongoDB.");
});

mongoose.connect(url);

app.listen(5000, function () {
	console.log("Servidor escutando na porta 5000");
});
