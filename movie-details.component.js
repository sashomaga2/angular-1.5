(function() {
    "use strict";

    var module = angular.module('myApp');

    module.component('movieDetails', {
        templateUrl: 'movie-details.component.html',
        $routeConfig: [
            { path: '/overview', component: 'detailsOverview', name: 'Overview' },
            { path: '/cast', component: 'detailsCast', name: 'Cast' },
            { path: '/director', component: 'detailsDirector', name: 'Director' }
        ],
        controllerAs: 'vm',
        controller: function() {
            var vm = this;

            console.log('vm', vm);

            vm.$routerOnActivate = function(next, prev) {
                console.log('inside');
                vm.id = next.params.id;
            }
        }
    });


})();
