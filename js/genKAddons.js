const addonSlot = document.getElementById('addonSlot');
const killerAddons = [
	{
	name: "The Legion Pin",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_theLegionButton.png"
	},
	{
	name: "Razor Wires",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_razerWire.png"
	},
	{
	name: "Cold Dirt",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_coldDirt.png"
	},
	{
	name: "Tear Soaked Tenugui",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_tearSoakedTenugui.png"
	},
	{
	name: "Trapper Bag",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_trapperBag.png"
	},
	{
	name: "Juniper Bonsai",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_juniperBonzai.png"
	},
	{
	name: "'Discipline' - Class III",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_diciplineClassIII.png"
	},
	{
	name: "Bad Man Keepsake",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_badManKeepsake.png"
	},
	{
	name: "Jigsaw's Annotated Plan",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_jigsawsAnnotatedPlan.png"
	},
	{
	name: "'Restraint' - Class III",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_restraintClassIII.png"
	},
	{
	name: "Junkyard Air Filter",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_junkyardAirFilter.png"
	},
	{
	name: "Tampered Timer",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_tamperedTimer.png"
	},
	{
	name: "Boyfriend's Memo",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_boyfriendsMemo.png"
	},
	{
	name: "'Calm' - Class II",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_calmClassII.png"
	},
	{
	name: "Katana Tsuba",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_katanaTsuba.png"
	},
	{
	name: "Wooden Oni Mask",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_woodenOniMask.png"
	},
	{
	name: "Zōri",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_zori.png"
	},
	{
	name: "Video Tape",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_videoTape.png"
	},
	{
	name: "Rule Set No.2",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_rulesSetN2.png"
	},
	{
	name: "Violet Waxcap",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_violetWaxcap.png"
	},
	{
	name: "Susie's Mix Tape",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_suziesMixtape.png"
	},
	{
	name: "Mural Sketch",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_muralSketch.png"
	},
	{
	name: "4-Coil Spring Kit",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_coilsKit4.png"
	},
	{
	name: "Amanda's Letter",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_amandasLetter.png"
	},
	{
	name: "Maple Knight",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_mapleKnight.png"
	},
	{
	name: "Prison Chain",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_prisonChain.png"
	},
	{
	name: "Nancy's Sketch",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_nancysSketch.png"
	},
	{
	name: "Stolen Sketch Book",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_stolenSketchbook.png"
	},
	{
	name: "Filthy Blade",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_filthyBlade.png"
	},
	{
	name: "Polished Maedate",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_polishedMaedate.png"
	},
	{
	name: "Gifted Bamboo Comb",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_giftedBambooComb.png"
	},
	{
	name: "Ashen Apple",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_ashenApple.png"
	},
	{
	name: "Jaw Smasher ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_jawSmasher.png"
	},
	{
	name: "Forgotten Videotape ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_forgottenVideoTape.png"
	},
	{
	name: "Dead Rabbit",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_deadRabbit.png"
	},
	{
	name: "Honing Stone",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_honingStone.png"
	},
	{
	name: "'Restraint' - Carter's Notes",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_restraintCartersNotes.png"
	},
	{
	name: "Wax Brick",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_waxBrick.png"
	},
	{
	name: "Brass Case Lighter",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_brassCaseLighter.png"
	},
	{
	name: "Bloodied Mud",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_bloodiedMud.png"
	},
	{
	name: "Cinch Straps ",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_reusuableCinchStraps.png"
	},
	{
	name: "“Ghost Face Caught on Tape”",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_caughtOnTape.png"
	},
	{
	name: "Dad's Boots",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_dadsBoots.png"
	},
	{
	name: "Long Guide Bar",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_longGuideBar.png"
	},
	{
	name: "Katsumori Talisman",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_katsumoriTalisman.png"
	},
	{
	name: "Tacky Earrings",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_tackyEarrings.png"
	},
	{
	name: "Pill Bottle",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_pillBottle.png"
	},
	{
	name: "Chewing Tobacco",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_chewingTobacco.png"
	},
	{
	name: "Bog Water",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_bogWater.png"
	},
	{
	name: "Class Photo",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_classPhoto.png"
	},
	{
	name: "Trapper Sack",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_trapperSack.png"
	},
	{
	name: "Iridescent Seal of Metatron ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_iridescentSeal.png"
	},
	{
	name: "Mother-Daughter Ring",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_motherDaughterRing.png"
	},
	{
	name: "Sticky Lining",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_stickyLining.png"
	},
	{
	name: "Hellshire Iron",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_hellshireIron.png"
	},
	{
	name: "Stab Wounds Study",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_stabWoundsStudy.png"
	},
	{
	name: "Valtiel Sect Photograph ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_valtielSectPhotograph.png"
	},
	{
	name: "Heavy Panting",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_heavyPanting.png"
	},
	{
	name: "Chainsaw File",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_chainsawFile.png"
	},
	{
	name: "White Hair Ribbon",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_whiteHairRibbon.png"
	},
	{
	name: "Pighouse Gloves",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_pighouseGloves.png"
	},
	{
	name: "Iridescent King",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_iridescentKing.png"
	},
	{
	name: "Cracked Sakazuki",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_crackedSakazuki.png"
	},
	{
	name: "'The Beast' - Soot",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_sootTheBeast.png"
	},
	{
	name: "Dark Cincture",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_darkCincture.png"
	},
	{
	name: "Waterlogged Shoe",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_waterloggedShoe.png"
	},
	{
	name: "Granma's Heart",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_granmasHeart.png"
	},
	{
	name: "Depth Gauge Rake",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_depthGaugeRake.png"
	},
	{
	name: "Muddy Sports Day Cap",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_muddySportCap.png"
	},
	{
	name: "Interlocking Razor",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_interlockingRazor.png"
	},
	{
	name: "Bloodied Water",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_bloodiedWater.png"
	},
	{
	name: "Rusted Chain",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_chainsRusted.png"
	},
	{
	name: "Cat Block",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_catBlock.png"
	},
	{
	name: "Kaiun Talisman",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_kaiunTalisman.png"
	},
	{
	name: "Outdoor Security Camera",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_outdoorSecurityCamera.png"
	},
	{
	name: "Night Vision Monocular",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_nightvisionMoncular.png"
	},
	{
	name: "Dragonfly Wings",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_dragonflyWings.png"
	},
	{
	name: "Child's Wooden Sword",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_childsWoodenSword.png"
	},
	{
	name: "Friendship Bracelet",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_friendshipBracelet.png"
	},
	{
	name: "Pocket Watch",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_pocketWatch.png"
	},
	{
	name: "LoPro Chains",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_lowProChains.png"
	},
	{
	name: "Bayshore’s Cigar",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_bayshoresCigar.png"
	},
	{
	name: "Wax Doll ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_waxDoll.png"
	},
	{
	name: "Dead Fly Mud",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_deadFlyMud.png"
	},
	{
	name: "'Restraint' - Class II",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_restraintClassII.png"
	},
	{
	name: "Rat Liver",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_ratLiver.png"
	},
	{
	name: "'Blink' - White",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_whiteBlink.png"
	},
	{
	name: "Bone Clapper",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_boneClapper.png"
	},
	{
	name: "Green Dress",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_greenDress.png"
	},
	{
	name: "Etched Ruler",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_etchedRuler.png"
	},
	{
	name: "Blessed Apple",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_prayerApple.png"
	},
	{
	name: "“Philly”",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_philly.png"
	},
	{
	name: "Judith's Tombstone",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_judithsTombstone.png"
	},
	{
	name: "Workshop Grease",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_workshopGrease.png"
	},
	{
	name: "'All Seeing' - Spirit",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_spiritAllSeeing.png"
	},
	{
	name: "Honey Locust Thorns ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_honeyLocustThorns.png"
	},
	{
	name: "Prayer Tablet Fragment",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_prayerTabletFragment.png"
	},
	{
	name: "Rotting Rope",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_rottingRope.png"
	},
	{
	name: "Reflective Fragment",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_reflectiveFragment.png"
	},
	{
	name: "Dried Cherry Blossom",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_driedCherryBlossom.png"
	},
	{
	name: "Iridescent Button",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_iridescentButton.png"
	},
	{
	name: "Rust-colored Egg ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_rustColoredEgg.png"
	},
	{
	name: "Shattered Syringe",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_shatteredSyringe.png"
	},
	{
	name: "Walleyes Matchbook",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_walleyesMatchbook.png"
	},
	{
	name: "Thorny Vines",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_thornyVines.png"
	},
	{
	name: "Steel Toe Boots",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_steelToeBoots.png"
	},
	{
	name: "Chili",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Cannibal/iconAddon_chili.png"
	},
	{
	name: "Yamaoka Sashimono",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_yamaokaSashimono.png"
	},
	{
	name: "Leather Knife Sheath",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_leatherKnifeSheath.png"
	},
	{
	name: "Willow Wreath",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_willowWreath.png"
	},
	{
	name: "Victim’s Detailed Routine",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_victimsDetailedRoutine.png"
	},
	{
	name: "Plaid Flannel",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_plaidFlannel.png"
	},
	{
	name: "Shiawase Amulet",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_ShiawaseAmulet.png"
	},
	{
	name: "Heavy Clutch",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_heavyClutch.png"
	},
	{
	name: "Never-Sleep Pills",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_neverSleepPills.png"
	},
	{
	name: "Black Strap ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_blackStrap.png"
	},
	{
	name: "Rusty Head",
	parentItem: "Item_Slasher_Hatchet",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC5/iconAddon_rustyHead.png"
	},
	{
	name: "Logwood Dye",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_logwoodDye.png"
	},
	{
	name: "Rotten Green Tripe",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_rottenGreenTripe.png"
	},
	{
	name: "Gold Creek Whiskey",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_clearCreekWhiskey.png"
	},
	{
	name: "Scratched Ruler",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_scratchedRuler.png"
	},
	{
	name: "Carburetor Tuning Guide",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_carburetorTuningGuide.png"
	},
	{
	name: "Hair Brush",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_hairBrush.png"
	},
	{
	name: "Homemade Muffler",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_homemadeMuffler.png"
	},
	{
	name: "Iridescent Stone",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_diamondStone.png"
	},
	{
	name: "Mint Rag",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_mintRag.png"
	},
	{
	name: "Rusty Flute",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_rustyFlute.png"
	},
	{
	name: "Combat Straps",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_combatStraps.png"
	},
	{
	name: "Iridescent Queen",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_iridescentQueen.png"
	},
	{
	name: "Campbell's Last Breath",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_campbellsLastBreath.png"
	},
	{
	name: "Origami Crane",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_origamiCrane.png"
	},
	{
	name: "Emetic potion",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_emeticPotion.png"
	},
	{
	name: "Hair Bow",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_hairBow.png"
	},
	{
	name: "Upside Down Resin",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_upsidedownResin.png"
	},
	{
	name: "The Grease",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Cannibal/iconAddon_theGrease.png"
	},
	{
	name: "Ataxic Respiration",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_ataxicRespiration.png"
	},
	{
	name: "Kavanagh's Last Breath",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_kavanaghsLastBreath.png"
	},
	{
	name: "Devotee's Amulet",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_devoteesAmulet.png"
	},
	{
	name: "Speed Limiter",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_speedLimiter.png"
	},
	{
	name: "Defaced Smiley Pin",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_defacedSmileyButton.png"
	},
	{
	name: "Dull Bracelet",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_dullBracelet.png"
	},
	{
	name: "Rubbing Oil",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_rubbingOil.png"
	},
	{
	name: "Olsen’s Wallet",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_olsensWallet.png"
	},
	{
	name: "Dried Cicada",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_driedCicada.png"
	},
	{
	name: "Kid's Drawing",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_kidsDrawing.png"
	},
	{
	name: "Potent Tincture",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_potentTincture.png"
	},
	{
	name: "Blue Dress",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_blueDress.png"
	},
	{
	name: "Deer Lung",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_deerLung.png"
	},
	{
	name: "Swamp Orchid Necklet",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_swampOrchidNecklet.png"
	},
	{
	name: "Leopard-Print Fabric  ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_leopardPrintFabric.png"
	},
	{
	name: "Marked Map",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_markedMap.png"
	},
	{
	name: "Rickety Chain",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_ricketyChain.png"
	},
	{
	name: "Prophylactic Amulet",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_prophylacticAmulet.png"
	},
	{
	name: "Padded Jaws",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_paddedJaws.png"
	},
	{
	name: "Jewelry",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_jewelry.png"
	},
	{
	name: "Tablet of the Oppressor ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_tabletOfTheOppressor.png"
	},
	{
	name: "'Discipline' - Class II",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_diciplineClassII.png"
	},
	{
	name: "Face Mask",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_faceMask.png"
	},
	{
	name: "'Swift Hunt' - White",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_whiteKuntinTakkho.png"
	},
	{
	name: "Pussy Willow Catkins",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_pussyWillowCatkins.png"
	},
	{
	name: "Bloody Sash",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_bloodySash.png"
	},
	{
	name: "Anxious Gasp",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_anxiousGasp.png"
	},
	{
	name: "Torn Bookmark",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_tornBookmark.png"
	},
	{
	name: "Rat Tail",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_ratTail.png"
	},
	{
	name: "Apex Muffler",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_apexMuffler.png"
	},
	{
	name: "Amanda's Secret",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_amandasSecret.png"
	},
	{
	name: "Knife Scratches",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Cannibal/iconAddon_knifeScratches.png"
	},
	{
	name: "Leafy Mash",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_leafyMash.png"
	},
	{
	name: "Black Box",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_blackBox.png"
	},
	{
	name: "Fragrant Tuft of Hair",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_tuftOfHair.png"
	},
	{
	name: "Lock of Hair",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_lockOfHair.png"
	},
	{
	name: "Utility Blades",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_utilityBlades.png"
	},
	{
	name: "Mannequin Foot ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_mannequinFoot.png"
	},
	{
	name: "Polished Electrode",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_polishedElectrode.png"
	},
	{
	name: "Renjiro’s Bloody Glove",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_renirosBloodyGlove.png"
	},
	{
	name: "Spit Polish Rag ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_spitPolishRag.png"
	},
	{
	name: "Shattered Wakizashi",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_shatteredWakizashi.png"
	},
	{
	name: "Jewelry Box",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_jewelryBox.png"
	},
	{
	name: "Interview Tape",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_interviewTape.png"
	},
	{
	name: "Smiley Face Pin",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_smileyFaceButton.png"
	},
	{
	name: "'Z' Block",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_zBlock.png"
	},
	{
	name: "Memorial Flower",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_memorialFlower.png"
	},
	{
	name: "Light Chassis",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_lightChassis.png"
	},
	{
	name: "'Bad Man's' Last Breath",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_badMansLastBreath.png"
	},
	{
	name: "Jigsaw's Sketch",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_jigsawsSketch.png"
	},
	{
	name: "Limestone Seal",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_limestoneSeal.png"
	},
	{
	name: "Trap Setters",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_tapSetters.png"
	},
	{
	name: "Lifeguard Whistle",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_lifeguardWhistle.png"
	},
	{
	name: "Black Grease",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_blackGrease.png"
	},
	{
	name: "Bloody Coil",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_bloodyCoil.png"
	},
	{
	name: "Setting Tools",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_settingTools.png"
	},
	{
	name: "Rin's Broken Watch",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_rinsBrokenWatch.png"
	},
	{
	name: "Yakuyoke Amulet",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_yakuyokeAmulet.png"
	},
	{
	name: "Chewed Pen",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_chewedPen.png"
	},
	{
	name: "Spiked Boots",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_spikedBoots.png"
	},
	{
	name: "Scrapped Tape",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_scrappedTape.png"
	},
	{
	name: "Swing Chains",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_swingChains.png"
	},
	{
	name: "Oily Coil",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_oilyCoil.png"
	},
	{
	name: "Metal Spoon",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_metalSpoon.png"
	},
	{
	name: "Bayshore’s Gold Tooth",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_bayshoresGoldTooth.png"
	},
	{
	name: "Half Eggshell",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_halfEggshell.png"
	},
	{
	name: "Rusty Attachments",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_rustyAttachments.png"
	},
	{
	name: "Viscous Webbing",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_viscousWebbing.png"
	},
	{
	name: "Nasty Blade",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_nastyBlade.png"
	},
	{
	name: "Outdoor Rope",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_outdoorRope.png"
	},
	{
	name: "Scratched Mirror",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_scratchedMirror.png"
	},
	{
	name: "Slow-Release Toxin",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_slowReleaseToxin.png"
	},
	{
	name: "Matchbox",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_matchBox.png"
	},
	{
	name: "Julie's Mix Tape",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_juliesMixtape.png"
	},
	{
	name: "Kanai-anzen Talisman",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_kanaianzenTalisman.png"
	},
	{
	name: "Joey's Mix Tape",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_joeysMixtape.png"
	},
	{
	name: "Speed Limiter",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_speedLimiter.png"
	},
	{
	name: "High Stimulus Electrode",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_highStimulusElectrode.png"
	},
	{
	name: "Vanity Mirror",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_vanityMirror.png"
	},
	{
	name: "Scarlet Egg ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_scarletEgg.png"
	},
	{
	name: "Prayer Beads Bracelet",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_prayersBeads.png"
	},
	{
	name: "Mother's Helpers",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_mothersHelpers.png"
	},
	{
	name: "Vile Emetic",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_vileEmetic.png"
	},
	{
	name: "Bag of Gears",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_bagOfGears.png"
	},
	{
	name: "'Blind Warrior' - White",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_whiteBlindWarrior.png"
	},
	{
	name: "Copper Ring ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_copperRing.png"
	},
	{
	name: "Jenner's Last Breath",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_jennersLastBreath.png"
	},
	{
	name: "Paint Thinner",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_paintThinner.png"
	},
	{
	name: "Unknown Egg",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_unknownEgg.png"
	},
	{
	name: "Tuned Carburetor",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_tunedCarburetor.png"
	},
	{
	name: "Wanted Poster ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_wantedPoster.png"
	},
	{
	name: "Cypress Necklet",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_cypressNecklet.png"
	},
	{
	name: "Poison Oak Leaves",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_poisonOakLeaves.png"
	},
	{
	name: "Warden’s Keys ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_wardensKeys.png"
	},
	{
	name: "Catatonic Boy's Treasure",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_catatonicTreasure.png"
	},
	{
	name: "Incensed Ointment",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_incensedOintment.png"
	},
	{
	name: "'Swift Hunt' - Mud",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_mudSwiftHunt.png"
	},
	{
	name: "Primer Bulb",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_primerBulb.png"
	},
	{
	name: "Mirror Shard",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_mirrorShard.png"
	},
	{
	name: "Cheap Cologne",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_cheapCologne.png"
	},
	{
	name: "Tin Oil Can ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_tinOilCan.png"
	},
	{
	name: "Rusty Shackles",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_rustyShackles.png"
	},
	{
	name: "Rope Necklet",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_ropeNecklet.png"
	},
	{
	name: "Dead Butterfly ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_deadButterfly.png"
	},
	{
	name: "'The Ghost' - Soot",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_sootTheGhost.png"
	},
	{
	name: "Spasmodic Breath",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_spasmodicBreath.png"
	},
	{
	name: "Drop-Leg Knife Sheath",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_dropLegKnifeSheath.png"
	},
	{
	name: "Cracked Turtle Egg",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_crackedTurtleEgg.png"
	},
	{
	name: "Glass Fragment",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_glassFragment.png"
	},
	{
	name: "Rusted Spike ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_rustedSpike.png"
	},
	{
	name: "Iridescent Brick",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_iridescentBrick.png"
	},
	{
	name: "Misty Day, Remains of Judgment ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_mistyDay.png"
	},
	{
	name: "Begrimed Chains",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_chainsBloody.png"
	},
	{
	name: "Infected Emetic",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_infectedEmetic.png"
	},
	{
	name: "Barbed Wire",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_barbedWire.png"
	},
	{
	name: "Garden Rake",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_gardenRake.png"
	},
	{
	name: "Mischief List",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_mischiefList.png"
	},
	{
	name: "Wakizashi Saya",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_wakizashiSaya.png"
	},
	{
	name: "Red Paint Brush",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_redPaintBrush.png"
	},
	{
	name: "Olsen's Address Book",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_olsensAddressBook.png"
	},
	{
	name: "Unicorn Block",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_unicornBlock.png"
	},
	{
	name: "Big Buckle",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_bigBuckle.png"
	},
	{
	name: "Olsen’s Journal",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_olsensJournal.png"
	},
	{
	name: "Crimson Ceremony Book ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_crimsonCeremonyBook.png"
	},
	{
	name: "'Discipline' - Carter's Notes",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_diciplineCartersNotes.png"
	},
	{
	name: "'Calm' - Class I",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_calmClassI.png"
	},
	{
	name: "'Order' - Class I",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_orderClassI.png"
	},
	{
	name: "Yaku-Yoke Talisman",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_paperLantern.png"
	},
	{
	name: "'The Hound' - Soot",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_sootTheHound.png"
	},
	{
	name: "Modified Ammo Belt ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_modifiedAmmoBelt.png"
	},
	{
	name: "Award-Winning Chili",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Cannibal/iconAddon_awardwinningChili.png"
	},
	{
	name: "Marshal's Badge ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_marshalsBadge.png"
	},
	{
	name: "Black Heart",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_blackHeart.png"
	},
	{
	name: "Iridescent Family Crest",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_IridescentFamilyCrest.png"
	},
	{
	name: "Off-Brand Motor Oil",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_offBrandMotorOil.png"
	},
	{
	name: "'Blink' - Mud",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_mudBlink.png"
	},
	{
	name: "Low Kickback Chains",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_lowKickbackChains.png"
	},
	{
	name: "Tar Bottle",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_tarBottle.png"
	},
	{
	name: "Fastening Tools",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_fasteningTools.png"
	},
	{
	name: "Black Incense",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_blackIncense.png"
	},
	{
	name: "'Windstorm' - Blood",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_bloodWindstorm.png"
	},
	{
	name: "Wool Shirt",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_woolShirt.png"
	},
	{
	name: "Secondary Coil",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_secondaryCoil.png"
	},
	{
	name: "Exorcism Amulet",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_exorcismAmulet.png"
	},
	{
	name: "Tombstone Piece",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_tombstonePiece.png"
	},
	{
	name: "White Nit Comb",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_whiteNitComb.png"
	},
	{
	name: "'Swift Hunt' - Blood",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_bloodSwiftHunt.png"
	},
	{
	name: "Akito's Crutch",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_akitosCrutch.png"
	},
	{
	name: "Lead Ring ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_leadRing.png"
	},
	{
	name: "Red Moss",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_redMoss.png"
	},
	{
	name: "Driver's License",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_driversLicense.png"
	},
	{
	name: "Last Will",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_lastWill.png"
	},
	{
	name: "Lion Fang",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_lionFang.png"
	},
	{
	name: "Lost Memories Book ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_lostMemoriesBook.png"
	},
	{
	name: "Rusted Jaws",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_rustedJaws.png"
	},
	{
	name: "'Order' - Class II",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_orderClassII.png"
	},
	{
	name: "Prototype Claws",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_prototypeClaw.png"
	},
	{
	name: "Serrated Jaws",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_serratedJaws.png"
	},
	{
	name: "Mew's Guts",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_mewsGuts.png"
	},
	{
	name: "Hematite Seal",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_hematiteSeal.png"
	},
	{
	name: "Worship Tablet",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_worshipTablet.png"
	},
	{
	name: "Jump Rope",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_jumpRope.png"
	},
	{
	name: "Cinderella Music Box ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_cinderellaMusicBox.png"
	},
	{
	name: "Burning Man Painting ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_burningManPainting.png"
	},
	{
	name: "Shop Lubricant",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_shopLubricant.png"
	},
	{
	name: "Moldy Electrode",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_moldyElectrode.png"
	},
	{
	name: "Chipped Saihai",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_chippedSaihai.png"
	},
	{
	name: "Headlines Cutouts",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_headlinesCutouts.png"
	},
	{
	name: "John's Medical File",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_johnsMedicalFile.png"
	},
	{
	name: "Coxcombed Clapper",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_coxcombedClapper.png"
	},
	{
	name: "Iridescent Flesh",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Cannibal/iconAddon_iridescentFlesh.png"
	},
	{
	name: "Severed Toe",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_severedToe.png"
	},
	{
	name: "Fuming Mix Tape",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_fumingMixtape.png"
	},
	{
	name: "Trapper Gloves",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_trapperGloves.png"
	},
	{
	name: "Olibanum Incense",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_olibanumIncense.png"
	},
	{
	name: "Wooden Horse",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_woodenHorse.png"
	},
	{
	name: "Powdered Eggshell",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_powderedEggshell.png"
	},
	{
	name: "Obsidian Goblet ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_obsidianGoblet.png"
	},
	{
	name: "'Order' - Carter's Notes",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_orderCartersNotes.png"
	},
	{
	name: "Punctured Muffler",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_puncturedMuffler.png"
	},
	{
	name: "Disfigured Ear",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_disfiguredEar.png"
	},
	{
	name: "Telephoto Lens",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_telephotoLens.png"
	},
	{
	name: "Spark Plug",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_sparkPlug.png"
	},
	{
	name: "Leprose Lichen",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_leproseLichen.png"
	},
	{
	name: "'The Serpent' - Soot",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_sootTheSerpent.png"
	},
	{
	name: "Strong Coil Spring",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_coilSpring.png"
	},
	{
	name: "Rotten Pumpkin",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_rottenPumpkin.png"
	},
	{
	name: "Vermillion Webcap",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_vermillionWebcap.png"
	},
	{
	name: "Splintered Hull",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_splinteredHull.png"
	},
	{
	name: "Barb's Glasses",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_barbsGlasses.png"
	},
	{
	name: "Frank's Mix Tape",
	parentItem: "Item_Slasher_Frenzy",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Kenya/iconAddon_franksMixtape.png"
	},
	{
	name: "Blackened Toenail",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_blackenedToenail.png"
	},
	{
	name: "J.Myers Memorial",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_jMyersMemorial.png"
	},
	{
	name: "Fragile Wheeze",
	parentItem: "Item_Slasher_Blinker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_fragileWheeze.png"
	},
	{
	name: "'Blind Warrior' - Mud",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_mudBaikraKaeug.png"
	},
	{
	name: "Sheep Block",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_sheepBlock.png"
	},
	{
	name: "Iridescent Coin",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_iridescentCoin.png"
	},
	{
	name: "Ink Lion",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_inkLion.png"
	},
	{
	name: "Vegetable Oil",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_vegetableOil.png"
	},
	{
	name: "Crate of Gears",
	parentItem: "Item_Slasher_ReverseBearTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Finland/iconAddon_crateOfGears.png"
	},
	{
	name: "Father's Glasses",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_fathersGlasses.png"
	},
	{
	name: "Bloody Hair Brooch",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_bloodyHairBroochi.png"
	},
	{
	name: "Scalped Topknot",
	parentItem: "Item_Slasher_Kanobo",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Sweden/iconAddon_scalpedTopknot.png"
	},
	{
	name: "'All Seeing' - Blood",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_bloodKraFabai.png"
	},
	{
	name: "Lasting Perfume",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_lastingPerfume.png"
	},
	{
	name: "Knife Belt Clip",
	parentItem: "Item_Slasher_GhostPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Oman/iconAddon_knifeBeltClip.png"
	},
	{
	name: "'Windstorm'- Mud",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_mudWindstorm.png"
	},
	{
	name: "Scarred Hand",
	parentItem: "Item_Slasher_PhantomTrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC3/iconAddon_scarredHand.png"
	},
	{
	name: "Eleven's Soda",
	parentItem: "Item_Slasher_QatarKillerPower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Qatar/iconAddon_elevensSoda.png"
	},
	{
	name: "Stitched Bag",
	parentItem: "Item_Slasher_Beartrap",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_stichedBag.png"
	},
	{
	name: "Dirty Uwabaki",
	parentItem: "Item_Slasher_PhaseWalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Haiti/iconAddon_dirtyUwabaki.png"
	},
	{
	name: "Doom Engravings",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_doomEngravings.png"
	},
	{
	name: "Snake Oil ",
	parentItem: "Item_Slasher_HarpoonRifle",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Ukraine/iconAddon_snakeOil.png"
	},
	{
	name: "Blond Hair",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_blondeHair.png"
	},
	{
	name: "Nancy's Masterpiece",
	parentItem: "Item_Slasher_DreamInducer",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/England/iconAddon_nancysMasterpiece.png"
	},
	{
	name: "'Shadow Dance' - White",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_whiteShadowDance.png"
	},
	{
	name: "Healing Salve",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_healingSalve.png"
	},
	{
	name: "'Calm' - Carter's Notes",
	parentItem: "Item_Slasher_Killer07Item",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC4/iconAddon_calmCartersNotes.png"
	},
	{
	name: "The Beast's Marks",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Cannibal/iconAddon_theBeastsMark.png"
	},
	{
	name: "Death Engravings",
	parentItem: "Item_Slasher_Chainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Xipre/iconAddon_deathEngravings.png"
	},
	{
	name: "Judith's Journal",
	parentItem: "Item_Slasher_Stalker",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC2/iconAddon_judithsJournal.png"
	},
	{
	name: "'Windstorm' - White",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_whiteWindstorm.png"
	},
	{
	name: "Begrimed Head",
	parentItem: "Item_Slasher_Hatchet",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/DLC5/iconAddon_begrimedHead.png"
	},
	{
	name: "Grisly Chain",
	parentItem: "Item_Slasher_LFChainsaw",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_chainsGrisly.png"
	},
	{
	name: "'Shadow Dance' - Blood",
	parentItem: "Item_Slasher_CloakBell",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/iconAddon_bloodShadowDance.png"
	},
	{
	name: "Spearhead ",
	parentItem: "Item_Slasher_TormentMode",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Wales/iconAddon_spearhead.png"
	},
	{
	name: "Iridescent Seal",
	parentItem: "Item_Slasher_PlaguePower",
	image: "https://dbd-stats.info/data/Public/UI/Icons/ItemAddons/Mali/iconAddon_IridescentSeal.png"
	}
];


