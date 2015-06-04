(function (){
    angular
        .module('userController', ['userService'])
        .controller('userController', userController);

    function userController($scope) {
        $scope.title = "Login";
    }
}());