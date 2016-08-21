import {app_module, controller_module, service_module} from '../config/module.config'

class AdminController {
    constructor($scope, AdminService) {
    }
}

AdminController.$inject = ['$scope', 'AdminService'];
controller_module.controller('AdminController', AdminController);
