import {app_module, controller_module, service_module} from '../config/module.config'

class OrderService {
    constructor() {

    }

    getOrderPageList(pageNo) {
        let orders = [];
        for (var i = 1; i <= 10; i++) {
            orders.push({
                id: i,
                pe: '嘉诚蓝峰数字营销产业基金',
                userId: i,
                username: '13811162186',
                investAmount: 1000000,
                realTradeAmount: 1000,
                state: 1,
                createTime: 1472219939633
            });
        }
        return {
            pageCount: 10,
            count: 100,
            data: orders
        }
    }

    getOrder(orderId) {
        return {
            id: orderId,
            pe: '嘉诚蓝峰数字营销产业基金',
            userId: 1,
            username: '13811162186',
            managerUser: 0,
            investAmount: 1000000,
            realTradeAmount: 1000,
            state: 1,
            createTime: 1472219939633,
            payTime: 1472219939633
        }
    }
}

service_module.service('OrderService', OrderService);
