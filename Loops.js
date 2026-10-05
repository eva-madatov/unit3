// ==========================================================
// AP CSP — JavaScript: Loops & Iteration
// practice_04_loops.js
//
// Complete each TODO below. Run this file (node practice_04_loops.js)
// and check the console output against the expected results in the comments.
// ==========================================================

// ---------- Problem 1: Range Builder ----------
// Return an array of every integer from start to end, inclusive.
// Use a for loop and .push() to build the array one number at a time.
// TODO: your code here

let start = 0;
let end = 10;
function getNumbersInRange(start, end) {
  const answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }
  return answer;
}

console.log(getNumbersInRange(1, 5)); // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8)); // [3, 4, 5, 6, 7, 8]

// ---------- Problem 2: Sum a Range ----------
// Return the sum of every integer from start to end, inclusive.
// Use the accumulator pattern: let total = 0; total += i; each pass.
// TODO: your code here

function sumRange(start, end) {
  let total = 0;
  for (let i = start; i <= end; total += i++) {}
  return total;
}

console.log(sumRange(1, 5)); // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4)); // 4

// ---------- Problem 3: Countdown ----------
// Return an array counting down from n to 1.
// Use a while loop, not a for loop.

function countdown(n) {
  while (n >= 1) {
    const count = [];
    console.log([n]);
    count.push(n);
    n--;
  }
  `break`;
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdown(1)); // [1]
console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]

// ---------- Problem 4: Count the Vowels ----------
// Return the number of vowels (a, e, i, o, u — lowercase only) in string.
// Loop through every index of the string and use an if statement to
// check whether that character is a vowel. Access a character with
// str[i] or str.charAt(i).

// TODO: your code here
function countVowels(str) {
  const vowels = ["a", "e", "o", "i", "u"];
  for (let i = 0; i <= str.length; i++);
  console.log(vowels);
}

console.log(countVowels("hello")); // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz")); // 0
console.log(countVowels("aeiou")); // 5
