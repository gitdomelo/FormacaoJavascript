function Imóvel(cidade, coordenadasX, coordenadasY, preço) {

	this.cidade = cidade;
	this.coordenadas = new Coordenadas(coordenadasX, coordenadasY);
	this.preço = preço;

}

Imóvel.prototype.criarTR = function () {
	var linha = document.createElement("tr");
	var celula;
	for (var campo in this) {
		if (this[campo] === undefined || this[campo] instanceof Function) continue;
		celula = document.createElement("td");
		celula.innerHTML = this[campo];
		linha.appendChild(celula);
	}
	return linha;
};
