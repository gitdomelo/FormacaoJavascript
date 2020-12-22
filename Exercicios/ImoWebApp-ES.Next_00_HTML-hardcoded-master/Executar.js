import http from 'http';
import { ImoWebApp } from "./codificator.io.js";


const imoWebApp = new ImoWebApp();

const servidor = http.createServer(imoWebApp.servir.bind(imoWebApp)).listen(8888);

console.log("\nVisite a ImoWebApp em http://localhost:8888\n");