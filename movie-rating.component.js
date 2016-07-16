(function() {
	"use strict";

	var module = angular.module('myApp');

	module.component('movieRating', {
		templateUrl: 'movie-rating.component.html',
		bindings: {
			value: '<'
		},
		transclude: true,
		controller: function() {
			var vm = this;

			// initial
			vm.$onInit = function() {
				vm.entries = new Array(vm.value);
			}

			// on changes
			vm.$onChanges = function() {
				vm.entries = new Array(vm.value);
			}
		}
	});


})();