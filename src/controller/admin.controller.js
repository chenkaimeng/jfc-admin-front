import {app_module, controller_module, service_module} from '../config/module.config'

export default class AdminController {
    constructor($scope, AdminService) {
        $scope.admin = AdminService.getAdmin();
    }
}

AdminController.$inject = ['$scope', 'AdminService'];
controller_module.controller('AdminController', AdminController);
