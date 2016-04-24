'use strict'

app.service('UserService', function($http, API_URL, LocalStorageService){


	var Users = [{
		id : 1,
	    firstName: 'ev',
	    lastName : 'enter',
	    userName : 'eventerUser',
	    email : 'eventeruse@eventer.com',
	    password : 'eventer',
	    isActive : 1,
	    dateCreated : '2016-04-26 10:00:00',
	    lastModificationDate : '0000-00-00 00:00:00'
	},
	{
		id : 2,
	    firstName: 'ev',
	    lastName : 'enter',
	    userName : 'eventerAdmin',
	    email : 'eventeradm@eventer.com',
	    password : 'eventer',
	    isActive : 1,
	    dateCreated : '2016-04-26 10:00:00',
	    lastModificationDate : '0000-00-00 00:00:00'
	},
	{
		id : 3,
	    firstName: 'ev',
	    lastName : 'enter',
	    userName : 'eventerDev',
	    email : 'eventerdev@eventer.com',
	    password : 'eventer',
	    isActive : 1,
	    dateCreated : '2016-04-26 10:00:00',
	    lastModificationDate : '0000-00-00 00:00:00'
	}];


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
			url 	: API_URL + '/',
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
			url 	: API_URL + '/api/users',
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

    /*
    *
    *s
    */
	function create(data){

        return $http({
            method	: 'POST',
            url 	: API_URL + '/api/users',
            data 	: data,
            cache	: false
        });

	}

	function update(data){
		return $http({
			method	: 'PUT',
			url 	: API_URL + '/api/users',
			data	: data,
			cache	: false
		});
	}

	// desactivate
	function remove(id){

	}

	// desactivate
	function addUserToEvent(id){

	}

	// desactivate
	function deleteUserToEvent(id){

	}

	return ({
		connect 	 : connect,
		disconnect   : disconnect,
		tokenStorage : tokenStorage,
		tokenRefresh : tokenRefresh,
		get     	: get,
        getUser     	: getUser,
		create  	: create,
		addUserToEvent  	: addUserToEvent,
		deleteUserToEvent  	: deleteUserToEvent,
		update  	: update,
		delete  	: remove
	});
});

