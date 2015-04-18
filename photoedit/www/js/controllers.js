angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.goToTakePhoto = function() {
    $location.path('/app/edit_take');

  }

  $scope.goSelectPhoto = function() {
    $location.path('/app/edit_select');
  }

  $scope.goEditPhoto = function() {
    $location.path('/app/edit_photo');
  }

  $scope.settings = {
    enableFriends: true
  };
})

.controller('PhotoEditCtrl', function($scope){
	$scope.brightnessValue = 0;
	$scope.noiseValue = 0;
	$scope.pixelate = 0;
	$scope.enableBrightness = false;
	$scope.disableBrightness = false;
	
	angular.element(document).ready(function () {
		var canvas = new fabric.Canvas('c');
		var f = fabric.Image.filters;
		var grayFilter = new fabric.Image.filters.Grayscale()
		var invertFilter = new fabric.Image.filters.Invert()
		var sepiaFilter = new fabric.Image.filters.Sepia()
		var brightFilter = new fabric.Image.filters.Brightness({brightness: $scope.brightnessValue})
		var noiseFilter = new fabric.Image.filters.Noise({noise: $scope.noiseValue})
		var pixelateFilter = new fabric.Image.filters.Pixelate({blocksize: $scope.pixelateValue})
		
		var img = "../tiger.jpg"
		fabric.Image.fromURL(img, function(outImg) {
			canvas.add(outImg);
			canvas.centerObject(outImg);
			canvas.item(0).lockMovementY = true;
			canvas.item(0).lockMovementX = true;
			canvas.item(0).lockScalingX = true;
			canvas.item(0).lockScalingY = true;
			canvas.item(0).lockRotation = true;
			canvas.item(0).hasControls = false;
			canvas.item(0).hasBorders = false;
			canvas.renderAll();
			canvas.setActiveObject(outImg);
		});
		
		$scope.isBright = function (){
			var obj = canvas.getActiveObject();
			obj.filters.push(brightFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.notBright = function (){
			var obj = canvas.getActiveObject();
			fabric.util.removeFromArray(obj.filters, brightFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.isGray = function (){
			var obj = canvas.getActiveObject();
			obj.filters.push(grayFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.notGray = function (){
			var obj = canvas.getActiveObject();
			fabric.util.removeFromArray(obj.filters, grayFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.isInvert = function (){
			var obj = canvas.getActiveObject();
			obj.filters.push(invertFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.notInvert = function (){
			var obj = canvas.getActiveObject();
			fabric.util.removeFromArray(obj.filters, invertFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.isSepia = function (){
			var obj = canvas.getActiveObject();
			obj.filters.push(sepiaFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.notSepia = function (){
			var obj = canvas.getActiveObject();
			fabric.util.removeFromArray(obj.filters, sepiaFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.isNoise = function (){
			var obj = canvas.getActiveObject();
			obj.filters.push(noiseFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.notNoise = function (){
			var obj = canvas.getActiveObject();
			fabric.util.removeFromArray(obj.filters, noiseFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.isPixelate = function (){
			var obj = canvas.getActiveObject();
			obj.filters.push(pixelateFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		$scope.notPixelate = function (){
			var obj = canvas.getActiveObject();
			fabric.util.removeFromArray(obj.filters, pixelateFilter);
			obj.applyFilters(canvas.renderAll.bind(canvas));
		};
		
		/*$scope.changeBright = function(){
			console.log($scope.enableBrightness)
			$scope.enableBrightness = !$scope.enableBrightness;
			console.log($scope.enableBrightness)
		};*/
	})
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
