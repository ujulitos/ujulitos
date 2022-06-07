/* Copyright uJL 2019. */
$(document).ready(function () {

    /* Configuración global para las ventanas modales */
    $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        padding: 0,
        width: '682',
        height: '512',
    });
    /* Inicializa el Curso */
    initCourse();
    fatality();

    ran = generarId();
    location.hash = "?" + ran;

});


function generarId() {
    var caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var longitud = 4;
    code = '';
    for (x = 0; x < longitud; x++) {
        rand = Math.floor(Math.random() * caracteres.length);
        code += caracteres.substr(rand, 1);
    }
    var tiempo = moment().format('YYMMDDHHmmss');
    var idNuevo = (tiempo) + code;
    console.log(idNuevo);

    return idNuevo;
};

function nuevaAlta() {
    var nuevaAlta = moment().format('YY/MM/DD');
    return nuevaAlta;
};


/* Variables de entorno */
var currentPage = 0;
var lastPage = 0;
var curseStatus = "";
var curseCompleted = false;
var scaleTemplate = 1;
var orientation = "";
var sumaryActive = false;
var pageFinished = -1;
var soundVolume = 100;
var audioPausado = false;
var bloqueoGral = false;
var bloqueoRegreso = false;
var nextActivo = false;
var intentoActividad1 = 0;
var paginasTotales;
var pagVisitadas;
var elSuspendData;
var losIntentos;
var losIntentosNum;
// var lasCalificaciones = new Array();


if (!navegationBlock) {
    pageFinished = course.pages.length - 1;
    pageFinished = parseInt(pageFinished);
}

function agrandaBoton(cualBoton) {
    TweenMax.to(cualBoton, .2, {
        scale: 1.2,
        yoyo: true,
        repeat: 0
    });
}

function achicaBoton(cualBoton) {
    TweenMax.to(cualBoton, .2, {
        scale: 1,
        yoyo: true,
        repeat: 0
    });
}


function initCourse() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/Opera Mini/i) ||
        navigator.userAgent.match(/IEMobile/i)
    ) {
        mobileCurse = true;
    }
    if (mobileCurse) {
        //alert("Es movil");
        $('html').addClass("mobile");
    } else {
        //alert("No es movil");
        $('html').addClass("desktop");
    }
    //$("#btnNext").hide();
    $(".btnNav").mouseover(function () {
        if ($(this).hasClass('btnNavOver')) {
            if (!bloqueoGral && !bloqueoRegreso) {
                agrandaBoton($(this));
            }
        }
    });
    $(".btnNav").mouseout(function () {
        achicaBoton($(this));
    });

    $("#btnNext").css({
        'cursor': 'default',
        'opacity': '0.4'
    });
    $("#btnNext").click(function () {
        achicaBoton($(this));
        if (!bloqueoGral && !bloqueoRegreso && nextActivo) {
            nextPage();
            if (!mobileCurse && navegationBlock) {
                //$("#btnNext").hide();
                // $("#btnNext").css({
                //     'cursor': 'default',
                //     'opacity': '0.4'
                // });
            }
        }
    });

    $("#btnPrev").css('cursor', 'pointer');
    $("#btnPrev").click(function () {
        if (!bloqueoGral && !bloqueoRegreso) {
            prevPage();
        }
    });

    $("#btnPrev, #btnNext").mouseover(function () {
        if ($(this).hasClass('btnNavOver')) {
            if (!bloqueoGral && !bloqueoRegreso) {
                $(this).css({
                    'filter': 'brightness(0.35) sepia(1) saturate(10000%)'
                })
            }
        }
    });
    $("#btnPrev, #btnNext").mouseout(function () {
        $(this).css({
            'filter': 'brightness(0) sepia(0) saturate(0%)'
        })
    });

    $("#btnHome").css('cursor', 'pointer');
    $("#btnHome").click(function () {
        if (!bloqueoGral && !bloqueoRegreso) {
            goHome();
        }
    });
    $("#btnReload").css('cursor', 'pointer');
    $("#btnReload").click(function () {
        if (!bloqueoGral) {
            reLoad();
        }
    });
    $("#btnPausa").css('cursor', 'pointer');
    $("#btnPausa").click(function () {
        if (!bloqueoGral) {
            switchPausa();
        }
    });
    $("#btnExit").css('cursor', 'pointer');
    $("#btnExit").click(function () {
        if (!bloqueoGral) {
            window.close();
        }
    });
    $("#btnTemario").css('cursor', 'pointer');
    $("#btnTemario").click(function () {
        if (!bloqueoGral && !bloqueoRegreso) {
            // openTemario();
            abreMapa();
        }
    });
    $("#btnCerrarTemario").css('cursor', 'pointer');
    $("#btnCerrarTemario").click(function () {
        if (!bloqueoGral && !bloqueoRegreso) {
            openTemario();
        }
    });
    $("#btnAudio").css('cursor', 'pointer');
    $("#btnAudio").click(function () {
        if (!bloqueoGral) {
            switchVolume();
        }
    });
    $("#btnSubts").css('cursor', 'pointer');
    $("#btnSubts").click(function () {
        if (!bloqueoGral) {
            switchSubts();
        }
    });
    if (haySubtitulos) {
        $('#btnSubts_off').hide();
        $('#btnSubts_on').show();
    } else {
        $('#btnSubts_on').hide();
        $('#btnSubts_off').show();
    }
    $("#btnHelp").css('cursor', 'pointer');
    $("#btnHelp").click(function () {
        if (!bloqueoGral && !bloqueoRegreso) {
            // goPage(1);
            abreAyuda();
        }
    });

    $("#btnPrint").css('cursor', 'pointer');
    $("#btnPrint").click(function () {
        window.open("pdf/pdf" + (currentPage + 1) + ".pdf", "_blank");
    });

    $("#modalBloq_boton").click(function () {
        $("#modalBloq").fadeOut();
    });

    load_activar_audio();
    $("#items").mCustomScrollbar();

}

