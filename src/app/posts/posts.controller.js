export default class PostsController {

  /* @ngInject */
  constructor(postsService) {
    this.postsService = postsService;
    this.header = 'Posts';
  }

  $onInit() {
    console.log('PostsController $onInit()');

    this.postsService.getPosts()
      .then(posts => {
          this.posts = posts;
      });

    // Initialization logic that relies on bindings being present
    // should be put in this method, which is guarranteed to
    // always be called after the bindings have been assigned.
  }

}
