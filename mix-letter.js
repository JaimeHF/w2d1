let str = "javieragudo";

str = str
  .split("")
  .map(function(letra, idx) {
    if (idx < Math.round(str.length / 2)) return letra.toUpperCase();
    return letra;
  })
  .join("");

console.log(str);
