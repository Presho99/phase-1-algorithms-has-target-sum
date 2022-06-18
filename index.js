function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    const num = target - array[i]
    for(let j = 0; j < array.length-1-1; j++) {
       if(array[j] === num) {
         return true
       } 
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  The time complexity is 0(n * n) due to the presence of the nested for loop :(for(let i = 0; i < array.length; i++))
*/

/* 
  Add your pseudocode here
  Iterate over the given array.
   create a variable "num" which is equal to the difference of the target and the number that when added to the variable will give the value of the target
   iterate over the remaining numbers in the array
    if any of the remaining numbers is equal to the variable "num"
     return true
    if at the end of the array none of the numbers equals "num"
     return false
*/

/*
  Add written explanation of your solution here
  Use the for loop to iterate over the given array. Pick one number from the array. Create a variable that equals to the value given by subtracting the number picked from the target. Iterate over the remaining numbers in the array.
  If any of the remaining numbers equals to the value of the variable, then the function should return true. If none of the numbers in the array is equal to the variable then the function should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
