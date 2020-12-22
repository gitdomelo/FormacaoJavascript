
import { Evento, Predicado } from "../../../codificator.io.js";

export default class ImoGUI {

	constructor(imoApp) {
		this.imoApp = imoApp;
		this.imoApp.registar(this); // registar-se para ser avisado aquando de alterações na imobiliária
		this.imóveis = document.getElementById("imóveis");
		document.getElementById("inexistentes").addEventListener("click", this.procurar.bind(this), true); // true, porque o botão tem elementos html descendentes
		document.getElementById("cidade").addEventListener("click", this.procurar.bind(this), true); // true, porque o botão tem elementos html descendentes
		document.getElementById("valorMáximo").addEventListener("click", this.procurar.bind(this), true);
		document.getElementById("cidadeValorMínimo").addEventListener("click", this.procurar.bind(this), true);
	}

	// constroi uma predicado com os 3 argumentos no atributo "value" do botão e invoca a procura na imoApp
	// os argumentos devem ser: cidade, preço, inferior
	// os argumentos são convertidos no tipo necessário para a procura
	procurar(clique) {
		clique.stopPropagation();
		const predicado = new Predicado(clique.currentTarget.value.split(","));
		this.imoApp.procurar(predicado);
	}

	// OMITIDO nesta versão: procurarPorDistância(clique) 

	avisar(evento) {
		switch (evento.tipo) {
			case (Evento.IMÓVEIS_ENCONTRADOS):
				this.visualizar(evento.carga);
				break;
			case (Evento.SEM_IMÓVEIS):
				this.imóveis.innerHTML = `<tr><td>${evento.carga}</td></tr>`;
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

