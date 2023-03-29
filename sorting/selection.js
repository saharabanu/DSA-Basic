let arr = [9,45, 6, 2, 7, 49, 79, 1, 90];

function selectionSortFunc (arr)  {
    for (let i = 0; i < arr.length; i++) {

        let min = i;

        for (let j = i ; j < arr.length; j++) {
           if(arr[min] > arr[j]){
            min = j;
            // console.log(min)
           }
            
        }
        let temp = arr[i]
        arr[i] = arr[min];
        arr[min] = temp;
        
        
    }
    return arr
}

console.log(selectionSortFunc(arr))