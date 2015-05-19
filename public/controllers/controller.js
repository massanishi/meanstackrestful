var myApp = angular.module('app', []);
myApp.controller('AppCtrl', function($scope, $http) {
    console.log('Hello World From controller');

    var refresh = function() {
        $http.get('/contactlist').success(function(response) {
            console.log(response);
            $scope.contactlist = response;
            $scope.contact = '';
        });
    }
    refresh()

    $scope.addContact = function() {
        //console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).then(function(result) {
            console.log(result)
            refresh();
        }, function(error) {
            console.log(error);
        })
    }

    //$scope.contactlist = [person1];

})