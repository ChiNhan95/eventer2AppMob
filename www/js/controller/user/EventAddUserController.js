'use strict';

app.controller('EventAddUserController', function($scope, EventService, UserService, $stateParams, $state, $ionicPopup, $timeout){

    var eventId = $stateParams.idEvent;

    /*EventService.get(eventId).success(function(data){

        var desc = data.description;
       $location.path('/');
    });*/

    $scope.events = EventService.get(eventId);

    $scope.users = "";

    // Search User
    $scope.searchUser = function(obj, $event){
        var searchuser = event.target;
        if(searchuser.value.length < 2){
            $scope.Users = "";
            return false;
        } 
        var Users = UserService.search(searchuser.value);
        $scope.users = Users;

        if($scope.users){
            console.log('On essaye');
            $scope.Users = $scope.users;
        }
        $timeout(function() {
            $scope.Users = "";
        }, 5000);
    }

    // Confirm Function
    $scope.showConfirm = function(name) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Invitation',
            template: 'Êtes vous sur de vouloir inviter '+name+' ?'
        });

       confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
       });
    };

    /**
    * Send Invitation tp User
    * Obj User
    * return true/false
    */
    $scope.sendInvitation = function(user){
        var name = user.firstName;
        $scope.showConfirm(name);
        return console.log('send invitation');
    }

});