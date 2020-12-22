import { ImoApp } from "../../../codificator.io.js";

export default class { // ImoWebApp

	imoApp;

	constructor() {
		this.imoApp = new ImoApp().simular();
	}

	servir(pedido, resposta) { // statusCode padrão: 200 "OK"
		if (pedido.url !== "/") {
			resposta.statusCode = 404;
			resposta.end();
			return;
		}
		resposta.setHeader("Content-Type", "text/html;charset=utf8");
		resposta.end(
				  `<!DOCTYPE html>
 <html>
	<head>
		<title>ImoWebApp-ES.Next_00_HTML-hardcoded</title>
		<style>
			body {
				font-family:"HP Simplified Light",Roboto,RobotoDraft,"HP Simplified","DejaVu Sans Light","Helvetica Neue",Helvetica,Arial,sans-serif;
				font-size: 18px;
				background-color:rgb(254, 204, 5);
				min-width: 400px;
				max-width: 700px;
				margin: auto;
			}
			h2 {
				text-align: center;
			}
			article {
				background-color:  rgb(254, 234, 147);
				border: 2px dotted rgb(198, 62, 20);
				border-radius: 15px;
				padding: 10px;
				margin: 5px;
			}
			section#palavras li, span {
				color: rgb(198, 62, 20);
				font-variant: small-caps;
				font-weight: bold;
			}
			span.quadro {
				border: 1px solid rgb(198, 62, 20);
				padding: 0 2px;
			}			
		</style>
		<meta charset="UTF-8">
	</head>
	 <body>
		 <h2>ImoWebApp-ES.Next_00_HTML-hardcoded</h2>
		<article>
			<header><h3>Intro</h3></header>
			<p><span class="quadro">Versão distribuída</span> (executada como servidor web) com GUI minimalista, apenas para demonstrar a reutilização do JavaScript no navegador e servidor (com NodeJS).</p>
			<p>Esta versão pode ser "debugged" em Visual Studio e Visual Studio Code</p>
		</article>
		<article>
			<header>
				<h2>${this.imoApp.contar()} imóveis na carteira em ${this.imoApp.enumerarCidades().join(", ")}</h2>
			</header>
		</article>
		<article>
			<header>
				<h3>Novos conceitos, palavras chave, síntaxe e/ou APIs de JavaScript abordados/introduzidos <span class="quadro">neste exemplo</span></h3>
			</header>
			<section id="conceitos">
				<p>Conceitos</p>
				<ul>
					<li>"Server side templates"</li>
					<li>"String templates"</li>
				</ul>
			</section>
			<section id="síntaxe">
				<p>Síntaxe</p>
				<ul>
					<li>&DiacriticalGrave;&DiacriticalGrave; (operador de substituição)</li>
					<li>&dollar;{} (substituição em "template strings")</li>
				</ul>
			</section>
		 </article>
		 <p>${new Date()}</p>
		 <p>Recarrega a página para ver a data atualizar-se.</p>
	 </body>
 </html>`);
	}

}