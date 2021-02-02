const mapSlot = document.getElementById('maps');

const maps = [
	{
	name: "Badham Preschool IV",
	image: "../../images/DbD/maps/EngElmStreet04.png"
	},
	{
	name: "Badham Preschool III",
	image: "../../images/DbD/maps/EngElmStreet03.png"
	},
	{
	name: "The Thompson House",
	image: "../../images/DbD/maps/FrmFarmhouse.png"
	},
	{
	name: "Sanctum of Wrath ",
	image: "../../images/DbD/maps/HtiShrine.png"
	},
	{
	name: "Blood Lodge",
	image: "../../images/DbD/maps/JnkLodge.png"
	},
	{
	name: "Badham Preschool I",
	image: "../../images/DbD/maps/EngElmStreet.png"
	},
	{
	name: "Wreckers' Yard",
	image: "../../images/DbD/maps/JnkScrapyard.png"
	},
	{
	name: "Mother's Dwelling",
	image: "../../images/DbD/maps/BrlMaHouse.png"
	},
	{
	name: "Father Campbell's Chapel",
	image: "../../images/DbD/maps/AsyChapel.png"
	},
	{
	name: "Disturbed Ward",
	image: "../../images/DbD/maps/AsyAsylum.png"
	},
	{
	name: "Coal Tower",
	image: "../../images/DbD/maps/IndCoalTower.png"
	},
	{
	name: "Gas Heaven",
	image: "../../images/DbD/maps/JnkGasStation.png"
	},
	{
	name: "Torment Creek",
	image: "../../images/DbD/maps/FrmSilo.png"
	},
	{
	name: "Midwich Elementary School",
	image: "../../images/DbD/maps/WalLevel01.png"
	},
	{
	name: "Fractured Cowshed",
	image: "../../images/DbD/maps/FrmBarn.png"
	},
	{
	name: "Lampkin Lane",
	image: "../../images/DbD/maps/SubStreet.png"
	},
	{
	name: "Groaning Storehouse",
	image: "../../images/DbD/maps/IndStorehouse.png"
	},
	{
	name: "Shelter Woods",
	image: "../../images/DbD/maps/IndForest.png"
	},
	{
	name: "Family Residence",
	image: "../../images/DbD/maps/HtiManor.png"
	},
	{
	name: "Rotten Fields",
	image: "../../images/DbD/maps/FrmCornfield.png"
	},
	{
	name: "Grim Pantry",
	image: "../../images/DbD/maps/SwpGrimPantry.png"
	},
	{
	name: "The Temple of Purgation",
	image: "../../images/DbD/maps/BrlTemple.png"
	},
	{
	name: "Ironworks of Misery",
	image: "../../images/DbD/maps/IndFoundry.png"
	},
	{
	name: "Badham Preschool V",
	image: "../../images/DbD/maps/EngElmStreet05.png"
	},
	{
	name: "Azarov’s Resting Place",
	image: "../../images/DbD/maps/JnkOffice.png"
	},
	{
	name: "Suffocation Pit",
	image: "../../images/DbD/maps/IndMine.png"
	},
	{
	name: "Badham Preschool II",
	image: "../../images/DbD/maps/EngElmStreet02.png"
	},
	{
	name: "Rancid Abattoir",
	image: "../../images/DbD/maps/FrmSlaughterhouse.png"
	},
	{
	name: "Mount Ormond Resort",
	image: "../../images/DbD/maps/KnyCottage.png"
	},
	{
	name: "The Pale Rose",
	image: "../../images/DbD/maps/SwpPaleRose.png"
	},
	{
	name: "Dead Dawg Saloon",
	image: "../../images/DbD/maps/UkrSaloon.png"
	},
	{
	name: "Wretched Shop",
	image: "../../images/DbD/maps/JnkGarage.png"
	}
];

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

const fetchMaps = (bound) => {
    
    const promises = [];
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/itemaddons';
        promises.push(fetch(url).then((res) => res.json()));
    }
    
    Promise.all(promises).then((results) => {
        buildMaps(results);
    });
    
};

const buildMaps = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var maps = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if (item[element].hookMaxCount > -1) {
                maps.push([item[element].name, url + item[element].thumbnailPath]);
            }
        }
        
        var indeces = getIndeces(2, maps.length);
        
        return displayMaps([maps[indeces[0]], maps[indeces[1]]]);
    }
};

const displayMaps_Old = (mapList) => {
    maps.innerHTML = '';
    var i = 0;
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
        mapList[i][0] + '</h2>' + '<img style="width: 30%; height: 30%;" src="' + mapList[i][1] +'"></div>' + '</li>';
        maps.innerHTML += lag;
    }
};

function displayMaps() {
    mapSlot.innerHTML = '';
    var indeces = getIndeces(2, maps.length);
    var mapList = [maps[indeces[0]], maps[indeces[1]], maps[indeces[2]], maps[indeces[3]]];
    var lag = '<li class="list-group-item list-group-item-danger"><div class="row">';
    var i = 0;
    for (i = 0; i < 2; i++) {
        lag += '<div class="column" style="width:48%"><div class="text-center"><h3>' +
        mapList[i].name + '</h3>' + '<img class="img-fluid" style="width: 100%;" src="' + mapList[i].image +'"></div></div>';
    }
    lag +='</div></li>';
    mapSlot.innerHTML += lag;
}

displayMaps();