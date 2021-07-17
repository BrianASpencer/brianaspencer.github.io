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

const fetchPerks = (bound) => {
    
    const promises = [];
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/perks/';
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        buildPerks(results);
    });
};

const buildPerks = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var sPerks = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if ((item[element].type === "EInventoryItemType::CamperPerk") && item[element].bloodWeb) {
                sPerks.push([item[element].displayName, item[element].perkDefaultDescription, url + item[element].iconPathList[0]]);
            }
        }
        doSomething(sPerks);
        var sIndeces = getIndeces(4, sPerks.length);
        return displaySurvPerks([sPerks[sIndeces[0]], sPerks[sIndeces[1]], sPerks[sIndeces[2]], sPerks[sIndeces[3]]]);
    }
};

const displaySurvPerks_Old = (disPerks) => {
    surv.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
       var lag = '<li class="list-group-item list-group-item-primary"><h2 class="text-center">' +
        disPerks[i][0] + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div>' + '</li>';
        surv.innerHTML += lag;
    }
};

function displaySurvPerks() {
    //letsgosp();
    //surv.innerHTML = '';
    var indeces = getIndeces(4, survivorPerks.length);
    var perks = [survivorPerks[indeces[0]], survivorPerks[indeces[1]], survivorPerks[indeces[2]], survivorPerks[indeces[3]]];
    var lag = '<li class="list-group-item list-group-item-primary"><div class="ui two column centered grid">';
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
    lag += '</li></div></div>';
    return lag;
    //surv.innerHTML += lag;
}

function letsgosp() {
    var i = 0;
    var arr = ['name: ', 'image: '];
    var a = 'const survivorPerks = [\n';
    for(i = 0; i < survivorPerks.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = survivorPerks[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/perks/' + survivorPerks[i].image.substr(index);
            if (j == arr.length-1) { 
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + '\n';
            } else {
                a += '\t\t' + arr[j];
                add = '"' + survivorPerks[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == survivorPerks.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

displaySurvPerks();
