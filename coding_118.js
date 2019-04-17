/*
    Given a sorted list of integers, square the elements and give the output in sorted order.
    For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
 */

let array_num = [-9, -2, 0, 2, 3];
let newArray = arraySquared(array_num);
console.log(newArray);
function arraySquared(array) {


    for(let i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i], 2);
    }

    // Proper way to sort an array in JS
    array.sort((a, b) => a - b);
    return array;
};
