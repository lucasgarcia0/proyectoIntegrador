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
                <p> Sinopsis: Peter Parker (Tobey Maguire) y M.J. (Kirsten Dunst) parecen estar finalmente en el camino correcto en su complicada relación, pero se avecinan problemas para el superhéroe y su amante. El traje de Spider-Man de Peter se vuelve negro y toma el control de él, no solo dándole a Peter un mayor poder sino también sacando a relucir el lado oscuro de su personalidad. Peter debe superar la influencia del traje mientras dos supervillanos, Sandman y Venom, se levantan para destruirlo a él y a todos sus seres queridos.</p>
                <a href="./detalle_genero.html"> Genero: Acción</a>
                    <div class="boton_favoritos_spiderman">
                        <a href="./favorite.html"> Favoritos: </a>
                        <input type="checkbox" name="favoritos" value=""> 
                    </div>

            </article> `
        




    })
    .catch(function(err){
        console.log(err)
    })