function eleveAuCarre() {
    let unNbre, carre;

    unNbre = parseFloat(prompt('quel nombre voulez-vous mettre au carré ?'));

    carre = unNbre * unNbre;

    alert(`
    le carré de ${unNbre} 
    est :    ${carre}
    `)

}

function calculTVA() {
    const TVA = 20;
    const TITRE = "Résultat";

    let prixHT, prixTTC, montantTVA;

    prixHT = parseFloat(prompt('donnez un prix HT'));
    prixTTC = prixHT + (prixHT * TVA / 100);
    montantTVA = prixTTC - prixHT;

    alert(`
    ${TITRE}
    votre prix de : ${prixHT} HT
    devient : ${prixTTC} TTC
    dont ${montantTVA} de TVA
    `)
}
function notesEleves() {
    let long = parseInt(prompt('combien de notes à saisir ?'));
    let tabl = [];
    let total = 0;
    let moy;
    console.log(tabl)
    for (let i = 0; i < long; i++) {
        tabl[i] = parseInt(prompt(`quelle est la note n° ${i + 1}`));
        total += tabl[i]
    };
    moy = total / tabl.length;
    alert(`la moyenne est de ${moy}`)
}

function repOuiNon() {
    let reponse = "";
    while (reponse != "oui" && reponse != "non") {
        reponse = prompt('répondez oui ou non');
    }


}



//décla des variables necessaires
let chaine = "";
let prems = "";
let derns = "";

//init de la chaine de caractere à mouliner
function initFirstLast() {
    chaine = prompt('entrez la chaine de caractère dont vous voulez trouver le premier et dernier caractère');

}

//function qui renvoit la partie gauche d'un texte
function left(chaine, index) {
    return chaine.slice(0, index);
}
//fonction qui renvoie la partie gauche
function right(chaine, index) {
    return chaine.slice(-1 * index)
}

//fonction principale
function firstLast(mouliner, alpha, omega) {
    alpha = left(mouliner, 1);//sous-procedure
    omega = right(mouliner, 1);//sous-procedure

    console.log(`
        chaine= ${mouliner}
        prems= ${alpha}
        derns=${omega}
    `)
}

//apeller la fonction sur un click

document.getElementById("buttonFirstLast").addEventListener('click', function () {
    firstLast(chaine, prems, derns)
})

function boucles() {

    //----décla des variables
    let nbr = parseInt(prompt("combien d'étoiles à la base des figures"));
    let resultZone = document.getElementById('resultBoucles');

    DrawAll(resultZone, nbr);


    //---function drawAll qui trace tout ; 
    function DrawAll(el, n) {
        //ré-init le contenu du div d'affichage de résultat
        el.innerHTML = "";
        //creation des div enfants contenant les figures
        el.append(drawLine(n));
        el.append(drawRect(n));
        el.append(drawTri(n));
    };


    //----------creation line
    function drawLine(n) {
        let lineDive = document.createElement('div');//je crée un div
        let inner = "";//j'initialise une chaine de caractère
        for (let i = 0; i < n; i++) {//une "*" par loop sur nbr
            inner += "*";
        };
        lineDive.append(createPara(inner));//création d'une ligne
        return lineDive// je renvoie le div line
    };
    //--------creation rectangle
    function drawRect(n) {
        let rectDiv = document.createElement('div')//creation du div

        for (let i = 0; i < n; i++) {//pour chaque ligne (=nbr)
            let inner = "";
            for (let x = 0; x < n; x++) {
                inner += "*";//pour chaque colonne (=nbr)=> ajout "*"
            };
            rectDiv.append(createPara(inner))//creation du paragraphe contenant nbr * "x"
        };
        return rectDiv//je renvoie le div
    }

    //------creation triangle
    function drawTri(n) {
        let triDiv = document.createElement('div')// le div triangle

        for (let i = 0; i < n; i++) {// pour chaque ligne
            let inner = "";
            for (let x = 1; x <= i + 1; x++) {//le nombre d'"*" incrémente
                inner += "*";
            };

            triDiv.append(createPara(inner))//création ligne

        };
        return triDiv
    }
    //----creation d'un paragraphe ====>une ligne du dessin
    function createPara(text) {
        let el = document.createElement('p');
        el.textContent = text;
        return el
    };


}