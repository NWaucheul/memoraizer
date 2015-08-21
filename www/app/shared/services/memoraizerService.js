app.service('Memoraizer',[function(){

	var memoraizer;

	function Memoraizer (){
		this.type = null;
		this.picture = null;
		this.video = null;
		this.audio = null;
		this.name = 'New Memoraizer';
		this.dateOfEvent = '';
		this.time = '';
		this.location = '';
		this.alertType = '';
		this.alertNumber = 0;

	}
	
	this.createMemoraizer = function(){
		console.log('Create new Memoraizer');
		memoraizer = new Memoraizer();
	}

	this.getMemoraizer = function(){
		return memoraizer;
	}

	this.setMemoraizerPicture = function(picture){
		memoraizer.picture = picture;
	}

}]);