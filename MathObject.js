console.log(Math.round(1.8));
console.log(Math.random());
var random = Math.floor(Math.random()* 100);
var bonus =[
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
];
console.log(bonus[random]);
if(random < 10){
    console.log('Cường hóa thành công');
}
else console.log('Cường hóa không thành công')

