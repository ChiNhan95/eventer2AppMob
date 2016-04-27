'use strict';

app.controller('EventAddUserController', function($scope, EventService, UserService, $stateParams, $location){

    var eventId = $stateParams.idEvent;

    /*EventService.get(eventId).success(function(data){

        var desc = data.description;
       $location.path('/');
    });*/

    $scope.events = EventService.get(eventId);

    $scope.users = "";

    $scope.searchUser = function(obj, $event){
        var searchuser = event.target; 
        var Users = UserService.search(searchuser.value);
        $scope.users = Users;

        if($scope.users){
            console.log('On essaye');
            $scope.Users = $scope.users;
        }
    }
});