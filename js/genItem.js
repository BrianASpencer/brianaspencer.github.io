const itemSLot = document.getElementById('itemSlot');
var sItem;
const survivorItems = [
	{
	name: "Emergency Med-Kit",
	description: "A sturdy and well organized medical kit equipped with top condition emergency supplies.<br><li><b>16 Charges</b>.</li><li><b>Tremendously increases</b> the speed that you heal others.</li><li><b>Tremendously increases</b> the speed that you heal yourself.</li><li>Unlocks the <b>self-healing</b> action.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_medkit.png",
	id: "Item_Camper_MedKit03"
	},
	{
	name: "Broken Key",
	description: "The bow and shank of a key, vibrating with power. The broken key's power cannot be triggered by itself. Various objects can be attached to its jump ring, which channels the broken key's power into various effects. <br><li><b>10 seconds</b> of use.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_brokenKey.png",
	id: "Item_Camper_BrokenKey"
	},
	{
	name: "Utility Flashlight",
	description: "A sturdy but heavy flashlight that packs a lot of power.<br><li><b>12 Seconds of use</b>.</li><li><b>Slightly reduces</b> accuracy.</li><li><b>Moderately increases</b> the beam's visual brightness.</li><li><b>Moderately increases</b> the blindness duration.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_flashlightUtility.png",
	id: "Item_Camper_Flashlight03"
	},
	{
	name: "First Aid Kit",
	description: "A standard first aid kit with all the necessary equipment for treating common to more serious injuries.<br><li><b>24 charges.</b></li><li><b>Considerably increases</b> the speed that you heal others.</li><li>Unlocks the <b>self-healing</b> action.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_firstAidKit.png",
	id: "Item_Camper_MedKit02"
	},
	{
	name: "Ranger Med-Kit",
	description: "A large metal box containing medical supplies aimed for emergency rescues in hard to reach, often isolated locations.<br><li><b>32 Charges</b>.</li><li><b>Tremendously increases</b> the speed that you heal others.</li><li><b>Moderately increases</b> Skill Check success zones.</li><li><b>Moderately increases</b> Skill Check bonus zones.</li><li>Unlocks the <b>self-healing</b> action.</li><br>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_rangersAidKit.png",
	id: "Item_Camper_MedKit04"
	},
	{
	name: "Rainbow Map",
	description: "A piece of parchment made out of oddly fresh skin. Blood on its edge has yet to dry. It is rolled and sealed with multiple colored ropes and cords. Holding and channelling the map unlocks great potential in one's aura reading ability which slowly burns up the map. Objects with auras which you have already encountered are revealed to you for as long as the map has charges left. <br><li><b>20 seconds of use</b>.</li><li>Start with <b>3 objects</b> automatically tracked.</li><li>Unlocks the ability to <b>track objectives</b> within an <b>8-meter</b> range.</li><li>Unlocks the ability to <b>track black locks</b> within an <b>8-meter</b> range.</li><li>Unlocks the ability to <b>track the Killer's belongings</b> within an <b>8-meter</b> range.</li><li>Unlocks the ability to <b>track the Exit Gates</b> within an <b>8-meter</b> range.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_rainbowMap.png",
	id: "Item_Camper_RainbowMap"
	},
	{
	name: "Map",
	description: "An old piece of parchment made out of a skin-like material. It is rolled and sealed with an uncolored leather string. Holding and channeling the map unlocks great potential in one's aura reading ability which slowly burns the map. Generators' auras which you have already encountered are revealed to you for as long as the map has charges left.<br><li><b>20 seconds</b> of use.</li><li>Start with <b>1</b> generator automatically tracked.</li><li>Unlocks the ability to track generators within a <b>8 meter</b> range.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_map.png",
	id: "Item_Camper_BeigeMap"
	},
	{
	name: "Camping Aid Kit",
	description: "A rudimentary aid kit which can save lives in emergencies, even if it's lacking some of its supplies.<br><li><b>16 Charges</b>.</li><li><b>Moderately increases</b> the speed that you heal others.</li><li>Unlocks the <b>self-healing</b> action.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_rundownAidKit.png",
	id: "Item_Camper_MedKit"
	},
	{
	name: "Toolbox",
	description: "Metal box containing a set of basic tools. Even without training, can be used to repair or break various mechanical components.<br><li><b>20 charges.</b></li><li><b>Moderately increases</b> repair speed.</li><li>Unlocks the <b>sabotage</b> action.</li><li><b>Slightly increases</b> sabotage speed.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_toolbox.png",
	id: "Item_Camper_Toolbox"
	},
	{
	name: "Sport Flashlight",
	description: "A very portable flashlight with a good grip. Its efficient technology produces a powerful light while consuming less power.<br><li><b>8 Seconds of use</b>.</li><li><b>Slightly decreases</b> the flashlight battery consumption.</li><li><b>Slightly increases</b> accuracy.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_flashlightSport.png",
	id: "Item_Camper_Flashlight02"
	},
	{
	name: "Worn-out Tools",
	description: "Metal box containing out of condition tools that could break at any moment. Even without training, can be used to repair or break various mechanical components.<br><li><b>16 Charges</b>.</li><li><b>Moderately increases</b> repair speed.</li><li><b>Slightly decreases</b> Skill Check success zones.</li><li>Unlocks the <b>sabotage</b> action.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_toolboxWornOut.png",
	id: "Item_Camper_WornoutToolbox"
	},
	{
	name: "Flashlight",
	description: "A standard flashlight. Can be used to light your way in the darkness.<br><li><b>8 seconds</b> of use.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Items/iconItems_flashlight.png",
	id: "Item_Camper_Flashlight"
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
    itemSLot.innerHTML = '';
    var index = getRandomInt(survivorItems.length);
    sItem = survivorItems[index];
    var lag = '<li class="list-group-item list-group-item-primary"><div class="row"><div class="column" style="width:96%"><div class="text-center"><h3>' +
    sItem.name + '</h3>' + '<img class="img-fluid" style="width: 25%; height: 25%;" src="' + sItem.image +'">' + '</div></div></div><br>';
    lag += displayAddons();
    itemSLot.innerHTML += lag;
};

displayItem();