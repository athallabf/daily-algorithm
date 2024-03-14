// function sumArray(array) {
//   const highest = Math.max(...array);
//   const lowest = Math.min(...array);

//   array.splice(array.indexOf(highest), 1);
//   array.splice(array.indexOf(lowest), 1);

//   return array.reduce((a, b) => a + b);
// }

function sumArray(array) {
  if (!array || array.length <= 2) return 0;

  const sorted = array.slice().sort((a, b) => a - b);

  return sorted.slice(1, -1).reduce((a, b) => a + b);
}

// const sumArray = (array) =>
//   array
//     .slice()
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((a, b) => a + b);

console.log(sumArray([]));
