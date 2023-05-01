//run different functions for check types of all pokemons for pokemon area
function checkPokemonType(currentPokemon, j, i) {
    checkIfTypeFire(currentPokemon, j, i);
    checkIfTypeGrass(currentPokemon, j, i);
    checkIfTypeWater(currentPokemon, j, i);
    checkIfTypeNormal(currentPokemon, j, i);
    checkIfTypeBug(currentPokemon, j, i);
    checkIfTypePoison(currentPokemon, j, i);
    checkIfTypeElectric(currentPokemon, j, i);
    checkIfTypeGround(currentPokemon, j, i);
    checkIfTypeFairy(currentPokemon, j, i);
    checkIfTypeFighting(currentPokemon, j, i);
    checkIfTypePsychic(currentPokemon, j, i);
    checkIfTypeRock(currentPokemon, j, i);
    checkIfTypeGhost(currentPokemon, j, i);
    checkIfTypeIce(currentPokemon, j, i);
    checkIfTypeDragon(currentPokemon, j, i);
    checkIfTypeDark(currentPokemon, j, i);
    checkIfTypeSteel(currentPokemon, j, i);
}


//check for all types of pokemon --> when find a type, give a specific color to id=`pokemon-card${i}` and id=`type${i}, ${j}`

function checkIfTypeFire(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fire') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-fire');
        document.getElementById(`type${i}, ${j}`).classList.add('type-fire-p');
    }
}


function checkIfTypeGrass(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('grass') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-grass');
        document.getElementById(`type${i}, ${j}`).classList.add('type-grass-p');
    }
}


function checkIfTypeWater(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('water') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-water');
        document.getElementById(`type${i}, ${j}`).classList.add('type-water-p');
    }
}


function checkIfTypeNormal(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('normal') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-normal');
        document.getElementById(`type${i}, ${j}`).classList.add('type-normal-p');
    }
}


function checkIfTypeBug(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('bug') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-bug');
        document.getElementById(`type${i}, ${j}`).classList.add('type-bug-p');
    }
}


function checkIfTypePoison(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('poison') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-poison');
        document.getElementById(`type${i}, ${j}`).classList.add('type-poison-p');
    } 
}


function checkIfTypeElectric(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('electric') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-electric');
        document.getElementById(`type${i}, ${j}`).classList.add('type-electric-p');
    }
}


function checkIfTypeGround(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ground') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-ground');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ground-p');
    } 
}


function checkIfTypeFairy(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fairy') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-fairy');
        document.getElementById(`type${i}, ${j}`).classList.add('type-fairy-p');
    } 
}


function checkIfTypeFighting(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fighting') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-fighting');
        document.getElementById(`type${i}, ${j}`).classList.add('type-fighting-p');
    } 
}


function checkIfTypePsychic(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('psychic') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-normal');
        document.getElementById(`type${i}, ${j}`).classList.add('type-normal-p');
    } 
}


function checkIfTypeRock(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('rock') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-rock');
        document.getElementById(`type${i}, ${j}`).classList.add('type-rock-p');
    } 
}


function checkIfTypeGhost(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ghost') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-ghost');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ghost-p');
    } 
}


function checkIfTypeIce(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ice') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-ice');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ice-p');
    } 
}

function checkIfTypeDragon(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dragon') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-dragon');
        document.getElementById(`type${i}, ${j}`).classList.add('type-dragon-p');
    } 
}


function checkIfTypeDark(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dark') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-ghost');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ghost-p');
    } 
}


function checkIfTypeSteel(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('steel') >= 0) {
        document.getElementById(`pokemon-card${i}`).classList.add('type-rock');
        document.getElementById(`type${i}, ${j}`).classList.add('type-rock-p');
    } 
}


//check type from big opened pokemon card and give the color for big pokemon card
function checkTypeBigCard(currentPokemon, j, i) {
    checkTypeFireBigCard(currentPokemon, j, i);
    checkTypeGrassBigCard(currentPokemon, j, i);
    checkTypeWaterBigCard(currentPokemon, j, i);
    checkTypeNormalBigCard(currentPokemon, j, i);
    checkTypeBugBigCard(currentPokemon, j, i);
    checkTypePoisonBigCard(currentPokemon, j, i);
    checkTypeElectricBigCard(currentPokemon, j, i);
    checkTypeGroundBigCard(currentPokemon, j, i);
    checkTypeFairyBigCard(currentPokemon, j, i);
    checkTypeFightingBigCard(currentPokemon, j, i);
    checkTypePsychicBigCard(currentPokemon, j, i);
    checkTypeRockBigCard(currentPokemon, j, i);
    checkTypeGhostBigCard(currentPokemon, j, i);
    checkTypeIceBigCard(currentPokemon, j, i);
    checkTypeDragonBigCard(currentPokemon, j, i);
    checkTypeDarkBigCard(currentPokemon, j, i);
    checkTypeSteelBigCard(currentPokemon, j, i);
}


