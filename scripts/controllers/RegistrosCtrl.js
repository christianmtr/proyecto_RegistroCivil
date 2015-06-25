'use strict';

app.controller('RegistrosCtrl', ['$scope','$http',
	function($scope,$http) {
		$scope.Titulo = 'Registro de datos';

		$scope.registros = [];

		$scope.listarMatrimonios =
			function() {
				var result = $http.post('controller-be/MatrimoniosCtrl.php',{accion: 'listar'});
				result.success(
					function(data){
						$scope.registros = [];
						// alert(data);
						$scope.registros = data;
					}
				)
			}
		$scope.listarMatrimonios();
	}
	]);