// Initialisation de la variable secretNumber et des tentatives
const secretNumber = Math.floor(Math.random() * 100) + 1; // Nombre secret entre 1 et 100
let attempts = 0; // Initialisation du nombre d'essais

let startTime = Date.now();  // Démarre le chronomètre
const best1 = localStorage.getItem("bestTime1");  // Récupère le meilleur temps enregistré
if (best1) {
  document.getElementById("best-time1").textContent = best1 + " secondes";  // Affiche le meilleur temps
}

let timerInterval = setInterval(() => {
  const currentTime = Date.now();
  const elapsed = Math.floor((currentTime - startTime) / 1000); // Calcul du temps écoulé en secondes
  document.getElementById("time").textContent = elapsed;  // Affiche le temps écoulé
}, 1000);

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess-input").value);  // Récupère l'entrée de l'utilisateur
  const message = document.getElementById("message");  // Message d'alerte
  const attemptsElement = document.getElementById("attempts");  // Affiche le nombre d'essais

  // Vérifier si l'entrée est un nombre valide
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
    message.style.color = "red";
    return;
  }

  // Incrémenter le nombre d'essais
  attempts++;
  attemptsElement.textContent = attempts;

  // Vérifier si la réponse est correcte
  if (userGuess === secretNumber) {
    message.textContent = `Félicitations ! Vous avez deviné le nombre en ${attempts} essais.`;
    message.style.color = "green";
    
    const totalTime = Math.floor((Date.now() - startTime) / 1000);  // Temps total pris pour deviner
    const bestTime = localStorage.getItem("bestTime1");  // Récupère le meilleur temps enregistré
    
    // Si aucun temps ou si le temps actuel est meilleur, on met à jour le meilleur temps
    if (!bestTime || totalTime < parseInt(bestTime)) {
      localStorage.setItem("bestTime1", totalTime);  // Enregistre le meilleur temps
    }
    
    // Affiche le temps pris dans le jeu
    document.getElementById("success").innerHTML += `<p>Tu as mis ${totalTime} secondes !</p>`;
    
    // Désactive le bouton après avoir gagné
    document.querySelector("button").disabled = true;
  } else if (userGuess < secretNumber) {
    message.textContent = "Trop bas ! Essayez encore.";
    message.style.color = "orange";
  } else {
    message.textContent = "Trop haut ! Essayez encore.";
    message.style.color = "orange";
  }

  // Effacer le champ de saisie après chaque tentative
  document.getElementById("guess-input").value = "";
}
