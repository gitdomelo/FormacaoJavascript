import { Predicado } from "../../../codificator.io.js";
import ImoApp from "../../../io/codificator/modelo/services/ImoApp.js";
import { promises as disco } from "fs"; // COM promises

export default class { // ImoWebApp

	imoApp;
	mimes = new Map();
	home = "/imoapp.html";

	constructor() {
		this.imoApp = new ImoApp().simular();
		const utf8 = "charset=utf8";
		this.mimes.set("text", "text/plain;" + utf8);
		this.mimes.set("html", "text/html;" + utf8);
		this.mimes.set("js", "text/javascript;" + utf8);
		this.mimes.set("css", "text/css;" + utf8);
		this.mimes.set("json", "application/json;" + utf8);
		this.imoApp.registar(this); // quero ser avisado aquando de eventos na imoApp, p.ex. após uma procura que tem resultados
	}

	servir(pedido, resposta) { // statusCode padrão: 200 "OK"
		resposta.setHeader("Cumprimentos-do-Formador", "email: koen@codificator.io telefone: 960025701");
		switch (pedido.method) {
			case "GET":
				this.servirPáginas(pedido, resposta);
				break;
			case "POST":
				this.servirObjetos(pedido, resposta);
				break;
			default:
				resposta.statusCode = 204; // no content
				resposta.end();
		}
	}

	// GET
	async servirPáginas(pedido, resposta) {
		const página = pedido.url === "/" ? this.home : pedido.url;
		console.log("GET " + página);
		const mime = this.mimeficar(página);
		if (mime !== undefined) {
			resposta.setHeader("Content-Type", mime);
			const uri = decodeURI(página.substring(1)); // remover o "/" e "decode" o URI (pode conter caratéres Unicode)
			let ficheiro;
			try {
				ficheiro = await disco.readFile(uri, "utf8");
			} catch (erro) {
				console.log("Erro a tentar a leitura do ficheiro " + uri);
				ficheiro = await disco.readFile("erro.html", "utf8"); // servir página alternativa
			}
			resposta.end(ficheiro);
		} else {
			resposta.statusCode = 404; // not found
			resposta.setHeader("Content-Type", this.mimes.get("text"));
			resposta.end("Recurso não encontrado · imoWebApp apenas serve HTML, CSS, JS e JSON.");
		}
	}

	// POST
	servirObjetos(pedido, resposta) { // TODO: "parse" o serviço do caminho (por enquanto apenas responde a um pedido de "procurar"
		var predicado = []; // (bytes) will be available in the => fnc because of the closure
		pedido.on("data", parte => {
			predicado.push(parte); // restituir o conteúdo da mensagem HTTP POST
		});
		pedido.on("end", async () => { // contém "await" <-- obrigatoriamente "async"
			predicado = JSON.parse(Buffer.concat(predicado)); // combinar todos os bytes e converter em JSON
			predicado = new Predicado(Object.values(predicado)); // converter em Predicado e...
			console.log("POST " + predicado.toString());
			predicado = predicado.lambda; // ...obter como lambda
			this.imoApp.procurar(predicado);
			const encontrados = await this.aviso; // esperar até a imoApp invoca avisar()
			resposta.writeHead(200, {"Content-Type": this.mimes.get("json")});
			resposta.end(JSON.stringify(encontrados));
		});
	}

	avisar(evento) {
		this.aviso = Promise.resolve(evento.carga);
	}

	mimeficar(página) { // tipificar com MIME
		const ponto = página.lastIndexOf(".");
		const extensão = página.substring(ponto + 1);
		return this.mimes.get(extensão);
	}

}


