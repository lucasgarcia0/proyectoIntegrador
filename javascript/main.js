let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let nameABuscar = queryStringObj.get('busqueda')

let key = 2992d4efe55fd968244eb4c50ed5129d

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${busqueda}`)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
