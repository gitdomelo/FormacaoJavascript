// não para instanciar, porque devolve uma função (uma "closure")

function  Procura(critério, valor) { // pode ser invocado com ou sem "new" (mas não se fosse definido como "class")
	switch (critério) {
		case "caros":
			return function (imóvel) {
				return imóvel.preço >= valor;
			};
			break;
		default:
			return function (imóvel) {
				return imóvel.preço < valor;
			};
	}
}

