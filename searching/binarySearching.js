const arr = [5, 6, 7, 8, 9,111, 15, 20, 25,33,44,55,66,77,88,99,111];



console.time("binary")
function binarySearcher(arr, targetValue) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === targetValue) {
            return `Found Index ${mid}`;
        }
        else if (arr[mid] < targetValue) {
            start = mid + 1;
        }
        else if (arr[mid] > targetValue) {
            end = mid - 1;
        }
    }
    return "Not Found";
}
const result = binarySearcher(arr, 111)
console.log(result);
console.timeEnd("binary")





console.time("linear")
function linearSearch(arr, targetValue) {
    let result = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === targetValue) {
            result.push(i)
        }
        else{
            return []
        }
        
    }
    return result
}
let result1 = linearSearch(arr, 11111)
console.log(result1);
console.timeEnd("linear")