function switchVolume() {
    if (soundVolume == 100) {
        soundVolume = 0;
        $('#btnAudio_on').hide();
        $('#btnAudio_off').show();
    } else {
        soundVolume = 100;
        $('#btnAudio_off').hide();
        $('#btnAudio_on').show();
    }
    changeVolumen(soundVolume);
}
// switchVolume();

function switchSubts() {
    if (haySubtitulos) {
        $('#btnSubts_on').hide();
        $('#btnSubts_off').show();
        haySubtitulos = false;
    } else {
        $('#btnSubts_off').hide();
        $('#btnSubts_on').show();
        haySubtitulos = true;
    }
    document.getElementById("com").contentWindow.cambiaSubtitulos(haySubtitulos);
    console.log('subtitulos', haySubtitulos);
}

function switchPausa() {
    if (audioPausado == false) {
        audioPausado = true;
        $('#btnPausa_on').hide();
        $('#btnPausa_off').show();
        pausaAudio();
    } else {
        audioPausado = false;
        $('#btnPausa_off').hide();
        $('#btnPausa_on').show();
        despausaAudio();
    }
}

function openTemario() {
    if (sumaryActive) {
        TweenMax.to($('#temario'), .4, {
            css: {
                left: "-45.5%"
            },
            ease: Cubic.easeOut
        });
        sumaryActive = false;
        // $('#btnCerrarTemario').html('<i class="fa fa-angle-double-right"></i>');
        $('#btnCerrarTemario').css("display", "none");
    } else {
        TweenMax.to($('#temario'), .5, {
            css: {
                left: "-5%"
            },
            ease: Back.easeOut
        });
        //TweenMax.to($('#temario'),.8,{css:{left:"0%"},ease:Back.easeOut});
        sumaryActive = true;
        $('#btnCerrarTemario').css("display", "block");
        $('#btnCerrarTemario').html('<i class="fa fa-angle-double-left"></i>');
    }
}

function abreMapa() {
    console.log('abreMapa');
    $("#mapa").fadeIn();
    bloqueaNavegacion();

    console.log('pagVisitadas', pagVisitadas);
    console.log('paginasTotales', paginasTotales);

    if (conection) {
        if (navegationBlock) {
            for (a = 1; a <= pagVisitadas; a++) {
                $('#map').contents().find('#boton_' + a + '_bloq').hide();
                $('#map').contents().find('#boton_' + (a - 1)).show();
            }
        }
    }
}

function cierraMapa() {
    console.log('cierraMapa');
    $("#mapa").fadeOut();
    desbloqueaNavegacion();
}

