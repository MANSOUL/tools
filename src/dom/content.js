/**
 * 设置节点的文本内容
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
      $firstChild.nodeType === 2
    ) {
      $firstChild.nodeValue = content;
    }
  }

  $ele.textContent = content;
  return $ele;
}


let $reuseableSvgContainer = null;
/**
 * 设置节点的内部html
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