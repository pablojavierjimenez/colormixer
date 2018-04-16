/**
 * imports
 */
import { $, createDomElement } from '../../helpers/helper';
import { WebStorageService } from '../../services/webStorage.service';
import './modal.styles.css';

export class ModalComponent {

  /**
   * @constructor
   * @param {object} bom reference to a Browser object given by browser
   * @param {objecta} dom reference to a document object given by browser
   * @param {string}domSelector css id for modal container
   * @example Example of implementation:
   *      let modal = new ModalComponent(window, document, '.app_modal__container');
   */
  constructor(bom, dom, domSelector = '#modalContainer') {
    // Propertys
    this.name = 'ModalComponent';
    this.bom = bom;
    this.dom = dom;
    this.domSelector = domSelector;
    this.modalContainer = this._createModalDomElemet();

    // Methods
    this.open = this._openModal;
    this.close = this._closeModal;

    // adding tutorial to modal if is fist time user
    if ( this._openModalIfIsFirstTimeUser(bom) ) {
      this._addModalTutorial(this.modalContainer.body);
      this._openModal();
    }

    // adding a modal to body
    this.dom.body.appendChild( this.modalContainer.overlay );

    // adding a header elements
    this._setHeaderContent(`Parece que es tu primera vez O_o`);
    this._addCloseButton();
  }

  _openModal() {
    this.modalContainer.overlay.style.display = "flex";
  }

  _closeModal() {
    console.log('para!!');
    let el = $('.app_modal__overlay');
    el.style.display = "none";
  }

  _openModalIfIsFirstTimeUser() {
    let webStorage = new WebStorageService(this.bom);
    return webStorage.isFirstTime();
  }

  _createModalDomElemet() {
    let overlay = createDomElement({
      elementType: 'section',
      attributeObj: {
        'class': `${this.domSelector}__overlay`
      }
    });
    let modal = createDomElement({
      elementType: 'section',
      attributeObj: {
        'class': `${this.domSelector}__container`
      }
    });
    let modalHeader = createDomElement({
      elementType: 'header',
      attributeObj: {
        class: `${this.domSelector}__header`
      }
    });
    let modalBody = createDomElement({
      elementType: 'section',
      attributeObj: {
        class: `${this.domSelector}__body`
      }
    });
    let modalFooter = createDomElement({
      elementType: 'footer',
      attributeObj: {
        class: `${this.domSelector}__footer`
      }
    });
    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modal.appendChild(modalFooter);
    overlay.appendChild( modal );
    return {
      overlay: overlay,
      header: modal.children[0],
      body: modal.children[1],
      footer: modal.children[2]
    }
  }

  _addModalTutorial( modal ) {
    modal.innerHTML = `
        <div class="app_modalSlide app_modalSlide__step_1">
          <img src="https://picsum.photos/500/500/?random=1" />
          </div>
        <div class="app_modalSlide app_modalSlide__step_2">
          <img src="https://picsum.photos/500/500/?random=2"/>
        </div>`;
    return modal;
  }

  _setHeaderContent( newContent = '' ) {
    let template = `
      <span class="app_modal__header_text">${newContent}</span>
      <button class="app_modal__header_closeButton">X</button>`;
    return $('.app_modal__header').html(template);
  }

  _addCloseButton() {
    return $('.app_modal__header_closeButton').click( this._closeModal );
  }
}
