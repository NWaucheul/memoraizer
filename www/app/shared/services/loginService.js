app.service('Login', ['$cookies', '$location', function($cookies, $location){

	/**
	Login states:
		0 = Not Logged
		1 = Logged
		2 = Admin
	**/

	this.setMemoLogin = function(value){
		$cookies.put('memoLogin', value);
	}

	this.getMemoLogin = function(){
		return $cookies.get('memoLogin');
	}

	this.checkLogin = function(first, second, third, fourth){
		var code = first + second + third + fourth;
		if(parseInt(code) == 5555){
			return true;
		}
	}

}]);