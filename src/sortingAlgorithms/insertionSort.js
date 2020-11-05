function swap(arr1, arr2, arr) {
  let temp = arr[arr1];
  arr[arr1] = arr[arr2];
  arr[arr2] = temp;
  return arr;
}

function selection(arr = []) {
  let selArr = arr;
  for (let i = 1; i < selArr.length; i++) {
    for (let j = i - 1; j >= 0 && selArr[j] < selArr[j - 1]; j--) {
      selArr = swap(j - 1, j, selArr);
      console.log(selArr);
    }
  }
  return selArr;
}

selection([2, 1, 9, 76, 4]);