function doSomething(arr) {
    var names = ['name: ', 'parentItem: ', 'image: '];
    var output = 'export const killerAddons = [\n';
    
    for (i in arr) {
        var cnt = 0;
        output += '\t{\n';
        for (j in arr[i]) {
            element = '"' + arr[i][j].replaceAll('"', "'") + '"';
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

const fetchAddons = (bound) => {
    
    const addons = [];

    const url = 'https://dbd-stats.info/api/itemaddons/';
    
    addons.push(fetch(url).then((res) => res.json()));
    
    
    Promise.all(addons).then((results) => {
        buildAddons(results);
    });
    
};

const buildAddons = (arr) => {
    arr.forEach(myFunction);
    function myFunction(item) {
        var addons = [];
        for (const element in item) {
            var url = 'https://dbd-stats.info/data/Public/';
            var itemName = item[element].parentItems[0] ? item[element].parentItems[0] : '';
            //var killerItem = killer ? killer[3] : "Rare Candy";
            
            /*
            if (itemName === killerItem && item[element].bloodWeb) {
                addons.push([item[element].displayName, url + item[element].iconPathList[0]]);
            }
            */
            //EInventoryItemType::SlasherPerk
            if (item[element].bloodWeb && item[element].role == "EPlayerRole::VE_Slasher") {
                addons.push([item[element].displayName, itemName, url + item[element].iconPathList[0]]);
            }
        }
        doSomething(addons);
        
        var indeces = getIndeces(2, addons.length);
        //return displayItemAddons_Old([addons[indeces[0]], addons[indeces[1]]]);
    }
};

const displayItemAddons_Old = (addons) => {
    addonSlot.innerHTML = '';
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
        addons[i][0] + '</h2>' + '<img style="width: 10%; height: 10%;" src="' + addons[i][1] +'">' + '</div></li>';
        addonSlot.innerHTML += lag;
    }
};

function timeOutButton(obj, key) {
    obj.disabled = true;
    console.log('keyey', key);
    setTimeout(function() {
        if (key === 'killer') {
            fetchKiller();
        } else {
            fetchItem();
        }
        timeOutTime(obj, key);
    }, 800);
}

function timeOutTime(obj, key) {
    setTimeout(function() {
        obj.disabled = false;
        if (key === 'killer') {
            fetchAddons();
        } else {
            fetchItemAddon();
        }
    }, 600);
}

function displayKillerAddons() {

    const list = getKiller();
    addonSlot.innerHTML = '';
    var indeces = getIndeces(2, list.length);
    var addons = [list[indeces[0]], list[indeces[1]]];
    var i = 0;
    for (i = 0; i < 2; i++) {
        var lag = '<li class="list-group-item list-group-item-danger"><div class="text-center"><h2>' +
        addons[i].name + '</h2>' + '<img style="width: 10%; height: 10%;" src="' + addons[i].image +'">' + '</div></li>';
        addonSlot.innerHTML += lag;
    }
}

function getKiller() {
    var arr = [];
    var i;
    var cnt = 0;
    for(i = 0; i < killerAddons.length; i++) {
        if (cnt == 2) {
            break;
        }
        if (killerAddons[i].parentItem === killer.item) {
            arr.push(killerAddons[i]);
        }
    }
    
    return arr;
}

function timeOutButton_2(obj) {
    obj.disabled = true;
    setTimeout(function() {
        displayKiller();
        timeOutTime_2(obj);
    }, 400);
}

function timeOutTime_2(obj) {
    setTimeout(function() {
        obj.disabled = false;
        displayKillerAddons();
    }, 300);
}

function displayKillerBuild(obj) {
    obj.disabled = true;
    displayKiller();
    setTimeout(function() {
    }, 600);
    displayKillerAddons();
    setTimeout(function() {
        obj.disabled = false;
    }, 3000);
}

function timeOutTime_2(obj) {
    setTimeout(function() {
        displayKillerAddons();
        obj.disabled = false;
    }, 500);
}

function displaySurvivorBuild(obj) {
    obj.disabled = true;
    displayItem();
    setTimeout(function() {
    }, 600);
    displayAddons();
    setTimeout(function() {
        obj.disabled = false;
    }, 10000);
}

function displayKillerPerkss(obj) {
    obj.disabled = true;
    displayKillerPerks();
    setTimeout(function() {
        obj.disabled = false;
    }, 5000);
}

function displaySurvPerkss(obj) {
    obj.disabled = true;
    displaySurvPerks();
    setTimeout(function() {
        obj.disabled = false;
    }, 5000);
}

function displayMapss(obj) {
    obj.disabled = true;
    displayMaps();
    setTimeout(function() {
        obj.disabled = false;
    }, 5000);
}

displayKillerAddons();
