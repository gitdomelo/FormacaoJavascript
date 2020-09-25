import { ImoApp, Procura } from "./codificator.io.js";

const imoApp = new ImoApp().simular();

// regista um objeto anónimo ("listener") que quer receber avisos aquando de eventos na imoApp
// este objeto imprimirá o evento (que contém carga) na consola
imoApp.registar({avisar: aviso => console.log(aviso)});

console.log('\nTESTE: imoApp.procurar(Procura("Faro", 100000, ""));\n');

imoApp.procurar(Procura(["Faro", 100000, ""]));
// ficheiros com a extensão mjs dispensam de package.json para executar com NodeJS