import { Procura, Evento } from "../../../codificator.io.js";

export default class ImoGUI {

	constructor(imoApp) {
		this.imoApp = imoApp;
		this.imoApp.registar(this); // registar-se para ser avisado aquando de alterações na imobiliária
		this.imóveis = document.getElementById("imóveis");
		document.getElementById("baratos").addEventListener("click", this.procurar.bind(this));
		document.getElementById("caros").addEventListener("click", this.procurar.bind(this));
	}

	procurar(clique) {
		clique.stopPropagation();
		let botão = clique.currentTarget;
		this.imoApp.procurar((Procura(botão.id, botão.value)));
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

