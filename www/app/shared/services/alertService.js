app.service('Alert', [function(){

	function Alert (type) {
		this.type = type;
		this.dateFirstAlert = 0;
		this.dateSecondAlert = 0;
		this.thirdAlert = 0;
		this.recuringRepetition = 0;
		this.recuringTime = 0;

	}


}]);