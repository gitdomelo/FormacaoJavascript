class Imóvel {

	constructor(cidade, coordenadasX, coordenadasY, preço) {
		this.cidade = cidade;
		this.coordenadas = new Coordenadas(coordenadasX, coordenadasY);
		this.preço = preço;
	}

	criarTR() {
		var linha = document.createElement("tr");
		var celula;
		for (var membro in this) {
			if (this[membro] === undefined || this[membro] instanceof Function)
				continue;
			celula = document.createElement("td");
			celula.innerHTML = this[membro];
			linha.appendChild(celula);
		}
		return linha;
	}

}

