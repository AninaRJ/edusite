edusiteApp.controller('UserController', function($scope){
	$scope.user = {username: '', password: ''};
	
	$scope.submitform = function(){
		console.log("submitted form");
	};
});
