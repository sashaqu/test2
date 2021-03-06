// 1

let arr1 = [61, 16, 39, 79, 99, 66, 42, 71, 5, 68, 80, 64, 34, 1, 44],
    arr2 = [61, 16, 39, 79, 99, 5, 34, 42, 64, 66, 68, 71, 80, 1, 44],
    sortArr1 = arr1.sort((a, b) => b - a),
    sortArr2 = arr1.sort((a, b) => b - a);

console.log(sortArr1);
console.log(sortArr2);
console.log('Максимальный элемент в 1-м массиве: ', sortArr1[0]);
console.log('Минимальный элемент в 1-м массиве: ', sortArr1[arr1.length - 1]);
console.log('Максимальный элемент в 2-м массиве: ', sortArr1[0]);
console.log('Минимальный элемент в 2-м массиве: ', sortArr1[arr2.length - 1]);

// 2 
function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = Math.floor(Math.random() * 10 + 1);
    }
  }
  return arr;
}
var myMatrix = matrixArray(5,3);
console.log(myMatrix);

for(let i = 0; i < 5; i++) {
  console.log('Спортсмен ', i + 1, 'имеет результаты ', myMatrix[i].sort((a, b) => a - b));
}

let myMatrix2 = [];

for(let i=0;i < 5; i++) { // Create a copy of the matrix above in order to check the program
  myMatrix2[i] = myMatrix[i].slice();
}

for(let i = 0; i < 5; i++) {
  console.log('У спортсмена', i + 1, ' лучший результат ', myMatrix2[i][myMatrix2[i].length - 1]);
}

// 3
function fibonacci(n) {
  var a = 1,
      b = 1;
  for (var i = 3; i <= n; i++) {
    var temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacci(7));