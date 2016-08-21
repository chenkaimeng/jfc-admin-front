routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('home', {
      url: '/home',
      template: require('./view/home.html'),
      controller: 'AdminController'
  }).state('login',{
      url: '/',
      template: require('./view/login/login.html'),
      controller: 'LoginController'
  });
}
