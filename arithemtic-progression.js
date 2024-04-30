/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 1; i < arr.length - 1; i++) {
        // Calculate the difference between consecutive elements
        if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
            return false; // If differences are not equal, return false
        }
    }

    return true; // If all differences are equal, return true
};