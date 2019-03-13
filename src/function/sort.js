
/**
 * 数组升序排序
 * @param {Array} arr 
 */
export default function sort(arr) {
  const newArr = [...arr]; 
  const _sort = function _sort(l, r) {
    if (l >= r) {
      return;
    }
    let i = l;
    let j = r;
    let t = newArr[i];
    while (i !== j) {
      while(newArr[j] >= t && i < j) {
        j--;
      }
      while(newArr[i] <= t && i < j) {
        i++;
      }
      if (i < j) {
        let tt = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = tt;
      }
    }
    let tt = newArr[i];
    newArr[i] = t;
    newArr[l] = tt;
    _sort(l, i - 1);
    _sort(i + 1, r);
  }
  _sort(0, newArr.length - 1);
  return newArr;
}