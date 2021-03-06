import { Coordenadas } from "../../../../codificator.io.js";

export default class Imóvel {

	constructor(cidade, coordenadasX, coordenadasY, preço) {
		this.cidade = cidade;
		this.coordenadas = new Coordenadas(coordenadasX, coordenadasY);
		this.preço = preço;
	}

	naÁrea(distância, coordenadas) {
		return this.coordenadas.naÁrea(distância, coordenadas);
	}

	criarTR() {
		var linha = document.createElement("tr");
		var celula;
		for (var campo in this) {
			if (this[campo] === undefined || this[campo] instanceof Function) continue;
			celula = document.createElement("td");
			celula.innerHTML = this[campo];
			linha.appendChild(celula);
		}
		return linha;
	}

	static restituir(objeto) { // necessário após ter recebido imóveis em formato JSON
		return new Imóvel(objeto.cidade, objeto.coordenadas.x, objeto.coordenadas.y, objeto.preço);
	}

};


