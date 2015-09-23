import angular from 'angular';
import routing from './user.routes';
import controller from './user.controller';

export default angular.module('app.component.user', [])
    .config(routing)
    .controller(controller.controllerName, controller);