
/* @ngInject */
export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  const states = [{
      name: 'home',
      url: '',
      template: '<home></home>',
      data: {
          pageTitle: 'Home'
      }
  }, {
      name: 'albums',
      url: '/albums',
      template: '<albums></albums>',
      data: {
          pageTitle: 'Albums'
      }
  }, {
      name: 'posts',
      url: '/posts',
      template: '<posts></posts>',
      data: {
          pageTitle: 'Posts'
      }
  }];
  states.forEach(state => {
      $stateProvider.state(state);
  });
  $urlRouterProvider.when('/', ['$state', '$match', ($state, $match) => {
      $state.go('home');
  }]);
}];
