import {app_module, controller_module, service_module} from "../config/module.config"

class AppController {
    constructor($scope, $state, AdminService) {
        $scope.admin = AdminService.getAdmin();
        if ($scope.admin && $scope.admin.id) {
            $state.go('app.welcome');
        } else {
            $state.go('login');
        }
    }
}

AppController.$inject = ['$scope', '$state', 'AdminService'];
controller_module.controller('AppController', AppController);
