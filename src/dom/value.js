const nodeNames = ['input', 'textarea', 'select'];

function isValidElement($ele) {
  if (nodeNames.indexOf($ele.nodeName.toLowerCase()) === -1) {
    return false;
  }
  return true;
}

function plainValue($ele, val) {
  if (val) {
    $ele.value = val;
    return $ele;
  }
  return $ele.value;
}

function selectValue($ele, val) {

}

function checkboxValue($ele, value) {

}

function radioValue($ele, value) {

}


/**
 * 获取/设置表单元素的值
 * @param {HTMLElement} $ele 
 * @param {String} val 
 */
export function value($ele, val) {
  if (!isValidElement($ele)) {
    return null;
  }
  let nodeName = $ele.nodeName.toLowerCase();
  let type = $ele.type;
  switch (nodeName) {
    case 'input':
      if (type === 'text' || type === 'number' || type === 'password' || type === 'search') {
        return plainValue($ele, val);
      }
      else if (type === 'checkbox') {
        return checkboxValue($ele, val);
      }
      else if (type === 'radio') {
        return radioValue($ele, val);
      }
    case 'textarea':
      return plainValue($ele, val);
    case 'select':
      return selectValue($ele, val);
  }
  return $ele;
}