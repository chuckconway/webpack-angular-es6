//import bootstrap from './bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './../less/styles.less';

//external dependencies
import angular from 'angular';
import _ from 'lodash';
import moment from 'moment';
import uirouter from 'angular-ui-router'
import components from './components/components';
//import routingservice from './../core/system/services/RoutingService';

//console.log(routingservice.name);

//import run from './run.config.js';

export default angular.module('app', [uirouter, components.name])
    .constant('_', _)
    .constant('moment', moment);

//export default angular.module('app')
//    .service('RoutingService', Routing)
//    .name;  