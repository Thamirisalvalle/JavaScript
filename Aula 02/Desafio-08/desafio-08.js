const newYears = [15, 22, 17, 20, 30, 12];
let lastIndex = newYears.reduceRight((accum, current, index) => {
  return accum === -1 && current >= 18 ? index : accum;
}, -1);
console.log(lastIndex);