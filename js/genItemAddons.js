const itemAddonSlot = document.getElementById('itemAddonSlot');

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

    const url = 'https://dbd-stats.info/api/itemaddons/';
    
    addons.push(fetch(url).then((res) => res.json()));
    console.log('every addons: ', addons);
    
    Promise.all(addons).then((results) => {
        buildItemAddons(results);
    });
};

const buildItemAddons = (arr) => {
    console.log('yikes', arr);
    arr.forEach(myFunction);
    function myFunction(item) {
        var addons = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            var i = 0;
            for (i = 0; i < item[element].parentItems.length; i++) {
                var itemName = item[element].parentItems[i] ? item[element].parentItems[i] : '';
            
                if (itemName === sItem[3] && item[element].bloodWeb && item[element].role === 'EPlayerRole::VE_Camper') {
                    addons.push([item[element].displayName, url + item[element].iconPathList[0]]);
                }
            }
        }
        
        var indeces = getIndeces(2, addons.length);
        var alt = [['No Addon Available', ''], ['No Addon Available', '']];
        return displayAddons(addons.length ? [addons[indeces[0]], addons[indeces[1]]] : alt);
    }
};

const displayAddons = (addons) => {
    console.log('addonssns???: ', addons);
    itemAddonSlot.innerHTML = '';
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
        addons[i][0] + '</h2>' + '<img style="width: 10%; height: 10%;" src="' + addons[i][1] +'">' + '</div></li>';
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


fetchItemAddon();