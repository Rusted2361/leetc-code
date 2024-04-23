/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        // Swap the non-zero element to the current nonZeroIndex
        [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
        nonZeroIndex++;
      }
    }
  };