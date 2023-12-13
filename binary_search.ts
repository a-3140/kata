/**
 * Find a needle in a haystack but this time use a binary search algorithm
 * The time complexity should be O(log n)
 * The space complexity should be O(1)
 * We return the index of the value and -1 if we don't find the value
 */

/**
 * Pseudocode
 * Get left and right pointers
 * Get the midpoint
 * so if midpoint is equal to needle, return midpoint index
 * if midpoint is less than needle, right pointer will be current array length - 1, and left will be midpoint
 * else, left pointer will be 0 and right pointer will be midpoint
 * since left is always smaller than right, we terminate only when left is equal or greater than right or basically
 * we do this while left < right
 */

/**
 * binary search only works for sorted arrays
 */
function binary_search(haystack: Array<number>, needle: number) {
  let left = 0;
  let right = haystack.length - 1;

  do {
    let midpoint = Math.floor(right / 2);

    if (haystack[midpoint] === needle) {
      return midpoint;
    } else if (haystack[midpoint] < needle) {
      right = midpoint + haystack.length;
      left = midpoint;
    } else {
      right = midpoint;
      left = 0;
    }
    console.log("left:", left, "right:", right, "midpoint:", midpoint);
  } while (left < right);
}
const test1 = [1, 2, 3, 4, 5];
const test2 = [1, 2, 3, 4, 5, 6, 7, 8];
const test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log("Test 1:", binary_search(test1, 5) === 4);
console.log("Test 2:", binary_search(test2, 8) === 7);
console.log("Test 3:", binary_search(test3, 17) === 16);