//check for all types of pokemon --> when find a type, give a specific color to id big-card-header${i} and type-big-card${i}, ${j}

function checkTypeFireBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fire') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-fire');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-fire-p');
    }
}


function checkTypeGrassBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('grass') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-grass');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-grass-p');
    }
}


function checkTypeWaterBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('water') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-water');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-water-p');
    }
}


function checkTypeNormalBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('normal') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-normal');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-normal-p');
    }
}


function checkTypeBugBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('bug') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-bug');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-bug-p');
    }
}


function checkTypePoisonBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('poison') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-poison');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-poison-p');
    }
}


function checkTypeElectricBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('electric') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-electric');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-electric-p');
    }
}


function checkTypeGroundBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ground') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-ground');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-ground-p');
    }
}


function checkTypeFairyBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fairy') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-fairy');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-fairy-p');
    }
}


function checkTypeFightingBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fighting') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-fighting');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-fighting-p');
    }
}


function checkTypePsychicBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('psychic') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-normal');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-normal-p');
    }
}


function checkTypeRockBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('rock') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-rock');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-rock-p');
    }
}


function checkTypeGhostBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ghost') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-ghost');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-ghost-p');
    }
}


function checkTypeIceBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ice') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-ice');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-ice-p');
    }
}


function checkTypeDragonBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dragon') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-dragon');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-dragon-p');
    }
}


function checkTypeDarkBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dark') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-ghost');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-ghost-p');
    }
}


function checkTypeSteelBigCard(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('steel') >= 0) {
        document.getElementById(`big-card-header${i}`).classList.add('type-rock');
        document.getElementById(`type-big-card${i}, ${j}`).classList.add('type-rock-p');
    }
}


//check type from big opened pokemon card and give the color for the <p> elements in move category at big pokemon card
function checkTypeForMove(currentPokemon, m) {
    checkTypeFireForMove(currentPokemon, m);
    checkTypeGrassForMove(currentPokemon, m);
    checkTypeWaterForMove(currentPokemon, m);
    checkTypeNormalForMove(currentPokemon, m);
    checkTypeBugForMove(currentPokemon, m);
    checkTypePoisonForMove(currentPokemon, m);
    checkTypeElectricForMove(currentPokemon, m);
    checkTypeGroundForMove(currentPokemon, m);
    checkTypeFairyForMove(currentPokemon, m);
    checkTypeFightingForMove(currentPokemon, m);
    checkTypePsychicForMove(currentPokemon, m);
    checkTypeRockForMove(currentPokemon, m);
    checkTypeGhostForMove(currentPokemon, m);
    checkTypeIceForMove(currentPokemon, m);
    checkTypeDragonForMove(currentPokemon, m);
    checkTypeDarkForMove(currentPokemon, m);
    checkTypeSteelForMove(currentPokemon, m);
}


//check for all types of pokemon --> when find a type, give a specific color to id move${m}

function checkTypeFireForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fire') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-fire-p');
    }
}


function checkTypeGrassForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('grass') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-grass-p');
    }
}


function checkTypeWaterForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('water') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-water-p');
    }
}


function checkTypeNormalForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('normal') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-normal-p');
    }
}


function checkTypeBugForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('bug') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-bug-p');
    }
}


function checkTypePoisonForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('poison') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-poison-p');
    }
}


function checkTypeElectricForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('electric') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-electric-p');
    }
}


function checkTypeGroundForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ground') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-ground-p');
    }
}


function checkTypeFairyForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fairy') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-fairy-p');
    }
}


function checkTypeFightingForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fighting') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-fighting-p');
    }
}


function checkTypePsychicForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('psychic') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-normal-p');
    }
}


function checkTypeRockForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('rock') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-rock-p');
    }
}


function checkTypeGhostForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ghost') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-ghost-p');
    }
}


function checkTypeIceForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ice') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-ice-p');
    }
}


function checkTypeDragonForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dragon') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-dragon-p');
    }
}


function checkTypeDarkForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dark') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-ghost-p');
    }
}


function checkTypeSteelForMove(currentPokemon, m) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('steel') >= 0) {
        document.getElementById(`move${m}`).classList.add('type-rock-p');
    }
}