'use strict';

app.controller('UserSigninController', function($scope, $location, LocalStorageService, UserService, md5, _COOKIE_KEY_PRESTA){

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
                alert('Votre mot de passe ou identifiant est erroné');
                $location.path('/');
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

			$location.path('/');
		});
	}
});