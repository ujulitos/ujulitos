//	HYPE.documents["bmv_m0_p9"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="bmv_m0_p9.hyperesources",c="bmv_m0_p9",e="bmvm0p9_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/bmvm0p9_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_601","HYPE_dtl_601",!0==(null!=a&&10>a||false==!0)?"HYPE-601.full.min.js":"HYPE-601.thin.min.js"),false==!0&&(a=a||l("HYPE_w_601","HYPE_wdtl_601","HYPE-601.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"lock",source:"function(hypeDocument, element, event) {\t\t\n\tif (parent){\n\t\tparent.setLock(2);\n\t\tvar v = hypeDocument.getElementById(\"video03\");\n\t\tv.addEventListener(\"ended\", function() { \n\t\t\tparent.pushLock(2,\"2\");\n\t\t }, true);\n\t\tv.addEventListener(\"timeupdate\", function (){\n\t\t\tvar t = Math.floor(v.currentTime);\n\t\t\tif ( (t==25) || (t==50) ) {\n\t\t\t\tcont=t/25;\n\t\t\t\tparent.pushLock(cont, cont);\n\t\t\t\tconsole.log(\"video current time: \" + t + \" push \" + cont);\n\t\t\t}// if 10 20 30 40\n\t\t\t\n\t\t});\n\t}// if parent\n\t\n\t\t\n\t\n}",identifier:"7"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_601(c,e,{"0":{n:"TuOpinion.mp4",g:"5",t:"video/mp4"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Escena sin t\u00edtulo",o:"1",X:[0]}],[{o:"3",p:"600px",a:100,Y:1280,Z:720,b:100,cA:false,c:"#3D4D70",L:[],bY:1,d:1280,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:105,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"7"}]},o:"kTimelineDefaultIdentifier"},{y:0,p:1,i:"Video Track",z:105,o:"9",f:"a"}],f:30}},bZ:180,O:["9"],n:"Dise\u00f1o sin t\u00edtulo","_":0,v:{"9":{aR:"0",x:"visible",bS:383,i:"video03",bE:"5",a:0,j:"absolute",z:2,k:"video",aO:"1",d:720,b:0,c:1280,aQ:"0",aH:"1"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
