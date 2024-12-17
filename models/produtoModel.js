var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var produtoModel = new Schema({
	nome: {
		type: String,
	},
	descricao: {
		type: String,
	},
	preco: {
		type: Number,
	},
	estoque: {
		type: Number,
	},
	ativo: {
		type: Boolean,
		default: true
	}
});

module.exports = mongoose.model("Produto", produtoModel);