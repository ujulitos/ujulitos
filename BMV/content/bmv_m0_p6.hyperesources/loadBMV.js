	var personas = new Array(); // arreglo de las personas
	function loadXML(fileName){
		//console.log("ready to go...");
		var file = "./organigrama.xml";
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
				  	personas.push(new persona(p[i].getAttribute("id"), p[i].getAttribute("puesto"), p[i].getAttribute("nombre"), p[i].getAttribute("foto")));
				   }//for i personas
	        }// success
		}); //ajax index
	}//function loadXML
	function loadPage(scene_id){
		console.log("loadPage " + scene_id);
		for (var i=0; i<getMax(); i++) {
			$("#nombre"+scene_id+"_"+personas[i].id).html(personas[i].nombre);
			$("#puesto"+scene_id+"_"+personas[i].id).html(personas[i].puesto);
			//$("#foto"+scene_id+"_"+personas[i].id).attr("src", "./images/"+personas[i].foto);
			$("#foto"+scene_id+"_"+personas[i].id).css({"background-image":" url(images/"+ personas[i].foto+")"});
			$("#foto"+scene_id+"_"+personas[i].id).css({"border-radius":" 50px"});
			$("#snombre"+scene_id+"_"+personas[i].id).html(personas[i].nombre);
			$("#spuesto"+scene_id+"_"+personas[i].id).html(personas[i].puesto);
	//$('selector').css({'background-image':'url(images/example.jpg)'});
			console.log("#foto"+scene_id+"_"+personas[i].id);
			console.log("./images/"+personas[i].foto);
		}// for i
	}// loadPage

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

	function persona(id, puesto, nombre, foto) {
		this.id = id;
		this.puesto = puesto.replace(/\[/g,"<").replace(/\]/g,">");		// Puesto de la persona
		this.nombre = nombre.replace(/\[/g,"<").replace(/\]/g,">");		// Nombre de la persona
		this.foto = foto;
		this.getData=getData;
	}//persona

	function getData() {
		return "id: " + this.id + "\nnombre: " + this.nombre + "\npuesto:" + this.puesto + "\nfoto:" + this.foto;
	}//getData

	

