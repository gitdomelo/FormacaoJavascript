class Evento {

	constructor(tipo, carga) {
		this.tipo = tipo;
		this.carga = carga;
	}

}

// enum
Evento.IMÓVEIS_ENCONTRADOS = {
	toString: function () {
		return "IMÓVEIS_ENCONTRADOS";
	}
};

Evento.IMÓVEL_NOVO = {
	toString: function () {
		return "IMÓVEL_NOVO";
	}
};
