(function() {
	"use strict";

	console.log('run !');

	var module = angular.module('myApp');

	var fetchMovies = function($http) {
		return $http.get('./data.json').then(function(response){
			return response.data;
		})
	}

	var controller = function($http) {
		var vm = this;

		vm.movies = [];
		
		vm.$onInit = function() {
			console.log('controller init ...');
			fetchMovies($http).then(function(movies){
				vm.movies = movies;
				console.log(movies);
			})
		}

		vm.upRating = function(movie) {
			if(movie.rating < 5) {
				movie.rating += 1;	
			}
		}

		vm.downRating = function(movie) {
			if(movie.rating > 1) {
				movie.rating -= 1;	
			}
		}

		vm.goTo = function(id) {
			console.log('goto', id);
			vm.$router.navigate(['Details', {id:id}]);
		}
	} 

	module.component('movieList', {
		templateUrl: 'movie-list.component.html',
		// controller as sintax
		controllerAs: 'vm',
		controller: ['$http', controller],
		bindings: {
			// in case of nested routes will give router for comp
			$router: '<'
		}
	});


})();