/**
 * imports
 */
import { $, createDomElement, Component } from '../../helpers/helper';
import './footer.style.css';

export class FooterComponent {
  constructor(dom, domSelector = '#footerContainer') {
    this.neme = 'FooterComponent';
    this.dom = dom;
    this.domSelector = domSelector;
    this.domSelectorId = `#${domSelector}`;
    this.domSelectorClass = `.${domSelector}`;
    // FOOTER HTML TAG
    this.headerContainer = createDomElement({
      elementType: 'footer',
      attributeObj: {
        class: `${this.domSelector}__container`
      }
    });

    // adding a modal to body
    Component('app-footer', this.headerContainer);
    this._setHeaderContent('footer Works!!');
  }

  _setHeaderContent(newContent = '') {
    let template = `
      <span class="app_footer__title">${newContent}</span>
      <span class="app_footer__menu">2018</button>`;
    return $('.app_footer__container').html(template);
  }
}
