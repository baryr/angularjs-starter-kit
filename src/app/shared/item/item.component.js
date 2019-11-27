import template from './item.html';
import controller from './item.controller';
import './item.component.scss';

const ItemComponent = {
  template: template,
  controller: controller,
  controllerAs: 'vm',
  bindings: {
      item: '<'
  }
};

export default ItemComponent;
