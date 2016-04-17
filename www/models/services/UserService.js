'use strict'

app.service('UserService', function($http, API_URL, LocalStorageService){


	/**
	 * Connect User
	 * @param Object data Object JSON
	 * Object key : username : mail user
	 * 			 	password : password user
	 *
	 * @return HttpPromise
	 */
	function connect(params){

		return $http({
			method 	: 'GET',
			url 	: API_URL + '/customers/?display=[id,email,secure_key]&filter[email]=['+params.username+']&filter[passwd]=['+params.password+']&output_format=JSON',
			cache	: false
		});

	}


	function disconnect(){
		LocalStorageService.flush();
	}

	function tokenStorage(data, remember){

		LocalStorageService.save({
			access  	: data.secure_key,
			remember	: remember
		});

		if(remember === true || LocalStorageService.get('remember') === true){
			LocalStorageService.save({
				'refresh' 		: data.refresh_token,
				'refesh-time'	: Math.round(Date.now()/1000) + data.expires_in
			});
		}
	}

	function tokenRefresh(data, remember){

	}

	/**
	 * Get User
	 * @param Int/String number id/ 'current'
	 *
	 * @return HttpPromise
	 */
	function get(id){
		return $http({
			method	: 'GET',
			url 	: API_URL + '/customers/?display=[email,firstname,lastname]&filter[id]=[' + id + ']&output_format=JSON',
			cache	: false
		})
	}

    /**
     * Get User
     * @param Int/String number id/ 'current'
     *
     * @return HttpPromise
     */
    function getUser(id, userType){
        return $http({
            method	: 'GET',
            url 	: API_URL + '/'+userType+'/?display=full&filter[id]=[' + id + ']&output_format=JSON',
            cache	: false
        });
    }

    /**
     * Get XML Customer
     *
     * @return HttpPromise
     */
    function getUserXML(){
        return $http({
            method	: 'GET',
            url 	: API_URL + '/customers/?schema=synopsis',
            cache	: false
        });
    }

	function create(data){

        return $http({
            method	: 'POST',
            url 	: API_URL + '/customers/?output_format=JSON',
            data 	: data,
            cache	: false
        });

	}

	function update(id, data){
		return $http({
			method	: 'PATCH',
			url 	: API_URL + '/users/' + id,
			data	: data,
			cache	: false
		});
	}

	function remove(id){

	}

	return ({
		connect 	 : connect,
		disconnect   : disconnect,
		tokenStorage : tokenStorage,
		tokenRefresh : tokenRefresh,
		get     	: get,
        getUserXML     	: getUserXML,
        getUser     	: getUser,
		create  	: create,
		update  	: update,
		delete  	: remove
	});
});

