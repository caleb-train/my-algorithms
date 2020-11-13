function swap(arr1, arr2, arr) {
  let temp = arr[arr1];
  arr[arr1] = arr[arr2];
  arr[arr2] = temp;
  return arr;
}

let pass = 0;
function select(arr = []) {
  let arrSelect = arr;
  for (let i = 0; i < arrSelect.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arrSelect.length; j++) {
      if (arrSelect[j] < arrSelect[lowest]) {
        lowest = j;
      }
      pass++;
    }

    if (lowest !== i) arrSelect = swap(i, lowest, arrSelect);
  }
  return arrSelect;
}

console.log(
  "selection sort",
  "9, 5, 7, 0, 6, 8, 4, 2, 1, 10",
  select([9, 5, 7, 0, 6, 8, 4, 2, 1, 10]),
  pass
);
