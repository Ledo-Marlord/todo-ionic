(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', homeController);

    function homeController($scope) {
        $scope.title = "2 Due";
    }
}());