export default class Procura {

	cidade;
	preço;
	inferior = true; // se o preço dos imóveis procurados tem de ser inferior (true) ou superior (false)

	constructor(...critérios) {
		this.cidade = critérios[0];
		this.preço = parseInt(critérios[1]);
		this.inferior = critérios[2] === "" ? this.inferior : JSON.parse(critérios[2]);
	}

	comparar(imóvel) {
		var cidadeOK = Boolean(this.cidade) ? imóvel.cidade === this.cidade : true; // também devolve true se pode ser qualquer cidade
		var preçoOK = Boolean(this.preço) ? (this.inferior ? imóvel.preço < this.preço : imóvel.preço >= this.preço) : true; // também devolve true se pode ser qualquer preço
		return cidadeOK && preçoOK;
	}

}

