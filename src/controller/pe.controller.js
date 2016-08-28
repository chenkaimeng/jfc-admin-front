import {app_module, controller_module, service_module} from '../config/module.config'
import * as pe_constants from '../constants/pe.constants'

class PeController {
    constructor($scope, $state, $stateParams, PeService) {
        this.$scope = $scope;
        this.PeService = PeService;
        $scope.pe_constants = pe_constants;
        $scope.updatePe = this.updatePe;
        $scope.createPe = this.createPe;
        if ($state.includes('app.pes.list')) {
            this.getPePageList(1);
        }
        if ($state.includes('app.pes.edit')) {
            this.getPeDetail($stateParams.peId);
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

    updatePe(pe) {
        console.log(pe);
    }

    createPe(pe) {
        console.log(pe);
    }
}
PeController.$inject = ['$scope', '$state', '$stateParams', 'PeService'];
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
    }).state('app.pes.edit',{
        url: 'edit/:peId',
        template: require('../view/pe/edit.html'),
        controller: 'PeController'
    }).state('app.pes.add', {
        url: 'add',
        template: require('../view/pe/edit.html'),
        controller: 'PeController'
    });
});
