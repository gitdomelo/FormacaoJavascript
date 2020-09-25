import { ImoApp, Procura } from "./codificator.io.js";

const imoApp = new ImoApp().simular();

imoApp.registar({avisar: aviso => console.log(aviso)});

console.log('\nTESTE: imoApp.procurarPorCidadeEPreço(new Procura("Faro", 100000, ""));\n');

imoApp.procurarPorCidadeEPreço(new Procura("Faro", 100000, ""));
// ficheiros com a extensão mjs dispensam de package.json para executar com NodeJS