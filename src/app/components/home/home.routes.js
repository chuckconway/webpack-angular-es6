import controller from './home.controller';

export default function routing($stateProvider) {

    $stateProvider.state('b58bb54d-5dd7-4158-8d85-30fcb7c84e4e', {
        url: '/home',
        controller: controller.controllerName,
        controllerAs: 'vm',
        template: require('./home.html'),
        authenticate: true,
        breadcrumb: {
            get: breadcrumb
        }
    });

    function breadcrumb() {
        return {
            name: '<span class="fa fa-whatsapp"></span> Leads',
            items: [
                {
                    url: '/cas/#/',
                    name: 'Leads'
                }
            ]
        };
    }
}

class Routing {
    constructor($stateProvider) {
        this.stateProvider = $stateProvider;
    }
}
