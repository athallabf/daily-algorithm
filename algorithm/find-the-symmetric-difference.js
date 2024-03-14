function sym(...args) {
  return [...args.reduce(reducer, new Set())];
}

function reducer(result, arr) {
  const compare = new Set(arr);

  for (let value of compare) {
    if (result.has(value)) {
      result.delete(value);
    } else {
      result.add(value);
    }
  }
  return result;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 3, 2, 1, 5, 6];
const arr3 = [1, 2, 5, 7];

const result = sym(arr1, arr2, arr3);
console.log(result.sort());
