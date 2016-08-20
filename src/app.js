import './style/app.scss'

import angular from 'angular';
import routing from './routes.js';
import {app_module, controller_module, service_module} from './config/module.config'
import './config/scanner'

app_module.config(routing);
