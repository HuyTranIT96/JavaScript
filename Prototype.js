// object constructor
function user(firstName, lastName, Avata)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.Avata= Avata;
    this.getname = function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
var Autor = new user('Huy','Tran Quoc', 'HuyTRan');
var Guest2 = new user('Nhi','Nguyen', 'Nhi Nguyen');
user.prototype.ClassName = 'F8';
user.prototype.getclassName = function(){
    return this.ClassName;
}
Autor.comment = 'Hello every';
Guest2.title = 'Vip';
console.log(Autor);
console.log(Guest2);
console.log(Autor.getname());
console.log(Guest2.getclassName());