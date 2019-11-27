export default class HomeController {

  /* @ngInject */
  constructor() {
    this.header = 'Home sweet home!';
  }

  $onInit() {
    console.log('NavBarController $onInit()');

    // Initialization logic that relies on bindings being present
    // should be put in this method, which is guarranteed to
    // always be called after the bindings have been assigned.
  }

}
