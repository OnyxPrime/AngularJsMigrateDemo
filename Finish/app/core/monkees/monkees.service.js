angular.
    module('core.monkees').
    factory('Monkees', ['$resource',
        function($resource){
            return $resource('app/monkees/monkees.json', {}, {
                query: {
                    method: 'GET',
                    //params: {monkeesId: 'monkees'},
                    isArray: true
                }
            });
        }
    ]);