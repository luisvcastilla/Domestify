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
			controller  : 'contactController'		
		})				
		.when('/info', {
			templateUrl : 'pages/info.html',
			controller  : 'infoController'
		})				
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})									
		.otherwise({ redirectTo: "/" });			
})

.controller('mainController', function($scope, $routeParams) {									
	$scope.pageClass = 'inicio';	
})
.controller('loginController', function($scope, $routeParams) {									
	$scope.pageClass = 'inicio';		
})
.controller('contactController', function($scope, $routeParams) {									
	$scope.pageClass = 'contact';		
})
.controller('infoController', function($scope, $routeParams) {									
	$scope.pageClass = 'info';	
	
})
.controller('aboutController', function($scope, $routeParams) {									
	$scope.pageClass = 'about';	
	
})
.controller('userController', function($scope, $routeParams) {									
	$scope.pageClass = 'page-all';	
})