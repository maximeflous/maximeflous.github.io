let startTime = Date.now();
const best2 = localStorage.getItem("bestTime2");
if (best2) {
  document.getElementById("best-time2").textContent = best2;
}

let timerInterval = setInterval(() => {
  const currentTime = Date.now();
  const elapsed = Math.floor((currentTime - startTime) / 1000);
  document.getElementById("time").textContent = elapsed;
}, 1000);



function checkStep1() {
  const answer = document.getElementById("answer1").value.trim();
  if (answer === "1027") {
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");
    document.getElementById("step2").classList.add("active");
  } else {
    alert("Mauvaise réponse ! Essaie encore.");
  }
}

function checkStep2() {
  const answer = document.getElementById("answer2").value.trim();
  if (answer === "1") {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");
    document.getElementById("step3").classList.add("active");
  } else {
    alert("Alors, pas si simple que ça ?");
  }
}

function checkStep3() {
  const answer = document.getElementById("answer3").value.trim().toLowerCase();
  if (answer === "240") {
    document.getElementById("step3").classList.remove("active");
    document.getElementById("step3").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");
    const totalTime = parseInt(document.getElementById("time").textContent, 10);
    const savedBest = localStorage.getItem("bestTime2");
    
    if (!savedBest || totalTime < parseInt(savedBest)) {
      localStorage.setItem("bestTime2", totalTime);
      document.getElementById("best-time2").textContent = totalTime;
    }
    document.getElementById("success").innerHTML += `<p>Tu as mis ${totalTime} secondes !</p>`;
 

  } else {
    alert("Hmm, vérifie tes calculs...");
  }
}

  