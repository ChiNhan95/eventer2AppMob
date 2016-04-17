'use strict';

app.controller('UserProfilController', function($scope, LocalStorageService, UserService){

	$scope.profil = UserService.get('current').success(function(data){
		$scope.id 				= data.id;
		$scope.inputFirstname	= data.first_name;
		$scope.inputLastname	= data.last_name;
		$scope.inputEmail		= data.mail;
	});

	$scope.submit = function(){
		if($scope.form.$valid){
			
			var params = {
				first_name 			: $scope.inputFirstname,
				last_name			: $scope.inputLastname,
				mail				: $scope.inputEmail,
				password 			: $scope.form.password.$modelValue,
				confirm_password	: $scope.form.passwordconf.$modelValue,
				current_password	: $scope.inputCurrentPassword

			}

			UserService.update($scope.id, params).success(function(data){
				LocalStorageService.save({
					mail	: data.mail
				});
			});
		}
		//$scope.inputCurrentPassword = '';
		$scope.submitted = false;
	}

});