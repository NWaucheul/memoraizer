app.controller('memoInfoController', ['$scope', 'Memoraizer', function($scope, Memoraizer){


	$scope.memoraizer = Memoraizer.getMemoraizer();

	console.log($scope.memoraizer);

}]);