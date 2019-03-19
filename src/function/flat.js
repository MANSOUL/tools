/**
 * 展平数组
 * @param {Array} arr 
 */
export default function flat(arr) {
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(flat(cur));
    }
    return prev.concat([cur]);
  }, []);
}