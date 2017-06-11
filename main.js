var produtos  = [{ 
		id: 1,
		descricao: 'DESCRICAO AQUI',
		showInfo: function (){
			alert(this.id)
		}
	},
	{ 
		id: 2,
		descricao: 'DESCRICAO AQUI 2',
		showInfo: function (){
			alert(this.id)
		}
}]

var pedido = {
	cliente: {
		id: 1,
		nome: 'CONSUMIDOR'
	},
	itens: produtos
};

pedido.itens[0].showInfo();
pedido.itens[1].showInfo();

var produtoNew = {
	id: 3,
	descricao: 'DESCRICAO 3'
};

pedido.itens.push(produtoNew);

console.log(pedido);

var pedidos = [];

pedidos.push(pedido);

console.log('pedidos', pedidos)