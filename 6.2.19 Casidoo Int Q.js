//return max range between 2 elements in integer array
let intArray = [1, 2, 100, 5];
//let intArray = [1]

//is input an array
//is there more than 1 element
//declare placeholder max = math.abs(array[0] - array[1])
//loop through array with var  i
//loop through array with var x
//declare newMax for comparison
//newMax = math.abs(array[i] - array[i+1])
// if newMax > max then max = newMax
//return max

function findMaxRange(intArray) {
  if (!Array.isArray(intArray) || intArray.length <= 1) {
    return "error";
  } else {
    let max = Math.abs(intArray[0] - intArray[1]);
    for (var i = 0; i < intArray.length; i++) {
      for (var x = 1; x < intArray.length; x++) {
        let newMax = Math.abs(intArray[i] - intArray[x]);
        if (newMax > max) {
          max = newMax;
        }
      }
    }
    return max;
  }
}

console.log("first func", findMaxRange(intArray));
//O(n^2) run time
//quadratic bc two loops - not opitmized

function revisedFindMaxRange(intArray) {
  if (intArray.length <= 1 || !Array.isArray(intArray)) {
    return "error cannot calc max range";
  }
  let max = Math.max(...intArray) - Math.min(...intArray);
  return max;
}

console.log("revised func", revisedFindMaxRange(intArray));
//O(1) runtime
//constant because no matter input size same amount of steps
