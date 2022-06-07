	var personas = new Array(); // arreglo de las personas
	function loadXML(fileName){
		//console.log("ready to go...");
		var file = "./data/directorio.xml";
		if (fileName!="") {
			file=fileName;
		}// if fileName!=""
		personas = new Array(); // arreglo de las personas
			$.ajax({
	       type: "GET" ,
	       url: file ,
	       dataType: "xml" ,
	       success: function(xml) {
				var xmlDoc = $.parseXML( xml ); 
				var $xml = $(xmlDoc);
				var index = xml.getElementsByTagName("personas");
				var p = xml.getElementsByTagName("persona");
				for ( var i = 0; i <p.length; i++ ) {
				  	personas.push(new persona(p[i].getAttribute("id"), p[i].getAttribute("area"), p[i].getAttribute("nombre"), p[i].getAttribute("phone")));
				  	console.log(personas[personas.length-1].getData());
				   }//for i personas
				   console.log(personas.length);

				console.log("assign...");
				var parray = getPersonas();
				
				for (var i=0; i<getMax(); i++){
					var n = "nombre_"+parray[i].id;
					if (document.getElementById(n)){
						document.getElementById(n).innerHTML=parray[i].nombre;
						document.getElementById("area_"+parray[i].id).innerHTML=parray[i].area;
						document.getElementById("numero_"+parray[i].id).innerHTML=parray[i].phone;
					}//if 
				
				
				}// for i
				
				console.log("getMax() " + getMax());
	        }// success
		}); //ajax index
	}//function loadXML

	function getMax() {
		return personas.length;
	}// getMax

	function getPersonas(){
		return personas;
	}//get Personas - todas las personas
	
	function getPersona(i) {
		if (i<getMax()){
			return personas[i];
		}//
		return null; 
	}// getPersona - solo la persona del índice i
	
	function trim(str) {
          return str.replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/['"]+/g, '').replace(/<[^>]*>/g, '').replace(/&/g, '');
    } //jc trim
	//================= Objects questions and answers ===================

	function persona(id, area, nombre, phone) {
		this.id = id;
		this.area = (area!=undefined)?area.replace(/\[/g,"<").replace(/\]/g,">"):"";
		this.nombre =(nombre!=undefined)?nombre.replace(/\[/g,"<").replace(/\]/g,">"):"";	
		this.phone = (phone!=undefined)?phone.replace(/\[/g,"<").replace(/\]/g,">"):"";
		this.getData=getData;
	}//persona

	function getData() {
		return "id: " + this.id + "\nnombre: " + this.nombre + "\narea:" + this.area + "\nphone:" + this.phone;
	}//getData

	

