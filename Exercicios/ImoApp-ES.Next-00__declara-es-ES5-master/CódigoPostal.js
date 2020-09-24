
function CódigoPostal(primário, secundário) {

	var inteiro = primário + "-" + secundário; // private (voorlopig niet mogelijk met classes)

	this.juntar = function () { // gepriviligieerde functie
		return inteiro;
	};

}

CódigoPostal.prototype.toString = function () { // public
	return this.juntar();
};
