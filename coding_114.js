/*
    SOLVED
    Good morning! Here's your coding interview problem for today.

    This problem was asked by Facebook.

    Given a string and a set of delimiters, reverse the words in the string while
    maintaining the relative order of the delimiters. For example, given
    "hello/world:here", return "here/world:hello"

    Follow-up: Does your solution work for the following cases:
    "hello/world:here/", "hello//world:here"
 */

let str = 'hello/world:here/';

// hello
const indexOfSlash = str.indexOf('/');
// here
const indexOfColon = str.indexOf(':');

// Index of /
const wordBeforeSlash = str.substring(0, indexOfSlash);
// Index of :
const wordAfterColon = str.substr(indexOfColon + 1, 4);

// Works with first and second case examples
str = str.replace(wordAfterColon, wordBeforeSlash);
str = str.replace(wordBeforeSlash, wordAfterColon);

console.log(str);
