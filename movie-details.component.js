(function() {
    "use strict";

    var module = angular.module('myApp');

    module.component('movieDetails', {
        templateUrl: 'movie-details.component.html',
        controllerAs: 'vm',
        controller: function() {
            var vm = this;

            vm.$routerOnActivate = function(next, prev) {
                vm.id = next.params.id;
            }
        }
    });


})();
