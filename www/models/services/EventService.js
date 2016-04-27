'use strict'

app.service('EventService', function($http, API_URL){


 var events = [{
    id : 1,
    name :  'Marseille',
    budgetEstimated : 300,
    budgetReal:  0.00,
    dateStart : '2016-04-26 10:00:00',
    dateEnd : '2016-04-28 10:00:00',
    description : "Week-end a Marseille",
    isActive : 1,
    close : 0,
    dateCreated : '2016-04-26 10:00:00',
    lastModificationDate :'0000-00-00 00:00:00'
  },
  {
    id : 2,
    name :  'Nantes',
    budgetEstimated : 150,
    budgetReal:  0.00,
    dateStart : '2016-04-26 10:00:00',
    dateEnd : '2016-04-28 10:00:00',
    description : "Week-end a Nantes Airport",
    isActive : 1,
    close : 0,
    dateCreated : '2016-04-26 10:00:00',
    lastModificationDate :'0000-00-00 00:00:00'
  },
  {
    id : 3,
    name :  'New York',
    budgetEstimated : 1000,
    budgetReal:  0.00,
    dateStart : '2016-04-26 10:00:00',
    dateEnd : '2016-05-15 10:00:00',
    description : "Voyage a New-York",
    isActive : 1,
    close : 0,
    dateCreated : '2016-04-26 10:00:00',
    lastModificationDate :'0000-00-00 00:00:00'
  },
  {
    id : 4,
    name :  'Port-au-Prince',
    budgetEstimated : 2000,
    budgetReal:  0.00,
    dateStart : '2016-04-26 10:00:00',
    dateEnd : '2016-05-26 10:00:00',
    description : "Vivance au Pays, Lakalle",
    isActive : 1,
    close : 0,
    dateCreated : '2016-04-26 10:00:00',
    lastModificationDate :'0000-00-00 00:00:00'
  }];	

	/**
	 * Get product by ID
	 * @param Int id
	 * @return HttpPromise
	 */
	function get(id){
		/*return $http({
			method : 'GET',
			url    : API_URL + '/categories/?display=full&output_format=JSON',
			cache  : false
		});*/
	   return events[id];
    }

	return ({
		get    : get,
		allEv : function(){
      		return events;
    	}
	});
});