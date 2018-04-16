var $ = (sel) => {
  let out;
  var el = document.querySelectorAll(sel);
  el.forEach((item) => {
    item.html = (tpl) => {
      item.innerHTML = tpl;
    };
  });

  (el.length <= 1) ? out = el[0] : out = el;
  return out;
};
