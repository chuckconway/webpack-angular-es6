import angular from 'angular';
import routing from './home.routes';
import controller from './home.controller';

export default angular.module('app.component.home', [])
    .config(routing)
    .controller(controller.controllerName, controller);