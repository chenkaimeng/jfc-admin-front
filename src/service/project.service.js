import {app_module, controller_module, service_module} from '../config/module.config'

class ProjectService {
    constructor() {

    }

    getProjectPageList(pageNo) {
        let projects = [];
        for (var i = 1; i <= 10; i++) {
            projects.push({
                id: i,
                peId: 42,
                peName: '嘉诚蓝峰数字营销产业基金',
                name: '嘉诚蓝峰数字营销产业基金',
                investAmount: 6000000,
                currency: 1,
                createTime: 1472461821345
            });
        }
        return {
            pageCount: 5,
            count: 50,
            data: projects
        }
    }

    getProject(projectId) {
        return {
            id: projectId,
            peId: 42,
            name: '嘉诚蓝峰数字营销产业基金',
            investAmount: 6000000,
            currency: 1,
            desc: '这是一个好项目',
            createTime: 1472461821345
        }
    }
}

service_module.service('ProjectService', ProjectService);
