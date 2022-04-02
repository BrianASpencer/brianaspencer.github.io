//const addonSlot = document.getElementById('addonSlot');


function doSomethinggg(arr) {
    var names = ['name: ', 'parentItem: ', 'image: '];
    var output = 'export const killerAddons = [\n';
    
    for (i in arr) {
        var cnt = 0;
        output += '\t{\n';
        for (j in arr[i]) {
            element = '"' + arr[i][j].replaceAll('"', "'") + '"';
            if (j != names.length-1) {
                output += '\t' + names[cnt++] + element + ',\n';
            } else {
                output += '\t' + names[cnt++] + element + '\n';
            }
        }
        if (i != arr.length-1) {
            output += '\t},\n';
        } else {
            output += '\t}\n';
        }
    }
    output += '];\n';
    console.log(output);
}

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

const fetchAddonsss = (bound) => {
    
    const addons = [];

    const url = 'https://dbd-stats.info/api/itemaddons/';
    
    addons.push(fetch(url).then((res) => res.json()));
    
    
    Promise.all(addons).then((results) => {
        buildAddons(results);
    });
    
};

const buildAddons = (arr) => {
    console.log("ARRAY: ", arr);
    arr.forEach(myFunction);
    function myFunction(item) {
        var addons = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            var itemName = item[element].parentItems[0] ? item[element].parentItems[0] : '';
            //var killerItem = killer ? killer[3] : "Rare Candy";
            
            /*
            if (itemName === killerItem && item[element].bloodWeb) {
                addons.push([item[element].displayName, url + item[element].iconPathList[0]]);
            }
            */
            //EInventoryItemType::SlasherPerk
            if (item[element].bloodWeb && (item[element].role == "EPlayerRole::VE_Slasher" || item[element].role == "EPlayerRole::VE_None")) {
                addons.push([item[element].displayName, itemName, url + item[element].iconPathList[0]]);
            }
        }
        console.log('addons: ', addons);
        doSomethinggg(addons);
        
        var indeces = getIndeces(2, addons.length);
        //return displayItemAddons_Old([addons[indeces[0]], addons[indeces[1]]]);
    }
};

const displayItemAddons_Old = (addons) => {
    addonSlot.innerHTML = '';
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
        addons[i][0] + '</h2>' + '<img style="width: 10%; height: 10%;" src="' + addons[i][1] +'">' + '</div></li>';
        addonSlot.innerHTML += lag;
    }
};

function timeOutButton(obj, key) {
    obj.disabled = true;
    console.log('keyey', key);
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
    //letsgoka();
    const list = getKiller();
    //addonSlot.innerHTML = '';
    var indeces = getIndeces(2, list.length);
    var addons = [list[indeces[0]], list[indeces[1]]];
    var lag = '<div class="eight wide column">';
    var i = 0;
    for (i = 0; i < 2; i++) {
        lag += '<div class="text-center"><h3>' +
        addons[i].name + '</h3>' + '<img class="ui centered small image" src="' + addons[i].image +'">' + '</div>';
    }
    //lag +='</div></li>';
    //addonSlot.innerHTML += lag;
    //lag += '</div>'
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
    setTimeout(function() {
        obj.disabled = false;
    }, 350);
}

function displaySurvivorBuild(obj) {
    obj.disabled = true;
    displayItem();
    setTimeout(function() {
        displayAddons();
    }, 50);
    setTimeout(function() {
        obj.disabled = false;
    }, 350);
}

function displayKillerPerkss(obj) {
    obj.disabled = true;
    displayKillerPerks();
    setTimeout(function() {
        obj.disabled = false;
    }, 5000);
}

function displaySurvPerkss(obj) {
    obj.disabled = true;
    displaySurvPerks();
    setTimeout(function() {
        obj.disabled = false;
    }, 5000);
}

function displayMapss(obj) {
    obj.disabled = true;
    displayMaps();
    setTimeout(function() {
        obj.disabled = false;
    }, 5000);
}

//displayKillerAddons();