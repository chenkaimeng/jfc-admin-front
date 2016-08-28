import {app_module, controller_module, service_module} from '../config/module.config'

class UserService {
    constructor() {

    }

    getUserPageList(pageNo) {
        let users = [];
        for (var i = 1; i <= 10; i++) {
            users.push({
                id: i,
                avatar: 'http://7xpehq.com1.z0.glb.clouddn.com/1866370692020162327142318.png',
                username: '13811162186',
                phoneNumber: '13811162186',
                email: '470215773@qq.com',
                realName: '陈开蒙',
                isMember: true,
                gender: 0,
                bankCard: '123123234234234',
                createTime: 1471920592098
            });
        }
        return {
            count: 100,
            pageCount: 5,
            data: users
        }
    }

    getUser(userId) {
        return {
            id: userId,
            username: '13811162186',
            avatar: 'http://7xpehq.com1.z0.glb.clouddn.com/1866370692020162327142318.png',
            realName: '陈开蒙',
            idCard: 4113811111111111111,
            idCardEndTime: 1471920592098,
            alwaysAvailable: true,
            phoneNumber: 13811162186,
            email: '470215773@qq.com',
            company: '北京嘉富诚股权投资基金管理有限公司',  //代理机构
            isMember: true,
            gender: 0,
            userType: 0,
            availabeFundAmount: 1,
            bankCard: '12312312312312312321',
            bankCity: '北京',
            bankName: '北京银行',
            createTime: 1471920592098
        }
    }

    getMemberPageList(pageNo) {
        let users = [];
        for (var i = 1; i <= 10; i++) {
            users.push({
                id: i,
                pe: '私募基金',
                realName: '陈开蒙',
                phoneNumber: '13811162186',
                gender: 0,
                city: '北京',
                company: '北京嘉富诚股权投资基金管理有限公司',
                email: '470215773@qq.com',
                industry: '互联网',
                state: 1,
                applyTime: 1471920592098
            });
        }
        return {
            count: 100,
            pageCount: 5,
            data: users
        }
    }

    getMember(memberId) {

    }
}

service_module.service('UserService', UserService);
