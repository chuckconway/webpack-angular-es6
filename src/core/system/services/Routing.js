import angular from 'angular';
import uirouter from 'angular-ui-router'


export default angular.module('app.core', [uirouter])
    .provider('Routing', RoutingProvider)
    .name;  

//class Routing {
//    constructor($stateProvider){
//        this.stateProvider = $stateProvider;
//    }
//    
//    set() {
//        if(options.url === undefined){
//          throw 'Route requires a url.';  
//        }
//
//        if(options.template !== undefined){
//            options.template = require(options.template);
//        }
//
//        if(options.name !== undefined){
//            throw 'State name required.'
//        }
//
//        options.controllerAs = 'vm';
//        options.scope = {};
//
//        this.stateProvider.state(options.name, options);     
//    }    
//}
             
function RoutingProvider(){    

    this.$get = function($stateProvider){
        //$state.current = {};
    }
    
    //        return {
//            $get:($stateProvider, options) => {                
//                if(options.url === undefined){
//                  throw 'Route requires a url.';  
//                }
//                
//                if(options.template !== undefined){
//                    options.template = require(options.template);
//                }
//                
//                if(options.name !== undefined){
//                    throw 'State name required.'
//                }
//                            
//                options.controllerAs = 'vm';
//                options.scope = {};
//                
//                $stateProvider.state(options.name, options);               
//            }
//        };
    }

//myApp.provider('unicornLauncher', function UnicornLauncherProvider() {
//  var useTinfoilShielding = false;
//
//  this.useTinfoilShielding = function(value) {
//    useTinfoilShielding = !!value;
//  };
//
//  this.$get = ["apiToken", function unicornLauncherFactory(apiToken) {
//
//    // let's assume that the UnicornLauncher constructor was also changed to
//    // accept and use the useTinfoilShielding argument
//    return new UnicornLauncher(apiToken, useTinfoilShielding);
//  }];
//});

