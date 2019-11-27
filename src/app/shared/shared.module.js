import ApiService from "./api.service";

import ItemComponent from './item/item.component';

angular.module('app.shared', [])
  .service('apiService', ApiService)
  .component('item', ItemComponent);
