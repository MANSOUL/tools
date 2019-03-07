/**
 * 获取元素在页面中的绝对位置
 * @param  {HTMLElement} $ele 
 * @return {Object}
 */
export function offset($ele) {
  let boundingBox = $ele.getBoundingClientRect();
  return {
    top: window.pageYOffset + boundingBox.top,
    left: window.pageXOffset + boundingBox.left
  };
}


/**
 * 获取元素在其最近相对父元素中的位置
 * @param  {HTMLElement} $ele 
 * @return {Object}
 */
export function position($ele) {
  return {
    top: $ele.offsetTop,
    left: $ele.offsetLeft
  };
}