let user = {};

[user.name, user.age] = ['ramanath kamath', 29];

console.log(user.name);     
console.log(user.age);




const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); 




function fun(...input){
	let sum = 0;
	for(let i of input){
		sum+=i;
	}
	return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15				
