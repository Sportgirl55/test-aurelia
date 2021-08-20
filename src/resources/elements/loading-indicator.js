
  import {bindable, noView} from 'aurelia-framework';
 
  
  @noView
  export class LoadingIndicator {
    @bindable loading = false;
  
    loadingChanged(newValue) {
      if (newValue) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    }
  }