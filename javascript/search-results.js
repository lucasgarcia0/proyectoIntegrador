
let api_key = 'adaebcb9e821851ba063cc72531a85e7'

let queryString = location.search

let busqueda = new URLSearchParams(queryString)

let nameABuscar = busqueda.get('busqueda')

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${nameABuscar}`)
.then(function(response){
    return response.json()
})
.then(function(data){
        console.log(data)
        let listaPeliculas = data.results
        let nombrePelicula = document.querySelector('.coincidenciaSpider')
        let resultadosSimilares = document.querySelector('.resBusqueda')
        let busquedasSimilares = document.querySelector('.resBusquedas')
        let pelisRel = document.querySelector('.busqRelacionadas')
        let busqSimil = ''
        let pelicula = ''
        let similares = ''
        let pelisRelacionadas = ''

        pelicula += 
        `<article class="coinc un">
            <a href="detallepelicula.html?id=${listaPeliculas[0].id}" class="nombrePelicula">${listaPeliculas[0].title}</a>
            <img class= FavFotoSpider src="https://image.tmdb.org/t/p/w500/${listaPeliculas[0].poster_path}">
        </article>`
        nombrePelicula.innerHTML = pelicula
        similares +=
        `<h4>Resultados similares a tu busqueda: '${nameABuscar}':</h4>`
        resultadosSimilares.innerHTML = similares
        busqSimil +=
        `<h4>Coincidencias a tu busqueda: '${nameABuscar}'</h4>`
        busquedasSimilares.innerHTML = busqSimil
            
        for (i = 1; i < listaPeliculas.length; i++){
            pelisRelacionadas +=
                `<article class="relac un">
                    <a href="detalle-pelicula.html?id=${listaPeliculas[i].id}">${listaPeliculas[i].title}</a>
                    <img src=" https://image.tmdb.org/t/p/w500/${listaPeliculas[i].poster_path}">
                </article>`
            pelisRel.innerHTML = pelisRelacionadas
        }
         }

)
.catch(function(err){
    console.log(err)
})