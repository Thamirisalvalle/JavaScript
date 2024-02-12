const sorteado = Math.floor(Math.random() * 100) + 1;

let contador = 0;
let chute = '';

do{
  if (contador >= 4) {
      chute = parseInt(prompt('Última chance! Tente a sorte e digite um número de 1 a 100: '));
     } else {
      chute = parseInt(prompt('Tenta a sorte e digite um número de 1 a 100: '));
     }

  if
    (sorteado === chute) {
      alert(`Você acertou, é o ${sorteado}`);
      break; // se acertar vai sair do loop
    } else if (chute > sorteado) {
     	alert(`Tente novamente, o número é menor ! Mas lembre-se você possui mais ${4-contador} chances`)
    } else {
      alert(`Tente novamente, o número é maior ! Mas lembre-se você possui mais ${4-contador} chances`)
      } 
      
contador ++;

  if (contador == 5) {
    alert(`Game over! O número era ${sorteado}`);
      break;
  } 
    
} while(contador < 5);



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