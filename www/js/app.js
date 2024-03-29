// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// Config Whitelist URL
.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/**',
        '*://www.youtube.com/**',
        'http://www.youtube.com/embed/**',
        'https://www.youtube.com/embed/**'
    ]);
})


/**
 *  Contantes
 */
.constant('API_URL', 'http://localhost/prestashop/api')
.constant('_COOKIE_KEY_PRESTA', 'ROsZpoAIaVEDhzgeBi7HBCMbWfhMZDPK4skfr8CPAqXi9LxB9r8igsef')

.run(function($rootScope, API_URL){
    $rootScope.API_URL = API_URL;
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('home', {
    url : '/home',
        templateUrl : 'partials/home.html',
        controller  : 'HomeController'
  })
  .state('inscription', {
    url : '/inscription',
      templateUrl:'partials/inscription.html'
  })
  .state('signin', {
      url: '/user/signin',
      templateUrl : 'partials/user/userSignin.html',
      controller  : 'UserSigninController'
  })
  .state('profil', {
      url: '/user/profil',
      templateUrl : 'partials/user/userProfil.html',
      controller  : 'UserProfilController'
  })
  .state('product', {
      url : '/product',
      templateUrl : 'partials/product/view.html',
      controller  : 'ProductController'
  })
  .state('event', {
        url : '/addEvent',
        templateUrl : 'partials/event/view.html',
        controller  : 'eventController'
    })
  .state('/user/disconnect', {
      resolve : {
          execute : function(UserService){
              UserService.disconnect();
          }
      },
      redirectTo  : '/home'
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
