import controller from './user.controller';

export default function routing($stateProvider) {

    $stateProvider.state('758bb54d-5dd7-4158-8d85-30fcb7c84e4e', {
        url: '/user',
        controller: controller.controllerName,
        controllerAs: 'vm',
        template: require('./user.html')
    });
}
