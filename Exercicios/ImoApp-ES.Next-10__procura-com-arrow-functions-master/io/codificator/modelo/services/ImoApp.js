import { Cliente, Imóvel, Coordenadas, Evento } from "../../../../codificator.io.js";
//
export default class ImoApp {

	constructor() {
		this.imóveis = [];
		this.clientes = new Map();
		this.terceiros = []; // business event listeners
		this.encontrados; // resultados de procuras
	}

	simular() {
		var clientes = [
			new Cliente("António Tugerres", "to.tugerres@un.org"),
			new Cliente("José Sacrista", "tozesa@prisão.pt"),
			new Cliente("Bruno de Alcocho", "bruno.queimado@alcochete.pt"),
			new Cliente("Ricardo Soldado", "bem.salgado@bahamas.island")
		];
		clientes[0].alocar("Main Street", 258, 15250, 560, "USA");
		clientes[1].alocar("Alameda dos Oceanos", 123, 1600, 360, "Portugal");
		for (let cliente of clientes)
			this.inscrever(cliente);
		var imóveis = [
			new Imóvel("Lisboa", 38.705387, -9.160616, 125000),
			new Imóvel("Lisboa", 38.855762, -9.001155, 85000),
			new Imóvel("Lisboa", 38.694806, -9.105048, 330000),
			new Imóvel("Lisboa", 38.865603, -9.120464, 275000),
			new Imóvel("Porto", 41.155945, -8.629679, 490000),
			new Imóvel("Porto", 41.160283, -8.628531, 1690000),
			new Imóvel("Porto", 41.157779, -8.622000, 68000),
			new Imóvel("Faro", 37.037936, -7.883609, 99000)
		];
		for (var i = 0; i < imóveis.length; i++)
			this.gerir(imóveis[i]);
		return this; // permite chaining
	}

	inscrever(cliente) {
		this.clientes.set(cliente.email, cliente);
	}

	gerir(imóvel) {
		this.imóveis.push(imóvel);
	}

	procurar(procura) {
		this.encontrados = []; // reset
		for (const imóvel of this.imóveis)
			if (procura(imóvel))
				this.encontrados.push(imóvel)
		this.avisar(new Evento(Evento.IMÓVEIS_ENCONTRADOS, this.encontrados));
	}

	procurarPorDistância(evento) { // este método de procura é sempre definido separadamente, pro ser demasiado diferente do anterior
		evento.stopPropagation();
		this.encontrados = []; // reset
		// parse value
		var [km, x, y] = evento.currentTarget.value.split(","); // splitting a String into a destructured array
		var centro = new Coordenadas(x, y);
		for (const imóvel of this.imóveis)
			if (imóvel.naÁrea(centro, km))
				this.encontrados.push(imóvel);
		this.avisar(new Evento(Evento.IMÓVEIS_ENCONTRADOS, this.encontrados));
	}

	avisar(evento) {
		for (var i = 0; i < this.terceiros.length; i++)
			this.terceiros[i].avisar(evento);
	}

	registar(terceiro) { // preferi registo de objetos em vez de registo de funções)
		this.terceiros.push(terceiro);
	}

};


