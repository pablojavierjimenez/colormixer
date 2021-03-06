/**
 * imports
 */
import { $, createDomElement, Component } from '../../helpers/helper';
import './header.style.css';

export class HeaderComponent {
  constructor( dom, domSelector = '#headerContainer') {
    this.neme = 'HeaderComponent';
    this.dom = dom;
    this.domSelector = domSelector;
    this.domSelectorId = `#${domSelector}`;
    this.domSelectorClass = `.${domSelector}`;
    this.headerContainer = createDomElement({
      elementType: 'header',
      attributeObj: {
        class: `${this.domSelector}__container`
      }
    });

    // adding a modal to body
    Component('app-header', this.headerContainer);
    this._setHeaderContent('Header Component');
  }

  _setHeaderContent( newContent = '' ) {
    let template = `
      <h1 class="app_header__title">${newContent}</h1>
      <span class="app_header__menu">menu</button>`;
    return $('.app_header__container').html(template);
  }
}
