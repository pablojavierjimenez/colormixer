/*--------------------------------7
 *            HELPERS
 *-------------------------------*/
class Helpers {
  constructor() {
    this.$ = this._$;
    this.createDomElement = this._createDomElement;
    this.createComponent = this._createComponent( this._$ );

  }
  /**
   * @method
   * @param {string} selector
   * @returns {Array} Node List Of element
   */
  _$( selector ) {
    var el = document.querySelectorAll( selector );
    let out;
    let parser = new DOMParser();
    el.forEach((item) => {
      item.html = (tpl) => {
        item.innerHTML = tpl;
      };
      item.add = (tpl) => {
        let el = parser.parseFromString( tpl, "text/xml");
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

  // FIXME: algun dia ver por que me fallava esto
  // no me dejava correrlo a dentro me decia unespected new ilegal invocation
  // _createComponent ( customElementName , template ) {
  // window.customElements.define(
  //   customElementName,
  //   class extends HTMLElement {
  //     constructor() {
  //       // If you define a ctor, always call super() first!
  //       // This is specific to CE and required by the spec.
  //       super();
  //       this.innerHTML = template;
  //       // Setup a click listener on <app-drawer> itself.
  //       this.addEventListener('click', ( ev ) => {
  //         console.log(customElementName, ev);
  //       });
  //     }
  //   },
  //   {
  //     extends: 'div'
  //   }
  // );
  // }
  _createComponent ( $ ) {


    return ( customElementName , template = `<span>Hello World!!</span>`) => {
      let $el = $( customElementName );

      if ( template instanceof HTMLElement ) {
        $el.appendChild( template );
        return false;
      };

      if ( $el === undefined || $el ===  null) {
        $el = document.createElement( customElementName );
        document.body.appendChild( $el );
        $el = $( customElementName );
      }

      try {
        if ( ( template instanceof HTMLElement ) ) {
          $el.add( template );
        } else if ( typeof( template ) === 'string' ) {
          console.log('tpl by ADD');
          $el.html( template );
        }

      } catch (error) {
        console.log('error',error);
      }

    }
  }
  }
  let Helper = new Helpers();
  export let $ = Helper.$;
  export let createDomElement = Helper.createDomElement;
  export let Component = Helper.createComponent;
