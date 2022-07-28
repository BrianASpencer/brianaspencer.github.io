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

function timeOutButton(obj, key) {
    obj.disabled = true;
    setTimeout(function() {
        if (key === 'killer') {
            fetchKiller();
        } else {
            fetchItem();
        }
        timeOutTime(obj, key);
    }, 800);
}

function timeOutTime(obj, key) {
    setTimeout(function() {
        obj.disabled = false;
        if (key === 'killer') {
            fetchAddons();
        } else {
            fetchItemAddon();
        }
    }, 600);
}

function displayKillerAddons() {
    const list = getKiller();
    var indeces = getIndeces(2, list.length);
    var addons = [list[indeces[0]], list[indeces[1]]];
    var lag = '<div class="eight wide column">';

    var i = 0;
    for (i = 0; i < 2; i++) {
        lag += '<div class="text-center"><h3>' +
        addons[i].name + '</h3>' + '<img class="ui centered small image" src="' + addons[i].image +'">' + '</div>';
    }

    return lag;
}

function letsgoka() {
    var i = 0;
    var arr = ['name: ', 'parentItem: ', 'image: '];
    var a = 'const killerAddons = [\n';
    for(i = 0; i < killerAddons.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = killerAddons[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/addons/' + killerAddons[i].image.substr(index);
            if (j == arr.length-1) { 
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + '\n';
            } else if (j == arr.length-2) {
                a += '\t\t' + arr[j];
                add = '"' + killerAddons[i].parentItem + '"';
                a += add + ',\n';
            }else {
                a += '\t\t' + arr[j];
                add = '"' + killerAddons[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == killerAddons.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

function getKiller() {
    var arr = [];
    var i;
    var cnt = 0;
    for(i = 0; i < killerAddons.length; i++) {
        if (cnt == 2) {
            break;
        }
        if (killerAddons[i].parentItem === killer.item) {
            arr.push(killerAddons[i]);
        }
    }
    
    return arr;
}

function displayKillerBuild(obj) {
    obj.disabled = true;
    displayKiller();
    setTimeout(function() {
        displayKillerAddons();
    }, 50);
    obj.disabled = false;
}

function displaySurvivorBuild(obj) {
    obj.disabled = true;
    displayItem();
    setTimeout(function() {
        displayAddons();
    }, 50);
    obj.disabled = false;
}

function displayKillerPerkss(obj) {
    obj.disabled = true;
    displayKillerPerks();
    obj.disabled = false;;
}

function displaySurvPerkss(obj) {
    obj.disabled = true;
    displaySurvPerks();
    obj.disabled = false;
    /*
    setTimeout(function() {
        obj.disabled = false;
    }, 5000);
    */
}

function displayMapss(obj) {
    obj.disabled = true;
    displayMaps();
    obj.disabled = false;
}