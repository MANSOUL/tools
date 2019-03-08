/**
 * 设置节点的textContent属性
 * 如果节点本来的唯一一个子节点就是文本节点，那么设置nodeValue能够提升性能
 * @param  {HTMLElement} $ele    
 * @param  {String} content
 * @return {HTMLELement}
 */
export function text($ele, content) {
  if (content) {
    let $firstChild = $ele.firstChild;
    if (
      $firstChild &&
      $firstChild === $ele.lastChild &&
      $firstChild.nodeType === 3
    ) {
      $firstChild.nodeValue = content;
      return;
    }
  }

  $ele.textContent = content;
  return $ele;
}


let $reuseableSvgContainer = null;
/**
 * 设置节点的innnerHTML属性
 * IE的SVG节点缺少没有innerHTML，所以把内容插入到一个临时节点，然后移除目标节点的子节点，最后将子节点移动到目标节点上
 * @param  {HTMLElement} $ele    
 * @param  {String} htmlString
 * @return {HTMLELement}
 */
export function html($ele, htmlString) {
  if ($ele.namespaceURI === 'http://www.w3.org/2000/svg' && !('innerHTML' in $ele)) {
    $reuseableSvgContainer = $reuseableSvgContainer || document.createElement('div');
    $reuseableSvgContainer.innerHTML = `<svg>${htmlString}</svg>`;
    const $svg = $reuseableSvgContainer.firstChild;
    while ($ele.firstChild) {
      $ele.removeChild($ele.firstChild);
    }
    while ($svg.firstChild) {
      $ele.appendChild($svg.firstChild);
    }
  }
  else {
    $ele.innerHTML = htmlString;
  }
  return $ele;
}