
/**Controllers */
angular.module('docApp', ['ngRoute'])

.filter('to_trusted', ['$sce', function($sce){
            return function(text) {
                return $sce.trustAsHtml(text);
            };
}])
        
.controller('errorController', function($scope){
    $scope.errorCodes = errorCodes;
})
.controller('apiController', function($scope){
    $scope.apiCalls = apiCalls;
    $scope.requestDoc = requestDoc;
})
.controller('mainController', function($scope){
    $scope.modalOff = true;
    $scope.showModal = function(index){
        $scope.modalOff = !$scope.modalOff;
        $scope.content = documentation[index].content;
    }
})

/**Routes */
.config(function($routeProvider){
    $routeProvider
    .when('/',{
            templateUrl: 'index.html',
            controller: 'mainController'
        })
        .when('/errors',{
            templateUrl: 'errors.html',
            controller: 'errorController'
        })
        .when('/api',{
            templateUrl: 'api.html',
            controller: 'apiController'
        })
        .when('/construction',{
            templateUrl: 'underConstruction.html',
            controller: 'apiController'
        })
})