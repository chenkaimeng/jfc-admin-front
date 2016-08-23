import {app_module, controller_module, service_module} from '../config/module.config'
import * as pe_constants from '../constants/pe.constants'

class PeController {
    constructor($scope, $state, PeService) {
        this.$scope = $scope;
        this.PeService = PeService;
        $scope.pe_constants = pe_constants;
        if ($state.includes('app.pes.list')) {
            this.getPePageList(1);
        }
        if ($state.includes('app.pes.detail')) {
            this.getPeDetail(1);
        }
        $scope.datePickerOpen = {
            expectSignTimeOpen: false,
            signStartTimeOpen: false,
        }
    }

    getPePageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.pe_page_list = this.PeService.getPePageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.pe_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getPeDetail(peId) {
        this.$scope.pe = this.PeService.getPe(peId);
    }
}
PeController.$inject = ['$scope', '$state', 'PeService'];
controller_module.controller('PeController', PeController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.pes',{
        abstract: true,
        url: 'pes/',
        template: require('../view/module.html')
    }).state('app.pes.list',{
        url: 'list',
        template: require('../view/pe/list.html'),
        controller: 'PeController'
    }).state('app.pes.detail',{
        url: 'detail/:peId',
        template: require('../view/pe/detail.html'),
        controller: 'PeController'
    });
});
