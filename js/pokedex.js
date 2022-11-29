const list = document.querySelector('#pokedexContainer')
for (let index = 1; index < 152; index++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then( (data) => {
        console.log(data)

        let pokemonCard = document.createElement('div');
        if(data.types[1]){
            pokemonCard.className = 'card card-pokedex fonditos d-flex flex-column p-2 bd-highlight justify-content-evenly align-items-center'
            pokemonCard.innerHTML = `
                        <h4 class="card-title texto">${data.id} ${data.name}</h4>
                        <h5 class="card-text texto">${data.types[0].type.name} ${data.types[1].type.name}</h5>
                        <img class="pokemon-img" src=${data.sprites.front_default}>
                    `
        }
        else{
            pokemonCard.className = 'card card-pokedex fonditos d-flex flex-column p-2 bd-highlight justify-content-evenly align-items-center'
            pokemonCard.innerHTML = `
                        <h4 class="card-title texto">${data.id} ${data.name}</h4>
                        <h5 class="card-text texto">${data.types[0].type.name}</h5>
                        <img class="pokemon-img" src=${data.sprites.front_default}>
                    `
            
        }
        list.append(pokemonCard);
        
    })

}

    // data.forEach((pokemon) => {
    //     fetch(`${pokemon.url}`)
    //         .then(resp => resp.json())
    //         .then(creature => console.log(creature))
    //     });


    // fetch('https://pokeapi.co/api/v2/pokemon/')
    // .then((response) => response.json())
    // .then( (data) => {
    //     console.log(data)
    //     data.results.forEach((pokemon) => {

    //         const li = document.createElement('li')
    //         li.innerHTML = `
    //         <h4>${pokemon.name}</h4>
    //         `
    //         list.append(li)
    //     })
        
    // })