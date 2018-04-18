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
export class CreateDomElementClass {
  constructor() {
    return (configObj) => {
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
      function _addContent( attributeObj ) {
        container.innerHTML = configObj.content;
      }
      function _addAttribute( attributeObj ) {
        for (let attr in attributeObj) {
          let attributeValue = attributeObj[attr];
          if (
            (attr == 'class' || attr == 'id') &&
            (attributeValue.charAt(0) == '.' || attributeValue.charAt(0) == '#')
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
}
