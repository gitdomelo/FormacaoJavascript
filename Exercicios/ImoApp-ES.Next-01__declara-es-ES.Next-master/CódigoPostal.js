
class CódigoPostal {

	constructor(primário, secundário) {
		var inteiro = primário + "-" + secundário; // private (voorlopig niet mogelijk met classes)
		this.juntar = function () { // gepriviligieerde functie
			return inteiro;
		};
	}

	toString() {
		return this.juntar();
	}

}

