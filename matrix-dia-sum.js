// var diagonalSum = function(mat) {
//   const size = mat.length;
//   let mainSum = 0;
//   let secondarySum = 0;

//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       // For the main diagonal (i === j)
//       if (i === j) {
//         // console.log(i,j)
//         mainSum += mat[i][j];
//       }
//       // For the secondary diagonal (i + j === size - 1)
//       if (i + j === size - 1) {
//         // console.log(i,j)
//         secondarySum += mat[i][j];
//       }
//     }
//   }
  
//   // If the matrix has an odd number of rows/columns, we need to subtract the middle element once as it's been added twice
//   if (size % 2 !== 0) {
//     const mid = Math.floor(size / 2);
//     mainSum -= mat[mid][mid];
//   }

//   let sum = mainSum + secondarySum;
//   return sum;
// };

var diagonalSum = function(mat) {
    const size = mat.length;
    let mainSum = 0;
    let secondarySum = 0;

    // Traverse the matrix in a single loop
    for (let i = 0; i < size; i++) {
        // Sum the main diagonal element and the corresponding element from the secondary diagonal
        mainSum += mat[i][i];
        secondarySum += mat[i][size - 1 - i];
    }

    // If the matrix has an odd number of rows/columns, subtract the middle element from the main diagonal sum
    if (size % 2 !== 0) {
        const mid = Math.floor(size / 2);
        mainSum -= mat[mid][mid];
    }

    return mainSum + secondarySum;
};