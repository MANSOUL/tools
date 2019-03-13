import map from '../function/map';
const nodeNames = ['input', 'textarea', 'select'];

function isValidElement($ele) {
  if (!$ele.nodeName || nodeNames.indexOf($ele.nodeName.toLowerCase()) === -1) {
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

function checkboxValue($ele, value) {
  const name = $ele.name;
  const $eles = document.querySelectorAll(`input[name=${name}]`);
  if (value) {
    value = Array.isArray(value) ? value : [value];
    map($eles, ($element) => {
      if (value.indexOf($element.value) !== -1) {
        $element.checked = true;
      }
    });
    return $eles;
  }
  let vs = [];
  map($eles, ($element) => {
    if ($element.checked) {
      vs.push($element.value);
    }
  });
  return vs;
}

function radioValue($ele, value) {
  const name = $ele.name;
  const $eles = document.querySelectorAll(`input[name=${name}]`);
  if (value) {
    map($eles, ($element) => {
      if (value === $element.value) {
        $element.checked = true;
      }
    });
    return $eles;
  }
  let v = null;
  map($eles, ($element) => {
    if ($element.checked) {
      v = $element.value;
    }
  });
  return v;
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
      return plainValue($ele, val);
  }
  return $ele;
}