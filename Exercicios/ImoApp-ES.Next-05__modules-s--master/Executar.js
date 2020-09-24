import { ImoApp, Procura } from "./codificator.io.js";
//import Procura from "./io/codificator/modelo/services/Procura.js";

const imoApp = new ImoApp().simular();

imoApp.registar({avisar: aviso => console.log(aviso)});

console.log('\nTESTE: imoApp.procurar(Procura("baratos", 100000));\n');

imoApp.procurar(Procura("baratos", 100000));

// ficheiros com a extensão mjs dispensam de package.json para executar com NodeJS