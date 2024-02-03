let contador = 2
contador = 10

const x = 5


let nome ="Thamiris"

console.log (contador+x)

// Desafio 01

let idade = 18
let nacionalidade = 'eua'

console.log(idade >= 16 && nacionalidade == 'brasileira')

// com constante
const idade2 = 18
let nacionalidade2 = 'brasileira'

console.log(idade2 >= 16 && nacionalidade2 == 'brasileira')

// com prompt

let idade = prompt("Digite sua idade:")
let nacionalidade = prompt("Digite sua nacionalidade:")

alert(idade >= 16 && nacionalidade == 'brasileira')

// Atividade 02

let salario = prompt("Solta as onças aqui:")
let scoreDeCredito = prompt("Vish será que sua nota é boa?")
let idade = prompt("É o(a) veio(a) da lancha?")

alert(salario >= 5000 && scoreDeCredito >= 700 && idade >= 18)

// Atividade 03

let navegador = prompt("Luto pelo Microsoft Edge:")
let sistemaOperacional = prompt("Windows vista ainda existe?")


alert((navegador === "Chrome" || navegador === "Firefox") && (sistemaOperacional === "Mac" || sistemaOperacional === "Windows"))

// Atividade 04

let idade = prompt("Temos o(a) veio(a) da lancha?")
let compraMinima = prompt("Você gastou o suficiente?")

let opcao = prompt("É fanboy do estabelecimento?\n1 - Sim\n2 - Não")

let isNewClient = opcao === "1" ? true : false;

alert(idade >= 60 && compraMinima >= '100' && isNewClient == false)