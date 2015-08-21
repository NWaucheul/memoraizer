app.controller('loginController',['$scope', '$location', 'Login', function($scope, $location, Login){
	$scope.showLoginScreen = 0;
	$scope.memoLogin = Login.getMemoLogin();

	if($scope.memoLogin == undefined){
		Login.setMemoLogin(0);
	}
	if($scope.memoLogin == 1){
		$location.path('/home');
	}


}]);