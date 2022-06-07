function loadXML(fileName){
		var file = "./index.xml";
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
				var index = xml.getElementsByTagName("topic");
				var content = "";
				for ( var i = 0; i <index.length; i++ ) {
					content += "<div>"+index[i].getAttribute("name")+"</div>";
			   }//for i personas
			   $("#content")html(content);
	        }// success
		}); //ajax index
	}//function loadXML