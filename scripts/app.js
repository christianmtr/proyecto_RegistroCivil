'use strict';

var app = angular.module("RegistroCivil_App",[
	'ngRoute'
]);

app.config(function($routeProvider)
	{
		$routeProvider
			.when('/',
			{
				redirectTo: '/login'
			})
			.when('/reg_nacimiento',
			{
				templateUrl: 'views/reg_nacimiento.html'
				,controller: 'RegistrosCtrl'
			})
			.when('/reg_matrimonio',
			{
				templateUrl: 'views/reg_matrimonio.html'
				,controller: 'RegistrosCtrl'
			})
			.when('/reg_defuncion',
			{
				templateUrl: 'views/reg_defuncion.html'
				,controller: 'RegistrosCtrl'
			})
			.when('/busca_nacimiento',
			{
				templateUrl: 'views/busca_nacimiento.html'
				,controller: 'BuscarCtrl'
			})
			.when('/busca_matrimonio',
			{
				templateUrl: 'views/busca_matrimonio.html'
				,controller: 'BuscarCtrl'
			})
			.when('/busca_defuncion',
			{
				templateUrl: 'views/busca_defuncion.html'
				,controller: 'BuscarCtrl'
			})
			.when('/login',
			{
				templateUrl: 'views/login.html'
				,controller: ''
			})
			.otherwise(
			{
				redirectTo: '/'
			});	
	});