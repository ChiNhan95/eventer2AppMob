'use strict'

app.service('CategoryService', function($http, API_URL){

	/**
	 * Get product by ID
	 * @param Int id
	 * @return HttpPromise
	 */
	function get(){
		return $http({
			method : 'GET',
			url    : API_URL + '/categories/?display=full&output_format=JSON',
			cache  : false
		});
	}

	return ({
		get    : get
	});
});