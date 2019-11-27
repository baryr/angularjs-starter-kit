import template from './albums.html';
import controller from './albums.controller';
import './albums.component.scss';

const AlbumsController = {
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default AlbumsController;
