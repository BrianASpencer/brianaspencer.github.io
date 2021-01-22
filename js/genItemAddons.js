const itemAddonSlot = document.getElementById('itemAddonSlot');
const survItemAddons = [
	{
	name: "Rubber Grip",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_rubberGrip.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Milky Glass",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_milkyGlass.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Grip Wrench",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_gripWrench.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Abdominal Dressing",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_abdominalDressing.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Unusual Stamp",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_stampUnusual.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Heavy Duty Battery",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_heavyDutyBattery.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Scratched Pearl",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_scratchedPearl.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Power Bulb",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_powerBulb.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Scraps",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_scraps.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Leather Grip",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_leatherGrip.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Intense Halogen",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_intenseHalogen.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Medical Scissors",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_scissors.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Wide Lens",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_wideLens.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Instructions",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_instructions.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Styptic Agent",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_stypticAgent.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Red Twine",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_ropeRed.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Gold Token",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_tokenGold.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Glass Bead",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_beadGlass.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Retardant Jelly",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_retardantJelly.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Gauze Roll",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_gauseRoll.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Odd Bulb",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_oddBulb.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Weaved Ring",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_weavedRing.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Focus Lens",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_focusLens.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Sponge",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_sponge.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Socket Swivels",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_socketSwivels.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Cutting Wire",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_cuttingWire.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Bandages",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_bandages.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Low Amp Filament",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_threadedFilament.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Protective Gloves",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_protectiveGloves.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Gel Dressings",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_gelDressings.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Prayer Rope",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_prayerRope.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Wire Spool",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_spoolOfWire.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Unique Wedding Ring",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_uniqueRing.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Anti-Hemorrhagic Syringe",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_syringe.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Yellow Wire",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_ropeYellow.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Self Adherent Wrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_selfAdherentWrap.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Long Life Battery",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_longLifeBattery.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Eroded Token",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_tokenErroded.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Map Addendum",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_mapAddendum.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Surgical Suture",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_surgicalSuture.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Hacksaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_metalSaw.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "High-end Sapphire lens",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_highEndSapphireLens.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "TIR Optic",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_tirOptic.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Odd Stamp",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_stampOdd.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Blood Amber",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_bloodAmber.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Clean Rag",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_cleanRag.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Black Silk Cord",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_ropeBlack.png",
	parentItem: [
		"Item_Camper_BeigeMap",
		"Item_Camper_RainbowMap"]
	},
	{
	name: "Needle & Thread",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_needAndThread.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Brand New Part",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_brandNewPart.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
	},
	{
	name: "Rubber Gloves",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_gloves.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Prayer Beads",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_prayerBeads.png",
	parentItem: [
		"Item_Camper_Key",
		"Item_Camper_DullKey",
		"Item_Camper_BrokenKey"]
	},
	{
	name: "Butterfly Tape",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_butterflyTape.png",
	parentItem: [
		"Item_Camper_MedKit",
		"Item_Camper_MedKit02",
		"Item_Camper_MedKit03",
		"Item_Camper_MedKit04",
		"Item_Camper_MedKit05",
		"Item_Camper_Medkit_Anniversary2020"]
	},
	{
	name: "Battery",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_battery.png",
	parentItem: [
		"Item_Camper_Flashlight",
		"Item_Camper_Flashlight02",
		"Item_Camper_Flashlight03",
		"Item_Camper_Flashlight04",
		"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
	name: "Spring Clamp",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_springClamp.png",
	parentItem: [
		"Item_Camper_WornoutToolbox",
		"Item_Camper_Toolbox",
		"Item_Camper_MechanicsToolbox",
		"Item_Camper_CommodiousToolbox",
		"Item_Camper_EngineerToolbox",
		"Item_Camper_AlexsToolbox"]
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


function displayAddons() {
    itemAddonSlot.innerHTML = '';
    var items = getItem();
    var indeces = getIndeces(2, items.length);
    var addons = [items[indeces[0]], items[indeces[1]]];
    var i = 0;
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-primary"><div class="text-center"><h2>' +
        addons[i].name + '</h2>' + '<img style="width: 15%; height: 15%;" src="' + addons[i].image +'">' + '</div></li>';
        itemAddonSlot.innerHTML += lag;
    }
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

displayAddons();