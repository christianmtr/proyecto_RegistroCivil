'use strict';

app.controller('EmpleadoCtrl', ['$scope','$http',
	function($scope,$http) {
		$scope.Titulo = 'Listado de usuarios general';

		$scope.empleados = [];

		$scope.listarEmpleados =
			function() {
				var result = $http.post('controller-be/EmpleadoCtrl.php',{accion: 'listar'});
				result.success(
					function(data){
						$scope.empleados = [];
						// alert(data);
						$scope.empleados = data;
					}
				)
			}
		$scope.listarEmpleados();
	}
	]);