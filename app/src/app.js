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
    modalComponent: new ModalComponent( window, document, '.app_modal'),
    headerComponent: new HeaderComponent()
  },
  services: {
    webStorage: new WebStorageService(window)
  }
};
window.$ = $;
console.log(app.modules);
// debugger;
document.getElementById('message').innerText = 'Hello World!';
