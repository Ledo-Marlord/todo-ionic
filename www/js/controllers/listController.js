(function (){
    angular
        .module('listController', ['userService'])
        .controller('listController', listController);

    function listController($scope, $q, $stateParams) {
        var vm = $scope;

        vm.title = $stateParams.listId;

        vm.items = [];

        vm.items = [{title: $stateParams.listId, completed: false}];

        //vm.console = function (message) {
        //    console.log(message);
        //};
        // Commenting Out console log statements to contain probable memory leak

        vm.newItem = function () {
            var randomNumber = chance.integer({min:0, max:9});
            var randomWord = chance.word();
            var randomValue = chance.bool();
            vm.items.push({title: randomNumber + ' ' + randomWord, completed: randomValue});
        };

        vm.clearCompleted = function () {
            var count = 0;                                          // Set the Counter to 0
            var deleted = '';                                       // Set the Deleted List to null

            // Move items to delete to the beginning of the array
            for(var index = 0; index < vm.items.length; index++) {  // For Loop. Loops until index equals vm.lists length
                if (vm.items[index].completed) {                    // If the item in Lists has Completed = True
                    count++;                                            // Add 1 to the counter value
                    deleted = vm.items.splice(index, 1);                // Set the current value of Deleted to the value that must be removed
                    vm.item = deleted.concat(vm.item);                // Concat creates a new array from the vm.lists and adds to the end of Deleted
                }                                                   // Expected Result: [0, 1, 1, 0, 1] -> [ 0, 0, 1, 1, 1]
            }
            $q.all(vm.items).then(function() {                      // Once the For Loop is done.
                vm.items.splice(0, count);                          // vm.lists is spliced from the beginning of the array: [0,0,1,1,1]->[1,1,1]
                vm.$broadcast('scroll.refreshComplete');            // Pull to refresh is returned to disabled
            });
        };
    }
}());