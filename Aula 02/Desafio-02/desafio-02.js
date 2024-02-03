// Definição das notas do aluno em um array
const notas = [7,5,8];

// Imprime as notas no console
console.log("Notas:",notas)

// Calcula a soma das notas usando o método reduce()
const somaDasNotas = notas.reduce((total, nota) => total + nota, 0); 

// Imprime a soma das notas no console
console.log("Soma das notas:", somaDasNotas);

// Imprime a quantidade de notas que o aluno recebeu
console.log("Quantidade de notas:", notas.length);

// Obtém e imprime a quantidade de notas usando a propriedade length do array
const media = somaDasNotas / notas.length

// Imprime o a média das notas do aluno
console.log(media)




// const nota1 = 7
// const nota2 = 5
// const nota3 = 8

// const notas = nota1 + nota2 + nota3 

// console.log("Soma das notas:", notas)

// const quantidadeDeNotas = notas.length

// console.log(quantidadeDeNotas)

// const media = notas / notas.length

// console.log(media)