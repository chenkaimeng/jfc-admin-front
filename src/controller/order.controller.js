import {app_module, controller_module, service_module} from '../config/module.config'

class OrderController {
    constructor($scope, $state, $stateParams, OrderService) {
        this.$scope = $scope;
        this.OrderService = OrderService;
        this.$scope.order_states = {
            0: '未预约',
            1: '已预约',
            2: '已支付',
            3: '已失效'
        }
        if ($state.includes('app.orders.list')) {
            this.getOrderPageList(1);
        }
        if ($state.includes('app.orders.edit')) {
            this.getOrder($stateParams.orderId);
        }
    }

    getOrderPageList(pageNo) {
        this.$scope.cur_page = pageNo;
        this.$scope.order_page_list = this.OrderService.getOrderPageList(pageNo);
        this.$scope.pages = [];
        for (var i = 1; i <= this.$scope.order_page_list.pageCount; i++) {
            this.$scope.pages.push(i);
        }
    }

    getOrder(orderId) {
        this.$scope.order = this.OrderService.getOrder(orderId);
    }
}

OrderController.$inject = ['$scope', '$state', '$stateParams', 'OrderService'];
controller_module.controller('OrderController', OrderController);

app_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.orders', {
        abstract: true,
        url: 'orders/',
        template: require('../view/module.html')
    }).state('app.orders.list', {
        url: 'list',
        template: require('../view/order/list.html'),
        controller: 'OrderController'
    }).state('app.orders.edit', {
        url: 'edit/:orderId',
        template: require('../view/order/edit.html'),
        controller: 'OrderController'
    });
});
