app.controller('InscriptionCtrl', function($scope,$location, UserService) {

		// function to submit the form after all validation has occurred
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('Votre inscription est terminé');

                var now = new Date();
                var stringDate = now.getFullYear() + '-' +
                    (now.getMonth().toString().length == 1 ? '0'+ now.getMonth() : now.getMonth() ) + '-' +
                    (now.getDay().toString().length == 1 ? '0' + now.getDay() : now.getDay());

                var user = [];
                user.firstname = $scope.user.firstname;
                user.lastname = $scope.user.lastname;
                user.passwd = $scope.user.password;
                user.email = $scope.user.email;
                user.dob = $scope.user.dob;
                user.newsletter = $scope.user.newsletter;
                user.partner = $scope.user.partner;
                user.newsletter_date_add = ($scope.user.newsletter) ? stringDate : '';

                var xml = UserService.getUserXML().success(
                    function(data){
                        //console.log(data);
                        var xmlDoc = loadXMLString(data);

                        UserService.create(data).success(
                            function(data){
                                console.log(data);
                            }
                        );

                        var racine = xmlDoc.getElementsByTagName('customer')[0];

                        for(var i = 0; i < racine.childNodes.length; i++){
                            var name = racine.childNodes[i].nodeName;

                            if(user[name]){
                                var x = xmlDoc.getElementsByTagName('customer')[0].childNodes[i].nodeValue;
                                x = user[name];
                                xmlDoc.getElementsByTagName('customer')[0].childNodes[i].nodeValue =  x;
                                console.log(xmlDoc);
                            }

                        }

                        //console.log(x);

                    }
                );



				//$location.path('/');

			}

		};

	});

