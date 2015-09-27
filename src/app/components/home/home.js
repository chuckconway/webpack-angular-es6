import angular from 'angular';
import routing from './home.routes';
import controller from './home.controller';
import routingProvider from './../../../core/system/services/Routing';
//import AService from './../../../core/system/services/AService';
import uirouter from 'angular-ui-router';
    

export default angular.module('app.component.home', ['app.core'])
    .config(routing)
    .controller(controller.controllerName, controller);