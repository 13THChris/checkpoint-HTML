// Déclaration du Tableau contenant les images changeantes
const ARImages = [ //changer les Images de la 1ere div
    'Img/Ari1080.jpg',
    'Img/DW2.gif',
    'Img/DW3.jpg',
    'Img/DW4.jpg', 
    'Img/DW7.gif',
];

const RIRImages = [ //changer les Images de la 2nde div
    'Img/Anti3.jpg',
    'Img/Anti1.gif',
    'Img/Anti7.jpg',
    'Img/Anti2.jpg',
    'Img/Anti4.gif',
];


const Ari_img = document.getElementById('Ari_img'); // Agir sur la 1ere div
const Riri_img = document.getElementById('Riri_img'); // Agir sur la 2nde div

let currentIndex = 0; // Initialisation du compteur à l'indice 0 pour qu'il puisse compter la 1ere Image

// Fonction pour changer les images dans les 2 div
function changeImage() {

    Ari_img.style.opacity = 1;
    Riri_img.style.opacity = 1;

    // After the fade out transition is complete, change the source and fade in
    setTimeout(() => {
        // mettre à jour l'indexe de l'image
        currentIndex = (currentIndex + 1) % ARImages.length;
        currentIndex = (currentIndex + 1) % RIRImages.length;

        // Changer la source de l'image
        Ari_img.src = ARImages[currentIndex];
        Riri_img.src = RIRImages[currentIndex];

        // effet Fondu pour la transition d'image
        Ari_img.style.opacity = 1;
        Riri_img.style.opacity = 1;
    }, 1000); // temps de transition d'une image (1s) 

}

// Change l'image toutes les 4.5s
setInterval(changeImage, 4500);


// Effet aggrandissement et de rétrécissement après click sur l'image des 2 div
if (Ari_img && Riri_img) {

    // Ajouter un écouteur d'événement de clic à l'élément Ari_img
    Ari_img.addEventListener('click', () => {
        // Ajouter ou supprimer la classe "aggrandir" de Ari_img
        Ari_img.classList.toggle('aggrandir');
        // Si Ari_img est agrandi, retirer la classe "aggrandir" de Riri_img
        if (Ari_img.classList.contains('aggrandir')) {
            Riri_img.classList.remove('aggrandir');
        }
    });

    // Ajouter un écouteur d'événement de clic à l'élément Riri_img
    Riri_img.addEventListener('click', () => {
        // Ajouter ou supprimer la classe "aggrandir" de Riri_img
        Riri_img.classList.toggle('aggrandir');

        // Si Riri_img est agrandi, retirer la classe "aggrandir" de Ari_img
        if (Riri_img.classList.contains('aggrandir')) {
            Ari_img.classList.remove('aggrandir');
        }
    });
} else {
    console.error('Aucun élément(s) détecté(s)'); //code de débogage
}

// Bouton cliquable en forme de cœur changeant de couleur en conséquence
document.addEventListener('DOMContentLoaded', () => {
    const heart_Icon = document.querySelectorAll('.heart_Icon');

    heart_Icon.forEach(heart_Icon => {
        heart_Icon.addEventListener('click', () => {
            heart_Icon.classList.toggle('Rouge'); // Activer la classe .heart_Icon.Rouge
        });
    });
});


function Total() { // Calculer le sous_total et le total
    document.getElementById('sous_total').innerText = `Sous-total: $0.00`;
    
    let sousTotal = 0;
    document.querySelectorAll('.item').forEach(item => {
        const priceText = item.querySelector('.prix').innerText;
        const price = parseFloat(priceText.replace('$', '')); // convertir la string price en un flottant via la fonction parseFloat() et attribut cette valeur à price
        const quantity = parseInt(item.querySelector('#quantity').innerText); // convertir la string quantity en un entier via la fonction parseInt() et attribut cette valeur à quantity
        sousTotal += price * quantity;
    });
    document.getElementById('sous_total').innerText = `Sous-total: $${sousTotal.toFixed(2)}`; // .toFixed(2)} arrondie le nombre à 2 chiffres après la virgule

    // Calculer la TVA de 18%
    const tva = sousTotal * 0.18;
    const total = sousTotal + tva;

    // Mettre à jour l'affichage du total avec la TVA
    document.getElementById('total').innerText = `Total (TVA 18%): $${total.toFixed(2)}`;
}

// Fonction pour mettre à jour le compteur du panier
function updateCartwheel() {
    const itemCount = Array.from(document.querySelectorAll('.chariot .item')).reduce((total, item) => {
        const quantity = parseInt(item.querySelector('#quantity').innerText);
        return total + quantity;
    }, 0);
    document.getElementById('cartwheel').innerText = `🛒 (${itemCount})`;
}

