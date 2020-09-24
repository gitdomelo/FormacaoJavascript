
export default class Coordenadas {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return "Coordenadas (" + this.x + ", " + this.y + ")";
	}

	naÁrea(coordenadas, distância) {
		var graus = distância * Coordenadas.km;
		return Math.abs(this.x - coordenadas.x) <= graus && Math.abs(this.y - coordenadas.y) <= graus;
	}

};

Coordenadas.km = 360 / 40000; // a quantos ° corresponde 1km (a circunferência da terra é .60°)

