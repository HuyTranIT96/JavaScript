array.prototype.reduce2  = function(callback, result){
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        result = this[0];  
    }
    for(; i < this.length; i++){
        return  callback(result, this[i], i, this)

    }
    return result;

}
console.log(result);

