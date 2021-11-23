var foo;
foo = "foo";
console.log(foo);//var




let fo = "am taller";//let
let tl = 6;

if(tl > 3){
  let fo = "am tallest";
  console.log(fo); 
}
console.log(fo); 


const pi=33;//constant
function rr(){
    if(pi){
        const pi=3.142;
        console.log(pi);
    }
    

}
console.log(pi);




let my= (a, b) => a * b ;//arrow function
var m =my(5,10);
console.log(m);



let name=(name="shyam")=>console.log(name);
name("ramanath kamath");//default


let firstName = "ramanath";//template string
let lastName = "kamath";

let text = `Welcome ${firstName}, ${lastName}`;
console.log(text);



const person={
    firstName:"ram",
    weight:107,
    height:6,
};
const person1={
    firstName1:"ram",
    weight1:101,
    height1:5,
};
const { weight , height }=person;
const weight=person.weight;
const height=person.height;
console.log(weight);
