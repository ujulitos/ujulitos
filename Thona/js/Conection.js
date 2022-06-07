var scorm = pipwerks.SCORM;

function init() {
    scorm.version = "1.2";
    var callSucceeded = scorm.init();

    var studentId = get("cmi.core.student_id");
    elStudentId = studentId.replace(/[áéíóúñ@\.]/g, '_');
    console.log("elStudentId", elStudentId);
    var studentName = get("cmi.core.student_name");
    // elStudentName = studentName.replace(/[áéíóúñ@\.]/g, '_');
    elStudentName = studentName;
    console.log("elStudentName", elStudentName);

    elSuspendData = get("cmi.suspend_data");
    console.log('elSuspendData', elSuspendData);

    inicia_uJLAPI();

    return true;
}

function send() {
    set('cmi.suspend_data', value);
}

function set(param, value) {
    var callSucceeded = scorm.set(param, value);
    registraDato(param, value);
}

function get(param) {
    return scorm.get(param);
}

function complete() {
    var callSucceeded = scorm.set("cmi.core.lesson_status", "completed");
}

function save() {
    var callSucceeded = scorm.save();
}

function end() {
    var callSucceeded = scorm.quit();
}

function checkSuspendData() {
    return scorm.get('cmi.suspend_data');
}

// window.onload = function() {
//     init();
// }
//
// window.onunload = function() {
//     if (conection) {
//         end();
//     }
// }
