const surv = document.getElementById('sPerks');
const survivorPerks = [
	{
	name: "Babysitter",
	descritpion: "While you have a reputation for being self-centered, you risk it all to help those in need.<br><br>When you unhook a Survivor, the unhooked Survivor leaves no scratch marks or blood trail for the next <span class='Highlight1'>{0} seconds</span>. You see The Killer's aura and The Killer sees your aura for <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>“I promised to keep you shitheads safe, and that’s exactly what I plan on doing.” -Steve Harrington</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_babySitter.png"
	},
	{
	name: "Open-Handed",
	descritpion: "Strengthens the potential of you and your team's aura reading abilities.<br><li>Increases aura reading ranges by <span class='Highlight1'>{0} meters</span>.</li><br><span class='FlavorText'>“Paying attention is what kept me alive through the years. That, and my good looks of course.” -Ace</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC3/iconPerks_openHanded.png"
	},
	{
	name: "Quick & Quiet",
	descritpion: "You do not make as much noise as others when quickly vaulting over obstacles or hiding in lockers. The vault and hide actions' noise detection and audio range is reduced by <span class='Highlight1'>{0}%</span>.<br><li>This effect can only be triggered once every <span class='Highlight2'>{1} seconds</span>.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_quickAndQuiet.png"
	},
	{
	name: "Soul Guard",
	descritpion: "You have been through immense hardship and you’re stronger for it.<br><br>Gain the <b>Endurance</b> status effect for <span class='Highlight1'>{0} seconds</span> after being healed or having recovered from the dying state. During this time, any damage that would put you in the dying state will instead apply <b>Deep Wounds.</b> You have <span class='Highlight2'>{1} seconds</span> to <i>Mend</i> yourself. If you take any damage while affected by <b>Deep Wounds</b>, or if the timer ends, you are immediately put into the dying state.<br><br>While cursed by a hex, you can fully recover from the dying state.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Wales/iconPerks_soulGuard.png"
	},
	{
	name: "Technician",
	descritpion: "You are apt at handling machinery with the greatest care and precision.<br>The noises caused by your repairs and their hearing distance are reduced by <span class='Highlight2'>{0} meters</span>. On a failed repair Skill Check, there is a <span class='Highlight1'>{1}%</span> chance the generator explosion will be prevented.<br><span class='FlavorText'>“I’m gonna stealth this one.” -Feng Min</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC4/iconPerks_technician.png"
	},
	{
	name: "For the People",
	descritpion: "You risk life and injury for others.<br><br><i>For the People</i> is only active while at full health.<br><br>Press the <i>Active Ability button</i> while healing another Survivor without a med kit to instantly heal them from dying to injured, or from injured to healthy.<br><br>You become injured and receive the <b>Broken</b> status effect for <span class='Highlight1'>{0} seconds</span>.<br><br>You become the Obsession.<br><br>Equipping this perk <b>decreases</b> your chances to be The Killer’s Obsession at the start of the trial.<br><br><span class='FlavorText'>'We can write our own story and decide how it really ends.' -Zarina Kassir</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ukraine/iconPerks_forThePeople.png"
	},
	{
	name: "Plunderer's Instinct",
	descritpion: "Unlocks potential in one's aura reading ability. The auras of unopened chests and items in the environment are revealed to you when standing within a <span class='Highlight1'>{0} meter</span> range. Grants a <b>considerably</b> better chance at finding an item of higher rarity from chests.<br><span class='FlavorText'>'The pioneers used to loot these babies for hours.' -Lost Tapes: Aizeyu</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_plunderersInstinct.png"
	},
	{
	name: "Empathy",
	descritpion: "Unlocks potential in one's aura reading ability. Dying or injured allies' auras are revealed to you when within a <span class='Highlight1'>{0} meter</span> range. Empathy does not reveal auras of allies when they are in direct contact with the Killer.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_empathy.png"
	},
	{
	name: "Prove Thyself",
	descritpion: "For every other Survivor working on a generator within a <span class='Highlight2'>{1} meter</span> range, gain <span class='Highlight1'>{0}%</span> repair speed bonus. This same bonus is also applied to all other Survivors within range.<br>Gain <span class='Highlight3'>{2}%</span> more Bloodpoints for coop actions.<br>Survivors can only be affected by one Prove Thyself effect at a time.<br><span class='FlavorText'>'Show me what you can do!' -Dwight</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_proveThyself.png"
	},
	{
	name: "Sprint Burst",
	descritpion: "When starting to run, break into a sprint at <span class='Highlight1'>{0}%</span> of your normal running speed for a maximum of <span class='Highlight2'>{1} seconds</span>.<br>Causes the <i>Exhausted</i> status effect for <span class='Highlight4'>{2} seconds</span>.<br><i>Sprint Burst</i> cannot be used while <i>Exhausted</i>.<br>You do not recover from the <i>Exhausted</i> status effect while running.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_sprintBurst.png"
	},
	{
	name: "Spine Chill",
	descritpion: "An unnatural tingle warns you of impending doom. Get notified when the Killer is looking directly in your direction and standing within a <span class='Highlight1'>{0} meter</span> range. While Spine Chill is active, Skill Check trigger odds are increased by <span class='Highlight2'>{1}%</span> with success zones reduced by <span class='Highlight3'>{2}%</span>. While Spine Chill is active, your speed while repairing, sabotaging, healing, unhooking, vaulting, cleansing, opening exit gates and searching are increased by <span class='Highlight4'>{3}%</span>.<br><span class='FlavorText'>'There is a voice that doesn't use words. Listen.' -Lost Tapes: Sassy</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_spineChill.png"
	},
	{
	name: "Deja Vu",
	descritpion: "Unlocks potential in one's aura reading ability. Paranoia paired with the horror of failure drives you to avoid repeating the same mistakes.<br>The auras of <span class='Highlight1'>{0}</span> generators which are in close proximity to one another are revealed to you for <span class='Highlight2'>{1} seconds</span>, at the start of the match and each time a generator is completed.<br>If you are holding a map that can track generators, generators revealed by <i>Deja Vu</i> are added to the map.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_dejaVu.png"
	},
	{
	name: "Botany Knowledge",
	descritpion: "You transform plants found around the campfire into tinctures that slow down bleeding. <b>Healing speed</b> and <b>healing item efficiency</b> are increased by <span class='Highlight1'>{0}%</span>.<br><br><span class='FlavorText'>'Basic botany knowledge could save your life someday.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_botanyKnowledge.png"
	},
	{
	name: "Any Means Necessary",
	descritpion: "You stand up for yourself, using whatever’s on hand to gain an advantage.<br><br>Press and hold the <i>Active Ability button</i> for <span class='Highlight1'>{0} seconds</span> while standing beside a dropped pallet to reset it to its upright position.<br><br><i>Any Means Necessary</i> has a cooldown of <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>“I’ll hit you with everything I’ve got. Then I’ll do it again.” -Yui Kimura </span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Sweden/iconPerks_anyMeansNecessary.png"
	},
	{
	name: "We'll make it",
	descritpion: "Helping others heightens your morale.<br><br>When you rescue a Survivor from a hook, gain a <span class='Highlight1'>{0}%</span> speed increase while healing others for <span class='Highlight3'>{1} seconds</span>.<br><span class='FlavorText'>'I'm confident we can all escape in one piece if we help each other.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_wellMakeIt.png"
	},
	{
	name: "Lightweight",
	descritpion: "Your running is light and soft, making your tracks harder to follow. Scratch marks stay visible <span class='Highlight1'>{0} seconds</span> less than normal.<br><span class='FlavorText'>'Take it slow, he knows where you've been… just like I`ve always said: live slow and die old.' -Lost Tapes: Dylan</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_lightweight.png"
	},
	{
	name: "Pharmacy",
	descritpion: "You have a knack for finding medicine. Searches through chests are <span class='Highlight1'>{0}%</span> faster and the noises they cause along with their hearing distances are reduced by <span class='Highlight2'>{1} meters.</span><br><i>Pharmacy</i> guarantees an Emergency Med-Kit on your <b>first</b> completed chest search.<br>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/England/iconPerks_pharmacy.png"
	},
	{
	name: "Kindred",
	descritpion: "Unlocks potential in one's aura reading ability. While you are on the hook, all Survivor's auras are revealed to all other Survivors. If The Killer is within a <span class='Highlight1'>{0} meter</span> range, The Killer's aura is revealed to all other Survivors.<br><br>While a Survivor other than you is on the hook, all other Survivors’ auras are revealed to you. If The Killer is within a <span class='Highlight1'>{0} meter</span> range of the hooked Survivor, The Killer's aura is revealed to you.<span class='FlavorText'>“Be kind to one another. We’re all in this together.” -Lost Tapes: Sujan</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_kindred.png"
	},
	{
	name: "Second Wind",
	descritpion: "When you have healed other Survivors for the equivalent of one health state, <i>Second Wind</i> activates. If you are already afflicted by the <span class='Highlight1'>Broken</span> status effect, <i>Second Wind</i> does not activate.<br><br>While <i>Second Wind</i> is activated, the next time you are unhooked or you unhook yourself, you are affected by the <span class='Highlight1'>Broken</span> status effect. After a total duration of <span class='Highlight2'>{0} seconds</span>, <i>Second Wind</i> automatically heals you from injured to healthy.<br><br><i>Second Wind</i> deactivates once you become healthy or if you are put into the dying state before <i>Second Wind</i> successfully triggers. You lose the <span class='Highlight1'>Broken</span> status effect.<br><br><span class='FlavorText'>'Yeah, that’s a no.' -Steve Harrington</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_secondWind.png"
	},
	{
	name: "Vigil",
	descritpion: "You look over your friends even in dire situations. You and your allies within a <span class='Highlight1'>{0} meter</span> range recover from the <b>Exhausted, Hemorrhage, Mangled, Hindered</b> and <b>Blindness</b> status effects <span class='Highlight2'>{1}%</span> faster. Once out of range, this effect persists for <span class='Highlight4'>{2} seconds.</span><br>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/England/iconPerks_vigil.png"
	},
	{
	name: "Balanced Landing",
	descritpion: "Your agility is incomparable.<br><br>After falling from a height, cat-like reflexes reduce your stagger duration from falling by <span class='Highlight1'>{0}%</span> and reduce the volume of grunts from falling by <span class='Highlight1'>100%</span>. You start sprinting at <span class='Highlight2'>{1}%</span> your normal running speed for a maximum of <span class='Highlight3'>{2} seconds</span>.<br><br>Causes the <b>Exhausted</b> status effect for <span class='Highlight4'>{3} seconds</span>.<br><br><i>Balanced Landing</i> cannot be used while <b>Exhausted</b>.<br><br>You do not recover from the <b>Exhausted</b> status effect while running.<br><br><span class='FlavorText'>'I've jumped from higher places.' -Nea</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_balancedLanding.png"
	},
	{
	name: "Dark Sense",
	descritpion: "Unlocks potential in one's aura reading ability. Each time a Generator is completed, The Killer's aura is revealed to you for <span class='Highlight1'>{0} seconds</span>.<br>When the last generator is powered the killer's aura is revealed to you for <span class='Highlight2'>{1} seconds</span>.<br><span class='FlavorText'>'Take it from an old-timer: Slow down, don't rush and try not to worry so much! The best way to beat him is to know how he thinks.' -Lost Tapes: Murf</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_darkSense.png"
	},
	{
	name: "Breakdown",
	descritpion: "Any time you are removed from a hook (escaped or saved), the hook breaks and the Killer's aura is shown to you for <span class='Highlight1'>{0} seconds</span>. A hook broken by this perk takes <span class='Highlight2'>180 seconds</span> to respawn.<br><br><span class='FlavorText'>“Charge from the Belly of the Beast.”<br>Here's a sketch/painting on a piece of wood I saw by the side of the road. I felt like it got a story to tell. And it didn’t waste its second chance. –Jeff, ink and oil wash on slice of wood, 12x16</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kenya/iconPerks_breakdown.png"
	},
	{
	name: "Lithe",
	descritpion: "After performing a <b>rushed</b> vault, break into a sprint at <span class='Highlight1'>{0}%</span> of your normal running speed for a maximum of <span class='Highlight2'>{1} seconds</span>. <br>Causes the <i>Exhausted</i> status effect for <span class='Highlight4'>{2} seconds</span>.<br><i>Lithe</i> cannot be used while <i>Exhausted</i>.<br>You do not recover from the <i>Exhausted</i> status effect while running.<br><span class='FlavorText'>“U mad?” -Feng Min</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC4/iconPerks_lithe.png"
	},
	{
	name: "Diversion",
	descritpion: "Activatable Perk.<br>Standing within the Killer Terror Radius while not in a chase for <span class='Highlight1'>45 seconds</span> activates <i>Diversion</i>.<br><li>Once <i>Diversion</i> is activated, press the <i>Active Ability</i> button while crouched and motionless to throw a pebble, which creates a distraction for The Killer at a distance of <span class='Highlight1'>{0} meters</span>.</li><br><li>The perk timer resets once the ability has been activated.</li><br>The distraction consists of:<br><li>A loud noise notification</li><li>Scratch Marks</li><br><span class='FlavorText'>“There’s what is easy and then there’s what is right. If you confuse the two, there’s no telling what you become.” -Adam Francis</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Haiti/iconPerks_diversion.png"
	},
	{
	name: "Dance With Me",
	descritpion: "When performing a fast vault or leaving a locker in a sprint, you leave no scratch marks for <span class='Highlight1'>{0} seconds</span>.<br><i>Dance With Me</i> has a cooldown of <span class='Highlight4'>{1} seconds</span>. <br><span class='FlavorText'>“Another show’s off and runnin’, <br>Dance with me, cuz there’s a storm a comin’, <br>Follow my boots, try to keep up,<br>Dance with me, until sun up.”<br>-Kate Denson's 'Dance with me'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kate/iconPerks_danceWithMe.png"
	},
	{
	name: "Borrowed Time",
	descritpion: "You are fueled by unexpected energy when saving an ally from a hook within The Killer's Terror Radius.<br>After unhooking a Survivor within The Killer's Terror Radius, they gain the <b>Endurance</b> status effect for <span class='Highlight1'>{0} seconds</span>. Any damage taken during that time that would put the unhooked Survivor into the dying state will instead apply the <b>Deep Wound</b> status effect. The Survivor has <span class='Highlight2'>{1} seconds</span> to Mend themselves.<br>If the unhooked Survivor takes any damage while affected by <b>Deep Wound</b>, or if the <b>Deep Wound</b> timer ends, the unhooked Survivor is immediately put into the dying state. <br><br><span class='FlavorText'>'Probably stings like hell, but it ain't gonna kill ya. Up and at 'em soldier. Time to move!' — Bill Overbeck</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/L4D/iconPerks_borrowedTime.png"
	},
	{
	name: "Dead Hard",
	descritpion: "Activatable Perk.<br>You can take a beating. When injured, tap into your adrenaline bank and dash forward quickly to avoid damage.<br><li>Press the <i>Active Ability</i> button while running to dash forward.</li><li>During the dash, you avoid damage.</li><li>Causes the <i>Exhausted</i> status effect for <span class='Highlight4'>{0} seconds</span>.<br>You do not recover from the <i>Exhausted</i> status effect while running.</li><br><span class='FlavorText'>“We were walkin’ through t’ginnel one night when a beer bottle flew past me, then another, and another. I thought to myself, “Gonna ’ave some fun ‘ere lads, let’s get stuck in!” It were a right dust up, I swear down!” -David King</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC5/iconPerks_DeadHard.png"
	},
	{
	name: "Saboteur",
	descritpion: "Unlocks potential in one's Aura-reading ability.<br><li>See Hook auras in a <span class='Highlight1'>56 meter</span> radius from the pickup spot if a Survivor is being carried.</li><br>Unlocks the ability to sabotage Hooks without a toolbox.<br><li>Sabotaging a Hook without a toolbox takes <span class='Highlight2'>2.5 seconds</span>.</li><li>The Sabotage action has a <span class='Highlight3'>{0} second</span> cooldown.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_saboteur.png"
	},
	{
	name: "Detective's Hunch",
	descritpion: "Unlocks potential in one's aura reading ability. When a generator is completed, the auras of generators, chests and totems within <span class='Highlight1'>{0} meters</span> are revealed to you for <span class='Highlight2'>{1} seconds</span>.<br>If you are holding a map that can track objectives, generators, chests and totems revealed by <i>Detective's Hunch</i> are added to the map.<br><span class='FlavorText'>'Are you able to tell us where you were last night?' -Detective David Tapp</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Finland/iconPerks_detectivesHunch.png"
	},
	{
	name: "Alert",
	descritpion: "Your acute senses are on high alert.<br>When the Killer performs a break action, the Killer is revealed to you for <span class='Highlight1'>{0} seconds</span>.<br><span class='FlavorText'>“I have true sight.” -Feng Min</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC4/iconPerks_alert.png"
	},
	{
	name: "Calm Spirit",
	descritpion: "Animals seem to trust you as they often stay calm in your presence. Reduces chances of alerting woodland creatures by <span class='Highlight1'>{0}%</span>.<br>Calm Spirit allows you to overcome the urge to scream.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_calmSpirit.png"
	},
	{
	name: "Resilience",
	descritpion: "You are motivated in dire situations. Grants <span class='Highlight1'>{0}%</span> additional speed when repairing, sabotaging, healing, unhooking, vaulting, cleansing, opening Exit Gates and searching while injured.<br><span class='FlavorText'>'Focus, even in these desperate times.'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_resilience.png"
	},
	{
	name: "Boil Over",
	descritpion: "You are a battler and do everything to escape a foe's grasp. Your struggling effects on The Killer are increased by <span class='Highlight1'>{0}%</span>. <br>You obscure The Killer's ability to see hook auras within <span class='Highlight1'>{1} meters</span>.<br><span class='FlavorText'>“Buck and Wild,<br> Swing to be free, <br>Your hands just can’t keep ahold of me.”<br>-Kate Denson’s “Boil Over”</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kate/iconPerks_boilOver.png"
	},
	{
	name: "Sole Survivor",
	descritpion: "As more of your friends fall to the killer, you become shrouded in isolation and the killer's <b>aura reading abilities</b> towards you are disrupted.<br>Every time a fellow Survivor is killed or sacrificed, gain a token. For each token, your aura cannot be read by The Killer within a max range of <span class='Highlight1'>{0} meters</span> for each <b>killed</b> or <b>sacrificed</b> Survivor.<br><li><i>Increases your chances of being The Killer's Obsession.</i></li><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><span class='FlavorText'>“It was the boogeyman.” -Laurie Strode</span></br>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC2/iconPerks_soleSurvivor.png"
	},
	{
	name: "Lucky Break",
	descritpion: "You’ve had your share of scrapes and bruises, but luck’s always on your side.<br><br><i>Lucky Break</i> activates any time you are injured. You won’t leave trails of blood for a total of <span class='Highlight1'>{0} seconds</span>.<br><br><i>Lucky Break</i> is permanently deactivated for the remainder of the trial once the total duration has elapsed.<br><br><span class='FlavorText'>“That’s not enough to beat me. Not even close.” -Yui Kimura </span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Sweden/iconPerks_luckyBreak.png"
	},
	{
	name: "Buckle Up",
	descritpion: "Unlocks potential in one's aura reading ability. The recovery progress of dying Survivors can be determined by the intensity of their auras at a distance of up to <span class='Highlight1'>{0} meters</span>.<br><br>When you heal a Survivor from the dying state to injured, both the healed Survivor and yourself see The Killer's aura for a duration of <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>“Ghost beaters never leave a man behind.' -Ash Williams</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ash/iconPerks_buckleUp.png"
	},
	{
	name: "Self-Care",
	descritpion: "Unlocks the ability to heal yourself without a healing item at <span class='Highlight1'>{0}%</span> the normal healing speed. Increases the efficiency of healing item self-heal by <span class='Highlight3'>{1}%</span>.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_selfCare.png"
	},
	{
	name: "Windows of Opportunity",
	descritpion: "Unlocks potential in one's aura reading ability. Auras of pallets, breakable walls, and vault locations are revealed to you when within a <span class='Highlight1'>{0} meter</span> range. <br><i>Windows of Opportunity</i> has a cooldown of <span class='Highlight1'>{1} seconds</span> when vaulting or dropping a pallet during a chase. <br><span class='FlavorText'>“Rise and shine, work hard, carve out your name, <br>Take aim, pull the trigger, hit the bulls eye for fame, <br>Know the value of faith, an’ family, and don’t you complain,<br>Open wide, your windows of opportunity.”<br>-Kate Denson's 'Windows of Opportunity'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kate/iconPerks_windowsOfOpportunity.png"
	},
	{
	name: "Deliverance",
	descritpion: "After performing a safe hook rescue on another Survivor, <i>Deliverance</i> activates.<br>You now have a <span class='Highlight1'>100%</span> chance of unhooking yourself during the escape attempt.<br>A successful <i>Deliverance</i> from the hook triggers the <span class='Highlight2'>Broken</span> status effect for <span class='Highlight3'>{0} seconds</span>.<br><span class='FlavorText'>“I was raised by a strict man who taught me how to make the best of a bad situation.” -Adam Francis</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Haiti/iconPerks_deliverance.png"
	},
	{
	name: "Small Game",
	descritpion: "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Killer Traps and totems in a <span class='Highlight1'>45-degree</span> cone within a range of <span class='Highlight2'>{0} meters</span>. Small Game has a cooldown of <span class='Highlight3'>{1} seconds</span> each time it activates.<br><i>Only works on traps that are set by Killers.</i><br><span class='FlavorText'>'Nope.' -Lost Tapes: Andy</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_smallGame.png"
	},
	{
	name: "Mettle of Man",
	descritpion: "Evil has a way of always finding you.<br><br>After you earn <span class='Highlight1'>{0} </span>Protection Hit scoring events, <i>Mettle of Man</i> activates. <br><br>Once activated, the next occasion that would put you into the <b>dying state</b> from the <b>injured state</b> is ignored.<br><br>The next time you heal back to full health, your aura will be revealed to the killer when you are further than <span class='Highlight2'>{1} meters</span> from the killer.<br><br><i>Mettle of Man</i> will deactivate the next time you are put into the dying state.<br><i><li>Increases your chances to be the Killer’s Obsession.</li><br><li>The Killer can only be <b>obsessed</b> with one survivor at a time.</li></i><br><br><span class='FlavorText'>'Evil has a bullseye on my back the size of Tiger Stadium.' -Ash Williams</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ash/iconPerks_mettleOfMan.png"
	},
	{
	name: "Tenacity",
	descritpion: "There is nothing stopping you. Your ferocious tenacity in dire situations allows you to crawl <span class='Highlight1'>{0}%</span> faster and recover at the same time.<br><span class='FlavorText'>'What the hell is this? I'm taking this bastard down!' -Detective David Tapp</span> ",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Finland/iconPerks_tenacity.png"
	},
	{
	name: "Repressed Alliance ",
	descritpion: "You’re accustomed to being hunted by malicious forces, and you’ve begun using it to your advantage.<br><br><i>Repressed Alliance</i> activates after repairing generators for a total of <span class='Highlight1'>{0} seconds.</span><br><br>When repairing a generator while the perk is active, press the <i>Active Ability button<i> to call upon the Entity to block the generator for <span class='Highlight2'>{1} seconds.</span> The perk deactivates.<br><br>Affected generators will be revealed by a white aura to all Survivors.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Wales/iconPerks_repressedAlliance.png"
	},
	{
	name: "Poised",
	descritpion: "Achieving goals boosts your confidence.<br>After a generator is completed, you leave no scratch marks for <span class='Highlight1'> {0} seconds</span>.<br><span class='FlavorText'>“Ok, stay calm. Don’t overthink it and just keep moving forward: you got this. –Jane Romero</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Mali/iconPerks_poised.png"
	},
	{
	name: "Iron Will",
	descritpion: "You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by <span class='Highlight1'>{0}%</span>.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_ironWill.png"
	},
	{
	name: "Camaraderie",
	descritpion: "Life has taught you the importance of friendship which has given you strength.<br><br>While you are on the hook in the struggle phase, <i>Camaraderie</i> activates.<br><br>If another Survivor is within <span class='Highlight1'>{0} meters</span> of you while <i>Camaraderie</i> is activated, the hook timer is paused for <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>'So, remember once you get in there… pretend like you don’t care. There you go, you’re learning my friend. You’re learning.” -Steve Harrington</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_camaraderie.png"
	},
	{
	name: "Breakout",
	descritpion: "You kick into high gear when someone’s in trouble, inspiring them to overcome any obstacle.<br><br>When within <span class='Highlight1'>{0} meters</span> of a carried Survivor, you gain the <span class='Highlight2'>Haste</span> status effect, moving at <span class='Highlight3'>{1}%</span> increased speed. The carried Survivor’s wiggle speed is increased by <span class='Highlight4'>{2}%</span>.<br><br><span class='FlavorText'>“Come, we’re going to rip our way out of this.” -Yui Kimura </span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Sweden/iconPerks_breakout.png"
	},
	{
	name: "No One Left Behind",
	descritpion: "It is inconceivable to leave someone behind. Once at least one exit gate is opened, you gain the following effects:<br><li><span class='Highlight1'>{0}%</span> additional Bloodpoints for healing and unhooking other Survivors.</li><li><span class='Highlight2'>{1}%</span> bonus action speed when healing and unhooking other Survivors.</li><li>The auras of all other Survivors are revealed to you.</li><br><span class='FlavorText'>'...yeah, no shit. But I believe we can outsmart and overthrow him if we work together. Don't be predictable and selfish!' -Lost Tapes: Clyde</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_noOneLeftBehind.png"
	},
	{
	name: "Left Behind",
	descritpion: "Unlocks potential in one's aura reading ability.<br>If you are the last Survivor remaining in the Trial, you can see the aura of the Hatch within a <span class='Highlight1'>{0} meter</span> range.<br><span class='FlavorText'>'I'm not horseshittin' around. I'm doing this alone!' -Bill</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/L4D/iconPerks_leftBehind.png"
	},
	{
	name: "This Is Not Happening",
	descritpion: "You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing, healing, and sabotaging get <span class='Highlight1'>{0}%</span> bigger when you are injured.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_thisIsNotHappening.png"
	},
	{
	name: "Better Together",
	descritpion: "You seek justice and uncover the truth no matter what obstacle stands in your way.<br><br>The aura of the Generator you are currently repairing is revealed to all other Survivors located within <span class='Highlight1'>{0} meters</span>.<br><br>If The Killer downs a Survivor while you are repairing a generator, you see the aura of all other Survivors for <span class='Highlight2'>{1} seconds</span>.<br><br><span class='FlavorText'>“Let’s burn that lab to the ground.” -Nancy Wheeler</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_betterTogether.png"
	},
	{
	name: "Decisive Strike",
	descritpion: "Using whatever is at hand, you stab at your aggressor in an ultimate attempt to escape.<br>After being unhooked or unhooking yourself, <i>Decisive Strike</i> will become active and useable for <span class='Highlight1'>{0} seconds</span>.<br>While <i>Decisive Strike</i> is active, when grabbed by The Killer, succeed a skill-check to automatically escape the killer's grasp and stun The Killer for <span class='Highlight1'>{1} seconds</span>.<br><li>Succeeding or failing the <i>Decisive Strike</i> Skill Check will disable <i>Decisive Strike</i>.</li><li>Successfully stunning the killer will result in you becoming the Obsession.</li><li><i>Increases your chances of being the Obsession.</i></li><li><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></li><br><span class='FlavorText'>“There's nothing to be scared of.” -Laurie Strode</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC2/iconPerks_decisiveStrike.png"
	},
	{
	name: "Stake Out",
	descritpion: "Getting close to the Killer fills you with determination. For each <span class='Highlight1'>{0} seconds</span> you are standing within the Killer Terror Radius and not in a chase, you gain a Token up to a maximum of <span class='Highlight2'>{1} Tokens</span>.<br>When <i>Stake Out</i> has at least <b>1 Token</b>, Good Skill Checks are considered Great Skill Checks, consume <b>1 Token</b>, and grant an additional <span class='Highlight3'>1%</span> bonus to Generator repair progress.<br><span class='FlavorText'>'I had you, I had you on your knees. You're runnin' scared because we had you. We're gonna close this case!' -Detective David Tapp</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Finland/iconPerks_stakeOut.png"
	},
	{
	name: "Blood Pact",
	descritpion: "It’s as if a latent part of yourself has awakened. You feel like you can reach out beyond yourself for assistance.<br><br>When you or the Obsession are injured, you both see each other's auras.<br><br>After completing a healing action on the Obsession, or having the Obsession complete a healing action on you, you both gain a <span class='Highlight1'>{1}%</span> <b>Haste</b> status effect for <span class='Highlight2'>{0} seconds.</span><br><br>Reduces the odds of being the Obsession.<br><br>If you are the Obsession, this perk deactivates.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Wales/iconPerks_bloodPact.png"
	},
	{
	name: "Head On",
	descritpion: "When your mind is set, there better be no one standing in your way.<br><br>While standing in a locker, for <span class='Highlight1'>{0} seconds</span>, <i>Head On</i> activates.<br>While <i>Head On</i> is activated, perform a rush action to leave a locker to use <i>Head On</i>. If The Killer is standing within <i>Head On's</i> effective range, The Killer is stunned for <span class='Highlight1'>{1} seconds</span>.<br>Causes the <span class='Highlight3'>Exhausted</span> status effect for <span class='Highlight1'>{2} seconds</span>. <br>Head On cannot be used while Exhausted.<br>You do not recover from the <span class='Highlight3'>Exhausted</span> status effect while running. <br><i>Head On</i> cannot be used when you have idle crows.<br><br><span class='FlavorText'>“People are remembered for the challenges they overcome. You can run away and forget what you’re capable of or you can face your fears and remind the world who you are.” –Jane Romero</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Mali/iconPerks_headOn.png"
	},
	{
	name: "Autodidact",
	descritpion: "You start the trial with a <span class='Highlight1'>-{1}%</span> progress penalty for Skill Checks to heal Survivors.<br>For every successful Skill Check while healing a Survivor, you receive a Token up to a maximum of <span class='Highlight2'>{0} Tokens</span>.<br>Each Token grants you a <span class='Highlight1'>+{2}%</span> progress bonus.<br>Great Skill Checks cannot be performed while using Autodidact.<li>Autodidact is not active when using a Med Kit to heal.</li><br><span class='FlavorText'>“There’s no limit to what you can achieve, as long as you back it up with hard work.” -Adam Francis</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Haiti/iconPerks_autodidact.png"
	},
	{
	name: "Red Herring",
	descritpion: "You’ve noticed that people pay attention to whatever makes the loudest noise.<br><br>After repairing a generator for at least <span class='Highlight1'>{0} seconds</span>, it will be highlighted to you with a yellow aura. The generator stays highlighted until it is fully repaired, or you repair a new generator, or enter a locker. <br><br>Entering any locker will trigger a loud noise indicator for The Killer at the highlighted generator's location. <br><li><i>Red Herring</i> can only be triggered once every <span class='Highlight2'>{1} seconds</span>.</li><br><br><span class='FlavorText'>'The news edit out what is burdensome and complex, which is the truth.' -Zarina Kassir</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ukraine/iconPerks_redHerring.png"
	},
	{
	name: "Up the Ante",
	descritpion: "All will be well in the end; you just know it. Your confidence strengthens the feeling of hope for those around you. For each other Survivor still alive, grant a <span class='Highlight1'>{0}%</span> bonus of luck to all remaining Survivors.<br><span class='FlavorText'>“What can I say? I’m just a very lucky guy… I’m sure some of it will rub off on you.” -Ace</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC3/iconPerks_upTheAnte.png"
	},
	{
	name: "Adrenaline",
	descritpion: "You are fuelled by unexpected energy when on the verge of escape. <span class='Highlight1'>Instantly heal one <b>health state</b></span> and sprint at <span class='Highlight2'>{0}%</span> of your normal running speed for <span class='Highlight3'>{1} seconds</span> when the Exit Gates are powered. Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.<br><i>Adrenaline</i> will <b>wake you up</b> if you are asleep when it triggers.<br><i>Adrenaline</i> ignores the <i>Exhausted</i> status effect.<br>Causes the <i>Exhausted</i> status effect for <span class='Highlight4'>{2} seconds</span>.<br>You do not recover from the <i>Exhausted</i> status effect when running.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_adrenaline.png"
	},
	{
	name: "Unbreakable",
	descritpion: "Past battles have taught you a thing or two about survival.<br>Grants the ability to fully recover from the dying state <b>once per trial</b>. Increases dying recovery speed by <span class='Highlight1'>{0}%</span>.<br><span class='FlavorText'>'Goddammit, I am seriously FUBAR!' -Bill</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/L4D/iconPerks_unbreakable.png"
	},
	{
	name: "Distortion",
	descritpion: "You start the trial with <span class='Highlight1'>{0} Tokens</span>.<br><br>When your aura would be shown to The Killer, <i>Distortion</i> activates and a token is consumed.<br><br>For the next <span class='Highlight1'>{1} seconds</span> while <i>Distortion</i> is activated, you do not leave scratch marks and your aura will not be shown to The Killer.<br><li><i>Distortion</i> does not activate when you are in dying state or in a trap.</li><br><br><span class='FlavorText'>“Death Fooled by the Cloak of Falcon Feathers.”<br>Sketch inspired by a few sleepless nights during winter. Exploration of Norse mythology: bravery can conceal your flaws, even when you are at your most vulnerable. –Jeff, pencil on toned paper, 12x12</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kenya/iconPerks_distortion.png"
	},
	{
	name: "Inner Strength",
	descritpion: "You look inward and trust your instincts when you feel lost and alone.<br><br>Each time you complete a totem cleanse action, <i>Inner Strength</i> activates. If you are already afflicted by the <b>Broken</b> status effect, <i>Inner Strength</i> does not activate.<br><br>While <i>Inner Strength</i> is active, hiding inside a locker for <span class='Highlight1'>{0} seconds</span> while injured automatically heals you from injured to healthy.<br><br><i>Inner Strength</i> becomes deactivated as soon as it has successfully triggered.<br><br><span class='FlavorText'>“All this time I’ve been trying so hard to pretend like everything’s fine, but it’s not.” -Nancy Wheeler</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_innerStrength.png"
	},
	{
	name: "We're Gonna Live Forever",
	descritpion: "Your few friends deserve the best protection. Each time you perform a Safe Hook Rescue or take a hit to protect a Survivor, gain <span class='Highlight1'>{0}%</span> stackable bonus to all bloodpoint gains up to a maximum of <span class='Highlight2'>{1}%</span>. The bonus Bloodpoints are only awarded post-trial.<br><span class='FlavorText'>“Come on then, let’s ‘ave it! I don’t give a shit pal.” -David King</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC5/iconPerks_WereGonnaLiveForever.png"
	},
	{
	name: "Premonition",
	descritpion: "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a <span class='Highlight1'>45 degree</span> cone within a range of <span class='Highlight2'>{0} meters</span>. Premonition has a cooldown of <span class='Highlight3'>{1} seconds</span> each time it activates.<br><span class='FlavorText'>'I have a bad feeling about this!'</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_premonition.png"
	},
	{
	name: "Flip-Flop",
	descritpion: "You have an uncanny ability to escape the inevitable.<br><br>While in dying state, <span class='Highlight1'>{0}%</span> of your recovery progression is converted into wiggle progression when you are picked up by The Killer, up to a maximum of <span class='Highlight2'>{1}%</span> total wiggle progression.<br><br><span class='FlavorText'>'Catch ya on the flip-flop.' -Ash Williams</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ash/iconPerks_flipFlop.png"
	},
	{
	name: "Ace in the Hole",
	descritpion: "Lady Luck always seems to be throwing something good your way.<br>When retrieving an item from a chest, there is a <span class='Highlight1'>{0}%</span> chance that a <span class='Highlight2'>very rare</span> (or lower) add-on will be attached to it.<br><span class='Highlight3'>{1}%</span> chance of finding an add-on of <span class='Highlight4'>uncommon</span> rarity or lower.<br>When escaping, keep any addons your item has.<br><span class='FlavorText'>“Everything that glitters isn’t gold. But gold isn't worth a damn in this place, so this should come in handy.” -Ace</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC3/iconPerks_aceInTheHole.png"
	},
	{
	name: "Leader",
	descritpion: "You're able to organize a team to cooperate more efficiently. Increases other Survivors' healing, sabotage, unhooking, cleansing, opening exit gates, and chest search speeds by <span class='Highlight1'>{0}%</span> when they are within a <span class='Highlight2'>{1} meter</span> range from you.<br>Survivors can only be affected by one Leader effect at a time.<br>This effect persists on other Survivors for <span class='Highlight3'>{2} seconds</span> after leaving the Leader's effective perk range.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_leader.png"
	},
	{
	name: "Hope",
	descritpion: "The growing odds of a successful escape fill you with hope and give you wings. As soon as the Exit Gates are powered you gain a <span class='Highlight1'>{0}%</span> <b><i>Haste</i></b> status effect for <span class='Highlight3'>{1} seconds</span>.<br><br><span class='FlavorText'>'Buckle up, fuckos! Let's roll!' -Lost Tapes: Nikki</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_hope.png"
	},
	{
	name: "Solidarity",
	descritpion: "Sharing painful experiences has the power to heal.<br>While injured, healing a Survivor without using a med-kit also heals you at a <span class='Highlight1'>{0}%</span> conversion rate.<br><span class='FlavorText'>“Showing up when things get rough, listening to people’s problems, and supporting those in need; that’s how you become stronger, that’s how you grow.” –Jane Romero</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Mali/iconPerks_solidarity.png"
	},
	{
	name: "Urban Evasion",
	descritpion: "Years of evading the cops taught you a thing or two about stealth. Your movement speed while crouching is increased by <span class='Highlight1'>{0}%</span>.<br><span class='FlavorText'>'The paint is still fresh but I'm long gone.' -Nea</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_urbanEvasion.png"
	},
	{
	name: "Aftercare",
	descritpion: "Unlocks potential in one's aura-reading ability.<br><br>You see the aura of every Survivor that:<br><li>You rescue from a hook, or rescues you from a hook;</li><li>You complete a healing action on, or completes a healing action on you.</li><br>They also see your aura.<br><br>This occurs for up to <span class='Highlight1'>{0} Survivors</span>. All effects of <i>Aftercare</i> are reset when you are hooked by The Killer.<br><br><span class='FlavorText'>“A Mercy that Rips the Storm.”<br>Oil work to honor my best buddies who happen to be the best musicians I know. Their first album is still my favorite. It got me through a dark time in my life. –Jeff, oil on canvas, 16x16</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Kenya/iconPerks_aftercare.png"
	},
	{
	name: "No Mither",
	descritpion: "You are affected by the <span class='Highlight1'>Broken</span> status effect for the duration of the trial.<br>Your thick blood coagulates practically instantly. <li>You don't leave pools of blood.</li><li>Grunts of pain caused by injuries are reduced by <span class='Highlight2'>{0}%</span> at any time.</li><li>Grants the ability to fully recover from the dying state.</li><br><span class='FlavorText'>“I lost it. Just lamped him one. They went and banned me didn’t they. Went t’pub afterwards, had a few pints and moved on to the next chapter. I couldn’t be mithered with it all anyway, you know what I mean? Can’t be arsed.” -David King</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/DLC5/iconPerks_NoMither.png"
	},
	{
	name: "Wake Up!",
	descritpion: "Unlocks potential in one's aura reading ability. Once all generators are powered, Exit Gates are revealed to you within a <span class='Highlight1'>{0} meter</span> range. While opening the Exit Gates, reveal your aura to other Survivors up to <span class='Highlight2'>{1} meters</span>.<br>While <i>Wake Up!</i> is active, you open the Exit Gates <span class='Highlight3'>{2}%</span> faster.",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/England/iconPerks_wakeUp.png"
	},
	{
	name: "Slippery Meat",
	descritpion: "You have developed an efficient way to get out of Bear Traps and off hooks.<br><li>Grants up to <span class='Highlight1'>{0}</span> extra escape attempts on the hook.</li><li>The odds of freeing yourself from Bear Traps is increased by <span class='Highlight2'>{1}%</span>.</li>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_slipperyMeat.png"
	},
	{
	name: "Fixated",
	descritpion: "When you have a goal in mind, there’s no turning back: better to ask forgiveness than permission. <br><br>You can see your own scratch marks at all times.<br><br>While uninjured, you walk <span class='Highlight1'>{0}%</span> faster.<br><br><span class='FlavorText'>'I wanna finish what we started. I want to kill it.' -Nancy Wheeler</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Qatar/iconPerks_fixated.png"
	},
	{
	name: "Streetwise",
	descritpion: "Long nights out taught you to do a lot with what you've got. Reduce consumption rate of item charge by <span class='Highlight1'>{0}%</span> for you and allies within a <span class='Highlight2'>{1} meter</span> range. Once out of range, this effect persists for <span class='Highlight4'>{2} seconds.</span><br><span class='FlavorText'>'You're doing it wrong! Let me show you how it's done.' -Nea</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_streetwise.png"
	},
	{
	name: "Bond",
	descritpion: "Unlocks potential in one's aura reading ability. Allies' auras are revealed to you when they are within a <span class='Highlight1'>{0} meter</span> range.<br><span class='FlavorText'>'We have to work as a team, I need you to survive so that I can survive!' -Dwight</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/iconPerks_bond.png"
	},
	{
	name: "Off the Record",
	descritpion: "You’ve learned that a quiet approach is sometimes best. <br><br>Once you are unhooked or escape from the hook, <i>Off the Record</i> activates for <span class='Highlight1'>{0} seconds</span>. <br><br>While <i>Off the Record</i> is active, your aura will not be shown to The Killer and grunts of pain caused by injuries are reduced by <span class='Highlight2'>{1}%</span>.<br><br><span class='FlavorText'>'Trust me, I investigate thoroughly and discreetly.' -Zarina Kassir</span>",
	image: "https://dbd-stats.info/data/Public/UI/Icons/Perks/Ukraine/iconPerks_offTheRecord.png"
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

const fetchPerks = (bound) => {
    
    const promises = [];
    for (let i = 0; i <= 0; i++) {
        const url = 'https://dbd-stats.info/api/perks/';
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        buildPerks(results);
    });
};

const buildPerks = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var sPerks = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            if ((item[element].type === "EInventoryItemType::CamperPerk") && item[element].bloodWeb) {
                sPerks.push([item[element].displayName, item[element].perkDefaultDescription, url + item[element].iconPathList[0]]);
            }
        }
        doSomething(sPerks);
        var sIndeces = getIndeces(4, sPerks.length);
        return displaySurvPerks([sPerks[sIndeces[0]], sPerks[sIndeces[1]], sPerks[sIndeces[2]], sPerks[sIndeces[3]]]);
    }
};

