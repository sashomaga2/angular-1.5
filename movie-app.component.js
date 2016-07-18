
(function() {
    "use strict";

    var module = angular.module('myApp');

    module.component('movieApp', {
        templateUrl: 'movie-app.component.html',

        $routeConfig: [
            { path: '/list', component:'movieList', name: 'List' },
            { path: '/about', component:'movieAbout', name: 'About' },
            { path: '/details/:id', component:'movieDetails', name: 'Details' },
            { path: '/**', redirectTo: ['List'] }
        ]
    });


})();