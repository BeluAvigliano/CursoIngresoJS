/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro o creo la variable
	var nombreIngresado;
	
	//Asigno o cargo esa variable
	nombreIngresado = prompt("Introduzca su nombre");
	
	//Muestro el valor de la variable
	/*
	alert('Su nombre es');
	alert(nombreIngresado);
	*/

	//Concatenar
	alert('su nombre es '+nombreIngresado);
	
}

