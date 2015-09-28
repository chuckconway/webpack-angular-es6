import controller from './home.controller';

export default function routing($stateProvider) {
        $stateProvider.state('b58bb54d-5dd7-4158-8d85-30fcb7c84e4e', {
            url:'/home',
            controller: controller.controllerName,
            controllerAs: 'vm',
            template: require('./home.html')
        });
    
//    RoutingProvider.route({
//        name:'b58bb54d-5dd7-4158-8d85-30fcb7c84e4e',
//        url:'/home',
//        template: require('./home.html'),
//        controller: controller.controllerName    
//    });
    
//        $stateProvider.state('b58bb54d-5dd7-4158-8d85-30fcb7c84e4e', {
//            url:'/home',
//            controller: controller.controllerName,
//            controllerAs: 'vm',
//            template: require('./home.html')
//        });
}

//export default function routing(RoutingService) {
//    RoutingService.set({
//        name:'home',
//        url:'/home',
//        template:'./home.html',
//        controller: controller.controllerName    
//    });
//}
    
    //    $stateProvider.state('b58bb54d-5dd7-4158-8d85-30fcb7c84e4e', {
    //        url:'/home',
    //        controller: controller.controllerName,
    //        controllerAs: 'vm',
    //        template: require('./home.html')
    //    });
