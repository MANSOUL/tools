/**
 * 设置Cookie
 * @param {String} key 
 * @param {String} value 
 * @param {Object} options 
 */
export function setCookie(key, value, options) {
  let defaultOptions = {
    path: null,
    domain: null,
    secure: false,
    httponly: false,
    expires: null
  };
  options = Object.assign(defaultOptions, options);
  let date = null;
  if (options.expires) {
    let dates = options.expires.match(/(\d)([dh])/);
    let count = dates[1];
    let type = dates[2];
    if (count && type) {
      let hour = type === 'd' ? count * 24 : count;
      date = new Date(Date.now() + hour * 3600000).toUTCString();
    }
  }
  let cookie = `${key}=${value}; ${date ? 'expires=' + date + '; ' : ''}${options.path ? 'path=' + options.path + '; ' : ''}${options.domain ? 'domain=' + options.domain + '; ' : ''}${options.secure ? 'secure; ' : ''}${options.httponly ? 'httponly; ' : ''}`;
  document.cookie = cookie;
  return cookie;
}

/**
 * 删除Cookie
 * @param {String} key 
 * @param {String} domain 
 */
export function removeCookie(key, domain) {
  let cookie = `${key}=1; expires=${new Date(Date.now() - 1).toUTCString()}; ${domain ? 'domain=' + domain + ';' : ''};`;
  document.cookie = cookie;
  return cookie;
}

/**
 * 获取Cookie
 * @param {String} key 
 */
export function getCookie(key) {
  let regExp = new RegExp(`${key}=([^;] +)`, 'g');
  let result = document.cookie.match(regExp);
  if (!result) {
    return null;
  }
  return result.map((item) => {
    return item.replace(`${key}=`, '');
  });
}