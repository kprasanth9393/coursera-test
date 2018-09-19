(function(){
'use strict';

  angular.module('myFirstApp',[])

  .controller('MyFirstController',function($scope){
    $scope.name="Krishna"
    $scope.sayHello = function(){
      return "Hello Coursera!";
    }

  });

})();
