let api_key = 'adaebcb9e821851ba063cc72531a85e7'


fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
    })
    .catch(function(err){
        console.log(err)
    })