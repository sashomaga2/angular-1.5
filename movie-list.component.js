(function() {
	"use strict";
	var module = angular.module('myApp');

	var fetchMovies = function($http) {
		return $http.get('./data.json').then(function(response){
			return response.data;
		})
	};

	var controller = function($http, $scope) {
		var vm = this;

		vm.movies = [];

		console.log('$scope', $scope);

		vm.$onInit = function() {
			console.log('controller init ...');
			fetchMovies($http).then(function(movies){
				vm.movies = movies;
				console.log(movies);
			})
		};

		vm.upRating = function(movie) {
			if(movie.rating < 5) {
				movie.rating += 1;	
			}
		};

		vm.downRating = function(movie) {
			if(movie.rating > 1) {
				movie.rating -= 1;	
			}
		};

		vm.goTo = function(id) {
			console.log('goto', id);
			vm.$router.navigate(['Details', {id:id}, 'Overview']);
		};

        vm.setRating = function(movie, newRating) {
            movie.rating = newRating;
        }


	} ;

	module.component('movieList', {
		templateUrl: 'movie-list.component.html',
		// controller as sintax
		controllerAs: 'vm',
		controller: ['$http', '$scope', controller],
		bindings: {
			// in case of nested routes will give router for comp
			$router: '<'
		}
	});


})();