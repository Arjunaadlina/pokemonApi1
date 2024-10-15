const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=20';
const pokemonContainer = document.getElementById('pokemon-container');

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const pokemons = data.results;
        pokemons.forEach(pokemon => {
            fetchPokemonDetails(pokemon.url);
        });
    });

function fetchPokemonDetails(url) {
    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            displayPokemon(pokemon);
        });
}

function displayPokemon(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('col-2', 'pokemon-card', 'g-4');

    pokemonCard.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-image">
        <h3 class="mt-3">${pokemon.name}</h3>
        <p>Height: ${pokemon.height} | Weight: ${pokemon.weight}</p>
    `;
    pokemonContainer.appendChild(pokemonCard);
}