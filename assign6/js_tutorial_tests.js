

function Person(name, age) {
    this.name = name
    this.age = age
}
var you = new Person('Chad',21)
console.log(you)
you.name = 'Rog'
console.log(you)

Person.prototype.nameCaps = function() {
    return this.name.toUpperCase();
  };
console.log(you.nameCaps())
console.log('\n')


function makePerson(first, last) {
    return {
      first: first,
      last: last,
      fullName: function() {
          return this.first+' '+this.last;
      },
      fullNameReversed: function() {
          return this.last+', '+this.first;
      }
    };
  }
  
var s = new makePerson('Simon', 'Willison');
console.log(s)
console.log(s.fullName())
console.log(s.fullNameReversed())

makePerson.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
  };
// console.log(s.firstNameCaps())
// console.log(firstNameCaps(s))

console.log('\n')

var player = {score:1, name:'Jeff'}
console.log(player)
var player_new = {...player, score:2}
console.log(player_new,'\n')