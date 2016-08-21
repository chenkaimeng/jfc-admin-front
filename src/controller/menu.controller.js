import {app_module, controller_module, service_module} from '../config/module.config'
import * as menu from "../constants/menu"

class MenuController {
    constructor($scope) {
        $scope.menu_tree = menu.menu_tree;
        $scope.active_item = '';
        $scope.active = function(name) {
            $scope.active_item = name;
        }
    }
}

MenuController.$inject = ['$scope'];
controller_module.controller("MenuController", MenuController);
