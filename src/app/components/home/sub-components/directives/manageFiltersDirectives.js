import angular from 'angular';

function() filters {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            scope: {
                filterName: '@',
                name:'@'
            },
            template: '<button class="btn btn-xs pull-right" ng-click="manageFilters(filterName)" >{{name}}</button>',
            controller: function($scope, $modal) {

                $scope.manageFilters = manageFilters;
                $scope.name = $scope.name || "Add Filter";

                function manageFilters(filter) {
                    var modalInstance = $modal.open({
                        templateUrl: 'home/components/directives/manageFiltersDirectives.tpl.html',
                        controller: function($scope, $stateParams, FilterService) {

                            FilterService.getMetadataForView(filter, d => {
                                $scope.columns = d.result.columns;
                                $scope.operators = d.result.operators;
                            });

                            $scope.filterColumns = [];
                            $scope.modelClose = () => modalInstance.close();
                        

                            function addCondition(){
                                $scope.filterColumns.push($scope.filter);
                                
                            }
                        }
                        
                    });
                }
            }
        }
}

export default angular.module('grover.cas')
    .directive('manageFilters', filters);

//angular.module('grover.cas')
//    .directive('manageFilters', function() {
//        return {
//            restrict: "E",
//            transclude: true,
//            replace: true,
//            scope: {
//                filterName: '@',
//                name:'@'
//            },
//            template: '<button class="btn btn-xs pull-right" ng-click="manageFilters(filterName)" >{{name}}</button>',
//            controller: function($scope, $modal) {
//
//                $scope.manageFilters = manageFilters;
//                $scope.name = $scope.name || "Add Filter";
//
//                function manageFilters(filter) {
//                    var modalInstance = $modal.open({
//                        templateUrl: 'home/components/directives/manageFiltersDirectives.tpl.html',
//                        controller: function($scope, $stateParams, FilterService) {
//
//                            FilterService.getMetadataForView(filter, d => {
//                                $scope.columns = d.result.columns;
//                                $scope.operators = d.result.operators;
//                            });
//
//                            $scope.filterColumns = [];
//                            $scope.modelClose = () => modalInstance.close();
//                        
//
//                            function addCondition(){
//                                $scope.filterColumns.push($scope.filter);
//                                
//                            }
//                        }
//                        
//                    });
//                }
//            }
//        }
//    });