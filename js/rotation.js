const form = document.forms[0];

const rotationSlot = document.getElementById('rotationSlot');


form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (window.names === undefined) {
        window.names = [];
    }
    var formData = new FormData(this);
    var players = [];
    for (const formElement of formData) {
        players.push(formElement[1]);
    }
    shuffle(players);
    if (newNames(players)) {
        window.names = [];
        players.forEach(player => window.names.push(player));
    }
    displayRotation();
});


function displayRotation() {
    rotationSlot.innerHTML = '';
    var lag = '<div class="ui inverted divider"></div><button class="ui inverted grey button" onclick="rotatePlayers(this);" data-position="top center"><h4>Rotate</h4></button>';
    lag += '<div class="ui placeholder segment"><div class="ui two column grid"><div class="column" style="margin: auto"><h2>' + window.names[0]+'</h2><img class="small image"  src="../../images/DbD/killer.png"></div><div class="column">';
    for(let i = 1; i < window.names.length; i++) {
        lag += '<div class="row"><h2 style="margin: auto; margin-right: 5%; margin-left: 25%;">'+window.names[i]+'</h2><img class="tiny image" src="../../images/DbD/survivor.png"></div><br>';
    }
    rotationSlot.innerHTML += '</div>'+lag+'</div></div><div class="ui vertical divider">VS</div></div>';
}

function newNames(players) {
    //window.names.includes(players[0])'
    var cnt = 0;
    players.forEach(player => !window.names.includes(player) ? cnt++ : '');
    return cnt > 0;
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function rotatePlayers() {
    for(var i=0; i < window.names.length-1; i++){
        window.names.splice(0, 0, window.names.pop());
    }
    displayRotation();
}
