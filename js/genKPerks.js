//const kill = document.getElementById('kPerks');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getIndeces(length, arrLength) {
    var arr = [];
    while(arr.length < length){
        var r = Math.floor(Math.random() * arrLength);
        if(arr.indexOf(r) === -1) {
            arr.push(r);
        }
    }
    return arr;
}


function displayKillerPerks() {
    var index = getIndeces(1, slowPerks.length);
    var slowPerk = slowPerks[index];
    
    index = getIndeces(1, infoPerks.length);
    var infoPerk = infoPerks[index];
    
    index = getIndeces(1, chasePerks.length);
    var chasePerk = chasePerks[index];
    
    var sIndeces = getIndeces(1, killerPerks.length);
    var perks = [killerPerks[sIndeces[0]], slowPerk, infoPerk, chasePerk];
    var lag = '<li class="list-group-item list-group-item-danger"><div class="ui two column centered grid">';
    var i = 0;
    for (i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            lag += '<div class="row">';
        }
        lag += '<div class="eight wide column"><h3 class="text-center">' +
        perks[i].name + '</h3>' + '<img class="ui centered small image" src="' + perks[i].image +'"></div>';
        if (i % 2 == 1) {
            lag += '</div>';
        }
    }
    
    lag +='</li></div></div>';
    
    return lag;
}

displayKillerPerks();