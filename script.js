let allPokemon = [];
let currentPokemonList = 21;
let increaseList = 0;
isLoading = false;
let scrollPx = 0;


function init() {
    loadHeaderImg();
    loadPokemons();
}


//load the header img from API
async function loadHeaderImg() {
    let url = 'https://pokeapi.co/api/v2/pokemon/25';
    let response = await fetch(url);
    let pikatchu = await response.json();
    let pikatchuImg = pikatchu['sprites']['other']['dream_world']['front_default'];

    document.getElementById('header-img').src = pikatchuImg;
}


//generate 20 Pokemon from API and push into array allPokemon
async function generatePokemon() {
    for (let i = 1 + increaseList; i < currentPokemonList; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
    }
}


//load 20 pokemons from array allPokemon and render them
async function loadPokemons() {
    await generatePokemon();

    for (let i = 0 + increaseList; i < allPokemon.length; i++) {
        let currentPokemon = allPokemon[i];

        let pokemonArea = document.getElementById('pokemon-area');
        pokemonArea.innerHTML += createPokemonCard(currentPokemon, i);
        createTypeOnPokemonCard(currentPokemon, i);
    }
}


//render all pokemon which are already loaded
function renderAllPokemon() {
    let pokemonArea = document.getElementById('pokemon-area');
    pokemonArea.innerHTML = '';

    for (let i = 0; i < allPokemon.length; i++) {
        let currentPokemon = allPokemon[i];

        pokemonArea.innerHTML += createPokemonCard(currentPokemon, i);
        createTypeOnPokemonCard(currentPokemon, i);
    }
    isLoading = false;
}


//create <p> element with the pokemon typ on the pokemon card
function createTypeOnPokemonCard(currentPokemon, i) {
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        let newType = currentPokemon['types'][j];

        let typesArea = document.getElementById(`types-area${i}`);
        typesArea.innerHTML += createTypesArea(newType, i, j);
        checkPokemonType(currentPokemon, j, i);
    }
}


//check if the user is at the end of the page, if yes --> load the next 20 pokemons 
window.onscroll = async function () {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight && !isLoading) {
        isLoading = true;
        currentPokemonList = currentPokemonList + 20;
        increaseList = increaseList + 20;
        await loadPokemons();
        isLoading = false;
    }
}


//hide search icon(pokemon ball) when click into the input field
function hideSearchIcon() {
    document.getElementById('search-icon').classList.add('d-none');
    document.getElementById('overlay-full-side').classList.add('d-flex');
}


//show search icon(pokemon ball) when click outside the input field
function showSearchIcon() {
    document.getElementById('search-icon').classList.remove('d-none');
    document.getElementById('overlay-full-side').classList.remove('d-flex');
}


//filter all pokemons when write a letter or word into the input field
async function filterPokemon() {
    isLoading = true;
    let search = document.getElementById('input').value;
    search = search.toLowerCase();

    scrollPx = document.documentElement.scrollTop;
    let pokemonArea = document.getElementById('pokemon-area');
    pokemonArea.innerHTML = '';

    if (search) {
        for (let i = 0; i < allPokemon.length; i++) {
            let currentPokemon = allPokemon[i];

            if (currentPokemon['name'].toLowerCase().includes(search)) {
                pokemonArea.innerHTML += createPokemonCard(currentPokemon, i);
                createTypeOnPokemonCard(currentPokemon, i);
            }
        }
    }
    if (search.length == 0) {
        renderAllPokemon();
        document.documentElement.scrollTo(0, scrollPx);
    }
}


//open the pokemon card when click on a card
function openPokemonCard(i) {
    scrollPx = document.documentElement.scrollTop;
    document.getElementById('overlay-grey').classList.add('d-flex');
    document.getElementById('full-side').classList.add('hidden-height');
    let overlay = document.getElementById('overlay-grey');
    overlay.innerHTML = '';
    overlay.innerHTML += createBigCard(i);
    createTypeOnBigPokemonCard(i);
    document.getElementById('category1').classList.add('border-bottom');
    prepareAboutCategory(i);
}


//create <p> element with the pokemon typ on the big opened pokemon card
function createTypeOnBigPokemonCard(i) {
    let currentPokemon = allPokemon[i];
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        let newType = currentPokemon['types'][j];

        let bigCardTypes = document.getElementById(`big-card-types${i}`);
        bigCardTypes.innerHTML += createTypeBigCard(newType, i, j);

        checkTypeBigCard(currentPokemon, j, i);
    }
}


