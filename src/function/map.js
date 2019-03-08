/**
 * Map ArrayLike Object
 * @param {ArrayLike} arrLike 
 * @param {Function} fn 
 */
export default function map(arrLike, fn) {
  let newArray = [];
  for (let index = 0; index < arrLike.length; index++) {
    newArray.push(fn(arrLike[index], index, arrLike));
  }
  return newArray;
}