/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // Create a character frequency map
    const charCount = {};

    // Populate the frequency map for string s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Decrement character counts for string t and check for mismatches
    for (let char of t) {
        if (!charCount[char]) {
            return false; // Character doesn't exist in s
        }
        charCount[char]--;
    }

    return true; // Both strings are anagrams
};

