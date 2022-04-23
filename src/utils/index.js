/**
 * randomize elements of array
 * @param {Array} array 
 * @returns {Array} new array
 */
export const shuffle = (array) => {
  return array.sort(() => 0.5 - Math.random())
}