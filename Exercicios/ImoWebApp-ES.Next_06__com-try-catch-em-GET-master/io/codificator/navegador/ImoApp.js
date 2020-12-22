import {Imóvel, Evento} from "../../../codificator.io.js";
// "stub" de io.codificator.modelo.services.ImoApp, que atua de intermediário para comunicação através da rede
// deverá expor a mesma API que a ImoApp no servidor (nesta fase apenas procurar() )

export default class { // ImoApp

	terceiros = [];
	encontrados = [];

	async procurar(predicado) {
		predicado = JSON.stringify(predicado);
		let resposta = await fetch("/procurar", {"method": "POST", "body": predicado}); // espera até receber resposta dos servidor
		const encontrados = await resposta.json(); // corpo lido como "stream" (por isso json() devolve Promise)
		this.encontrados = [];
		encontrados.forEach(imóvel => this.encontrados.push(Imóvel.restituir(imóvel))); // Restituir o tipo (necessário para poder invocar métodos)
		this.avisar();
	}

	registar(terceiro) {
		this.terceiros.push(terceiro);
	}

	avisar() {
		for (var i = 0; i < this.terceiros.length; i++)
			this.terceiros[i].avisar(new Evento(Evento.IMÓVEIS_ENCONTRADOS, this.encontrados));
	}

}