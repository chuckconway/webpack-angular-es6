//export default function ($scope, CoreKeys, CoreSession, CoreAuthorizationContext, CoreEventService) {
//
//        CoreEventService.subscribe(CoreKeys.pubsub.routeChange, () => {CoreSession.user(checkForClaims);});
//
//        function checkForClaims(){
//
//            $scope.hasAccess = false;
//
//            CoreSession.claims(function(data){
//                if(data !== undefined){
//                    CoreAuthorizationContext.authorizedExecution(CoreKeys.authorization.createEntity, function(){
//                       $scope.hasAccess = true;
//                    });
//                }
//            });
//        }
//    }