const displaySurvPerks_Old = (disPerks) => {
    surv.innerHTML = '';
    var i = 0;
    for (i = 0; i < 4; i++) {
       var lag = '<li class="list-group-item list-group-item-primary"><h2 class="text-center">' +
        disPerks[i][0] + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + disPerks[i][2] +'"></div>' + '<div>' + disPerks[i][1].replace(/<(.|\n)*?>/g, '') + '</div>' + '</li>';
        surv.innerHTML += lag;
    }
};

function displaySurvPerks() {
    surv.innerHTML = '';
    var indeces = getIndeces(4, survivorPerks.length);
    var perks = [survivorPerks[indeces[0]], survivorPerks[indeces[1]], survivorPerks[indeces[2]], survivorPerks[indeces[3]]];
    var i = 0;
    for (i = 0; i < 4; i++) {
        var lag = '<li class="list-group-item list-group-item-primary"><h3 class="text-center">' +
        perks[i].name + '</h3>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + perks[i].image +'"></div>' + '</li>';
        surv.innerHTML += lag;
    }
    /*
    var lag = '<li class="list-group-item list-group-item-primary"><h2 class="text-center">' +
        perks[i].name + '</h2>' + '<div class="text-center"> <img style="width: 20%; height: 20%;" src="' + perks[i].image +'"></div>' + '<div>' + perks[i].descritpion.replace(/<(.|\n)*?>/g, '') + '</div>' + '</li>';
        surv.innerHTML += lag;
    */
}

displaySurvPerks();