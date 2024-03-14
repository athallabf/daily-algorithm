function updateInventory(arr1, arr2) {
  const combinedInventory = {};

  for (let item of arr1) {
    combinedInventory[item[1]] = item[0];
  }

  for (let item of arr2) {
    // ```??=``` If the item already exists in combinedInventory, add the new quantity to it.
    // If not, initialize its quantity with the new value.
    combinedInventory[item[1]] ??= 0;
    combinedInventory[item[1]] += item[0];
  }

  return Object.keys(combinedInventory)
    .sort()
    .map((item) => [combinedInventory[item], item]);
}
// Example inventory lists
const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

const result = updateInventory(curInv, newInv);
console.log(result);

// function updateInventory(arr1, arr2) {
//   const itemNames = new Set(arr1.map((item) => item[1]));
//   const result = arr1;

//   for (const [newQuantity, newItem] of arr2) {
//     if (itemNames.has(newItem)) {
//       for (let oldItem of arr1) {
//         if (oldItem[1] === newItem) {
//           oldItem[0] += newQuantity;
//         }
//       }
//     } else {
//       result.push([newQuantity, newItem]);
//       itemNames.add(newItem);
//     }
//   }
//   result.sort((a, b) => a[1].localeCompare(b[1]));
//   console.log(result);
// }
//   return result;
