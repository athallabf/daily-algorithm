function findTheDifference(s, t) {
  // 1 kata perbedaan boleh misal 'aa' output 'a'
  let count = 0;
  for (char of s + t) {
    count ^= char.charCodeAt(0);
  }
  return String.fromCharCode(count);

  // const codes = new Set(); // gabisa duplicate misal 'aa' output ''
  // for (char of t) {
  //   codes.add(char.charCodeAt(0));
  // }

  // for (char of s) {
  //   if (codes.has(char.charCodeAt(0))) {
  //     codes.delete(char.charCodeAt(0));
  //   }
  // }

  // return String.fromCharCode(...codes);
}

const diff = findTheDifference('dcba', 'abcde');
console.log(diff); // e
