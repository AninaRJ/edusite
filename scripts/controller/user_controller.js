edusiteApp.controller('UserController', function($scope){
	$scope.user = {username: '', password: ''};
	
	$scope.submitform = function(){
		console.log("submitted form");
	};
	
	$scope.uploadFile = function(){
               var file = $scope.myFile;
               
               console.log('file is ' );
               console.dir(file);
               
               var uploadUrl = "/fileUpload";
               fileUpload.uploadFileToUrl(file, uploadUrl);
            };
});
