import {app_module, controller_module, service_module} from '../config/module.config'
import * as PE_CONSTANTS from '../constants/pe.constants'

class IncomeStatController {
    constructor($scope, $state, $stateParams, IncomeStatService) {
        $scope.CURRENCY = PE_CONSTANTS.CURRENCY;
        this.$scope = $scope;
        this.IncomeStatService = IncomeStatService;
        if ($state.includes('app.income_stats.list')) {
            this.getIncomeStatPageList(1);
        }
        if ($state.includes('app.income_stats.edit')) {
            this.getIncomeStat($stateParams.incomeStatId);
        }
    }

    getIncomeStatPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.income_stat_page_list = this.IncomeStatService.getIncomeStatPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.income_stat_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getIncomeStat(incomeStatId) {
        this.$scope.income_stat = this.IncomeStatService.getIncomeStat(incomeStatId);
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
        url: 'list/',
        template: require('../view/income/income_stat/list.html'),
        controller: 'IncomeStatController'
    }).state('app.income_stats.edit', {
        url: 'edit/:incomeStatId',
        template: require('../view/income/income_stat/edit.html'),
        controller: 'IncomeStatController'
    }).state('app.income_stats.add', {
        url: 'add',
        template: require('../view/income/income_stat/edit.html'),
        controller: 'IncomeStatController'
    });
})
