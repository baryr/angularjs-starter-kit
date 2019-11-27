export default class AlbumsService {

  /* @ngInject */
  constructor(apiService) {
    this.apiService = apiService;
  }

  getAlbums() {
    return this.apiService.get('albums', true);
  }

}
