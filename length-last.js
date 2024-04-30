/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums, sign=false) {
    if(nums.length === 0) return (sign ? -1 : 1)

    const el = nums.pop();
    if (el === 0) return 0
    
    return arraySign(nums, el < 0 ? !sign : sign) 

};