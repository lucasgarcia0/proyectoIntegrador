let api_key = 'adaebcb9e821851ba063cc72531a85e7'

let string = location.search
let data = new URLSearchParams(string)

let ID = data.get("id")


fetch(`https://api.themoviedb.org/3/tv/${ID}?api_key=${api_key}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let nombreSerie = document.querySelector(".detalle_serie_friends")
        nombreSerie.innerHTML +=
        `<div class="titulo_portada_friends">
            <article class="titulo_friends">
                <h2> ${data.original_name} </h2>
            </article>
            <article class="portada_friends">
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
            </article>
        </div>
        <article class="informacion_friends">
            <p> Rating: ${data.vote_average}</p>
            <p> Fecha de estreno: ${data.first_air_date}</p>
            <p> Sinopsis: ${data.overview}</p>
            <a href="./detalle_genero.html?genres=${data.genres[0].name}"> Genero: ${data.genres[0].name}</a>
                <div class="boton_favoritos_friends">
                    <a href="./favorite.html"> Favoritos:</a>
                    <input type="checkbox" name="favoritos" value=""> 
                </div>
        </article>`
        
    })
    .catch(function(err){
        console.log(err)
    })