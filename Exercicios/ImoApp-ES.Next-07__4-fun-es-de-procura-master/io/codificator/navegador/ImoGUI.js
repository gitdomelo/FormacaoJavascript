import {  Evento, Coordenadas } from "../../../codificator.io.js";

export default class ImoGUI {

	constructor(imoApp) {
		this.imoApp = imoApp;
		this.imoApp.registar(this); // registar-se para ser avisado aquando de alterações na imobiliária
		this.imóveis = document.getElementById("imóveis");
		document.getElementById("cidade").addEventListener("click", this.procurarPorCidade.bind(this), true); // true ==> "capturing phase" porque o botão tem elementos HTML descendentes
		document.getElementById("valorMáximo").addEventListener("click", this.procurarPorValorMáximo.bind(this), true); 
		document.getElementById("cidadeValorMínimo").addEventListener("click", this.procurarPorCidadeEValorMínimo.bind(this), true);
		document.getElementById("distância").addEventListener("click", this.procurarPorDistância.bind(this), true);
	}

	procurarPorCidade(clique) {
		clique.stopPropagation();
		this.imoApp.procurarPorCidade(clique.currentTarget.value);
	}

	procurarPorValorMáximo(clique) {
		clique.stopPropagation();
		this.imoApp.procurarPorValorMáximo(clique.currentTarget.value);
	}

	procurarPorCidadeEValorMínimo(clique) {
		clique.stopPropagation();
		var [cidade, mínimo] = clique.currentTarget.value.split(","); // splitting a String into a destructured array
		this.imoApp.procurarPorCidadeEValorMínimo(cidade, mínimo);
	}

	procurarPorDistância(clique) {
		clique.stopPropagation();
		var [km, x, y] = clique.currentTarget.value.split(","); // splitting a String into a destructured array
		var centro = new Coordenadas(x, y);
		this.imoApp.procurarPorDistância(centro, km);
	}

	avisar(evento) {
		switch (evento.tipo) {
			case (Evento.IMÓVEIS_ENCONTRADOS):
				this.visualizar(evento.carga);
				break;
			default:
				console.log(evento.tipo.toString()); // TODO os outros eventos
		}
	}

	visualizar(imóveis) {
		this.imóveis.innerHTML = "";
		for (var i = 0; i < imóveis.length; i++)
			this.imóveis.appendChild(imóveis[i].criarTR());
	}

};

