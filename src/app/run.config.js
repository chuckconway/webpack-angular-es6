export default function run($rootScope, CoreAuthenticationManager, $http, DSCacheFactory, CoreEventService, CoreKeys) {

    /*eslint-disable new-cap */
        DSCacheFactory('defaultCache', {
            maxAge: 60000, // Items added to this cache expire after 15 minutes.
            cacheFlushInterval: 6000000, // This cache will clear itself every hour.
            deleteOnExpire: 'aggressive' // Items will be deleted from this cache right when they expire.
        });
    /*eslint-enable new-cap */

        $http.defaults.cache = DSCacheFactory.get('defaultCache');

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
            CoreAuthenticationManager.authenticate(event, toState, toParams);
            CoreEventService.broadcast(CoreKeys.pubsub.routeChange);
        });

}
