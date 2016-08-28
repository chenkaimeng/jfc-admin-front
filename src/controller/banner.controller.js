import {app_module, controller_module, service_module} from '../config/module.config'
import * as BANNER_CONSTANTS from '../constants/banner.constants'

class BannerController {
    constructor($scope, $state, $stateParams, BannerService) {
        this.$scope = $scope;
        this.BannerService = BannerService;
        $scope.banner_constants = BANNER_CONSTANTS;
        if ($state.includes('app.banners.list')) {
            this.getBannerPageList(1);
        }
        if ($state.includes('app.banners.edit')) {
            this.getBanner($stateParams.bannerId);
        }
    }

    getBannerPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.banner_page_list = this.BannerService.getBannerPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.banner_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getBanner(bannerId) {
        this.$scope.banner = this.BannerService.getBanner(bannerId);
    }
}

BannerController.$inject = ['$scope', '$state', '$stateParams', 'BannerService']
controller_module.controller('BannerController', BannerController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.banners',{
        abstract: true,
        url: 'banners/',
        template: require('../view/module.html')
    }).state('app.banners.list',{
        url: 'list',
        template: require('../view/banner/list.html'),
        controller: 'BannerController'
    }).state('app.banners.edit',{
        url: 'edit/:bannerId',
        template: require('../view/banner/edit.html'),
        controller: 'BannerController'
    }).state('app.banners.add', {
        url: 'add',
        template: require('../view/banner/edit.html'),
        controller: 'BannerController'
    });
});
