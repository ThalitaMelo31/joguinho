function andarPraFrente() {

}
function andarPraDireita() {

}
function andarPraEsquerda() {

}
function andarPraTras() {

}
function correr() {

}
function morder() {
    //se for 1 - o inimigo perde energia
    //se for 2 - arranca o pé do inimigo
    //se for 3 - arranca a perna
    //se for 4 - arranca os braços
    //se for 5 - arranca a cabeça
    // vou criar uma variável usando let
    // para pegar a classe no querySelector = "."
    let f = document.querySelector("#forca").value
    let m = document.querySelector("p")

    if (f == 1) {
        m.innerHTML = "inimigo perdeu a energia!"
    } else if (f == 2) {
        m.innerHTML = "monstro zumbi ficou sem pés"
    } else if (f == 3) {
        m.innerHTML = "monstro zumbi ficou sem a perna"
    } else if (f == 4) {
        m.innerHTML = "monstro zumbi ficou sem os braços"

    } else if (f == 5) {
        m.innerHTML = "monstro zumbi ficou sem a cabeça"
    }




}