import {app_module, controller_module, service_module} from '../config/module.config';

class AdminService {
    constructor() {
    }

    getAdmin() {
        // return null;
        return {
            id: 1,
            username : 'admin',
            lastLoginTime: 1471784477662,
            lastLoginIp: '1.1.1.1'
        };
    }
}

service_module.service('AdminService', AdminService);
