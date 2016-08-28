import {app_module, controller_module, service_module} from '../config/module.config'

class PersonIncomeService {
    constructor() {

    }
}

service_module.service('PersonIncomeService', PersonIncomeService);
