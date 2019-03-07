/**
 * 转化函数直接收一个参数
 * @param {Function} fn 
 */
function unary(fn) {
  return function unaried(arg) {
    return fn(arg);
  }
}

export default unary;