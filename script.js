// EXTRA
// Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

window.onload = () => {
    document.querySelector("aside div:last-of-type li:nth-of-type(2)").remove()
}


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

const removePadre = (event) => {
    event.preventDefault()
    document.querySelector(".jumbotron div:first-of-type").remove()

}

document.querySelector(".jumbotron a:first-of-type").addEventListener("click", removePadre)






// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

let autori = document.querySelectorAll(".blog-post-meta a")


for (let i = 0; i < autori.length; i++) {
    autori[i].addEventListener("mouseover", function () {
        alert(autori[i].textContent)
    })
}