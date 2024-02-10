const sorteado = Math.floor(Math.random() * 3)

let contador = 0
let chute = '0'

do{
  console.log(sorteado)
  console.log(contador)
  chute = 0
  contador ++

  if (contador >= 5){
    console.log(`Gamer over o número era ${sorteado}`);
    break    
  }
  
  if
    (sorteado == chute) {
      console.log(`Você acertou, é o ${sorteado}`)
    } else {
      console.log(`Tente Novamente! Você possui mais ${5-contador} chances`)
    }
  
  } while(chute[sorteado] != chute)

  console.log(chute)



// const sorteado = Math.floor(Math.random() * 100)

// let contador = 0
// let chute = ''

// do{

//   if (contador >= 5){
//     alert(`Gamer over ${[]}`);
//     break    
//   }
//   chute = prompt('Tenta a sorte e digite um número: ')
//   contador ++
//   if
//     ([sorteado] == chute) {
//       alert(`Você acertou, é o >>> ${sorteado}<<<`)
//     } else {
//       alert('Tente Novamente!')
//     }
  
//   } while(chute[sorteado] != chute)