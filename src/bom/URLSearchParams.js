class URLSearchParams {
  constructor(search) {
    this.parse(search);
  }

  parse(raw) {
    raw = decodeURI(raw);
    raw = raw.replace(/^\?/, '');
    const result = raw.split('&');
    const r = {};
    result.map(value => {
      const s = value.split('=');
      const k = s[0];
      const v = s[1];
      if (!r[k]) {
        r[k] = [];
      }
      if (v) {
        r[k].push(v);
      }
    });
    this.r = r;
  }

  append(k, v) {
    if (!this.r[k]) {
      this.r[k] = [];
    }
    this.r[k].push(v + '');
  }

  delete(k) {
    this.r[k] = null;
  }

  has(k) {
    if (this.r[k]) {
      return true;
    }
    return false;
  }

  get(k) {
    return this.r[k][0];
  }

  getAll(k) {
    return this.r[k];
  }

  set(k, v) {
    this.r[k] = [v];
  }

  keys() {
    const arr = [];
    for(let k in this.r) {
      if (this.r[k]) {
        arr.push(k);
      }
    }
    return arr;
  }

  values() {
    let values = [];
    for (let k in this.r) {
      if (this.r[k]) {
        values = [...values, ...this.r[k]];
      }
    }
    return values;
  }

  toString() {
    let s = '';
    for(let k in this.r) {
      let v = this.r[k];
      let ts = '';
      if (v && v.length > 0) {
        v.map(tv => {
          ts += `${k}=${tv}&`;
        });
        s += ts;
      }
      else if(v) {
        s += `${k}&`;
      }
    }
    s = s.replace(/&$/, '');
    return s;
  }
}

export default URLSearchParams;