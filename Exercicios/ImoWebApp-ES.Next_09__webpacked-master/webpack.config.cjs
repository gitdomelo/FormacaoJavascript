const path = require('path');

module.exports = {
  entry: './io/codificator/navegador/ImoWebApp.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'imowebapp.js'
  }
};