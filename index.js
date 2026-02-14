//    Section 1: Array Advanced Methods 


//    Task 1.1 – map vs forEach vs reduce 
let numbers = [1, 2, 3, 4];
let mapResult = numbers.map((n, i) => {
  console.log(`map result -> index:${i}, value:${n}, pushes:${n * 2}`);
  return n * 2;
});
let EachResult = {};
numbers.forEach((n, i) => {
  console.log(`forEach -> index:${i}, value:${n}, pushes:${n * 2}`);
  EachResult[i] = n * 2;
});
let reduce = numbers.reduce((acc, n, i) => {
  console.log(`reduce -> index:${i}, acc:${acc}, value:${n}, next acc:${acc + n * 2}`);
  return acc + n * 2;
}, 0);


// Task 1.2 – filter + reduce Combination
let data = [10, 15, 20, 25, 30];
let condition = n => n > 15;
let result1 = data.filter(condition).reduce((a, b) => a + b, 0);
console.log("Result 1:", result1);
condition = n => n % 2 === 0;
let result2 = data.filter(condition).reduce((a, b) => a + b, 0);
console.log("Result 2:", result2);
condition = n => n < 25;
let result3 = data.filter(condition).reduce((a, b) => a + b, 0);
console.log("Result 3:", result3);


// Task 1.3 – Custom Array Method Simulation
function custom(arr, callback) {
   let result = [numbers]; 
  for (let i = 0; i < arr.length; i++) {
    console.log("Custom Function -> index:", i, "value:", arr[i]);
    result[i] = callback(arr[i], i, arr);
  } return result;
}
const fakeMap = custom(numbers, n => n + 1);
console.log("Custom map:", fakeMap);





//Section 2: JavaScript Behind the Scenes


// Task 2.1 – Hoisting Reality Check
let a = 10;
try {
    console.log(a);
} catch (e) {
    console.log("Error accessing a");
}
let b = 20;
try {
    console.log(b);
} catch (e) {
    console.log("Error accessing b");
}
function Behind() {
  console.log("Function declaration hoisted");
}
try {
  Behind();
} catch (e) {
  console.log("Function expression not hoisted");
}
let notHoisted = () => console.log("Will not run");


// Task 2.2 – Call Stack Observation
function first() {
  console.log("Enter first");
  second();
  console.log("Exit first");
}
function second() {
  console.log("Enter second");
  third();
  console.log("Exit second");
}
function third() {
  console.log("Enter third");
  console.log("Exit third");
}
first();
setTimeout(() => {
 console.log("Async task complete")}, 0);


// Task 2.3 – Closure Proof
function counterName() {
  let count = 0;
  return function () {count++;
    console.log("count:", count);};
}let counter = counterName();
console.log(counter());





// Section 3: Destructuring, Rest & Spread Operators


// Task 3.1 – Destructuring with Defaults
let user = { name: "Huzaifa", age: 22 , city: "Karachi"};
let full= { name: user.name, age: user.age, city: user.city };
console.log(full.name, full.age, full.city);


// Task 3.2 – Rest Parameters in Functions
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4));


//   Task 3.3 – Spread Operator & References
let original = { info: { score: 10 } };
let refCopy = original;
let spreadCopy = { ...original };
refCopy.info.score = 99;
console.log("Original after ref copy:", original.info.score);
spreadCopy.info.score = 50;
console.log("Original after spread copy:", original.info.score);





// FINAL PROJECT :: JavaScript Data Processor App
let users = [
{ id: 1, name: "A", age: 18, active: true },
{ id: 2, name: "B", age: 25, active: false },
{ id: 3, name: "C", age: 30, active: true },];
function create(prefix) {
  return msg => console.log(`${prefix}: ${msg}`);}
let log = create("APP");
let processed = users.filter(u => {log(`filter ${u.name}`);return u.active;})
  .map(u => {let{ name, age } = u;log(`map ${name}`);return { name, age };})
  .reduce((acc, u) => {log(`reduce add ${u.name}`);acc.totalAge += u.age;acc.users.push(u);
    return acc; }, { totalAge: 0, users: [] });
console.log("Final Output:", processed);


//        Experiment Logs
console.log("1. reduce can replace map + forEach together");
console.log("2. spread does NOT deep copy nested objects");
console.log("3. closures keep old variable values alive");