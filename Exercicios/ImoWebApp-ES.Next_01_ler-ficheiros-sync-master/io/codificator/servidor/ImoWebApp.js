import { ImoApp } from "../../../codificator.io.js";
import disco from "fs"; // imports the default export, por isso pode ser renomeado (sem utilizar "import ... as")

export default class { // ImoWebApp

	imoApp;
	mimes = new Map();
	home = "/imoapp.html";

	constructor() {
		this.imoApp = new ImoApp().simular();
		const utf8 = "charset=utf8";
		this.mimes.set("html", "text/html;" + utf8);
		this.mimes.set("js", "text/javascript;" + utf8);
		this.mimes.set("css", "text/css;" + utf8);
	}

	servir(pedido, resposta) { // statusCode padrão: 200 "OK"
		const página = pedido.url === "/" ? this.home : pedido.url;
		const mime = this.mimeficar(página);
		if (mime !== undefined) {
			resposta.setHeader("Content-Type", mime);
			const uri = decodeURI(página.substring(1)); // remover o "/" e "decode" o URI (pode conter caratéres Unicode)
			const ficheiro = disco.readFileSync(uri, "utf8"); // leitura síncrona
			resposta.end(ficheiro);
		} else {
			resposta.statusCode = 404; // not found
			resposta.end();
		}
	}

	mimeficar(página) { // tipificar com MIME
		const ponto = página.lastIndexOf(".");
		const extensão = página.substring(ponto + 1);
		return this.mimes.get(extensão);
	}

}


