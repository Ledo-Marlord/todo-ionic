(function () {
    angular
        .module('appKickoff', [])
        .run(run)
        .config(config);

    function run($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }

            ionic.Platform.isFullScreen = true;

            document.addEventListener('focusout', function(e) {window.scrollTo(0, 0)});
        });
    }

    function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.

        $stateProvider

            // setup an abstract state for the tabs directive
            .state('index', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })

            .state('list', {
                url: '/list/:listId',
                templateUrl: 'templates/list.html',
                controller: 'listController'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'aboutController'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'userController'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

        $ionicConfigProvider.backButton.previousTitleText(false).text('');
    }
}());