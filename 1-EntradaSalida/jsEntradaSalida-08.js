/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/


function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;
	
	//numero1=txtIdNumeroDividendo.value;
	//numero2=txtIdNumeroDivisor.value;

	dividendo=parseInt(txtIdNumeroDividendo.value);
	divisor=parseInt(txtIdNumeroDivisor.value);

	resultado=dividendo%divisor;
	alert("El resto es "+ (resultado));
}
