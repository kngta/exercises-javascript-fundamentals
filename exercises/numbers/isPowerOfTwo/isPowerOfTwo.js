/**
 * Given a non-negative integer as input, returns `true` if input is a power of `2` and `false` otherwise.
 *
 * A number is a power of `2` if it can be written as `2**k` for some positive integer `k`, where "`**`"
 * represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `81` is not a power of `2` since there's no integer `k` such that `81 === 2**k`.
 *
 * However, `81` _is_ a power of `3` since `81 === 3**4`.
 *
 * @example
 * isPowerOf(2) // => true
 * isPowerOf(3) // => false
 * isPowerOf(4) // => true
 * isPowerOf(2**20) // => true
 * isPowerOf(2**20 + 1) // => false
 * 
 * @param {number} num - The input number
 * @returns {boolean} True if input is a power of 2 and false otherwise.
 */
function isPowerOfTwo(num) {
  // Your code here
  // Remember, you can assume that num is a positive integer.
  if (Number.isInteger(Math.sqrt(num))) 
    return true
  else
    return false
}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOfTwo:');

  // Is 0 a power of two? Is 1?
  console.log(isPowerOfTwo(0) === false);
  console.log(isPowerOfTwo(1) === true);

  console.log(isPowerOfTwo(2) === true);
  console.log(isPowerOfTwo(3) === false);
  console.log(isPowerOfTwo(4) === true);
  // Your sanity checks here.
}

module.exports = isPowerOfTwo;
