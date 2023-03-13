// task: Array Insertion
// point 1: Insert in First Index
// point 2: Insert in Last Index
// point 3: Insert in specific[targetIndex] Index


let numbers = [3,7, 9,5, 8,10];

// point 1: Insert in First Index
function insertInFirst (numbers){
    for (let i = 0 ; i <= numbers.length -1; i++) {
        numbers[0] = 29
    }  
     return numbers;
}
const result = insertInFirst(numbers);
// console.log(result)

// point 2: Insert in Last Index

function insertInFirst (numbers){
    for (let i = 1  ; i <= numbers.length -1; i++) {
        numbers[numbers.length -1] = 64;
    }  
     return numbers;
}
const result1 = insertInFirst(numbers);
// console.log(result1)

// point 3: Insert in specific[targetIndex] Index


function insertInFirst (numbers, targetIndex, value){
    for (let i = numbers.length -1  ; i >= targetIndex; i--) {
        numbers[i + 1] = numbers[i];
        
    }  
    numbers[targetIndex]= value;
    // console.log(numbers)
     return numbers;
}
const result3 = insertInFirst(numbers,3,77);
// console.log(result3)  // why do undefine\


// Insert in specific Index
let arr = [1, 2, 3, 4, 5];
function insert(arr, targetIndex, value) {
    for (let i = arr.length ; i <= targetIndex; i--) {
        arr[i + 1] = arr[i]
    }
    arr[targetIndex] = value
    return arr;
}
let resultt = insert(arr, 2, 10)
// console.log(resultt);


// task: Array deletion
// point 1: deletion in First Index

function deleteInFirst (numbers){
    for (let i = 1 ; i <= numbers.length; i++) {
        numbers[0] = numbers[i]
      
       
    } 
    numbers.length[0] = numbers

     return numbers
}
const result4 = deleteInFirst(numbers);
//  console.log(result4); // problem ase



// const [removed, ...newArr] = arr2



// point 2: deletion in Last Index

function deleteSpecificIndex(arr) {
    for (let i = 1; i < arr.length-1; i++) {
        arr.length=arr.length - 1
    }
   
    return arr;
}
let result6 = deleteSpecificIndex(arr)
// console.log(result6);
// point 3: deletion in specific[targetIndex] Index









// Deletion in specific Index

function deleteSpecificIndex(numbers, targetIndex) {
    for (let i = targetIndex; i < numbers.length; i++) {
        numbers[i] = numbers[i + 1]
    }
    numbers.length=numbers.length - 1
    return numbers;
}
let result5 = deleteSpecificIndex(numbers, 2)
console.log(result5);