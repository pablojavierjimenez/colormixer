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
      this._addModalTutorial( this.modalContainer );
      this._openModal();
    }

    // adding a modal to body
    this.dom.body.appendChild( this.modalContainer );
  }

  _openModal() {
    this.modalContainer.style.display = "flex";
  }

  _closeModal() {
    this.modalContainer.style.display = "none";
  }

  _openModalIfIsFirstTimeUser() {
    let webStorage = new WebStorageService(this.bom);
    return webStorage.isFirstTime();
  }

  _createModalDomElemet() {
    let modal = createDomElement({
      elementType: 'section',
      attributeObj: {
        'class': this.domSelector
      }
    });
    return modal;
  }

  _addModalTutorial( modal ) {
    modal.innerHTML = `
        <div class="app_modalSlide app_modalSlide__step">
          <img src="https://picsum.photos/500/500/?random=1" />
          </div>
        <div class="app_modalSlide app_modalSlide__step">
          <img src="https://picsum.photos/500/500/?random=2"/>
        </div>`
    ;
    return modal;
  }
}
