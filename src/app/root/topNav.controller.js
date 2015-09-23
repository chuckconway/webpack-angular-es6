//
//export default function controller ($scope, CoreAuthService, CoreAuthorizationContext, CoreSession, CoreKeys, CoreEventService) {
//
//        $scope.$onRootScope('authenticationChange', checkForSignedInUser);
//        CoreEventService.subscribe(CoreKeys.pubsub.userChanged, ()=>{CoreSession.user(setUserAndAgencyName);});
//
//        checkForSignedInUser();
//
//        function checkForSignedInUser() {
//
//            CoreAuthService.isAuthenticated(function () {
//                var isAuthenticated = CoreAuthService.signedIn();
//                $scope.isAuthenticated = isAuthenticated;
//
//                if (isAuthenticated) {
//                    CoreSession.user(populate);
//                }
//            });
//        }
//
//        function setUserAndAgencyName(user){
//            if(user !== undefined) {
//                $scope.agencyName = user.agencyName
//                $scope.name = user.name;
//            }
//        }
//
//        function populate(user) {
//            setUserAndAgencyName(user);
//
//            CoreAuthorizationContext.authorized(CoreKeys.authorization.agencyViewKey, function (isAuthorized) {
//                $scope.agencyAuthorized = isAuthorized;
//            });
//        }
//    }
//
