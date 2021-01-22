const killerSlot = document.getElementById('killerSlot');
var killer;
const killers = [
	{
	name: "The Trapper",
	description: "An area-control Killer, able to apply pressure across the map by placing deadly <B>Bear Traps</B> for Survivors to step in.<BR><BR>His personal perks, <B>Unnerving Presence</B>, <B>Brutal Strength</B> and <B>Agitation</B>, allow him to chase and carry Survivors more effectively.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/TR_charSelect_portrait.png",
	item: "Item_Slasher_Beartrap"
	},
	{
	name: "The Wraith",
	description: "A stealth Killer, able to cloak and uncloak at the ringing of his <B>Wailing Bell</B>.<BR><BR>His personal perks, <B>Predator</B>, <B>Bloodhound</B> and <B>Shadowborn</B>, give him extra abilities to track and locate Survivors, making him a very efficient hunter.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/WR_charSelect_portrait.png",
	item: "Item_Slasher_CloakBell"
	},
	{
	name: "The Hillbilly",
	description: "A high-mobility Killer, able to cover large distances in a short amount of time and instantly down Survivors using his <B>Chainsaw</B>.<BR><BR>His personal perks, <B>Enduring</B>, <B>Lightborn</B> and <B>Tinkerer</B>, allow him to enhance his power and make him harder to lose during chases. ",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/HB_charSelect_portrait.png",
	item: "Item_Slasher_Chainsaw"
	},
	{
	name: "The Hag",
	description: "A cursed Killer, able to place traps and then teleport to them when activated, using her <B>Blackened Catalyst</B>.<BR><BR>Her personal perks, <B>Hex: The Third Seal</B>, <B>Hex: Ruin</B> and <B>Hex: Devour Hope</B>, apply crippling penalties to Survivors as long as the totem they are attached to remains uncleansed.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/DLC3/HA_charSelect_portrait.png",
	item: "Item_Slasher_PhantomTrap"
	},
	{
	name: "The Shape",
	description: "A haunting Killer, intent on monitoring Survivors from a distance to feed his power, <B>Evil Within</B>. The more he stalks, the stronger and faster he becomes.<BR><BR>His personal perks, <B>Save the Best for Last</B>, <B>Play with your Food</B> and <B>Dying Light</B>, select one Survivor to become the 'obsession' and will trigger deadly effects based on the Obsession's status.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/DLC2/SH_charSelect_portrait.png",
	item: "Item_Slasher_Stalker"
	},
	{
	name: "The Doctor",
	description: "A madness-inducing Killer who is able to use his power, <B>Carter's Spark</B>, to trigger electrical charges, incapacitating Survivors and eventually causing them to hallucinate and scream in terror, revealing their position.<BR><BR>His personal perks, <B>Overwhelming Presence</B>, <B>Monitor & Abuse</B> and <B>Overcharge</B>, encourage chases, impact Survivors' ability to repair effectively, and make him harder to detect when not in a chase.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/DLC4/DO_charSelect_portrait.png",
	item: "Item_Slasher_Killer07Item"
	},
	{
	name: "The Huntress",
	description: "A ranged Killer, able to throw <B>Hunting Hatchets</B> at Survivors to injure them from a distance.<BR><BR>Her personal perks, <B>Beast of Prey</B>, <B>Territorial Imperative</B> and <B>Hex: Huntress Lullaby</B>, allow her to apply pressure through better map awareness and enhanced chasing abilities.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/DLC5/BE_charSelect_portrait.png",
	item: "Item_Slasher_Hatchet"
	},
	{
	name: "The Cannibal",
	description: "A chainsaw-wielding Killer, able to trigger a deadly frenzy using <B>Bubba's Chainsaw</B>, immediately downing anyone in its path.<BR><BR>His personal perks, <B>Knock Out</B>, <B>Barbecue & Chili</B> and <B>Franklin's Demise</B>, make Survivors easier to locate while robbing them of their tools and abilities.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Cannibal/CA_charSelect_portrait.png",
	item: "Item_Slasher_LFChainsaw"
	},
	{
	name: "The Nightmare",
	description: "A nightmare inducing Killer, passively forcing Survivors into his Dream World using his power, <b>Dream Demon</b>. It is here that Survivors become extremely vulnerable to his dream abilities. Using his <b>Dream Projection</b> ability he is able to quickly appear across the map and put pressure on Survivors.<br><br>His personal perks, <b>Fire Up</b>, <b>Remember Me</b> and <b>Blood Warden</b>, improve his abilities over time and make him stronger as the trial reaches its climax.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/England/SD_charSelect_portrait.png",
	item: "Item_Slasher_DreamInducer"
	},
	{
	name: "The Pig",
	description: "A tormenting Killer, able to crouch into stealth mode, then ambush Survivors from a short distance. She can also apply <B>Reverse Bear Traps</B> to downed Survivors, forcing them to remove it before the timer runs out. If the timer expires, they die instantly.<BR><BR>Her personal perks, <B>Hangman's Trick</B>, <B>Surveillance</B> and <B>Make Your Choice</B>, give her more map control and expose altruistic Survivors.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Finland/FK_charSelect_portrait.png",
	item: "Item_Slasher_ReverseBearTrap"
	},
	{
	name: "The Clown",
	description: "A strategic Killer, able to control and corral survivors by throwing bottles of <b>The Afterpiece Tonic</b> to create clouds of noxious gas that cover large areas for a short amount of time. Survivors intoxicated by the gas are inflicted with impaired vision and movement speed, and give away their location by coughing loudly.<br><br>His personal perks, <b>Bamboozle</b>, <b>Coulrophobia</b> and <b>Pop Goes the Weasel</b>, provide vaulting advantages and negatively impact Survivor healing speed and repairs.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Guam/GK_charSelect_portrait.png",
	item: "Item_Slasher_GasBomb"
	},
	{
	name: "The Legion",
	description: "A band of merciless Killers, able to rushdown helpless Survivors with their power, <b>Feral Frenzy</b>. Attacks made during their frenzy inflict lingering internal damage, downing any Survivors that are not quick enough to react.<br><br>Their personal perks, <b>Discordance</b>, <b>Mad Grit</b> and <b>Iron Maiden</b>, give them the ability to locate their prey and attack savagely while transporting Survivors to the hook.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Kenya/KK_charSelect_portrait.png",
	item: "Item_Slasher_Frenzy"
	},
	{
	name: "The Plague",
	description: "A devout Killer, able to infect Survivors from a short distance using her power, <b>Vile Purge</b>. Survivors inflicted by this contamination risk becoming injured or broken, unless they find a way to cure themselves in a Pool of Devotion.<br><br>Her personal perks, <b>Corrupt Intervention</b>, <b>Infectious Fright</b> and <b>Dark Devotion</b>, give her the ability to hinder Survivor objectives, while simultaneously confusing and frightening those within her presence.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Mali/MK_charSelect_portrait.png",
	item: "Item_Slasher_PlaguePower"
	},
	{
	name: "The Ghost Face",
	description: "A creepy Killer, able to stalk his victims and sneak up silently using his power, <b>Night Shroud</b>. Affected Survivors will find themselves vulnerable and oblivious to his presence and must use all of their perception and awareness to protect themselves from his approach.<br><br>His personal perks, <b>I'm All Ears</b>, <b>Thrilling Tremors</b> and <b>Furtive Chase</b>, give him the ability to locate Survivors, defend generators, and make his chases unpredictable.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Oman/OK_charSelect_portrait.png",
	item: "Item_Slasher_GhostPower"
	},
	{
	name: "The Demogorgon",
	description: "An unidentified Killer, able to open multiple portals and traverse between them to cover large distances. Using its power, <b>Of The Abyss</b>, it can detect any Survivors within a close proximity to the portals then unleash a leaping attack to inflict damage from a distance.<br><br>Its personal perks, <b>Surge</b>, <b>Cruel Limits</b> and <b>Mindbreaker</b>, impact the environment close to generators and affect nearby Survivors in unexpected ways.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Qatar/QK_charSelect_portrait.png",
	item: "Item_Slasher_QatarKillerPower"
	},
	{
	name: "The Oni",
	description: "A monstrous Killer, able to absorb the blood energy of his injured foes, and then use that energy to transform into a brutal demon. Using his power, <b>Yamaoka's Wrath</b>, he can rush down Survivors at great speed and deal deadly strikes with his kanabō.<br><br>His personal perks, <b>Zanshin Tactics</b>, <b>Blood Echo</b> and <b>Nemesis</b>, provide navigational information, punish injured Survivors, and gain advantages over those that interfere.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Sweden/SK_charSelect_portrait.png",
	item: "Item_Slasher_Kanobo"
	},
	{
	name: "The Deathslinger",
	description: "A vengeful Killer, able to spear Survivors from a distance and reel them in using his power, <b>The Redeemer</b>.<br><br>His personal perks, <b>Gear Head</b>, <b>Dead Man’s Switch</b>, and <b>Hex: Retribution</b>, allow him to locate and impede Survivor objectives, and punish Survivors for destroying totems.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Ukraine/UK_charSelect_portrait.png",
	item: "Item_Slasher_HarpoonRifle"
	},
	{
	name: "The Executioner",
	description: "A map-manipulation Killer, able to torment Survivors with the hazards he creates. Affected Survivors will be vulnerable to his special hook, the <b>Cage of Atonement</b>, and his unique mori, <b>Final Judgment</b>.<br><br>His personal Perks, <b>Forced Penance</b>, <b>Trail of Torment</b>, and <b>Deathbound</b>, allow him to aggressively pursue his prey while deceiving and tracking Survivors.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/CharPortraits/Wales/K20_charSelect_portrait.png",
	item: "Item_Slasher_TormentMode"
	},
    {
	name: "The Blight",
	description: "Dash go brrr.",
	image: "",
	item: "blight"
	},
    {
	name: "The Twins",
	description: "I can only slug.",
	image: "",
	item: "twins"
	}
];

