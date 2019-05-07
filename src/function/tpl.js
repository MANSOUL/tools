function tpl(template) {
  const outputReg = /<%=\s*(.*)\s*%>/g;
  const conditionReg = /<%\s*((for|if|else|switch|case|break|{|})(.*)?)\s*%>/g;
  const replaceReg = /^\s*|\n|\r|\s*$/g;
  let out = 'let r=[""];';
  let match = null;
  let cursor = 0;

  const handleCondition = function (lines) {
    let m = null;
    let c = 0;
    let s = '';
    while (m = conditionReg.exec(lines)) {
      s = lines.substring(c, m.index).replace(replaceReg, '')
      out += s ? `r.push("${s}");` : '';
      out += m[1];
      c = m.index + m[0].length;
    }
    s = lines.substring(c).replace(replaceReg, '');
    out += s ? `r.push("${s}");` : '';
  }

  while (match = outputReg.exec(template)) {
    let index = match.index;
    let lines = template.substring(cursor, index);
    handleCondition(lines);
    let s = match[1].replace(replaceReg, '');
    out += s ? `r.push(${s});` : '';
    cursor = index + match[0].length;
  }

  handleCondition(template.substring(cursor));

  out += 'return r.join("");'
  return out;
}

/**
 * 造轮子 - 简单模版引擎
 * const template = 
 * `<ul>
 *   <% for(let i = 0; i < datas.length; i++) { %>
 *   <li><%= datas[i] %></li>
 *   <% } %>
 * </ul>`;
 * const datas = {
 *  datas: ['apple', 'banana']
 * };
 * render(template, datas);
 * @param {String} template 
 * @param {Object} data 
 */
function render(template, data) {
  const code = tpl(template);
  const keys = Object.keys(data);
  const params = keys.join(',');
  const arr = [];
  for (let i = 0; i < keys.length; i++) {
    arr.push(data[keys[i]]);
  }
  return new Function(params, code).apply(data, arr);
}

export default render;