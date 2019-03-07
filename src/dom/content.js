/**
 * 设置节点的文本内容
 * @param  {HTMLElement} $ele    
 * @param  {String} content
 * @return {HTMLELement}
 */
export function text($ele, content) {
  $ele.textContent = content;
  return $ele;
}

/**
 * 设置节点的内部html
 * @param  {HTMLElement} $ele    
 * @param  {String} htmlString
 * @return {HTMLELement}
 */
export function html($ele, htmlString) {
  $ele.innerHTML = htmlString;
  return $ele;
}