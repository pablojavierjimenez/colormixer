export class WebStorageService {
  constructor(bom) {
    /**
     * Properties
     */
    this.name = 'WebStorageService';
    this.session = bom.sessionStorage;
    this.local = bom.localStorage;

    /**
     * Methods
     */
    this.isFirstTime = this._isFirstTime;
    this.clearAll = this._clearAll;
  }

  _isFirstTime() {
    let out;
    if (this.local.getItem('isFirstTime') !== null) {
      out = false;
    } else {
      this.local.setItem('isFirstTime', false);
      out = true;
    }
    return out;
  }

  _clearAll() {
    this.local.clear();
    this.session.clear();
  }
}
