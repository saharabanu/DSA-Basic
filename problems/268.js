let nums = [9,6,4,2,3,5,7,0,1];

let missingNumber = function(nums) {
    let sum = (nums.length * (nums.length  + 1)) / 2;
    // console.log(sum)

    let sumArray = 0;
    for (let i = 0; i < nums.length; i++) {
        sumArray += nums[i];
        
        
    }
    return sum - sumArray
    /* 
    console.log(sum - sumArray, 'second')
    console.log(sum, 'third')
    console.log(sumArray, 'fourth')
    
    */
    
};
// console.log(missingNumber(nums))

let arr1 = [1,3,4,2,2,2,2,3, 6, 9, 5, 5];
var findDuplicate = function(arr1) {
    // let duplicateNums = [];
    for( let i = 0; i <= arr1.length; i++){
      for (let j = i + 1; j < arr1.length; j++) {
       if(arr1[i] === arr1[j]){
         console.log(arr1[j])
       }
        
      }
        
    }
    // return duplicateNums;

    // let duplicateNumbers =arr1.filter((item, index) => arr1.indexOf(item) !== index);
    // return duplicateNumbers
  
};

 console.log(findDuplicate(arr1))