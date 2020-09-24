import { ImoApp } from "./codificator.io.js";

const imoApp = new ImoApp().simular();

imoApp.registar({avisar: aviso => console.log(aviso)});

console.log('\nTESTE: imoApp.procurarPorCidade("Faro");\n');

imoApp.procurarPorCidade("Faro");

// ficheiros com a extensão mjs dispensam de package.json para executar com NodeJS