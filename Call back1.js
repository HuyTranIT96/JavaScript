// là hàm được truyền qua đổi sô
// khi gọi hàm khác

//1. Hàm
//2. Được truyền qua đối số

function myfunction(param){
    if(typeof param === 'function'){
    param("Học lập trình");
    }
}
function mycallback(value){
    console.log("value: ", value)
}

myfunction(mycallback);