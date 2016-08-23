import {app_module, controller_module, service_module} from '../config/module.config'

function formatDate() {
    function fixZero(number) {
        return number < 10 ? '0' + number : number;
    }

    return function(timestamp, offset, dateSplit, timeSplit) {
        let date = new Date(timestamp);
        if(offset) {
            date.setDate(date.getDate() + offset);
        }
        var day = [date.getFullYear(), fixZero(date.getMonth() + 1), fixZero(date.getDate())].join(dateSplit);
        var time = [fixZero(date.getHours()), fixZero(date.getMinutes()), fixZero(date.getSeconds())].join(timeSplit);
        return day + ' ' + time; 
    }
}

app_module.filter('FormatDate', formatDate);
