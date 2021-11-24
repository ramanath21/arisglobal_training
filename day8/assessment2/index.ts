let sum = (a: string, b: string, c?: string) => {
  return `${a} ${b} ${c}`;
};

console.log(sum("hello", "hi"));

interface IPerson {
  firstName: string;
  lastName: string;
  greet: () => string;
}
var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  greet: function () {
    return "Hi there";
  }
};

console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.greet());
