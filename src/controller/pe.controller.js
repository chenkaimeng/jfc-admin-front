import {app_module, controller_module, service_module} from '../config/module.config'

class PeController {
    constructor($scope) {

    }
}
PeController.$inject = ['$scope'];
controller_module.controller('PeController', PeController);
