var app = angular.module('pomodoro', []);

app.controller('clockController', ['$scope', '$interval',
 	function($scope, $interval){
 		$scope.num = 1;
 		$scope.fillHeight = $scope.num + '%';
 		secs = 60 * $scope.num;
 		$scope.addNumber = function () {
 			$scope.num++;
 			$scope.fillHeight = $scope.num + '%';
 		};

 		$scope.delNumber = function () {
 			if($scope.num != 1) {
 				$scope.num--;
 			}
 			$scope.fillHeight = $scope.num + '%';
 		};

 		function secondsToHms(d) {
		    d = Number(d);
		    var h = Math.floor(d / 3600);
		    var m = Math.floor(d % 3600 / 60);
		    var s = Math.floor(d % 3600 % 60);
		    return (
		      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
		    ); 
	  	}

 		$scope.toggleTimer = function () {
 			secs = 60 * $scope.num;
 			$interval(updateTimer, 1000);
 		}

 		updateTimer = function () {
 			secs--;
 			if(secs > 0) {
 				$scope.originalTime = secondsToHms(secs);
 			}
 		}
 	}
 ]);