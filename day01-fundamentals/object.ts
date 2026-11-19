let number: number[] = [1, 2, 3, 4, 5];
console.log(number);

//object
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "bayjid Mia",
  age: 30,
  isAdmin: true,
};

console.log(user);
// Union Type
let value: string | number = "hello";
value = 42;
console.log(value);

type Statas = "active" | "inactive" | "pending";
let userStatus: Statas = "active";
console.log(userStatus);
let value2: unknown = "Bayjid";

if (typeof value2 === "string") {
  console.log(value2.toUpperCase());
}
