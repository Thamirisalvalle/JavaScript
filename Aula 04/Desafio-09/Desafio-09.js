let month = "agosto";

switch (month.toLowerCase()) {
  case "dezembro":
  case "janeiro":
  case "fevereiro":
    console.log(`O mês de ${month} está no Inverno`);
    break;
  case "março":
  case "abril":
  case "maio":
    console.log(`O mês de ${month} está na Primavera`);
    break;
  case "junho":
  case "julho":
  case "agosto":
    console.log(`O mês de ${month} está no Verão`);
    break;
  case "setembro":
  case "outubro":
  case "novembro":
    console.log(`O mês de ${month} está no Outono`);
    break;
  default:
    console.log(`O mês de ${month} não é válido`);
    break;
}