import {app_module, controller_module, service_module} from '../config/module.config'

class IncomeDetailController {
    constructor($scope, $state, $stateParams, IncomeDetailService) {

    }
}

IncomeDetailController.$inject = ['$scope', '$state', '$stateParams', 'IncomeDetailService'];
controller_module.controller('IncomeDetailController', IncomeDetailController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.income_details', {
        abstract: true,
        url: 'income_details/',
        template: require('../view/module.html')
    }).state('app.income_details.list', {
        url: 'list',
        template: require('../view/income/income_detail/list.html'),
        controller: 'IncomeDetailController'
    }).state('app.income_details.edit', {
        url: 'edit/:incomdeDetailId',
        template: require('../view/income/income_detail/edit.html'),
        controller: 'IncomeDetailController'
    }).state('app.income_details.add', {
        url: 'add',
        template: require('../view/income/income_detail/edit.html'),
        controller: 'IncomeDetailController'
    }).state('app.income_details.import',{
        url: 'import',
        template: require('../view/income/income_detail/import.html'),
        controller: 'IncomeDetailController'
    })
});
