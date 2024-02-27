let number1 = 10;
let number2 = 20;
let number3 = 15;

if (number1 >= number2 && number1 >= number3) {
  console.log(`O número mais alto é ${number1}`);
} else if (number2 >= number1 && number2 >= number3) {
  console.log(`O número mais alto é ${number2}`);
} else {
  console.log(`O número mais alto é ${number3}`);
}