/**
 * 函数组合
 * @param  {...Function} fns 
 */
function compose(...fns) {
  return function composed(...args) {
    return fns.reduceRight((argArr, fn) => {
      return fn.apply(null, Array.isArray(argArr) ? argArr : [argArr]);
    }, args);
  }
}

export default compose;