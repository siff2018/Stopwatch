const stopButtonEl = document.getElementById("stop");

function stopTimer() {
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
  }

  stopButtonEl.addEventListener("click", stopTimer);