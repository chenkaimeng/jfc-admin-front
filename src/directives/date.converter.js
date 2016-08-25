import {app_module, controller_module, service_module} from '../config/module.config.js'

class DateConverter {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attrs, ngModel) {

        function fixZero(number) {
            return number < 10 ? '0' + number : number;
        }

        function formatDate(timestamp) {
            if (!timestamp)
                return '';
            let date = new Date(timestamp);
            var day = [date.getFullYear(), fixZero(date.getMonth() + 1), fixZero(date.getDate())].join('-');
            var time = [fixZero(date.getHours()), fixZero(date.getMinutes()), fixZero(date.getSeconds())].join(':');
            return day + ' ' + time;
        }

        function parseDate(dateStr) {
            if (!dateStr)
                return 0;
            if (dateStr instanceof number)
                return (new Date(dateStr)).getTime();
            let day_time = dateStr.split(' ');
            let day = day_time[0].split('-');
            let time = day_time[1].split(':');
            let date = new Date(day[0], day[1] - 1, day[2], time[0], time[0], time[1], time[2]);
            return date.getTime();
        }
        ngModel.$parsers.push(parseDate);
        ngModel.$formatters.push(formatDate);
    }
}

app_module.directive('dateConverter', () => new DateConverter());
