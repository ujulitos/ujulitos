var corrects = 0;
var current = 0;
var userAnswer = 0;
var max = 0;
var tipoQuestion;
var imageQuestion;
var multipleAnswers;
var questions = new Array(); // arreglo de las preguntas.
var backgroundButtonSelected = "#EC1C24"; // rojo ejemplo
var backgroundButton = "#065D82"; // azul ejemplo
// fileName es el nombre de archivo con las preguntas si es que se requiere uno diferente a ./opcion_multiple.xml
// randomQuestions parámetro para generar el arreglo de las preguntas aleatoriamente
// randomAnswers parámetro para generar el arreglo de las respuestas de cada pregunta
function loadXML(fileName, randomQuestions, randomAnswers, multAnswers) {
    //console.log("ready to go...");
    var file = "./m2_opcion_multiple.xml";
    if (fileName != "") {
        file = fileName;
    } // if fileName!=""
    corrects = 0;
    current = 0;
    userAnswer = 0;
    questions = new Array(); // arreglo de las preguntas.
    $.ajax({
        type: "GET",
        url: file,
        dataType: "xml",
        success: function(xml) {
            var xmlDoc = $.parseXML(xml);
            var $xml = $(xmlDoc);
            var index = xml.getElementsByTagName("questions");

            backgroundButtonSelected = index[0].getAttribute("backgroundButtonSelected");
            backgroundButton = index[0].getAttribute("backgroundButton");
            var titulo = index[0].getAttribute("name");
            var totalTopics = 0;
            var q = xml.getElementsByTagName("question");

            //parent.registra("Cargando preguntas y respuestas...");
            //console.log("q.length: " + q.length);
            for (var i = 0; i < q.length; i++) {
                var a = q[i].getElementsByTagName("answer");
                //	console.log("a.length: " + a.length);
                var aArray = new Array();
                for (var j = 0; j < a.length; j++) {
                    // console.log(a[j].getAttribute("text") + "-" + a[j].getAttribute("number") + "-" +  a[j].getAttribute("retro")  + "-" + a[j].getAttribute("correct"));
                    aArray.push(new answer(a[j].getAttribute("text"), a[j].getAttribute("number"), a[j].getAttribute("retro"), a[j].getAttribute("correct")));
                } //for j answers
                if (randomAnswers) { // respuestas aleatorias
                    aArray = randomizeArray(aArray);
                } // if randomAnswers
                questions.push(new question(q[i].getAttribute("text"), q[i].getAttribute("number"), q[i].getAttribute("type"), q[i].getAttribute("image"), aArray));
                console.log(questions[i]);
            } //for i questions
            if (randomQuestions) { // preguntas aleatorias
                questions = randomizeArray(questions);
            }

            multipleAnswers = multAnswers;
            console.log("multipleAnswers: " + multipleAnswers);

            max = questions.length;
        } // success
    }); //ajax index
} //function loadXML
var questionLimit = 240;
var answerLimit = 30;
var question_md = "q_1";
var question_lg = "qL_1";
var answer_md = new Array("r_1", "r_2", "r_3");
var answer_lg = new Array("rL_1", "rL_2", "rL_3");
var button_md = new Array("boton_1", "boton_2", "boton_3");
var button_lg = new Array("botonL_1", "botonL_2", "botonL_3");

function setBackgroundButtons(backB, backBS) {
    backgroundButton = backB;
    backgroundButtonSelected = backBS;
} // setBackgroundButtons		
function setLengthQuestion(limit) {
    questionLimit = limit;
} //setLengthQuestion
function setLengthAnswer(limit) {
    answerLimit = limit;
} // setLengthAnswer
function setTextQuestion(md_lg) { // "q_1, qL_1"
    question_md = trim(md_lg.split(",")[0]);
    question_lg = trim(md_lg.split(",")[1]);
} // setTextQuestion
function getTextQuestionID() {
    var res = question_md;
    if (getQuestion().length > questionLimit) {
        res = question_lg;
    } // length>questionLimit
    return res;
} //getTextQuestionID
function setTextAnswer(md_lg) {
    answer_md = new Array();
    answer_lg = new Array();
    var data = md_lg.split(",");
    for (var i = 0; i < data.length; i = i + 2) {
        answer_md.push(trim(data[i]));
        answer_lg.push(trim(data[i + 1]));
    } //for i
} //setTextAnswer
function getTextAnswerID(num) {
    var res = answer_md[num - 1];
    var arr = questions[current].answers;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].text.length > answerLimit) {
            res = answer_lg[num - 1];
            break;
        } // length>answerLimit	
    } // for 
    return res;
} // getTextAnswerID
function setButtonAnswer(md_lg) {
    button_md = new Array();
    button_lg = new Array();
    var data = md_lg.split(",");
    for (var i = 0; i < data.length; i = i + 2) {
        answer_md.push(trim(data[i]));
        answer_lg.push(trim(data[i + 1]));
    } //for i
} //setButtonAnswer
function getButtonAnswerID() {
    var res = button_md[num - 1];
    var arr = questions[current].answers;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].text.length > answerLimit) {
            res = button_lg[num - 1];
            break;
        } // length>answerLimit	
    } // for 
    return res;
} // getButtonAnswerID

