(function() {
    "use strict";

    var module = angular.module('myApp');

    module.component('accordeon', {
        transclude: true,
        template: '<div class="panel-group" ng-transclude></div>',
        controller: function() {
            var vm = this,
                panels = [];

            vm.selectPanel = function(panel) {
                console.log('vm.selectPanel', panel);
                for(var i = 0; i < panels.length; i++) {
                    if(panel === panels[i]) {
                        panel.turnOn();
                    } else {
                        panels[i].turnOff();
                    }
                }
            }

            vm.addPanel = function(panel) {
                panels.push(panel);
                if(panels.length > 0) {
                    panels[0].turnOn();
                }
            }


        }
    });

    module.component('accordeonPanel', {
        bindings: {
            heading: '@' // string not treat value as expression!
        },
        require: {
            // set property parent which is parent accordeon component controller instance
          'parent': '^accordeon'
        },
        controllerAs: 'vm',
        controller: function() {
            var vm = this;

            vm.selected = false;

            vm.turnOn = function() {
                vm.selected = true;
            }

            vm.turnOff = function() {
                vm.selected = false;
            }

            vm.$onInit = function() {
                vm.parent.addPanel(vm);
            }

            vm.select = function() {
                console.log("select");
                vm.parent.selectPanel(vm);
            }
        },
        transclude: true,
        template: '<div class="panel panel-default">' +
                    '<div class="panel-heading" ng-click="vm.select()">'+
                        '<h4 class="panel-title">{{ vm.heading }}</h4>'+
                    '</div>'+
                    '<div class="panel-body" ng-transclude ng-if="vm.selected">' +
                    '</div>' +
                  '</div>'
    });

})();
