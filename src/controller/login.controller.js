import {app_module, controller_module, service_module} from '../config/module.config'

class LoginController {
    constructor($scope) {

    }
}

LoginController.$inject = ['$scope'];
controller_module.controller('LoginController', LoginController);
