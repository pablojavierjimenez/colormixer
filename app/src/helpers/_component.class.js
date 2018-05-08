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
export class ComponentClass {

  constructor( $ ) {
    return (customElementName, template = `<span>Hello World!!</span>`) => {

      let $el = $(customElementName);

      // if element not exist its will created an apend to body
      if ($el === undefined || $el === null) {
        // console.log('$el', $el);
        $el = document.createElement(customElementName);
        document.body.appendChild($el);
        $el = $(customElementName);
      }

      // JOIN template if is an html type
      this._JoinTemplate( $el, template );
    }
  }

  _JoinTemplate( DOMElement, template) {

    if (template instanceof HTMLElement) {
      // console.log('tpl by directly by APPENDCHILD');
      DOMElement.appendChild(template);
      return false;
    };

    try {
      if (template instanceof HTMLElement) {
        // console.log('tpl by ADD');
        DOMElement.add(template);
      } else if (typeof (template) === 'string') {
        // console.log('tpl by HTML');
        DOMElement.html(template);
      }
    } catch (error) {
      // console.log('error', error);
      return false;
    }
  }

}
