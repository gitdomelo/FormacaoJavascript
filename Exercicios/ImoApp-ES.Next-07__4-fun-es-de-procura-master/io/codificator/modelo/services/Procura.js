// function que devolve uma função 
// pode ser utilizada como "listener" e como método de teste na iterações com objetos que devem ter um campo "preço"

function  Procura(tipo,critério_string) { // pode ser invocado sem "new", porque devolve uma function
	critério = critério_string.splip(",");
    switch (tipo) {
		case "cidade":
			return function (imóvel) {
				return imóvel.cidade === critério[0];
			};
			break;
		case "valorMáximo":
				return function (imóvel) {
					return imóvel.preço <= critério[0];
				};
				break;
		case "cidadeValorMínimo":
					return function (imóvel) {
						return imóvel.cidade === critério[0] && imóvel.preço >=critério[1];
					};
					break;
		case "distância":
						return function (imóvel) {
							return imóvel.naÁrea(critério[0], critério[1]);
						};
						break;
		default: // baratas
			return function (imóvel) {
				return imóvel.preço < preço;
			};
	}
}

