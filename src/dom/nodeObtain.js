/**
 * 获取给定节点满足条件的父节点
 * @param  {HTMLElement} $ele    
 * @param  {String} matchStr 
 * @return {HTMLElement | Null}         
 */
function parent($ele, matchStr) {
  let $currentEle = $ele;
  while ($currentEle.tagName.toLowerCase() !== 'html') {
    if ($currentEle.matches(matchStr)) {
      return $currentEle;
    }
    $currentEle = $currentEle.parentElement;
  }
  return null;
}

/**
 * 获取元素在其父元素中的位置
 * @param  {HTMLElement} $ele 
 * @return {Number}      
 */
function elementIndex($ele) {
  let $parent = $ele.parentElement;
  for (let i = 0; i < $parent.children.length; i++) {
    if ($ele === $parent.children[i]) {
      return i;
    }
  }
  return -1;
}

/**
 * 获取节点的后面的元素
 * @param  {HTMLElement}   $ele 
 * @return {HTMLElement}      
 */
function next($ele) {
  return $ele.nextElementSibling;
}

/**
 * 获取节点的前面的元素
 * @param  {HTMLElement}   $ele 
 * @return {HTMLElement}      
 */
function prev($ele) {
  return $ele.previousElementSibling;
}

/**
 * 获取节点所有的同级元素
 * @param  {HTMLElement}   $ele 
 * @return {Array}      
 */
function siblings($ele) {
  let arr = [];
  let $eles = $ele.parentElement.children;
  for (let i = 0; i < $eles.length; i++) {
    if ($eles[i] !== $ele) {
      arr.push($eles[i]);
    }
  }
  return arr;
}

export const parent = parent;
export const elementIndex = elementIndex;
export const next = next;
export const prev = prev;
export const siblings = siblings;