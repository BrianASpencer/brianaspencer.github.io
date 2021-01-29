const kill = document.getElementById('kPerks');
const killerPerks = [
	{
	name: "Deathbound",
	descritpion: "Those whose lives are intertwined in darkness are destined to suffer together.<br><br>When a Survivor heals another Survivor for one health state at least <span class='Highlight1'>{0} meters</span> away from the Killer, the Survivor performing the healing action will scream, revealing their location and activating <i>Deathbound</i> for the next <span class='Highlight2'>{1} seconds.</span> During that time, the Survivor will suffer from the <b>Oblivious</b> status effect when further than <span class='Highlight3'>{2} meters</span> away from the healed Survivor. ",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Wales/iconPerks_deathbound.png"
	},
	{
	name: "Iron Maiden",
	descritpion: "You open lockers <span class='Highlight1'>{0}%</span> faster.<br><br>Survivors who exit lockers suffer from the Exposed status effect for <span class='Highlight1'>{2} seconds</span> and their location is revealed for <span class='Highlight1'>{1} seconds</span>.<br><br><span class='FlavorText'>“This is no place for cowards.” -The Legion</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kenya/iconPerks_ironMaiden.png"
	},
	{
	name: "Hex: Ruin",
	descritpion: "A Hex that affects all Survivors' generator repairs progress. All generators are affected by <i>Hex: Ruin</i>. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at <span class='Highlight1'>{0}%</span> of the normal regression speed.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br><span class='FlavorText'>“A curse is upon you. It will be your ruin.”</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC3/iconPerks_ruin.png"
	},
	{
	name: "Dead Man’s Switch	",
	descritpion: "You become <b>obsessed</b> with one Survivor.<br><br>After hooking the Obsession, <i>Dead Man’s Switch</i> activates for the next <span class='Highlight1'>{0} seconds</span>. <br><br>While activated, any Survivor that stops repairing a generator before it is fully repaired causes The Entity to block the generator until <i>Dead Man’s Switch's</i> effect ends. <br><br>Affected generators are highlighted by a white aura.<br><br><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i><br><br><span class='FlavorText'>'I've seen the look on a man's face when he realizes he's going to die.' -Caleb Quinn</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ukraine/iconPerks_deadManSwitch.png"
	},
	{
	name: "Dark Devotion",
	descritpion: "The display of your Powers creates a whirlwind of panic that spreads throughout the land.<br><br>You become obsessed with one Survivor. Hitting the Obsession with a <i>basic attack</i> transfers your Terror Radius to the Obsession for <span class='Highlight2'>{1} seconds</span>, and sets its radius to <span class='Highlight1'>{0} meters</span>. You are granted the <b>Undetectable</b> status effect for the duration.<br><br>The Survivor with the transferred Terror Radius is also considered to be 'inside the Terror Radius' for other purposes.<br><br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><br><span class='FlavorText'>“And terror shall take hold of a defiant non-believer, who shall falsely announce my arrival.” (The Tablet of Adiris, 48.9)</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Mali/iconPerks_darkDevotion.png"
	},
	{
	name: "Monitor & Abuse",
	descritpion: "Meticulous in your approach, terrifying in your application.<br>While in a chase, your Terror Radius is increased by <span class='Highlight1'>{0} meters</span>. Otherwise, your Terror Radius is decreased by <span class='Highlight2'>{0} meters</span> and your field of view is increased by <span class='Highlight3'>{1} degrees</span>.<br><i>Field of view gains do not stack.</i><br><span class='FlavorText'>'It's time for your treatment!' -The Doctor</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC4/iconPerks_monitorAndAbuse.png"
	},
	{
	name: "Overwhelming Presence",
	descritpion: "Your presence alone instills great fear. Survivors within your Terror Radius suffer from inefficiency.<br>Affected Survivors' item consumption rates are increased by <span class='Highlight1'>{0}%</span>.<br><span class='FlavorText'>'Shit!! I dropped the gauze!'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC4/iconPerks_overwhelmingPresence.png"
	},
	{
	name: "Agitation",
	descritpion: "You get excited in anticipation of hooking your prey. Increases your movement speed while transporting bodies by <span class='Highlight1'>{0}%</span>. While transporting a body, your Terror Radius is increased by <span class='Highlight2'>{1} meters</span>.<br><span class='FlavorText'>'At some point, the excitement of hooking one of us becomes more important than the desire to kill us.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_agitation.png"
	},
	{
	name: "Tinkerer",
	descritpion: "When a Generator is repaired to <span class='Highlight1'>{0}%</span> repair progress, it triggers a loud noise notification and you are granted the <b>Undetectable</b> status effect for <span class='Highlight2'>{2} seconds</span>.<br><span class='FlavorText'>'The Hillbilly makes impressive tools out of scraps. Tools aimed at maiming us in creative ways...' -Notebook</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_tinkerer.png"
	},
	{
	name: "Fire Up",
	descritpion: "The increased pressure of losing your prey fills you with anger and gives you unsuspected motivation. Each time the Survivors complete repairs on a generator, Fire Up grows in power.<br><li>For each generator completed, gain a <span class='Highlight1'>{0}%</span> stackable buff that grants a speed bonus to picking up, dropping, vaulting, damaging generators, and breaking pallets and breakables for the remainder of the trial.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/England/iconPerks_fireUp.png"
	},
	{
	name: "Blood Warden",
	descritpion: "As soon as an Exit Gate is opened, Blood Warden is activated. The auras of any Survivors located within Exit areas are revealed to you. <br>Once per match, hooking a Survivor while Blood Warden is active calls upon The Entity to block both Exits for all Survivors for <span class='Highlight1'>{0} seconds</span>.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/England/iconPerks_bloodWarden.png"
	},
	{
	name: "Unrelenting",
	descritpion: "You recuperate faster from missed attacks made with your main weapon. The cooldown after missed <i>basic attacks</i> is reduced by <span class='Highlight1'>{0}%</span>.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_unrelenting.png"
	},
	{
	name: "Iron Grasp",
	descritpion: "Your powerful hold on the Survivors causes escapes to be nearly impossible. Effects of Survivor struggling are reduced by <span class='Highlight1'>{0}%</span>. Time to struggle out of your grasp is increased by <span class='Highlight2'>{1}%</span>.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_ironGrasp.png"
	},
	{
	name: "Monstrous Shrine",
	descritpion: "Your fervent care of the hooks found in the basement have aroused The Entity's interest. The basement hooks grant the following bonuses:<br><li><span class='Highlight1'>{0}%</span> faster Entity progress.</li><li><span class='Highlight2'>{1}%</span> increased difficulty on escape attempts.</li><li><span class='Highlight3'>{2}%</span> increased penalty on escape fails.</li><br><span class='FlavorText'>'Then you will know that there is no escape. When hanging in the depths, you face the dark one.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_monstrousShrine.png"
	},
	{
	name: "Sloppy Butcher",
	descritpion: "",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_sloppyButcher.png"
	},
	{
	name: "Nemesis",
	descritpion: "You seek retribution on those who have wronged you. A Survivor who blinds you or stuns you using a pallet or locker becomes your Obsession.<br><br>Anytime a new Survivor becomes the Obsession, they are affected by the <span class='Highlight1'>Oblivious</span> status effect for <span class='Highlight2'>{0} seconds</span> and their aura is shown to you for <span class='Highlight3'>{1} seconds</span>.<br><br><li>The Killer can only be <b>obsessed</b> with one Survivor at a time.</li><br><br><span class='FlavorText'>“Only a fool would spit in a demon’s face and declare victory.” -Renjiro’s Doctrine 4:9</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Sweden/iconPerks_nemesis.png"
	},
	{
	name: "Hex: Thrill of the Hunt",
	descritpion: "A Hex rooting its power on hope. The false hope of Survivors fills you with excitement and strengthen your totems. For each Dull and Hex totem remaining on the map gain a token. <br><li>Gain <span class='Highlight1'>{0}%</span> more Bloodpoints for actions in the Hunter category for each token.</li><li>Survivors' cleansing speed is reduced by <span class='Highlight2'>{1}%</span> for each token.</li><li>Gain a notification when someone starts working on a Hex totem.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC3/iconPerks_thrillOfTheHunt.png"
	},
	{
	name: "Bloodhound",
	descritpion: "Like a hunting scent hound, you smell traces of blood at a great distance. Fresh blood marks are <span class='Highlight1'>considerably</span> more discernible than normal and can be tracked for <span class='Highlight2'>{0} seconds</span> longer than normal.<br><span class='FlavorText'>'Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_bloodhound.png"
	},
	{
	name: "Shadowborn",
	descritpion: "You have a keen vision in the darkness of the night. Your field of view is <span class='Highlight2'>{0} degrees</span> wider than normal.<br><i>Does not stack with other FOV increases.</i><br><span class='FlavorText'>'Shining in the darkest dark, his eyes pierce the night and sting your soul.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_shadowborn.png"
	},
	{
	name: "Forced Penance",
	descritpion: "Those who stand in the way of duty will suffer harsh judgment.<br><br>Survivors who take a protection hit are inflicted with the <b>Broken</b> status effect for <span class='Highlight1'>{0} seconds.</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Wales/iconPerks_forcedPenance.png"
	},
	{
	name: "Insidious",
	descritpion: "Unlocks the stealth ability.<br><br>Standing still for <span class='Highlight1'>{0} seconds</span> grants you the <b>Undetectable</b> status effect until you move or act again.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_insidious.png"
	},
	{
	name: "Rancor",
	descritpion: "You become <b>obsessed</b> with one Survivor.<br>Each time a generator is completed, your obsession (a Survivor) sees your aura for <span class='Highlight1'> {0} seconds</span>.<br>Each time a generator is completed, all Survivors' locations are revealed to you for <span class='Highlight2'> {1} seconds</span>.<br>Once all generators are completed, the Obsession has the <span class='Highlight3'>Exposed </span>status effect and you can <span class='Highlight3'>kill</span> your obsession.<br><li><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Haiti/iconPerks_hatred.png"
	},
	{
	name: "Franklin's Demise",
	descritpion: "Your vicious attacks make Survivors drop their item on impact. The lost item will be consumed by the Entity after <span class='Highlight1'>{0} seconds</span> if it is not picked up.<br>Reveal  items on the ground within <span class='Highlight2'>{1} meters</span> with a white aura. The aura of items on the ground fade to red until they are consumed by the Entity.<br><span class='FlavorText'>'Sally, I hear something. Stop! Stop!' -Franklin</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Cannibal/iconPerks_franklinsLoss.png"
	},
	{
	name: "Hex: The Third Seal",
	descritpion: "A Hex that hinders one's aura reading ability. Hitting a Survivor with a <i>basic attack</i> while the Hex Totem is active applies the <b>Blindness</b> status effect. This effect applies to the last <span class='Highlight1'>{0}</span> Survivors hit.<br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><span class='FlavorText'>“She touched your skin, you bear the witch's mark!”</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC3/iconPerks_theThirdSeal.png"
	},
	{
	name: "Overcharge",
	descritpion: "You are fuelled by your hate for progress.<br>Overcharge a generator by performing the <b>Damage Generator</b> action. The next Survivor interacting with that generator is faced with a <span class='Highlight1'>tremendously</span> difficult Skill Check. Failing the Skill Check results in an additional <span class='Highlight2'>{0}%</span> generator regression.<br>Succeeding the Skill Check grants no progress but prevents the generator explosion.<br><span class='FlavorText'>'It is a trap. But a trap one must step in…' -The Doctor</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC4/iconPerks_generatorOvercharge.png"
	},
	{
	name: "Remember Me",
	descritpion: "You become <b>obsessed</b> with one Survivor. Each time you hit your Obsession with a <i>basic attack</i>, you increase the opening time of the Exit Gates by <span class='Highlight1'>{0} seconds</span> up to a maximum of <span class='Highlight2'>{1} additional seconds</span>.<br>The Obsession is not affected by <i>Remember Me.<i></i><br><li>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/England/iconPerks_rememberMe.png"
	},
	{
	name: "Infectious Fright",
	descritpion: "The cries of the unfaithful makes your heart leap.<br>Any Survivors that are within your Terror Radius while another Survivor is put into the dying state will yell and reveal their location to you for <span class='Highlight1'>{0} seconds</span>.<br><span class='FlavorText'>“Horror overcomes the heart of infidels who cry at the feet of the fallen.” (Hymn of Praise, 11. 4)</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Mali/iconPerks_infectiousFright.png"
	},
	{
	name: "Bamboozle",
	descritpion: "Your vault speed is <span class='Highlight1'>{0}%</span> faster.<br>Performing a vault action calls upon The Entity to block that vault location for <span class='Highlight1'>{1} seconds</span>.<br>Only 1 vault location may be blocked in this way at any time. The vault location is blocked only for Survivors. <br>Does not affect pallets.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Guam/iconPerks_bamboozle.png"
	},
	{
	name: "Cruel Limits",
	descritpion: "Your ties to the otherworldly manifest when your prey attempts to get away.<br><br>Every time a generator is completed, all windows and vault locations within a <span class='Highlight1'>{0} meter radius</span> from the completed generator are blocked for all Survivors for the next <span class='Highlight2'>{1} seconds</span>. <br><br>You see the aura of the vault locations blocked by <i>Cruel Limits</i> for the duration.<br><br><span class='FlavorText'>“The specimen seems to be able to affect the state of nearby objects, as if they existed in some other form within a dimension alternate to our own.” -Hawkins National Laboratory</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_cruelConfinement.png"
	},
	{
	name: "Distressing",
	descritpion: "Your horrifying emanation strikes at a supernaturally long distance. Your Terror Radius is increased by <span class='Highlight1'>{0}%</span>. Gain <span class='Highlight2'>{1}%</span> more Bloodpoints for actions in the Deviousness category.<br><span class='FlavorText'>'Bask in their fear.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_distressing.png"
	},
	{
	name: "Beast of Prey",
	descritpion: "Your lust for a kill is so intense that your connection with the Entity is momentarily lost, making you totally unpredictable.<br><br>Grants the <b>Undetectable</b> status effect after gaining Bloodlust Tier I. The status effect is removed once you lose Bloodlust.<br><br><li>Gain <span class='Highlight1'>{0}%</span> more Bloodpoints for actions in the Hunter Category.</li><br><span class='FlavorText'>'Where did she go?'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC5/iconPerks_BeastOfPrey.png"
	},
	{
	name: "Gearhead",
	descritpion: "You’ve got an ear for well-oiled gears.<br><br>After hitting a Survivor <span class='Highlight1'>{0}</span> times with your <i>basic attack</i>, <i>Gearhead</i> activates for <span class='Highlight2'>{1} seconds</span>.<br><br>While <i>Gearhead</i> is active, each time a Survivor completes a Good Skill Check while repairing, the generator will be revealed by a yellow aura for as long as it is being repaired.<br><br><span class='FlavorText'>'Sometimes a man's best work is what puts him in the grave.' -The prison warden</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ukraine/iconPerks_gearHead.png"
	},
	{
	name: "Spies from the Shadows",
	descritpion: "The crows found in the world can communicate with you directly. <span class='Highlight1'>{0}%</span> of the time, cawing crows give you a visual cue when you are within a <span class='Highlight2'>{1} meter</span> range.<br><i>Spies From The Shadows</i> has a cooldown of <span class='Highlight3'>{2} seconds.</span> <br><span class='FlavorText'>'In the shadows they torment, scarring our minds with each scream.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_spiesFromTheShadows.png"
	},
	{
	name: "Blood Echo",
	descritpion: "The agony of one is inflicted on others.<br><br>When hooking a Survivor, all other injured Survivors suffer from the <span class='Highlight1'>Hemorrhage</span> status effect until healed and the <span class='Highlight1'>Exhaustion</span> status effect for <span class='Highlight2'>{0} seconds</span>.<br><br><i>Blood Echo</i> has a cooldown of <span class='Highlight3'>{1} seconds.</span><br><br><span class='FlavorText'>“Attack an enemy with precision and their allies will feel it.” -Renjiro’s Doctrine 6:3</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Sweden/iconPerks_bloodEcho.png"
	},
	{
	name: "Hangman's Trick",
	descritpion: "Your ingenious modifications to Hooks alert you of tampering.<br><li>Gain a notification when a Survivor begins sabotaging a hook.</li><li>While carrying a Survivor, see the aura of any Survivor within <span class='Highlight1'>{0} meters</span> of a hook.</li><br><span class='FlavorText'>'No excuses, no equivocations… No crying.' -Amanda Young</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Finland/iconPerks_hangmansTrick.png"
	},
	{
	name: "Play with your food",
	descritpion: "You become <b>obsessed</b> with one Survivor.<br>Every time you chase your obsession and let them escape, you receive a token up to a maximum of {0} tokens.<br>Each token increases your movement speed by <span class='Highlight1'>{1}%</span>.<br>Performing a <i>basic attack</i> or <i>Special Attack</i> spends one token.<br><li><i>The Killer can only be <b>obsessed</b> with one survivor at a time.</i></li><br><span class='FlavorText'>“You've fooled them, haven't you Michael? But not me.” -Dr. Sam Loomis</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC2/iconPerks_playWithYourFood.png"
	},
	{
	name: "Hex: Haunted Ground",
	descritpion: "Two trapped Hex Totems will spawn in the Trial.<br>When either one of the two trapped Hex Totems is cleansed by a Survivor, all Survivors suffer from the <span class='Highlight3'>Exposed status effect</span> for <span class='Highlight1'> {0} seconds</span>. <br>The remaining trapped Hex Totem immediately becomes a Dull Totem.<br><br><span class='FlavorText'>“Her home became profane.”</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Haiti/iconPerks_hauntedGround.png"
	},
	{
	name: "Hex: Retribution",
	descritpion: "A hex that lashes out upon its destruction. Those who cross you will be punished.<br><br>Any Survivor who cleanses a Dull Totem will suffer from the <b>Oblivious</b> status effect for <span class='Highlight1'>{0} seconds</span>.<br><br>If any Hex Totem is cleansed, including this one, the auras of all Survivors are revealed for <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>'Bloody fool, you pulled the trigger on yourself.' -Caleb Quinn</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ukraine/iconPerks_hexRetribution.png"
	},
	{
	name: "Thrilling Tremors",
	descritpion: "Your dark designs and shrewd composure rouse The Entity.<br><br>After picking up a Survivor, all Generators not being repaired by Survivors are blocked by The Entity and cannot be repaired for the next <span class='Highlight1'>{0} seconds</span>. Affected generators are highlighted by a white aura.<br><br><i>Thrilling Tremors</i> can only be triggered once every <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>'The night assists me and it’s endless here.' –The Ghost Face</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Oman/iconPerks_thrillingTremors.png"
	},
	{
	name: "Stridor",
	descritpion: "You are acutely sensitive to the breathing of your prey. Breathing of Survivors in pain is <span class='Highlight1'>{0}%</span> louder and regular breathing is <span class='Highlight2'>{1}%</span> louder.<br><span class='FlavorText'>“If you don’t stop and catch your breath… she will.”</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_stridor.png"
	},
	{
	name: "Deerstalker",
	descritpion: "Unlocks potential in one's aura reading ability. Reveals dying survivors' auras when standing within a <span class='Highlight1'>{0} meter</span> range.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_deerstalker.png"
	},
	{
	name: "Pop Goes the Weasel",
	descritpion: "A deep bond with The Entity unlocks great strength. After Hooking a Survivor, the next generator you break is instantly regressed by <span class='Highlight1'>{0}%</span> of its total progress. Normal generator regression applies after the damage is done.<br><i>Pop Goes the Weasel</i> is active for <span class='Highlight1'>{1} seconds</span> after the Survivor is hooked.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Guam/iconPerks_popGoesTheWeasel.png"
	},
	{
	name: "Save the best for last",
	descritpion: "You become <b>obsessed</b> with one Survivor.<br>Earn a token for each successful <i>basic attack</i> that is not dealt to the Obsession. <br>Each Token grants a stackable <span class='Highlight1'>{0}%</span> decreased successful <i>basic attack</i> cooldown, you can earn up to <span class='Highlight2'>{1}</span> tokens.<br>Hitting your Obsession with a <i>basic attack</i> will cause you to lose <span class='Highlight3'>{2}</span> tokens. <br>You can no longer gain tokens if your Obsession is sacrificed or killed.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><span class='FlavorText'>'Death has come to your little town, sheriff.' -Dr. Sam Loomis</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC2/iconPerks_saveTheBestForLast.png"
	},
	{
	name: "Bitter Murmur",
	descritpion: "Unlocks potential in one's aura reading ability. Each time a generator is fully repaired, survivors within <span class='Highlight1'>{0} meters</span> of the completed generator will be revealed for <span class='Highlight2'>{1} seconds</span>.<br>When the last generator is fully repaired, all the survivors auras are revealed for <span class='Highlight3'>{2} seconds</span>.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_bitterMurmur.png"
	},
	{
	name: "Hex: Huntress Lullaby",
	descritpion: "A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey's attention. Survivors receive a <span class='Highlight1'>{0}%</span> regression penalty when missing any Skill Check.<br>Each time a Survivor is hooked, Huntress Lullaby grows in power:<br><li><b>1 to 4 Tokens:</b> Time between the Skill Check warning sound and the Skill Check becomes shorter.</li><li><b>5 Tokens:</b> No Skill Check warning.</li><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC5/iconPerks_HuntressLullaby.png"
	},
	{
	name: "Unnerving Presence",
	descritpion: "Your presence alone instills great fear. Survivors within your Terror Radius have a <span class='Highlight1'>{0}%</span> greater chance of triggering Skill Checks when repairing, healing, or sabotaging. Triggered Skill Checks' success zones are reduced by <span class='Highlight2'>{1}%</span>.<br><span class='FlavorText'>'Its presence befalls us.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_unnervingPresence.png"
	},
	{
	name: "Predator",
	descritpion: "",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_predator.png"
	},
	{
	name: "I'm All Ears",
	descritpion: "Your keen senses are sharpened in the dark realm of The Entity.<br><br>Unlocks potential in one's aura reading ability. Any Survivor performing a rushed action within <span class='Highlight1'>48 meters</span> from your location will have their aura revealed for <span class='Highlight2'>{0} seconds</span>.<br><br><i>I'm All Ears</i> can only be triggered once every <span class='Highlight3'>{1} seconds</span>.<br><br><span class='FlavorText'>“There is no need to worry. I’ve been preparing my whole life for this.' –The Ghost Face</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Oman/iconPerks_imAllEars.png"
	},
	{
	name: "Surge",
	descritpion: "Your eerie presence charges the air and interferes with technology.<br><br>Putting a Survivor into the dying state with a <i>basic attack</i> causes all generators within a <span class='Highlight1'>{0} meter radius</span> to instantly explode and regress. This applies an additional regression of <span class='Highlight2'>{1}%</span>.<li><i>Surge</i> can only be triggered once every  <span class='Highlight3'>{2} seconds</span>.</li><br><br><span class='FlavorText'>“The creature appears to have some unknown influence over electricity and nearby electronics.” -Hawkins National Laboratory</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_surge.png"
	},
	{
	name: "A Nurse's Calling",
	descritpion: "Unlocks potential in one's aura reading ability. The auras of Survivors who are healing or being healed are revealed to you when they are within a <span class='Highlight1'>{0} meter</span> range.<br><span class='FlavorText'>“Still attached to the fragments of her past life, she is drawn to those in need of help.”</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_aNursesCalling.png"
	},
	{
	name: "Zanshin Tactics",
	descritpion: "Unlocks potential in one's aura reading ability. You are mentally alert and aware of key points on the battlefield.<br><br>The auras of all pallets, breakable walls, and vault locations are revealed to you within a <span class='Highlight1'>{0} meter</span> range.<br><br>When a survivor is damaged, <i>Zanshin Tactics</i> becomes inactive for <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>“Within your enemy’s strength is weakness.” -Renjiro’s Doctrine 12:5</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Sweden/iconPerks_zanshinTactics.png"
	},
	{
	name: "Enduring",
	descritpion: "You are resilient to pain. You reduce the duration of <b>Pallet Stuns</b> by <span class='Highlight1'>{0}%</span>.<br><span class='FlavorText'>'He stops at nothing.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_enduring.png"
	},
	{
	name: "Mindbreaker",
	descritpion: "Your distressing presence drains and weakens your prey.<br><br>While repairing generators with less than <span class='Highlight1'>{0}%</span> repair progression, Survivors are afflicted by the <b>Exhausted</b> status effect.<br><br>Any existing <b>Exhausted</b> status effect timers are paused while the Survivor is repairing a Generator. After ending the repair action, the Survivor is afflicted by the <b>Exhausted</b> status effect for <span class='Highlight2'>{1} second(s)</span>.<br><br><span class='FlavorText'>'The specimen's apparent telepathic ability can evoke feelings of dread and fatigue in nearby individuals.' -Hawkins National Laboratory</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_mindBreaker.png"
	},
	{
	name: "Surveillance",
	descritpion: "Unlocks potential in one's aura reading ability. Any regressing generator will be highlighted by a white aura. If the regression is interrupted on a generator, it will be highlighted by a yellow aura for <span class='Highlight1'>{0} seconds</span>.<br>Noises created by generator repairs are audible at an additional <span class='Highlight2'>{1} meters</span>.<br><span class='FlavorText'>'Are you gonna behave?' -Amanda Young</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Finland/iconPerks_surveillance.png"
	},
	{
	name: "Furtive Chase",
	descritpion: "You become <b>obsessed</b> with one Survivor. You lurk in the shadows, eliminating your victims one by one. When your Obsession is hooked, <i>Furtive Chase</i> receives a token, up to a maximum of <span class='Highlight1'>{0} tokens</span>.<br><br>Each token decreases your Terror Radius by <span class='Highlight2'>{1} meters</span> while in a chase.<br><br>When a Survivor rescues the Obsession from a hook, the rescuer becomes the Obsession. You lose all your tokens if the Obsession is sacrificed or killed.<br><br><li>The Killer may only be <b>obsessed</b> with one Survivor at a time.</li><br><br><span class='FlavorText'>'You have no idea what I have planned for you. It’ll be in the news for weeks: I’ll make sure of it.' –The Ghost Face</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Oman/iconPerks_furtiveChase.png"
	},
	{
	name: "Mad Grit",
	descritpion: "While carrying a Survivor, you suffer no cooldown for missed <i>basic attacks</i> and successfully hitting another Survivor with a <i>basic attack</i> will pause the carried Survivor’s wiggle timer for <span class='Highlight1'>{0} seconds</span>.<br><br><span class='FlavorText'>“There’s no getting out of this now. We’re too good at it.” -The Legion</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kenya/iconPerks_madGrit.png"
	},
	{
	name: "Knock Out",
	descritpion: "The trauma caused by your brutal attacks makes crying for help painfully difficult.<br>Survivors put into the dying state by your basic attacks are not revealed other Survivors when they are standing outside of a <span class='Highlight1'>{2}-meter</span> range.<br>Survivors put into the dying state by your basic attacks crawl <span class='Highlight2'>{1}% slower</span> for <span class='Highlight3'>{0} seconds</span>.<br>During this time, Survivors are affected by the <b>Blindness</b> status effect.<br><span class='FlavorText'>'Oh, that gun's no good. The old way… with a sledge! You see, that way's better. They die better that way.' -Nubbins Sawyer</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Cannibal/iconPerks_knockOut.png"
	},
	{
	name: "Trail of Torment",
	descritpion: "You guide your victims along a path of pain and punishment.<br><br>After kicking a generator, you become <b>Undetectable</b> for <span class='Highlight1'>{0} seconds.</span> During this time, the generator’s yellow aura is revealed to Survivors.<br><br>This effect can only trigger once every <span class='Highlight3'>{2} seconds.</span> ",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Wales/iconPerks_trailOfTorment.png"
	},
	{
	name: "Brutal Strength",
	descritpion: "Your great strength allows you to shred through your prey's defenses. Destroy dropped <b>pallets, breakable walls, and generators</b> <span class='Highlight1'>{0}%</span> faster.<br><span class='FlavorText'>'It's more than muscles. A dark power motivates the beast.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_brutalStrength.png"
	},
	{
	name: "Thanatophobia",
	descritpion: "Their courage fades in the face of undeniable mortality.<br>For each injured, dying, or hooked survivor, all survivors receive a penalty of <span class='Highlight1'>{0}%</span> to a maximum of <span class='Highlight1'>{1}%</span> to repair, healing and sabotage speeds.<br><span class='FlavorText'>'She plays with us and revels in our pain.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_thatanophobia.png"
	},
	{
	name: "Coulrophobia",
	descritpion: "Your presence alone instills great fear. Survivors within your Terror Radius have a <span class='Highlight1'>{0}%</span> penalty to healing progress speed.<br>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Guam/iconPerks_coulrophobia.png"
	},
	{
	name: "Whispers",
	descritpion: "You have a rudimentary understanding of The Entity's voice. Sporadically hear The Entity's whisper when standing within a <span class='Highlight1'>{0} meter</span> range of a Survivor.<br><span class='FlavorText'>'It's unclear as to the motivations of The Fog, but it is undeniable that it often takes the beast's side.' -Notebook</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_whispers.png"
	},
	{
	name: "Barbecue & Chili",
	descritpion: "A deep bond with The Entity unlocks potential in one's aura reading ability. After hooking a Survivor, all other Survivors' auras are revealed to you for <span class='Highlight1'>{0} seconds</span> when they are further than <span class='Highlight2'>{1} meters</span> from the hook.<br><li>Each time that a Survivor is hooked for the first time, gain a <span class='Highlight3'>{2}%</span> stackable bonus to all bloodpoint gains up to a maximum of <span class='Highlight4'>{3}%</span>.<br>The bonus Bloodpoints are only awarded post-trial.</li><br><span class='FlavorText'>'I just can't take no pleasure in killing. There's just some things you gotta do. Don't mean you have to like it.' -Drayton Sawyer</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Cannibal/iconPerks_BBQAndChili.png"
	},
	{
	name: "Discordance",
	descritpion: "Any time 2 Survivors or more are working on the same generator, the generator's aura is highlighted in yellow for <span class='Highlight1'>{0} seconds</span>.<br><br><span class='FlavorText'>“Smartasses get killed. We always see to that.” -The Legion</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kenya/iconPerks_discordance.png"
	},
	{
	name: "Spirit Fury",
	descritpion: "Each pallet you break magnifies the wrath of The Entity.<br>After breaking <span class='Highlight1'>{0} pallets</span>, the next time you are stunned by a pallet, The Entity will instantly break the pallet.<br>You still suffer from the stun effect penalty.<br><span class='FlavorText'>“Fury is her blood.”</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Haiti/iconPerks_spiritFury.png"
	},
	{
	name: "Corrupt Intervention",
	descritpion: "Your prayers invoke a dark power that meddles with the Survivors’s chances of survival. <span class='Highlight1'>{0} generators</span> located furthest from you are blocked by The Entity for <span class='Highlight1'>{1} seconds</span> at the start of the trial.<br>Survivors cannot repair these generators for the duration. Affected generators are highlighted by a white aura.<br><br><span class='FlavorText'>“It shall be known across the land that the Gods curse the unfaithful.” (The Tablet of Adiris, 3.7.)</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Mali/iconPerks_corruptIntervention.png"
	},
	{
	name: "Make your Choice",
	descritpion: "When a Survivor rescues another from a hook at least <span class='Highlight1'>{0} meters</span> away from you, <i>Make your Choice</i> causes the Survivor to scream and applies the <b><i>Exposed</i></b> status effect to them for <span class='Highlight2'>{1} seconds</span>.<br><i>Make your Choice</i> has a cooldown of <span class='Highlight3'>{2} seconds</span>. <br><span class='FlavorText'>'You'd be surprised what tools can save a life.' -Amanda Young</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Finland/iconPerks_makeYourChoice.png"
	},
	{
	name: "Dying Light",
	descritpion: "You become <b>obsessed</b> with one Survivor.<br>Your obsession gains a <span class='Highlight1'>{0}%</span> action speed bonus to unhooking and healing other Survivors.<br>Each time you hook a Survivor other than the Obsession, if the Obsession is alive, gain a token.<br>If the Obsession is alive, all Survivors who are not the Obsession get <span class='Highlight2'>{1}%</span> penalty to Repair, Healing and Sabotage speeds for each token.<br><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><span class='FlavorText'>'This isn't a man...' -Dr.Sam Loomis </span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC2/iconPerks_dyingLight.png"
	},
	{
	name: "Territorial Imperative",
	descritpion: "Unlocks potential in one's aura reading ability. Survivors' auras are revealed to you for <span class='Highlight1'>{0} seconds</span> when they enter the basement and you are more than <span class='Highlight2'>{1} meters</span> away from the basement entrance.<br><i>Territorial Imperative</i> can only be triggered once every <span class='Highlight3'>{2} seconds</span>.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC5/iconPerks_TerritorialImperative.png"
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

const fetchKPerks = (bound) => {
    
    const killerPerks = [];
    const url = 'https://dbd-stats.info/api/perks/';
    killerPerks.push(fetch(url).then((res) => res.json()));
    
    Promise.all(killerPerks).then((results) => {
        buildKPerks(results);
    });
    
};

const buildKPerks = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var kPerks = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if ((item[element].type === "EInventoryItemType::SlasherPerk") && item[element].bloodWeb) {
                kPerks.push([item[element].displayName, item[element].perkDefaultDescription, url + item[element].iconPathList[0]]);
            }
        }
        
        var kIndeces = getIndeces(4, kPerks.length);
        return displayKillerPerks([kPerks[kIndeces[0]], kPerks[kIndeces[1]], kPerks[kIndeces[2]], kPerks[kIndeces[3]]]);
    }
};

const displayKillerPerks_old = (disPerks) => {
    kill.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><h2 class="text-center">' +
        disPerks[i][0] + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div><br>' + '</li>';
        kill.innerHTML += lag;
    }
};

function displayKillerPerks() {
    kill.innerHTML = '';
    var sIndeces = getIndeces(4, killerPerks.length);
    var perks = [killerPerks[sIndeces[0]], killerPerks[sIndeces[1]], killerPerks[sIndeces[2]], killerPerks[sIndeces[3]]];
    var lag = '<li class="list-group-item list-group-item-danger">';
    var i = 0;
    for (i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            lag += '<div class="row">';
        }
        lag += '<div class="column" style="width:48%"><h3 class="text-center">' +
        perks[i].name + '</h3>' + '<div class="text-center"> <img class="img-fluid" style="width: 50%;" src="' + perks[i].image +'"></div></div>';
        if (i % 2 == 1) {
            lag += '</div>';
        }
    }
    lag += '</li>';
    kill.innerHTML += lag;
}

displayKillerPerks();