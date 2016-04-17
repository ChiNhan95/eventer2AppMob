'use strict'

app.service('ProductService', function($http, API_URL){

    /**
     *
     * @param Int id
     * @param String fields
     * @returns HttpPromise
     */
	function get(id){

            return $http({
                method : 'GET',
                url    : API_URL + '/products/?display=full&filter[id]=[' + id + ']&output_format=JSON',
                cache  : false
            });


	}


    /**
     * Get product by Categorie ID
     * @param Int id
     * @return HttpPromise
     */
    function getByCatId(id){
        return $http({
            method : 'GET',
            url    : API_URL + '/products/?display=full&filter[id_category_default]=[' + id + ']&output_format=JSON',
            cache  : false
        });
    }

	/**
	 * Select multiple Products
	 * @param Object data Object JSON
	 * object key : all propertise
	 * @return HttpPromise
	 */
	function getAll(data){
		return $http({
			method : 'GET',
			url    : API_URL + '/products/?display=full&output_format=JSON',
			params : data,
			cache  : false
		})
	}

	return ({
		get    : get,
        getByCatId    : getByCatId,
		getAll : getAll
	});
});