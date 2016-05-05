'use strict';

app.controller('UserSigninController', function($scope, $state, $firebaseAuth, LocalStorageService, UserService, $ionicPopup, md5, _COOKIE_KEY_PRESTA){

	$scope.inputRemember = true;

	$scope.submit = function(){

		var params = {
			username : $scope.inputEmail,
			password : md5.createHash(_COOKIE_KEY_PRESTA+$scope.inputPassword)
		};

		UserService.connect(params).success(function(data){

            if(data.customers){
                var user = data.customers[0];
            } else {
                $ionicPopup.confirm({
                    title: 'Invitation',
                    template: 'Votre mot de passe ou identifiant est erroné'
                });
                $state.go('/');
                return;

            }

            if(user.email){
                UserService.tokenStorage(user, $scope.inputRemember);

                LocalStorageService.save({
                    id 		: user.id,
                    mail	: user.email,
                    role	: 'customer'
                });
            }

			$state.go('/');
		});
	}

    var ref = new Firebase("https://torrid-inferno-5605.firebaseio.com");

    $scope.googleLogin = function() {
        ref.authWithOAuthPopup("google", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        }, {
          remember: "sessionOnly",
          scope: "email"
        });
    }

    $scope.facebookLogin = function() {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        }, {
          remember: "sessionOnly",
          scope: "email,user_likes"
        });
    }

});