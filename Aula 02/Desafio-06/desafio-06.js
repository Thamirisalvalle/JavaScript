// Usar filtro para trazer os nome com caracteres iguais ou maiores que 5 letras

// ou usar o  

const names = ["Alice", "Edu", "Teo", "Duda", "Daniel", "Isabel", "Carol"];

const FilteredNames = names.filter(name => name.length >= 5);

console.log(`Nomes originais: ${names}`);
console.log(`Nomes com 5 letras ou mais: ${FilteredNames}`);