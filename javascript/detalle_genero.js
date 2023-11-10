let api_key = 'adaebcb9e821851ba063cc72531a85e7'

fetch(``)

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

    })
    .catch(function(err){
        console.log(err)
    })