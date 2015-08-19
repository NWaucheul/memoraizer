app.controller('homeController', ['$scope', '$location', 'Login', function($scope, $location, Login){

	$scope.goToPage = function(pageName){
		$location.path('/'+pageName);
	}
	
	$scope.resetLogin = function(){
		Login.setMemoLogin(0);
		$location.path('/login');
	}

}]);