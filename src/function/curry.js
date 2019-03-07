/**
 * 函数柯里化
 * @param {Function} fn
 */
function curry(fn, arity = fn.length) {
  return (function nextCurry(prevArgs) {
    return function curried(...currentArgs) {
      let args = [...prevArgs, ...currentArgs];
      if (args.length >= arity) {
        return fn.apply(null, args);
      }
      return nextCurry(args);
    }
  })([]);
}

export default curry;