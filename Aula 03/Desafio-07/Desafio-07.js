const fruits = new Map([
    ["Banana", 12],
    ["Maçã", 19],
    ["Uva", 20],
    ["Pêra", 15],
  ]);
  console.log(fruits.get("Maçã") > fruits.get("Banana"));
  console.log(fruits.get("Pêra") !== fruits.get("Uva"));