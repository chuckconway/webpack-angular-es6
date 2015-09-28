import angular from 'angular';
import routing from './home.routes';
import controller from './home.controller';
//import routingProvider from './../../../core/system/providers/RoutingProvider';
import uirouter from 'angular-ui-router';
    

export default angular.module('app.component.home', [])
    .config(routing)
    .controller(controller.controllerName, controller);