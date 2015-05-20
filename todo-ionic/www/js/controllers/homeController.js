(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', homeController);

    function homeController($scope, $q) {
        var vm = $scope;

        vm.title = "2 Due";

        vm.lists = [];

        vm.lists = [{title: '1 hello', completed: true}];

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