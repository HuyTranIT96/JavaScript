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
var Guest = new user('Nhi','Nguyen', 'Nhi Nguyen');
Autor.comment = 'Hello every';
Guest.title = 'Vip';
console.log(Autor);
console.log(Guest);
console.log(Autor.getname());