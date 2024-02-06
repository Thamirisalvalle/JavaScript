
const contato = ['nome', 30,'dev']

console.log(contato[0])
console.log(contato[1])
console.log(contato[2])

const  pessoa ={
  nome: 'Pessoa 1',
  idade: 30,
  profissao: 'Meico',
}

// modificar
pessoa.profissao= 'Dentista',

//  adicionar
pessoa.cidade = 'São Paulo',

// deletar
// delete pessoa.cidade

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.cidade)


// verificar  se  o campo existe
console.log('cidade' in pessoa)

let p1 = {...pessoa};
console.log(p1)