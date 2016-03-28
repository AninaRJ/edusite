'use strict';

var edusiteApp = angular.module("edusiteApp", ["ngMaterial"]).config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	  .primaryPalette('green')
	  .accentPalette('light-blue')
	  .backgroundPalette('brown');
	});