class GUI {

	constructor() {
        
       
    }

    mostrarImóveis(imoveis,tableHtml)
	{
		var table_mostrar = document.getElementById(tableHtml);
		//limpar tabela
	
		while(table_mostrar.rows.length > 1) {
			table_mostrar.deleteRow(1);	
		}
        //preencherTabela
		imoveis.forEach(element => {
			var row= table_mostrar.insertRow(1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = element.endereço.rua;
			cell2.innerHTML = element.endereço.número;
			cell3.innerHTML = element.endereço.cidade;
			cell4.innerHTML = element.endereço.freguesia.nome;
			cell5.innerHTML = element.valor;
		});

    
}
}