// Initialiser le panier et mettre à jour les totaux
document.addEventListener("DOMContentLoaded", function() {
    Total();
    updateCartwheel(); // Mise à jour du compteur au chargement de la page

    document.querySelectorAll('.btn_quantité').forEach(btnQuantité => {
        const btnMinus = btnQuantité.querySelector('#btn_minus');
        const btnPlus = btnQuantité.querySelector('#btn_plus');
        const quantitySpan = btnQuantité.querySelector('#quantity');
        const item = btnQuantité.closest('.item');
        const stockSpan = item.querySelector('#st0ck');
        
        if (!stockSpan) { // Cas sans limitation de stock
            console.log('Stock span not found for item:', item); // Atteste de l'absence de .stock dans .item

            btnMinus.addEventListener('click', function() {
                let quantity = parseInt(quantitySpan.innerText);
                if (quantity > 1) {
                    quantity--;
                    quantitySpan.innerText = quantity;
                    Total();
                    updateCartwheel(); // Mise à jour du compteur après diminution
                }
            });
            btnPlus.addEventListener('click', function() {
                let quantity = parseInt(quantitySpan.innerText);
                quantity++;
                quantitySpan.innerText = quantity;
                Total();
                updateCartwheel(); // Mise à jour du compteur après augmentation
            });
        } 
        else { // Cas avec limitation de stock
            console.log('Stock span found for item:', item); // Atteste de la présence de .stock dans .item
            let stock = parseInt(stockSpan.innerText);

            btnMinus.addEventListener('click', function() {
                let quantity = parseInt(quantitySpan.innerText);
                if (quantity > 1) {
                    quantity--;
                    quantitySpan.innerText = quantity;
                    stock++;
                    stockSpan.innerText = stock;
                    Total();
                    updateCartwheel(); // Mise à jour du compteur après diminution
                }
            });
            btnPlus.addEventListener('click', function() {
                let quantity = parseInt(quantitySpan.innerText);
                if (stock > 0) {
                    quantity++;
                    quantitySpan.innerText = quantity;
                    stock--;
                    stockSpan.innerText = stock;
                    Total();
                    updateCartwheel(); // Mise à jour du compteur après augmentation
                } 
                else {
                    alert('Rupture de stock pour cet article !');
                }
            });
        }
    });

    // Bouton Supprimer
    document.querySelectorAll('.supprimer').forEach(button => {
        button.addEventListener('click', function() {

            // Afficher la boîte de dialogue de confirmation
            const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cet article 🥺?');
            if (confirmed) {
                const item = this.closest('.item');
                item.remove();

                const display = document.querySelector('.chariot');
                const currentHeight = display.offsetHeight;
                display.style.height = (currentHeight / 2) + 'px';

                Total();// Mise à jour de Total
                updateCartwheel(); // Mise à jour du compteur après suppression

                // Vérifier si tous les items ont été supprimés
                setTimeout(() => {
                    const remainingItems = document.querySelectorAll('.chariot .item');
                    if (remainingItems.length === 0) { // Alerte pour signifier que le panier est vide
                        alert('Votre 🛒 est vide !');
                        setTimeout(() => {
                            alert('Veuillez actualiser la page pour retrouver vos articles... 🤧'); // Consigne pour revoir les éléments du panier
                        }, 4000); 
                    }
                }, 300); // Ajoute un laps de temps (0.3s) afin que la div soit vide avant d'afficher l'alerte
            }
        });
    });

    updateCartwheel(); // Mise à jour du compteur au chargement de la page
    Total(); // Mettre à jour le sous-total et le total au chargement de la page
});


// Validation du code promo
const promo = document.getElementById('btn_v');
promo.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const puk = document.getElementById('puk').value;
    if (puk === "twiligHt13") {
        alert("Félicitations ! Vous bénéficiez d'une réduction de 50% sur le total des articles.");
        Prom();
    } else {
        alert("Code promo erroné ! (Veillez saisir twiligHt13 SVP...)");
    }
});

function Prom() {
    const totalElement = document.getElementById('total');
    const sousTotalElement = document.getElementById('sous_total');

    if (totalElement && sousTotalElement) {
        let totalText = totalElement.innerText;
        let sousTotalText = sousTotalElement.innerText;

        // Extraire la partie numérique des textes
        let totalValue = parseFloat(totalText.match(/\d+\.\d+/)[0]);
        let sousTotalValue = parseFloat(sousTotalText.match(/\d+\.\d+/)[0]);

        // Diviser les valeurs par 2
        totalValue /= 2;
        sousTotalValue /= 2;

        // Reconstruire le texte complet avec le texte avant le prix et le nouveau prix
        let newTotalText = totalText.replace(/\d+\.\d+/, totalValue.toFixed(2));
        let newSousTotalText = sousTotalText.replace(/\d+\.\d+/, sousTotalValue.toFixed(2));

        // Mettre à jour les éléments HTML avec les nouvelles valeurs
        totalElement.innerText = newTotalText;
        sousTotalElement.innerText = newSousTotalText;
    } else {
        console.error('Total or sous_total elements not found');
        alert('Total or sous_total elements not found');
    }
}
