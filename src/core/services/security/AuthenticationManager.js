import angular from 'angular';

angular.module('grover.core')
    .service('CoreAuthenticationManager', function(CoreAuthService, $state, $sce, $rootScope, $window, $q, $injector, $location, CoreAuthorizationContext, toaster, pubsub, CoreKeys, _){

        this.authenticate = function(event, toState, toParams){
            CoreAuthService.isAuthenticated(function(){

                pubsub(CoreKeys.pubsub.breadcrumbsUpdate).subscribe(function(){
                    renderBreadCrumbs();
                });

                $rootScope.isAuthenticated = CoreAuthService.signedIn();

                if($rootScope.isAuthenticated){

                    preventLoginedInUsersGoingToTheLoginView();

                    //Check if the route has an authorization key, if it does, check the user's claims.
                    //If they have the requried key, continue moving forward, otherwise display and toaster error and
                    //redirect them to the search landing page.
                    //If the route is unauthorized, don't render the breadcrumbs and instead redirect them to the new route.
                    authorizedRoute(toState, $location, toaster, renderBreadCrumbs);

                } else {

                    var currentUrl = $location.path();

                    //toState.authenticate means the page requires login.
                    if(toState.authenticate && currentUrl.indexOf('login') < 0){
                        $window.sessionStorage.setItem('redirectUrl', currentUrl);
                        $state.transitionTo('login');

                        event.preventDefault();
                    }
                }
            });

            function authorizedRoute(toState, location, toaster, breadCrumbs){
                if(toState.authorization !== undefined){
                    CoreAuthorizationContext.authorized(toState.authorization, function(authorized){
                        if(!authorized){
                            toaster.pop('error', 'Error', 'You are not authorized to view this page');
                            location.path("/search");
                        } else {
                            breadCrumbs();
                        }
                    });
                } else{
                    breadCrumbs();
                }
            }

            function preventLoginedInUsersGoingToTheLoginView(){
                //this is too prevent a logged in person from accessing the login page.
                //if someone is logged in, don't allow them to go to the homepage.
                if($location.path().indexOf('login') > -1 || toState.url == '/'){
                    $location.path("/search");
                }
            }

            function renderIcon(iconName){
                return '<span class="' + iconName + ' breadcrumb-padding"></span>';
            }

            function renderBreadCrumbs(){
                var breadcrumb = toState.breadcrumb;


                $rootScope.trustAsHtml = function(html){
                    return $sce.trustAsHtml(html);
                }

                if(breadcrumb != undefined){
                    var promises = $injector.invoke(breadcrumb.get, this, {params: toParams});

                    $rootScope.breadcrumb = {items:[]};

                    if(promises.name !== undefined ) {

                        if(promises.name['then'] !== undefined) {
                            promises.name.then(function (data) {

                            if(data.icon !== undefined){
                                var icon = renderIcon(data.icon);
                                data.name = icon + data.name;
                            }

                            $rootScope.breadcrumb['name'] = data.name;

                            });
                        } else {
                            $rootScope.breadcrumb['name'] = promises.name;
                        }
                    }

                    $q.all(promises.items).then(function(result){

                        _.forEach(result, function(i){
                            if(i.icon !== undefined){
                                var icon = renderIcon(i.icon);
                                i.name = icon + i.name;
                            }
                        });

                        $rootScope.breadcrumb.items = result;
                    });
                } else{
                    $rootScope.breadcrumb = null;
                }
            }
        };
    });
