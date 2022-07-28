const mapSlot = document.getElementById('maps');

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

function displayMaps() {
    mapSlot.innerHTML = '';
    var indeces = getIndeces(2, maps.length);
    var mapList = [maps[indeces[0]], maps[indeces[1]], maps[indeces[2]], maps[indeces[3]]];
    var lag = '<li class="list-group-item list-group-item-danger"><div class="row">';
    var i = 0;
    for (i = 0; i < 2; i++) {
        lag += '<div class="column" style="width:48%"><div class="text-center"><h2>' +
        mapList[i].name + '</h2>' + '<img class="img-fluid" style="width: 100%;" src="' + mapList[i].image +'"></div></div>';
    }
    lag +='</div></li>';
    mapSlot.innerHTML += lag;
}

displayMaps();