import {app_module, controller_module, service_module} from "../config/module.config"

class AppController {
    constructor($scope, $rootScope, $state, AdminService) {
        $scope.$state = $state;
        $scope.admin = AdminService.getAdmin();
        $scope.attr = {};
        $scope.attr.path = ['首页'];
        if ($scope.admin && $scope.admin.id) {
            $state.go('app.welcome');
        } else {
            $state.go('login');
        }
    }
}

AppController.$inject = ['$scope', '$rootScope', '$state', 'AdminService'];
controller_module.controller('AppController', AppController);

app_module.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login',{
        url: '/login',
        template: require('../view/login/login.html'),
        controller: 'LoginController'
    }).state('app',{
        abstract: true,
        url: '/',
        template: require('../view/home.html'),
    });
});