function getCurrent() {
    return current;
} //getCurrent

function addCorrect() {
    corrects++;
} // addCorrect

function getCorrect() {
    console.log("getCorrect: " + corrects);
    return corrects;
} //getCorrect

function setUserAnswer(userAnswers) {
    userAnswer = userAnswers;
    console.log("setUserAnswer: " + userAnswer);
} //setUserAnswer

function getUserAnswer() {
    console.log("getUserAnswer: " + userAnswer);
    return userAnswer;
} //getUserAnswer

function getArrayAnswers() {
    var res = new Array();
    for (var j = 0; j < questions[current].answers.length; j++) {
        res.push(questions[current].answers[j].correct);
    } //for
    console.log("getArrayAnswers", res);
    return res;
} //getArrayAnswers

function isCorrect(numAnswer) {
    console.log("current: " + current);
    numAnswer = numAnswer.toString();
    console.log("numAnswer: " + numAnswer);
    var elArrayAnswers = getArrayAnswers();
    elArrayAnswers = elArrayAnswers.toString();
    console.log("elArrayAnswers: " + elArrayAnswers);

    if (multipleAnswers) {

        if (numAnswer == elArrayAnswers) {
            console.log("correct true");
            addCorrect();
            current++;
            return true;
        } else {
            console.log("correct false");
            current++;
            return "";
        }

    } else {
        if (questions[current].answers[numAnswer - 1].correct) {
            console.log("correct true");
            addCorrect();
        } else {
            console.log("correct false");
        } //
        return questions[current++].answers[numAnswer - 1].correct;
    }
} //isCorrect

function getQuestion() {
    return questions[current].text;
} //getQuestion

function getQuestionType() {
    return questions[current].type;
} //getQuestionType

function getQuestionImage() {
    if (!questions[current].image || questions[current].image == undefined || questions[current].image == null || questions[current].image == '') {
        questions[current].image = 'sin_imagen';
    }
    return questions[current].image;
} //getQuestionType

function getAnswers() {
    return questions[current].answers;
} //getQuestion

function getRetro(num) {
    if (current < questions.length) {
        if (multipleAnswers) {
            console.log("getRetro: no hay");
            return "";
        } else {
            console.log("getRetro: " + questions[current].answers[num - 1].retro);
            return questions[current].answers[num - 1].retro;
        }
    } else {
        console.log("getRetro: no hay");
        return "";
    } //else //if ()
} //getRetro

function trim(str) {
    return str.replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/['"]+/g, '').replace(/<[^>]*>/g, '').replace(/&/g, '');
} //jc trim

function randomizeArray(array) { // función para que el arreglo tenga un orden aleatorio
    var newArray = new Array();
    while (array.length > 0) {
        var numRand = Math.floor(Math.random() * array.length);
        newArray.push(array[numRand]);
        array.splice(numRand, 1);
    } //while
    return newArray;
} //randomizaArray
//================= Objects questions and answers ===================

function question(text, number, type, image, answers) {
    this.text = text.replace(/\[/g, "<").replace(/\]/g, ">"); // texto de la pregunta
    this.number = number; // número de la pregunta
    this.type = type; // type de la pregunta
    this.image = image; // image de la pregunta
    this.answers = answers; // arreglo de respuestas
    this.getQuestionData = getQuestionData;
} //question

function getQuestionData() {
    return "Question: " + this.text + "\nnumber: " + this.number + "\n" + this.type + "\n" + this.answers[0].getAnswerData() + this.answers[1].getAnswerData() + this.answers[2].getAnswerData();
} //getQuestionData

function answer(text, number, retro, correct) {
    console.log('answers', text);
    if (text != null) {
        this.text = text.replace(/\[/g, "<").replace(/\]/g, ">"); // texto de la respuesta
    }

    this.number = number; // número de la respuesta
    this.retro = retro.replace(/\[/g, "<").replace(/\]/g, ">"); // retroalimentación de la respuesta
    if (correct.toLowerCase() == "true") {
        this.correct = true; // true o false de la respuesta correcta
    } else if (correct.toLowerCase() == "false") {
        this.correct = false;
    } // if correct
    this.getAnswerData = getAnswerData;
} //answer

function getAnswerData() {
    return "text: " + this.text + "\nnumber: " + this.number + "\nretro: " + this.retro + "\ncorrect: " + this.correct.toString();
} //getAnswerData