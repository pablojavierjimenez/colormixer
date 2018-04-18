/**
 * IMPORTS
 */
// MODULES
import './app.css';
import { $ } from './helpers/helper';
import { ModalComponent } from './modules/modal/modal.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer';
// SERVICES
import { WebStorageService } from './services/webStorage.service';
// --------------------------------------------------------------- //

const app = {
  modules: {
    headerComponent: new HeaderComponent( document, 'app_header'),
    footerComponent: new FooterComponent( document, 'app_footer'),
    modalComponent: new ModalComponent( window, document, '.app_modal')
  },
  services: {
    webStorage: new WebStorageService(window)
  }
};
window.$ = $;
console.log(app.modules);

