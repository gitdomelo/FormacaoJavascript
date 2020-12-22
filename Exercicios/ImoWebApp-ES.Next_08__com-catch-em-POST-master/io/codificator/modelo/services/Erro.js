// class que permite enviar erros na rede (a class global "Error" não contém nada quando serializada)

export default class { // Erro

	mensagem;
	predicado;

	constructor(mensagem, predicado) {
		this.mensagem = mensagem;
		this.predicado = predicado;
	}

}