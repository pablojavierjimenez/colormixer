/**
 * imports
 */
import { $, createDomElement, Component } from '../../helpers/helper';
import { AuthtenticationService } from '../../services/firebase.services';
import './header.style.css';

export class HeaderComponent {
  constructor( dom, domSelector = '#headerContainer') {
    this.neme = 'HeaderComponent';
    this.dom = dom;
    this.domSelector = domSelector;
    this.domSelectorId = `#${domSelector}`;
    this.domSelectorClass = `.${domSelector}`;
    this.auth = new AuthtenticationService( firebase );
    this.headerContainer = createDomElement({
      elementType: 'header',
      attributeObj: {
        class: `${this.domSelector}__container`
      }
    });

    // adding a modal to body
    Component('app-header', this.headerContainer);
    this._setHeaderContent('Color Mixer');
    this._setGoogleLogin();
  }

  _setHeaderContent( newContent = '' ) {
    let template = `
      <div class="app_header__title">${newContent}</div>
      <button id="google_login" class="app_header__menu">Login</button>`;
    return $('.app_header__container').html(template);
  }

  _setGoogleLogin(){
    document.getElementById('google_login').addEventListener("click", this.auth.getLoginWithGoogle, false );
    // $('.app_header__menu').click( this.auth.getLoginWithGoogle );
  }
}
