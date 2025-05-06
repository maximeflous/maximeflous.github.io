let startTime = Date.now();
const best3 = localStorage.getItem("bestTime3");
if (best3) {
  document.getElementById("best-time3").textContent = best3;
}

let timerInterval = setInterval(() => {
  const currentTime = Date.now();
  const elapsed = Math.floor((currentTime - startTime) / 1000);
  document.getElementById("time").textContent = elapsed;
}, 1000);

function checkAnswer() {
  const guess = document.getElementById("guess").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (guess === "escarmouche") {
    feedback.textContent = "Bravo ! C'était la bonne réponse.";
    feedback.style.color = "green";
    
    const totalTime = parseInt(document.getElementById("time").textContent, 10);
    const savedBest = localStorage.getItem("bestTime3");
    
    if (!savedBest || totalTime < parseInt(savedBest)) {
      localStorage.setItem("bestTime3", totalTime);
      document.getElementById("best-time3").textContent = totalTime;
    }
    document.getElementById("success").innerHTML += `<p>Tu as mis ${totalTime} secondes !</p>`;
   
  } else {
    feedback.textContent = "Ce n'est pas ça, réessaie !";
    feedback.style.color = "red";
  }
}

