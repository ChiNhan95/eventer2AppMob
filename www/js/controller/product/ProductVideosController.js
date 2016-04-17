'use strict';

app.controller('ProductVideosController', function($scope, $routeParams, VideoService, API_URL, $sce){

    var api_url = API_URL;
    var nameprod = $routeParams.nameProducts;
    var idVideos = $routeParams.ids;

    $scope.api_url = api_url;
    $scope.nameprod = nameprod;
    //console.log(idVideos);
    $scope.videos = VideoService.getVideos(idVideos).success(
        function(data){
            var videos = data.opartproductvideos;

            $scope.videos = videos;
            console.log($scope.videos);
        });

});
