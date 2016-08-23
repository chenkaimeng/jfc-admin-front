import {app_module, controller_module, service_module} from '../config/module.config'

class PeService {
    constructor() {

    }

    getPePageList(pageNo) {
        let pe_list = [];
        for (var i = 1; i <= 10; i++) {
            pe_list.push({
                id: i,
                mainTitle: '专项投资基金',
                investPeriod: 1.0,
                incomeType: 0,
                totalAmount: 100000,
                productCode: 23,
                riskLevel: 1,
                contactPhone: 12344412343,
                collectState: 2,
            });
        }
        return {
            count: 100,
            pageCount: 5,
            data: pe_list
        }
    }

    getPe(peId) {
        return {
            id: 1,
            type: 1, // 私募类型
            mainTitle: '深圳市恒安兴纺织科技有限公司专项基金说明书', //主标题
            secondTitle: '深圳市恒安兴纺织科技有限公司专项基金说明书', //副标题
            minInvest: 1000000, //最小投资金额
            totalAmount: 1000000000, //募集总额
            incomeType: 1, //收益类型
            stableIncomeDetail: {
                rate100: 2.0,
                rate300: 3.0,
                rate1000: 5.0
            },
            image: 'https://img3.aixuehuisi.com/jdxk_2f3abc9122b34a8fc7d237891610c76d3', //图片
            manageAgency: '北京嘉富诚股权投资基金管理有限公司',  //代理机构
            investPeriod: 5.0, //投资期限
            investPeriodDesc: '3+2', //期限说明
            downpaymen: 100000, //首期款金额
            managementCost: 4, //管理费用
            orderedAmount: 500000, //已预约资金总额
            orderedPersonCount: 50, //预约人数总额
            expectSignTime: 1471920592098, //预计签约日期
            signStartTime: 1471920592098, //签约起点日期
            signEndTime: 1471920592098, //签约终点日期
            orderStartTime: 1471920592098, //预约起点日期
            orderEndTime: 1471920592098, //预约终点日期
            companyComment: '好', //公司点评
            productShortName: '恒安兴', //产品简称
            productCode: 7, //产品代码
            minIncreaseInvest: 100000, //最低增加投资
            fundPurpose: '补充公司流动资金； 西贝尔酒店用品新业务拓展资金需求。', //资金用途
            repaymentWay: '上市退出； 并购及同业转售； 分红； 股权回购。', //还款来源
            contactPhone: 18915113168,
            riskDesc: '', //风险提示
            fundAnnual: '', //基金年报
            moreDetail: '', //更多详情
            foundPeriod: '', //基金期限
            returnRate: '', //投资回报率
            currency: 1, //币种
            collectType: 2, //募集方式
            productType: 1, //产品类型
            riskLevel: 2, //风险等级
            collectState: 1, //募集状态
            leaveType: 2 //退出方式
        }
    }
}

service_module.service('PeService', PeService);
