
var PosApi = 
'https://jsonplaceholder.typicode.com/posts'

fetch(PosApi)
.then(function(response){
    return response.json();
})
.then(function(posts){
    console.log(posts);
})
