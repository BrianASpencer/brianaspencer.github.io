const killerSlot = document.getElementById('killerSlot');
var killer;

/*
* TODO:
* Implement new killers (twins and blight)
* Update when new clown changes happen
* Remove description of perks?
* Add Huntresses' addons
* remove all banned perks from each side
* remove banned maps from each side
* remove all banned addons
* FREEZE ISSUE: https://stackoverflow.com/questions/15973089/javascript-settimeout-and-interface-freezing
* POSSIBLY: 
* Put gen killer/addons // item/addons together in one actual function to
* generate them as a grid similar to how perks are generated
*/

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

const fetchKiller = (bound) => {
    killer = [];
    const characters = [];
    
    const url = 'https://dbd-stats.info/api/characters';
    
    characters.push(fetch(url).then((res) => res.json()));
    
    Promise.all(characters).then((results) => {
        buildKiller(results);
    });

};


const buildKiller = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var killers = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if (item[element].role === "EPlayerRole::VE_Slasher") {
                killers.push([item[element].displayName, item[element].biography, url + item[element].iconPath, item[element].defaultItem]);
            }
        }
        
        var index = getRandomInt(killers.length);
        killer = killers[index];
        return displayKiller(killer);
    }
};

const displayKiller_Old = (killer) => {
    killerSlot.innerHTML = '';
    var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
    killer[0] + '</h2>' + '<img style="width: 20%; height: 20%;" src="' + killer[2] +'">' + '<div>' + killer[1].replace(/<(.|\n)*?>/g, '') + '</div></div></li>';
    killerSlot.innerHTML += lag;
};

function displayKiller() {
    //letsgokp();
    killerSlot.innerHTML = '';
    var index = getRandomInt(killers.length);
    killer = killers[index];
    var lag = '<li class="list-group-item list-group-item-danger"><div class="ui two column centered grid"><div class="row"><div class="eight wide column"><h2 class="text-center">' +
    killer.name + '</h2>' + '<img class="ui centered small image" src="' +killer.image +'">' + '</div>';
    lag += displayKillerAddons();
    lag += '</div></li>';
    lag += displayKillerPerks();
    //console.log('killer', lag);
    killerSlot.innerHTML += lag;
}

function letsgokp() {
    var i = 0;
    var arr = ['name: ', 'image: ', 'item: '];
    var a = 'const killers = [\n';
    for(i = 0; i < killers.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = killers[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/perks/' + killers[i].image.substr(index);
            if (j == arr.length-1) {
                a += '\t\t' + arr[j];
                add = '"' + killers[i].item + '"';
                a += add + '\n';
            } else if (j == arr.length-2) { 
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + ',\n';
            } else {
                a += '\t\t' + arr[j];
                add = '"' + killers[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == killers.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

displayKiller();