angular.module('grover.core')
    .service('CoreAuthService',function($http, $window, CoreSettingsService, $rootScope){
        this.authenticate = function(credentials, success, failure){
            var self = this;

            $http
                .post(CoreSettingsService.createUrl('/api/v1/authenticate'), credentials)
                .success(function (data, status, headers, config) {
                    self.signIn(data.result.id, data.result.name, data.result.agencyName);
                    success(data);
                })
                .error(function (data, status, headers, config) {
                   
                    // Erase the token if the user fails to log in
                    $window.sessionStorage.removeItem('loggedIn');
                    $window.sessionStorage.removeItem('name');
                    $window.sessionStorage.removeItem('userId');
                    $window.sessionStorage.removeItem('agencyName');
                    failure(data);
                });
        };

        this.name = function(){
           return $window.sessionStorage.getItem('name');
        };

        this.agencyName = function(){
            return $window.sessionStorage.getItem('agencyName');
        };

        this.userId = function(){
            var userId = $window.sessionStorage.getItem('userId');
            return parseInt(userId);
        };

        this.signIn = function(id, name, agencyName){
            $window.sessionStorage.setItem('loggedIn', 'true');
            $window.sessionStorage.setItem('name', name);
            $window.sessionStorage.setItem('userId', id);
            $window.sessionStorage.setItem('agencyName', agencyName);
        };

        this.signedIn = function(){
            var loggedIn = $window.sessionStorage.getItem('loggedIn');
            return loggedIn != null && loggedIn != 'false';
        };

        this.isAuthenticated = function(authCallback){
            var self = this;

            var loggedIn = $window.sessionStorage.getItem('loggedIn');
            if(loggedIn != null && loggedIn != 'false'){
                if(authCallback != undefined){
                    authCallback();
                }
            } else {
                if(loggedIn == null){
                    $http.get(CoreSettingsService.createUrl('/api/v1/authenticate'),{cache:false}).success(function(data){
                        if(data.result.authenticated){
                            self.signIn(data.result.id, data.result.name, data.result.agencyName);
                            $rootScope.$emit('authenticationChange');
                        } else {
                            $window.sessionStorage.setItem('loggedIn', 'false');
                        }

                        if(authCallback != undefined){
                            authCallback();
                        }
                    }).error(function(data){});
                }

                if(loggedIn == 'false'){
                    if(authCallback != undefined){
                        authCallback();
                    }
                }
            }
        };

        this.logout = function(success){
            $http.delete(CoreSettingsService.createUrl('/api/v1/authenticate'))
                .success(function (data, status, headers, config) {
                    $window.sessionStorage.removeItem('loggedIn');
                    $window.sessionStorage.removeItem('name');
                    $window.sessionStorage.removeItem('userId');
                    $window.sessionStorage.removeItem('agencyName');

                    $rootScope.$emit('authenticationChange');

                    success();
                });
        };
    });
