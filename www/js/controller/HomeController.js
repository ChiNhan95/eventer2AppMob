'use strict';

app.controller('HomeController', function($scope, LocalStorageService){

/*    $scope.categories = CategoryService.get().success(
        function(data){
            var categories = [];
            var i = 0;

            var cats = data.categories
            for (var k in cats){

                var assoc =  cats[k].associations;
                for (var key in assoc){
                    if(key == 'products'){
                        categories[i] = cats[k];
                        i++;
                    }
                }
            }
            //console.log(categories);
            $scope.categories = categories;
        }
    );*/
});