import {app_module, controller_module, service_module} from '../config/module.config';

class AdminService {
    constructor() {
    }

    getAdmin() {
            return {username : 'admin'};
    }
}

service_module.service('AdminService', AdminService);
