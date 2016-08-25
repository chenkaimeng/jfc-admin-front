import angular from 'angular'
import uirouter from 'angular-ui-router';
import 'angular-datepicker';
import 'angular-datepicker/dist/index.css'

let app_module = angular.module('app', [uirouter, 'datePicker', 'controller']);
let controller_module = angular.module('controller', ['service']);
let service_module = angular.module('service', []);

export {app_module, controller_module, service_module};