/*
* TODO:
* Implement new killers (twins and blight)
* Update when new clown changes happen
* Remove description of perks?
* Add Huntresses' addons
* remove all banned perks from each side
* remove banned maps from each side
* remove all banned addons
*/

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

const fetchKiller = (bound) => {
    killer = [];
    const characters = [];
    
    const url = 'https://dbd-stats.info/api/characters';
    
    characters.push(fetch(url).then((res) => res.json()));
    
    Promise.all(characters).then((results) => {
        buildKiller(results);
    });

};


const buildKiller = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var killers = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if (item[element].role === "EPlayerRole::VE_Slasher") {
                killers.push([item[element].displayName, item[element].biography, url + item[element].iconPath, item[element].defaultItem]);
            }
        }
        
        var index = getRandomInt(killers.length);
        killer = killers[index];
        return displayKiller(killer);
    }
};

const displayKiller_Old = (killer) => {
    killerSlot.innerHTML = '';
    var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
    killer[0] + '</h2>' + '<img style="width: 20%; height: 20%;" src="' + killer[2] +'">' + '<div>' + killer[1].replace(/<(.|\n)*?>/g, '') + '</div></div></li>';
    killerSlot.innerHTML += lag;
};

function displayKiller() {
    killerSlot.innerHTML = '';
    var index = getRandomInt(killers.length);
    killer = killers[index];
    var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h3>' +
    killer.name + '</h3>' + '<img style="width: 25%; height: 25%;" src="' +killer.image +'">' + '</div></li>';
    killerSlot.innerHTML += lag;
    /*
    var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
    killer.name + '</h2>' + '<img style="width: 20%; height: 20%;" src="' +killer.image +'">' + '<div>' + killer.description.replace(/<(.|\n)*?>/g, '') + '</div></div></li>';
    killerSlot.innerHTML += lag;
    */
}


displayKiller();