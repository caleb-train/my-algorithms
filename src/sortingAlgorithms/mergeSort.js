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

function split(arr) {
  const mid = Math.floor(arr.length / 2);
  const start = arr.slice(0, mid);
  const end = arr.slice(mid);
  return [start, end];
}

export default function mergeSort(arr) {
  console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8]), split(arr));
}
