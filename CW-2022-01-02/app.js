// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr){
  
  
    let newarr=[]
    
    
       for(let i=0;i<arr.length;i+=2){
            newarr.push(arr[i])
    
       }   return newarr
       console.log(newarr)
    }

    //removeEveryOther([1,3,2,4,3,64,6])y
    