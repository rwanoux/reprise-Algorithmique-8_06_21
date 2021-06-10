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
let mesVarObjet = {
    chaine: "kujqgflkjbskjfbksdjbfvvkjsdbfkjhdsbkfjqdkfjbs",
    prems: "",
    derns: ""
}
/*
//init de la chaine de caractere à mouliner
function initFirstLast() {
    mesVarObjet.chaine = prompt('entrez la chaine de caractère dont vous voulez trouver le premier et dernier caractère');
}
*/

//function qui renvoit la partie gauche d'un texte
function left(text, index) {
    return text.slice(0, index)
}
//fonction qui renvoie la partie gauche
function right(text, index) {
    return text.slice(-1 * index)
}

//fonction principale
function firstLast(mouliner, alpha, omega) {
    alpha = left(mouliner, 1);//sous-procedure
    omega = right(mouliner, 1);//sous-procedure
    alert(`
    la chaine à traiter : ${mouliner}
    premier caracter : ${alpha}
    dernier caracter : ${omega}
    `)

}

//apeller la fonction sur un click
document.getElementById("buttonFirstLast").addEventListener('click', () => {
    firstLast(mesVarObjet.chaine, mesVarObjet.prems, mesVarObjet.derns);

})




function boucles() {

    //----décla des variables générales
    let nbr = parseInt(prompt("combien d'étoiles à la base des figures"));

    //---le div où va s'afficher le resultat
    let resultZone = document.getElementById('resultBoucles');


    //--appelle de la fonction principale
    DrawResult(resultZone, nbr);

    //---décla de la function principale qui trace tout ; 
    function DrawResult(el, n) {
        //ré-init le contenu du div d'affichage de résultat
        el.innerHTML = "";

        //switch sur le return de la function chooseFigure
        switch (chosenFigure()) {

            // el = le div où va s'afficher le resultat (=resultZone)
            // parent.append(enfant) colle un élément HTML enfant à un element html parent
            case "triangle":
                el.append(drawTri(n));//appele poour tracer triangle drawTri() return un element html
                break;
            case "ligne":
                el.append(drawLine(n));//appele pour tracer ligne
                break;
            case "rectangle":
                el.append(drawRect(n));//appelle pour tracer rectangle
                break
        }

    };
    //---décla de la fonction qui permet de choisir la figure
    function chosenFigure() {
        let acceptableChoices = ["ligne", "rectangle", "triangle"]
        let res;
        do { res = prompt("quelle figure afficher ? tapez triangle rectangle ou ligne") }
        while (acceptableChoices.indexOf(res) == -1);
        return res

    }
    //---------décla -creation line
    function drawLine(n) {
        let lineDive = document.createElement('div');//je crée un div
        let inner = "";//j'initialise une chaine de caractère
        for (let i = 0; i < n; i++) {//une "*" par loop sur nbr
            inner += "*";
        };
        lineDive.append(createPara(inner));//création d'une ligne
        return lineDive// je renvoie le div line
    };
    //-------decla -creation rectangle
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
    };

    //-----decla -creation triangle
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
    };

    //----creation d'un paragraphe ====>une ligne du dessin
    function createPara(text) {
        let el = document.createElement('p');
        el.textContent = text;
        return el
    };


}