function abreAyuda() {
    console.log('abreAyuda');
    // $("#ayuda").empty();
    $("#ayuda").html('<iframe name="ayu" id="ayu" src="' + contentPath + recursos.pages[1].url + '" frameborder="0" scrolling="no" border="0"></iframe>');
    setScale();
    $("#ayuda").show();
    // $("#ayuda").css({
    //     'display': 'block',
    //     'opacity': '1'
    // });
    bloqueaNavegacion();
}

function cierraAyuda() {
    console.log('cierraAyuda');
    $("#ayuda").hide();

    // $("#ayuda").hide();
    // $("#ayu").css({
    //     'display': 'none',
    //     'opacity': '0'
    // });
    desbloqueaNavegacion();
}

function setScale() {
    var sourceHeigth = 738;
    var sourceWidth = 1200;
    var posTopPantalla = 41;
    var posBottomPantalla = 58;
    var altoPantalla = 654;

    var contentHeigth = $(window).height();
    var contentWidth = $(window).width();
    var _scaleX = contentWidth / sourceWidth;
    var _scaleY = contentHeigth / sourceHeigth;
    var proportion = contentWidth / contentHeigth
    if (proportion >= 1) {
        $('html').addClass('posH');
        $("#bloqueo").hide();
    } else {
        $('html').addClass('posV');
        if (mobileCurse) {
            $("#bloqueo").show();
        }
    }
    if (_scaleX <= _scaleY) {
        scaleTemplate = _scaleX;
    } else {
        scaleTemplate = _scaleY;
    }
    if (scaleTemplate >= 1) {
        scaleTemplate = 1;
    }




    if (pantallaCompleta) {

        $("#top").css({
            'height': posTopPantalla
        });

        $("#bottom").css({
            'top': (contentHeigth - posBottomPantalla),
            'height': posBottomPantalla
        });

        $("#com").css({
            'margin-top': posTopPantalla,
            'height': (contentHeigth - posTopPantalla - posBottomPantalla),
            'width': '100%'
        });

        $("#mapa").css({
            'top': posTopPantalla
        });
        $("#map").css({
            'top': posTopPantalla,
            'height': (contentHeigth - posTopPantalla - posBottomPantalla),
            'width': '100%'
        });

        $("#ayuda").css({
            'top': posTopPantalla
        });
        $("#ayu").css({
            'top': posTopPantalla,
            'height': (contentHeigth - posTopPantalla - posBottomPantalla),
            'width': '100%'
        });

        $('#box').height(contentHeigth);
        $('#box').width(contentWidth);
        $('#box').css("top", "0px");
        $('#box').css("left", "0px");

        $('.boton_temario').css({
            "top": -(contentHeigth - 45) + "px"
        })

        $('.texto_temario').css({
            "top": -(contentHeigth - 50) + "px"
        })

        $('.texto_titulo').css({
            "top": -(contentHeigth - 50) + "px"
        })

        $('.boton_ayuda').css({
            "top": -(contentHeigth - 46) + "px"
        })

        $('.texto_ayuda').css({
            "top": -(contentHeigth - 50) + "px"
        })

        // $('#menuBar').css("-ms-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
        // $('#menuBar').css("-webkit-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
        // $('#menuBar').css("transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");

        // $('#menuBar').css("-ms-transform-origin", "0 100%");
        // $('#menuBar').css("-webkit-transform-origin", "0 100%");
        // $('#menuBar').css("transform-origin", "0 100%");

        // $('#progressBar').css("-ms-transform", "scale(" + 1 + "," + scaleTemplate + ")");
        // $('#progressBar').css("-webkit-transform", "scale(" + 1 + "," + scaleTemplate + ")");
        // $('#progressBar').css("transform", "scale(" + 1 + "," + scaleTemplate + ")");

        // $('#progressDatos').css("-ms-transform", "scale(" + scaleTemplate + "," + 1 + ")");
        // $('#progressDatos').css("-webkit-transform", "scale(" + scaleTemplate + "," + 1 + ")");
        // $('#progressDatos').css("transform", "scale(" + scaleTemplate + "," + 1 + ")");

        // $('#progressBar').css("left", "" + (420 * scaleTemplate) + "px");
        // $('#progressBar').css("bottom", "" + (22 * scaleTemplate) + "px");

        $('#progressDatos').css("margin-left", '45%');

    } else {

        $("#top, #bottom").hide();

        $("#com").css({
            'margin-top': (posTopPantalla * scaleTemplate),
            'height': (altoPantalla * scaleTemplate),
            'width': (sourceWidth * scaleTemplate)
        });

        $("#mapa").css({
            'margin-top': -(sourceHeigth * scaleTemplate)
        });
        $("#map").css({
            'margin-top': (posTopPantalla * scaleTemplate),
            'height': (altoPantalla * scaleTemplate),
            'width': (sourceWidth * scaleTemplate)
        });

        $("#ayuda").css({
            'margin-top': -(sourceHeigth * scaleTemplate)
        });
        $("#ayu").css({
            'margin-top': (posTopPantalla * scaleTemplate),
            'height': (altoPantalla * scaleTemplate),
            'width': (sourceWidth * scaleTemplate)
        });

        $('#box').height(sourceHeigth * scaleTemplate);
        $('#box').width(sourceWidth * scaleTemplate);
        $('#box').css("margin-top", "-" + ((sourceHeigth * scaleTemplate) / 2) + "px");
        $('#box').css("margin-left", "-" + ((sourceWidth * scaleTemplate) / 2) + "px");


        $('#menuBar').css("-ms-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
        $('#menuBar').css("-webkit-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
        $('#menuBar').css("transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");

        $('#menuBar').css("-ms-transform-origin", "0 100%");
        $('#menuBar').css("-webkit-transform-origin", "0 100%");
        $('#menuBar').css("transform-origin", "0 100%");

        $('#progressBar').css("-ms-transform", "scale(" + 1 + "," + scaleTemplate + ")");
        $('#progressBar').css("-webkit-transform", "scale(" + 1 + "," + scaleTemplate + ")");
        $('#progressBar').css("transform", "scale(" + 1 + "," + scaleTemplate + ")");

        $('#progressDatos').css("-ms-transform", "scale(" + scaleTemplate + "," + 1 + ")");
        $('#progressDatos').css("-webkit-transform", "scale(" + scaleTemplate + "," + 1 + ")");
        $('#progressDatos').css("transform", "scale(" + scaleTemplate + "," + 1 + ")");
        // $('#progressBar').css("left", "" + (110 * scaleTemplate) + "px");
        // $('#progressBar').css("bottom", "" + (22 * scaleTemplate) + "px");
        $('#progressBar').css("left", "" + (420 * scaleTemplate) + "px");
        $('#progressBar').css("bottom", "" + (22 * scaleTemplate) + "px");

        // $('#progressDatos').css("top", "" + (15 * scaleTemplate) + "px");
        $('#progressDatos').css("left", "" + (175 * scaleTemplate) + "px");

    }

    $('#activar_audio_int').css("-ms-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
    $('#activar_audio_int').css("-webkit-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
    $('#activar_audio_int').css("transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");

    $('#modalBloq_int').css("-ms-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
    $('#modalBloq_int').css("-webkit-transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");
    $('#modalBloq_int').css("transform", "scale(" + scaleTemplate + "," + scaleTemplate + ")");

}

function loadContent() {
    audioPausado = true;
    currentAudio = '';
    switchPausa();
    stopAll();



    if (conection) {

        // carga la info   
        elSuspendData = get("cmi.suspend_data");

        if (elSuspendData == null || elSuspendData == undefined || elSuspendData == '' || elSuspendData == 'null') {
            elSuspendData = "1|0";
            pagVisitadas = "1";
            losIntentos = "0";
        } else {

            pagVisitadas = elSuspendData.split("|")[0];
            pagVisitadas = parseInt(pagVisitadas);
            console.log("pagVisitadas", pagVisitadas);
            losIntentos = elSuspendData.split("|")[1];
            console.log("losIntentos", losIntentos);
            losIntentosNum = parseInt(losIntentos);
            // set("cmi.suspend_data", "7" + "|" + losIntentosNum);
            // var success = save();

            if (conIntentos) {
                if (losIntentosNum >= maxIntentos) {
                    if (currentPage == course.pages.length - 1) {
                        // if (intentos == 0) {
                        currentPage--;
                        $("#modalBloq").fadeIn();
                        // return false;
                    }
                }
            }
        }

        // if ((currentPage + 1) >= pagVisitadas) {
        //     pagVisitadas = (currentPage + 1);
        // }
        // set("cmi.suspend_data", pagVisitadas + "|" + losIntentos);
        // var success = save();

    }

    $("#content").html('<iframe name="com" id="com" src="' + contentPath + course.pages[currentPage].url + '" frameborder="0" scrolling="no" border="0"></iframe>');
    $("title").text(course.pages[currentPage].title);
    $("#txtTitulo").text(course.pages[currentPage].title);

    setScale();
    updateTracking();
}

function load_activar_audio() {
    setScale();

    $("#activar_audio").css({
        'display': 'flex'
    });

    // if (!mobileCurse && elCurseStatus == "null") {
    //     $("#activar_audio").hide();
    //     goPage(0);
    // }
    // } else {
    //     /* audio de fondo */
    //     setTimeout(function () {
    //         playAudio(0, 500, 'repetir');
    //     }, 1000);
    //     goPage(0);
    // }
}

function audios_cargados() {

    if (conection) {
        var callSucceeded = init();

        if (callSucceeded) {

            var elCurseStatus = get("cmi.core.lesson_status");
            console.log("elCurseStatus", elCurseStatus);
            // var elCurseStatus = 'incomplete';

        }
    } else {
        elCurseStatus = "unknown";
    }


    // quitar
    // creaDiploma();




    $("#cargando_audios").hide();

    $("#activar_audio_si").click(function () {
        playAll();
        $("#activar_audio").hide();
        /* audio de fondo */
        // setTimeout(function () {
        //     playAudio(0, 500, 'repetir');
        // }, 1000);
        cargaRecursos();
        checkProgress();
    });
    $("#activar_audio_in, #activar_audio_no").click(function () {
        playAll();
        $("#activar_audio").hide();
        /* audio de fondo */
        // setTimeout(function () {
        //     playAudio(0, 500, 'repetir');
        // }, 1000);

        cargaRecursos();
        goPage(0);
    });

    if (elCurseStatus == "unknown" || elCurseStatus == "not attempted" || elCurseStatus == "null") {
        // $("#activar_audio_img1, #activar_audio_in").show();
        // QUITAR
        $("#activar_audio_img1, #activar_audio_in").hide();
        $("#activar_audio_in").click();
    } else {
        // $("#activar_audio_img2, #activar_audio_si, #activar_audio_no").show();
        // QUITAR
        $("#activar_audio_img2, #activar_audio_si, #activar_audio_no").hide();
        $("#activar_audio_si").click();
    }

}

function checkProgress() {
    resetTimer();
    curseStatus = get("cmi.core.lesson_status");
    // console.log("curseStatus...", curseStatus);

    switch (curseStatus) {
        case "not attempted":
            goPage(0);
            break;
        case "completed":
            lastPage = get("cmi.core.lesson_location");
            //console.log("Última página: " + lastPage);
            goPage(parseInt(lastPage));
            curseCompleted = true;
            break;
        case "incomplete":
            // lastPage = lmsCall("GetValue", "cmi.core.lesson_location");
            lastPage = get("cmi.core.lesson_location");
            if (lastPage == null || lastPage == undefined || lastPage == "") {
                lastPage = 0;
            }
            console.log("Última página: " + lastPage);
            goPage(parseInt(lastPage));
            break;
        case "passed":
            lastPage = get("cmi.core.lesson_location");
            //console.log("Última página: " + lastPage);
            goPage(parseInt(lastPage));
            break;
        case "failed":
            // lastPage = lmsCall("GetValue", "cmi.core.lesson_location");
            lastPage = get("cmi.core.lesson_location");
            //console.log("Última página: " + lastPage);
            goPage(parseInt(lastPage));
            break;
        case "unknown":
            goPage(0);
            break;
    }
}

function cargaRecursos() {
    $("#mapa").html('<iframe name="map" id="map" src="' + contentPath + recursos.pages[0].url + '" frameborder="0" scrolling="no" border="0"></iframe>');
    $("#ayuda").html('<iframe name="ayu" id="ayu" src="' + contentPath + recursos.pages[1].url + '" frameborder="0" scrolling="no" border="0"></iframe>');
    setScale();
}

function goPage(pageID) {
    if (currentPage != pageID) {
        lastPage = currentPage;
    }
    if (pageID != 0) {
        var pageSwitch = pageID - 1;
        if (pageSwitch >= pageFinished) {
            pageFinished = pageSwitch;
            pageFinished = parseInt(pageFinished);
        }
    }
    currentPage = pageID;
    loadContent();
}

function reLoad() {
    goPage(currentPage);
}

function goHome() {
    if (currentPage != 0) {
        goPage(0);
    }
}

function nextPage() {
    if ((parseInt(currentPage) + 1) < course.pages.length) {
        currentPage++;
        loadContent();
    } else {
        console.log('Error - Ya no hay más páginas después');
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        loadContent();
    } else {
        console.log('Error - Ya no hay más páginas antes');
    }
}

function updateTracking() {
    alert_next_stop();
    if (conection) {
        var hayCalificacion = scorm.get("cmi.core.score.raw");
        console.log('hayCalificacion', hayCalificacion);
        set("cmi.core.lesson_location", "" + currentPage + "");
        if (!curseCompleted) {
            if (!hayEvaluacion) {
                if (currentPage == course.pages.length - 1) {
                    set("cmi.core.lesson_status", "completed");
                    var success = save();
                    curseCompleted = true;
                    registraCompleto();
                    //console.log('SetStatus :completed');
                } else {
                    // lmsCall("SetValue", "cmi.core.lesson_status", "incomplete");
                    set("cmi.core.lesson_status", "incomplete");
                    var success = save();
                    //console.log('SetStatus :incomplete');
                }
            } else {
                if (currentPage == course.pages.length - 1 && hayCalificacion >= minimoAprobatorio) {
                    set("cmi.core.lesson_status", "completed");
                    var success = save();
                    curseCompleted = true;
                    registraCompleto();
                    //console.log('SetStatus :completed');
                } else {
                    // lmsCall("SetValue", "cmi.core.lesson_status", "incomplete");
                    set("cmi.core.lesson_status", "incomplete");
                    var success = save();
                    // console.log('SetStatus :incomplete');
                }
            }
            setTime();
        }

        elSuspendData = get("cmi.suspend_data");
        if (elSuspendData == null || elSuspendData == undefined || elSuspendData == '' || elSuspendData == 'null') {
            elSuspendData = "1|0";
            pagVisitadas = "1";
            losIntentos = "0";
        } else {
            pagVisitadas = elSuspendData.split("|")[0];
            pagVisitadas = parseInt(pagVisitadas);
        }
        console.log('elSuspendData', elSuspendData);
        console.log("pagVisitadas", pagVisitadas);
        console.log("pageFinished", pageFinished);

        console.log('currentPage', (currentPage + 1), ' y pagVisitadas', pagVisitadas)
        if ((currentPage + 1) >= pagVisitadas) {
            pagVisitadas = (currentPage + 1);
        }
        var pagVisitadasString = pagVisitadas.toString();
        var losIntentosString = losIntentos.toString();
        set("cmi.suspend_data", pagVisitadasString + "|" + losIntentosString);
        var success = save();
    }
    /* Actualización de los botones de navegación */
    if (currentPage < course.pages.length - 1) {
        if (!navegationBlock || mobileCurse) {
            //$("#btnNext").show();
            nextActivo = true;
        } else {
            nextActivo = false;
        }
    } else {
        //$("#btnNext").hide();
        nextActivo = false;
    }
    //console.log(currentPage + ' y ' + (course.pages.length - 1));
    nextActivo = false;
    $("#btnNext").removeClass('btnNavOver');
    $("#btnNext").css({
        'cursor': 'default',
        'opacity': '0.4'
    });
    if ((currentPage + 1) < pagVisitadas) {
        if (currentPage < (course.pages.length - 1)) {
            nextActivo = true;
            $("#btnNext").addClass('btnNavOver');
            $("#btnNext").css({
                'cursor': 'pointer',
                'opacity': '1'
            });
        }
    }

    if (currentPage >= 1) {
        //$("#btnPrev").show();
        $("#btnPrev").addClass('btnNavOver');
        $("#btnPrev").css({
            'cursor': 'pointer',
            'opacity': '1'
        });
    } else {
        //$("#btnPrev").hide();
        $("#btnPrev").removeClass('btnNavOver');
        $("#btnPrev").css({
            'cursor': 'default',
            'opacity': '0.4'
        });
    }

    /* Actualización de avance */
    paginasTotales = course.pages.length;
    var contentWidth = $('#progressBar').width();
    var porcentajeAvance = ((parseInt(currentPage) + 1) / paginasTotales);
    var progressBarWidth = contentWidth * porcentajeAvance;
    //console.log("Porcentaje Actual: " + Math.round(porcentajeAvance)+"%");
    $("#progress").css("width", progressBarWidth);
    upDateTemario();
    $("#progressDatos").html('<span>' + (parseInt(currentPage) + 1) + ' / ' + paginasTotales + '</span>');

}

function upDateTemario() {
    for (var i = 0; i <= pageFinished + 2; i++) {
        if ($('#item' + i).hasClass("linkactivo")) {

        } else {
            $('#item' + i).addClass("linkactivo");
            $('#item' + i).click(function () {
                var esteID = $(this).attr("_ID");
                goPage(esteID);
                openTemario();
            });
        }
    }
    for (var i = 0; i <= pageFinished + 1; i++) {
        $('#item' + i + ' i').removeClass('fa-square-o');
        $('#item' + i + ' i').addClass('fa-check-square-o');
    }
}

function errorAPI() {
    if (mostrarAlertas) {
        alert("Se ha detectado un problema de comunicación con el LMS.\nSu progreso no podrá seguir siendo registrado.\nPor favor cierre el curso y vuelva a intentarlo.");
    }
    // console.log('Error de conexión');
}

function setTime() {
    var tiempo = getTimeCurrent();
    //lmsCall("SetValue","cmi.core.session_time",""+tiempo+"");
    set("cmi.core.session_time", "" + tiempo + "");
    //console.log('Tiempo enviado: '+tiempo);
}

function change_bg(estilo) {
    $('html').removeClass('bg1');
    $('html').removeClass('bg2');
    $('html').addClass(estilo);
}

function alert_next() {
    if (currentPage > pageFinished) {
        pageFinished = currentPage;
        pageFinished = parseInt(pageFinished);
    }
    if (currentPage < (course.pages.length - 1)) {
        //$("#btnNext").show();
        $("#btnNext").css({
            'opacity': '0.4'
        });
        if (nextActivo) {
            TweenMax.killTweensOf($("#btnNext"));
            TweenMax.to($("#btnNext"), .4, {
                alpha: 1,
                yoyo: true,
                repeat: -1
            });
        } else {
            $("#btnNext").addClass('btnNavOver');
            $("#btnNext").css({
                'cursor': 'pointer'
            });
            TweenMax.killTweensOf($("#btnNext"));
            TweenMax.to($("#btnNext"), .4, {
                alpha: 1,
                yoyo: true,
                repeat: -1
            });
        }
    }
    nextActivo = true;
    upDateTemario();
}

function just_show_next() {
    if (currentPage > pageFinished) {
        pageFinished = currentPage;
        pageFinished = parseInt(pageFinished);
    }
    if (currentPage < (course.pages.length - 1)) {
        $("#btnNext").show();
        $("#btnNext").addClass('btnNavOver');
        $("#btnNext").css({
            'cursor': 'pointer'
        });
    }
    TweenMax.to($("#btnNext"), 0, {
        alpha: 1
    });
    upDateTemario();
}

function alert_exit() {
    if (currentPage > pageFinished) {
        pageFinished = currentPage;
        pageFinished = parseInt(pageFinished);
    }
    $("#btnExit").show();
    TweenMax.to($("#btnExit"), .5, {
        alpha: .5,
        yoyo: true,
        repeat: -1
    });
    upDateTemario();
}

function alert_next_stop() {
    TweenMax.killTweensOf($("#btnNext"));
    /* TweenMax.to($("#btnNext"), 1, {
         alpha: 1
     });*/
}

function terminarPantalla() {
    if (course != undefined) {
        alert_next();
    }
    console.log("Termina Pantalla");
}


function bloqueaEvaluacion() {
    parent.bloqueoGral = true;
    $("#btnNext, #btnPrev, #btnTemario, #btnReload, #btnHelp, #btnPausa_on, #btnPausa_off, #btnCerrarTemario").css({
        'cursor': 'default',
        'opacity': '0.4'
    });
}

function desbloqueaEvaluacion() {
    parent.bloqueoGral = false;
    $("#btnPrev, #btnTemario, #btnReload, #btnHelp, #btnPausa_on, #btnPausa_off, #btnCerrarTemario").css({
        'cursor': 'pointer',
        'opacity': '1'
    });
}

function bloqueaNavegacion() {
    parent.bloqueoGral = true;
    TweenMax.killTweensOf($("#btnNext"));

    $("#btnNext, #btnPrev, #btnTemario, #btnReload, #btnHelp, #btnPausa_on, #btnPausa_off, #btnCerrarTemario, .texto_temario, .texto_ayuda").css({
        'cursor': 'default',
        'opacity': '0.4'
    });
    $("#btnNext, #btnPrev, #btnNext, #btnTemario, #btnReload, #btnHelp, #btnPausa_on, #btnPausa_off, #btnCerrarTemario, #progressBar, .texto_titulo, .texto_temario, .texto_ayuda").hide();
}

function desbloqueaNavegacion() {
    parent.bloqueoGral = false;
    $("#btnPrev, #btnTemario, #btnReload, #btnHelp, #btnPausa_on, #btnPausa_off, #btnCerrarTemario, .texto_temario, .texto_ayuda").css({
        'opacity': '1'
    });
    $("#btnPrev, #btnTemario, #btnReload, #btnHelp, #btnPausa_on, #btnPausa_off, #btnCerrarTemario").css({
        'cursor': 'pointer'
    });
    $("#btnPrev, #btnNext, #btnTemario, #btnReload, #btnHelp, #btnPausa_on, #btnPausa_off, #btnCerrarTemario, #progressBar, .texto_titulo, .texto_temario, .texto_ayuda").show();
    updateTracking();
}

function addIntentos() {

    if (conection) {


        losIntentosNum = parseInt(losIntentos);

        console.log('elSuspendData', elSuspendData);
        console.log("losIntentosNum", losIntentosNum);

        pagVisitadasString = pagVisitadas.toString();
        losIntentosNum++;
        losIntentos = losIntentosNum.toString();

        set("cmi.suspend_data", pagVisitadasString + "|" + losIntentos);
        var success = save();
        console.log("losIntentos: ", losIntentos);
    }
}

function setCalificacionFinal(laCalificacion) {
    console.log('setCalificacionFinal', laCalificacion);

    if (conection) {

        // if (scorm.version == "1.2") {
        set("cmi.core.score.raw", laCalificacion);
        // } else if (scorm.version == "2004") {
        //     scorm.set("cmi.score.raw", laCalificacion);
        //     scorm.set("cmi.score.scaled", (laCalificacion / 10));
        // }
        var success = save();
        if (!success) {
            errorAPI();
        }

        addIntentos();

        if (laCalificacion >= minimoAprobatorio) {
            addIntentos();
            setTimeout("updateTracking()", 500);
        }
    }
}



/////////////////////////////////////////////////////////
function fatality() {
    var secuencia = "";
    $(document).keydown(function (e) {
        console.log(e.keyCode);
        if (e.keyCode == 38) {
            if (secuencia == "") {
                secuencia = "arriba";
            } else {
                secuencia = "";
            }
            console.log("secuencia: " + secuencia);
            e.preventDefault();
        }
        if (e.keyCode == 40) {
            if (secuencia == "arriba") {
                secuencia = "abajo";
            } else {
                secuencia = "";
            }
            console.log("secuencia: " + secuencia);
            e.preventDefault();
        }
        if (e.keyCode == 37) {
            if (secuencia == "abajo") {
                secuencia = "izquierda";
            } else {
                secuencia = "";
            }
            console.log("secuencia: " + secuencia);
        }
        e.preventDefault();
        if (e.keyCode == 39) {
            if (secuencia == "izquierda") {
                console.log("Código Activado");
                alert_next()
                nextPage();
            }
            console.log("secuencia: " + secuencia);
            secuencia = "";
            e.preventDefault();
        }
    });
}

$(window).unload(function () {
    if (conection) {
        end();
    }
});