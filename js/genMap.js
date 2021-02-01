const mapSlot = document.getElementById('maps');

const maps = [
	{
	name: "Badham Preschool IV",
	image: "../../images/DbD/Maps/EngElmStreet04.png"
	},
	{
	name: "Badham Preschool III",
	image: "../../images/DbD/Maps/EngElmStreet03.png"
	},
	{
	name: "The Thompson House",
	image: "../../images/DbD/Maps/FrmFarmhouse.png"
	},
	{
	name: "Sanctum of Wrath ",
	image: "../../images/DbD/Maps/HtiShrine.png"
	},
	{
	name: "Blood Lodge",
	image: "../../images/DbD/Maps/JnkLodge.png"
	},
	{
	name: "Badham Preschool I",
	image: "../../images/DbD/Maps/EngElmStreet.png"
	},
	{
	name: "Wreckers' Yard",
	image: "../../images/DbD/Maps/JnkScrapyard.png"
	},
	{
	name: "Mother's Dwelling",
	image: "../../images/DbD/Maps/BrlMaHouse.png"
	},
	{
	name: "Father Campbell's Chapel",
	image: "../../images/DbD/Maps/AsyChapel.png"
	},
	{
	name: "Disturbed Ward",
	image: "../../images/DbD/Maps/AsyAsylum.png"
	},
	{
	name: "Coal Tower",
	image: "../../images/DbD/Maps/IndCoalTower.png"
	},
	{
	name: "Gas Heaven",
	image: "../../images/DbD/Maps/JnkGasStation.png"
	},
	{
	name: "Torment Creek",
	image: "../../images/DbD/Maps/FrmSilo.png"
	},
	{
	name: "Midwich Elementary School",
	image: "../../images/DbD/Maps/WalLevel01.png"
	},
	{
	name: "Fractured Cowshed",
	image: "../../images/DbD/Maps/FrmBarn.png"
	},
	{
	name: "Lampkin Lane",
	image: "../../images/DbD/Maps/SubStreet.png"
	},
	{
	name: "Groaning Storehouse",
	image: "../../images/DbD/Maps/IndStorehouse.png"
	},
	{
	name: "Shelter Woods",
	image: "../../images/DbD/Maps/IndForest.png"
	},
	{
	name: "Family Residence",
	image: "../../images/DbD/Maps/HtiManor.png"
	},
	{
	name: "Rotten Fields",
	image: "../../images/DbD/Maps/FrmCornfield.png"
	},
	{
	name: "Grim Pantry",
	image: "../../images/DbD/Maps/SwpGrimPantry.png"
	},
	{
	name: "The Temple of Purgation",
	image: "../../images/DbD/Maps/BrlTemple.png"
	},
	{
	name: "Ironworks of Misery",
	image: "../../images/DbD/Maps/IndFoundry.png"
	},
	{
	name: "Badham Preschool V",
	image: "../../images/DbD/Maps/EngElmStreet05.png"
	},
	{
	name: "Azarov’s Resting Place",
	image: "../../images/DbD/Maps/JnkOffice.png"
	},
	{
	name: "Suffocation Pit",
	image: "../../images/DbD/Maps/IndMine.png"
	},
	{
	name: "Badham Preschool II",
	image: "../../images/DbD/Maps/EngElmStreet02.png"
	},
	{
	name: "Rancid Abattoir",
	image: "../../images/DbD/Maps/FrmSlaughterhouse.png"
	},
	{
	name: "Mount Ormond Resort",
	image: "../../images/DbD/Maps/KnyCottage.png"
	},
	{
	name: "The Pale Rose",
	image: "../../images/DbD/Maps/SwpPaleRose.png"
	},
	{
	name: "Dead Dawg Saloon",
	image: "../../images/DbD/Maps/UkrSaloon.png"
	},
	{
	name: "Wretched Shop",
	image: "../../images/DbD/Maps/JnkGarage.png"
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