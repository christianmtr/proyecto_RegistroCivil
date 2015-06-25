<?php
	require_once ('../models-be/ClsMatrimonio.php');

	$objEmpleados = new ClsMatrimonio();

	/**
	* Esta variable va a recibir las indicaciones para
	*  realizar ciertas acciones.
	**/

	$objDatos = json_decode(file_get_contents('php://input'));
	$cAccion = $objDatos->accion;

	if ($cAccion == 'listar') {
		// echo "Mirando lo q dice Angular: ".$cAccion;
		$Result = $objEmpleados->Get_Matrimonios();
		echo ($Result);
	}
?>