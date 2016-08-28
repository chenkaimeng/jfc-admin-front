import {app_module, controller_module, service_module} from '../config/module.config'

class VideoController {
    constructor($scope, $state, $stateParams, VideoService) {
        this.$scope = $scope;
        this.VideoService = VideoService;
        this.$scope.video_states = {
            0: '正常',
            1: '删除'
        }
        if ($state.includes('app.albums.list')) {
            this.getAlbumPageList(1);
        }
        if ($state.includes('app.albums.edit')) {
            this.getAlbum($stateParams.albumId);
        }
        if ($state.includes('app.videos.list')) {
            this.getVideoPageList($stateParams.albumId,1);
        }
        if ($state.includes('app.videos.edit')) {
            this.getVideo($stateParams.videoId);
        }
    }

    getAlbumPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.album_page_list = this.VideoService.getAlbumPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.album_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getAlbum(albumId) {
        this.$scope.album = this.VideoService.getAlbum(albumId);
    }

    getVideoPageList(albumId, pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.video_page_list = this.VideoService.getVideoPageList(albumId, pageNo);
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
    $stateProvider.state('app.albums', {
        abstract: true,
        url: 'albums/',
        template: require('../view/module.html')
    }).state('app.albums.list', {
        url: 'list',
        template: require('../view/album/list.html'),
        controller: 'VideoController'
    }).state('app.albums.edit', {
        url: 'edit/:albumId',
        template: require('../view/album/edit.html'),
        controller: 'VideoController'
    }).state('app.albums.add', {
        url: 'add',
        template: require('../view/album/edit.html'),
        controller: 'VideoController'
    }).state('app.videos', {
        abstract:true,
        url: 'vidoes/',
        template: require('../view/module.html')
    }).state('app.videos.list', {
        url: 'list/:albumId',
        template: require('../view/album/video/list.html'),
        controller: 'VideoController'
    }).state('app.videos.edit', {
        url: 'edit/:videoId',
        template: require('../view/album/video/edit.html'),
        controller: 'VideoController'
    }).state('app.videos.add', {
        url: 'add',
        template: require('../view/album/video/edit.html'),
        controller: 'VideoController'
    });
});
