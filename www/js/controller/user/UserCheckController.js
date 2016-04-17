app.controller('UserCheckController', function($scope, LocalStorageService){


    $scope.userCheck = 'partials/user/userCheck.html';
    $scope.status = {
        isopen: false
    };

    function check(){
        $scope.connected    = LocalStorageService.isKey('access');
        $scope.email        = LocalStorageService.get('mail');
    }

    $scope.$on('$locationChangeSuccess', check);
    $scope.$on('LocalStorageUpdated', check);



});