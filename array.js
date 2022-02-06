var course =[
    {
       id: 1,
       name: 'javascript',
       coin: 250
    },
    {
        id: 2,
        name: 'Java',
        coin: 250
     },
     {
        id: 3,
        name: 'C++',
        coin: 0
     }, {
        id: 4,
        name: 'Python',
        coin: 250
     },
     {
        id: 4,
        name: 'Python',
        coin: 250
     }
];

// foreach
// course.forEach(function(course,index){
//     console.log(index,course);
// })
//every
var isfree =course.every(function(course,index){
    return course.coin === 0;
});

console.log(isfree);
// some
var isfree2 =course.some(function(course,index){
    return course.coin === 0;
});
console.log(isfree2);
// find 
var isfree3 =course.find(function(course,index){
    return course.name === 'Python';
});
console.log(isfree3);
//filter
var isfree3 =course.filter(function(course,index){
    return course.name === 'Python';
});
console.log(isfree3);


// map
function CourseHandler(course, index,originarray){
    return {
        id: course.id,
        name: `khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index : index,
        originarray:originarray

    };
}
var NewCourses = course.map(CourseHandler);
console.log(NewCourses);