import { ImoGUI } from "../../../codificator.io.js";
import { default as ImoApp} from "./ImoApp.js";

export default class Visitante {

	constructor() {
		// this.imoGUI = new ImoGUI(new ImoApp().simular()); // a simulação é agora no servidor
		this.imoGUI = new ImoGUI(new ImoApp());
	}

};

