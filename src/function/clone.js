
/**
 * 判断给定参数o的类型是否为t
 * @param {Any} o 
 * @param {String} t 
 */
function isTypeOf(o, t) {
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase() === t;
}

/**
 * 广度优先深clone
 * @param {Any} obj 
 */
function bfsClone(obj) {
  let originQueue = [obj],
    copyObj = isTypeOf(obj, 'array') ? [] : {},
    copyQueue = [copyObj];

  while (originQueue.length > 0) {
    let originItem = originQueue.shift(),
      copyItem = copyQueue.shift();

    if (isTypeOf(originItem, 'array') || isTypeOf(originItem, 'object')) {
      for (let key in originItem) {
        let item = originItem[key];
        if (isTypeOf(item, 'array')) {
          copyItem[key] = [];
          originQueue.push(item);
          copyQueue.push(copyItem[key]);
        } else if (isTypeOf(item, 'object')) {
          copyItem[key] = {};
          originQueue.push(item);
          copyQueue.push(copyItem[key]);
        } else if (isTypeOf(item, 'function')) {
          copyItem[key] = eval(`(${item.toString()})`);
        } else {
          copyItem[key] = item;
        }
      }
    } else if (isTypeOf(originItem, 'function')) {
      copyObj = eval(`(${originItem.toString()})`);
    } else {
      copyObj = originItem;
    }
  }
  return copyObj;
}

function dfsClone(obj) {
  if (!isTypeOf(obj, 'array') && !isTypeOf(obj, 'object') && !isTypeOf(obj, 'function')) {
    return obj;
  }
  if (isTypeOf(obj, 'function')) {
    return eval(`(${obj.toString()})`);
  }
  let copyObj = isTypeOf(obj, 'array') ? [] : {};
  for (let key in obj) {
    let item = obj[key];
    copyObj[key] = dfsClone(item);
  }
  return copyObj;
}

export default bfsClone;
