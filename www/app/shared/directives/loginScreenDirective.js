app.directive('loginScreen', ['Login', '$location', function(Login, $location){

	return{

		restrict: 'E',
		replace: 'true',
		templateUrl: 'app/shared/directives/templates/loginScreenTemplate.html',
		link: function(scope, element, attrs){
			
			scope.init = function(){
				scope.internationalCode = 1;
				scope.phoneNumber = "Phone Number ";
				scope.showCode = 0;
				scope.sendOrLog = "Send";
				scope.firstDigit = " ";
				scope.secondDigit = " ";
				scope.thirdDigit = " ";
				scope.fourthDigit = " ";
				scope.codeError = 0;
			}

			scope.addToPhoneNumberOrCode = function(value){

				var phoneNumber = scope.phoneNumber;
				var numLength = phoneNumber.length;
				if(scope.showCode != 1){
					if(numLength == 12){
						return;
					}
					if(numLength == 13){
						phoneNumber = value;
					}
					else{
						if(numLength == 3 || numLength == 7){
							phoneNumber += '-' + value;
						}
						else{
							phoneNumber += value;
						}
					}
					scope.phoneNumber = phoneNumber;
				}
				else{
					if(scope.firstDigit == " "){
						scope.firstDigit = value;
					}
					else if(scope.secondDigit == " "){
						scope.secondDigit = value;
					}
					else if(scope.thirdDigit == " "){
						scope.thirdDigit = value;
					}
					else if(scope.fourthDigit == " "){
						scope.fourthDigit = value;
					}
				}
				

			}

			scope.removeToPhoneNumberOrCode = function(){

				var phoneNumber = scope.phoneNumber;
				var numLength = phoneNumber.length;
				if(scope.showCode != 1){
					if(numLength == 1){
						scope.init();
					}
					if(numLength == 5 || numLength == 9){
						phoneNumber = phoneNumber.substring(0, numLength - 2);
					}
					else{
						phoneNumber = phoneNumber.substring(0, numLength - 1);
					}
					scope.phoneNumber = phoneNumber;
				}
				else{
					if(scope.fourthDigit != " "){
						scope.fourthDigit = " ";
						scope.codeError = 0;
					}
					else if(scope.thirdDigit != " "){
						scope.thirdDigit = " ";
					}
					else if(scope.secondDigit != " "){
						scope.secondDigit = " ";
					}
					else if(scope.firstDigit != " "){
						scope.firstDigit = " ";
					}
				}


			}

			scope.sendSMSOrLog = function(){
				if(scope.showCode != 1 && scope.phoneNumber.length == 12){
					//Login.sensSMS();
					scope.showCode = 1;
					scope.sendOrLog = "Login"
				}
				else{
					if(scope.showCode == 1 && (scope.firstDigit != scope.secondDigit != scope.thirdDigit != scope.fourthDigit != " ")){
						var response = Login.checkLogin(scope.firstDigit, scope.secondDigit, scope.thirdDigit, scope.fourthDigit);

						if (response) {
							Login.setMemoLogin(1);
							$location.path('/home');
						}
						else{
							scope.codeError = 1;
						}
					}
				}				
			}

			scope.init();

		}
	}

}]);