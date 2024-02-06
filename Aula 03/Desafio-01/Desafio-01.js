

// Desafio 01

const listaDeCompras = new Map()

// Adicionar
listaDeCompras.set('Maçã', 5)
listaDeCompras.set('Banana', 3)
listaDeCompras.set('Leite', 4)
listaDeCompras.set('Pão', 5)

// Se existe
console.log (listaDeCompras.has('Banana'))

// Quantidade
console.log (listaDeCompras.get('Banana'))

// Modifique
console.log (listaDeCompras.set('Banana', 30))

// Delete
console.log (listaDeCompras.delete('Banana'))
console.log(listaDeCompras)