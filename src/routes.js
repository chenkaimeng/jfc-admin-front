routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("welcome");
    $stateProvider.state('login',{
        url: '/login',
        template: require('./view/login/login.html'),
        controller: 'LoginController'
    });
    $stateProvider.state('app',{
        abstract: true,
        url: '/',
        template: require('./view/home.html'),
    }).state('app.welcome', {
        url: 'welcome',
        template: require('./view/welcome.html'),
        controller: 'WelcomeController'
    }).state('app.pes.list',{
        url: 'pes/list',
        template: require('./view/pe/list.html'),
        controller: 'PeController'
    });
}
