(function () {
    'use strict';

    angular
        .module('eventsDetailState', [
            'ui.router',
            'ngAnimate'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('events_detail', {
                    cache: false,
                    url: '/events_detail',
                    //this is the view on the data held by the controller
                    templateUrl: 'js/states/event-detail/events.detail.html',
                    //parameters which the controller is ready to recive
                    params: { 'selected': 0 },
                    //this holds the data for the view
                    controller: 'eventsDetailCtrl as vm'
                })
            $urlRouterProvider.otherwise('/events_list');
        });
})();
