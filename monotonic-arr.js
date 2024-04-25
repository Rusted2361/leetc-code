/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    isincreasing = true;
    isdecreasing = true;
    for (let i=1; i < nums.length; i++){
        if (nums[i]<nums[i-1]){
            isincreasing = false;
        }
        if (nums[i]>nums[i-1]){
            isdecreasing = false;
        }
    }
    return isincreasing || isdecreasing
};