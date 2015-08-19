app.controller('pictureController', function($scope, $location, $cordovaCamera, Picture){

	document.addEventListener("deviceready", function () {

		$scope.getPicture = function(from){
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
		      var image = document.getElementById('myImage');
		      image.src = "data:image/jpeg;base64," + imageData;
		    }, function(err) {
		      // error
		    });
		}

		$scope.savePicture = function(){
			// Fucntion that saves screenshot
		}

  	}, false);


});