// substitui a instanciação do Visitante na página HTML (para poder usar Webpack)
import { Visitante, Predicado } from "../../../codificator.io.js";

window.imoApp = new Visitante().imoGUI.imoApp; // disponibiliza a app globalmente sob o nome "imoApp" (p.ex. na consola, para testá-la)
window.Predicado = Predicado; // disponibiliza a class Predicado para poder instanciá-la na consola