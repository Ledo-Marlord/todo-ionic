(function (){
    angular
        .module('aboutController', ['userService'])
        .controller('aboutController', aboutController);

    function aboutController($scope) {
        $scope.title = "About Us";
    }
}());