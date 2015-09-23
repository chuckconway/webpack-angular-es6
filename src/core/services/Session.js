angular.module('grover.core')
    .service('CoreSession', function(CoreUserService, pubsub, CoreKeys){
        var self = this;
        var contextItems = [];

        this.kill = function(){
            pubsub(CoreKeys.pubsub.userChanged).broadcast();
        };

        this.user = function(callback){
            CoreUserService.get(function(data){
                callback(data.result);
            }, function(error){
                callback(undefined);
            });
        };

        this.claims = function(callback){
            self.user(function(user){

                if(user !== undefined) {
                    callback(user.claims);
                } else {
                    callback(undefined);
                }
            });
        };
    });
