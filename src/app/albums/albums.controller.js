export default class AlbumsController {

  /* @ngInject */
  constructor(albumsService) {
    this.albumsService = albumsService;
    this.header = 'Albums';
  }

  $onInit() {
    console.log('AlbumsController $onInit()');

    this.albumsService.getAlbums()
      .then(albums => {
        this.albums = albums;
      });

    // Initialization logic that relies on bindings being present
    // should be put in this method, which is guarranteed to
    // always be called after the bindings have been assigned.
  }

}
