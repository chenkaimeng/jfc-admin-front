import {app_module, controller_module, service_module} from '../config/module.config'
import * as menu from "../constants/menu"

class MenuController {
    constructor($scope, $state) {
        $scope.$state = $state;
        $scope.menu_tree = menu.menu_tree;
        $scope.active_parent_item = '首页';
        $scope.parentClick = function(name) {
            $scope.active_parent_item = name;
        }
        $scope.childClick = function(child) {
            $scope.attr.path = [$scope.active_parent_item, child.name];
            $state.go("app." + child.state);
        }
    }
}

MenuController.$inject = ['$scope', '$state'];
controller_module.controller("MenuController", MenuController);
