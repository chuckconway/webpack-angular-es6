//import bootstrap from './bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './../less/styles.less';

//external dependencies
import angular from 'angular';
import _ from 'lodash';
import moment from 'moment';
import uirouter from 'angular-ui-router'
import grovercore from 'grover-core';
import components from './components/components';

import run from './run.config.js';

angular.module('app',
    [uirouter, components.name])
    .constant('_', _)
    .constant('moment', moment);
