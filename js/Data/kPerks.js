const killerPerks = [
	{
		name: "Deathbound",
		image: "../../images/DbD/perks/deathbound.png"
	},
	{
		name: "Iron Maiden",
		image: "../../images/DbD/perks/ironMaiden.png"
	},
	{
		name: "Dark Devotion",
		image: "../../images/DbD/perks/darkDevotion.png"
	},
	{
		name: "Monitor & Abuse",
		image: "../../images/DbD/perks/monitorAndAbuse.png"
	},
	{
		name: "Overwhelming Presence",
		image: "../../images/DbD/perks/overwhelmingPresence.png"
	},
	{
		name: "Agitation",
		image: "../../images/DbD/perks/agitation.png"
	},
	{
		name: "Fire Up",
		image: "../../images/DbD/perks/fireUp.png"
	},
	{
		name: "Unrelenting",
		image: "../../images/DbD/perks/unrelenting.png"
	},
	{
		name: "Iron Grasp",
		image: "../../images/DbD/perks/ironGrasp.png"
	},
	{
		name: "Monstrous Shrine",
		image: "../../images/DbD/perks/monstrousShrine.png"
	},
	{
		name: "Sloppy Butcher",
		image: "../../images/DbD/perks/sloppyButcher.png"
	},
	{
		name: "Nemesis",
		image: "../../images/DbD/perks/nemesis.png"
	},
	{
		name: "Hex: Thrill of the Hunt",
		image: "../../images/DbD/perks/thrillOfTheHunt.png"
	},
	{
		name: "Bloodhound",
		image: "../../images/DbD/perks/bloodhound.png"
	},
	{
		name: "Shadowborn",
		image: "../../images/DbD/perks/shadowborn.png"
	},
	{
		name: "Forced Penance",
		image: "../../images/DbD/perks/forcedPenance.png"
	},
	{
		name: "Insidious",
		image: "../../images/DbD/perks/insidious.png"
	},
	{
		name: "Franklin's Demise",
		image: "../../images/DbD/perks/franklinsLoss.png"
	},
	{
		name: "Hex: The Third Seal",
		image: "../../images/DbD/perks/theThirdSeal.png"
	},
	{
		name: "Overcharge",
		image: "../../images/DbD/perks/generatorOvercharge.png"
	},
	{
		name: "Remember Me",
		image: "../../images/DbD/perks/rememberMe.png"
	},
	{
		name: "Cruel Limits",
		image: "../../images/DbD/perks/cruelConfinement.png"
	},
	{
		name: "Distressing",
		image: "../../images/DbD/perks/distressing.png"
	},
	{
		name: "Beast of Prey",
		image: "../../images/DbD/perks/BeastOfPrey.png"
	},
	{
		name: "Gearhead",
		image: "../../images/DbD/perks/gearHead.png"
	},
	{
		name: "Spies from the Shadows",
		image: "../../images/DbD/perks/spiesFromTheShadows.png"
	},
	{
		name: "Blood Echo",
		image: "../../images/DbD/perks/bloodEcho.png"
	},
	{
		name: "Hangman's Trick",
		image: "../../images/DbD/perks/hangmansTrick.png"
	},
	{
		name: "Play with your food",
		image: "../../images/DbD/perks/playWithYourFood.png"
	},
	{
		name: "Hex: Haunted Ground",
		image: "../../images/DbD/perks/hauntedGround.png"
	},
	{
		name: "Thrilling Tremors",
		image: "../../images/DbD/perks/thrillingTremors.png"
	},
	{
		name: "Stridor",
		image: "../../images/DbD/perks/stridor.png"
	},
	{
		name: "Deerstalker",
		image: "../../images/DbD/perks/deerstalker.png"
	},
	{
		name: "Hex: Huntress Lullaby",
		image: "../../images/DbD/perks/HuntressLullaby.png"
	},
	{
		name: "Unnerving Presence",
		image: "../../images/DbD/perks/unnervingPresence.png"
	},
	{
		name: "Predator",
		image: "../../images/DbD/perks/predator.png"
	},
	{
		name: "A Nurse's Calling",
		image: "../../images/DbD/perks/aNursesCalling.png"
	},
	{
		name: "Mindbreaker",
		image: "../../images/DbD/perks/mindBreaker.png"
	},
	{
		name: "Surveillance",
		image: "../../images/DbD/perks/surveillance.png"
	},
	{
		name: "Furtive Chase",
		image: "../../images/DbD/perks/furtiveChase.png"
	},
	{
		name: "Mad Grit",
		image: "../../images/DbD/perks/madGrit.png"
	},
	{
		name: "Knock Out",
		image: "../../images/DbD/perks/knockOut.png"
	},
	{
		name: "Trail of Torment",
		image: "../../images/DbD/perks/trailOfTorment.png"
	},
	{
		name: "Brutal Strength",
		image: "../../images/DbD/perks/brutalStrength.png"
	},
	{
		name: "Coulrophobia",
		image: "../../images/DbD/perks/coulrophobia.png"
	},
	{
		name: "Whispers",
		image: "../../images/DbD/perks/whispers.png"
	},
	{
		name: "Discordance",
		image: "../../images/DbD/perks/discordance.png"
	},
	{
		name: "Make your Choice",
		image: "../../images/DbD/perks/makeYourChoice.png"
	},
	{
		name: "Dying Light",
		image: "../../images/DbD/perks/dyingLight.png"
	},
	{
		name: "Territorial Imperative",
		image: "../../images/DbD/perks/TerritorialImperative.png"
	},
    {
		name: "Dragon's Grip",
		image: "../../images/DbD/perks/dragonsGrip.png"
	},
    {
		name: "Hex: Undying",
		image: "../../images/DbD/perks/hexUndying.png"
	},
    {
		name: "Hoarder",
		image: "../../images/DbD/perks/Hoarder.png"
	},
    {
		name: "Oppression",
		image: "../../images/DbD/perks/Oppression.png"
	},
    {
		name: "Coup de Grâce",
		image: "../../images/DbD/perks/coupDeGrace.png"
	},
    {
		name: "Starstruck",
		image: "../../images/DbD/perks/starstruck.png"
	},
    {
		name: "Hex: Crowd Control",
		image: "../../images/DbD/perks/hexCrowdControl.png"
	},
    {
		name: "Hysteria",
		image: "../../images/DbD/perks/hysteria.png"
	},
    {
        name: "Hex: Plaything",
        image: "../../images/DbD/perks/hexPlaything.webp"
    },
    {
        name: "Scourge Hook: Gift of Pain",
        image: "../../images/DbD/perks/scourgeHookGiftOfPain.webp"
    },
    {
        name: "Grim Embrace",
        image: "../../images/DbD/perks/grimEmbrace.webp"
    },
    {
        name: "Hex: Pentimento",
        image: "../../images/DbD/perks/hexPentimento.webp"
    },
    {
        name: "Call of Brine",
        image: "../../images/DbD/perks/callOfBrine.webp"
    }
];