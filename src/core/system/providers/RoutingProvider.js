import angular from 'angular';
import uirouter from 'angular-ui-router'


export default angular.module('app.core', [uirouter])
    .provider('Routing', RoutingProvider)
    .name;

function RoutingProvider($stateProvider) {
    var _options;
    
    return({
        $get: function($stateProvider){
            return $stateProvider.state(_options.name, _options);
        },
        route: function(options){
                if (options.url === undefined) {
                    throw 'Route requires a url.';
                }

                if (options.name === undefined) {
                    throw 'State name required.'
                }

                options.controllerAs = 'vm';
                options.scope = {};

                _options = options;
        }    
    });
}

//    this.$get = function ($stateProvider) {
//
//        return {
//            route: (options) => {
//                if (options.url === undefined) {
//                    throw 'Route requires a url.';
//                }
//
//                //        if(options.template !== undefined){
//                //            options.template = require(options.template);
//                //        }
//
//                if (options.name === undefined) {
//                    throw 'State name required.'
//                }
//
//                options.controllerAs = 'vm';
//                options.scope = {};
//
//                $stateProvider.state(options.name, options);
//            }
//        }
//    }

    //    this.route = (options) => {
    //        if(options.url === undefined){
    //            throw 'Route requires a url.';  
    //        }
    //
    ////        if(options.template !== undefined){
    ////            options.template = require(options.template);
    ////        }
    //
    //        if(options.name === undefined){
    //            throw 'State name required.'
    //        }
    //
    //        options.controllerAs = 'vm';
    //        options.scope = {};
    //
    //        _options = options;         
    //    };
//}