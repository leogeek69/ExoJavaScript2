function afficherCV(){
    const div = document.createElement("div");
    div.id = "cv"
    document.body.appendChild(div)

    const h1 = document.createElement("h1")
    h1.id = "title"
    h1.innerHTML = "Titre super"
    div.appendChild(h1)

    const h2 = document.createElement("h2")
    h2.id = "subtitle"
    h2.innerHTML = "c'est mon h2"
    div.appendChild(h2)
}
afficherCV();
    