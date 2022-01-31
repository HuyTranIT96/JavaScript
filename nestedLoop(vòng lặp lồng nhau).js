//vòng lặp lồng nhau
var myArray = [
    [1,2],
    [3,4],
    [6,7],
    [8,9]
]

for(var i = 0;i <myArray.length;i++){ // lấy ra 4 mảng trong mảng myarray
   for(var j = 0; j < myArray[i].length; j++){// duyệt qua từng phần tử trong 4 mảng đó rồi in ra
       console.log(myArray[i][j]);
   }
}