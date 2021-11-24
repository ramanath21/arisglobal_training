interface first {
  name: string;
  age: number;
}

interface second {
  id: number;
  problem: string;
  department: string;
}

interface third extends first, second {}

let person: third = {
  name: "ramanath kamath",
  age: 22,
  id: 5732,
  problem: "not raising ticket",
  department: "safety"
};

console.log(person.name);
console.log(person.age);
console.log(person.id);
console.log(person.problem);
console.log(person.department);