//close the big pokemon card when click on the cross or beside the card
function closePokemonCard(i) {
    document.getElementById('overlay-grey').classList.remove('d-flex');
    document.getElementById('full-side').classList.remove('hidden-height');
    document.getElementById(`big-card${i}`).classList.add('d-none');
    document.documentElement.scrollTo(0, scrollPx);
}


//prepare and render the about category and big pokemon card
function prepareAboutCategory(i) {
    document.getElementById('category2').classList.remove('border-bottom');
    document.getElementById('category3').classList.remove('border-bottom');
    document.getElementById('card-category').classList.remove('move-div');
    document.getElementById('category1').classList.add('border-bottom');
    let currentPokemon = allPokemon[i];
    let category = document.getElementById('card-category');
    category.innerHTML = '';
    category.innerHTML += createAboutCategory(currentPokemon, i);
    renderAbilities(currentPokemon);
}


//render abilities in about category at big pokemon card
function renderAbilities(currentPokemon) {
    let abilities = document.getElementById('abilities');
    abilities.innerHTML = '';
    for (let k = 0; k < currentPokemon['abilities'].length; k++) {
        let newAbility = currentPokemon['abilities'][k];

        if (k < currentPokemon['abilities'].length -1) {
            abilities.innerHTML += createAbilities(newAbility);
        } else {
            abilities.innerHTML += createAbilitiesWithoutComma(newAbility);
        }  
    }
}


//prepare and render the stats category and big pokemon card
function prepareStatsCategory(i) {
    document.getElementById('category1').classList.remove('border-bottom');
    document.getElementById('category3').classList.remove('border-bottom');
    document.getElementById('card-category').classList.remove('move-div');
    document.getElementById('category2').classList.add('border-bottom');
    renderStatsCategory(i);
}


function renderStatsCategory(i) {
    let currentPokemon = allPokemon[i];
    let category = document.getElementById('card-category');
    category.innerHTML = '';
    for (let l = 0; l < currentPokemon['stats'].length; l++) {
        let newStat = currentPokemon['stats'][l];

        category.innerHTML += createStatsCategory(newStat, l);
        let statValue = newStat['base_stat'] / 1.5;
        document.getElementById(`progress-bar${l}`).style = `width: ${statValue}%`;
        checkForColor(l);
    }
}


//give the colors to progress bars at about category on big pokemon card
function checkForColor(l) {
    if (l == 0) {
        document.getElementById(`progress-bar${l}`).classList.add('type-grass');
    }
    if (l == 1) {
        document.getElementById(`progress-bar${l}`).classList.add('type-fire');
    }
    if (l == 3) {
        document.getElementById(`progress-bar${l}`).classList.add('type-water');
    }
    if (l == 4) {
        document.getElementById(`progress-bar${l}`).classList.add('type-bug');
    }
    if (l == 5) {
        document.getElementById(`progress-bar${l}`).classList.add('type-poison');
    }
}


//prepare and render the moves category and big pokemon card
function prepareMovesCategory(i) {
    document.getElementById('category1').classList.remove('border-bottom');
    document.getElementById('category2').classList.remove('border-bottom');
    document.getElementById('category3').classList.add('border-bottom');
    document.getElementById('card-category').classList.add('move-div');
    renderMovesCategory(i);
}


function renderMovesCategory(i) {
    let currentPokemon = allPokemon[i];
    let category = document.getElementById('card-category');
    category.innerHTML = '';

    for (let m = 0; m < currentPokemon['moves'].length; m++) {
        let newMove = currentPokemon['moves'][m];

        category.innerHTML += createMovesCategory(newMove, m);
        checkTypeForMove(currentPokemon, m);

    }
}


//show the next pokemon when click on the right arrow on big pokemon card
async function increaseCurrentPokemon(i) {
    i++;
    if (i < allPokemon.length) {
        openPokemonCard(i);
    } else {
        currentPokemonList = currentPokemonList + 20;
        increaseList = increaseList + 20;
        await loadPokemons();
        openPokemonCard(i);
    }
}


//show the previous pokemon when click on the left arrow on big pokemon card
function decreaseCurrentPokemon(i) {
    i--;
    if (i >= 0) {
        openPokemonCard(i);
    } 
    if (i < 0) {
        i = allPokemon.length -1;
        openPokemonCard(i);
    }
}