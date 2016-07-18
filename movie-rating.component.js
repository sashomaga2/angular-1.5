(function() {
	"use strict";

	var module = angular.module('myApp');

    var buildEntries = function(value, max) {
        var entries = [];

        for(var i=0; i < max; i++) {
            entries.push(i < value ? 'glyphicon-star' : 'glyphicon-star-empty');
        }

        return entries;
    }

	module.component('movieRating', {
		templateUrl: 'movie-rating.component.html',
		bindings: {
			value: '<', // '=' for 2way bind, @ for string & for callback
			max: '<',
            setRating: '&'
		},
		//transclude: true,
		controller: function() {
			var vm = this;

			// initial
			vm.$onInit = function() {
				vm.entries = buildEntries(vm.value, vm.max);
			}

			// on changes
			vm.$onChanges = function() {
				vm.entries = buildEntries(vm.value, vm.max);
			}
		}
	});


})();