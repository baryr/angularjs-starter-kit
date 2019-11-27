// app.module.js needs to be loaded first otherwise angular will not be visible in other modules!
import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style.scss';

import {debuggingBorder, apiBase} from './app.settings';

import AppRoutes from './app.routes';

import AppComponent from './app/app.component';
import NavBarComponent from './app/nav-bar/nav-bar.component';
import HomeComponent from './app/home/home.component';
import AlbumsComponent from './app/albums/albums.component';
import AlbumsService from './app/albums/albums.service';
import PostsComponent from './app/posts/posts.component';
import PostsService from './app/posts/posts.service';

export default angular
  .module('app', [
    'app.shared',
    'app.debug',
    //
    'ui.router'
  ])

  .value('debuggingBorder', debuggingBorder)
  .value('apiBase', apiBase)

  .component('app', AppComponent)
  .component('navBar', NavBarComponent)
  .component('home', HomeComponent)

  .component('albums', AlbumsComponent)
  .service('albumsService', AlbumsService)

  .component('posts', PostsComponent)
  .service('postsService', PostsService)

  .config(AppRoutes)

  .run(
      ['$rootScope', '$state', '$stateParams',
          ($rootScope, $state, $stateParams) => {
              // It's very handy to add references to $state and $stateParams to the $rootScope
              // so that you can access them from any scope within your applications.For example,
              // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
              // to active whenever 'contacts.list' or one of its decendents is active.
              $rootScope.$state = $state;
              $rootScope.$stateParams = $stateParams;
          }
      ]
  );
