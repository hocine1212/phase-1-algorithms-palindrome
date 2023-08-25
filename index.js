function isPalindrome(word) {
  // Write your algorithm here
  // I expect calling isPalindrome function  that will receive one argument, a string that is, if it reads the same forwards and backwards, like "mom" or "racecar" it will return true and if not it will return false
  word = word.toLowerCase();
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
    convert the argument(string) to lowercase
    create a variable , assign it to the word(string) which we will split then reverse then join 
    if element (string) is equal to the new created variable:
    return true
    if not 
    return false
*/

/*
  Add written explanation of your solution here
  first we convert the argument(string) to lowercase
  then we created a variable and w assign it to  the word(argument) which we will split it to letters then reverse the order of the letters the join them to create w reversed version of the word (argument)
  and then we make an if statement that if the word is equal to the reversedWord variable it returns true and if it doesn't it returns false when we call isPalindrome function 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Dad"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
