/**
 * 判断节点是否包含给定的类名
 * @param  {HTMLElement}  $ele      
 * @param  {String}  className 
 * @return {Boolean}           
 */
function hasClass($ele, className) {
  return $ele.classList.contains(className);
}

/**
 * 为节点添加类名
 * @param {HTMLElement} $ele      
 * @param {String} className 
 */
function addClass($ele, className) {
  $ele.classList.add(className);
  return $ele;
}

/**
 * 移除节点的某个类名
 * @param  {HTMLElement | NodeList} $ele
 * @param  {String} className
 * @return {[HTMLElement | NodeList]}          
 */
function removeClass($ele, className) {
  if ($ele.length) {
    map($ele, function ($element) {
      $element.classList.remove(className);
    });
  } else {
    $ele.classList.remove(className);
  }
  return $ele;
}

/**
 * 对节点进行给定类名的删除或添加
 * @param  {HTMLElement}  $ele      
 * @param  {String}  className 
 * @return {HTMLElement}    
 */
function toggleClass($ele, className) {
  if (hasClass($ele)) {
    removeClass($ele, className);
  } else {
    addClass($ele, className);
  }
  return $ele;
}

export const hasClass = hasClass;
export const removeClass = removeClass;
export const addClass = addClass;
export const toggleClass = toggleClass;