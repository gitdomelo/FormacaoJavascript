function Cliente(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, nome, email, telemóvel) {

	this.Endereço = new Endereço(cidade,rua,número,códigoPostalPrincipal,códigoPostalsecundário);
	this.nome = nome;
	this.email = email;
	this.telemóvel = telemóvel;


}
