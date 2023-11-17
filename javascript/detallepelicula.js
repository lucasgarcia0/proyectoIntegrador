let api_key = 'adaebcb9e821851ba063cc72531a85e7'

let string = location.search
let data = new URLSearchParams(string)

let ID = data.get("id")


fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=${api_key}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)

        let nombrePelicula = document.querySelector(".detalle_pelicula_spiderman")
        nombrePelicula.innerHTML +=
            `<div class="titulo_portada_spiderman">
                    <article class="titulo_spiderman">
                        <h2> ${data.title}</h2>
                    </article>
                    <article class="portada_spiderman">
                        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
                    </article>
                </div>
                <article class="informacion_spiderman">
                <p> Rating: ${data.vote_average}</p>
                <p> Fecha de estreno: ${data.release_date}</p>
                <p> Duracion: ${data.runtime} minutos </p>
                <p> Sinopsis: ${data.overview}</p>
                <a href="./detalle_genero.html?name=${data.genres[0].name}&id=${data.genres[0].id}"> Genero: ${data.genres[0].name}</a>
                    <div class="boton_favoritos_spiderman">
                        <a href="./favorite.html"> Favoritos: </a>
                        <input type="checkbox" name="favoritos" value=""> 
                    </div>

            </article> `
        
        fetch(`https://api.themoviedb.org/3/movie/${ID}/reviews?api_key=${api_key}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                let reviews = document.querySelector(".informacion_spiderman")
                if (data.results.length > 0){
                    reviews.innerHTML += `<h4>Reviews</h4>`
                    for (let i = 0; i < data.results.length; i++) {
                        reviews.innerHTML += `
                        <p class="text_review">${data.results[i].author}: ${data.results[i].content}</p>
                        `
                    }
                }
                else if (data.results.length == 0){
                    reviews.innerHTML += `No hay reviews disponibles`
                }
            })
            .catch(function (err) {
                console.log(err)
            })
        
        fetch(`https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${api_key}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                if (data.results.length > 0) {
                    let trailerVideo = document.querySelector(".titulo_portada_spiderman")
                    trailerVideo.innerHTML += `<h2 class="text_trailers">Trailer</h2>`

                    trailerVideo.innerHTML += `
                        <iframe width="380" height="220" src="https://www.youtube.com/embed/${data.results[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            `
                    trailerVideo.innerHTML += `<h2 class="text_trailers">Otros trailers y videos</h2>`
                    for (let i = 1; i < data.results.length; i++) {


                        trailerVideo.innerHTML += `
                        <iframe width="380" height="220" src="https://www.youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            `
                    }
                }
                else if (data.results.length == 0) {
                    let trailerVideo = document.querySelector(".titulo_portada_spiderman")
                    trailerVideo.innerHTML += `<h2>No hay trailers disponibles</h2>`
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    })