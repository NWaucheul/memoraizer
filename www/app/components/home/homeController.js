app.controller('homeController', ['$scope', '$location', 'Login', 'Memoraizer', function($scope, $location, Login, Memoraizer){

	$scope.goToPage = function(type){
		Memoraizer.createMemoraizer();
		$location.path('/'+type);
	}
	
	$scope.resetLogin = function(){
		Login.setMemoLogin(0);
		$location.path('/login');
	}

}]);