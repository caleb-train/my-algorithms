function swap(arr1, arr2, arr) {
  let temp = arr[arr1];
  arr[arr1] = arr[arr2];
  arr[arr2] = temp;
  return arr;
}

function select(arr = []) {
  let arrSelect = arr;
  for (let i = 0; i < arrSelect.length; i++) {
    console.log(arrSelect);
    let selectInd = i;
    for (let j = i; j < arrSelect.length; j++) {
      if (arrSelect[selectInd] > arrSelect[j + 1]) {
        selectInd = j + 1;
      }
    }

    if (selectInd !== i) arrSelect = swap(i, selectInd, arrSelect);
  }
  return arrSelect;
}
console.log(select([9, 5, 7, 0, 6, 8, 4, 2, 1, 10]));
