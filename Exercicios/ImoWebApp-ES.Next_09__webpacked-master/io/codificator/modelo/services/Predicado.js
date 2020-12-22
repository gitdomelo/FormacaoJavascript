// Incorpora (1) valores e (2) arrow functions ("lambdas")
// Valores: utilizado aquando de envio (p.ex. pela rede)
// Lambda: utilizada aquando de p.ex. filtragem em coleções (no servidor)

export default class Predicado {

	/*
	 cidade;
	 preço;
	 inferior;
	 lambda; // apenas utilizado no servidor
	 */

	constructor(critérios) {
		var [cidade, preço, inferior] = critérios;
		preço = parseInt(preço);
		inferior = inferior !== "" ? JSON.parse(inferior) : true; // default: inferior===true
		this.lambda = imóvel =>
			(Boolean(cidade) ? imóvel.cidade === cidade : true) &&
					  (Boolean(preço) ? (inferior ? imóvel.preço < preço : imóvel.preço >= preço) : true);
		this.cidade = cidade; // necessários para JSON.stringify()
		this.preço = preço;
		this.inferior = inferior;
	}

	toString() {
		return this.constructor.name + `{${this.cidade}, ${this.preço}, ${this.inferior ? "inferior" : "superior"}}`;
	}

}

Predicado.restituir = objeto => new Predicado(Object.values(objeto));