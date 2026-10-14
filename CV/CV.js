fetch("profil.json")
    .then(reponse => reponse.json())
    .then(donnee => {
        afficherCV(donnee)
    })
    .catch(error =>{
        console.error("pas bon", error);
    });

fetch("https://api.github.com/users/leogeek69")
    .then(reponse => reponse.json())
    .then(donnee => {
        afficherCV(donnee)
    })
    .catch(error =>{
        console.error("pas bon", error);
    });

function afficherCV(profil){
    const div = document.createElement("div");
    div.id = "cv"
    document.body.appendChild(div)

    const h1 = document.createElement("h1")
    h1.id = "title"
    h1.innerHTML = profil.nom
    div.appendChild(h1)

    const h2 = document.createElement("h2")
    h2.id = "subtitle"
    h2.innerHTML = profil.poste
    div.appendChild(h2)

    const divprofile = document.createElement("div");
    divprofile.id = "profile"
    div.appendChild(divprofile)
    divprofile.innerHTML = "profile"

    const divinfos = document.createElement("div");
    divinfos.id = "infos"
    div.appendChild(divinfos)
    divinfos.innerHTML = "infos"

    const divsummary = document.createElement("div");
    divsummary.id = "summary"
    div.appendChild(divsummary)
    divsummary.innerHTML = "summary"

    const ul = document.createElement("ul")
    ul.id = "competences"
    div.appendChild(ul)

    profil.competences.forEach(competence => {
        const li = document.createElement("li")
        ul.appendChild(li)
        li.innerHTML = competence
    });
}