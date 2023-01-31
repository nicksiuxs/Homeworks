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
console.log("method at: ", arr1.at(positiveIndex)) // 5

const negativeIndex = -3;
console.log("method at: ", arr1.at(negativeIndex)); //4;

// ----------------------

/**
 * Method Array.prototype.concat()
 * method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 */
const firstLetters = ["N", "I", "C", "O"]
const lastLetters = ["L", "A", "S"];
console.log("method concat: ", firstLetters.concat(lastLetters)); // ["N", "I", "C", "O","L", "A", "S"]

// ----------------------

/**
 *  Method Array.prototype.copyWithin()
 *  method shallow copies part of an array to another location in the same array and returns it without modifying its length.
 */

const arrayToCopy = [1, 2, 3, 4, 5, 6];
console.log("method copyWithin: ", arr1.copyWithin(0, 2, 4));
console.log(arrayToCopy.length)

// ----------------------

/**
 *  Method Array.prototype.entries()
 *  method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 */

const array2 = ["a", "b", "c"];
console.log(array2.entries().next())