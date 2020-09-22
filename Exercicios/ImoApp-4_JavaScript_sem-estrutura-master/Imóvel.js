function Imóvel(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, valor) {

	this.Endereço = new Endereço(cidade,rua,número,códigoPostalPrincipal,códigoPostalsecundário);
	this.valor = valor;

}
