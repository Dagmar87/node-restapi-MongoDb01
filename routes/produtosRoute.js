var express = require("express");
var produtosRouter = express.Router();

var produtosController = require("../controllers/produtosController");

/*
produtosRouter.route('').get(function (req, res) {
	res.send("Exibindo a página principal...");
});
*/

produtosRouter.route('')
	.get(produtosController.get)
	.post(produtosController.add);

module.exports = produtosRouter;