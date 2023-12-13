const linear_search = (haystack: number[], needle: number) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
  return -1;
};

const test = [1, 2, 3, 4, 5];

const result = linear_search(test, 5);

console.log(result === 4);

/**
 * Why ordering of a list matters?
 */
