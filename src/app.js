import './style/app.scss'

import angular from 'angular';
import {app_module, controller_module, service_module} from './config/module.config'
import './config/scanner'

app_module.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');
});
app_module.constant('modelFormatConfig',{
    'date': {
        "formatter": function (args) {
            let modelValue = args.$modelValue, filter = args.$filter;
            return  filter('date')(modelValue, 0, '-', ':');
        },
        "parser": function (args) {
            let viewValue = args.$viewValue;
            let day_time[] = viewValue.split(' ');
            let day[] = day_time[0].split('-');
            let time[] = day_time[1].split(':');
            let date = new Date(day[0], day[1] - 1, day[2], time[0]);
            return
        },
        "isEmpty": function (value) {
            return !value.$modelValue;
        },
    }
})
