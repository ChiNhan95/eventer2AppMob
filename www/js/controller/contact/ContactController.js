'use strict';

app.controller('ContactController', function($scope, ContactService){

    $scope.products = ProductService.get(idProd).success(
        function(data){
            var prods = data.products;

            $scope.products = prods;
            console.log($scope.products);
        }
    );

    $scope.research = function() {
        alert('on est la');
        $('#result').empty();
        $scope.hideshow = $scope.hideshow;
    };

    $scope.send = function() {
        if( $scope.sexe == 'Féminin' || $scope.sexe == 'Masculin'
            && parseInt($scope.sizeM) >= 0 && parseInt($scope.sizeM) <= 2
            && parseInt($scope.sizeCM) >= 0 && parseInt($scope.sizeCM) <= 9
            && parseInt($scope.weight) > 0 && parseInt($scope.weight) > 200
            && parseInt($scope.old) >= 0 && parseInt($scope.old) < 120){

            var size = $scope.sizeM+'.'+$scope.sizeCM;
            parseFloat(size);

            $scope.posology = PosologyService.getQueryPosology($scope.idprod,$scope.sexe, size, $scope.weight, $scope.old).success(
                function(data){
                    var posology = data.posologies;

                    if(posology){
                        var name =  posology[0].name[0];
                        var description =  posology[0].description[0];
                        $('#result').append('<div><h4>'+ name.value +'</h4></div>');
                        $('#result').append('<span>Sexe: <strong>'+ posology[0].sexe +' </strong></span><br>');
                        $('#result').append('<span>Age minimum: <strong>'+ posology[0].old_min+'</strong> Age maximum: <strong>'+posology[0].old_max +'</strong></span><br>');
                        $('#result').append('<span>Dosage: <strong class="green">'+ (parseFloat(posology[0].dosage) * parseInt($scope.weight)) +'</strong> Formule = dosage('+posology[0].dosage+') * poids('+$scope.weight+')</span><br>');
                        $('#result').append('<span>Description <strong>'+ description.value +'</strong></span><br>');

                        $('#result').append('<br><a href="#/posologie/product/'+$scope.name+'/'+$scope.idprod+'"><button type="button">Revenir à la recherche</button></a>');

                    } else {
                        $('#result').append('<div><h4>Aucune Posology pour ce produit</h4></div>');
                        $('#result').append('<br><a href="#/posologie/product/'+$scope.name+'/'+$scope.idprod+'"><button type="button">Revenir à la recherche</button></a>');

                    }

                });

            $scope.hideshow = !$scope.hideshow;

        } else {
            console.log($scope.idprod,$scope.sexe, $scope.sizeM, $scope.sizeCM, $scope.weight, $scope.old);
            alert('Veuillez remplir tous les champs correctement');
        }

    };


});