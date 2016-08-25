import {app_module, controller_module, service_module} from '../config/module.config'

class VideoController {
    constructor($scope, $state, $stateParams, VideoService) {
        this.$scope = $scope;
        this.VideoService = VideoService;

        if ($state.includes('app.video_collects.list')) {
            getVideoCollectPageList(pageNo);
        }
    }

    getVideoCollectPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.video_page_list = this.VideoService.getVideoCollectPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i < video_page_list.video_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }
}

VideoController.$inject = ['$scope', '$state', '$stateParams', 'VideoService'];
controller_module.controller('VideoController', VideoController);

app_module.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('app.video_collects', {
        abstract: true,
        url: '/video_collects',
        template: require('../view/module.html')
    }).state('app.video_collects.list', {
        url: '/list',
        template: require('../view/video_collect/list.html'),
        controller: 'VideoController'
    }).state('app.video_collects.detail', {
        url: '/detail/:videoCollectId',
        template: require('../view/video_collect/detail.html'),
        controller: 'VideoController'
    }).state('app.video_collects.add', {
        url: '/add',
        template: require('../view/video_collect/detail.html'),
        controller: 'VideoController'
    }).state('app.videos', {
        abstract:true,
        url: '/vidoes',
        template: require('../view/module.html')
    }).state('app.videos.list', {
        url: '/list',
        template: require('../view/video_collect/video/list.html'),
        controller: 'VideoController'
    }).state('app.videos.detail', {
        url: '/detail/:videoId',
        template: require('../view/video_collect/video/detail.html'),
        controller: 'VideoController'
    }).state('app.videos.add', {
        url: '/add',
        template: require('../view/video_collect/video/detail.html'),
        controller: 'VideoController'
    });
});
