import {  Evento } from "../../../codificator.io.js";

export default class ImoGUI {

	constructor(imoApp) {
		this.imoApp = imoApp;
		this.imoApp.registar(this); // registar-se para ser avisado aquando de alterações na imobiliária
		this.imóveis = document.getElementById("imóveis");
		document.getElementById("cidade").addEventListener("click", this.procurar.bind(this), true); // true, porque o botão tem elementos html descendentes
		document.getElementById("valorMáximo").addEventListener("click", this.procurar.bind(this), true);
		document.getElementById("cidadeValorMínimo").addEventListener("click", this.procurar.bind(this), true);
		document.getElementById("distância").addEventListener("click", this.imoApp.procurarPorDistância.bind(this.imoApp), true);
	}

	procurar(clique) {
		clique.stopPropagation();
		var [cidade, preço, inferior] = clique.currentTarget.value.split(",");
		// converter os 2 últimos num valor resp. um boolean
		preço = parseInt(preço);
		inferior = inferior !== "" ? JSON.parse(inferior) : true; // default: inferior===true
		var predicado = imóvel => (Boolean(cidade) ? imóvel.cidade === cidade : true) && (Boolean(preço) ? (inferior ? imóvel.preço < preço : imóvel.preço >= preço) : true);
		this.imoApp.procurar(predicado);
	}

	// função apenas para demonstrar transformação em lambda
	procurarNaCidade(imóvel, cidade) {
		return imóvel.cidade = cidade;
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
		var soma=0;
		var soma_linha = document.createElement("tr");
		var celula_soma_titulo = document.createElement("td");
		var celula_soma = document.createElement("td");
		

		for (var i = 0; i < imóveis.length; i++){
			this.imóveis.appendChild(imóveis[i].criarTR());
			soma = soma + imóveis[i].preço;
		}
		celula_soma.innerHTML = soma;
		celula_soma_titulo.innerHTML = "Total:";
		soma_linha.appendChild(celula_soma_titulo);
		soma_linha.appendChild(celula_soma);
		this.imóveis.appendChild(soma_linha);
        

	}

};

