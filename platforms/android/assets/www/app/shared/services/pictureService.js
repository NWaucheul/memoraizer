app.service('Picture', function(){

	this.currentPicture = null;

	this.saveCurrentPicture = function(URI){
		this.currentPicture = URI;
	}

	this.getCurrentPicture = function(){
		return this.currentPicture;
	}

});