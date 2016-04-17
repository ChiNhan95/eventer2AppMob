// register the interceptor as a service
app.factory('myHttpInterceptor', function($q, $injector) {
    return {

      'request': function(config) {
          // do something on success

          config.headers.Authorization = 'Basic SktCVVlNMUdYTVNRQ0EySFNORVNMR1pENlNYVkhDMVo6';

          var LocalStorageService = $injector.get('LocalStorageService');

          return config;
    },

   'requestError': function(rejection) {
      // do something on error

      return $q.reject(rejection);
    },

    'response': function(response) {
      // do something on success
      return response;
    },

   'responseError': function(rejection) {
      // do something on error

      return $q.reject(rejection);
    }
  };
});

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/**',
        '*://www.youtube.com/**',
        'http://www.youtube.com/embed/**',
        'https://www.youtube.com/embed/**'
    ]);
});

app.config(function($httpProvider){
  $httpProvider.interceptors.push('myHttpInterceptor');
});

