let api_key = 'adaebcb9e821851ba063cc72531a85e7'

let string = location.search
let data = new URLSearchParams(string)

let ID = data.get("id")


fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=${api_key}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let nombrePelicula = document.querySelector(".titulo_portada_spiderman")
        nombrePelicula.innerHTML +=
                `<article class="titulo_spiderman">
                    <h2> ${data.title}</h2>
                </article>
                <article class="portada_spiderman">
                    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
                </article>`




    })
    .catch(function(err){
        console.log(err)
    })