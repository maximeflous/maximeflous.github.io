if (!localStorage.getItem("games")) {

  const defaultGames = [
    { title: "1 à 100", desc: "Trouve le nombre correct.", img: "https://i0.wp.com/www.jepense.org/wp-content/uploads/2021/02/symbolisme-nombre-100.png?fit=904%2C352&ssl=1", locked: false },
    { title: "Les Enigmes", desc: "Résous les enigmes et prouve nous ton intelligence.", img: "https://lamagiedesmaths.ulaval.ca/fileadmin/user_upload/enigmes_16_9_.png", locked: false },
    { title: "Le Rébus", desc: "Retrouve le nom caché derriere les images", img: "https://www.kutnahora.cz/uploads/gallery/full/3594.jpg", locked: false }
  ];
  localStorage.setItem("games", JSON.stringify(defaultGames));
}

  function saveUsername() {
    const username = document.getElementById("username-input").value.trim();
    if (username) {
      localStorage.setItem("username", username);
      alert("Nom enregistré !");
    } else {
      alert("Veuillez entrer un nom.");
    }
  }

  window.onload = () => {
    const saved = localStorage.getItem("username") || "";
    document.getElementById("username-input").value = saved;
  };
  // Fonction d'affichage du pseudo utilisateur sur index.html
function showUsername() {
  const username = localStorage.getItem("username");
  const title = document.getElementById("welcome-title");
  if (username && title) {
    title.textContent = "Bienvenue, " + username + " !";
  }
}

// Fonction d'affichage des jeux déjà existante
function displayGames(containerId) {
  const container = document.getElementById(containerId);
  const games = JSON.parse(localStorage.getItem("games")) || [];

  container.innerHTML = "";
  games.forEach((game, index) => {
    if (!game.locked) {
      const card = document.createElement("div");
      card.classList.add("game-card");
      card.innerHTML = `
        <img src="${game.img}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.desc}</p>
        <a href="jeu${index + 1}.html" class="btn">Jouer</a> <!-- Modification du lien -->
      `;
      container.appendChild(card);
    }
  });
}

// Exemple de fonction pour afficher les meilleurs temps
function showBestTimes() {
  const jeu1 = localStorage.getItem("bestTime1");
  const jeu2 = localStorage.getItem("bestTime2");
  const jeu3 = localStorage.getItem("bestTime3");

  // Afficher les meilleurs temps ou '--' s'il n'y a pas de record
  document.getElementById("best-time1").textContent = "Record Jeu 1 : " + (jeu1 ? jeu1 + " s" : "--");
  document.getElementById("best-time2").textContent = "Record Jeu 2 : " + (jeu2 ? jeu2 + " s" : "--");
  document.getElementById("best-time3").textContent = "Record Jeu 3 : " + (jeu3 ? jeu3 + " s" : "--");
}

// Appel de la fonction lors du chargement de la page
window.onload = showBestTimes;





// ✅ Chargement général une seule fois
window.addEventListener("DOMContentLoaded", () => {
  showUsername();
  displayGames("game-cards");
});
