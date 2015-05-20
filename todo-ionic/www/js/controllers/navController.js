(function (){
    angular
        .module('navController', ['userService'])
        .controller('navController', navController);

    function navController($scope, $ionicPopover) {

        var template = '<ion-popover-view class="popover-about">' +
                            '<ion-content scroll="false" class="popover-content">' +
                                '<ion-item class="button popover-button" href="#/about" ng-click="closePopover();"> About Us' +
                                '</ion-item>' +
                            '</ion-content>' +
                        '</ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });

        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {

        });
    }
}());