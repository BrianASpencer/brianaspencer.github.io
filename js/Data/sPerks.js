const survivorPerks = [
	{
		name: "Babysitter",
		image: "../../images/DbD/perks/babySitter.png"
	},
	{
		name: "Open-Handed",
		image: "../../images/DbD/perks/openHanded.png"
	},
	{
		name: "Quick & Quiet",
		image: "../../images/DbD/perks/quickAndQuiet.png"
	},
	{
		name: "Soul Guard",
		image: "../../images/DbD/perks/soulGuard.png"
	},
	{
		name: "Technician",
		image: "../../images/DbD/perks/technician.png"
	},
	{
		name: "For the People",
		image: "../../images/DbD/perks/forThePeople.png"
	},
	{
		name: "Plunderer's Instinct",
		image: "../../images/DbD/perks/plunderersInstinct.png"
	},
	{
		name: "Empathy",
		image: "../../images/DbD/perks/empathy.png"
	},
	{
		name: "Prove Thyself",
		image: "../../images/DbD/perks/proveThyself.png"
	},
	{
		name: "Sprint Burst",
		image: "../../images/DbD/perks/sprintBurst.png"
	},
	{
		name: "Spine Chill",
		image: "../../images/DbD/perks/spineChill.png"
	},
	{
		name: "Deja Vu",
		image: "../../images/DbD/perks/dejaVu.png"
	},
	{
		name: "Botany Knowledge",
		image: "../../images/DbD/perks/botanyKnowledge.png"
	},
	{
		name: "Any Means Necessary",
		image: "../../images/DbD/perks/anyMeansNecessary.png"
	},
	{
		name: "We'll make it",
		image: "../../images/DbD/perks/wellMakeIt.png"
	},
	{
		name: "Lightweight",
		image: "../../images/DbD/perks/lightweight.png"
	},
	{
		name: "Pharmacy",
		image: "../../images/DbD/perks/pharmacy.png"
	},
	{
		name: "Kindred",
		image: "../../images/DbD/perks/kindred.png"
	},
	{
		name: "Second Wind",
		image: "../../images/DbD/perks/secondWind.png"
	},
	{
		name: "Vigil",
		image: "../../images/DbD/perks/vigil.png"
	},
	{
		name: "Balanced Landing",
		image: "../../images/DbD/perks/balancedLanding.png"
	},
	{
		name: "Dark Sense",
		image: "../../images/DbD/perks/darkSense.png"
	},
	{
		name: "Breakdown",
		image: "../../images/DbD/perks/breakdown.png"
	},
	{
		name: "Lithe",
		image: "../../images/DbD/perks/lithe.png"
	},
	{
		name: "Diversion",
		image: "../../images/DbD/perks/diversion.png"
	},
	{
		name: "Dance With Me",
		image: "../../images/DbD/perks/danceWithMe.png"
	},
	{
		name: "Borrowed Time",
		image: "../../images/DbD/perks/borrowedTime.png"
	},
	{
		name: "Dead Hard",
		image: "../../images/DbD/perks/DeadHard.png"
	},
	{
		name: "Saboteur",
		image: "../../images/DbD/perks/saboteur.png"
	},
	{
		name: "Detective's Hunch",
		image: "../../images/DbD/perks/detectivesHunch.png"
	},
	{
		name: "Alert",
		image: "../../images/DbD/perks/alert.png"
	},
	{
		name: "Calm Spirit",
		image: "../../images/DbD/perks/calmSpirit.png"
	},
	{
		name: "Resilience",
		image: "../../images/DbD/perks/resilience.png"
	},
	{
		name: "Boil Over",
		image: "../../images/DbD/perks/boilOver.png"
	},
	{
		name: "Sole Survivor",
		image: "../../images/DbD/perks/soleSurvivor.png"
	},
	{
		name: "Lucky Break",
		image: "../../images/DbD/perks/luckyBreak.png"
	},
	{
		name: "Buckle Up",
		image: "../../images/DbD/perks/buckleUp.png"
	},
	{
		name: "Self-Care",
		image: "../../images/DbD/perks/selfCare.png"
	},
	{
		name: "Windows of Opportunity",
		image: "../../images/DbD/perks/windowsOfOpportunity.png"
	},
	{
		name: "Deliverance",
		image: "../../images/DbD/perks/deliverance.png"
	},
	{
		name: "Small Game",
		image: "../../images/DbD/perks/smallGame.png"
	},
	{
		name: "Mettle of Man",
		image: "../../images/DbD/perks/mettleOfMan.png"
	},
	{
		name: "Tenacity",
		image: "../../images/DbD/perks/tenacity.png"
	},
	{
		name: "Repressed Alliance ",
		image: "../../images/DbD/perks/repressedAlliance.png"
	},
	{
		name: "Poised",
		image: "../../images/DbD/perks/poised.png"
	},
	{
		name: "Iron Will",
		image: "../../images/DbD/perks/ironWill.png"
	},
	{
		name: "Camaraderie",
		image: "../../images/DbD/perks/camaraderie.png"
	},
	{
		name: "Breakout",
		image: "../../images/DbD/perks/breakout.png"
	},
	{
		name: "No One Left Behind",
		image: "../../images/DbD/perks/noOneLeftBehind.png"
	},
	{
		name: "Left Behind",
		image: "../../images/DbD/perks/leftBehind.png"
	},
	{
		name: "This Is Not Happening",
		image: "../../images/DbD/perks/thisIsNotHappening.png"
	},
	{
		name: "Better Together",
		image: "../../images/DbD/perks/betterTogether.png"
	},
	{
		name: "Decisive Strike",
		image: "../../images/DbD/perks/decisiveStrike.png"
	},
	{
		name: "Stake Out",
		image: "../../images/DbD/perks/stakeOut.png"
	},
	{
		name: "Blood Pact",
		image: "../../images/DbD/perks/bloodPact.png"
	},
	{
		name: "Head On",
		image: "../../images/DbD/perks/headOn.png"
	},
	{
		name: "Autodidact",
		image: "../../images/DbD/perks/autodidact.png"
	},
	{
		name: "Red Herring",
		image: "../../images/DbD/perks/redHerring.png"
	},
	{
		name: "Up the Ante",
		image: "../../images/DbD/perks/upTheAnte.png"
	},
	{
		name: "Adrenaline",
		image: "../../images/DbD/perks/adrenaline.png"
	},
	{
		name: "Unbreakable",
		image: "../../images/DbD/perks/unbreakable.png"
	},
	{
		name: "Distortion",
		image: "../../images/DbD/perks/distortion.png"
	},
	{
		name: "Inner Strength",
		image: "../../images/DbD/perks/innerStrength.png"
	},
	{
		name: "We're Gonna Live Forever",
		image: "../../images/DbD/perks/WereGonnaLiveForever.png"
	},
	{
		name: "Premonition",
		image: "../../images/DbD/perks/premonition.png"
	},
	{
		name: "Flip-Flop",
		image: "../../images/DbD/perks/flipFlop.png"
	},
	{
		name: "Ace in the Hole",
		image: "../../images/DbD/perks/aceInTheHole.png"
	},
	{
		name: "Leader",
		image: "../../images/DbD/perks/leader.png"
	},
	{
		name: "Hope",
		image: "../../images/DbD/perks/hope.png"
	},
	{
		name: "Solidarity",
		image: "../../images/DbD/perks/solidarity.png"
	},
	{
		name: "Urban Evasion",
		image: "../../images/DbD/perks/urbanEvasion.png"
	},
	{
		name: "Aftercare",
		image: "../../images/DbD/perks/aftercare.png"
	},
	{
		name: "No Mither",
		image: "../../images/DbD/perks/NoMither.png"
	},
	{
		name: "Wake Up!",
		image: "../../images/DbD/perks/wakeUp.png"
	},
	{
		name: "Slippery Meat",
		image: "../../images/DbD/perks/slipperyMeat.png"
	},
	{
		name: "Fixated",
		image: "../../images/DbD/perks/fixated.png"
	},
	{
		name: "Streetwise",
		image: "../../images/DbD/perks/streetwise.png"
	},
	{
		name: "Bond",
		image: "../../images/DbD/perks/bond.png"
	},
	{
		name: "Off the Record",
		image: "../../images/DbD/perks/offTheRecord.png"
	},
    {
		name: "Appraisal",
		image: "../../images/DbD/perks/appraisal.png"
	},
    {
		name: "Deception",
		image: "../../images/DbD/perks/deception.png"
	},
    {
		name: "Power Struggle",
		image: "../../images/DbD/perks/powerStruggle.png"
	},
    {
		name: "Visionary",
		image: "../../images/DbD/perks/visionary.png"
	},
    {
		name: "Desperate Measures",
		image: "../../images/DbD/perks/desperateMeasures.png"
	},
    {
		name: "Built To Last",
		image: "../../images/DbD/perks/builtToLast.png"
	},
    {
		name: "Fast Track",
		image: "../../images/DbD/perks/fastTrack.png"
	},
    {
		name: "Smash Hit",
		image: "../../images/DbD/perks/smashHit.png"
	},
    {
		name: "Self-Preservation",
		image: "../../images/DbD/perks/selfPreservation.png"
	},
    {
		name: "Bite the Bullet",
		image: "../../images/DbD/perks/BiteTheBullet.png"
	},
    {
		name: "Blast Mine",
		image: "../../images/DbD/perks/blastMine.png"
	},
    {
		name: "Counterforce",
		image: "../../images/DbD/perks/Counterforce.png"
	},
    {
		name: "Flashbang",
		image: "../../images/DbD/perks/Flashbang.png"
	},
    {
		name: "Resurgence",
		image: "../../images/DbD/perks/Resurgence.png"
	},
    {
		name: "Rookie Spirit",
		image: "../../images/DbD/perks/RookieSpirit.png"
	}
];