import map from './map';

/**
 * 从数组中找到符合条件的对象
 * @param  {Array} arr   目标数组
 * @param  {Object} props 
 * @return {Object}       
 */
function find(arr, props) {
  let target = null;
  map(arr, item => {
    let pass = true;
    for (let key in props) {
      if (props[key] !== item[key]) {
        pass = false;
        break;
      }
    }
    if (pass) {
      target = item;
    }
  });
  return target;
}

export default find;