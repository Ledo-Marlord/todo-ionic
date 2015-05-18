(function (){
    angular
        .module('registerController', ['userService'])
        .controller('registerController', registerController);

    function registerController($scope) {
        $scope.title = "Register";
    }
}());