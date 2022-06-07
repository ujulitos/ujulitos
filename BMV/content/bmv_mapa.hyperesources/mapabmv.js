function loadMap(fileName,arr){
		var file = "./index.xml";
		if (fileName!="") {
			file=fileName;
		}// if fileName!=""

		console.log("load " + file);
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
					var data = " style='color:gray;'";
					if (arr[i]){
						data="onclick='goTo1("+i+")' style='color:white;'";
					} //if 
					content += "<div "+data+"><img src='mapa_bmv-22.png'>&nbsp;&nbsp;"+index[i].getAttribute("name")+"</div>";
			   }//for i personas
			   $("#txtItem_").html(content);
			   $("#txtItem_").css("zIndex", "5000");
			   console.log("txtItem_ " + content);
	        }// success
		}); //ajax index
	}//function loadXML


	function goTo1(num){
		num++;
		if (window.top != window.parent){	
			parent.lock=false;
			parent.current = (num);
			parent.loadSlide();
		} else {
			parent.lock=false;
			window.opener.current = num;
			window.opener.loadSlide();
		}

	}//goTo1