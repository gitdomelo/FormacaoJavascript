function ImoGUI(imoApp) {

	this.imoApp = imoApp;
	this.imoApp.registar(this);//.atualizar); // registar-se para ser avisado aquando de alterações na imobiliária
	this.imóveis = document.getElementById("imóveis");
	document.getElementById("baratos").addEventListener("click", this.procurar.bind(this));
	document.getElementById("caros").addEventListener("click", this.procurar.bind(this));

}

ImoGUI.prototype.procurar = function (clique) {
	clique.stopPropagation();
	var botão = clique.currentTarget;
	this.imoApp.procurar((Procura(botão.id, botão.value)));
};

ImoGUI.prototype.avisar = function (evento) {
	switch (evento.tipo) {
		case (Evento.IMÓVEIS_ENCONTRADOS):
			this.visualizar(evento.carga);
			break;
		default:
			console.log(evento.tipo.toString()); // TODO os outros eventos
	}
};

ImoGUI.prototype.visualizar = function (imóveis) {
	this.imóveis.innerHTML = "";
	for (var i = 0; i < imóveis.length; i++)
		this.imóveis.appendChild(imóveis[i].criarTR());
};
