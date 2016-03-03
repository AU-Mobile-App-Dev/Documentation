var errorCodes = [
     {code: 400, warning: "Bad Request", desc: "The resource you're trying to access does not support your request type. e.g. a GET request on a POST only resource."},
    {code: 401, warning: "Unauthorized", desc:"You do not have access to the resource, this may be due to a banned or no longer active API key"},
    {code: 404, warning: "Resource Not Found", desc: "You may receive this error if trying to access a page that does not exist, most likely due to a syntax error. i.e. lan/aip/users should be lan/api/users"},
    {code: 429, warning:"Too Many Requests", desc: "When accessing our API, each API key has a limit of 150 requests per hour, you will receive this error until your request limit is reset."},
    {code: 500, warning: "Internal Server Error", desc: "Something broke on our end, please contact the team if the problem persists."}
];

var apiCalls = [
    {name:"Username", type: "String", desc: "Only one username, case is ignored.", example: "sDavisJr1" },
    {name: "City and State" , type:"String" , desc:"Full name of the city and the abbreviated name of state" , example:"Saint Charles, IL" },
    {name: "Zip Code" , type: "Number", desc:"Five digit zip code for the city and state." , example:"You request would have 60174, if searching for users in Saint Charles, IL" },
    {name:"Genre Type" , type:"String" , desc:"For some genres with abbreviated versions, you may need to use that instead. E.g. FPS instead of First person shooter." , example:"FPS, RPG, Strategy" }    
];
/**Controllers */
angular.module('docApp', ['ngRoute'])

.controller('errorController', function($scope){
    $scope.errorCodes = errorCodes;
})
.controller('apiController', function($scope){
    $scope.apiCalls = apiCalls;
} )
/**Routes */
.config(function($routeProvider){
    $routeProvider
    .when('/',{
            templateUrl: 'lanDocumentation.html',
            controller: 'errorController'
        })
        .when('/errors',{
            templateUrl: 'errors.html',
            controller: 'errorController'
        })
        .when('/api',{
            templateUrl: 'api.html',
            controller: 'apiController'
        })
})