[YACK (Yet Another Currying Kata)](https://www.codewars.com/kata/yack-yet-another-currying-kata)
=

## Task
Currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument (partial application).

Example
Given this function:

function add(x, y, z) {
  return x + y + z;
}
We can apply it in the normal way:

add(1, 2, 3); //6
But we can create a curried version of add(a, b, c) function:

function curriedAdd(a) {
  return function(b) {
    return function (c) {
      return add(a, b, c);
    };
  };
}

curriedAdd(1)(2)(3); //6
Your job is to implement the yack function which allows currying any function passed as an argument.

var curriedAdd = yack(add);
curriedAdd(1)(2)(3); //6
yack function can receive some arguments to pass to the curried function.

var curriedAdd = yack(add, 1, 2);
curriedAdd(3); //6
You can pass more than one argument on each call to the curried function.

var curriedAdd = yack(add);
curriedAdd(1, 2)(3); //6
Or you can pass no arguments (this will have no effect):

var curriedAdd = yack(add);
curriedAdd(1)()()()(2)(3); //6
You can re-curry the curried function with no effects:

var curriedAdd = yack(add);
yack(curriedAdd)(1)(2)(3); //6
yack(yack(yack(curriedAdd)(1)))(2)(3); //6
The arguments passed in excess will be ignored:

var curriedAdd = yack(add);
yack(curriedAdd)(1)(2)(3, 4, 5); //6
The curried function does not maintain internal state:

var curriedAdd = yack(add)(1);
curriedAdd(2)(3); //6
curriedAdd(2)(4); //7
In the implementation of the solution, you should not use any of the following functions: (Note: Actually the tests are not checking that these methods are not used because I do not know how to do it. Any help is welcome).

Function.prototype.bind
Function.prototype.call
Function.prototype.apply
Hint: use instead the spread operator of ES2015
