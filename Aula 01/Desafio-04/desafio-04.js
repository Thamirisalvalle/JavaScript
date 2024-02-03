// Atividade 04

let idade = prompt("Temos o(a) veio(a) da lancha?")
let compraMinima = prompt("Você gastou o suficiente?")

let opcao = prompt("É fanboy do estabelecimento?\n1 - Sim\n2 - Não")

let isNewClient = opcao === "1" ? true : false;

alert(idade >= 60 && compraMinima >= '100' && isNewClient == false)