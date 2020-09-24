// function que devolve uma função 
// pode ser utilizada como "listener" e como método de teste na iterações com objetos que devem ter um campo "preço"

function  Procura(critério, preço) { // pode ser invocado sem "new", porque devolve uma function
	switch (critério) {
		case "caros":
			return function (imóvel) {
				return imóvel.preço >= preço;
			};
			break;
		default: // baratas
			return function (imóvel) {
				return imóvel.preço < preço;
			};
	}
}

