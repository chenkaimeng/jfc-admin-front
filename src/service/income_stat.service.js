import {app_module, controller_module, service_module} from '../config/module.config'

class IncomeStatService {
    constructor() {
    }

    getIncomeStatPageList(pageNo) {
        let income_stats = [];
        for (var i = 1; i <= 10; i++) {
            income_stats.push({
                id: i,
                peId: i,
                peName: '嘉诚汇金-恒安兴项目',
                userId: i,
                username: '林梓益',
                totalIncome: 51200.00,
                totalInvest: 1000000.00,
                currency: 0,
                investStartTime: 1472461821345
            });
        }

        return {
            pageCount: 5,
            count: 50,
            data: income_stats
        }
    }

    getIncomeStat(incomeStatId) {
        return {
                id: incomeStatId,
                peId: 42,
                peName: '嘉诚汇金-恒安兴项目',
                userId: 25,
                username: '林梓益',
                totalIncome: 51200.00,
                totalInvest: 1000000.00,
                currency: 0,
                investStartTime: 1472461821345
            }
    }
}

service_module.service('IncomeStatService', IncomeStatService);
