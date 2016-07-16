var module = angular.module('myApp', ['ngRoute'])

module.config(function($routeProvider){
	$routeProvider
		.when('/list', { template: '<movie-list></movie-list>' })
		.when('/about', { template: '<movie-about><movie-about>' })
		.otherwise({ redirectTo: '/list' });
	}
);

module.component('movieAbout', {
	template: '<div>Movie about</div>'
});




