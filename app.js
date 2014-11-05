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
		.when('/user', {
			templateUrl : 'pages/user.html',
			controller  : 'userController'
		})			
		.when('/services', {
			templateUrl : 'pages/service.html',
			controller  : 'serviceController'
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
.controller('serviceController', function($scope, $routeParams) {									
	$scope.services = [
		{name:'Professional cleaning services',
			price:'100',
			photo:'http://end-of-lease.cleaning/wp-content/uploads/2012/06/Superior-End-of-Lease-Cleaning-Canberra.jpg',
			availability:'2 hours'
		},
		{name:'Homeyfi',
			price:'150',
			photo:'http://www.everydaytaskcompany.com/wp-content/uploads/2013/02/bigstock-Successful-Cleaning-People-Tea-10726325.jpg',
			availability:'5 hours'
		},
		{name:'Clean fast, clean now',
			price:'230',
			photo:'http://www.bloomingtonrenter.com/wp-content/uploads/2013/07/Cleaning.jpg',
			availability:'2 days'
		},
		{name:'Monterrey cleaning services',
			price:'300',
			photo:'http://www.bloomingtonrenter.com/wp-content/uploads/2013/07/Cleaning.jpg',
			availability:'2 days'
		},
		{name:'Clean fast, clean now',
			price:'320',
			photo:'http://www.bloomingtonrenter.com/wp-content/uploads/2013/07/Cleaning.jpg',
			availability:'2 days'
		}
	]	
	$scope.pageClass = 'info';	
	
})
.controller('aboutController', function($scope, $routeParams) {									
	$scope.pageClass = 'about';	
})
.controller('userController', function($scope, $routeParams) {									
	$scope.pageClass = 'page-all';	
	$scope.user = {
		name: 'Luis',
		last_name: 'Villarreal Castilla',
		photo: 'https://scontent-b-dfw.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/579205_10152321571793478_270382078_n.jpg?oh=d171f72678b8c35576fb0def31da6462&oe=54DFA768',

	}
})