import http from 'http';
import { default as ImoWebApp } from "./io/codificator/servidor/ImoWebApp.js";

const imoWebApp = new ImoWebApp();

const servidor = http.createServer(imoWebApp.servir.bind(imoWebApp)).listen(8888);

console.log("\nVisite a ImoWebApp em http://localhost:8888/\n");