//	HYPE.documents["bmv_m0_p4"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="bmv_m0_p4.hyperesources",c="bmv_m0_p4",e="bmvm0p4_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/bmvm0p4_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_601","HYPE_dtl_601",!0==(null!=a&&10>a||false==!0)?"HYPE-601.full.min.js":"HYPE-601.thin.min.js"),false==!0&&(a=a||l("HYPE_w_601","HYPE_wdtl_601","HYPE-601.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"lock",source:"function(hypeDocument, element, event) {\t\t\n\tif (parent){\n\t\tparent.setLock(6);\n\t\tvar v = hypeDocument.getElementById(\"video01\");\n\t\tv.addEventListener(\"ended\", function() { \t\t\tparent.pushLock(6,\"6\");\n\t\t }, true);\n\t\tv.addEventListener(\"timeupdate\", function (){\n\t\t\tvar t = Math.floor(v.currentTime);\n\t\t\tif ( (t==30) || (t==60) || (t==90) || (t==120) || (t==150)  ) {\n\t\t\t\tcont=t/30;\n\t\t\t\tparent.pushLock(cont, cont);\n\t\t\t\tconsole.log(\"video current time: \" + t + \" push \" + cont);\n\t\t\t}// if 10 20 30 40\n\t\t\t\n\t\t});\n\t\tvar v2 = hypeDocument.getElementById(\"video02\");\n\t\tv2.addEventListener(\"ended\", function() { \t\t\tparent.pushLock(6,\"6\");\n\t\t }, true);\n\t\tv2.addEventListener(\"timeupdate\", function (){\n\t\t\tvar t = Math.floor(v2.currentTime);\n\t\t\tif ( (t==30) || (t==60) || (t==90) || (t==120) || (t==150)  ) {\n\t\t\t\tcont=t/30;\n\t\t\t\tparent.pushLock(cont, cont);\n\t\t\t\tconsole.log(\"video current time: \" + t + \" push \" + cont);\n\t\t\t}// if 10 20 30 40\n\t\t\t\n\t\t});\n\n\t}// if parent\n\t\n\t\n}",identifier:"1182"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_601(c,e,{"3":{p:1,n:"bmv_img-10-1_2x.png",g:"1195",o:true,t:"@2x"},"1":{n:"filosofia_bmv_1.mp4",g:"1128",t:"video/mp4"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"2":{p:1,n:"bmv_img-10-1.png",g:"1195",o:true,t:"@1x"},"0":{p:1,n:"bmv_img-10.png",g:"1132",t:"@1x"}},h,["<style>\n    @font-face {\n        font-family: \"hind-semibold\";\n        src: \n        url(\"fonts/hind-semibold-webfont.eot?#iefix\") format(\"embedded-opentype\"),\n     url(\"fonts/hind-semibold-webfont.woff\") format(\"woff\"),\n     url(\"fonts/hind-semibold-webfont.woff2\") format(\"woff2\"),\n     url(\"fonts/hind-semibold-webfont.ttf\") format(\"truetype\");\n     url(\"fonts/hind-semibold-webfont.svg#hind-semibold\") format(\"svg\");\n     font-weight: normal;\n     font-style: normal;     \n}\n</style>","<style>\n    @font-face {\n        font-family: \"hind-light\";\n        src: \n        url(\"fonts/hind-light-webfont.eot?#iefix\") format(\"embedded-opentype\"),\n     url(\"fonts/hind-light-webfont.woff\") format(\"woff\"),\n     url(\"fonts/hind-light-webfont.woff2\") format(\"woff2\"),\n     url(\"fonts/hind-light-webfont.ttf\") format(\"truetype\");\n     url(\"fonts/hind-light-webfont.svg#hind-light\") format(\"svg\");\n     font-weight: normal;\n     font-style: normal;     \n}\n</style>","<style>\n    @font-face {\n        font-family: \"hind-regular\";\n        src: \n        url(\"fonts/hind-regular-webfont.eot?#iefix\") format(\"embedded-opentype\"),\n     url(\"fonts/hind-regular-webfont.woff\") format(\"woff\"),\n     url(\"fonts/hind-regular-webfont.woff2\") format(\"woff2\"),\n     url(\"fonts/hind-regular-webfont.ttf\") format(\"truetype\");\n     url(\"fonts/hind-regular-webfont.svg#hind-regular\") format(\"svg\");\n     font-weight: normal;\n     font-style: normal;     \n}\n</style>","<style>\n    @font-face {\n        font-family: \"hind-bold\";\n        src: \n        url(\"fonts/hind-bold-webfont.eot?#iefix\") format(\"embedded-opentype\"),\n     url(\"fonts/hind-bold-webfont.woff\") format(\"woff\"),\n     url(\"fonts/hind-bold-webfont.woff2\") format(\"woff2\"),\n     url(\"fonts/hind-bold-webfont.ttf\") format(\"truetype\");\n     url(\"fonts/hind-bold-webfont.svg#hind-bold\") format(\"svg\");\n     font-weight: normal;\n     font-style: normal;     \n}\n</style>"],d,[{n:"1",o:"1",X:[0,1]}],[{o:"1192",p:"600px",a:100,Y:740,Z:320,b:100,cA:false,c:"#FFFFFF",L:[],bY:1,d:740,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:115,b:[],a:[{y:0,p:1,i:"Video Track",z:115,o:"1218",f:"a"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"1182"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["1216","1211","1214","1212","1215","1213","1218","1217"],n:"Personalizado","_":0,v:{"1218":{c:389,bS:383,d:219,I:"Solid",J:"Solid",aO:"1",K:"Solid",L:"Solid",bE:"1128",aH:"1",M:3,i:"video02",N:3,bF:"1216",A:"#50A037",O:3,x:"visible",aR:"0",j:"absolute",k:"video",C:"#50A037",Q:0,z:2,D:"#50A037",R:"rgba(0, 0, 0, 0.254)",B:"#50A037",P:3,S:3,a:314,aQ:"0",T:3,b:64},"1215":{G:"#FFFFFF",aU:8,c:233,d:24,aV:8,r:"inline",e:1,s:"hind-bold",t:24,Y:21,Z:"break-word",w:"Filosof\u00eda corporativa",bF:"1211",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:17,b:14},"1212":{x:"visible",k:"div",c:310,d:60,z:1,e:1,a:0,j:"absolute",bF:"1211",b:5},"1216":{k:"div",x:"visible",c:740,d:320,z:3,a:0,j:"absolute",bS:383,b:0},"1213":{h:"1195",p:"no-repeat",x:"visible",a:35,q:"100% 100%",b:0,j:"absolute",bF:"1212",z:1,k:"div",dB:"img",d:60,c:275,r:"inline"},"1217":{G:"#20436A",aU:8,c:261,d:171,aV:8,r:"inline",s:"hind-regular",t:20,Y:22,Z:"break-word",w:"En Grupo BMV nos interesa que identifiques qui\u00e9nes somos y lo que queremos lograr, es por este motivo que te invitamos a ver el siguiente video, a trav\u00e9s del cual, conocer\u00e1s los pilares que nos sustentan.  \n",bF:"1216",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:21,F:"left",b:87},"1214":{c:800,d:53,I:"None",J:"None",K:"None",g:"#20436A",L:"None",M:0,N:0,bF:"1212",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:-590,b:0},"1211":{k:"div",x:"visible",c:740,d:70,z:1,a:0,j:"absolute",bS:375,b:0}}},{o:"3",p:"600px",a:100,Y:1200,Z:667,b:100,cA:false,c:"#FFFFFF",L:[],bY:1,d:1200,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:115,b:[],a:[{y:0,p:1,i:"Video Track",z:115,o:"1225",f:"a"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"1182"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["1224","1219","1221","1220","1222","1223","1226","1225"],n:"Dise\u00f1o sin t\u00edtulo","_":1,v:{"1225":{c:772,bS:383,d:434,I:"Solid",J:"Solid",aO:"1",K:"Solid",L:"Solid",bE:"1128",aH:"1",M:3,i:"video01",N:3,bF:"1224",A:"#50A037",O:3,x:"visible",aR:"0",j:"absolute",k:"video",C:"#50A037",Q:0,z:2,D:"#50A037",R:"rgba(0, 0, 0, 0.254)",B:"#50A037",P:3,S:3,a:211,aQ:"0",T:3,b:200},"1222":{h:"1132",p:"no-repeat",x:"visible",a:59,q:"100% 100%",b:0,j:"absolute",bF:"1220",z:1,k:"div",dB:"img",d:92,c:421,r:"inline"},"1219":{k:"div",x:"visible",c:1200,d:110,z:1,a:0,j:"absolute",bS:375,b:0},"1226":{G:"#20436A",aU:8,c:1084,d:44,aV:8,r:"inline",s:"hind-regular",t:16,Y:22,Z:"break-word",w:"En Grupo BMV nos interesa que identifiques qui\u00e9nes somos y lo que queremos lograr, es por este motivo que te invitamos a ver el siguiente video, a trav\u00e9s del cual, conocer\u00e1s los pilares que nos sustentan.  \n",bF:"1224",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:50,F:"justify",b:120},"1223":{G:"#FFFFFF",aU:8,c:332,d:54,aV:8,r:"inline",e:1,s:"hind-bold",t:36,Y:54,Z:"break-word",w:"Filosof\u00eda corporativa",bF:"1219",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:37,b:20},"1220":{x:"visible",k:"div",c:480,d:92,z:1,e:1,a:0,j:"absolute",bF:"1219",b:10},"1224":{k:"div",x:"visible",c:1200,d:667,z:2,a:0,j:"absolute",bS:383,b:0},"1221":{c:1140,d:82,I:"None",J:"None",K:"None",g:"#20436A",L:"None",M:0,N:0,bF:"1220",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:-798,b:0}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
