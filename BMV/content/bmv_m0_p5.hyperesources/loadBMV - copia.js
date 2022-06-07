	// var personas = new Array(); // arreglo de las personas
	function loadXML(fileName) {
	    //console.log("ready to go...");
	    var file;
	    if (fileName != "") {
	        file = fileName;
	    } // if fileName!=""
	    personas = new Array(); // arreglo de las personas
	    $.ajax({
	        type: "GET",
	        url: file,
	        dataType: "xml",
	        success: function(xml) {
	            var xmlDoc = $.parseXML(xml);
	            var $xml = $(xmlDoc);
	            var index = xml.getElementsByTagName("personas");
	            var p = xml.getElementsByTagName("persona");
	            for (var i = 0; i < p.length; i++) {
	                personas.push(new persona(p[i].getAttribute("id"), p[i].getAttribute("puesto"), p[i].getAttribute("nombre"), p[i].getAttribute("foto")));
	            } //for i personas
	            // console.log('personas', personas);
	        }, // success
	        error: function(request, status, error) {
	            // alert('noooooooooooo!');
	        }
	    }); //ajax index
	} //function loadXML
	loadXML("data/organigrama.xml");

	function loadPage(scene_id) {
	    console.log("loadPage " + scene_id);

	    for (var i = 0; i < getMax(); i++) {

	        var laPosition = $(".foto_" + personas[i].id).position();
	        // console.log('laPosition', laPosition);
	        // var elTop = laPosition.top;
	        // console.log('elTop', elTop);
	        // var elLeft = laPosition.left;
	        // console.log('elLeft', elLeft);
	        var elAlto = $(".foto_" + personas[i].id).height();
	        // console.log('elAlto', elAlto);
	        var elAncho = $(".foto_" + personas[i].id).width();
	        // console.log('elAncho', elAncho);
	        // $(".foto_" + personas[i].id).innerHTML("");
	        $(".fotof_" + personas[i].id).hide();
	        $(".foto_" + personas[i].id).html($("<div class='fotof_" + personas[i].id + "'></div>"));
	        $(".fotof_" + personas[i].id).css({
	            "background-image": " url(images/" + personas[i].foto + ")"
	        });
	        // $(".foto_" + personas[i].id).css({
	        //     "z-index": i
	        // });
	        $(".fotof_" + personas[i].id).css({
	            "position": "absolute",
	            "top": "10px",
	            "left": "10px",
	            "width": (elAncho - 20) + "px",
	            "height": (elAlto - 20) + "px",
	            "border-radius": " 50px",
	            "background-size": "100% 100%"
	            // "z-index": (i - 1)
	        });

	        $(".nombre_" + personas[i].id).html(personas[i].nombre);
	        $(".puesto_" + personas[i].id).html(personas[i].puesto);
	        //$('selector').css({'background-image':'url(images/example.jpg)'});
	        console.log(personas[i].id, personas[i].foto);
	    } // for i
	} // loadPage

	function getMax() {
	    return personas.length;
	} // getMax

	function getPersonas() {
	    return personas;
	} //get Personas - todas las personas

	function getPersona(i) {
	    if (i < getMax()) {
	        return personas[i];
	    } //
	    return null;
	} // getPersona - solo la persona del índice i

	function trim(str) {
	    return str.replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/['"]+/g, '').replace(/<[^>]*>/g, '').replace(/&/g, '');
	} //jc trim
	//================= Objects questions and answers ===================

	function persona(id, puesto, nombre, foto) {
	    this.id = id;
	    this.puesto = puesto.replace(/\[/g, "<").replace(/\]/g, ">"); // Puesto de la persona
	    this.nombre = nombre.replace(/\[/g, "<").replace(/\]/g, ">"); // Nombre de la persona
	    this.foto = foto;
	    this.getData = getData;
	} //persona

	function getData() {
	    return "id: " + this.id + "\nnombre: " + this.nombre + "\npuesto:" + this.puesto + "\nfoto:" + this.foto;
	} //getData
