var searchInsert = function(nums, target) {
    let pointerLow = 0
    let pointerHi = nums.length-1
    let mid = Math.floor((pointerHi + pointerLow) / 2)
    if (nums.length <= 2)return false
    if(target === nums[mid]){
        return true

    }
    else if(target === nums[pointerHi])return true
    else if(target === nums[pointerLow])return true
    else if(target > nums[mid]){
        
        return searchInsert(nums.splice(mid), target)
        
    }else if(target < nums[mid]){

        return searchInsert(nums.splice(0,mid), target)
    }
};

console.log(searchInsert([1,3,5,6,7,8,9,20,21],1))