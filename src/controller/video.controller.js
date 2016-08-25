import {app_module, controller_module, service_module} from '../config/module.config'

class VideoController {
    constructor($scope, $state, $stateParams, VideoService) {
        this.$scope = $scope;
        this.VideoService = VideoService;
        this.$scope.video_states = {
            0: '正常',
            1: '删除'
        }
        if ($state.includes('app.video_collects.list')) {
            this.getVideoCollectPageList(1);
        }
        if ($state.includes('app.video_collects.detail')) {
            this.getVideoCollect($stateParams.videoCollectId);
        }
        if ($state.includes('app.videos.list')) {
            this.getVideoPageList($stateParams.videoCollectId,1);
        }
        if ($state.includes('app.videos.detail')) {
            this.getVideo($stateParams.videoId);
        }
    }

    getVideoCollectPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.video_collect_page_list = this.VideoService.getVideoCollectPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.video_collect_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getVideoCollect(videoCollectId) {
        this.$scope.video_collect = this.VideoService.getVideoCollect(videoCollectId);
    }

    getVideoPageList(videoCollectId, pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.video_page_list = this.VideoService.getVideoPageList(videoCollectId, pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.video_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getVideo(videoId) {
        this.$scope.video = this.VideoService.getVideo(videoId);
    }
}

VideoController.$inject = ['$scope', '$state', '$stateParams', 'VideoService'];
controller_module.controller('VideoController', VideoController);

app_module.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('app.video_collects', {
        abstract: true,
        url: 'video_collects/',
        template: require('../view/module.html')
    }).state('app.video_collects.list', {
        url: 'list',
        template: require('../view/video_collect/list.html'),
        controller: 'VideoController'
    }).state('app.video_collects.detail', {
        url: 'detail/:videoCollectId',
        template: require('../view/video_collect/detail.html'),
        controller: 'VideoController'
    }).state('app.video_collects.add', {
        url: 'add',
        template: require('../view/video_collect/detail.html'),
        controller: 'VideoController'
    }).state('app.videos', {
        abstract:true,
        url: 'vidoes/',
        template: require('../view/module.html')
    }).state('app.videos.list', {
        url: 'list/:videoCollectId',
        template: require('../view/video_collect/video/list.html'),
        controller: 'VideoController'
    }).state('app.videos.detail', {
        url: 'detail/:videoId',
        template: require('../view/video_collect/video/detail.html'),
        controller: 'VideoController'
    }).state('app.videos.add', {
        url: 'add',
        template: require('../view/video_collect/video/detail.html'),
        controller: 'VideoController'
    });
});
