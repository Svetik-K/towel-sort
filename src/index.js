
module.exports = function towelSort (matrix) {
  const newArr = [];
  if(!matrix) {
    return [];
  }

  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 0 || i === 0) {
      for(let j = 0; j < matrix[i].length; j++) {
        newArr.push(matrix[i][j]);
      } 
    }
    else {
      for(let k = matrix[i].length - 1; k >= 0; k--) {
        newArr.push(matrix[i][k]);
      }
    }
  }
  return newArr; 
}