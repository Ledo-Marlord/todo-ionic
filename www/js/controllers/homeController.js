(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', homeController);

    function homeController($scope, $q, $state) {
        var vm = $scope;

        vm.title = "2 Due Lists";

        vm.lists = [];

        vm.lists = [{title: '1 hello', completed: true, editable: false}];

        vm.listCanSwipe = true;
        vm.shouldShowDelete = false;
        vm.shouldShowReorder = false;

        //vm.console = function (message) {
        //    console.log(message);
        //};

        vm.onDoubleClick = function (listTitle) {
            //console.log('Opening ', listTitle);
            $state.go('list', {listId: listTitle});
        };

        vm.newList = function () {
            var randomNumber = chance.integer({min:0, max:9});
            var randomWord = chance.word();
            var randomBool = chance.bool();
            vm.lists.push({title: randomNumber + ' ' + randomWord, completed: randomBool, editable: false});
        };

        vm.clearCompleted = function () {
            var count = 0;                                          // Set the Counter to 0
            var deleted = '';                                       // Set the Deleted List to null

            // Move items to delete to the beginning of the array
            for(var index = 0; index < vm.lists.length; index++) {  // For Loop. Loops until index equals vm.lists length
                if (vm.lists[index].completed) {                    // If the item in Lists has Completed = True
                    count++;                                            // Add 1 to the counter value
                    deleted = vm.lists.splice(index, 1);                // Set the current value of Deleted to the value that must be removed
                    vm.lists = deleted.concat(vm.lists);                // Concat creates a new array from the vm.lists and adds to the end of Deleted
                }                                                   // Expected Result: [0, 1, 1, 0, 1] -> [ 0, 0, 1, 1, 1]
            }
            $q.all(vm.lists).then(function() {                      // Once the For Loop is done.
                vm.lists.splice(0, count);                          // vm.lists is spliced from the beginning of the array: [0,0,1,1,1]->[1,1,1]
                vm.$broadcast('scroll.refreshComplete');            // Pull to refresh is returned to disabled
            });
        };
    }
}());