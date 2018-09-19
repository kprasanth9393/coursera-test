(function (){
	'use strict';

	angular.module('MsgApp',[])
	.controller('MsgController',MsgController);

	MsgController.$inject = ['$scope'];

	function MsgController($scope){
		$scope.name = "Krishna";
		$scope.stateOfBeing = "hungry";

		$scope.sayMessage = function() {
			return "Yaakov likes to eat healthy snacks at nigh!";
		}

		$scope.feedYaakov = function(){
			$scope.stateOfBeing = "fed";
		}
	}
})();