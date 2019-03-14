/**
 * 判断给定参数时候为相应类型
 * @param {Any} target 
 * @param {String} type 
 */
export default function type(target, type) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase() === type.toLowerCase();
}