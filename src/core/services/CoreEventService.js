import angular from 'angular';


export default function angular.module('grover.core')
    .service('CoreEventService', eventService);

function eventService (pubsub){
        return {
                broadcast: function(key, data){
                    pubsub(key).broadcast(data);
                },
                subscribe: function(key, callback) {
                    pubsub(key).subscribe(callback);
                },
                unsubscribe: function(key, callback){
                    pubsub(key).unsubscribe(callback)
                }
        }
    }
