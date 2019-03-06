/**
 * 添加元素为节点的最后子元素
 * @param  {HTMLElement} $ele 
 * @param  {HTMLELement | String} child 
 * @return {HTMLELement}       
 */
function append($ele, child) {
  if (typeof child === 'string') {
    $ele.insertAdjacentHTML('beforeEnd', child);
  } else {
    $ele.appendChild(child);
  }
  return $ele;
}

/**
 * 添加元素为节点的第一元素
 * @param  {HTMLElement} $ele 
 * @param  {HTMLELement | String} child 
 * @return {HTMLELement}       
 */
function prepend($ele, child) {
  if (typeof child === 'string') {
    $ele.insertAdjacentHTML('afterBegin', child);
  } else {
    $ele.insertBefore(child, $ele.firstChild);
  }
  return $ele;
}

/**
 * 将节点添加到目标节点之前
 * @param {HTMLElement} $ele 
 * @param {HTMLElement} $target 
 * @return {HTMLElement}
 */
function insertBefore($ele, $target) {
  $target.parentElement.insertBefore($ele, $target);
  return $ele;
}

/**
 * 删除节点
 * @return {HTMLELement}       
 */
function remove($ele) {
  $ele.parentElement.removeChild($ele);
  return $ele;
}

export const append = append;
export const prepend = prepend;
export const insertBefore = insertBefore;
export const remove = remove;