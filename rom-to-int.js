/**
 * @param {string} s
 * @return {number}
 */
 const roman_values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

const romanToInt = function(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current_value = roman_values[s[i]];
        const next_value = roman_values[s[i + 1]];

        if (next_value === undefined || current_value >= next_value) {
            result += current_value;
        } else {
            result -= current_value;
        }
    }
   
    return result;
};