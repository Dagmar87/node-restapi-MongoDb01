var express = require("express");
var produtosRouter = express.Router();

produtosRouter.route('').get(function (req, res) {
	res.send("Exibindo a página principal...");
});

module.exports = produtosRouter;