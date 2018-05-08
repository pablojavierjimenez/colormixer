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

    this._closeModal();
  }

  _setsliderRGBContent(newContent = '') {
    let template = `
      <div id="${this.domSelector}__RED" class="${this.domSelector}_group" data-channel="RED" data-color="255">
        <input id="${this.domSelector}_red__input" class="${this.domSelector}_input" type="range" min="0" max="2550" value="2550">
        <span class="${this.domSelector}_value app_sliderRGB_display">255</span>
        <span class="${this.domSelector}_porcentage app_sliderRGB_display">100%</span>
      </div>
      <div id="${this.domSelector}__GREEN" class="${this.domSelector}_group" data-channel="GREEN" data-color="255">
        <input id="${this.domSelector}_green__input" class="${this.domSelector}_input" type="range" min="0" max="2550" value="2550">
        <span class="${this.domSelector}_value app_sliderRGB_display">255</span>
        <span class="${this.domSelector}_porcentage app_sliderRGB_display">100%</span>
      </div>
      <div id="${this.domSelector}__BLUE" class="${this.domSelector}_group" data-channel="BLUE" data-color="255">
        <input id="${this.domSelector}_blue__input" class="${this.domSelector}_input" type="range" min="0" max="2550" value="2550">
        <span class="${this.domSelector}_value app_sliderRGB_display">255</span>
        <span class="${this.domSelector}_porcentage app_sliderRGB_display">100%</span>
      </div>`;
    return $('.app_sliderRGB__container').html(template);
  }

  _closeModal() {
    console.log('para!!');
    let el = $('.app_sliderRGB_group');
    let targetColorContainer = $('.app_targetColor__result');

    el.forEach((item) => {
      let input = item.getElementsByClassName('app_sliderRGB_input')[0];
      let displayValue = item.getElementsByClassName('app_sliderRGB_value')[0];
      let displayPporcentage = item.getElementsByClassName('app_sliderRGB_porcentage')[0];
      let maxRange = input.getAttribute('max');

      input.addEventListener('change', (e) => {
        let actualValue = e.target.value;
        displayValue.innerText = (actualValue / 10);
        displayPporcentage.innerText = ( ( actualValue * 100 ) / maxRange ).toFixed(1) + '%';

        this._setSingleColorChannel(displayValue, actualValue);
        this._setSingleColorChannel(displayPporcentage, actualValue);

        this._setRGBColorTo(targetColorContainer, this._getRGBColorChannelsFromSliders(el));
      });
    });
  }

  _setSingleColorChannel(element, value = 2550){
    let channel = element.parentElement.dataset.channel;
    let actualValue = ( value / 10);

    element.parentElement.dataset.color = actualValue;

    let red   = (channel === 'RED') ? actualValue : 0;
    let green = (channel === 'GREEN') ? actualValue : 0;
    let blue   = (channel === 'BLUE') ? actualValue : 0;

    element.style.backgroundColor = `rgb(${red},${green},${blue}`;
    return element;
  }

  _getRGBColorChannelsFromSliders( elementFrom ) {
    let rgbColorSet = {};
    elementFrom.forEach((item) => {
      let colorChannelName = item.dataset.channel.toLocaleLowerCase()
      rgbColorSet[colorChannelName] = item.dataset.color;
    });

    return rgbColorSet;
  }

  _setRGBColorTo(targetElement = document.body, rgbColorSet){
    targetElement.style.backgroundColor = `rgb(${rgbColorSet.red},${rgbColorSet.green},${rgbColorSet.blue}`;
  }
}
