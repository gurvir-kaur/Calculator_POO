

/** setResult(): Actualiza la pantalla de la calculadora 
   poniendo el valor que se pase como parámetro.
*/
function setResult(value) {
    document.getElementById("result").value = value;
}


/*
	getResult(): Recoge el valor del último resultado 
	obtenido, o de la expresión matemática que se debe calcular, 
	y que se está visualizando en la pantalla de la calculadora.
*/
function getResult() {
    return(document.getElementById("result").value);

}


/*
	add(): Añade a la pantalla la tecla pulsada.
*/
function add(key) { 
	
	var result = getResult();
    if (result!='0' || isNaN(key)){
    	setResult(result + key);
    }
    else{
    	setResult(key);
    }
}

function addOperator(key){

	var lastChar = getResult().charAt(getResult().length-1)
	console.log("Last " + lastChar);

	if(lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || 
		lastChar == "."){

		/*
		si el usuario intenta escribir un operando más de una vez 
		esta funcion no hace nada
		*/
	}
	else{
		setResult(getResult() + key);
	}	
}

function addkeyboard(){

	var value = getResult();

    var lastChar = value.charAt(1);
	console.log("Last " + lastChar);

	if(lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || 
		lastChar == "."){

		setResult(value.substring(0, value.length-1));
	}
	else{
		setResult(value);
	}
}


/*
	calc(): Realiza el cálculo de la expresión que se 
	encuentre en la pantalla (utilizando la función eval()), 
	y escribe el resultado.
*/
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}


/*
	del(): Pone a cero el contenido de la pantalla de la calculadora.
*/
function del() { 
    setResult(0);
}


var memoria = null;
/*
	borrar(): Pone a cero el contenido de la memoria de la calculadora.
*/
function borrar(){
	memoria = 0;
}

/*
	almacenar(): guarda el valor en la memoria
*/
function almacenar(){
	memoria = getResult();
	guardar();
}

/*
	recuperar(): muestra el valor gurdado en la memoria.
*/
function recuperar(){
	setResult(memoria);
}

//////////////////  COOKIE /////////////////////


function setCookie(nombre,valor,fecha) {

	document.cookie = nombre+"="+valor+";expires="+fecha;
}

function getCookie(){
	return document.getElementById('result').value = document.cookie;
}

function guardar() {
	tuCookie = "Ultimo valor guardado";
	tuValor = document.getElementById('result').value;
	caduca = "31 Dec 2020 23:59:59 GMT";
	setCookie(tuCookie,tuValor,caduca)	 
}
