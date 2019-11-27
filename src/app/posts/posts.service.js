export default class PostsService {

  /* @ngInject */
  constructor(apiService) {
    this.apiService = apiService;
  }

  getPosts() {
    return this.apiService.get('posts', true);
  }

}
