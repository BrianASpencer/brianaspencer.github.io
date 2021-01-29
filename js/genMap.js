const mapSlot = document.getElementById('maps');

const maps = [
	{
	name: "Badham Preschool IV",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/England/iconMap_Eng_ElmStreet04.png"
	},
	{
	name: "Badham Preschool III",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/England/iconMap_Eng_ElmStreet03.png"
	},
	{
	name: "The Thompson House",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Frm_Farmhouse.png"
	},
	{
	name: "Sanctum of Wrath ",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Haiti/iconMap_Hti_Shrine.png"
	},
	{
	name: "Blood Lodge",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Jnk_Lodge.png"
	},
	{
	name: "Badham Preschool I",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/England/iconMap_Eng_ElmStreet.png"
	},
	{
	name: "Wreckers' Yard",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Jnk_Scrapyard.png"
	},
	{
	name: "Mother's Dwelling",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/DLC5/iconMap_Brl_MaHouse.png"
	},
	{
	name: "Father Campbell's Chapel",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Guam/iconMap_Asy_Chapel.png"
	},
	{
	name: "Disturbed Ward",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Asy_Asylum.png"
	},
	{
	name: "Coal Tower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Ind_CoalTower.png"
	},
	{
	name: "Gas Heaven",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Jnk_GasStation.png"
	},
	{
	name: "Torment Creek",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Frm_Silo.png"
	},
	{
	name: "Midwich Elementary School",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Wales/iconMap_Wal_Level01.png"
	},
	{
	name: "Fractured Cowshed",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Frm_Barn.png"
	},
	{
	name: "Lampkin Lane",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Sub_Street.png"
	},
	{
	name: "Groaning Storehouse",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Ind_Storehouse.png"
	},
	{
	name: "Shelter Woods",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Ind_Forest.png"
	},
	{
	name: "Family Residence",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Haiti/iconMap_Hti_Manor.png"
	},
	{
	name: "Rotten Fields",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Frm_Cornfield.png"
	},
	{
	name: "Grim Pantry",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Cannibal/iconMap_Swp_GrimPantry.png"
	},
	{
	name: "The Temple of Purgation",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Mali/iconMap_Brl_Temple.png"
	},
	{
	name: "Ironworks of Misery",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Ind_Foundry.png"
	},
	{
	name: "Badham Preschool V",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/England/iconMap_Eng_ElmStreet05.png"
	},
	{
	name: "Azarov’s Resting Place",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Jnk_Office.png"
	},
	{
	name: "Suffocation Pit",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Ind_Mine.png"
	},
	{
	name: "Badham Preschool II",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/England/iconMap_Eng_ElmStreet02.png"
	},
	{
	name: "Rancid Abattoir",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Frm_Slaughterhouse.png"
	},
	{
	name: "Mount Ormond Resort",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Kenya/iconMap_Kny_Cottage.png"
	},
	{
	name: "The Pale Rose",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Swp_PaleRose.png"
	},
	{
	name: "Dead Dawg Saloon",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/Ukraine/iconMap_Ukr_Saloon.png"
	},
	{
	name: "Wretched Shop",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Maps/iconMap_Jnk_Garage.png"
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