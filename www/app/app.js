/*document.addEventListener("deviceready", function () {
	angular.bootstrap(document, ['app']);
}, true);*/

var app = angular.module("app", ['SafeApply', 'ngCordova', 'ngCookies', 'ngRoute' ,'ngAnimate']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'app/components/login/login.html',
			controller: 'loginController'
		})
		.when('/home', {
			templateUrl: 'app/components/home/home.html',
			controller: 'homeController'
		})
		.when('/picture', {
			templateUrl: 'app/components/picture/picture.html',
			controller: 'pictureController'
		})
		.when('/memoinfo', {
			templateUrl: 'app/components/memoInfo/memoInfo.html',
			controller: 'memoInfoController'
		})
		.otherwise({redirectTo: '/login'});
});