
// não para instanciar, porque devolve uma função (uma "closure")
export default function Procura(critério, preço) { // pode ser invocado com ou sem "new" (mas não se fosse definido como "class")
	switch (critério) {
		case "caros":
			return function (imóvel) {
				return imóvel.preço >= preço;
			};
			break;
		default:
			return function (imóvel) {
				return imóvel.preço < preço;
			};
	}
};

