var app = angular.module('topChef', []);

app.filter('filter', function () {
    return function (text) {
        return text; // whatever
    };
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'templates/list.html', controller: ListCtrl}).
        when('/resource/:id', {templateUrl: 'templates/unique.html', controller: DetailCtrl })
}]);

app.directive('directive', function () {
    return function (scope, element, attr) {
        // whatever
    }
});

function ListCtrl($scope, $http) {
	
};

function DetailCtrl($scope, $routeParams, $http) {
    $http.get('/resource/' + $routeParams.id).success(function (data) {
        $scope.resource = data;
    });
};


