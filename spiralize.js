var spiralize = function(size,i=1,e=0) {
  var matrix=[]
  for(var x=0;x<size;x++){
    matrix.push(Array(size).fill(1))
  }
  matrix[i][e]=0
  var go='right'
  while(go){
    if(go='right'){while(matrix[i][e+2]){e++;matrix[i][e]=0};matrix[i+2][e]&&matrix[i+1][e]?go='down':go=false}
    if(go='down'){while(matrix[i+2]&&matrix[i+2][e]){i++;matrix[i][e]=0};matrix[i][e-2]&&matrix[i][e-1]?go='left':go=false}
    if(go='left'){while(matrix[i][e-2]){e--;matrix[i][e]=0};matrix[i-2][e]&&matrix[i-1][e]?go='up':go=false}
    if(go='up'){while(matrix[i-2]&&matrix[i-2][e]){i--;matrix[i][e]=0};matrix[i][e+1]&&matrix[i][e+2]?go='right':go=false}
  }
  return matrix
}
