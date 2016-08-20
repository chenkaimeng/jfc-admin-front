import angular from 'angular'
import uirouter from 'angular-ui-router';

var app_module = angular.module('app', [uirouter,'controller']);
var controller_module = angular.module('controller', ['service']);
var service_module = angular.module('service', []);

export {app_module, controller_module, service_module};
