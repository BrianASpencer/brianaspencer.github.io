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
    console.log('items: ', itemList);
    
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
        console.log('item: ', sItem);
        return displayItem(sItem);
    }
};

const displayItem = (item) => {
    itemSLot.innerHTML = '';
    var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
    item[0] + '</h2>' + '<img style="width: 15%; height: 15%;" src="' + item[2] +'">' + '<div>' + item[1].replace(/<(.|\n)*?>/g, '') + '</div></div></li>';
    itemSLot.innerHTML += lag;
};

fetchItem();