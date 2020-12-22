import { ImoApp, ImoGUI } from "../../../codificator.io.js";

export default class Visitante {

	constructor() {
		this.imoGUI = new ImoGUI(new ImoApp().simular());
	}

};

