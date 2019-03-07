/**
 * 添加/获取/删除元素属性
 * @param  {HTMLElement} $ele     
 * @param  {String} attrName 
 * @param  {String} attrValue
 * @return {HTMLElement | String}          
 */
export function attr($ele, attrName, attrValue) {
  if (attrValue) {
    $ele.setAttribute(attrName, attrValue);
    return $ele;
  } else {
    if (attrValue === null) {
      $ele.removeAttribute(attrName);
      return $ele;
    }
    return $ele.getAttribute(attrName);
  }
}