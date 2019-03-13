import map from './map';
/**
 * 从目标对象中抽取出给定属性组成的新对象
 * @param {Object} obj 
 * @param  {...String} props 
 */
function pick(obj, ...props) {
  let target = {};
  map(props, key => target[key] = obj[key]);
  return target;
}

export default pick;