import {  Evento, Coordenadas } from "../../../codificator.io.js";

export default class ImoGUI {

	constructor(imoApp) {
		this.imoApp = imoApp;
		this.imoApp.registar(this); // registar-se para ser avisado aquando de alterações na imobiliária
		this.imóveis = document.getElementById("imóveis");
		document.getElementById("cidade").addEventListener("click", this.procurar.bind(this), true); // true, porque o botão tem elementos html descendentes
		document.getElementById("valorMáximo").addEventListener("click", this.procurar.bind(this), true);
		document.getElementById("cidadeValorMínimo").addEventListener("click", this.procurar.bind(this), true);
		document.getElementById("distância").addEventListener("click", this.procurarPorDistância.bind(this), true);
	}

	// constroi uma predicado com os 3 argumentos no atributo "value" do botão e invoca a procura na imoApp
	// os argumentos devem ser: cidade, preço, inferior
	// os argumentos são convertidos no tipo necessário para a procura
	procurar(clique) {
		clique.stopPropagation();
		var [cidade, preço, inferior] = clique.currentTarget.value.split(",");
		preço = parseInt(preço);
		inferior = inferior !== "" ? JSON.parse(inferior) : true; // default: inferior===true
		var predicado = imóvel =>
			(Boolean(cidade) ? imóvel.cidade === cidade : true) &&
					  (Boolean(preço) ? (inferior ? imóvel.preço < preço : imóvel.preço >= preço) : true);
		this.imoApp.procurar(predicado);
	}

	// difere do método anterior: os argumentos devem ser: distância, coordenadasX e coordenadasY
	procurarPorDistância(clique) {
		clique.stopPropagation();
		var [km, x, y] = clique.currentTarget.value.split(",");
		km = parseInt(x);
		x = parseFloat(x);
		y = parseFloat(y);
		var centro = new Coordenadas(x, y);
		var predicado = imóvel => imóvel.naÁrea(centro, km);
		this.imoApp.procurar(predicado);
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

