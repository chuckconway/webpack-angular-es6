import angular from 'angular';

function() leadDirective{
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            scope: {
                mode: '@',
                lead: '='
            },
            template: '<button class="btn btn-primary btn-sm pull-right" ng-click="addLead(lead)" >{{text}}</button>',
            controller: function($scope, $stateParams, $modal) {

                $scope.addLead = addLead;
                $scope.text = $scope.mode || "Add";


                function addLead(lead) {
                    var modalInstance = $modal.open({
                        templateUrl: 'home/components/directives/addLeadDirective.tpl.html',
                        controller: function($scope, $stateParams, CoreAddressValidationService, LeadsService, CoreFormService, CoreEventService, Keys) {

                            let modalClose = () => { modalInstance.close() };

                            $scope.validateAddress = CoreAddressValidationService.validateAddress;
                            $scope.lead = lead || { address: {}, phoneNumbers: [] };
                            $scope.createLead = createLead;
                            $scope.modalClose = modalClose;

                            function createLead() {

                                let valid = validCase;
                                let invalid = undefined;
                                let customEval = customCondition

                                //clear error messages.
                                $scope.message = '';

                                CoreFormService.submitForm($scope.leadForm, valid, invalid, customEval);
                            }

                            function SaveService(lead){
                               return (lead === undefined ? LeadsService.create : LeadsService.update);
                            }

                            function validCase(){
                                $scope.loading = true;
                                var saveService = SaveService(lead);

                                saveService($scope.lead, () => {
                                    $scope.loading = false;

                                    CoreEventService.broadcast(Keys.event.leadCreate);

                                    modalClose();
                                });
                            }

                            function customCondition(){
                                if ($scope.lead.phoneNumbers.length == 0) {
                                    $scope.message = "A phone number is required.";

                                    return false;
                                }

                                return true;
                            }
                }
            });
        }
    }

}
}

export default angular.module('grover.cas')
    .directive('addLead', leadDirective);

//angular.module('grover.cas')
//    .directive('addLead', function() {
//        return {
//            restrict: "E",
//            transclude: true,
//            replace: true,
//            scope: {
//                mode: '@',
//                lead: '='
//            },
//            template: '<button class="btn btn-primary btn-sm pull-right" ng-click="addLead(lead)" >{{text}}</button>',
//            controller: function($scope, $stateParams, $modal) {
//
//                $scope.addLead = addLead;
//                $scope.text = $scope.mode || "Add";
//
//
//                function addLead(lead) {
//                    var modalInstance = $modal.open({
//                        templateUrl: 'home/components/directives/addLeadDirective.tpl.html',
//                        controller: function($scope, $stateParams, CoreAddressValidationService, LeadsService, CoreFormService, CoreEventService, Keys) {
//
//                            let modalClose = () => { modalInstance.close() };
//
//                            $scope.validateAddress = CoreAddressValidationService.validateAddress;
//                            $scope.lead = lead || { address: {}, phoneNumbers: [] };
//                            $scope.createLead = createLead;
//                            $scope.modalClose = modalClose;
//
//                            function createLead() {
//
//                                let valid = validCase;
//                                let invalid = undefined;
//                                let customEval = customCondition
//
//                                //clear error messages.
//                                $scope.message = '';
//
//                                CoreFormService.submitForm($scope.leadForm, valid, invalid, customEval);
//                            }
//
//                            function SaveService(lead){
//                               return (lead === undefined ? LeadsService.create : LeadsService.update);
//                            }
//
//                            function validCase(){
//                                $scope.loading = true;
//                                var saveService = SaveService(lead);
//
//                                saveService($scope.lead, () => {
//                                    $scope.loading = false;
//
//                                    CoreEventService.broadcast(Keys.event.leadCreate);
//
//                                    modalClose();
//                                });
//                            }
//
//                            function customCondition(){
//                                if ($scope.lead.phoneNumbers.length == 0) {
//                                    $scope.message = "A phone number is required.";
//
//                                    return false;
//                                }
//
//                                return true;
//                            }
//                }
//            });
//        }
//    }
//
//}
//});

