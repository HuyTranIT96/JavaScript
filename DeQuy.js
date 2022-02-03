var array = ['a','b', 'c','a','b', 'c'];

console.log([...new Set(array)]);

// đệ quy
// 1. Xác đinh kiểm dừng
// 2. Logic handle => tạo ra điểm dừng

// hàm countdown
 function CountDown(num){
     if(num > 0){
         console.log(num);
        return CountDown(num - 1);
     }
     return num;
 }
 CountDown(10); 

 // giai thừa
 function giaithua(number){
    if(number > 0){
        return number* giaithua(number - 1);
    }
    return 1;   
 }