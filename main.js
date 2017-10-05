
let monImage = document.querySelector('img');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/google.png') {
      monImage.setAttribute ('src','images/seo-hackers.jpg');
    } else {
      monImage.setAttribute ('src','images/google.png');
    }

let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'google est cool, ' + monNom;
}

if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'google est cool, ' + nomEnregistré;
}
monBouton.onclick = function() {
  définirNomUtilisateur();
}

document.querySelector('html').onclick = function() {
    alert('go');
}

let maVariable = document.querySelector('h1');
