var express = require("express");
var mongoose = require("mongoose");

var produtosRouter = require('./routes/produtosRoute');

var app = express();
var router = express.Router();

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

router.get('/', function (req, res) {
	res.send("Esta é página principal!!!");
});

router.get('/teste', function (req, res) {
	res.send("Esta é a página teste");
});

// Aplica as rotas em nossa aplicação
app.use('/', router);
app.use('/produtos', produtosRouter);