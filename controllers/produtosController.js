var Produto = require("../models/produtoModel");
/*
var get = function (req, res) {
	res.send("Exibindo a página principal...")
};
*/

var get = function (req, res) {

	Produto.find()
		.then(function (produtos) {
			res.status(200);
			res.send(produtos);
		})
		.catch(function (err) {
			res.status(500);
			res.send("Erro interno do servidor");
		});

};

var getById = function (req, res) {

	var id = req.params.id;

	Produto.findById(id)
		.then(function (produto) {
			res.status(200);
			res.send(produto);
		})
		.catch(function (err) {
			res.status(404);
			res.send("Produto não encontrado...");
		});
};

var add = function (req, res) {

	var produto = new Produto(req.body);

	produto.save()
		.then(() => {
			res.status(201);
			res.send(produto);
		})
		.catch(function (err) {
			res.status(500);
			res.send("Erro : falha ao incluir produto...");
		});
};

module.exports = {
	add: add,
	get: get,
	getById: getById
};