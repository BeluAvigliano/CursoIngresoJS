/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*PREGUNTA: Hay alguna forma de escribir el codigo mas chico y de convertir 
las variables en numero enteros de forma global?*/

	var numero1;
	var numero2;
	var resultado;	

	
function sumar()
{
	numero1=parseInt(txtIdNumeroUno.value);
	numero2=parseInt(txtIdNumeroDos.value);

	resultado=numero1+numero2;
	alert("La suma es " + (resultado));	
}

function restar()
{
	numero1=parseInt(txtIdNumeroUno.value);
	numero2=parseInt(txtIdNumeroDos.value);

	resultado=numero1-numero2;
	alert("La resta es " + (resultado));	
	
}

function multiplicar()
{ 
	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);

	resultado = numero1 * numero2;
	alert("La multiplicacion es " + (resultado));	
}

function dividir()
{

	numero1=parseInt(txtIdNumeroUno.value);
	numero2=parseInt(txtIdNumeroDos.value);

	resultado=numero1/numero2;
	alert("La division es " + (resultado));	
	
}

