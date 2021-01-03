const addonSlot = document.getElementById('addonSlot');

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

const fetchAddons = (bound) => {
    
    const addons = [];

    const url = 'https://dbd-stats.info/api/itemaddons/';
    
    addons.push(fetch(url).then((res) => res.json()));
    
    Promise.all(addons).then((results) => {
        buildAddons(results);
    });
    
};

const buildAddons = (arr) => {
    //console.log('killer:', killer);
    arr.forEach(myFunction);
    function myFunction(item) {
        var addons = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            var itemName = item[element].parentItems[0] ? item[element].parentItems[0] : '';
            
            if (itemName === killer[3] && item[element].bloodWeb) {
                addons.push([item[element].displayName, url + item[element].iconPathList[0]]);
            }
        }
        
        var indeces = getIndeces(2, addons.length);
        return displayItemAddons([addons[indeces[0]], addons[indeces[1]]]);
    }
};

const displayItemAddons = (addons) => {
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


fetchAddons();
