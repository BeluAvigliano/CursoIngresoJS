/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


/*
el atributo 
readonly
hace que solo se pueda ejecutar una vez? xq cuando igreso los datos por 
segunda vez el resultado en NAN
*/

function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=parseInt(txtIdSueldo.value);
	
	resultado=(sueldo*1.1);
	document.getElementById('txtIdResultado').value = resultado;

	alert(resultado);
}
