import {app_module, controller_module, service_module} from '../config/module.config'

class UserController {
    constructor($scope, $state, $stateParams, UserService) {
        this.$scope = $scope;
        this.UserService = UserService;
        $scope.user_types = {
            0: '普通用户(投资人)',
            1: '客户经理'
        }
        $scope.availabe_fund_amount = {
            0: '1000万以下',
            1: '2000万以下',
            3: '其他'
        }
        if ($state.includes('app.users.list')) {
            this.getUserPageList(1);
        }
        if ($state.includes('app.users.detail')) {
            this.getUser($stateParams.userId);
        }
        if ($state.includes('app.users.edit')) {
            this.getUser($stateParams.userId);
        }
        if ($state.includes('app.members.list')) {
            this.getMemberPageList(1);
        }
    }

    getUserPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.user_page_list = this.UserService.getUserPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.user_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getUser(userId) {
        this.$scope.user = this.UserService.getUser(userId);
    }

    getMemberPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.member_page_list = this.UserService.getMemberPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.member_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }
}

UserController.$inject = ['$scope', '$state', '$stateParams', 'UserService'];
controller_module.controller('UserController', UserController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.users', {
        abstract: true,
        url: 'users/',
        template: require('../view/module.html')
    }).state('app.users.list', {
        url: 'list',
        template: require('../view/user/list.html'),
        controller: 'UserController'
    }).state('app.users.detail', {
        url: 'detail/:userId',
        template: require('../view/user/detail.html'),
        controller: 'UserController'
    }).state('app.users.edit', {
        url: 'edit/:userId',
        template: require('../view/user/edit.html'),
        controller: 'UserController'
    }).state('app.users.add', {
        url: 'add',
        template: require('../view/user/edit.html'),
        controller: 'UserController'
    }).state('app.users.import', {
        url: 'import',
        template: require('../view/user/import.html'),
        controller: 'UserController'
    }).state('app.members', {
        abstract: true,
        url: 'members/',
        template: require('../view/module.html')
    }).state('app.members.list', {
        url: 'list',
        template: require('../view/user/member/list.html'),
        controller: 'UserController'
    }).state('app.members.edit', {
        url: 'edit/:memberId',
        template: require('../view/user/member/edit.html'),
        controller: 'UserController'
    });
});
