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