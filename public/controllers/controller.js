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
    $scope.remove = function(id){
    	console.log(id);
    	$http.delete('/contactlist/' + id).then(function(result){
    		refresh();
    	}, function(error){
    		console.log(error);
    	});
    }

    $scope.edit = function(id){
    	console.log(id);
    	$http.get('/contactlist/' + id).then(function(result){
    		console.log(result);
    		$scope.contact = result.data;	
    	}, function(error){
    		console.log(error);
    	})
    }

    $scope.update = function(){
    	console.log($scope.contact._id);
    	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(result){
    		console.log(result)
    		refresh();
    	}, function(error){
    		console.log(error);
    	});
    }
})