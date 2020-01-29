(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('eventsDetailCtrl', control);

    control.$inject = [
        '$state',
        '$stateParams',
        'eventsSrvc'
        ];
    
    function control(
        $state,
        $stateParams,
        eventsSrvc
    ) {
        var vm = angular.extend(this, {
            event : {
                name: "no name",
                date: new Date(),
                postcode : "no location"
            }
         });
        
        //this is called from the HTML on ng-click. It is changing the state back to events_list
        vm.done = function(){
            $state.go('events_list');
        }

        var params = $stateParams;
        //this is two way data binding which updates in the HTML page
        vm.event = eventsSrvc.getEventAt(params.selected);

        

    }
})();
