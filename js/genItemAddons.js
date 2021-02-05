//const itemAddonSlot = document.getElementById('itemAddonSlot');
const survItemAddons = [
	{
		name: "Rubber Grip",
		image: "../../images/DbD/addons/rubberGrip.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Grip Wrench",
		image: "../../images/DbD/addons/gripWrench.png",
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
		image: "../../images/DbD/addons/abdominalDressing.png",
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
		image: "../../images/DbD/addons/stampUnusual.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Heavy Duty Battery",
		image: "../../images/DbD/addons/heavyDutyBattery.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Scratched Pearl",
		image: "../../images/DbD/addons/scratchedPearl.png",
		parentItem: [
			"Item_Camper_Key",
			"Item_Camper_DullKey",
			"Item_Camper_BrokenKey"]
	},
	{
		name: "Power Bulb",
		image: "../../images/DbD/addons/powerBulb.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Scraps",
		image: "../../images/DbD/addons/scraps.png",
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
		image: "../../images/DbD/addons/leatherGrip.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Intense Halogen",
		image: "../../images/DbD/addons/intenseHalogen.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Medical Scissors",
		image: "../../images/DbD/addons/scissors.png",
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
		image: "../../images/DbD/addons/wideLens.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Instructions",
		image: "../../images/DbD/addons/instructions.png",
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
		image: "../../images/DbD/addons/stypticAgent.png",
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
		image: "../../images/DbD/addons/ropeRed.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Gold Token",
		image: "../../images/DbD/addons/tokenGold.png",
		parentItem: [
			"Item_Camper_Key",
			"Item_Camper_DullKey",
			"Item_Camper_BrokenKey"]
	},
	{
		name: "Glass Bead",
		image: "../../images/DbD/addons/beadGlass.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Retardant Jelly",
		image: "../../images/DbD/addons/retardantJelly.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Gauze Roll",
		image: "../../images/DbD/addons/gauseRoll.png",
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
		image: "../../images/DbD/addons/oddBulb.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Focus Lens",
		image: "../../images/DbD/addons/focusLens.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Sponge",
		image: "../../images/DbD/addons/sponge.png",
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
		image: "../../images/DbD/addons/socketSwivels.png",
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
		image: "../../images/DbD/addons/cuttingWire.png",
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
		image: "../../images/DbD/addons/bandages.png",
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
		image: "../../images/DbD/addons/threadedFilament.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Protective Gloves",
		image: "../../images/DbD/addons/protectiveGloves.png",
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
		image: "../../images/DbD/addons/gelDressings.png",
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
		image: "../../images/DbD/addons/prayerRope.png",
		parentItem: [
			"Item_Camper_Key",
			"Item_Camper_DullKey",
			"Item_Camper_BrokenKey"]
	},
	{
		name: "Wire Spool",
		image: "../../images/DbD/addons/spoolOfWire.png",
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
		image: "../../images/DbD/addons/uniqueRing.png",
		parentItem: [
			"Item_Camper_Key",
			"Item_Camper_DullKey",
			"Item_Camper_BrokenKey"]
	},
	{
		name: "Anti-Hemorrhagic Syringe",
		image: "../../images/DbD/addons/syringe.png",
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
		image: "../../images/DbD/addons/ropeYellow.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Self Adherent Wrap",
		image: "../../images/DbD/addons/selfAdherentWrap.png",
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
		image: "../../images/DbD/addons/longLifeBattery.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Eroded Token",
		image: "../../images/DbD/addons/tokenErroded.png",
		parentItem: [
			"Item_Camper_Key",
			"Item_Camper_DullKey",
			"Item_Camper_BrokenKey"]
	},
	{
		name: "Map Addendum",
		image: "../../images/DbD/addons/mapAddendum.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Surgical Suture",
		image: "../../images/DbD/addons/surgicalSuture.png",
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
		image: "../../images/DbD/addons/metalSaw.png",
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
		image: "../../images/DbD/addons/highEndSapphireLens.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "TIR Optic",
		image: "../../images/DbD/addons/tirOptic.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Odd Stamp",
		image: "../../images/DbD/addons/stampOdd.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Blood Amber",
		image: "../../images/DbD/addons/bloodAmber.png",
		parentItem: [
			"Item_Camper_Key",
			"Item_Camper_DullKey",
			"Item_Camper_BrokenKey"]
	},
	{
		name: "Clean Rag",
		image: "../../images/DbD/addons/cleanRag.png",
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
		image: "../../images/DbD/addons/ropeBlack.png",
		parentItem: [
			"Item_Camper_BeigeMap",
			"Item_Camper_RainbowMap"]
	},
	{
		name: "Needle & Thread",
		image: "../../images/DbD/addons/needAndThread.png",
		parentItem: [
			"Item_Camper_MedKit",
			"Item_Camper_MedKit02",
			"Item_Camper_MedKit03",
			"Item_Camper_MedKit04",
			"Item_Camper_MedKit05",
			"Item_Camper_Medkit_Anniversary2020"]
	},
	{
		name: "Rubber Gloves",
		image: "../../images/DbD/addons/gloves.png",
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
		image: "../../images/DbD/addons/prayerBeads.png",
		parentItem: [
			"Item_Camper_Key",
			"Item_Camper_DullKey",
			"Item_Camper_BrokenKey"]
	},
	{
		name: "Butterfly Tape",
		image: "../../images/DbD/addons/butterflyTape.png",
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
		image: "../../images/DbD/addons/battery.png",
		parentItem: [
			"Item_Camper_Flashlight",
			"Item_Camper_Flashlight02",
			"Item_Camper_Flashlight03",
			"Item_Camper_Flashlight04",
			"Item_Camper_Flashlight_Anniversary2020"]
	},
	{
		name: "Spring Clamp",
		image: "../../images/DbD/addons/springClamp.png",
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
    //itemAddonSlot.innerHTML = '';
    //letsgoia();
    var items = getItem();
    var indeces = getIndeces(2, items.length);
    var addons = [items[indeces[0]], items[indeces[1]]];
    var lag = '<div class="row text-center">';
    var i = 0;
    for (i = 0; i < 2; i++) {
        lag += '<div class="column" style="width:48%"><div class="text-center"><h3>' +
        addons[i].name + '</h3>' + '<img class="img-fluid" style="width: 35%;" src="' + addons[i].image +'">' + '</div></div>';
    }
    lag +='</div></li>';
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