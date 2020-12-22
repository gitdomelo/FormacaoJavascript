import { Imóvel, Evento} from "../../../codificator.io.js";
// "stub" de io.codificator.modelo.services.ImoApp, qua tua de intermediário para comunicação através da rede
// deverá expor a mesma API que a ImoApp no servidor (nesta fase apenas procurar() )

export default class { // ImoApp

	terceiros = [];
	encontrados = [];

	procurar(predicado) {
		predicado = JSON.stringify(predicado);
		const comunicador = new XMLHttpRequest();
		comunicador.onload = this.avisar.bind(this);
		comunicador.open("POST", "/procurar");
		comunicador.send(predicado);
	}

	registar(terceiro) {
		this.terceiros.push(terceiro);
	}

	avisar(resposta) {
		const encontrados = JSON.parse(resposta.target.responseText); // JSON não tipifica os objetos, ...
		this.encontrados = [];
		encontrados.forEach(imóvel => this.encontrados.push(Imóvel.restituir(imóvel))); // ...por isso, restituir o tipo (necessário para poder invocar métodos)
		for (var i = 0; i < this.terceiros.length; i++)
			this.terceiros[i].avisar(new Evento(Evento.IMÓVEIS_ENCONTRADOS, this.encontrados));
	}

}