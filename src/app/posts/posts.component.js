import template from './posts.html';
import controller from './posts.controller';
import './posts.component.scss';

const PostsController = {
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default PostsController;
