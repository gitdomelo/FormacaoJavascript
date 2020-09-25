import { ImoApp, ImoGUI } from "../../../codificator.io.js";

export default class Visitante { // o FQN é dado em namespaces.js

	constructor(nome) {
		this.imoGUI = new ImoGUI(new ImoApp().simular());
	}

};

