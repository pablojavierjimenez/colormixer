/**
 * IMPORTS
 */
// MODULES
import './app.css';
import { $ } from './helpers/helper';
import { ModalComponent } from './modules/modal/modal.component';
import { HeaderComponent } from './modules/header/header.component';
import { TargetColorComponent } from './modules/target-color-container/target-color.component';
import { SlidersComponent } from './modules/sliders-container/sliders-container.component';
import { SliderRGBComponent } from './modules/slider-rgb/slider-rgb.component';
import { FooterComponent } from './modules/footer/footer';
// SERVICES
import { WebStorageService } from './services/webStorage.service';
import { AuthtenticationService } from './services/firebase.services';
// --------------------------------------------------------------- //

const app = {
  modules: {
    headerComponent: new HeaderComponent( document, 'app_header'),
    targetColorComponent: new TargetColorComponent( document, 'app_targetColor'),
    slidersComponent: new SlidersComponent( document, 'app_sliders'),
    sliderRGBComponent: new SliderRGBComponent( document, 'app_sliderRGB'),
    footerComponent: new FooterComponent( document, 'app_footer'),
    modalComponent: new ModalComponent( window, document, '.app_modal')
  },
  services: {
    webStorage: new WebStorageService(window),
    authtenticationService: new AuthtenticationService(firebase)
  }
};
window.$ = $;
console.log(app.services);

