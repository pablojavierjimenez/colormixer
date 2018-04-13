/**
 * IMPORTS
 */
// MODULES
import { ModalComponent } from './modules/modal/modal.component';
import { HeaderComponent } from './modules/header/header.component';
// SERVICES
import { WebStorageService } from './services/webStorage.service';
// --------------------------------------------------------------- //

const app = {
  modules: {
    modalComponent: new ModalComponent( window, document, '.app_modal__container'),
    headerComponent: new HeaderComponent()
  },
  services: {
    webStorage: new WebStorageService(window)
  }
}
console.log(app.modules);
// debugger;
document.getElementById('message').innerText = 'Hello World!';
