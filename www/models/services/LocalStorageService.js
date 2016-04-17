'use strict'

app.service('LocalStorageService', function($rootScope, $window){

	function save(data){

		if(typeof data === 'object'){
			for(var key in data){
				if(data.hasOwnProperty(key)){
					var value = data[key];
					if(typeof value === 'object'){
						value = JSON.stringify(value);
					}
					$window.localStorage.setItem(key, value);
				}
				
			}
			$rootScope.$broadcast('LocalStorageUpdated');
			return true;
		}
		return false;
	}

	function get(key){
		var output;
		try{
			output = JSON.parse($window.localStorage[key]);
		}catch(err){
			output = $window.localStorage[key];
		}
		return output;

	}

	function isKey(key){
		try{
			if($window.localStorage.getItem(key)){
				return true;
			}

		}catch(err){
			return false;
		}
		return false;		
	}

	function remove(key){

		try{
			$window.localStorage.removeItem(key);
			$rootScope.$broadcast('LocalStorageUpdated');
			return true;
		}catch(err){
			return false;
		}
	}

	function flush(){
		try{
			$window.localStorage.clear();
			$rootScope.$broadcast('LocalStorageUpdated');
			return true;
		}catch(err){
			return false;
		}
	}

	return {
		get 	: get,
		save	: save,
		isKey	: isKey,
		delete	: remove,
		flush	: flush
	}
})