/*--------------------------------7
 *            HELPERS
 *-------------------------------*/
class Helpers {
  constructor() {
    this.$ = this._$;
    this.createDomElement = this._createDomElement;
  }
  /**
   * @method
   * @param {string} selector
   * @returns {*}
   */
  _$( selector ) {
    let out;
    let firsSelectorElement = selector.split(' ')[0];
    let selectorType = 'tag';
    if (firsSelectorElement.charAt(0) === '.') {
      selectorType = 'class';
    }
    else if (firsSelectorElement.charAt(0) === '#') {
      selectorType = 'id';
    };
    switch (selectorType) {
      case 'class':
        out = document.getElementsByClassName(firsSelectorElement.slice(1, firsSelectorElement.length))
        break;
      case 'id':
        out = document.getElementById(firsSelectorElement.slice(1, firsSelectorElement.length))
        break;

      default:
        out = document.getElementsByTagName(firsSelectorElement);
        break;
    }
    return out;
  }

  /**
  * @method
  * @param { object } configObj configuration objet to define type and attributes of new created dom element
  * @example Example of configuration object and usage
  * let elementConfig = {
  *   inline: 'false',
  *   attributeObj: {
  *     id: 'elementId',
  *     class: 'btn btn-danger'
  *     style: 'padding:2rem;'
  *   },
  *   content: {
  *     innerHTML: '<div>lalala</div>',
  *     innerText: 'hola mundo'
  *   }
  * };
  * let element = createDomElement();
  * @returns {domObject}
  */
  _createDomElement ( configObj ) {
    var el, newElementConfig;
    if (typeof (configObj) === 'string') {
      let container = document.createElement(configObj);
      return container;
    }
    (typeof (configObj) === 'object') ? newElementConfig = configObj : false;
    (configObj.inline) ? el = configObj.elementType || 'span' : el = configObj.elementType || 'div';
    let container = document.createElement(el);
    if (typeof (configObj.attributeObj) == 'object') {
      _addAttribute(configObj.attributeObj)
    }
    (typeof (configObj.content) !== 'undefined') ? _addContent(configObj.content) : false;
    function _addContent(attributeObj) {
      container.innerHTML = configObj.content;
    }
    function _addAttribute(attributeObj) {
      for (let attr in attributeObj) {
        let attributeValue = attributeObj[attr];
        if (
          ( attr == 'class' || attr == 'id' ) &&
          ( attributeValue.charAt(0) == '.' || attributeValue.charAt(0) == '#' )
        ) {
          attributeValue = attributeValue.substr(1);
        }
        container.setAttribute(attr, attributeValue);
      }
    }
    // console.log(container);
    return container;
  }
}
let Helper = new Helpers();

export let $ = Helper.$;
export let createDomElement = Helper.createDomElement;
