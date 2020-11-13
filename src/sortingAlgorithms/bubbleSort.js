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
    let selectInd = i;
    for (let j = i; j < arrSelect.length; j++) {
      pass++;
      if (arrSelect[selectInd] > arrSelect[j + 1]) {
        selectInd = j + 1;
      }
    }

    if (selectInd !== i) arrSelect = swap(i, selectInd, arrSelect);
  }
  return arrSelect;
}

console.log(
  "bubble",
  "9, 5, 7, 0, 6, 8, 4, 2, 1, 10",
  select([9, 5, 7, 0, 6, 8, 4, 2, 1, 10]),
  pass
);
