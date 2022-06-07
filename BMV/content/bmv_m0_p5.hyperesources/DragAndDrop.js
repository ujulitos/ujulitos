	var spaces = new Array();     /// espacios destino	
	var maxSpaces=0; 
	var boxes = new Array();
	var maxBoxes = 0;
	var corrects = new Array();
	var score =0;
	var percentage =0;
	var borderColor="#8B0065";
	var borderColorOver="#FD34BA";
	var borderWidth = 3;
	var btnCalificar = "btnCalificar";	
	var preBoxes = "box";    // Prefijo para los nombres de las cajas que se arrastran.
	var preSpaces = "space";	   // Prefijo para los nombres de las espacios donde se sueltan.
	function withoutPX(str) {     // se utiliza para quitar los caracteres px de left y top, también lo convierte a entero (decimal).
		var num=0;
		var x = str.slice(0, str.length-2); 
		num = parseInt(x, 10);
		return num;
	}// withoutPX

	function setAnswer(bx, spc){   // establece la respuesta del usuario
		spaces[(spc-1)].option = bx;
	}//setAnswer

	function isAnswerSelect(opt, spc){
		var flag=false; 
		if (spaces[(spc-1)].option==opt) {
			flag=true;
		}//if
		return flag;
	}//isAnswerSelect

	function isEmptyAnswer(spc){
		var flag= true;
		if (spaces[(spc-1)].option!=0) {
			flag=false;
		}//if
		return flag;
	}//isEmptyAnswer

	// objeto space
	// parámetros: element - objeto elemento desde Tumult
 	function space(element){ // objeto del espacio destino
 		var nums = element.id.split("_");   // división del id del elemento
 		this.num = parseInt(nums[1], 10);   // segunda parte del id del elemento, que debe contener el número
 		this.id = element.id;				// nombre real del elemento
		this.x = withoutPX(element.style.left);
		this.y = withoutPX(element.style.top);
		this.width = element.style.width;
		this.height = element.style.height; 
		this.who = "";
		this.whoIsIn = whoIsIn;
 		this.isInCoords = isInCoords; // método para saber si un box se encuentra dentro de las coordenadas del space
  		this.displaySpaceInfo = displaySpaceInfo;
  	} //space object target

  	function whoIsIn(){
  		return this.who;
  	}// whoIsIn

 	function isInCoords(element){
 		var res = false;
 		var id = element.id;
 		tmpX = element.style.left.slice(0, element.style.left.length-2); // get Left without px  -- X position
		pX = parseInt(tmpX, 10);            							 // integer converter
		tmpY = element.style.top.slice(0, element.style.top.length-2); // get Top without pX     -- Y position
		pY = parseInt(tmpY, 10);
		return res;
 	}// isInCoords

 	function displaySpaceInfo(){
 		console.log("space " + this.id + " X: " + this.x + " Y: " + this.y);
 	}// displayBoxInfo

 	function getResults(){							// regresa un arreglo de las respuestas de los espacios
 		var aRes= new Array();
		for (var i=0; i<spaces.length; i++){
 			aRes.push(spaces[i].isCorrect()); // true | false
 		}// for
 		return aRes;
 	}// getResults

 	function getTotalCorrects(){				// regresa el número de respuestas correctas.
 		var total=0;
 		for (var i=0; i<spaces.length; i++){
 			if (spaces[i].isInCoords()) {
 				total++;
 			}// isCorrect
 		}// for
 		return total;
 	}//getTotalCorrects
	
	// objeto box
	// parámetros: element - objeto elemento desde Tumult
	// correct - true si es un elemento correcto para arrastrar al destino (space) - false si NO es un elemento correcto.
 	function box (element, correct){
 	//function box(name, correct, x, y){
 		var nums = element.id.split("_");   // división del id del elemento
 		this.num = parseInt(nums[1], 10);   // segunda parte del id del elemento, que debe contener el número
 		this.id = element.id;				// nombre real del elemento
		this.x = withoutPX(element.style.left); // get Left without px  -- X position;
		this.y = withoutPX(element.style.top); // get Top without pX     -- Y position
 		this.correct=correct;
 		this.displayBoxInfo = displayBoxInfo;
 	}//box

 	function displayBoxInfo(){
 		console.log("box " + this.id + " X: " + this.x + " Y: " + this.y + " correct: " + this.correct);
 	}// displayBoxInfo

////// END OF SCRIPT   ///////