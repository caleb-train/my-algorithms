function merge(arr1, arr2) {
  const mergeArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergeArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergeArray.push(arr2[j]);
    j++;
  }

  return mergeArray;
}
let pass = 0;
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  pass++;
  const mid = Math.floor(arr.length / 2);
  let start = mergeSort(arr.slice(0, mid));
  let end = mergeSort(arr.slice(mid));
  return merge(start, end);
}

console.log(
  "merge sort",
  "9, 5, 7, 0, 6, 8, 4, 2, 1, 10",
  mergeSort([9, 5, 7, 0, 6, 8, 4, 2, 1, 10]),
  pass
);
