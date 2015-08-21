app.controller('pictureController',['$scope', '$location', '$cordovaCamera', 'Picture', 'Memoraizer', function($scope, $location, $cordovaCamera, Picture, Memoraizer){

	var saved = false;

	document.addEventListener("deviceready", function () {

		$scope.getPicture = function(from){
			if(Config.picture){

				if(from==="CAMERA"){
					fromParam = Camera.PictureSourceType.CAMERA;
				}
				else{
					fromParam = Camera.PictureSourceType.PHOTOLIBRARY;
				}
				var options = {
					quality: 100,
					destinationType: Camera.DestinationType.DATA_URL,
					sourceType: fromParam,
					allowEdit: false,
					encodingType: Camera.EncodingType.JPEG,
					targetWidth: 300,
					targetHeight: 300,
					popoverOptions: CameraPopoverOptions,
					saveToPhotoAlbum: false
			    };

			    $cordovaCamera.getPicture(options).then(function(imageData) {
			      $scope.picture = document.getElementById('myImage');
			      $scope.picture.src = "data:image/jpeg;base64," + imageData;
			    }, function(err) {
			      // error
			    });
			}
		}

  	}, false);

	$scope.picture = null;

	$scope.savePicture = function(){
  		if(Config.picture){
			Memoraizer.setMemoraizerPicture($scope.picture.src);
		}
		else {
			Memoraizer.setMemoraizerPicture('no Image');
		}
		saved = true;
	}

	$scope.goToPage = function(){
		if(saved){
			$location.path('/memoinfo');
		}
		//error if not saved
	}


}]);