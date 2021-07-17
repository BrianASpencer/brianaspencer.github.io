//const itemAddonSlot = document.getElementById('itemAddonSlot');


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

const fetchItemAddon = (bound) => {
    
    const addons = [];

    //const url = 'https://dbd-stats.info/api/items/';
    const url = 'https://dbd-stats.info/api/itemaddons/';
    
    addons.push(fetch(url).then((res) => res.json()));
    
    Promise.all(addons).then((results) => {
        buildItemAddons(results);
    });
    
};

const buildItemAddons = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var addons = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            var i = 0;
            for (i = 0; i < 1; i++) {
                var itemName = item[element].parentItems[i] ? item[element].parentItems[i] : '';
                var parentItem = sItem ? sItem[3] : "Rare Candy";
                
                /*
                if (itemName === parentItem && item[element].bloodWeb && item[element].role === 'EPlayerRole::VE_Camper') {
                    addons.push([item[element].displayName, url + item[element].iconPathList[0]]);
                }
                */
                if (item[element].role === 'EPlayerRole::VE_Camper') {
                    addons.push([item[element].displayName, url + item[element].iconPathList[0], item[element].parentItems]);
                }
            }
        }
        doSomething(addons);
        var indeces = getIndeces(2, addons.length);
        var alt = [['No Addon Available', ''], ['No Addon Available', '']];
        return displayAddons(addons.length ? [addons[indeces[0]], addons[indeces[1]]] : alt);
    }
};

const displayAddons_old = (addons) => {
    itemAddonSlot.innerHTML = '';
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-primary"><div class="text-center"><h2>' +
        addons[i][0] + '</h2>' + '<img class="ui centered tiny image" src="' + addons[i][1] +'">' + '</div></li>';
        itemAddonSlot.innerHTML += lag;
    }
};

function timeOutButton_2(obj) {
    obj.disabled = true;
    setTimeout(function() {
        fetchItem();
        timeOutTime_2(obj);
    }, 800);
}

function timeOutTime_2(obj) {
    setTimeout(function() {
        obj.disabled = false;
        fetchItemAddon();
    }, 600);
}


function displayAddons() {
    //itemAddonSlot.innerHTML = '';
    //letsgoia();
    var items = getItem();
    var indeces = getIndeces(2, items.length);
    var addons = [items[indeces[0]], items[indeces[1]]];
    var lag = '<div class="eight wide column">';
    var i = 0;
    for (i = 0; i < 2; i++) {
        lag += '<div class="text-center"><h3>' +
        addons[i].name + '</h3>' + '<img class="ui centered small image" src="' + addons[i].image +'">' + '</div>';
    }
    //lag += '</div>';
    return lag;
}

function letsgoia() {
    var i = 0;
    var arr = ['name: ', 'image: ', 'parentItem: [\n'];
    var a = 'const survItemAddons = [\n';
    for(i = 0; i < survItemAddons.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = survItemAddons[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/addons/' + survItemAddons[i].image.substr(index);
            if (j == arr.length-1) { 
                add = '';
                // another for loop for array of parent items
                a += '\t\t' + arr[j];
                for(k = 0; k < survItemAddons[i].parentItem.length; k++) {
                    if (k == survItemAddons[i].parentItem.length - 1) {
                        add += '\t\t\t"' + survItemAddons[i].parentItem[k] + '"]';
                    } else {
                        add += '\t\t\t"' + survItemAddons[i].parentItem[k] + '",\n';
                    }
                }
                a += add + '\n';
            } else if (j == arr.length-2) {
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + ',\n';
            }else {
                a += '\t\t' + arr[j];
                add = '"' + survItemAddons[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == survItemAddons.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

function getItemsss() {
    var arr = [];
    var i;
    var cnt = 0;
    for(i = 0; i < survItemAddons.length; i++) {
        var j;
        for(j = 0; j < survItemAddons[i].parentItem.length; j++) {
            if (cnt == 2) {
                break;
            }
            if (survItemAddons[i].parentItem === sItem.id) {
                arr.push(survItemAddons[i]);
                cnt++;
            }
        }
    }
    
    return arr;
}

function getItem() {
    //letsgoia();
    var arr = [];
    var i;
    var cnt = 0;
    for(i = 0; i < survItemAddons.length; i++) {
        var j;
        for(j = 0; j < survItemAddons[i].parentItem.length; j++) {
            if (survItemAddons[i].parentItem[j] === sItem.id) {
                arr.push(survItemAddons[i]);
                cnt++;
            }
        }
    }
    
    return arr;
}

function doSomething(arr) {
    var names = ['name: ', 'image: ', 'parentItem: '];
    var output = 'export const survItemAddons = [\n';
    for (i in arr) {
        var cnt = 0;
        output += '\t{\n';
        for (j in arr[i]) {
            var element = '';
            if (j != arr[i].length - 1) {
                element += '"' + arr[i][j].replaceAll('"', "'") + '"';
            } else {
                element += '[\n';
                var h;
                for(h = 0; h < arr[i][j].length; h++) {
                    if (h != arr[i][j].length - 1) {
                        element += '\t\t"' + arr[i][j][h].replaceAll('"', "'") + '",\n';
                    } else {
                        element += '\t\t"' + arr[i][j][h].replaceAll('"', "'") + '"]';
                    }
                }
            }
            if (j != names.length-1) {
                output += '\t' + names[cnt++] + element + ',\n';
            } else {
                output += '\t' + names[cnt++] + element + ',\n';
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

//displayAddons();