var course = [
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


course.forEach(function (course, index) {
    console.log(index, course);
})
//every
var isfree = course.every(function (course, index) {
    return course.coin === 0;
});

console.log(isfree);
// some
var isfree2 = course.some(function (course, index) {
    return course.coin === 0;
});
console.log(isfree2);
// find 
var isfree3 = course.find(function (course, index) {
    return course.name === 'Python';
});
console.log(isfree3);
//filter
var isfree3 = course.filter(function (course, index) {
    return course.name === 'Python';
});
console.log(isfree3);


// map
function CourseHandler(course, index, originarray) {
    return {
        id: course.id,
        name: `khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `G1ia: ${course.coin}`,
        index: index,
        originarray: originarray

    };
}
var NewCourses = course.map(CourseHandler);
console.log(NewCourses);

var totalCoin = 0;

for (var course of course) {
    totalCoin += course.coin;
}
// console.log(totalCoin);



var numbers = [100, 200, 220, 300];
var totalCoin = numbers.reduce(function (total, numbers) {
    return total + numbers;
});
// console.log(totalCoin);
// làm phẳng mảng
var Array = [1, 2, [3, 4], 5, 6, 7, [7, 8, 9]];
var flatArray = Array.reduce(function (flatoutput, item) {
    return flatoutput.concat(item);
}, []);
// console.log(flatArray);
// làm phẳn chuổi bằng reduce
var topic = [
    {
        topic: "front-end",
        course: [
            {
                id: 1,
                title: "javascript"
            },
                {
                id: 2,
                title: "javascript"
                }
            
        ]

    },

    {
        topic:"Back-end",
        course:[
            {
                id:1,
                title:"PHP"
            },
            {
                id:2,
                title: "nodejs"
            }

        ]
    },
];

var NewCourses =topic.reduce(function(courses, topic){
    return courses.concat(topic.course);
},[]);

console.log(NewCourses);








