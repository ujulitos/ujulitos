// $(document).ready(function() {

function creaDiploma() {
    console.log(elStudentName);

    var arr = elStudentName.split(",");
    var user = "";
    if (arr.length >= 2) {
        user += arr[1];
    } //length>=2
    if (arr.length >= 1) {
        user += " " + arr[0];
    } //length>=1

    var laFechaFormateadaDia = moment().locale('es').format('DD');
    var laFechaFormateadaMes = moment().locale('es').format('MMMM');
    var laFechaFormateadaAnio = moment().locale('es').format('YYYY');
    var laFechaFormateada = laFechaFormateadaDia + ' de ' + laFechaFormateadaMes + ' de ' + laFechaFormateadaAnio;
    console.log(laFechaFormateada);

    $('#elNombre').html(user);
    $('#laFecha').html(laFechaFormateada);


    var doc = new jsPDF('l', 'px', [818, 629]);

    var img = new Image()
    img.src = 'contenido/img/diploma.png'
    doc.addImage(img, 'png', -2, -2, 620, 476)

    doc.setFontStyle("bold");
    doc.setFontSize(20);
    doc.text(210, 250, $('#elNombre').html(), 'center');
    // doc.setFontStyle("regular");
    doc.setFontSize(16);
    doc.text(210, 340, $('#laFecha').html(), 'center');

    doc.fromHTML($('#elDiplomaDIV').html(), 0, 0, {

    });

    var nDate = new Date();
    doc.save('Diploma_ActiveFitness_' + nDate.getFullYear().toString() + (nDate.getMonth() + 1).toString() + nDate.getDate().toString() + '_' + nDate.getHours().toString() + nDate.getMinutes().toString() + nDate.getSeconds().toString() + '.pdf');

}


// });
