import {app_module, controller_module, service_module} from '../config/module.config';
import * as TOPIC_CONSTANTS from '../constants/topic.constants.js';
class TopicController {
    constructor($scope, $state, $stateParams, TopicService) {
        this.$scope = $scope;
        $scope.topic_constants = TOPIC_CONSTANTS;
        $scope.updateTopic = this.updateTopic;
        $scope.createTopic = this.createTopic;
        this.TopicService = TopicService;

        if ($state.includes('app.topics.list')) {
            this.getTopicPageList(1);
        }
        if ($state.includes('app.topics.detail')) {
            this.getTopic($stateParams.topicId);
        }
    }

    getTopicPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.topic_page_list = this.TopicService.getTopicPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.topic_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getTopic(topicId) {
        this.$scope.topic = this.TopicService.getTopic(topicId);
    }

    updateTopic(topic) {
        console.log(topic);
    }

    createTopic(topic) {
        console.log(topic);
    }
}

TopicController.$inject = ['$scope', '$state', '$stateParams', 'TopicService'];
controller_module.controller('TopicController', TopicController);

app_module.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('app.topics', {
        abstract: true,
        url: 'topics/',
        template: require('../view/module.html')
    }).state('app.topics.list', {
        url: 'topics/list',
        template: require('../view/topic/list.html'),
        controller: 'TopicController'
    }).state('app.topics.detail', {
        url: 'topics/detail/:topicId',
        template: require('../view/topic/detail.html'),
        controller: 'TopicController'
    }).state('app.topics.add', {
        url: 'topics/add',
        template: require('../view/topic/detail.html'),
        controller: 'TopicController'
    });
});
