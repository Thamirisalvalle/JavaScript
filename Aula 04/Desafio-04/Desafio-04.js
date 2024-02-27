let firstSide = 8;
let scdSide = 8;
let thirdSide = 8;

if (firstSide === scdSide && scdSide === thirdSide) {
  console.log("Equilátero, 3 lados iguais");
} else if (
  firstSide === scdSide ||
  firstSide === thirdSide ||
  scdSide === thirdSide
) {
  console.log("Isósceles, só 2 lados são iguais");
} else {
  console.log("Escaleno, os três lados são diferentes");
}
