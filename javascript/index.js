let api_key = 'adaebcb9e821851ba063cc72531a85e7'




fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let infor = data.results
        let popularMoviesContainer = document.querySelector(".padre-lomasvistopeliculas")
        console.log(infor)
        for(let i = 0; i < infor.length; i++){
            popularMoviesContainer.innerHTML+= `
                <div class="pelicula">
                    <a href="detallepelicula.html?id=${infor[i].id}">${infor[i].title}</a>
                    <img src="https://image.tmdb.org/t/p/w500/${infor[i].poster_path}">
                    <p>Estreno: ${infor[i].release_date}</p>
                </div>
            `
        }
    })
    .catch(function(err){
        console.log(err)
    })


fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`
    )
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let inform = data.results
        let popularSeriesContainer = document.querySelector(".padre-lomasvistoseries")
        console.log(inform)
        for(let i = 0; i < inform.length; i++){
            popularSeriesContainer.innerHTML+= `
                <div class="serie">
                    <a href="detallepelicula.html?id=${inform[i].id}">${inform[i].name}</a>
                    <img src="https://image.tmdb.org/t/p/w500/${inform[i].poster_path}">
                    <p>Estreno: ${inform[i].first_air_date}</p>
                </div>
                `
        }
    })
    .catch(function(err){
        console.log(err)
    })

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)

    .then(function(response){
        return response.json()
    })
    .then(function(data){

        let info = data.results
        let topRatedContainer = document.querySelector(".padre-masvaloradas")
        console.log(info)
        for(let i = 0; i < info.length; i++){
            topRatedContainer.innerHTML+= `
                <div class="serie">
                    <a href="detallepelicula.html?id=${info[i].id}">${info[i].title}</a>
                    <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}">
                    <p>Estreno: ${info[i].release_date}</p>
                </div>
            `
        }
    })
    .catch(function(err){
        console.log(err)
    })
