/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine(); // outer function has no parameters

console.log(smoothie1("milk"));  // runs inner function
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries"); // parameters on outer function
console.log(smoothie2("pineapple"));                              // parameters on inner function
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/


let smoothieMachine = (...ingredients) => {
  let smoothie = [...ingredients];          // creating array to store ingredients

  return (...moreIngredients) => {                                       // returning a function that takes in ingredients & returns string
    smoothie.push(...moreIngredients);                                   // adding next lot of ingredients to array
    return `I'm having a smoothie with ${smoothie.join(' and ')}`;      // turning array back into string and returning it
  }
}

//------- OR -----------------------------------------------------------------------------

// let smoothieMachine = (...ingredients) => {
//   let smoothie = "I'm having a smoothie with ";

//   if (ingredients.length > 0) {                 // if there are arguments in smoothieMachine() parameters
//     smoothie += ingredients.join(' and ');      // add ingredients with 'and' in between
//   }
//   return (...moreIngredients) => {              // for parameters inside smoothie
//     moreIngredients.forEach(function(ingredient){
//       if (smoothie === "I'm having a smoothie with ") { // if there were no parameters in outer function
//         smoothie += ingredient;                 // so there's no 'and' before it
//         return smoothie;
//       }
//       smoothie += " and " + ingredient;
//     });
//     return smoothie;
//   }
// }



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
