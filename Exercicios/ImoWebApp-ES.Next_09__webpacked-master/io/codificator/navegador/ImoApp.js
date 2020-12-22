import { Imóvel, Evento, Predicado } from "../../../codificator.io.js";
// "stub" de io.codificator.modelo.services.ImoApp, que atua de intermediário para comunicação através da rede
// deverá expor a mesma API que a ImoApp no servidor (nesta fase apenas procurar() )

export default class { // ImoApp

	constructor() {
		this.terceiros = []; // declarado fora do constructor, seriamdesconhecidos por webpack
		this.encontrados = [];
	}

	async procurar(predicado) {
		predicado = JSON.stringify(predicado);
		let resposta = await fetch("/procurar", {"method": "POST", "body": predicado}); // espera até receber resposta dos servidor
		resposta = await resposta.json(); // corpo lido como "stream" (por isso json() devolve Promise)
		this.encontrados = [];
		try {
			resposta.forEach(imóvel => this.encontrados.push(Imóvel.restituir(imóvel))); // restituir o tipo Imóvel (necessário para poder invocar métodos)
			this.avisar(new Evento(Evento.IMÓVEIS_ENCONTRADOS, this.encontrados));
		} catch (error) { // ao receber uma instância serializada da class Erro, forEach() não funcionará por "resposta" não ser um Array
			const predicado = Predicado.restituir(resposta.predicado);
			const compor = (strings, predicado) => { // tag function (dá mais controle sobre templates ES.Next)
				const cidade = predicado.cidade ? ` em ${predicado.cidade}` : "";
				const preço = predicado.preço ? ` pelo valor ${predicado.inferior ? "inferior" : "superior"} a ${predicado.preço}` : "";
				return resposta.mensagem + cidade + preço;
			};
			this.avisar(new Evento(Evento.SEM_IMÓVEIS, compor`${predicado}`)); // pode conter mais argumentos (também strings normais), que serão disponibilizados no array "strings"
		}

	}

	registar(terceiro) {
		this.terceiros.push(terceiro);
	}

	avisar(evento) {
		for (var i = 0; i < this.terceiros.length; i++)
			this.terceiros[i].avisar(evento);
	}

}