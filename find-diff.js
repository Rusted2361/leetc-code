/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function removeCharsFromB(a, b) {
    for (let i = 0; i < a.length; i++) {
      const charToRemove = a[i];
      b = b.replace(charToRemove, '');
    }
    return b;
  }