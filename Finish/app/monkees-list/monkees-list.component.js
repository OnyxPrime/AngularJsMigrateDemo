angular.
    module('monkeesList').
    component('monkeesList', {
        templateUrl: 'app/monkees-list/monkees-list.template.html',
        controller: ['Monkees',
         function MonkeesListController(Monkees){
             this.monkees = Monkees.query();
         }]
    })