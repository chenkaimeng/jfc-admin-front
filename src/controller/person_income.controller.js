import {app_module, service_module, controller_module} from '../config/module.config'

class PersonIncomeController {
    constructor($scope, $state, $stateParams, PersonIncomeService) {

    }
}

PersonIncomeController.$inject = ['$scope', '$state', '$stateParams', 'PersonIncomeService'];
controller_module.controller('PersonIncomeController', PersonIncomeController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.person_incomes', {
        abstract: true,
        url: 'person_incomes/',
        template: require('../view/module.html')
    }).state('app.person_incomes.list', {
        url: 'list',
        template: require('../view/income/person_income/list.html'),
        controller: 'PersonIncomeController'
    }).state('app.person_incomes.edit', {
        url: 'edit/:personIncomeId',
        template: require('../view/income/person_income/edit.html'),
        controller: 'PersonIncomeController'
    }).state('app.person_incomes.add', {
        url: 'add',
        template: require('../view/income/person_income/edit.html'),
        controller: 'PersonIncomeController'
    });
});
