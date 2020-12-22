// import + export comum para o navegador e o servidor

export {default as ImoGUI} from "./io/codificator/navegador/ImoGUI.js";
export {default as Visitante} from "./io/codificator/navegador/Visitante.js";

// export {default as ImoApp} from "./io/codificator/modelo/services/ImoApp.js"; // nesta versão ImoApp no navegador é apenas um "stub"
// navegador e servidor deverão utilizar a versão adequada

export {default as Evento} from "./io/codificator/modelo/services/Evento.js";
export { default as Predicado } from "./io/codificator/modelo/services/Predicado.js";
export { default as Erro } from "./io/codificator/modelo/services/Erro.js";

export {default as Imóvel} from "./io/codificator/modelo/entities/Imóvel.js";
export {default as Cliente} from "./io/codificator/modelo/entities/Cliente.js";

export {default as Coordenadas} from "./io/codificator/modelo/Coordenadas.js";
export {default as CódigoPostal} from "./io/codificator/modelo/CódigoPostal.js";
export {default as Endereço} from "./io/codificator/modelo/Endereço.js";

// export from === import + export em simultâneo
