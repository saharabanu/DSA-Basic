let nums = [1,2,5,2,3, 4,4, 8];


let targetIndices = function(nums, target) {
    let sortedArray = nums.sort((a,b) =>{
        return a-b

    })
    console.log(sortedArray)

    let result = [];
    for( let i = 0; i <= sortedArray.length; i++){
        if(sortedArray[i] === target){
            result.push(i)
        }
    }
     return result
    // console.log(result)
    
};

console.log(targetIndices(nums, 8))