'use strict';

app.controller('ProductByCatController', function($scope, $routeParams, ProductService, API_URL){

    var api_url = API_URL;
    var nameCat = $routeParams.nameCategorie;
    var idCat = $routeParams.id;
    var products = [];
    $scope.idVideos = "";

    $scope.api_url = api_url;
    $scope.namecat = nameCat;
    $scope.idcat = idCat;

    $scope.products = ProductService.getByCatId(idCat).success(
        function(data){
            var i = 0;
            var prods = data.products;

            for (var k in prods){
                var videos = prods[k].associations.videos;
                if(videos){
                    var length = prods[k].associations.videos.length;
                    var j = 0;
                    for(var v in videos){

                        var id = videos[v].id;

                        if(j == length -1){
                            $scope.idVideos += id;
                        }
                        else{
                            $scope.idVideos += id + "|";
                        }
                        j++;
                    }
                    prods[k].idVideos = $scope.idVideos;


                } else {

                }
                products[i] = prods[k];
                i++;


            }
            $scope.products = products;
            console.log($scope.products);
        });

});