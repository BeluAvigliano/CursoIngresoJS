/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	//importe=txtIdImporte.value;
	//resultado=txtIdResultado.value;
	
	importe=parseInt(txtIdImporte.value);
	//resultado=parseInt(txtIdResultado);

	resultado=importe-[(importe*25)/100];

	document.getElementById('txtIdResultado').value = resultado;


	alert(resultado);
}
