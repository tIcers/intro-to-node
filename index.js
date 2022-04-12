//superhero module
const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
var mySuperheroName = superheroes.random();

console.log(mySuperheroName);
// till here



// supervillians module from here 

const supervillains = require('supervillains');
 
supervillains.all;
//=> ['Abattoir', 'Able Crown', …]
 
var supervillainsName = supervillains.random();
//=> 'Mud Pack'

console.log(supervillainsName);