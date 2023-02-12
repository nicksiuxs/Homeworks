/**
 * Research and use all array functions.
 */

/**
 * Method Array.prototype.at()
 * method takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 */

const arr1 = [1, 2, 3, 4, 5, 6];

const positiveIndex = 4;
console.log("method at: ", arr1.at(positiveIndex)); // 5

const negativeIndex = -3;
console.log("method at: ", arr1.at(negativeIndex)); //4;

// ----------------------

/**
 * Method Array.prototype.concat()
 * method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 */
const firstLetters = ["N", "I", "C", "O"];
const lastLetters = ["L", "A", "S"];
console.log("method concat: ", firstLetters.concat(lastLetters)); // ["N", "I", "C", "O","L", "A", "S"]

// ----------------------

/**
 *  Method Array.prototype.copyWithin()
 *  method shallow copies part of an array to another location in the same array and returns it without modifying its length.
 */

const arrayToCopy = [1, 2, 3, 4, 5, 6];
console.log("method copyWithin: ", arr1.copyWithin(0, 2, 4)); // [ 3, 4, 3, 4, 5, 6 ]
console.log(arrayToCopy.length); // 6

// ----------------------

/**
 *  Method Array.prototype.entries()
 *  method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 */

const array2 = ["a", "b", "c"];
console.log("method entries: ", array2.entries().next()); // { value: [ 0, 'a' ], done: false }

// ----------------------

/**
 * Method Array.prototype.every()
 * method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
    "method every:",
    numbers.every((x) => x % 2 === 0)
); //false beacuse numbers has odd numbers

// ----------------------

/**
 * Mehtod Array.prototype.fill()
 * method changes all elements in an array to a static value, from a start index (default 0)
 * to an end index (default array.length). It returns the modified array.
 */
const vocalsA = ["a", "e", "i", "o", "u"];
const vocalsB = ["a", "e", "i", "o", "u"];
// array.fill(valueToFill,indexToStart, indexToEnd)
console.log("method fill:", vocalsA.fill("b", 2)); // [ 'a', 'e', 'b', 'b', 'b' ]
console.log("method fill:", vocalsB.fill("b", 2, 3)); // [ 'a', 'e', 'b', 'o', 'u' ]

// ----------------------

/**
 *  Method Array.prototype.filter()
 *  method creates a shallow copy of a portion of a given array,
 * filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */

const salaries = [200, 400, 600, 150, 900, 1000, 1001];
console.log("method filter:", salaries.filter(salary => salary >= 500));

// ----------------------

/**
 * Method Array.prototype.find()
 * method returns the first element in the provided array that satisfies the provided testing function. 
 * If no values satisfy the testing function, undefined is returned.
 */
console.log("method find:", salaries.find(salary => salary > 900));

// ----------------------

/**
 * Method Array.prototype.findIndex()
 * method returns the index of the first element in an array that satisfies the provided testing function. 
 * If no elements satisfy the testing function, -1 is returned.
 */
console.log("method findIndex:", salaries.findIndex(salary => salary > 900));

// ----------------------

/**
 *  Method Array.prototype.findLast()
 *  method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
 *  If no elements satisfy the testing function, undefined is returned.
 */
// console.log("method findLast:", salaries.findLast(salary => salary <= 200));

// ----------------------

/**
 *  Method Array.prototype.findLastIndex()
 *  method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. 
 *  If no elements satisfy the testing function, -1 is returned.
 */