//const surv = document.getElementById('sPerks');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getIndeces(length, arrLength) {
    var arr = [];
    while(arr.length < length){
        var r = Math.floor(Math.random() * arrLength);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

function displaySurvPerks() {
    var indeces = getIndeces(4, survivorPerks.length);
    var perks = [survivorPerks[indeces[0]], survivorPerks[indeces[1]], survivorPerks[indeces[2]], survivorPerks[indeces[3]]];
    var lag = '<li class="list-group-item list-group-item-primary"><div class="ui two column centered grid">';
    var i = 0;
    for (i = 0; i < 3; i++) {
        if (i % 2 == 0) {
            lag += '<div class="row">';
        }
        lag += '<div class="eight wide column"><h3 class="text-center">' +
        perks[i].name + '</h3>' + '<img class="ui centered small image" src="' + perks[i].image +'"></div>';
        if (i % 2 == 1) {
            lag += '</div>';
        }
    }
    
    var rand = getIndeces(1, exhPerks.length);
    lag += '<div class="eight wide column"><h3 class="text-center">' + exhPerks[rand[0]].name + '<img class="ui centered small image" src="' + exhPerks[rand[0]].image +'"></div></div>'
    lag += '</li></div></div>';
    
    return lag;
}


displaySurvPerks();
