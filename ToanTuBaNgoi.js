//toán tử 3 ngôi

//use if..else
var course ={
    name: 'Javascript',
    coin: 0
}
if(course.coin > 0){
    console.log(`${course.coin} coin`);
}else{
    console.log('Miễn phí');
}

// use toán tử 3 ngôi
var result = course.coin > 0 ? `${course.coin} coin` : 'Miễn phí';
console.log(result);

var a = 1;
var b = 2;
var c = a > b ? a : b;

/* Sử dụng toán tử 3 ngôi (Ternary operator) để giải bài tập sau:

Cho trước biến a là giá trị bất kì

Nếu a là số nguyên thì hàm trả về số a
Nếu a không phải số nguyên thì trả về giá trị được làm tròn dưới của a */

var a = 9.8;
function run(a) {
   var c = Number.isSafeInteger(a);
  return c;
    //  return c = true ? a : Math.floor(a);
}
 var d;
 d== true ? a : Math.floor(a);
console.log(d);
/*Sử dụng toán tử 3 ngôi để giải bài tập sau: Hàm run sẽ trả về 'even' nếu number là số chẵn, ngược lại trả về 'odd' */
/** @param {number} number */
function run(number) {
    var result =  number %2 == 0 ? 'even' : 'odd'
   return result;

}