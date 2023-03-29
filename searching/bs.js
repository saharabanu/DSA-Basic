// order agnostic binary search-[ascending || descending]
// floor and ceil
// number of occurance


/** 
const arr = [5, 6, 8,8,8,8, 9,10,11];
const rev = [9, 8, 7, 6, 5];

function binarySearcher(arr, targetValue) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let flag = arr[0] > arr[1]
    while (start <= end) {
        // mid = Math.floor((start + end) / 2);
        mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === targetValue) {

            return `Found Index ${mid}`;
        }
        if (flag) {
            if (arr[mid] > targetValue) {
                start = mid + 1;
            }
            else if (arr[mid] < targetValue) {
                end = mid - 1;
            }
        } else {
            if (arr[mid] < targetValue) {
                start = mid + 1;
            }
            else if (arr[mid] > targetValue) {
                end = mid - 1;
            }
        }
    }
    return "not Found";
}
const result = binarySearcher(arr, 8)
console.log(result)
*/

const arr = [5, 6, 8, 8, 8, 8, 9, 10, 11];

function binarySearcher(arr, targetValue) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        // mid = Math.floor((start + end) / 2);
        mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === targetValue) {
            let sum = 1
            for (let i = mid + 1; i <= arr.length; i++) {
                if (arr[i] === targetValue) {
                    sum += 1
                }
                else break
            }
            for (let i = mid - 1; i >= 0; i--) {
                if (arr[i] === targetValue) sum += 1
                else break
            }
            return `Found Index ${mid}- total -> ${sum}`;
        }
        else if (arr[mid] < targetValue) {
            start = mid + 1;
        }
        else if (arr[mid] > targetValue) {
            end = mid - 1;
        }

    }
    return "not Found";
}
const result = binarySearcher(arr, 10)
console.log(result)