let api_key = 'adaebcb9e821851ba063cc72531a85e7'

let queryString = location.search

let data = new URLSearchParams(queryString)

let idGenero = data.get('id')


let nombreGenero = data.get('name')

fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${idGenero}&api_key=${api_key}`)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let detalleGeneroPelis = document.querySelector('.contenido_accion_peliculas')
        let detalleGeneroTitulo = document.querySelector('.titulo_accion')
        detalleGeneroTitulo.innerHTML +=
            `
            <h2>${nombreGenero}</h2>`
        for (i = 0; i < data.results.length; i++){
            
            detalleGeneroPelis.innerHTML +=
            `
            <article class="pelicula_accion 1"> 
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                    <a href="./detallepelicula.html?id=${data.results[i].id}">${data.results[i].title}</a>
                </article>
                
            </section>`
            }
        }
    )
    .catch(function(err){
        console.log(err)
    })

fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${idGenero}&api_key=${api_key}`)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let detalleGeneroPelis = document.querySelector('.contenido_accion_peliculas')

        for (i = 0; i < data.results.length; i++){
            
            detalleGeneroPelis.innerHTML +=
            `
            <article class="pelicula_accion 1"> 
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                    <a href="./detalleserie.html?id=${data.results[i].id}">${data.results[i].name}</a>
                </article>
                
            </section>`
            }
        }
    )
    .catch(function(err){
        console.log(err)
    })

