//  _____ _                _           _   _              
// /  ___| |              | |         | | | |             
// \ `--.| |_ ___  _ __   | |__  _   _| |_| |_ ___  _ __  
//  `--. \ __/ _ \| '_ \  | '_ \| | | | __| __/ _ \| '_ \ 
// /\__/ / || (_) | |_) | | |_) | |_| | |_| || (_) | | | |
// \____/ \__\___/| .__/  |_.__/ \__,_|\__|\__\___/|_| |_|
//                | |                                     
//                |_|                              


/*
* @type {HTMLButtonElement}
**/

const stopButtonEl = document.getElementById("stop");


// Stops the timer and enables the start button 
function stopTimer() {
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
  }


  // Event listener for the stop button
  stopButtonEl.addEventListener("click", stopTimer);