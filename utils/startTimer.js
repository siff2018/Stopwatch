const startButtonEl = document.getElementById("start");



function startTimer() {
    startTime = Date.now() - elapsedTime;
  
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timerEl.textContent = formatTime(elapsedTime);
    }, 10);
  
    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
  }


==
  startButtonEl.addEventListener("click", startTimer);
