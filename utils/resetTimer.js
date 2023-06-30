const resetButtonEl = document.getElementById("reset");

function resetTimer() {
    clearInterval(timerInterval);
  
    elapsedTime = 0;
    timerEl.textContent = "00:00:00";
  
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
  }

  resetButtonEl.addEventListener("click", resetTimer);