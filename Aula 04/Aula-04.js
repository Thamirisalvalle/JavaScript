// Condição else if
const salario = 1499
const tempo = 4

if (salario >= 3000 && tempo > 2){
  console.log("Pode realizar o empréstimo!");
} else if(tempo > 2 && salario >= 1500){
  console.log("Pode realizar  empréstimo de até 90%")
} else {
  console.log("Não pode realizar empréstimo!")
}


// Condição ternário
const ehPar = (23 % 2 == 0) ? 'É par' : 'Não é par'

console.log(ehPar)

const resp = (salario >= 3000 && tempo >2) ?
  "Pode realizar o empréstimo" :
  "Não pode realizar empréstimo"

console.log(resp)
