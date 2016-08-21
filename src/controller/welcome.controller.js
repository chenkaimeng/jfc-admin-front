import {app_module, controller_module, service_module} from '../config/module.config'

class WelcomeController {
    constructor($scope) {

    }
}

WelcomeController.$inject = ['$scope'];
controller_module.controller('WelcomeController', WelcomeController);
