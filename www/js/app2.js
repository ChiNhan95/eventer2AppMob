document.addEventListener('deviceready', function(){

	//ici code au lancement de l'application
	//module cordova
},false);

//nouvelle application
var app = angular.module('app',
                                ['ngRoute',
                                'ngCart',
                                'filter.truncate',
                                'filter.ucFirst',
                                'filter.html',
                                'angular-md5',
                                'uiGmapgoogle-maps'
                                ]);



//Google Maps SDK
angular.module('app').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'xxx',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});

// Config Whitelist URL
app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/**',
        '*://www.youtube.com/**',
        'http://www.youtube.com/embed/**',
        'https://www.youtube.com/embed/**'
    ]);
});

/**
 *  Contantes
 */
app.constant('API_URL', 'http://127.0.0.1:8181');
app.constant('_COOKIE_KEY_PRESTA', 'ROsZpoAIaVEDhzgeBi7HBCMbWfhMZDPK4skfr8CPAqXi9LxB9r8igsef');

app.run(function($rootScope, API_URL){
    $rootScope.API_URL = API_URL;
});

//création des routes
app.config(function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl : 'partials/home.html',
            controller  : 'HomeController'
        })
        .when('/map', {
            templateUrl:'partials/map.html'
        })
        .when('/inscription', {
            templateUrl:'partials/inscription.html'
        })
        .when('/user/signin', {
            templateUrl : 'partials/user/userSignin.html',
            controller  : 'UserSigninController'
        })
        .when('/user/profil', {
            templateUrl : 'partials/user/userProfil.html',
            controller  : 'UserProfilController'
        })
        .when('/video', {
            templateUrl : 'partials/video/video.html',
            controller  : 'VideoController'
        })
        .when('/product', {
            templateUrl : 'partials/product/view.html',
            controller  : 'ProductController'
        })
        .when('/product/:nameCategorie/:id', {
            templateUrl : 'partials/product/productbycat.html',
            controller  : 'ProductByCatController'
        })
        .when('/product/:nameProducts/videos/:ids', {
            templateUrl : 'partials/product/productvideos.html',
            controller  : 'ProductVideosController'
        })
        .when('/posologie', {
            templateUrl : 'partials/posology/posology.html',
            controller  : 'PosologyController'
        })
        .when('/posologie/product/:nameProduct/:id', {
            templateUrl : 'partials/posology/posologyproduct.html',
            controller  : 'PosologyProductController'
        })
        .when('/forum', {
            templateUrl : 'partials/forum/forum.html',
            controller  : 'ForumController'
        })
        .when('/forum/:nameForum/:id', {
            templateUrl : 'partials/forum/forumtopic.html',
            controller  : 'ForumTopicController'
        })
        .when('/forum/:nameForum/topic/:nameTopic/:id', {
            templateUrl : 'partials/forum/forumpost.html',
            controller  : 'ForumPostController'
        })
        .when('/cart/product', {
            templateUrl : 'partials/cart/checkoutcart.html',
            controller  : 'CheckoutCartController'
        })
        .when('/user/disconnect', {
            resolve : {
                execute : function(UserService){
                    UserService.disconnect();
                }
            },
            redirectTo  : '/home'
        })
        .otherwise({
            redirectTo  : '/home'
        });
})