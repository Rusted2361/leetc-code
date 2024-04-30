/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
    let result = [];
    for (let i = 0; i < operations.length; i++) {
    let element = operations[i];

    switch(element) {
    case "+":
        // code block
        if (result[result.length-1] && result[result.length-2]){
                let lastValue = Number(result[result.length-1])
                let secondLastValue = Number(result[result.length-2])
                let addValue = secondLastValue+lastValue
                result.push(addValue)
            }
        break;
    case "D":
        // code block
        if (result[result.length-1]){
            let mulValue = String(result[result.length-1]*2)
            result.push(mulValue)
        }
        break;
    case "C":
        // code block
        if (result[result.length-1]){
            result.pop()
        }
        break;
        
    default:
        result.push(element)
    }
    
}
// create a variable for the sum and initialize it
let sum = 0;

// calculate sum using forEach() method
result.forEach( num => {
sum += Number(num);
})

return sum
};