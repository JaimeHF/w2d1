const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(
  Array(100000)
    .fill()
    .map(() => randomInt(0, 1000))
);
