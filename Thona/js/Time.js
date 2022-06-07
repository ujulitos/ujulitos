 /* Copyright uJL 2019 */

 /* Variables de entorno*/
 var myTime = null;
 var runTimer = false;
 var seconds, minutes, hours;
 var points;
 var currentTime = "00:00:00";

 function resetTimer() {
     seconds = 0;
     minutes = 0;
     hours = 0;
     startTime();
 }

 function showTimer() {
     if (points == true) {
         seconds++;
         if (seconds > 59) {
             seconds = 0;
             minutes++;
             if (minutes > 59) {
                 minutes = 0;
                 hours++;
                 if (hours > 99) {
                     return true;
                 }
             }
         }
     }
     currentTime = "";
     hours = hours.toString();
     if (hours.length == 1) hours = "0" + hours;
     minutes = minutes.toString();
     if (minutes.length == 1) minutes = "0" + minutes;
     seconds = seconds.toString();
     if (seconds.length == 1) seconds = "0" + seconds;
     if (points == false) {
         currentTime += hours + ":" + minutes + ":" + seconds;
         points = true;
     } else {
         currentTime += hours + ":" + minutes + ":" + seconds;
         points = false;
     }
     myTime = setTimeout("showTimer()", 500);
     runTimer = true;
     return true;
 }

 function startTime() {
     puntos = false;
     showTimer();
 }

 function getTimeCurrent() {
     return currentTime;
 }
