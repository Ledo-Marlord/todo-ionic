(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', homeController);

    function homeController($scope, $q) {
        var vm = $scope;

        vm.title = "2 Due";

        vm.lists = [];

        vm.lists = [{title: '1 hello', completed: true},
                    {title: '2 buy eggs', completed: false},
                    {title: '3 do something', completed: false},
                    {title: '4 show a list', completed: false},
                    {title: '5 drive a car', completed: false},
                    {title: '6 buy a boat', completed: false},
                    {title: '7 say Hello to the World', completed: false},
                    {title: '8 stuff', completed: false},
                    {title: '9 do a thing', completed: false},
                    {title: '10 fklsdfkkdsj', completed: false}];

        vm.console = function (message) {
            console.log(message);
        };

        vm.newList = function () {
            var randomNumber = chance.integer({min:0, max:9});
            var randomWord = chance.word();
            var randomValue = chance.bool();
            vm.lists.push({title: randomNumber + ' ' + randomWord, completed: randomValue});
        };

        vm.clearCompleted = function () {
            var count = 0;
            var deleted = '';

            for(var index = 0; index < vm.lists.length; index++) {
                if (vm.lists[index].completed) {
                    count++;
                    deleted = vm.lists.splice(index, 1);
                    vm.lists = deleted.concat(vm.lists);
                }
            }
            $q.all(vm.lists).then(function() {
                vm.lists.splice(0, count);
                vm.$broadcast('scroll.refreshComplete');
            });
        };
    }
}());