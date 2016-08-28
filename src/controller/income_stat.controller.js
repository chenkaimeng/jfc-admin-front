import {app_module, controller_module, service_module} from '../config/module.config'
import CURRENCY from '../constants/pe.constants'

class IncomeStatController {
    constructor($scope, $state, $stateParams, IncomeStatService) {
        $scope.CURRENCY = CURRENCY;
    }
}

IncomeStatController.$inject = ['$scope', '$state', '$stateParams', 'IncomeStatService']
controller_module.controller('IncomeStatController', IncomeStatController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.income_stats', {
        abstract: true,
        url: 'income_stats/',
        template: require('../view/module.html')
    }).state('app.income_stats.list', {
        url: 'income_stats/',
        template: require('../view/income/income_stat/list.html'),
        controller: 'IncomeStatController'
    }).state('app.income_stats.edit', {
        url: 'income_stats/:incomeStatId',
        template: require('../view/income/income_stat/edit.html'),
        controller: 'IncomeStatController'
    });
})
