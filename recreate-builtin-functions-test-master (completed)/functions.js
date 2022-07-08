// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

//Include
function includes(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return true;
    }
  }
  return false;
}

//IndexOf
function indexOf(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }
  return -1;
}

//Reverse
function reverse(array) {
  i = 0;
  while (i < array.length) {
    array.splice(i, 0, array.pop()); //index, replace 0, removes last element and returns
    i++;
  }
  return array;
}

//Slice
function slice(start, stop, array) {
  newArray = [];
  for (let i = start; i < stop; i++) {
    //array[i]'s between the start and stop
    newArray.push(array[i]); //pushing them into new Array
  }
  return newArray;
}

//Concat
function concat(array1, array2) {
  merge = [...array1, ...array2]; //Works
  return merge;
}

//Join
function join(sep, array) {
  let str = ""; //empty string
  for (let i = 0; i < array.length; i++) {
    str += array[i]; //adds array[i]'s into the string
    if (i < array.length - 1) str += sep; //last one doesn't have sep
  }
  return str;
}

//Max
function max(array) {
  let newMax = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > newMax) {
      //goes through the array and replaces the maximum if array [i] is larger
      newMax = array[i];
    }
  }
  return newMax; //loop stops and returns max once array[i] < newMax
}
