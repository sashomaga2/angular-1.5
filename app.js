var module = angular.module('myApp', ['ngComponentRouter'])

/* way to use ngRoute with components */
// module.config(function($routeProvider){
// 	$routeProvider
// 		.when('/list', { template: '<movie-list></movie-list>' })
// 		.when('/about', { template: '<movie-about><movie-about>' })
// 		.otherwise({ redirectTo: '/list' });
// 	}
// );

module.value('$routerRootComponent', 'movieApp');

module.component('movieAbout', {
	template: '<div>Movie about</div>'
});




