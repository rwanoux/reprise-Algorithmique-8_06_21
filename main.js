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



function boucles() {

    //----décla des variables
    let nbr = parseInt(prompt("combien d'étoiles à la base des figures"));
    let resultZone = document.getElementById('resultBoucles');

    DrawAll(resultZone, nbr);


    //---function drawAll qui trace tout ;
    function DrawAll(el, n) {
        el.append(drawLine(n));
        el.append(drawRect(n));
        el.append(drawTri(n))
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
                console.log(inner)
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