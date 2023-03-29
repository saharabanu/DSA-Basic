// Delete first index 


let arr = [2,4,9,5,7,12,8];

function deleteInFirst(arr) {
    delete(arr[0])

   
   
    return arr
    
}
  console.log(deleteInFirst(arr));




// delete  in specific index 

let arr1 = [4,9,6,2,8,7];

function deleteSpecificIndex (arr1, targetIndex) {
    delete(arr1[targetIndex]);
  for (let i = targetIndex ; i < arr1.length; i++) {
    arr1[i] = arr1[i + 1]  ;
    // console.log(arr1[i + 1] = arr1[i])
    
  } 
  delete(arr1[arr1.length-1])
   arr1.length = arr1.length - 1
  return arr1
}
//   console.log(deleteSpecificIndex(arr1, 0))



// delete in last 


let arr2 = [6,8,9,2,5,3,4,];

function deleteInLast (arr2) {
    delete(arr2[arr2.length -1])
    arr2.length = arr2.length - 1
    
    return arr2;
}

//  console.log(deleteInLast(arr2))