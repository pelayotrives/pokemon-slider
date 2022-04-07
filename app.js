let count = 1;

function seePokemon() {
let pokeBlock = document.getElementById("pokemon");
pokeBlock.innerHTML = `<img class="pokemonImages" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" alt="Random Pokemon">`
}

let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

previousButton.onclick = function() {
    if (count > 1) {
        count -= 1;
        seePokemon();
    } else {
        alert("Click right button to see more Pokemon.");
    }
}

nextButton.onclick = function() {
    if (count < 650) {
        count += 1;
        seePokemon();
    } else if (count === 650) {
        alert("No Pokemon left.");
    }
}

seePokemon();