var Produto = require("../models/produtoModel");
/*
var get = function (req, res) {
	res.send("Exibindo a página principal...")
};
*/

var get = function (req, res) {

	Produto.find(function (err, produtos) {

		if (err) {
			res.status(500);
			res.send("Erro interno do servidor");
		}
		else {
			res.status(200);
			res.send(produtos);
		}
	});
};

var add = function (req, res) {

	var produto = new Produto(req.body);

	produto.save(function (err) {
		if (err) {
			res.status(500);
			res.send("Erro : falha ao incluir produto...");
		}
		else {
			res.status(201);
			res.send(produto);
		}
	})
};

module.exports = {
	add: add,
	get: get
};