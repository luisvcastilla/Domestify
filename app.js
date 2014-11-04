angular.module('App', ['ngRoute','ngAnimate'])
.run(function($rootScope, $location) {	   		
	// console.log('running');
})
.config(function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true).hashPrefix('!');
	$routeProvider		
		.when('/', {
			templateUrl : 'pages/inicio.html',
			controller  : 'mainController'
		})					
		.when('/login', {
			templateUrl : 'pages/login.html',
			controller  : 'loginController'			
		})				
		.when('/signup', {
			templateUrl : 'pages/signup.html',			
			controller  : 'loginController'
			// controller  : 'loginController'
		})			
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'comunicateController'		
		})				
		.when('/info', {
			templateUrl : 'pages/info.html',
			controller  : 'informacionController'
		})				
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'nosotrosController'
		})									
		.otherwise({ redirectTo: "/" });			
})

.controller('mainController', function($scope, $routeParams) {									
	$scope.pageClass = 'inicio';	
})
.controller('loginController', function($scope, $routeParams) {									
	$scope.pageClass = 'inicio';		
})
.controller('comunicateController', function($scope, $routeParams) {									
	$scope.pageClass = 'comunicate';		
})
.controller('informacionController', function($scope, $routeParams) {									
	$scope.pageClass = 'page-all';	
	
})
.controller('nosotrosController', function($scope, $routeParams) {									
	$scope.pageClass = 'nosotros';	
	
})
.controller('userController', function($scope, $routeParams) {									
	$scope.pageClass = 'page-all';	
})