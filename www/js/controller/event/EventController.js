'use strict';

app.controller('eventController', function($scope, API_URL){

// function to submit the form after all validation has occurred
		$scope.submit = function() {

			// check to make sure the form is completely valid
			if ($scope.addEvent.$valid) {
      var now = new Date();
      var stringDate = now.getFullYear() + '-' +
      (now.getMonth().toString().length == 1 ? '0'+ now.getMonth() : now.getMonth() ) + '-' +
      (now.getDay().toString().length == 1 ? '0' + now.getDay() : now.getDay());

       var event = [];
                      event.name = $scope.addEvent.inputName;
                      event.estimatedBudget = $scope.addEvent.inputEstimatedBudget;
                      event.startingDate = $scope.addEvent.inputStartingDate;
                      event.endingDate = $scope.addEvent.inputEndingDate;
                      event.description = $scope.addEvent.inputDescription;
                      event.dateCreated = stringDate;
			}

			}

});
