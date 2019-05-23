const sortingObj = {
};

sortingObj.bubbleSort = (array) => {
  let didISwap = false;
  for (let i = 0; i < array.length - 1; i++){
    if (sortingObj.swap (array[i], array[i + 1])){
      didISwap = true;
      const biggerElem = array[i];
      array[i] = array[i + 1];
      array[i + 1] = biggerElem;
    }
  }
  if (!didISwap) {
    return array;
  }
  array = [...sortingObj.bubbleSort(array.slice(0, -1)), array[array.length - 1]];
  return array;
};

sortingObj.swap = (first, second) => {
  if (first > second){
    return true;
  }
};
