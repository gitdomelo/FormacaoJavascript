function Cliente(nome, email) {

	this.nome = nome;
	this.email = email;
	this.endereço = null;

}

Cliente.prototype.alocar = function (rua, número, códigoPostalPrincipal, códigoPostalSecundário, país) {
	this.endereço = new Endereço(rua, número, new CódigoPostal(códigoPostalPrincipal, códigoPostalSecundário), país);
};
