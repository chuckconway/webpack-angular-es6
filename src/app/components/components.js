import angular from 'angular';
import home from './home/home';
import user from './users/user';

let components = angular.module('app.components', [
	home.name,
    user.name
]);

export default components;