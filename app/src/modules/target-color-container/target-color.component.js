/**
 * imports
 */
import { $, createDomElement, Component } from '../../helpers/helper';
import './target-color.style.css';

export class TargetColorComponent {
  constructor(dom, domSelector = '#targetColorContainer') {
    this.neme = 'targetColorComponent';
    this.dom = dom;
    this.domSelector = domSelector;
    this.domSelectorId = `#${domSelector}`;
    this.domSelectorClass = `.${domSelector}`;
    // targetColor HTML TAG
    this.targetColorContainer = createDomElement({
      elementType: 'section',
      attributeObj: {
        class: `${this.domSelector}__container`
      }
    });

    // adding a modal to body
    Component('app-target-color', this.targetColorContainer);
    this._setTargetColorContent('targetColor Works!!');
  }

  _setTargetColorContent(newContent = '') {
    let template = `
      <span class="app_targetColor__result">${newContent}</span>`;
    return $('.app_targetColor__container').html(template);
  }
}
