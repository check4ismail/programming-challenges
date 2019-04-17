/*
    SOLVED
    This problem was asked by Google.

    Given a string of words delimited by spaces, reverse the words in string.
    For example, given "hello world here", return "here world hello"

    Follow-up: given a mutable string representation, can you perform this operation in-place?
 */

const sentence = 'hello world here';
const wordsOfSentence = sentence.split(' ');
let reversedSentence = '';
for(let i = wordsOfSentence.length - 1; i >= 0; i--) {
    reversedSentence += wordsOfSentence[i] + ' ';
}

console.log(reversedSentence);