/**
 * 事件代理
 * @param  {HTMLElement} $ele    
 * @param  {String} type    
 * @param  {Function} handler 
 * @param  {String} match   
 * @return {Function}   用于取消此事件监听的函数     
 */
function on($ele, type, handler, match) {
  const eventListener = function eventListener(e) {
    let $target = e.target;
    let $currentTarget = e.currentTarget;
    if (typeof match === 'string') {
      let $parent = parent($target, match);
      if ($parent) {
        handler.call($parent, e);
      }
    } else {
      handler.call($currentTarget, e);
    }
  }
  $ele.addEventListener(type, eventListener, false);
  return function removeListener() {
    $ele.removeEventListener(type, eventListener);
  };
}

export const on = on;