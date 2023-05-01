function createPokemonCard(currentPokemon, i) {
    return /*html*/ `
        <div id="pokemon-card${i}" class="pokemon-card" onclick="openPokemonCard(${i})">
            <div class="headline-id">
                <h1 class="pokemon-names" id="pokemon-name">${currentPokemon['name']}</h1>
                <p>#${currentPokemon['id']}</p>
            </div>
            <div class="type-img">
                <div id="types-area${i}">

                </div>
                <img class="pokemon-img" id="pokemon-img" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}">
            </div>
        </div>
    `;
}


function createTypesArea(newType, i, j) {
    return /*html*/ `
        <p id="type${i}, ${j}" class="type">${newType['type']['name']}</p>
    `;
}


function createBigCard(i) {
    let currentPokemon = allPokemon[i];
    return /*html*/ `
        <div class="overlay-big-card" onclick="closePokemonCard(${i})"></div>
        <div class="big-card" id="big-card${i}">
        <div class="card-height">
            <div class="big-card-header" id="big-card-header${i}">
                <div class="x-mark-div">
                    <img onclick="closePokemonCard(${i})" src="img/x-mark.png">
                </div>
                <div class="headline-big-card">
                    <h1 class="pokemon-names" id="pokemon-name">${currentPokemon['name']}</h1>
                    <p>#${currentPokemon['id']}</p>
                </div>
                <div class="big-card-types" id="big-card-types${i}">

                </div>
                <div class="big-card-img-div">
                    <img onclick="decreaseCurrentPokemon(${i})" class="arrow" src="img/arrow-left.png">
                    <img class="pokemon-img-big-card" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}">
                    <img onclick="increaseCurrentPokemon(${i})" class="arrow" src="img/arrow-right.png">
                </div> 
            </div>

            <div class="big-card-bottom">
                <div class="container-categories">
                    <div class="categories">
                        <p id="category1" class="category category1" onclick="prepareAboutCategory(${i})">About</p>
                        <p id="category2" class="category" onclick="prepareStatsCategory(${i})">Base Stats</p>
                        <p id="category3" class="category" onclick="prepareMovesCategory(${i})">Moves</p>
                    </div>
                    <div class="card-category" id="card-category">
                        <div class="category-about">
                            <div class="attribute">
                                <p class="attribute-first">Height:</p>
                                <p class="attribute-second">${(currentPokemon['height'] / 10).toFixed(1).replaceAll(".", ",")} m</p>
                            </div>
                            <div class="attribute">
                                <p class="attribute-first">Weight:</p>
                                <p class="attribute-second">${(currentPokemon['weight'] / 10).toFixed(1).replaceAll(".", ",")} kg</p>
                            </div>
                            <div class="attribute">
                                <p class="attribute-first">Abilities:</p>
                                <p class="attribute-second" id="abilities"></p>
                            </div>
                            <div class="attribute">
                                <p class="attribute-first">Base Experience:</p>
                                <p class="attribute-second">${currentPokemon['base_experience']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `;
}


function createTypeBigCard(newType, i, j) {
    return /*html*/ `
        <p id="type-big-card${i}, ${j}" class="type margin-type">${newType['type']['name']}</p>
    `;
}


function createAboutCategory(currentPokemon, i) {
    return /*html*/ `
        <div class="category-about">
            <div class="attribute">
                <p class="attribute-first">Height:</p>
                <p class="attribute-second">${(currentPokemon['height'] / 10).toFixed(1).replaceAll(".", ",")} m</p>
            </div>
            <hr class="line">
            <div class="attribute">
                <p class="attribute-first">Weight:</p>
                <p class="attribute-second">${(currentPokemon['weight'] / 10).toFixed(1).replaceAll(".", ",")} kg</p>
            </div>
            <hr class="line">
            <div class="attribute">
                <p class="attribute-first">Abilities:</p>
                <p class="attribute-second" id="abilities"></p>
            </div>
            <hr class="line">
            <div class="attribute">
                <p class="attribute-first">Base Experience:</p>
                <p class="attribute-second">${currentPokemon['base_experience']}</p>
            </div>
            <hr class="line">
        </div>
    `;
}


function createAbilities(newAbility) {
    return /*html*/ `
        ${newAbility['ability']['name']},
    `;
}


function createAbilitiesWithoutComma(newAbility) {
    return /*html*/ `
        ${newAbility['ability']['name']}
    `;
}


function createStatsCategory(newStat, l) {
    return /*html*/ `
        <div class="attribute-stats">
            <p class="attribute-first-stats">${newStat['stat']['name'].charAt(0).toUpperCase() + newStat['stat']['name'].slice(1)}</p>
            <div class="div-progress-bar">
                <div class="progress-bar" id="progress-bar${l}" style="width:0%">
                    ${newStat['base_stat']}
                </div>
            </div>
        </div>
    `;
}


function createMovesCategory(newMove, m) {
    return /*html*/ `
        <p class="move" id="move${m}">${newMove['move']['name']}</p>
    `;
}