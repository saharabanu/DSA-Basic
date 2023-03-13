const arr = [5, 6, 8, 2, 8, 9];


function linearSearch(arr, targetValue) {
  
    for (var i = 0; i < arr.length; i++) {
   
        if (arr[i] === targetValue) {
            return {
                index: i,
                found: true
            }
        }
    }
    return {
        index: -1,
        found: false
    }
   
}
let result = linearSearch(arr, 9)
console.log(result);
