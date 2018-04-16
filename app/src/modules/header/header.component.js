/**
 * imports
 */
import { $, createDomElement, createComponent } from '../../helpers/helper';
import './header.style.css';

export class HeaderComponent {
  constructor( dom, domSelector = '#headerContainer') {
    this.neme = 'HeaderComponent';
    this.dom = dom;
    this.domSelector = domSelector;
    this.domSelectorId = `#${domSelector}`;
    this.domSelectorClass = `.${domSelector}`;
    this.headerContainer = this._createModalDomElemet();
    console.log($);

    // adding a modal to body
    this.dom.body.appendChild( this.headerContainer );

    // tratando de correr la funcion create component
    // createComponent( 'app-header', this.headerContainer );
    this._setHeaderContent('hola samigosss!!!');
  }

  _createModalDomElemet(){
    let header = createDomElement({
      elementType: 'header',
      attributeObj: {
        class: `${this.domSelector}__container`
      }
    });

    return header;
  }

  _setHeaderContent( newContent = '' ) {
    let template = `
      <h1 class="app_header__title">${newContent}</h1>
      <span class="app_header__menu">menu</button>`;
    return $('.app_header__container').html(template);
  }
}
