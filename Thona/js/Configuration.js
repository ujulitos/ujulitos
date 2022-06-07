/* Copyright uJL 2019. */

var conection = true;
var mostrarAlertas = false;
var contentPath = "contenido/";
var mobileCurse = false;
var navegationBlock = true;
var hayEvaluacion = false;
var minimoAprobatorio = 80;
var haySubtitulos = false;
var pantallaCompleta = true;
var conIntentos = false;
var maxIntentos = 2;
var intento = 0;

/* Pantallas del curso */
var course = new Object();
course.pages = [
    { title: "Productos vida, accidentes y gastos médicos | Bienvenida", url: "01_bienvenidos.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Introducción a los productos", url: "02_introduccion.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Productos Paquete Individual", url: "03_productos_ind.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Seguros COVID", url: "04_seguros_covid.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Ejercicio", url: "05_ejercicio.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Seguros de Vida Grupo", url: "06_seguros_grupo.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Seguros de Accidentes Personales Colectivo", url: "07_seguros_acc_per_colec.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Ejercicio", url: "08_ejercicio.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Thona Elite", url: "09_thona.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Ejercicio ", url: "10_ejercicio.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | ¿Qué hacer en caso de siniestro?", url: "11_que_hacer_siniestros.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Evaluación", url: "12_evaluacion.html", navegacion: true, menu: true },
    { title: "Productos vida, accidentes y gastos médicos | Pantalla final", url: "13_pantalla_final.html", navegacion: true, menu: true }
];

/* Pantallas de recursos */
var recursos = new Object();
recursos.pages = [
    { title: "Índice", url: "indice.html", navegacion: true, menu: true },
    { title: "Ayuda", url: "ayuda.html", navegacion: true, menu: true }
];

/* Audios del curso */
var grupoAudios = new buzz.group([
    /*0*/ new buzz.sound("contenido/audios/audio0", { formats: ["mp3"], preload: true })
    // /*1*/ new buzz.sound("contenido/audios/InteligenciaEmocional_M4_01_01", { formats: ["mp3"], preload: true }),
]);
