<?php
	require_once ('../config-be/ClsConexion.php');

	/**
	* Crea conexion para leer la base de datos
	*/
	class ClsMatrimonio extends ClsConexion
	{
		function Get_Matrimonios() {
			$this->query = "SELECT * FROM Matrimonios";
			$this->execute_query();
			$data = $this->rows;
			return json_encode($data);
		}
	}
?>
