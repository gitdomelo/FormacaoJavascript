import { Endereço, CódigoPostal } from "../../../../codificator.io.js";

export default class Cliente {

	constructor(nome, email) {
		this.nome = nome;
		this.email = email;
		this.endereço = null;
	}

	alocar(rua, número, códigoPostalPrincipal, códigoPostalSecundário, país) {
		this.endereço = new Endereço(rua, número, new CódigoPostal(códigoPostalPrincipal, códigoPostalSecundário), país);
	}

};

