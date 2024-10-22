const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Étape 2 : Ajoutez des Event Listeners sur les flèches
// Récupérer les éléments des flèches et de l'image et du texte
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const imgElement = document.querySelector('.banner-img'); // L'image de la bannière
const textElement = document.querySelector('#banner p'); // Le texte associé

// Index actuel
let currentIndex = 0;

// Fonction pour mettre à jour l'image et le texte
function updateCarousel() {
    imgElement.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    textElement.innerHTML = slides[currentIndex].tagLine;
}
// etape 5 carrousel infini
// Écouter le clic sur la flèche gauche
leftArrow.addEventListener('click', () => {
    console.log('Flèche gauche cliquée');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Boucle vers la dernière image
    updateCarousel();
});

// Écouter le clic sur la flèche droite
rightArrow.addEventListener('click', () => {
    console.log('Flèche droite cliquée');
    currentIndex = (currentIndex + 1) % slides.length; // Boucle vers la première image
    updateCarousel();
});

// Étape 3 : Ajoutez des bullet points au slider
// Initialiser le carrousel avec la première image et le texte
updateCarousel();

// Récupérer le conteneur des bullet points
const bulletsContainer = document.querySelector('.dots');

// Fonction pour créer les bullet points
function createBullets() {
    slides.forEach((slide, index) => {
        const bullet = document.createElement('div'); // Créer un nouvel élément div pour chaque bullet
        bullet.classList.add('dot'); // Ajouter la classe pour le style
        if (index === 0) bullet.classList.add('dot_selected'); // La première bullet est active par défaut
        bullet.addEventListener('click', () => {
            currentIndex = index; // Mettre à jour l'index courant
            updateCarousel(); // Mettre à jour le carrousel
        });
        bulletsContainer.appendChild(bullet); // Ajouter le bullet au conteneur
    });
}

// Appeler la fonction pour créer les bullet points
createBullets();

// Étape 4 : Modifiez le slide au clic sur le bouton
function updateCarousel() {
    imgElement.src = `./assets/images/slideshow/${slides[currentIndex].image}`; // Met à jour l'image
    textElement.innerHTML = slides[currentIndex].tagLine; // Met à jour le texte

    // Mettre à jour les bullets
    document.querySelectorAll('.dot').forEach((bullet, index) => {
        bullet.classList.remove('dot_selected'); // Retirer la classe active de tous les bullets
        if (index === currentIndex) {
            bullet.classList.add('dot_selected'); // Ajouter la classe active au bullet correspondant
        }
    });
}
