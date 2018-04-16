/**
 * IMPORTS
 */
// MODULES
import { $ } from './helpers/helper';
import { ModalComponent } from './modules/modal/modal.component';
import { HeaderComponent } from './modules/header/header.component';
// SERVICES
import { WebStorageService } from './services/webStorage.service';
// --------------------------------------------------------------- //

const app = {
  modules: {
    headerComponent: new HeaderComponent( document, 'app_header'),
    modalComponent: new ModalComponent( window, document, '.app_modal')
  },
  services: {
    webStorage: new WebStorageService(window)
  }
};
window.$ = $;
console.log(app.modules);

