// insert first index 


let arr = [2,4,9,5,7,12,8];

function insertInFirst(arr, value) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[ i -1]
    //    console.log(arr[i] = arr[ i -1])
    }
    arr[0] = value;
    return arr;
}
// console.log(insertInFirst(arr, 10));




// insert  in specific index 

let arr1 = [4,9,6,2,8,7];

function insertSpecificIndex (arr1, targetIndex, value) {
  for (let i = arr1.length -1 ; i >= targetIndex; i--) {
    arr1[i + 1] = arr1[i];
    // console.log(arr1[i + 1] = arr1[i])
    
  }
   arr1[targetIndex] = value;
  return arr1
}
// console.log(insertSpecificIndex(arr1, 3, 12))



// insert in last 


let arr2 = [6,8,9,2,5,3,4,];

function insertInLast (arr2, value) {
    for (let i = 0; i <= arr2.length ; i++) {
        arr2[arr2.length -1] = value;
        
    }
    
    return arr2;
}

// console.log(insertInLast(arr2, 55))