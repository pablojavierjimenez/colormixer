/**
 * @method
 * @param {string} selector
 * @returns {Array} Node List Of element
 */
export class JJQeryClass {
  constructor(){
    return ( selector ) => {
      var el = document.querySelectorAll(selector);
      let out;
      let parser = new DOMParser();
      el.forEach((item) => {
        item.html = (tpl) => {
          item.innerHTML = tpl;
        };
        item.add = (tpl) => {
          let el = parser.parseFromString(tpl, "text/xml");
          el = el.documentElement;
          item.append(el);
        };
        item.click = (callBack) => {
          item.addEventListener('click', callBack);
        };
      });

      (el.length <= 1) ? out = el[0] : out = el;

      return out;
    }
  }
}
