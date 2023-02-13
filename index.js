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
console.log("method findLast:", salaries.findLast(salary => salary <= 200));

// ----------------------

/**
 *  Method Array.prototype.findLastIndex()
 *  method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. 
 *  If no elements satisfy the testing function, -1 is returned.
 */
console.log("method findLast:", salaries.findLastIndex(salary => salary <= 200));

// ----------------------

/**
 *  Method Array.prototype.flat()
 *  method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */
const array3 = [1, 2, 3, [4, [5, 6]]];
console.log("method flat:", array3.flat());

// ----------------------

/**
 *  Method Array.prototype.flatMap()
 *  method returns a new array formed by applying a given callback function to each element of the array, and then 
 *  flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), 
 *  but slightly more efficient than calling those two methods separately.
 */
const array4 = [{ name: "Nicolas" }, { name: "Juan" }, [{ name: "Felipe" }, { name: "Juan" }]]
console.log("method flatMap:", array4.flatMap(person => person.name))

// ----------------------

/**
 *  Method Array.prototype.forEach()
 *  method executes a provided function once for each array element.
 */
const persons = [{ name: "Nicolas" }, { name: "Juan" }, { name: "Isabella" }];
console.log("method forEach Start:");
persons.forEach(person => {
    console.log(person.name)
})
console.log("method forEach end:");

// ----------------------

/**
 *  Method Array.from()
 *  static method creates a new, shallow-copied Array instance from an iterable or array-like object.
 */
const oddNumbers = [2, 4, 6, 8, 10];
console.log("method from:", Array.from(oddNumbers, number => number * number));

// ----------------------

/** 
 *  Method Array.prototype.includes()
 *  method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/
console.log("method includes:", oddNumbers.includes(2));

// ----------------------

/**
 *  Method Array.prototype.indexOf()
 *  method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/
console.log("method indexOf:", oddNumbers.indexOf(8));

// ----------------------

/**
 *  Method Array.isArray() 
 *  static method determines whether the passed value is an Array.
*/
console.log("method isArray:", Array.isArray(oddNumbers));

// ----------------------

/**
 *  Method Array.prototype.join()
 *  method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
 *  separated by commas or a specified separator string. If the array has only one item, then that item will be returned 
 *  without using the separator.
*/
const phrase = ["Hola", "mundo", "!"];
console.log("method join:", phrase.join(" "));

// ----------------------

/**
 *  Method Array.prototype.keys()
 *  method returns a new Array Iterator object that contains the keys for each index in the array.
*/
const iterator = phrase.keys();
console.log("method keys start:");
for (const index of iterator) {
    console.log(index);
}
console.log("method keys end:");

// ----------------------

/**
 *  Method Array.prototype.lastIndexOf()
 *  method returns the last index at which a given element can be found in the array, or -1 if it is not present. 
 *  The array is searched backwards, starting at fromIndex.
*/
console.log("method lastIndexOf:", oddNumbers.lastIndexOf(4));

// ----------------------

/**
 *  Method Array.prototype.map()
 *  method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
const evenNumbers = [1, 3, 5, 7, 9, 11];
console.log("method map:", evenNumbers.map(number => number + 2));

// ----------------------

/**
 *  Method Array.of()
 *  static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
*/
console.log("method of:", Array.of(oddNumbers, evenNumbers));

// ----------------------

/**
 *  Method Array.prototype.pop()
 *  method removes the last element from an array and returns that element. This method changes the length of the array.
*/
console.log("method pop:", evenNumbers.pop());

// ----------------------

/**
 *  Method Array.prototype.push()
 *  method adds one or more elements to the end of an array and returns the new length of the array.
*/
evenNumbers.push(13);
console.log("method push:", evenNumbers);

// ----------------------

/**
 *  Method Array.prototype.reduce()
 *  method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value 
 *  from the calculation on the preceding element. The final result of running the reducer across all elements of the array is 
 *  a single value.
 * 
 *  The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may 
 *  be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element 
 *  (index 1 instead of index 0).
 * 
 *  Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
*/
const sumEvenNumbers = evenNumbers.reduce((accum, currenValue) => {
    return accum + currenValue
}, 0);
console.log("method reduce:", sumEvenNumbers);

// ----------------------

/** 
 *  Method Array.prototype.reduceRight()
 *  method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
*/
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]]
const newArray = arrayOfArrays.reduceRight((accum, currenValue) => accum.concat(currenValue));
console.log("method reduceRight:", newArray);

// ----------------------

/** 
 *  Method Array.prototype.reverse()
 *  method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, 
 *  and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction 
 *  opposite to that previously stated.
*/
console.log("method reverse:", newArray.reverse());

// ----------------------

/**
 *  Method Array.prototype.shift()
 *  method removes the first element from an array and returns that removed element. This method changes the length of the array.
*/
console.log("method shift:", newArray.shift());

// ----------------------

/**
 *  Method Array.prototype.slice()
 *  method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
 *  where start and end represent the index of items in that array. The original array will not be modified.
*/
console.log('method slice:', newArray.slice(2, 4));

// ----------------------

/**
 *  Method Array.prototype.some()
 *  method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if,
 *  in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
*/
console.log('method some:', oddNumbers.some(number => number % 2 === 1));

// ----------------------

/**
 *  Method Array.prototype.sort()
 *  method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending,
 *  built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
*/
const mixedNumbers = oddNumbers.concat(evenNumbers);
console.log("method sort:", mixedNumbers.sort((a, b) => a - b));

// ----------------------

/**
 *  Method Array.prototype.splice()
 *  method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an 
 *  array without modifying it, see slice().
*/
console.log("method splice before:", newArray);
newArray.splice(1, 0, 2)
console.log("method splice after:", newArray);

// ----------------------

/**
 *  Method Array.prototype.toLocaleString()
 *  method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and 
 *  these Strings are separated by a locale-specific String (such as a comma ",").
*/
const mixed = [1, 2, 3, 4];
console.log("method toLocaleString:", mixed.toLocaleString());

// ----------------------

/**
 *  Method Array.prototype.toString()
 *  method returns a string representing the specified array and its elements.
*/
console.log("method toString:", mixed.toString());

// ----------------------

/**
 *  Method Array.prototype.unshift()
 *  method adds one or more elements to the beginning of an array and returns the new length of the array.
*/
mixed.unshift(-2, -1, 0);
console.log("method unshift:", mixed);

// ----------------------

/**
 *  Method Array.prototype.values()
 *  method returns a new array iterator object that iterates the value of each item in the array.
*/
const iterator2 = mixed.values();
console.log("method values start:");
for (const value of iterator2) {
    console.log(value)
}
console.log("method values end:");