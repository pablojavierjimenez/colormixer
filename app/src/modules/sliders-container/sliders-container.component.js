/**
 * imports
 */
import { $, createDomElement, Component } from '../../helpers/helper';
import './sliders-container.style.css';

export class SlidersComponent {
  constructor(dom, domSelector = '#slidersContainer') {
    this.neme = 'slidersComponent';
    this.dom = dom;
    this.domSelector = domSelector;
    this.domSelectorId = `#${domSelector}`;
    this.domSelectorClass = `.${domSelector}`;
    // sliders HTML TAG
    this.SlidersContainer = createDomElement({
      elementType: 'section',
      attributeObj: {
        class: `${this.domSelector}__container`
      }
    });

    // adding a modal to body
    Component('app-sliders', this.SlidersContainer);
    this._setSlidersContent('sliders Works!!');
  }

  _setSlidersContent(newContent = '') {
    let template = `<app-slider-rgb></app-slider-rgb>`;
    return $('.app_sliders__container').html(template);
  }
}
