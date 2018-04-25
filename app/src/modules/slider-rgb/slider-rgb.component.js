/**
 * imports
 */
import { $, createDomElement, Component } from '../../helpers/helper';
import './slider-rgb.style.css';

export class SliderRGBComponent {
  constructor(dom, domSelector = '#sliderRGBContainer') {
    this.neme = 'sliderRGBComponent';
    this.dom = dom;
    this.domSelector = domSelector;
    this.domSelectorId = `#${domSelector}`;
    this.domSelectorClass = `.${domSelector}`;
    this.sliderRGBContainer = createDomElement({
      elementType: 'section',
      attributeObj: {
        class: `${this.domSelector}__container`
      }
    });

    // adding a modal to body
    Component('app-slider-rgb', this.sliderRGBContainer);
    this._setsliderRGBContent('Color Mixer');
  }

  _setsliderRGBContent(newContent = '') {
    let template = `
      <div class="${this.domSelector}__RED ${this.domSelector}_group">
        <input id="${this.domSelector}_red__input" class="${this.domSelector}_input" type="range" min="0" max="2550" value="2550">
        <span class="${this.domSelector}_value app_sliderRGB_display">230</span>
        <span class="${this.domSelector}_porcentage app_sliderRGB_display">18%</span>
      </div>
      <div class="${this.domSelector}__GREEN ${this.domSelector}_group">
        <input id="${this.domSelector}_green__input" class="${this.domSelector}_input" type="range" min="0" max="2550" value="2550">
        <span class="${this.domSelector}_value app_sliderRGB_display">230</span>
        <span class="${this.domSelector}_porcentage app_sliderRGB_display">18%</span>
      </div>
      <div class="${this.domSelector}__BLUE ${this.domSelector}_group">
        <input id="${this.domSelector}_blue__input" class="${this.domSelector}_input" type="range" min="0" max="2550" value="2550">
        <span class="${this.domSelector}_value app_sliderRGB_display">230</span>
        <span class="${this.domSelector}_porcentage app_sliderRGB_display">18%</span>
      </div>`;
    template = `
      <div class="${this.domSelector}__RED ${this.domSelector}_group wrapper">
        <input id="${this.domSelector}_red__input" class="${this.domSelector}_input" type="range" min="0" max="2550" value="2550">
        <span class="${this.domSelector}_value app_sliderRGB_display">230</span>
        <span class="${this.domSelector}_porcentage app_sliderRGB_display">18%</span>
      </div>`;
    return $('.app_sliderRGB__container').html(template);
  }
}
