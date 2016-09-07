import {app_module, controller_module, service_module} from '../config/module.config'
import * as PE_CONSTANTS from '../constants/pe.constants'

class ProjectController {
    constructor($scope, $state, $stateParams, ProjectService) {
        $scope.CURRENCY = PE_CONSTANTS.CURRENCY;
        this.$scope = $scope;
        this.ProjectService = ProjectService;

        if ($state.includes('app.projects.list')) {
            this.getProjectPageList(1);
        }
        if ($state.includes('app.projects.edit')) {
            this.getProject($stateParams.projectId);
        }
    }

    getProjectPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.project_page_list = this.ProjectService.getProjectPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.project_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getProject(projectId) {
        this.$scope.project = this.ProjectService.getProject(projectId);
    }
}

ProjectController.$inject = ['$scope', '$state', '$stateParams', 'ProjectService'];
controller_module.controller('ProjectController', ProjectController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.projects', {
        abstract: true,
        url: 'projects/',
        template: require('../view/module.html')
    }).state('app.projects.list', {
        url: 'list',
        template: require('../view/project/list.html'),
        controller: 'ProjectController'
    }).state('app.projects.edit', {
        url: 'edit/:projectId',
        template: require('../view/project/edit.html'),
        controller: 'ProjectController'
    }).state('app.projects.add', {
        url: 'add',
        template: require('../view/project/edit.html'),
        controller: 'ProjectController'
    }).state('app.projects.import', {
        url: 'import',
        template: require('../view/project/import.html'),
        controller: 'ProjectController'
    })
})
