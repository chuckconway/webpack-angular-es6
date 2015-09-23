angular.module('grover.core')
    .service('CoreAuthorizationContext',function(_, CoreSession){

        this.authorizedExecution = function(key, action){

            //Looking for the claim key that was passed in. If it exists in the claim set, then execute the action.
            CoreSession.claims(function(claims){
                var claim = findKey(key, claims);

                //If Claim was found then execute the call.
                //If it was not found, do nothing
                if(claim !== undefined){
                    action();
                }
            });
        };

        this.authorized = function(key, callback){
            //Looking for the claim key that was passed in. If it exists in the claim set, then execute the action.
            CoreSession.claims(function(claims){
                var claim = findKey(key, claims);

                //If they don't have any security key, then move forward and authorization.
                var valid = claim !== undefined;
                callback(valid);
            });
        };

        //this.agencyViewKey = '401D91E7-6EA0-46B4-9A10-530E3483CE15';

        function findKey(key, claims){
            var claim = _.find(claims, function(item){
                return item.value === key;
            });

            return claim;
        }
    });