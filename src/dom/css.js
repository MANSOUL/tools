/**
 * 添加或删除元素样式
 * @param  {HTMLElement} $ele     
 * @param  {String} prop 
 * @param  {String} value
 * @return {HTMLElement | String}          
 */
function css($ele, prop, value) {
  if (value) {
    $ele.style[prop] = value;
  } else {
    return window.getComputedStyle($ele)[prop];
  }
}

export const css = css;
