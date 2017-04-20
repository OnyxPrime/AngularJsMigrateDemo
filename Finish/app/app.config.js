angular.module('monkeesApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    $routeProvider.
    when('/monkees', {
        template: '<monkees-list></monkees-list>'
        //template: 'Hello World'
    }).
    otherwise('/monkees');
}
]);
