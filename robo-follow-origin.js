/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let horizontal = 0;
    let vertical = 0;

    for (let move of moves) {
        if (move === 'U') {
            vertical++;
        } else if (move === 'D') {
            vertical--;
        } else if (move === 'L') {
            horizontal++;
        } else if (move === 'R') {
            horizontal--;
        }
    }

    return horizontal === 0 && vertical === 0;
};