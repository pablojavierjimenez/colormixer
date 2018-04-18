/*--------------------------------7
 *            HELPERS
 *-------------------------------*/

// Imports
import { JJQeryClass } from './_JJQuery.class';
import { ComponentClass } from './_component.class';
import { CreateDomElementClass } from './_createDomElement.class';

/**
 * @class HelpersClass
 * @extends JJQueryCass
 * @extends ComponentClass
 * @extends CreateDomElementClass
 *
 * @returns {object}
 */
class HelpersClass {
  /**
   * @constructor
   */
  constructor() {
    this.$ = new JJQeryClass();
    this.createComponent = new ComponentClass( this.$ );
    this.createDomElement = new CreateDomElementClass();
  }
}

let Helper = new HelpersClass();
export let $ = Helper.$;
export let createDomElement = Helper.createDomElement;
export let Component = Helper.createComponent;
