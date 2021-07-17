const itemSLot = document.getElementById('itemSlot');
var sItem;

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

const fetchItem = (bound) => {
    sItem  = [];
    const itemList = [];
    
    const url = 'https://dbd-stats.info/api/items';
    
    itemList.push(fetch(url).then((res) => res.json()));
    
    Promise.all(itemList).then((results) => {
        buildItem(results);
    });
};


const buildItem = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var items = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            
            if (item[element].role === "EPlayerRole::VE_Camper" && item[element].bloodWeb && item[element].rarity !== "EItemRarity::SpecialEvent") {
                items.push([item[element].displayName, item[element].description, url + item[element].iconPathList[0],
                           item[element].id]);
            }

        }
        
        var index = getRandomInt(items.length);
        sItem = items[index];
        
        return displayItem(sItem);
    }
};

const displayItem = (item) => {
    //letsgoi();
    itemSLot.innerHTML = '';
    var index = getRandomInt(survivorItems.length);
    sItem = survivorItems[index];
    var lag = '<li class="list-group-item list-group-item-primary"><div class="ui two column centered grid"><div class="row"><div class="eight wide column"><h2 class="text-center">' +
    sItem.name + '</h2>' + '<img class="ui centered medium image" src="' + sItem.image +'">' + '</div>';
    lag += displayAddons();
    lag += '</div></li>';
    lag += displaySurvPerks();
    //console.log('surv:', lag);
    itemSLot.innerHTML += lag;
};

function letsgoi() {
    var i = 0;
    var arr = ['name: ', '', 'image: ', 'id: '];
    var a = 'const survivorItems = [\n';
    for(i = 0; i < survivorItems.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = survivorItems[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/items/' + survivorItems[i].image.substr(index);
            if (j == arr.length-1) {
                a += '\t\t' + arr[j];
                add = '"' + survivorItems[i].id + '"';
                a += add + '\n';
            } else if (j == arr.length-2) { 
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + ',\n';
            } else if (j == 0) {
                a += '\t\t' + arr[j];
                add = '"' + survivorItems[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == survivorItems.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

displayItem();