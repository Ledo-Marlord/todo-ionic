(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', homeController);

    function homeController($scope, $q) {
        var vm = $scope;

        vm.title = "2 Due";

        vm.lists = [];

        vm.lists = [{title: 'hello', completed: false},
                    {title: 'buy eggs', completed: false},
                    {title: 'do something', completed: false},
                    {title: 'show a list', completed: false},
                    {title: 'drive a car', completed: false},
                    {title: 'buy a boat', completed: false},
                    {title: 'say Hello to the World', completed: false},
                    {title: 'stuff', completed: false},
                    {title: 'do a thing', completed: true},
                    {title: 'fklsdfkkdsj', completed: true}];

        vm.console = function (message) {
            console.log(message);
        };

        vm.newList = function (title, complete) {
            vm.lists.push({title: title, completed: complete});
        };

        vm.clearCompleted = function () {
            vm.lists.forEach(function(item, index, list){
                if (item.completed) {
                    list.splice(index, 1);
                    console.log(index);
                    console.log(list);
                }
            });
            $q.all(vm.lists).then(function() {
                console.log(vm.lists);
                vm.$broadcast('scroll.refreshComplete');
            });
        };
    }
}());