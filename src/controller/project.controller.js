import {app_module, controller_module, service_module} from '../config/module.config'

class ProjectController {
    constructor($scope, $state, $stateParams, ProjectService) {

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
