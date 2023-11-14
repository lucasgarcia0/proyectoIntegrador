let api_key = 'adaebcb9e821851ba063cc72531a85e7'

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let generos = data.genres
        let nombreGeneros = document.querySelector('.nombre_generos')
        let tituloGeneros = ''
        for (i = 0; i < generos.length; i++){
            tituloGeneros +=
            `<article class= "nombre-informacion_genero">
                <a href="./detalle_genero.html?id=${generos[i].id}">${generos[i].name}</a>
            </article>`
            nombreGeneros.innerHTML = tituloGeneros
        }
    })
    .catch(function(err){
        console.log(err)
    })

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let generosSeries = data.genres
        let nombreGenerosSeries = document.querySelector('.nombre_generos_series')
        let tituloGenerosSeries = ''
        for (i = 0; i < generosSeries.length; i++){
            tituloGenerosSeries +=
            `<article class= "nombre-informacion_genero">
                <a href="./detalle_genero.html?id=${generosSeries[i].id}">${generosSeries[i].name}</a>
            </article>`
            nombreGenerosSeries.innerHTML = tituloGenerosSeries
        }
    })
    .catch(function(err){
        console.log(err)
    })