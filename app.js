var express = require("express");
var mongoose = require("mongoose");

var app = express();

var url = "mongodb+srv://jdfssobrinho:justice87@produtosdb.yq3w2.mongodb.net/?retryWrites=true&w=majority&appName=produtosdb"

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
	console.log("Conectado ao banco de dados produtosdb MongoDB.");
})

mongoose.connect(url);

app.listen(5000, function () {
	console.log("Servidor escutando na porta 5000");
});

app.get('/', function (req, res) {
	res.send("Bem vindo ao Express!");
});

app.get('/teste', function (req, res) {
	res.send("Respondento a solicitação em /teste");
})