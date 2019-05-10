import type from './type';

/**
 * 判断给定参数o的类型是否为t
 * @param {Any} o 
 * @param {String} t 
 */
function isTypeOf(o, t) {
  return type(o) === t;
}

/**
 * 使用数组解决循环引用
 * @param {Array} array 
 * @param {Object} item 
 */
function find(array, item) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.source === item) {
      return element.target;
    }
  }
  return null;
}

/**
 * 深克隆
 * @param {Object} x 
 */
function bfsClone(x, uniqueList = []) {
  const root = Array.isArray(x) ? [] : {};
  const loopList = [{
    parent: root,
    key: undefined,
    data: x
  }];
  uniqueList.push({
    source: x,
    target: root
  });
  while (loopList.length) {
    let node = loopList.pop();
    let parent = node.parent;
    let key = node.key;
    let data = node.data;
    let res = parent;
    if (key !== undefined) {
      res = parent[key] = Array.isArray(data) ? [] : {};
    }
    for (let k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        let v = data[k];
        if (typeof v === 'object') {
          let t = find(uniqueList, v);
          if (t) {
            res[k] = t;
          } else {
            loopList.push({
              parent: res,
              key: k,
              data: v
            });
            uniqueList.push({
              source: v,
              target: res
            });
          }
        } else {
          res[k] = v
        }
      }
    }
  }
  return root;
}

function dfsClone(obj, uniqueList) {
  uniqueList = uniqueList || [];
  if (!isTypeOf(obj, 'array') && !isTypeOf(obj, 'object') && !isTypeOf(obj, 'function')) {
    return obj;
  }
  if (isTypeOf(obj, 'function')) {
    return eval(`(${obj.toString()})`);
  }
  let copyObj = isTypeOf(obj, 'array') ? [] : {};
  let t = find(uniqueList, obj);
  if (t) {
    return t;
  }
  uniqueList.push({
    source: obj,
    target: copyObj
  });
  for (let key in obj) {
    let item = obj[key];
    copyObj[key] = dfsClone(item, uniqueList);
  }
  return copyObj;
}

export default bfsClone;
export const dfsClone = dfsClone;
