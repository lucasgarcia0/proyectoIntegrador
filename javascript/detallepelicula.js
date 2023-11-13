let api_key = 'adaebcb9e821851ba063cc72531a85e7'

let string = location.search
let data = new URLSearchParams(string)

let ID = data.get("id")


fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=${api_key}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        



        
    })
    .catch(function(err){
        console.log(err)
    })