/**
 * 设置节点的文本内容
 * @param  {HTMLElement} $ele    
 * @param  {String} content
 * @return {HTMLELement}
 */
function text($ele, content) {
  $ele.textContent = content;
  return $ele;
}

/**
 * 设置节点的内部html
 * @param  {HTMLElement} $ele    
 * @param  {String} htmlString
 * @return {HTMLELement}
 */
function html($ele, htmlString) {
  $ele.innerHTML = htmlString;
  return $ele;
}

export const text = text;
export const html = html;