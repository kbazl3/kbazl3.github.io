console.log('Hey there! Thanks for looking into my site, and checking out my console messages.');


var app = angular.module('app', ['ngRoute','angular-carousel']).config(function($routeProvider)	{

	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
	});
	$routeProvider.when('/projects', {
		templateUrl: 'views/projects.html',
	});
	$routeProvider.when('/contact', {
		templateUrl: 'views/contact.html',
	});
	$routeProvider.when('/about', {
		templateUrl: 'views/about.html',
	});
	$routeProvider.otherwise({ redirectTo : '/' });

});

// controlls the menu
function MenuController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
		console.log('a nav item is now active');
	};
}

function gaController($scope, $location, $window) {
  $scope.$on('$viewContentLoaded', function(event) {
    $window.ga.push(['_trackPageview', $location.path()]);
  });
}
