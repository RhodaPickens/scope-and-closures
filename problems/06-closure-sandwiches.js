/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sndwich2("pb") // => "One sandwich with tomato and pb"

let sandwich = sandwichMaker("spinach");
console.log(sandwich);

***********************************************************************/


function sandwichMaker() {
  let ingredients = "One sandwich with tomato";           // initialize ingredients
                                                          // store in outer function so ingredient list persists between runs of inner function
    function addIngredient(ingredient) {                    // inner function which accepts ingredient as a parameter
      ingredients += " and " + ingredient;                // add the ingredient to the variable stored in the outer function
      return ingredients;                                 // return the full ingredients variable from the outer function
    }
  return addIngredient;                                   // return inner function
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
