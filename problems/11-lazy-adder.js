/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1); // outer function runs
let secondAdd = firstAdd(2); // inner function runs
let sum = secondAdd(3); // inner inner function runs
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
  - Since the return is implicit with arrow functions, I could write the name of the function, parameter, fat arrow
  and then the single statement without curly braces for each function, leading to the next.
***********************************************************************/


let lazyAdder = firstNum => {
  let sum = firstNum;

  return function (secondNum) {
    sum += secondNum;

    return function (thirdNum) {
      sum += thirdNum;
      return sum;
    };
  };
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
