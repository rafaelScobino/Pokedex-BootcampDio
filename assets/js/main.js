// const pokemonList = document.getElementById('pokemonList')
// const loadMoreButton = document.getElementById('loadMoreButton')

// const maxRecords = 151
// const limit = 10
// let offset = 0;

// function convertPokemonToLi(pokemon) {
//     return `
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>

//                 <img src="${pokemon.photo}"
//                      alt="${pokemon.name}">
//             </div>
//         </li>
//     `
// }

// function loadPokemonItens(offset, limit) {
//     pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
//         const newHtml = pokemons.map(convertPokemonToLi).join('')
//         pokemonList.innerHTML += newHtml
//     })
// }

// loadPokemonItens(offset, limit)

// loadMoreButton.addEventListener('click', () => {
//     offset += limit
//     const qtdRecordsWithNexPage = offset + limit

//     if (qtdRecordsWithNexPage >= maxRecords) {
//         const newLimit = maxRecords - offset
//         loadPokemonItens(offset, newLimit)

//         loadMoreButton.parentElement.removeChild(loadMoreButton)
//     } else {
//         loadPokemonItens(offset, limit)
//     }
// })

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon grass">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type grass">grass</li>
                    <li class="type poison">poison</li>
                </ol> 

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeAPI.getPokemons().then((pokemons) => {
     for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon) 
    }
})



