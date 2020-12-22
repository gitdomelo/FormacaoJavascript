import { ImoApp } from "../../../codificator.io.js";
//import fs from "fs"; // sync
import { promises as disco } from "fs";  // async (ver https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_promises_api)

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

	async servir(pedido, resposta) { // statusCode padrão: 200 "OK"
		const página = pedido.url === "/" ? this.home : pedido.url;
		const mime = this.mimeficar(página);
		if (mime !== undefined) {
			resposta.setHeader("Content-Type", mime);
			const uri = decodeURI(página.substring(1)); // remover o "/" e "decode" o URI (pode conter caratéres Unicode)
			const promessa = disco.readFile(uri, "utf8"); // leitura assíncrona
			const ficheiro = await promessa;
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


