const TYPES = [
	{
		id: 'weapon',
		text: 'any weapon'
	},
	{
		id: 'weapon.one',
		text: 'one handed weapon'
	},
	{
		id: 'weapon.onemelee',
		text: 'one handed melee weapon'
	},
	{
		id: 'weapon.twomelee',
		text: 'two handed melee weapon'
	},
	{
		id: 'weapon.bow',
		text: 'bow'
	},
	{
		id: 'weapon.claw',
		text: 'claw'
	},
	{
		id: 'weapon.dagger',
		text: 'any dagger'
	},
	{
		id: 'weapon.runedagger',
		text: 'rune dagger'
	},
	{
		id: 'weapon.oneaxe',
		text: 'one handed axe'
	},
	{
		id: 'weapon.onemace',
		text: 'one handed mace'
	},
	{
		id: 'weapon.onesword',
		text: 'one handed sword'
	},
	{
		id: 'weapon.sceptre',
		text: 'sceptre'
	},
	{
		id: 'weapon.staff',
		text: 'any staff'
	},
	{
		id: 'weapon.warstaff',
		text: 'warstaff'
	},
	{
		id: 'weapon.twoaxe',
		text: 'two handed axe'
	},
	{
		id: 'weapon.twomace',
		text: 'two handed mace'
	},
	{
		id: 'weapon.twosword',
		text: 'two handed sword'
	},
	{
		id: 'weapon.wand',
		text: 'wand'
	},
	{
		id: 'armour',
		text: 'any armour'
	},
	{
		id: 'armour.chest',
		text: 'body armour chest'
	},
	{
		id: 'armour.boots',
		text: 'boots'
	},
	{
		id: 'armour.gloves',
		text: 'gloves'
	},
	{
		id: 'armour.helmet',
		text: 'helmet'
	},
	{
		id: 'armour.shield',
		text: 'shield'
	},
	{
		id: 'armour.quiver',
		text: 'quiver'
	},
	{
		id: 'accessory',
		text: 'any accessory'
	},
	{
		id: 'accessory.amulet',
		text: 'amulet'
	},
	{
		id: 'accessory.belt',
		text: 'belt'
	},
	{
		id: 'accessory.ring',
		text: 'ring'
	},
	{
		id: 'jewel',
		text: 'any jewel'
	},
	{
		id: 'jewel.abyss',
		text: 'abyss jewel'
	},
];

const TYPES_TEXT_TO_ID = Object.fromEntries(TYPES.map(({id, text}) => [text, id]));
const TYPES_ID_TO_TEXT = Object.fromEntries(TYPES.map(({id, text}) => [id, text]));

const PROPERTIES = {
	pseudo: [
		{
			id: "pseudo.pseudo_total_cold_resistance",
			text: "+#% total to Cold Resistance",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_fire_resistance",
			text: "+#% total to Fire Resistance",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_lightning_resistance",
			text: "+#% total to Lightning Resistance",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_elemental_resistance",
			text: "+#% total Elemental Resistance",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_chaos_resistance",
			text: "+#% total to Chaos Resistance",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_resistance",
			text: "+#% total Resistance",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_count_resistances",
			text: "# total Resistances",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_count_elemental_resistances",
			text: "# total Elemental Resistances",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_all_elemental_resistances",
			text: "+#% total to all Elemental Resistances",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_strength",
			text: "+# total to Strength",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_dexterity",
			text: "+# total to Dexterity",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_intelligence",
			text: "+# total to Intelligence",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_all_attributes",
			text: "+# total to all Attributes",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_life",
			text: "+# total maximum Life",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_mana",
			text: "+# total maximum Mana",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_energy_shield",
			text: "+# total maximum Energy Shield",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_energy_shield",
			text: "#% total increased maximum Energy Shield",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_attack_speed",
			text: "+#% total Attack Speed",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_cast_speed",
			text: "+#% total Cast Speed",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_movement_speed",
			text: "#% increased Movement Speed",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_physical_damage",
			text: "#% total increased Physical Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_global_critical_strike_chance",
			text: "+#% Global Critical Strike Chance",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_critical_strike_chance_for_spells",
			text: "+#% total Critical Strike Chance for Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_global_critical_strike_multiplier",
			text: "+#% Global Critical Strike Multiplier",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_physical_damage",
			text: "Adds # to # Physical Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_lightning_damage",
			text: "Adds # to # Lightning Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_cold_damage",
			text: "Adds # to # Cold Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_fire_damage",
			text: "Adds # to # Fire Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_elemental_damage",
			text: "Adds # to # Elemental Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_chaos_damage",
			text: "Adds # to # Chaos Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_damage",
			text: "Adds # to # Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_physical_damage_to_attacks",
			text: "Adds # to # Physical Damage to Attacks",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_lightning_damage_to_attacks",
			text: "Adds # to # Lightning Damage to Attacks",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_cold_damage_to_attacks",
			text: "Adds # to # Cold Damage to Attacks",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_fire_damage_to_attacks",
			text: "Adds # to # Fire Damage to Attacks",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_elemental_damage_to_attacks",
			text: "Adds # to # Elemental Damage to Attacks",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_chaos_damage_to_attacks",
			text: "Adds # to # Chaos Damage to Attacks",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_damage_to_attacks",
			text: "Adds # to # Damage to Attacks",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_physical_damage_to_spells",
			text: "Adds # to # Physical Damage to Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_lightning_damage_to_spells",
			text: "Adds # to # Lightning Damage to Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_cold_damage_to_spells",
			text: "Adds # to # Cold Damage to Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_fire_damage_to_spells",
			text: "Adds # to # Fire Damage to Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_elemental_damage_to_spells",
			text: "Adds # to # Elemental Damage to Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_chaos_damage_to_spells",
			text: "Adds # to # Chaos Damage to Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_adds_damage_to_spells",
			text: "Adds # to # Damage to Spells",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_elemental_damage",
			text: "#% increased Elemental Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_lightning_damage",
			text: "#% increased Lightning Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_cold_damage",
			text: "#% increased Cold Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_fire_damage",
			text: "#% increased Fire Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_spell_damage",
			text: "#% increased Spell Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_lightning_spell_damage",
			text: "#% increased Lightning Spell Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_cold_spell_damage",
			text: "#% increased Cold Spell Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_fire_spell_damage",
			text: "#% increased Fire Spell Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_lightning_damage_with_attack_skills",
			text: "#% increased Lightning Damage with Attack Skills",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_cold_damage_with_attack_skills",
			text: "#% increased Cold Damage with Attack Skills",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_fire_damage_with_attack_skills",
			text: "#% increased Fire Damage with Attack Skills",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_elemental_damage_with_attack_skills",
			text: "#% increased Elemental Damage with Attack Skills",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_rarity",
			text: "#% increased Rarity of Items found",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_burning_damage",
			text: "#% increased Burning Damage",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_life_regen",
			text: "# Life Regenerated per Second",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_percent_life_regen",
			text: "#% of Life Regenerated per Second",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_physical_attack_damage_leeched_as_life",
			text: "#% of Physical Attack Damage Leeched as Life",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_physical_attack_damage_leeched_as_mana",
			text: "#% of Physical Attack Damage Leeched as Mana",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_increased_mana_regen",
			text: "#% increased Mana Regeneration Rate",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_gem_levels",
			text: "+# total to Level of Socketed Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_elemental_gem_levels",
			text: "+# total to Level of Socketed Elemental Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_fire_gem_levels",
			text: "+# total to Level of Socketed Fire Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_cold_gem_levels",
			text: "+# total to Level of Socketed Cold Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_lightning_gem_levels",
			text: "+# total to Level of Socketed Lightning Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_chaos_gem_levels",
			text: "+# total to Level of Socketed Chaos Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_spell_gem_levels",
			text: "+# total to Level of Socketed Spell Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_projectile_gem_levels",
			text: "+# total to Level of Socketed Projectile Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_bow_gem_levels",
			text: "+# total to Level of Socketed Bow Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_melee_gem_levels",
			text: "+# total to Level of Socketed Melee Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_minion_gem_levels",
			text: "+# total to Level of Socketed Minion Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_strength_gem_levels",
			text: "+# total to Level of Socketed Strength Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_dexterity_gem_levels",
			text: "+# total to Level of Socketed Dexterity Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_intelligence_gem_levels",
			text: "+# total to Level of Socketed Intelligence Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_aura_gem_levels",
			text: "+# total to Level of Socketed Aura Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_movement_gem_levels",
			text: "+# total to Level of Socketed Movement Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_curse_gem_levels",
			text: "+# total to Level of Socketed Curse Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_vaal_gem_levels",
			text: "+# total to Level of Socketed Vaal Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_support_gem_levels",
			text: "+# total to Level of Socketed Support Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_skill_gem_levels",
			text: "+# total to Level of Socketed Skill Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_warcry_gem_levels",
			text: "+# total to Level of Socketed Warcry Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_total_additional_golem_gem_levels",
			text: "+# total to Level of Socketed Golem Gems",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_number_of_prefix_mods",
			text: "# Prefix Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_number_of_suffix_mods",
			text: "# Suffix Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_number_of_affix_mods",
			text: "# Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_number_of_empty_prefix_mods",
			text: "# Empty Prefix Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_number_of_empty_suffix_mods",
			text: "# Empty Suffix Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_number_of_empty_affix_mods",
			text: "# Empty Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_whispering_incubator_kills",
			text: "# Incubator Kills (Whispering)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_fine_incubator_kills",
			text: "# Incubator Kills (Fine)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_singular_incubator_kills",
			text: "# Incubator Kills (Singular)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_cartographers_incubator_kills",
			text: "# Incubator Kills (Cartographer's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_otherworldly_incubator_kills",
			text: "# Incubator Kills (Otherwordly)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_abyssal_incubator_kills",
			text: "# Incubator Kills (Abyssal)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_fragmented_incubator_kills",
			text: "# Incubator Kills (Fragmented)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_skittering_incubator_kills",
			text: "# Incubator Kills (Skittering)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_infused_incubator_kills",
			text: "# Incubator Kills (Infused)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_fossilised_incubator_kills",
			text: "# Incubator Kills (Fossilised)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_decadent_incubator_kills",
			text: "# Incubator Kills (Decadent)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_diviners_incubator_kills",
			text: "# Incubator Kills (Diviner's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_primal_incubator_kills",
			text: "# Incubator Kills (Primal)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_enchanted_incubator_kills",
			text: "# Incubator Kills (Enchanted)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_geomancers_incubator_kills",
			text: "# Incubator Kills (Geomancer's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_ornate_incubator_kills",
			text: "# Incubator Kills (Ornate)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_timelost_incubator_kills",
			text: "# Incubator Kills (Time-Lost)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_celestial_armoursmiths_incubator_kills",
			text: "# Incubator Kills (Celestial Armoursmith's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_celestial_blacksmiths_incubator_kills",
			text: "# Incubator Kills (Celestial Blacksmith's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_celestial_jewellers_incubator_kills",
			text: "# Incubator Kills (Celestial Jeweller's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_eldritch_incubator_kills",
			text: "# Incubator Kills (Eldritch)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_obscured_incubator_kills",
			text: "# Incubator Kills (Obscured)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_foreboding_incubator_kills",
			text: "# Incubator Kills (Foreboding)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_thaumaturges_incubator_kills",
			text: "# Incubator Kills (Thaumaturge's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_mysterious_incubator_kills",
			text: "# Incubator Kills (Mysterious)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_gemcutters_incubator_kills",
			text: "# Incubator Kills (Gemcutter's)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_feral_incubator_kills",
			text: "# Incubator Kills (Feral)",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_number_of_fractured_mods",
			text: "# Fractured Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_jewellery_elemental_quality",
			text: "+#% Quality to Elemental Damage Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_jewellery_caster_quality",
			text: "+#% Quality to Caster Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_jewellery_attack_quality",
			text: "+#% Quality to Attack Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_jewellery_defense_quality",
			text: "+#% Quality to Defence Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_jewellery_resource_quality",
			text: "+#% Quality to Life and Mana Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_jewellery_resistance_quality",
			text: "+#% Quality to Resistance Modifiers",
			type: "pseudo"
		},
		{
			id: "pseudo.pseudo_jewellery_attribute_quality",
			text: "+#% Quality to Attribute Modifiers",
			type: "pseudo"
		}
	],
	explicit: [
		{
			id: "explicit.stat_3299347043",
			text: "# to maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1671376347",
			text: "#% to Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3372524247",
			text: "#% to Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_4220027924",
			text: "#% to Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1050105434",
			text: "# to maximum Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_4080418644",
			text: "# to Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_3489782002",
			text: "# to maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3261801346",
			text: "# to Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3032590688",
			text: "Adds # to # Physical Damage to Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2511217560",
			text: "#% increased Stun and Block Recovery",
			type: "explicit"
		},
		{
			id: "explicit.stat_2901986750",
			text: "#% to all Elemental Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_328541901",
			text: "# to Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_1509134228",
			text: "#% increased Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2250533757",
			text: "#% increased Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3556824919",
			text: "#% to Global Critical Strike Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_789117908",
			text: "#% increased Mana Regeneration Rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_210067635",
			text: "#% increased Attack Speed (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_3325883026",
			text: "Regenerate # Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3917489142",
			text: "#% increased Rarity of Items found",
			type: "explicit"
		},
		{
			id: "explicit.stat_803737631",
			text: "# to Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_1940865751",
			text: "Adds # to # Physical Damage (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_681332047",
			text: "#% increased Attack Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_4052037485",
			text: "# to maximum Energy Shield (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_983749596",
			text: "#% increased maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1754445556",
			text: "Adds # to # Lightning Damage to Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2891184298",
			text: "#% increased Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1573130764",
			text: "Adds # to # Fire Damage to Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_124859000",
			text: "#% increased Evasion Rating (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_387439868",
			text: "#% increased Elemental Damage with Attack Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_4067062424",
			text: "Adds # to # Cold Damage to Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2974417149",
			text: "#% increased Spell Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1379411836",
			text: "# to all Attributes",
			type: "explicit"
		},
		{
			id: "explicit.stat_2482852589",
			text: "#% increased maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2923486259",
			text: "#% to Chaos Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3962278098",
			text: "#% increased Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2144192055",
			text: "# to Evasion Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_2231156303",
			text: "#% increased Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1310194496",
			text: "#% increased Global Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_587431675",
			text: "#% increased Global Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3291658075",
			text: "#% increased Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1263695895",
			text: "#% increased Light Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_3593843976",
			text: "#% of Physical Attack Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1062208444",
			text: "#% increased Armour (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_4015621042",
			text: "#% increased Energy Shield (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_1037193709",
			text: "Adds # to # Cold Damage (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_53045048",
			text: "# to Evasion Rating (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_2375316951",
			text: "#% increased Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2517001139",
			text: "#% increased Stun Duration on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_809229260",
			text: "# to Armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_3484657501",
			text: "# to Armour (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_3237948413",
			text: "#% of Physical Attack Damage Leeched as Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_691932474",
			text: "# to Accuracy Rating (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_3336890334",
			text: "Adds # to # Lightning Damage (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_2451402625",
			text: "#% increased Armour and Evasion (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_3321629045",
			text: "#% increased Armour and Energy Shield (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_709508406",
			text: "Adds # to # Fire Damage (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_4251717817",
			text: "#% increased Area Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1368271171",
			text: "# Mana gained on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3695891184",
			text: "# Life gained on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2106365538",
			text: "#% increased Evasion Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_3759663284",
			text: "#% increased Projectile Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_624954515",
			text: "#% increased Global Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_2797971005",
			text: "# Life gained for each Enemy hit by your Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_737908626",
			text: "#% increased Critical Strike Chance for Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_1999113824",
			text: "#% increased Evasion and Energy Shield (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_2866361420",
			text: "#% increased Armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_1443060084",
			text: "#% reduced Enemy Stun Threshold",
			type: "explicit"
		},
		{
			id: "explicit.stat_3767873853",
			text: "Reflects # Physical Damage to Melee Attackers",
			type: "explicit"
		},
		{
			id: "explicit.stat_1839076647",
			text: "#% increased Projectile Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_967627487",
			text: "#% increased Damage over Time",
			type: "explicit"
		},
		{
			id: "explicit.stat_1175385867",
			text: "#% increased Burning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1335054179",
			text: "#% chance to Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_474294393",
			text: "#% reduced Mana Cost of Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_2748665614",
			text: "#% increased maximum Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1589917703",
			text: "Minions deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1002362373",
			text: "#% increased Melee Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_770672621",
			text: "Minions have #% increased maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1133016593",
			text: "Adds # to # Fire Damage to Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_2672805335",
			text: "#% increased Attack and Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_95249895",
			text: "#% more Monster Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1290399200",
			text: "#% increased Damage with Poison",
			type: "explicit"
		},
		{
			id: "explicit.stat_2831165374",
			text: "Adds # to # Lightning Damage to Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_821021828",
			text: "# Life gained for each Enemy hit by Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2154246560",
			text: "#% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_884586851",
			text: "#% increased Quantity of Items found",
			type: "explicit"
		},
		{
			id: "explicit.stat_3604946673",
			text: "# to Level of Socketed Minion Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_280731498",
			text: "#% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2843100721",
			text: "# to Level of Socketed Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2469416729",
			text: "Adds # to # Cold Damage to Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_4277795662",
			text: "#% to Cold and Lightning Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_1294118672",
			text: "#% increased Damage with Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3441501978",
			text: "#% to Fire and Lightning Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_736967255",
			text: "#% increased Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4249220643",
			text: "#% increased Attack Speed while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_4253454700",
			text: "#% Chance to Block (Shields)",
			type: "explicit"
		},
		{
			id: "explicit.stat_1538773178",
			text: "#% chance to Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_2309614417",
			text: "#% chance to Freeze",
			type: "explicit"
		},
		{
			id: "explicit.stat_2011656677",
			text: "#% increased Poison Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2166444903",
			text: "#% Chance to Block Attack Damage while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3403461239",
			text: "Extra gore",
			type: "explicit"
		},
		{
			id: "explicit.stat_3639275092",
			text: "#% increased Attribute Requirements",
			type: "explicit"
		},
		{
			id: "explicit.stat_2300185227",
			text: "# to Dexterity and Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2915988346",
			text: "#% to Fire and Cold Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_3139816101",
			text: "#% increased Charges used",
			type: "explicit"
		},
		{
			id: "explicit.stat_674553446",
			text: "Adds # to # Chaos Damage to Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1890519597",
			text: "#% increased Monster Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1535626285",
			text: "# to Strength and Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_4237442815",
			text: "#% to Melee Critical Strike Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_3805075944",
			text: "#% increased Attack Speed while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1923879260",
			text: "Attacks have #% chance to cause Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3441651621",
			text: "# Physical Damage taken from Attack Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_1813451228",
			text: "#% increased Attack Speed with One Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_3293699237",
			text: "#% increased Attack Speed with Swords",
			type: "explicit"
		},
		{
			id: "explicit.stat_1913583994",
			text: "#% increased Monster Attack Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_156096868",
			text: "#% increased Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_538848803",
			text: "# to Strength and Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_836936635",
			text: "Regenerate #% of Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_2488361432",
			text: "#% increased Monster Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_700317374",
			text: "#% increased Amount Recovered",
			type: "explicit"
		},
		{
			id: "explicit.stat_3141070085",
			text: "#% increased Elemental Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3741323227",
			text: "#% increased Flask Effect Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1000591322",
			text: "Area contains many Totems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3851254963",
			text: "#% increased Totem Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_174664100",
			text: "Minions have #% increased Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2391261970",
			text: "Rare Monsters each have a Nemesis Mod",
			type: "explicit"
		},
		{
			id: "explicit.stat_1086147743",
			text: "#% increased Ignite Duration on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_829382474",
			text: "# to Level of Socketed Melee Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_686254215",
			text: "#% increased Totem Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1519615863",
			text: "#% chance to cause Bleeding on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3550868361",
			text: "#% increased Attack Speed with Axes",
			type: "explicit"
		},
		{
			id: "explicit.stat_1513447578",
			text: "#% increased Damage when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_4291461939",
			text: "Regenerate # Mana per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_51994685",
			text: "#% increased Flask Life Recovery rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_3873704640",
			text: "#% more Magic Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_2941585404",
			text: "#% increased Trap Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1782086450",
			text: "#% faster start of Energy Shield Recharge",
			type: "explicit"
		},
		{
			id: "explicit.stat_795138349",
			text: "#% chance to Poison on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3483999943",
			text: "#% chance to Avoid being Chilled",
			type: "explicit"
		},
		{
			id: "explicit.stat_915908446",
			text: "#% to Critical Strike Multiplier with Cold Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_1714180526",
			text: "Players have Elemental Equilibrium",
			type: "explicit"
		},
		{
			id: "explicit.stat_2306522833",
			text: "#% increased Monster Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_649025131",
			text: "#% increased Movement Speed when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1760576992",
			text: "Adds # to # Physical Damage to Bow Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2441475928",
			text: "#% to Critical Strike Multiplier with Lightning Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_490098963",
			text: "#% of Physical Damage Converted to Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1514829491",
			text: "#% chance to Avoid being Frozen",
			type: "explicit"
		},
		{
			id: "explicit.stat_3736589033",
			text: "# to Total Mana Cost of Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3416853625",
			text: "Monsters deal #% extra Damage as Lightning",
			type: "explicit"
		},
		{
			id: "explicit.stat_1073942215",
			text: "#% increased Freeze Duration on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2307547323",
			text: "#% to Critical Strike Multiplier with Fire Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_1452809865",
			text: "#% increased Flask Charges gained",
			type: "explicit"
		},
		{
			id: "explicit.stat_1040269876",
			text: "Adds # to # Lightning Damage to Bow Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_406353061",
			text: "Monsters have #% chance to gain a Power Charge on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3793155082",
			text: "#% more Rare Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_339179093",
			text: "# to Level of Socketed Fire Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3196823591",
			text: "#% increased Charge Recovery",
			type: "explicit"
		},
		{
			id: "explicit.stat_124877078",
			text: "Unique Bosses deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_979246511",
			text: "Gain #% of Physical Damage as Extra Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_97115311",
			text: "Magic Monster Packs each have a Bloodline Mod",
			type: "explicit"
		},
		{
			id: "explicit.stat_1515657623",
			text: "# to Maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_820939409",
			text: "# Mana gained for each Enemy hit by your Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2300399854",
			text: "Adds # to # Chaos Damage to Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_3527617737",
			text: "Has # Abyssal Sockets",
			type: "explicit"
		},
		{
			id: "explicit.stat_3668351662",
			text: "#% increased Shock Duration on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1423639565",
			text: "Minions have #% to all Elemental Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_2749862839",
			text: "#% chance to Dodge Attack Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_138741818",
			text: "#% Chance to Block Spell Damage while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_173226756",
			text: "#% increased Recovery rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_2227180465",
			text: "#% increased Mana Reserved",
			type: "explicit"
		},
		{
			id: "explicit.stat_3337344042",
			text: "#% increased Critical Strike Chance with Cold Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_122525378",
			text: "Immunity to Bleeding during Flask effect\nRemoves Bleeding on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_4000101551",
			text: "Minions have #% increased Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_670153687",
			text: "#% to Critical Strike Multiplier with One Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1809006367",
			text: "Totems gain #% to all Elemental Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_3181974858",
			text: "#% chance to Cause Monsters to Flee",
			type: "explicit"
		},
		{
			id: "explicit.stat_2549889921",
			text: "Players gain #% reduced Flask Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1459321413",
			text: "#% increased Bleeding Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_938645499",
			text: "#% Chance to Block Spell Damage while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1651847244",
			text: "Player chance to Dodge is Lucky",
			type: "explicit"
		},
		{
			id: "explicit.stat_57326096",
			text: "#% to Monster Critical Strike Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_734614379",
			text: "#% increased Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_3729221884",
			text: "Players have #% reduced Chance to Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_2858921304",
			text: "#% chance to gain a Flask Charge when you deal a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_2530372417",
			text: "#% Chance to Block Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1104796138",
			text: "#% increased Critical Strike Chance with Fire Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_1708461270",
			text: "Monsters have #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_687813731",
			text: "Monsters have #% chance to gain an Endurance Charge on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_4139681126",
			text: "#% increased Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2137912951",
			text: "#% increased Mine Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3182498570",
			text: "#% increased Movement Speed during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4061558269",
			text: "#% Chance to Block Attack Damage while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1766142294",
			text: "#% increased Spell Damage while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_118398748",
			text: "#% increased Trap Throwing Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_561307714",
			text: "#% Chance to Block Spell Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_83050999",
			text: "#% increased Damage with Swords",
			type: "explicit"
		},
		{
			id: "explicit.stat_1274831335",
			text: "#% increased Physical Weapon Damage while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3319896421",
			text: "Gain #% of Physical Damage as Extra Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1811341815",
			text: "Historic",
			type: "explicit"
		},
		{
			id: "explicit.stat_928701213",
			text: "Socketed Gems are Supported by Level # Faster Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2109106920",
			text: "Unique Boss has #% increased Attack and Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3407849389",
			text: "#% increased Effect of Curses on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_295075366",
			text: "#% increased Strength Requirement",
			type: "explicit"
		},
		{
			id: "explicit.stat_3561450806",
			text: "Area has increased monster variety",
			type: "explicit"
		},
		{
			id: "explicit.stat_3608809816",
			text: "# to Maximum Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2435536961",
			text: "Adds # to # Physical Damage to Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_2339757871",
			text: "#% increased Energy Shield Recharge Rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_2312028586",
			text: "Players have #% less Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1569407745",
			text: "#% to Critical Strike Multiplier with Elemental Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3591635592",
			text: "Immunity to Freeze and Chill during Flask effect\nRemoves Freeze and Chill on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_227523295",
			text: "# to Maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1917910910",
			text: "#% increased Attack Speed with Two Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1041951480",
			text: "Monsters cannot be Stunned",
			type: "explicit"
		},
		{
			id: "explicit.stat_3448216135",
			text: "Monsters deal #% extra Damage as Cold",
			type: "explicit"
		},
		{
			id: "explicit.stat_3314142259",
			text: "#% increased Damage with Axes",
			type: "explicit"
		},
		{
			id: "explicit.stat_2753083623",
			text: "Monsters have #% increased Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1172029298",
			text: "Minions deal # to # additional Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1199429645",
			text: "#% increased Melee Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1678690824",
			text: "#% increased Spell Damage while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1497673356",
			text: "Monsters deal #% extra Damage as Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_839186746",
			text: "+#% Monster Physical Damage Reduction",
			type: "explicit"
		},
		{
			id: "explicit.stat_1836374041",
			text: "#% increased Damage with Two Handed Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1341148741",
			text: "#% of Chaos Damage Leeched as Life during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3562241510",
			text: "Gain #% of Elemental Damage as Extra Chaos Damage during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_337935900",
			text: "Monsters take #% reduced Extra Damage from Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_444174528",
			text: "#% increased Weapon Damage while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3183973644",
			text: "Monsters' skills Chain # additional times",
			type: "explicit"
		},
		{
			id: "explicit.stat_1412217137",
			text: "#% increased Flask Mana Recovery rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_4055307827",
			text: "#% to Chaos Damage over Time Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_3550168289",
			text: "Areas are inhabited by # additional Rogue Exile",
			type: "explicit"
		},
		{
			id: "explicit.stat_4181072906",
			text: "Players have #% less Recovery Rate of Life and Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_252507949",
			text: "#% to Critical Strike Multiplier with Two Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_2695354435",
			text: "#% increased Global Evasion Rating when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1366534040",
			text: "Players are Cursed with Vulnerability",
			type: "explicit"
		},
		{
			id: "explicit.stat_1334465904",
			text: "#% increased Physical Damage with One Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_2524254339",
			text: "Culling Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3942946753",
			text: "Regenerate #% of Life per second while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1742567045",
			text: "Monsters have #% chance to gain a Frenzy Charge on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3814560373",
			text: "#% increased Physical Damage with Swords",
			type: "explicit"
		},
		{
			id: "explicit.stat_3759735052",
			text: "#% increased Attack Speed with Bows",
			type: "explicit"
		},
		{
			id: "explicit.stat_2546185479",
			text: "#% to Critical Strike Multiplier while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1445684883",
			text: "Reflects # Physical Damage to Attackers on Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_2008219439",
			text: "#% increased Physical Damage with Axes",
			type: "explicit"
		},
		{
			id: "explicit.stat_3796523155",
			text: "#% less effect of Curses on Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_2479683456",
			text: "Minions Regenerate #% of Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3040667106",
			text: "Unique Boss has #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3350803563",
			text: "Monsters Poison on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_318953428",
			text: "#% chance to Blind Enemies on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_644456512",
			text: "#% reduced Flask Charges used",
			type: "explicit"
		},
		{
			id: "explicit.stat_3496944181",
			text: "#% increased Spell Damage while wielding a Staff",
			type: "explicit"
		},
		{
			id: "explicit.stat_1533563525",
			text: "#% of Physical Damage Converted to Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2818167778",
			text: "Gain #% of Physical Damage as Extra Chaos Damage during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3885634897",
			text: "#% chance to Poison on Hit (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_558910024",
			text: "Players are Cursed with Elemental Weakness",
			type: "explicit"
		},
		{
			id: "explicit.stat_2538566497",
			text: "#% increased Attack Speed with Daggers",
			type: "explicit"
		},
		{
			id: "explicit.stat_3382807662",
			text: "#% to Fire Damage over Time Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_1421645223",
			text: "#% increased Attack Speed with Claws",
			type: "explicit"
		},
		{
			id: "explicit.stat_1186596295",
			text: "#% increased Critical Strike Chance with Lightning Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3720627346",
			text: "#% increased Attack Speed with Wands",
			type: "explicit"
		},
		{
			id: "explicit.stat_1010549321",
			text: "#% increased Damage with One Handed Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_977908611",
			text: "#% chance to Knock Enemies Back on hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2023107756",
			text: "Recover #% of Life on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2561836520",
			text: "Regenerate # Energy Shield per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3855016469",
			text: "You take #% reduced Extra Damage from Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_322206271",
			text: "Monsters have #% chance to Avoid Elemental Ailments",
			type: "explicit"
		},
		{
			id: "explicit.stat_3464419871",
			text: "Monsters reflect #% of Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4126210832",
			text: "Hits can't be Evaded",
			type: "explicit"
		},
		{
			id: "explicit.stat_2428829184",
			text: "# to maximum number of Skeletons",
			type: "explicit"
		},
		{
			id: "explicit.stat_2930653471",
			text: "Minions deal # to # additional Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_369494213",
			text: "Gain #% of Physical Damage as Extra Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2381842786",
			text: "#% increased Critical Strike Chance with One Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_3120164895",
			text: "Adds # to # Fire Damage to Bow Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_928238845",
			text: "#% increased Cast Speed with Cold Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_764295120",
			text: "#% increased Critical Strike Chance with Two Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_472520716",
			text: "#% of Damage taken gained as Mana over 4 seconds when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1788635023",
			text: "#% increased Cast Speed with Lightning Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_1588049749",
			text: "Monsters have #% increased Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_3377888098",
			text: "#% increased Skill Effect Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2388360415",
			text: "Socketed Gems are Supported by Level # Concentrated Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2889601781",
			text: "Minions deal # to # additional Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_696707743",
			text: "#% chance to Dodge Spell Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_2835888248",
			text: "Players have Point Blank",
			type: "explicit"
		},
		{
			id: "explicit.stat_2382196858",
			text: "#% increased Cast Speed while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_2215002568",
			text: "Monsters have a #% chance to avoid Poison, Blind, and Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1612163368",
			text: "#% increased Cast Speed while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_581625445",
			text: "#% increased Movement Speed while Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_2527686725",
			text: "#% increased Effect of Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_2304729532",
			text: "Implicit Modifier magnitudes are doubled",
			type: "explicit"
		},
		{
			id: "explicit.stat_3023957681",
			text: "#% chance to gain Onslaught for 4 seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1309819744",
			text: "Monsters fire # additional Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_272758639",
			text: "Players have #% less Armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_215124030",
			text: "Adds # to # Cold Damage to Bow Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2027269580",
			text: "# to Level of Socketed Bow Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2633745731",
			text: "#% increased total Recovery per second from Life Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2452998583",
			text: "# to Level of Socketed Aura Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3501769159",
			text: "#% increased Melee Physical Damage while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2763429652",
			text: "#% chance to Maim on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1122134690",
			text: "Socketed Gems are Supported by Level # Trap",
			type: "explicit"
		},
		{
			id: "explicit.stat_2056783069",
			text: "#% increased Physical Damage with Two Handed Melee Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_2764017512",
			text: "Monsters reflect #% of Elemental Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3393547195",
			text: "#% increased Movement Speed when on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_4262448838",
			text: "#% chance to Avoid being Stunned",
			type: "explicit"
		},
		{
			id: "explicit.stat_3342989455",
			text: "#% of Physical Damage from Hits taken as Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_57434274",
			text: "#% increased Experience gain (Maps)",
			type: "explicit"
		},
		{
			id: "explicit.stat_3375935924",
			text: "Minions have #% increased Attack Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_287491423",
			text: "#% additional Physical Damage Reduction against Abyssal Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_2120297997",
			text: "#% Chance to Block Spell Damage while wielding a Staff",
			type: "explicit"
		},
		{
			id: "explicit.stat_2326202293",
			text: "Players are Cursed with Temporal Chains",
			type: "explicit"
		},
		{
			id: "explicit.stat_2223678961",
			text: "Adds # to # Chaos Damage (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_3577222856",
			text: "Area has patches of desecrated ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_1476643878",
			text: "#% increased Cast Speed with Fire Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_1054098949",
			text: "+#% Monster Elemental Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1959158336",
			text: "Unique Bosses have #% increased Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3970396418",
			text: "Mercury Footprints",
			type: "explicit"
		},
		{
			id: "explicit.stat_2881111359",
			text: "#% Chance to Block Spell Damage (Legacy)",
			type: "explicit"
		},
		{
			id: "explicit.stat_513681673",
			text: "#% chance to Cause Bleeding on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1645459191",
			text: "# to Level of Socketed Cold Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3964634628",
			text: "Adds # to # Fire Damage to Spells and Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_4043416969",
			text: "# to Level of Socketed Lightning Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2202161594",
			text: "Slaying Enemies close together has a #% chance to attract monsters from Beyond",
			type: "explicit"
		},
		{
			id: "explicit.stat_1826802197",
			text: "#% chance to gain a Frenzy Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3240769289",
			text: "#% of Physical Damage Converted to Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_125218179",
			text: "# to maximum number of Spectres",
			type: "explicit"
		},
		{
			id: "explicit.stat_1435748744",
			text: "Curse Skills have #% increased Skill Effect Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1652515349",
			text: "# to maximum number of Raised Zombies",
			type: "explicit"
		},
		{
			id: "explicit.stat_446733281",
			text: "# to Level of Socketed Spell Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1478653032",
			text: "#% reduced Effect of Chill on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_365540634",
			text: "+#% Monster Chaos Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1541516339",
			text: "#% increased Movement Speed per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_4124805414",
			text: "#% to maximum Chance to Block Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4103440490",
			text: "Players are Cursed with Enfeeble",
			type: "explicit"
		},
		{
			id: "explicit.stat_2066542501",
			text: "#% increased Cast Speed while wielding a Staff",
			type: "explicit"
		},
		{
			id: "explicit.stat_656461285",
			text: "#% increased Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2133341901",
			text: "#% of Physical Damage Converted to Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3470876581",
			text: "# to Evasion Rating while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2937483991",
			text: "#% to Critical Strike Multiplier if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1089165168",
			text: "Primordial",
			type: "explicit"
		},
		{
			id: "explicit.stat_3005472710",
			text: "#% chance to Avoid Elemental Ailments",
			type: "explicit"
		},
		{
			id: "explicit.stat_3691695237",
			text: "# to Level of Socketed Curse Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_4235886357",
			text: "Reflects # Cold Damage to Melee Attackers",
			type: "explicit"
		},
		{
			id: "explicit.stat_1526933524",
			text: "Instant Recovery",
			type: "explicit"
		},
		{
			id: "explicit.stat_211381198",
			text: "# Energy Shield gained for each Enemy hit by your Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1778298516",
			text: "#% Chance to Block Attack Damage while wielding a Staff",
			type: "explicit"
		},
		{
			id: "explicit.stat_1662717006",
			text: "Adds # to # Cold Damage to Spells and Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_274716455",
			text: "#% to Critical Strike Multiplier for Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_742529963",
			text: "Bow Attacks fire an additional Arrow",
			type: "explicit"
		},
		{
			id: "explicit.stat_1072119541",
			text: "#% increased Damage if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2899095498",
			text: "Nearby Enemies are Intimidated",
			type: "explicit"
		},
		{
			id: "explicit.stat_3351784991",
			text: "Minions deal # to # additional Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1394963553",
			text: "#% increased Attack Speed with Staves",
			type: "explicit"
		},
		{
			id: "explicit.stat_3720936304",
			text: "Socketed Gems are Supported by Level # Increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2515515064",
			text: "#% increased Attack Speed with Maces and Sceptres",
			type: "explicit"
		},
		{
			id: "explicit.stat_219391121",
			text: "Gain #% of Physical Damage as Extra Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_799271621",
			text: "Area contains two Unique Bosses",
			type: "explicit"
		},
		{
			id: "explicit.stat_3374054207",
			text: "Minions have #% Chance to Block Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2122183138",
			text: "# Mana gained when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_818778753",
			text: "Damage Penetrates #% Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_172852114",
			text: "#% of Physical Attack Damage Leeched as Mana per Blue Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_1585344030",
			text: "#% increased Attack Speed if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1880071428",
			text: "#% increased effect of Non-Curse Auras from your Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_389725673",
			text: "Area has patches of chilled ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_798009319",
			text: "Monsters' Action Speed cannot be modified to below base value",
			type: "explicit"
		},
		{
			id: "explicit.stat_1955882986",
			text: "Regenerate # Life over 1 second when you Cast a Spell",
			type: "explicit"
		},
		{
			id: "explicit.stat_587175996",
			text: "Area is a large Maze",
			type: "explicit"
		},
		{
			id: "explicit.stat_2501237765",
			text: "Socketed Gems are supported by Level # Multistrike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3485067555",
			text: "#% increased Chill Duration on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2101383955",
			text: "Damage Penetrates #% Elemental Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_439950087",
			text: "#% increased Critical Strike Chance with Elemental Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3662336899",
			text: "Recharges # Charge when you take a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_762600725",
			text: "# Life gained when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_895264825",
			text: "#% increased Area of Effect of Aura Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_2397408229",
			text: "Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3166317791",
			text: "#% chance to Gain Unholy Might for 4 seconds on Melee Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_284496119",
			text: "Monster Level: #",
			type: "explicit"
		},
		{
			id: "explicit.stat_1896971621",
			text: "#% increased Mine Throwing Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_279227559",
			text: "#% increased Movement Speed if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3702513529",
			text: "#% increased Weapon Critical Strike Chance while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3594640492",
			text: "Regenerate #% of Energy Shield per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3376488707",
			text: "#% maximum Player Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_251342217",
			text: "Adds Knockback to Melee Attacks during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2047819517",
			text: "#% increased Attack Speed while Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_816367946",
			text: "All Monster Damage from Hits always Ignites",
			type: "explicit"
		},
		{
			id: "explicit.stat_2787733863",
			text: "Adds # to # Lightning Damage to Wand Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1493091477",
			text: "Has no Sockets",
			type: "explicit"
		},
		{
			id: "explicit.stat_3257279374",
			text: "#% increased Damage against Abyssal Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_2885144362",
			text: "Adds # to # Lightning Damage to Spells and Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1106651798",
			text: "Monsters cannot be Taunted",
			type: "explicit"
		},
		{
			id: "explicit.stat_299054775",
			text: "#% increased Evasion Rating during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1793666115",
			text: "Immunity to Shock during Flask effect\nRemoves Shock on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_3338298622",
			text: "#% increased Frenzy Charge Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2223640518",
			text: "Socketed Gems are supported by Level # Blind",
			type: "explicit"
		},
		{
			id: "explicit.stat_3289633055",
			text: "Socketed Gems have #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_3666934677",
			text: "#% increased Experience gain",
			type: "explicit"
		},
		{
			id: "explicit.stat_2001530951",
			text: "#% increased Trap Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2649720402",
			text: "#% more Physical Damage with Unarmed Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_289814996",
			text: "#% to Lightning Resistance when Socketed with a Blue Gem",
			type: "explicit"
		},
		{
			id: "explicit.stat_4016885052",
			text: "Socketed Gems fire an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_1693613464",
			text: "#% increased Armour during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3853018505",
			text: "#% increased Physical Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_856021430",
			text: "#% increased Damage with Movement Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3753748365",
			text: "Damage from Enemies Hitting you is Unlucky while you are on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3660039923",
			text: "#% increased Cast Speed while Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_3051845758",
			text: "#% to Fire Resistance when Socketed with a Red Gem",
			type: "explicit"
		},
		{
			id: "explicit.stat_1064331314",
			text: "#% to Cold Resistance when Socketed with a Green Gem",
			type: "explicit"
		},
		{
			id: "explicit.stat_3665534869",
			text: "Area has patches of burning ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_2605850929",
			text: "Socketed Gems have Elemental Equilibrium",
			type: "explicit"
		},
		{
			id: "explicit.stat_2731249891",
			text: "#% of Fire Damage Converted to Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1618339429",
			text: "#% chance to be Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_828179689",
			text: "#% increased Effect of Chill",
			type: "explicit"
		},
		{
			id: "explicit.stat_211836731",
			text: "All Sockets are White",
			type: "explicit"
		},
		{
			id: "explicit.stat_2918708827",
			text: "#% chance to gain Phasing for 4 seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_821241191",
			text: "#% increased Life Recovery from Flasks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2422197812",
			text: "Left ring slot: #% reduced Reflected Elemental Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_969865219",
			text: "#% increased Damage taken while on Full Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_4176970656",
			text: "# Physical Damage taken on Minion Death",
			type: "explicit"
		},
		{
			id: "explicit.stat_2392912145",
			text: "Immune to Poison during Flask Effect\nRemoves Poison on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_455556407",
			text: "Damage Penetrates #% Elemental Resistance if you haven't Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1408638732",
			text: "#% increased Character Size",
			type: "explicit"
		},
		{
			id: "explicit.stat_45546355",
			text: "Area is inhabited by Skeletons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1069260037",
			text: "#% increased Damage with Claws",
			type: "explicit"
		},
		{
			id: "explicit.stat_908516597",
			text: "Regenerate #% of Life per second while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_2962840349",
			text: "Socketed Gems are Supported by Level # Spell Totem",
			type: "explicit"
		},
		{
			id: "explicit.stat_2143990571",
			text: "#% chance to Trigger Level 20 Summon Volatile Anomaly on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1357244124",
			text: "Right ring slot: #% reduced Reflected Physical Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_1181419800",
			text: "#% increased Damage with Maces and Sceptres",
			type: "explicit"
		},
		{
			id: "explicit.stat_2484223218",
			text: "Unique Boss gives #% increased Experience",
			type: "explicit"
		},
		{
			id: "explicit.stat_3152982863",
			text: "Minions deal # to # additional Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2259700079",
			text: "Socketed Gems are Supported by Level # Increased Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_1195793677",
			text: "Immunity to Ignite during Flask effect\nRemoves Burning on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_1331384105",
			text: "#% increased Skeleton Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_4193088553",
			text: "#% increased Damage over Time while wielding a Two Handed Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_2572192375",
			text: "Socketed Gems are Supported by Level # Added Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2805714016",
			text: "#% increased Damage with Hits against Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3603666270",
			text: "#% additional Physical Damage Reduction if you weren't Damaged by a Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_350598685",
			text: "# to Weapon range",
			type: "explicit"
		},
		{
			id: "explicit.stat_3374165039",
			text: "#% increased Totem Placement speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_852195286",
			text: "#% Chance to Block Attack Damage if you were Damaged by a Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1384864963",
			text: "Regenerate # Life per second per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_379328644",
			text: "#% increased Damage with Wands",
			type: "explicit"
		},
		{
			id: "explicit.stat_665823128",
			text: "#% chance to gain Onslaught for 4 seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2228279620",
			text: "Socketed Gems are Supported by Level # Poison",
			type: "explicit"
		},
		{
			id: "explicit.stat_2929101122",
			text: "Socketed Gems are Supported by Level # Elemental Proliferation",
			type: "explicit"
		},
		{
			id: "explicit.stat_4078695",
			text: "# to Maximum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1337327984",
			text: "Socketed Gems are Supported by Level # Minion Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1787073323",
			text: "Skills Chain # times",
			type: "explicit"
		},
		{
			id: "explicit.stat_1670623917",
			text: "Immune to Curses during Flask effect\nRemoves Curses on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_1341845920",
			text: "Monsters reflect Curses",
			type: "explicit"
		},
		{
			id: "explicit.stat_429867172",
			text: "# to maximum number of Summoned Totems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1174076861",
			text: "#% increased Cast Speed if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3774831856",
			text: "#% increased Physical Damage with Maces and Sceptres",
			type: "explicit"
		},
		{
			id: "explicit.stat_655278200",
			text: "Unique Boss drops an additional Map",
			type: "explicit"
		},
		{
			id: "explicit.stat_962725504",
			text: "#% additional Elemental Resistances during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3944782785",
			text: "#% increased Attack Damage against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1101206134",
			text: "#% Chance to Block Spell Damage if you were Damaged by a Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1393393937",
			text: "#% increased Attack Damage while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2553656203",
			text: "Monsters have a #% chance to cause Elemental Ailments on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_436556261",
			text: "This Area's Modifiers to Quantity of Items found also apply to Rarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2067062068",
			text: "Projectiles Pierce # additional Targets",
			type: "explicit"
		},
		{
			id: "explicit.stat_2999796964",
			text: "Curses have #% reduced effect on Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_2264295449",
			text: "# to Melee Weapon and Unarmed Attack range",
			type: "explicit"
		},
		{
			id: "explicit.stat_30642521",
			text: "You can apply an additional Curse",
			type: "explicit"
		},
		{
			id: "explicit.stat_1688975080",
			text: "Nearby Allies gain #% of Life Regenerated per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_1237708713",
			text: "Adds # to # Lightning Damage to Sword Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1924591908",
			text: "#% chance to grant Onslaught to nearby Enemies on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3143208761",
			text: "#% increased Attributes",
			type: "explicit"
		},
		{
			id: "explicit.stat_4087089130",
			text: "#% increased Damage with Staves",
			type: "explicit"
		},
		{
			id: "explicit.stat_3882531569",
			text: "#% increased Physical Damage with Daggers",
			type: "explicit"
		},
		{
			id: "explicit.stat_3278968597",
			text: "#% chance to Dodge Attack and Spell Hits if you've\nbeen Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2159994279",
			text: "Players have #% increased Cooldown Recovery Speed for Movement Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_41394014",
			text: "Monsters' Melee Attacks apply random Curses on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3232201443",
			text: "#% of Maximum Life taken as Chaos Damage per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_2483795307",
			text: "#% chance to gain a Power Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3676141501",
			text: "#% to maximum Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_553298121",
			text: "#% increased effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4188894176",
			text: "#% increased Damage with Bows",
			type: "explicit"
		},
		{
			id: "explicit.stat_2366940416",
			text: "#% to Chaos Resistance when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_628716294",
			text: "Action Speed cannot be modified to below base value",
			type: "explicit"
		},
		{
			id: "explicit.stat_3848282610",
			text: "#% of Fire Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_832404842",
			text: "#% reduced Enemy Stun Threshold with this Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_1683578560",
			text: "Unwavering Stance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2689259705",
			text: "Final Boss drops higher Level Items",
			type: "explicit"
		},
		{
			id: "explicit.stat_87098247",
			text: "Adds # to # Fire Damage to Wand Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_80079005",
			text: "#% of Lightning Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2383797932",
			text: "Adds # to # Cold Damage to Wand Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3741956733",
			text: "Gains no Charges during Effect of any Overflowing Chalice Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_402920808",
			text: "#% increased Physical Damage with Bows",
			type: "explicit"
		},
		{
			id: "explicit.stat_2169938251",
			text: "Socketed Gems are Supported by Level # Faster Casting",
			type: "explicit"
		},
		{
			id: "explicit.stat_250876318",
			text: "#% increased Global Attack Speed per Green Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_893903361",
			text: "# Life gained on Killing Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1163758055",
			text: "With at least 40 Strength in Radius, Molten Strike has #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_635761691",
			text: "#% increased Physical Damage with Claws",
			type: "explicit"
		},
		{
			id: "explicit.stat_2769075491",
			text: "#% increased Physical Damage with Wands",
			type: "explicit"
		},
		{
			id: "explicit.stat_412745376",
			text: "Minions deal #% increased Damage if you've used a Minion Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1038949719",
			text: "Gain #% of Weapon Physical Damage as Extra Damage of a random Element",
			type: "explicit"
		},
		{
			id: "explicit.stat_2075199521",
			text: "Dexterity from Passives in Radius is Transformed to Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_305634887",
			text: "Recover #% of Life when you lose a Spirit Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2319448214",
			text: "Gore Footprints",
			type: "explicit"
		},
		{
			id: "explicit.stat_723832351",
			text: "#% of Cold Damage Converted to Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4095671657",
			text: "#% to maximum Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1327522346",
			text: "#% increased Mana Regeneration Rate while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_4053097676",
			text: "# to Maximum Spirit Charges per Abyss Jewel affecting you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2848646243",
			text: "Adds # to # Cold Damage to Claw Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_4154059009",
			text: "Monsters are Hexproof",
			type: "explicit"
		},
		{
			id: "explicit.stat_3477714116",
			text: "Curse Enemies with Level 5 Vulnerability on Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_734823525",
			text: "#% increased Evasion Rating while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_2591020064",
			text: "1% increased Movement Speed per # Evasion Rating, up to 75%",
			type: "explicit"
		},
		{
			id: "explicit.stat_141810208",
			text: "#% of Attack Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3531280422",
			text: "Adds # to # Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2969128501",
			text: "#% reduced Mana Cost of Minion Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_13669281",
			text: "Socketed Gems are Supported by Level # Hypothermia",
			type: "explicit"
		},
		{
			id: "explicit.stat_3811191316",
			text: "Minions have #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2697049014",
			text: "You gain a Power Charge on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_3691641145",
			text: "#% increased Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_1776945532",
			text: "Enemies you Kill have a #% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2301696196",
			text: "You take #% of your maximum Life as Chaos Damage on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_2431643207",
			text: "Minions have #% chance to Blind on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2063695047",
			text: "Gain #% of Non-Chaos Damage as extra Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4212255859",
			text: "Cannot be Knocked Back",
			type: "explicit"
		},
		{
			id: "explicit.stat_310246444",
			text: "#% increased Damage while Leeching",
			type: "explicit"
		},
		{
			id: "explicit.stat_1871056256",
			text: "#% of Physical Damage from Hits taken as Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_819529588",
			text: "#% increased Global Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_642457541",
			text: "With a Murderous Eye Jewel Socketed, Intimidate Enemies for 4 seconds on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_570644802",
			text: "#% chance to gain a Spirit Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2112615899",
			text: "#% increased Global Physical Damage with Weapons per Red Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3986030307",
			text: "You gain an Endurance Charge on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_1482572705",
			text: "#% increased Effect of Socketed Jewels",
			type: "explicit"
		},
		{
			id: "explicit.stat_640052854",
			text: "# Mana gained for each Enemy hit by Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_438778966",
			text: "Socketed Gems are Supported by Level # Spell Echo",
			type: "explicit"
		},
		{
			id: "explicit.stat_1745710984",
			text: "#% chance to grant Unholy Might to nearby Enemies on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4231842891",
			text: "Adds # to # Lightning Damage to Claw Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2353576063",
			text: "#% increased Effect of your Curses",
			type: "explicit"
		},
		{
			id: "explicit.stat_1710508327",
			text: "Socketed Gems are Supported by Level # Blastchain Mine",
			type: "explicit"
		},
		{
			id: "explicit.stat_2355312681",
			text: "Monsters are Immune to randomly chosen Elemental Ailments or Stun",
			type: "explicit"
		},
		{
			id: "explicit.stat_3854949926",
			text: "#% increased Movement Speed if you haven't taken Damage Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1119465199",
			text: "Chaos Damage does not bypass Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2221570601",
			text: "#% Global chance to Blind Enemies on hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_827329571",
			text: "#% increased Spell Damage per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1582068183",
			text: "Adds # to # Lightning Damage to Axe Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1782176131",
			text: "Adds # to # Cold Damage to Axe Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_860864690",
			text: "Area contains unbridged gaps to cross",
			type: "explicit"
		},
		{
			id: "explicit.stat_570159344",
			text: "Consumes 1 Frenzy Charge on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_1694106311",
			text: "Cannot be Stunned",
			type: "explicit"
		},
		{
			id: "explicit.stat_3442130499",
			text: "With at least 40 Dexterity in Radius, Ice Shot has #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1164767410",
			text: "#% increased Armour while not Ignited, Frozen or Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_2810434465",
			text: "Gain #% of Physical Damage as Extra Fire Damage if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3457143479",
			text: "Chests have #% increased Item Rarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2461965653",
			text: "Adds # to # Fire Damage to Axe Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3110907148",
			text: "#% increased Cast Speed if a Minion has been Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2856328513",
			text: "#% increased Critical Strike Chance if you haven't dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2301191210",
			text: "#% chance to Blind Enemies on hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1152934561",
			text: "Temporal Chains has #% reduced Effect on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2845889407",
			text: "With at least 40 Strength in Radius, Molten Strike fires an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_1783006896",
			text: "#% chance to Avoid being Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_64726306",
			text: "Can't use other Rings",
			type: "explicit"
		},
		{
			id: "explicit.stat_1618589784",
			text: "#% chance to avoid Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1011772129",
			text: "Your Lightning Damage can Freeze but not Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_4271082039",
			text: "#% chance to Avoid being Ignited while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1910361436",
			text: "Adds # to # Fire Damage to Dagger Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1626998468",
			text: "Area contains no monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_169657426",
			text: "Adds # to # Fire Damage in Main Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_696805682",
			text: "Socketed Gems are Supported by Level # Ancestral Call",
			type: "explicit"
		},
		{
			id: "explicit.stat_2156764291",
			text: "#% increased Damage taken from Ghosts",
			type: "explicit"
		},
		{
			id: "explicit.stat_3991482957",
			text: "#% chance to gain Unholy Might for 10 seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2453026567",
			text: "#% chance to gain Onslaught for 10 seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3621894381",
			text: "#% chance to Dodge Spell Hits while Phasing",
			type: "explicit"
		},
		{
			id: "explicit.stat_2857427872",
			text: "Enemies killed by Zombies explode dealing #% of their Maximum Life as Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2605119037",
			text: "Increases and Reductions to Energy Shield in Radius are Transformed to apply to Armour at 200% of their value",
			type: "explicit"
		},
		{
			id: "explicit.stat_782323220",
			text: "#% increased Elemental Damage with Attack Skills during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2917449574",
			text: "Removes #% of your maximum Energy Shield on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_752930724",
			text: "Items and Gems have #% increased Attribute Requirements",
			type: "explicit"
		},
		{
			id: "explicit.stat_3700381193",
			text: "#% increased Accuracy Rating per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3173052379",
			text: "Ignited Enemies you hit are destroyed on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2985291457",
			text: "Socketed Gems are Supported by Level # Melee Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_506942497",
			text: "#% increased Energy Shield per 10 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_2750004091",
			text: "With a Searching Eye Jewel Socketed, Maim Enemies for 4 seconds on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3591397930",
			text: "Knocks Back Enemies in an Area when you use a Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_1170174456",
			text: "#% increased Endurance Charge Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2196657026",
			text: "# Accuracy Rating per 2 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3150705301",
			text: "#% increased Physical Damage with Staves",
			type: "explicit"
		},
		{
			id: "explicit.stat_165402179",
			text: "# to # added Fire Damage against Burning Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1545858329",
			text: "# to Level of all Lightning Spell Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1002855537",
			text: "Socketed Gems are Supported by Level # Vile Toxins",
			type: "explicit"
		},
		{
			id: "explicit.stat_2018035324",
			text: "# Life gained for each Enemy hit by your Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_376585490",
			text: "Monsters have #% chance to Avoid Ailments",
			type: "explicit"
		},
		{
			id: "explicit.stat_1871765599",
			text: "#% chance to Avoid being Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_2671663397",
			text: "Adds # to # Cold Damage to Spells while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3837707023",
			text: "Minions have #% to Chaos Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1650632809",
			text: "With at least 40 Intelligence in Radius, Spark fires an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_972201717",
			text: "Adds # to # Cold Damage to Sword Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2042405614",
			text: "# Life per 4 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3636096208",
			text: "#% more Melee Physical Damage during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1261612903",
			text: "Your Cold Damage can Ignite but not Freeze or Chill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3479987487",
			text: "#% increased Block and Stun Recovery during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2160282525",
			text: "#% reduced Freeze Duration on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2424133568",
			text: "#% increased Armour if you haven't Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_705686721",
			text: "#% increased Damage taken from Skeletons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1994392904",
			text: "Conduit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1244360317",
			text: "#% increased Damage over Time while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2503377690",
			text: "#% of Recovery applied Instantly",
			type: "explicit"
		},
		{
			id: "explicit.stat_187418672",
			text: "Adds # to # Cold Damage to Mace and Sceptre Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2048970144",
			text: "Minions have # to Armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_935386993",
			text: "With at least 40 Intelligence in Radius, Spark fires Projectiles in a circle",
			type: "explicit"
		},
		{
			id: "explicit.stat_2181499453",
			text: "With at least 40 Intelligence in Radius, Blight has #% increased Hinder Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2406605753",
			text: "Recover #% of Energy Shield on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3303551725",
			text: "Restless Dead",
			type: "explicit"
		},
		{
			id: "explicit.stat_3826977109",
			text: "Socketed Gems are Supported by Level # Maim",
			type: "explicit"
		},
		{
			id: "explicit.stat_1661151735",
			text: "Minions have # to Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_2735889191",
			text: "Lose all Power Charges on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_338121249",
			text: "Curse Enemies with Level # Flammability on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3954157711",
			text: "Adds # to # Physical Damage to Spells while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2918129907",
			text: "Inflicts a random Level # Curse on you when your Totems die",
			type: "explicit"
		},
		{
			id: "explicit.stat_3277537093",
			text: "# Physical Damage taken from Hits by Animals",
			type: "explicit"
		},
		{
			id: "explicit.stat_3914638685",
			text: "#% increased Critical Strike Chance if you have Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2821079699",
			text: "# to maximum number of Golems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3382957283",
			text: "Curse Enemies with Level # Assassin's Mark on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_4067144129",
			text: "Vaal Skills deal #% increased Damage during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3352373076",
			text: "Adds # to # Lightning Damage to Spells while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_2542542825",
			text: "With at least 40 Intelligence in Radius, Magma Orb fires an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_1811422871",
			text: "Socketed Gems are supported by Level # Melee Splash",
			type: "explicit"
		},
		{
			id: "explicit.stat_1592029809",
			text: "Gain a Power Charge on Non-Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_2367680009",
			text: "#% chance to grant a Power Charge to nearby Allies on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1991958615",
			text: "Socketed Gems are Supported by Level # Cold Penetration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2096159630",
			text: "Adds # to # Lightning Damage to Mace and Sceptre Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_44182350",
			text: "Adds # to # Fire Damage to Spells while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_392168009",
			text: "#% to Chaos Resistance during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4268321763",
			text: "#% increased Attack Speed when on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_991168463",
			text: "#% chance to grant a Frenzy Charge to nearby Allies on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2511280084",
			text: "With at least 40 Dexterity in Radius, Ethereal Knives fires Projectiles in a circle",
			type: "explicit"
		},
		{
			id: "explicit.stat_2822821681",
			text: "With at least 40 Dexterity in Radius, Ethereal Knives fires an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_107118693",
			text: "Socketed Gems are Supported by Level # Fortify",
			type: "explicit"
		},
		{
			id: "explicit.stat_3905661226",
			text: "#% increased Damage while you have no Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2412100590",
			text: "With at least 40 Dexterity in Radius, Melee Damage\ndealt by Frost Blades Penetrates #% Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2098320128",
			text: "With at least 40 Intelligence in Radius, Freezing Pulse fires an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_2201614328",
			text: "Regenerate #% of Life per second if you have been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_38301299",
			text: "#% to Fire Resistance while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2825197711",
			text: "#% increased Movement Speed while on Full Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2076080860",
			text: "# to Melee Weapon Range per White Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_1263342750",
			text: "Adds # to # Cold Damage to Dagger Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2378288719",
			text: "Area becomes fatal after some time",
			type: "explicit"
		},
		{
			id: "explicit.stat_215754572",
			text: "#% Chance to Block Spell Damage during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_810772344",
			text: "#% increased Evasion Rating per 10 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_569299859",
			text: "#% to all maximum Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_744082851",
			text: "#% of Chaos Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2675603254",
			text: "# to Level of Socketed Chaos Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_601249293",
			text: "Adds # to # Fire Damage to Sword Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2528955616",
			text: "# Energy Shield gained on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_417188801",
			text: "#% chance to gain an Endurance Charge when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3279535558",
			text: "Cannot Leech when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2808735733",
			text: "Area contains a Large Chest",
			type: "explicit"
		},
		{
			id: "explicit.stat_3479683016",
			text: "Adds # to # Lightning Damage to Dagger Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3235814433",
			text: "# to Level of all Raise Spectre Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3376452528",
			text: "Adds # to # Cold Damage to Spells while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_2921084940",
			text: "Adds # to # Physical Damage to Spells while wielding a Two Handed Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_47954913",
			text: "#% increased Critical Strike Chance against Enemies on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2100196861",
			text: "#% of Attack Damage Leeched as Life on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1881314095",
			text: "Share Endurance Charges with nearby party members",
			type: "explicit"
		},
		{
			id: "explicit.stat_4041805509",
			text: "#% reduced maximum number of Raised Zombies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1389153006",
			text: "#% increased Global Defences",
			type: "explicit"
		},
		{
			id: "explicit.stat_3146788701",
			text: "Adds # to # Fire Damage to Mace and Sceptre Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_172894060",
			text: "#% chance to Dodge Attack Hits per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2739830820",
			text: "# to Level of all Raise Zombie Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2105048696",
			text: "Attacks fire an additional Projectile when in Off Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_3548561213",
			text: "#% increased Attack Speed per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3103494675",
			text: "With at least 40 Dexterity in Radius, Ice Shot Pierces an additional Target",
			type: "explicit"
		},
		{
			id: "explicit.stat_2519106214",
			text: "#% Chance to Block Attack Damage during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_695031402",
			text: "With at least 40 Dexterity in Radius, Viper Strike deals #% increased Damage with Hits and Poison for each Poison on the Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_160933750",
			text: "With at least 40 Intelligence in Radius, Magma Orb\nhas #% increased Area of Effect per Chain",
			type: "explicit"
		},
		{
			id: "explicit.stat_677564538",
			text: "Non-Channelling Skills have # to Total Mana Cost",
			type: "explicit"
		},
		{
			id: "explicit.stat_935326447",
			text: "Moving while Bleeding doesn't cause you to take extra Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3787670808",
			text: "Contains the Immortalised Grandmasters\nPvP damage scaling in effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3751996449",
			text: "#% chance to Trigger Level 8 Summon Raging Spirit on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4226189338",
			text: "# to Level of all Chaos Spell Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2609824731",
			text: "Gain an Endurance Charge when you take a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3150000576",
			text: "Raised Zombies have #% to all Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_3563667308",
			text: "#% increased Raised Zombie Size",
			type: "explicit"
		},
		{
			id: "explicit.stat_2806435316",
			text: "#% increased Accuracy Rating if you haven't Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1559361866",
			text: "With at least 40 Strength in Radius, Ground Slam has a #% chance\nto grant an Endurance Charge when you Stun an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2949096603",
			text: "Your Fire Damage can Shock but not Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_3878987051",
			text: "Socketed Gems are supported by Level # Cast on Death",
			type: "explicit"
		},
		{
			id: "explicit.stat_3829706447",
			text: "Attacks with this Weapon deal #-# added Chaos Damage against\nEnemies affected by at least 5 Poisons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1108755349",
			text: "Socketed Gems are supported by Level # Increased Critical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2135335407",
			text: "Adds # to # Fire Damage to Spells while wielding a Two Handed Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_2532625478",
			text: "Socketed Gems are supported by Level # Elemental Damage with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2355151849",
			text: "#% increased Melee Physical Damage per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1172810729",
			text: "#% chance to deal Double Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1686122637",
			text: "#% increased Damage while Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_1604995720",
			text: "Grants Level # Despair Curse Aura during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3771516363",
			text: "#% additional Physical Damage Reduction",
			type: "explicit"
		},
		{
			id: "explicit.stat_3192135716",
			text: "Traps and Mines have a #% chance to Poison on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1248507170",
			text: "With at least 40 Strength in Radius, Cleave grants Fortify on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_507075051",
			text: "# Mana per 4 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_3410049114",
			text: "#% increased Movement Speed for you and nearby Allies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4116579804",
			text: "Raised Zombies have # to maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_952060721",
			text: "Socketed Gems are supported by Level # Chance to Flee",
			type: "explicit"
		},
		{
			id: "explicit.stat_1992516007",
			text: "Trigger Level # Spirit Burst when you Use a Skill while you have a Spirit Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_133683091",
			text: "Adds # to # Physical Damage to Wand Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2343216207",
			text: "Unique Boss drops # additional Rare #",
			type: "explicit"
		},
		{
			id: "explicit.stat_2961372685",
			text: "Recharges # Charge when you deal a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3220927448",
			text: "Adds # to # Fire Damage to Staff Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3915702459",
			text: "Gain # Life when you lose an Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_156734303",
			text: "#% increased Evasion Rating during Onslaught",
			type: "explicit"
		},
		{
			id: "explicit.stat_3212461220",
			text: "#% Chance to Cause Monster to Flee on Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_728267040",
			text: "Found Items have a #% chance to drop Corrupted in Areas",
			type: "explicit"
		},
		{
			id: "explicit.stat_3112863846",
			text: "An additional Curse can be applied to you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2154290807",
			text: "Adds # to # Fire Damage to Claw Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_447636597",
			text: "#% of Attack Damage Leeched as Life against Maimed Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2831922878",
			text: "#% increased Attack and Cast Speed if you've used a Movement Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1910157106",
			text: "Players cannot Regenerate Life, Mana or Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_474452755",
			text: "Cannot Evade Enemy Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3586984690",
			text: "#% increased Damage with Daggers",
			type: "explicit"
		},
		{
			id: "explicit.stat_503990161",
			text: "Socketed Gems are Supported by Level # Spell Cascade",
			type: "explicit"
		},
		{
			id: "explicit.stat_651875072",
			text: "Triggers Level # Death Walk when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_114734841",
			text: "Flasks applied to you have #% increased Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1801889979",
			text: "Adds # to # Lightning Damage to Spells while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_411460446",
			text: "Socketed Gems are Supported by Level # Added Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1081444608",
			text: "#% increased Claw Physical Damage when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1025503586",
			text: "With at least 40 Strength in Radius, Heavy Strike has a \n#% chance to deal Double Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_154272030",
			text: "#% increased Damage for each type of Abyss Jewel affecting you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1351893427",
			text: "With at least 40 Intelligence in Radius, Fireball Projectiles gain Radius as they travel farther, up to # Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_3067409450",
			text: "#% of Attack Damage Leeched as Mana against Poisoned Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_248838155",
			text: "#% reduced Reflected Elemental Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_2139569643",
			text: "Minions convert #% of Physical Damage to Fire Damage per Red Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3495544060",
			text: "Gain #% of Elemental Damage as Extra Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1334060246",
			text: "Adds # to # Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1921572790",
			text: "#% increased Attack Speed when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1865428306",
			text: "Adds # to # Chaos Damage to Spells while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1261958804",
			text: "Adds # to # Cold Damage to Staff Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1731672673",
			text: "Curse Reflection",
			type: "explicit"
		},
		{
			id: "explicit.stat_3214518396",
			text: "Minions have #% chance to Dodge Attack Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_1274125114",
			text: "Vaal Skills have #% reduced Soul Cost during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1457911472",
			text: "#% chance to cause Enemies to Flee on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_2920970371",
			text: "#% increased Duration of Curses on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3111456397",
			text: "# to Spectre maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3818161429",
			text: "You gain Onslaught for # seconds on Culling Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_2444301311",
			text: "During Flask Effect, Damage Penetrates #% Resistance of each Element for which your Uncapped Elemental Resistance is highest",
			type: "explicit"
		},
		{
			id: "explicit.stat_2801937280",
			text: "Blood Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_2680613507",
			text: "Socketed Gems are Supported by Level # Burning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3603019813",
			text: "With at least 40 Dexterity in Radius, Dual Strike deals Off-Hand Splash Damage\nto surrounding targets",
			type: "explicit"
		},
		{
			id: "explicit.stat_3158958938",
			text: "#% reduced Reflected Physical Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_4077843608",
			text: "Has 1 Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3238189103",
			text: "Your Spells have Culling Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3303015",
			text: "Adds # to # Physical Damage to Claw Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1019020209",
			text: "#% increased Damage per Curse on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_743992531",
			text: "#% of Damage you Reflect to Enemies when Hit is gained as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2114157293",
			text: "#% increased Golem Damage for each Type of Golem you have Summoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_1019891080",
			text: "Arrows deal #% increased Damage with Hits and Ailments to Targets they Pierce",
			type: "explicit"
		},
		{
			id: "explicit.stat_4154259475",
			text: "# to Level of Socketed Support Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1757945818",
			text: "Reflects # Fire Damage to Melee Attackers",
			type: "explicit"
		},
		{
			id: "explicit.stat_2629106530",
			text: "Recover #% of Life on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_2224292784",
			text: "Can have up to # additional Trap placed at a time",
			type: "explicit"
		},
		{
			id: "explicit.stat_902947445",
			text: "Vaal Skills used during effect have #% reduced Soul Gain Prevention Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1740200922",
			text: "#% increased Rarity of Items found during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3416410609",
			text: "#% Chance to Block Projectile Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1370753114",
			text: "Nearby Allies gain #% increased Mana Regeneration Rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_156016608",
			text: "With at least 40 Strength in Radius, Ground Slam\nhas a #% increased angle",
			type: "explicit"
		},
		{
			id: "explicit.stat_2771181375",
			text: "#% increased Poison Duration if you have at least 150 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_1020786773",
			text: "Golems have # to Armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_426503793",
			text: "Curses on Slain Enemies are transferred to a nearby Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_1001829678",
			text: "#% Chance to Block Attack Damage while wielding a Staff (Staves)",
			type: "explicit"
		},
		{
			id: "explicit.stat_1040189894",
			text: "Adds # to # Physical Damage to Sword Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2745936267",
			text: "#% increased Light Radius during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3418949024",
			text: "Attacks with this Weapon Maim on hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3269060224",
			text: "Gain a Power Charge after Spending a total of 200 Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2543931078",
			text: "#% reduced Frenzy Charge Duration per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2235163762",
			text: "Summoned Golems Regenerate #% of their Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_798767971",
			text: "Your Maximum Resistances are #%",
			type: "explicit"
		},
		{
			id: "explicit.stat_2479374428",
			text: "Increases and Reductions to Life in Radius are Transformed to apply to Mana at 200% of their value",
			type: "explicit"
		},
		{
			id: "explicit.stat_4007482102",
			text: "Can't use Chest armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_3433676080",
			text: "#% increased Rarity of Items Dropped by Slain Magic Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1030153674",
			text: "Recover #% of Mana on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_916797432",
			text: "# to Level of Socketed Strength Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3056188914",
			text: "Grants Level # Summon Stone Golem Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4197676934",
			text: "Socketed Gems are Supported by Level # Chance To Bleed",
			type: "explicit"
		},
		{
			id: "explicit.stat_797833282",
			text: "Minions' Attacks deal # to # additional Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3390848861",
			text: "Adds # to # Lightning Damage to Attacks with this Weapon per 10 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3638599682",
			text: "Never deal Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_2109043683",
			text: "#% increased Effect of Buffs granted by your Golems",
			type: "explicit"
		},
		{
			id: "explicit.stat_647983250",
			text: "#% Chance to Block Attack Damage if you have Blocked Spell Damage Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1625933063",
			text: "#% of Attack Damage Leeched as Life against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1774881905",
			text: "#% reduced Mana Cost per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3265951306",
			text: "Socketed Gems are Supported by Level # Fire Penetration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1653010703",
			text: "#% to Non-Ailment Chaos Damage over Time Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_256730087",
			text: "#% increased Damage with Poison if you have at least 300 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3457100218",
			text: "Gain Onslaught for # second per Frenzy Charge on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_3881647885",
			text: "With at least 40 Intelligence in Radius, Blight inflicts Withered for # seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_3790108551",
			text: "With at least 40 Intelligence in Radius, Frostbolt fires an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_1818773442",
			text: "#% increased Damage with Hits and Ailments per Curse on Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_228165595",
			text: "Socketed Gems are Supported by Level # Lesser Poison",
			type: "explicit"
		},
		{
			id: "explicit.stat_189451991",
			text: "Reflects # Chaos Damage to Melee Attackers",
			type: "explicit"
		},
		{
			id: "explicit.stat_766615564",
			text: "#% increased Physical Damage with Ranged Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_3520048646",
			text: "#% increased Cold Damage while your Off Hand is empty",
			type: "explicit"
		},
		{
			id: "explicit.stat_1869678332",
			text: "During Flask Effect, #% reduced Damage taken of each Element for which your Uncapped Elemental Resistance is lowest",
			type: "explicit"
		},
		{
			id: "explicit.stat_374737750",
			text: "#% chance to Cause Poison on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_153777645",
			text: "#% increased Area of Effect of Curse Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_2198697797",
			text: "Cannot gain Mana during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2653955271",
			text: "Damage Penetrates #% Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3519268108",
			text: "Adds # to # Chaos Damage to Spells and Attacks during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3557561376",
			text: "#% increased Spell Damage taken when on Low Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_235847153",
			text: "With at least 40 Dexterity in Radius, Viper Strike has a #% chance per Poison on Enemy to grant Unholy Might for 4 seconds on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2911442053",
			text: "Minions have #% chance to Taunt on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3619054484",
			text: "#% Chance to Block Attack Damage while not Cursed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1298238534",
			text: "Adds # to # Physical Damage to Dagger Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1085359447",
			text: "#% increased Charges gained by Other Flasks during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_568070507",
			text: "Raised Zombies deal #% more Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3872306017",
			text: "#% increased Power Charge Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1106668565",
			text: "Socketed Gems are Supported by Level # Innervate",
			type: "explicit"
		},
		{
			id: "explicit.stat_412462523",
			text: "#% more Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3598983877",
			text: "Gain a Frenzy Charge if an Attack Ignites an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2222186378",
			text: "#% increased Mana Recovery from Flasks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3738331820",
			text: "With at least 40 Strength in Radius, #% of Glacial\nHammer Physical Damage Converted to Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1718147982",
			text: "#% increased Minion Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_425242359",
			text: "#% of Physical Damage from Hits taken as Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_798111687",
			text: "You cannot be Shocked while at maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2092708508",
			text: "With at least 40 Dexterity in Radius, Frost Blades has #% increased Projectile Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2881426199",
			text: "Lose all Endurance Charges when Rampage ends",
			type: "explicit"
		},
		{
			id: "explicit.stat_3228973398",
			text: "# Flask Charges recovered every 3 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_350069479",
			text: "#% of Attack Damage Leeched as Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_3366426512",
			text: "Minions convert #% of Physical Damage to Lightning Damage per Blue Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_1582728645",
			text: "Gain # Charge when you are Hit by an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2085855914",
			text: "Summoned Raging Spirits deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_498214257",
			text: "#% chance to gain a Power, Frenzy or Endurance Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3812107348",
			text: "Instant Recovery when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_485151258",
			text: "#% increased Damage against Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3612256591",
			text: "#% increased Cold Damage if you have used a Fire Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1777334641",
			text: "Culling Strike against Burning Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4020144606",
			text: "Socketed Gems are Supported by Level # Added Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3477720557",
			text: "Area has patches of shocking ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_4293455942",
			text: "Enemies Cannot Leech Life From you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1104246401",
			text: "Socketed Gems have Blood Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_1261982764",
			text: "#% increased Life Recovered",
			type: "explicit"
		},
		{
			id: "explicit.stat_3814686091",
			text: "Herald of Thunder has #% increased Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3683134121",
			text: "#% increased Attack Speed with Movement Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_1173027373",
			text: "Regenerate #% of Life per second with at least 400 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_1092987622",
			text: "#% of Melee Physical Damage taken reflected to Attacker",
			type: "explicit"
		},
		{
			id: "explicit.stat_3565558422",
			text: "With at least 40 Strength in Radius, Glacial Hammer deals\nCold-only Splash Damage to surrounding targets",
			type: "explicit"
		},
		{
			id: "explicit.stat_1140739168",
			text: "#% increased Damage Over Time during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_967108924",
			text: "#% increased Global Defences per White Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3910961021",
			text: "#% increased Herald of Ice Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_308396001",
			text: "#% increased Movement Speed if you haven't been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3765671129",
			text: "With at least 40 Dexterity in Radius, Dual Strike has a #% chance\nto deal Double Damage with the Main-Hand Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_349586058",
			text: "Area has patches of chilled ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_4227567885",
			text: "Minions have #% increased Attack and Cast Speed if you or your Minions have Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_99089516",
			text: "Socketed Gems are supported by Level # Faster Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_1214153650",
			text: "#% chance to Block Spell Damage if you have Blocked Attack Damage Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_851224302",
			text: "Zealot's Oath during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3212481075",
			text: "Adds # to # Lightning Damage to Staff Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2727977666",
			text: "With at least 40 Intelligence in Radius, Frostbolt Projectiles gain #% increased Projectile Speed per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_276103140",
			text: "#% increased Critical Strike Chance against Shocked Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_808939569",
			text: "Socketed Gems are Supported by Level # Minion Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4255924189",
			text: "Adds # to # Physical Damage to Spells while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3881126302",
			text: "Cannot be Frozen if Dexterity is higher than Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2926399803",
			text: "Cannot be Stunned by Attacks if your other Ring is an Elder Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_3002506763",
			text: "#% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1342790450",
			text: "#% increased Quantity of Items Dropped by Slain Normal Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4167600809",
			text: "#% increased Fire Damage if you have used a Cold Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2234049899",
			text: "Unaffected by Shocked Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_2481358827",
			text: "#% increased Physical Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3654074125",
			text: "Attacks have #% chance to Poison while at maximum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2656696317",
			text: "Regenerate #% of Life per second while Frozen",
			type: "explicit"
		},
		{
			id: "explicit.stat_2740359895",
			text: "Your Hits can only Kill Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1011760251",
			text: "#% to maximum Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_504850499",
			text: "Area contains an extra Harbinger",
			type: "explicit"
		},
		{
			id: "explicit.stat_875143443",
			text: "#% chance to Steal Power, Frenzy, and Endurance Charges on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3025389409",
			text: "#% of Physical Attack Damage Leeched as Life per Red Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3579807004",
			text: "#% increased Melee Damage when on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3230795453",
			text: "You gain a Frenzy Charge on use",
			type: "explicit"
		},
		{
			id: "explicit.stat_2466604008",
			text: "Attacks Chain an additional time when in Main Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_676883595",
			text: "Cannot be Ignited if Strength is higher than Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2312817839",
			text: "Cannot be Stunned by Spells if your other Ring is a Shaper Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_422591144",
			text: "Manifested Dancing Dervish dies when Rampage ends",
			type: "explicit"
		},
		{
			id: "explicit.stat_2826979740",
			text: "Nearby Enemies are Blinded",
			type: "explicit"
		},
		{
			id: "explicit.stat_2398198236",
			text: "Adds # to # Lightning Damage to Spells while wielding a Two Handed Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_35810390",
			text: "+#% to Global Critical Strike Multiplier per Green Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_967556848",
			text: "Socketed Gems fire Projectiles in a circle",
			type: "explicit"
		},
		{
			id: "explicit.stat_34194642",
			text: "#% increased Effect of Auras on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3882662078",
			text: "Adds # to # Physical Damage to Mace and Sceptre Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3420284170",
			text: "#% reduced Spark Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1604393896",
			text: "#% increased Cast Speed per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_35476451",
			text: "#% increased Damage per 5 of your lowest Attribute",
			type: "explicit"
		},
		{
			id: "explicit.stat_3345724391",
			text: "#% chance to Dodge Attack Hits while your Off Hand is empty",
			type: "explicit"
		},
		{
			id: "explicit.stat_3852526385",
			text: "# to Level of Socketed Movement Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1237038225",
			text: "Socketed Gems Reserve No Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_630867098",
			text: "With at least 40 Dexterity in Radius, Barrage fires an additional projectile simultaneously on the first and final attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2843214518",
			text: "#% increased Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1756125633",
			text: "Manifested Dancing Dervish disables both weapon slots",
			type: "explicit"
		},
		{
			id: "explicit.stat_1438403666",
			text: "Gain a Frenzy, Endurance, or Power Charge once per second while you are Stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_1350938937",
			text: "#% chance to Trigger Level 20 Tentacle Whip on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2153364323",
			text: "# Intelligence Requirement",
			type: "explicit"
		},
		{
			id: "explicit.stat_1390285657",
			text: "Socketed Gems are Supported by Level # Slower Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_1169502663",
			text: "Grants Level # Frostbite Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1555962658",
			text: "#% increased Attack Damage if your other Ring is a Shaper Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_2864779809",
			text: "Gain #% to Critical Strike Chance for 2 seconds after Spending a total of 800 Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_3266394681",
			text: "Attack Skills have # to maximum number of Summoned Totems",
			type: "explicit"
		},
		{
			id: "explicit.stat_550444281",
			text: "Socketed Gems are Supported by Level # Cold to Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_2921373173",
			text: "#% increased Spell Damage if your other Ring is an Elder Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_2582360791",
			text: "#% increased Chaos Damage per 10 Intelligence from Allocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_2103009393",
			text: "Grants Level # Icestorm Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_749770518",
			text: "Socketed Gems are Supported by Level # Inspiration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2254480358",
			text: "# to Level of all Cold Spell Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_974757096",
			text: "Triggers Level # Manifest Dancing Dervish on Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_573884683",
			text: "#% chance to create Consecrated Ground when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3612464552",
			text: "You cannot be Frozen for # second after being Frozen",
			type: "explicit"
		},
		{
			id: "explicit.stat_3736953565",
			text: "#% increased Quantity of Items found during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3612407781",
			text: "# Physical Damage taken from Projectile Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_97250660",
			text: "Projectiles Pierce an additional Target while you have Phasing",
			type: "explicit"
		},
		{
			id: "explicit.stat_3771273420",
			text: "Strength from Passives in Radius is Transformed to Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_1067429236",
			text: "#% increased Stun Duration on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2105456174",
			text: "You grant # Frenzy Charges to allies on Death",
			type: "explicit"
		},
		{
			id: "explicit.stat_662691280",
			text: "Adds # to # Fire Damage to Spells while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3983981705",
			text: "#% chance to Blind Enemies on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_4084763463",
			text: "Regenerate # Mana per Second per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_927458676",
			text: "Spreads Tar when you take a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3162258068",
			text: "Cannot Block Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2718698372",
			text: "# to Level of Socketed Dexterity Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2818518881",
			text: "#% increased Spell Damage per 10 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2415398184",
			text: "#% to all Elemental Resistances while you have at least 200 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_215346464",
			text: "You cannot be Shocked for # second after being Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_3743301799",
			text: "#% increased Fire Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_1736172673",
			text: "Damage with Weapons Penetrates #% Elemental Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3446170049",
			text: "Shocks nearby Enemies during Flask effect, causing 10% increased Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_2074744008",
			text: "With at least 40 Intelligence in Radius, #% increased Freezing Pulse Damage if\nyou've Shattered an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1325047894",
			text: "#% of Damage is taken from Mana before Life per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2839036860",
			text: "#% increased Endurance, Frenzy and Power Charge Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2797075304",
			text: "Counts as Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1004011302",
			text: "#% increased Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1454603936",
			text: "Adds # to # Physical Damage to Attacks with this Weapon per 3 Player Levels",
			type: "explicit"
		},
		{
			id: "explicit.stat_347697569",
			text: "#% increased Accuracy Rating when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3571342795",
			text: "# to Level of Socketed Elemental Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_947072590",
			text: "You cannot be Ignited for # second after being Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_99927264",
			text: "#% reduced Shock Duration on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3111255591",
			text: "#% of Physical Attack Damage Leeched as Life during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2306924373",
			text: "You cannot be Chilled for # second after being Chilled",
			type: "explicit"
		},
		{
			id: "explicit.stat_209056835",
			text: "#% chance to Trigger a Socketed Spell when you Attack with this Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_2102212273",
			text: "#% reduced Critical Strike Chance per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2237528173",
			text: "Strength from Passives in Radius is Transformed to Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2449668043",
			text: "#% increased Spell Damage per 5% Chance to Block Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4097174922",
			text: "Dexterity from Passives in Radius is Transformed to Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_4293245253",
			text: "Enemies Cannot Leech Mana From you",
			type: "explicit"
		},
		{
			id: "explicit.stat_269590092",
			text: "#% reduced Attack and Cast Speed per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_4125471110",
			text: "#% chance to Trigger Level 16 Molten Burst on Melee Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_886931978",
			text: "#% increased Recovery when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1829238593",
			text: "Arrows Pierce all Targets",
			type: "explicit"
		},
		{
			id: "explicit.stat_3796013729",
			text: "Socketed Gems are Supported by Level # Ruthless",
			type: "explicit"
		},
		{
			id: "explicit.stat_2837603657",
			text: "You can inflict an additional Ignite on an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2915373966",
			text: "Gain #% of Cold Damage as Extra Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3102860761",
			text: "30% increased Movement Speed for # seconds on Throwing a Trap",
			type: "explicit"
		},
		{
			id: "explicit.stat_1643796079",
			text: "Gain Rampage while at Maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1181129483",
			text: "Adds # to # Chaos Damage to Spells while holding a Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_214001793",
			text: "#% increased Damage over Time while Dual Wielding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3769854701",
			text: "Cannot Leech Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3758293500",
			text: "Adds # to # Chaos Damage in Off Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_3954637034",
			text: "Summoned Raging Spirits' Hits always Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_2996445420",
			text: "Critical Strikes have Culling Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1643688236",
			text: "Unaffected by Burning Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_321077055",
			text: "Adds # to # Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_729180395",
			text: "Golem Skills have #% increased Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3246099900",
			text: "Golems have #% increased Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1269609669",
			text: "# Life gained on Kill per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2687254633",
			text: "#% of Lightning Damage Leeched as Life during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1435838855",
			text: "+1 to Level of Socketed Active Skill Gems per # Player Levels",
			type: "explicit"
		},
		{
			id: "explicit.stat_800141891",
			text: "#% chance to Freeze, Shock and Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_1539696482",
			text: "With at least 40 Strength in Radius, Cleave has +1 to Radius per Nearby\nEnemy, up to +10",
			type: "explicit"
		},
		{
			id: "explicit.stat_4148932984",
			text: "#% chance to create Consecrated Ground when you Shatter an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3404168630",
			text: "#% increased Global Critical Strike Chance when in Main Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_325437053",
			text: "Mines can be Detonated an additional time",
			type: "explicit"
		},
		{
			id: "explicit.stat_2847548062",
			text: "#% increased Mana Regeneration Rate per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2872105818",
			text: "#% chance to Avoid being Chilled during Onslaught",
			type: "explicit"
		},
		{
			id: "explicit.stat_2464689927",
			text: "Adds # to # Cold Damage to Spells while wielding a Two Handed Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_2749166636",
			text: "#% More Damage with Arrow Hits at Close Range",
			type: "explicit"
		},
		{
			id: "explicit.stat_1507059769",
			text: "#% increased Attack Speed if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1586440250",
			text: "#% increased Elemental Damage per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3194864913",
			text: "Increases and Reductions to Life in Radius are Transformed to apply to Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_352612932",
			text: "#% chance to gain a Power Charge on Killing an Enemy affected by fewer than 5 Poisons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1187803783",
			text: "You are Shocked during Flask effect, causing 50% increased Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_2608615082",
			text: "Socketed Gems are Supported by Level # Mana Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2572042788",
			text: "Attacks have #% to Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2109066258",
			text: "Adds # to # Cold Damage in Off Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_4181057577",
			text: "#% less Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2162876159",
			text: "#% increased Projectile Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1243237244",
			text: "Reflects # to # Lightning Damage to Melee Attackers",
			type: "explicit"
		},
		{
			id: "explicit.stat_496011033",
			text: "# Chaos Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_374891408",
			text: "#% of Physical Attack Damage Leeched as Mana during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1696792323",
			text: "#% increased Damage per Frenzy Charge with Hits against Enemies on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_98977150",
			text: "Pain Attunement",
			type: "explicit"
		},
		{
			id: "explicit.stat_3685028559",
			text: "#% chance to create Desecrated Ground when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3243534964",
			text: "Cannot Leech Life from Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_2080171093",
			text: "#% increased Spell Damage during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1275066948",
			text: "#% increased Melee Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1097026492",
			text: "With at least 40 Intelligence in Radius, Raised\nZombies' Slam Attack has #% increased Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_781633505",
			text: "With at least 40 Intelligence in Radius, Raised Zombies' Slam\nAttack deals #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2929867083",
			text: "#% increased Rarity of Items found when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1569463444",
			text: "# Physical Damage taken from Attack Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_1604736568",
			text: "Recover #% of Mana on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1599775597",
			text: "Gain #% of Fire Damage as Extra Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1384629003",
			text: "Socketed Gems are Supported by Level # Ice Bite",
			type: "explicit"
		},
		{
			id: "explicit.stat_573347393",
			text: "Iron Grip",
			type: "explicit"
		},
		{
			id: "explicit.stat_456916387",
			text: "On Killing a Poisoned Enemy, nearby Enemies are Poisoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_323705912",
			text: "Skills fire an additional Projectile during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4031081471",
			text: "You take # Chaos Damage per second for # seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4238266823",
			text: "#% of Lightning Damage Converted to Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3417757416",
			text: "#% increased Cooldown Recovery Speed for throwing Traps",
			type: "explicit"
		},
		{
			id: "explicit.stat_539747809",
			text: "Socketed Gems are Supported by Level # Blasphemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2342431054",
			text: "Your Energy Shield starts at zero",
			type: "explicit"
		},
		{
			id: "explicit.stat_808491979",
			text: "Area is inhabited by Undead",
			type: "explicit"
		},
		{
			id: "explicit.stat_4159248054",
			text: "#% increased Warcry Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_988575597",
			text: "#% increased Energy Shield Recovery rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_69898010",
			text: "Adds # to # Physical Damage to Staff Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1619549198",
			text: "Ignited Enemies Burn #% slower",
			type: "explicit"
		},
		{
			id: "explicit.stat_3872739249",
			text: "Grants Summon Harbinger of the Arcane Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4091369450",
			text: "#% increased Melee Damage during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2739148464",
			text: "Has no Attribute Requirements",
			type: "explicit"
		},
		{
			id: "explicit.stat_1556625719",
			text: "Gain a Power Charge for each Enemy you hit with a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_637766438",
			text: "You and nearby allies gain #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2912438397",
			text: "Summoned Skeletons take #% of their Maximum Life per second as Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_751813227",
			text: "Lose #% of Life on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3489372920",
			text: "You have Phasing if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4045269075",
			text: "Recover # Life when you Ignite an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2216127021",
			text: "#% increased Area of Effect while Unarmed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2323739383",
			text: "Minions have #% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2402136583",
			text: "Gain #% of Lightning Damage as Extra Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1473289174",
			text: "Unaffected by Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_3261557635",
			text: "Bow Knockback at Close Range",
			type: "explicit"
		},
		{
			id: "explicit.stat_4017879067",
			text: "#% increased Minion Movement Speed per 50 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3635120731",
			text: "#% chance to Avoid Projectiles while Phasing",
			type: "explicit"
		},
		{
			id: "explicit.stat_3693130674",
			text: "#% increased Lightning Damage per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1168603868",
			text: "and nearby Allies Regenerate 200 Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_1567462963",
			text: "Socketed Gems are supported by Level # Additional Accuracy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2901262227",
			text: "#% chance to create Chilled Ground when you Freeze an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_5955083",
			text: "Skills which throw Mines throw up to 1 additional Mine if you have at least 800 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2770782267",
			text: "Minions Leech #% of Damage as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1647529598",
			text: "Socketed Gems are Supported by Level # Added Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2761732967",
			text: "Summoned Raging Spirits refresh their Duration when they Kill an Ignited Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2919089822",
			text: "#% chance to Ignite when in Main Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_121185030",
			text: "#% increased Rarity of Items found from Slain Unique Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2706994884",
			text: "Shocked Enemies you Kill Explode, dealing #% of\ntheir Maximum Life as Lightning Damage which cannot Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_1265282021",
			text: "Grants Level # Aspect of the Cat Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4064396395",
			text: "Attacks with this Weapon Penetrate #% Elemental Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_803730540",
			text: "Immune to Freeze, Chill, Curses and Stuns during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3175679225",
			text: "Nearby allies gain #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_215882879",
			text: "#% increased Area of Effect during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4260403588",
			text: "1% increased Rarity of Items found per # Rampage Kills",
			type: "explicit"
		},
		{
			id: "explicit.stat_105466375",
			text: "Grants Level # Purity of Elements Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3062329212",
			text: "Minions Regenerate # Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3814066599",
			text: "Socketed Gems are Supported by Level # Trap And Mine Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2893557981",
			text: "Your Critical Strikes do not deal extra Damage during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1472543401",
			text: "Cannot be Stunned when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2828673491",
			text: "Regenerate #% of Life per second per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2594215131",
			text: "#% increased Physical Weapon Damage per 10 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_4113852051",
			text: "1% increased Evasion Rating per # Dexterity Allocated in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_3779823630",
			text: "#% increased Spell Damage while no Mana is Reserved",
			type: "explicit"
		},
		{
			id: "explicit.stat_3762412853",
			text: "Attacks with this Weapon Penetrate #% Chaos Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3240073117",
			text: "#% increased Life Recovery rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_2483362276",
			text: "Far Shot",
			type: "explicit"
		},
		{
			id: "explicit.stat_1210937073",
			text: "Spectres have a Base Duration of # seconds\nSpectres do not travel between Areas",
			type: "explicit"
		},
		{
			id: "explicit.stat_3030692053",
			text: "Socketed Gems are Supported by Level # Ballista Totem",
			type: "explicit"
		},
		{
			id: "explicit.stat_2158060122",
			text: "#% of Lightning Damage Converted to Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_364728407",
			text: "Curse Enemies with Level # Poacher's Mark on Hit, which can apply to Hexproof Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3256116097",
			text: "#% increased Cast Speed during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_591105508",
			text: "# to Level of all Fire Spell Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2040585053",
			text: "#% Chance to Block Attack Damage when in Off Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_3653191834",
			text: "Unaffected by Chilled Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_1723061251",
			text: "Totems Reflect #% of their maximum Life as Fire Damage to nearby Enemies when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2418601510",
			text: "Your Chaos Damage can Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_1608425196",
			text: "Intelligence from Passives in Radius is Transformed to Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_510304734",
			text: "#% increased Duration of Poisons you inflict during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1086057912",
			text: "Minions deal #% increased Damage against Abyssal Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_3491499175",
			text: "#% increased Poison Duration per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3134632618",
			text: "Area is inhabited by Lunaris fanatics",
			type: "explicit"
		},
		{
			id: "explicit.stat_3074608753",
			text: "Summoned Skeletons have a #% chance to Cover Enemies in Ash on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3133323410",
			text: "Bleeding Enemies you Kill Explode, dealing #% of\ntheir Maximum Life as Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1289910726",
			text: "Socketed Gems deal # to # additional Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3945934607",
			text: "With at least 40 Dexterity in Radius, Galvanic Arrow has #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2236460050",
			text: "Gems Socketed in Blue Sockets gain #% increased Experience",
			type: "explicit"
		},
		{
			id: "explicit.stat_1224319074",
			text: "#% increased Effect of Auras on your Minions",
			type: "explicit"
		},
		{
			id: "explicit.stat_3448743676",
			text: "# to Level of Socketed Golem Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_280213220",
			text: "#% chance to Taunt Enemies on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3999401129",
			text: "#% of Cold Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_791835907",
			text: "Spells have #% to Critical Strike Chance ",
			type: "explicit"
		},
		{
			id: "explicit.stat_3218891195",
			text: "#% Chance to Block Spell Damage while Cursed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1968038301",
			text: "Contains additional waves of Undead Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_4053951709",
			text: "#% chance to Avoid being Poisoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_3391324703",
			text: "Traps and Mines deal # to # additional Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1307972622",
			text: "#% increased Area of Effect per 20 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2833226514",
			text: "# Strength Requirement",
			type: "explicit"
		},
		{
			id: "explicit.stat_3738335639",
			text: "#% chance to gain a Frenzy Charge when your Trap is triggered by an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_811386429",
			text: "With at least 40 Dexterity in Radius, each Spectral Throw Projectile gains #% increased Damage each time it Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_2125178364",
			text: "Siege Ballista has # to maximum number of Summoned Totems per 200 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1958210928",
			text: "Summoned Skeletons have Avatar of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_3764265320",
			text: "#% of Physical Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2867348718",
			text: "Socketed Attacks have #% to Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_637690626",
			text: "Gain a Frenzy Charge on every 50th Rampage Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_908650225",
			text: "#% increased Damage if you have Shocked an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2420410470",
			text: "Socketed Gems are Supported by Level # Immolate",
			type: "explicit"
		},
		{
			id: "explicit.stat_3541114083",
			text: "Grants Level # Bear Trap Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1787444936",
			text: "Contains waves of Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_2114080270",
			text: "Culling Strike against Enemies Cursed with Poacher's Mark",
			type: "explicit"
		},
		{
			id: "explicit.stat_4119032338",
			text: "#% increased Area of Effect per 25 Rampage Kills",
			type: "explicit"
		},
		{
			id: "explicit.stat_519622288",
			text: "Warcries Knock Enemies Back in an Area",
			type: "explicit"
		},
		{
			id: "explicit.stat_1073384532",
			text: "Recover # Energy Shield when your Trap is triggered by an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_956546305",
			text: "Grants Level # Aspect of the Spider Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_497716276",
			text: "#% increased Trap Trigger Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_32859524",
			text: "Curses in this item are reflected back to you",
			type: "explicit"
		},
		{
			id: "explicit.stat_778050954",
			text: "Adds 1 maximum Lightning Damage to Attacks per # Dexterity Allocated in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_915233352",
			text: "1% increased Melee Physical Damage with Unarmed Attacks per # Dexterity Allocated in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_2828710986",
			text: "Socketed Spells have #% to Critical Strike Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_1589090910",
			text: "Summon an additional Skeleton Warrior with Summon Skeleton",
			type: "explicit"
		},
		{
			id: "explicit.stat_2846730569",
			text: "Uses both hand slots",
			type: "explicit"
		},
		{
			id: "explicit.stat_3916182167",
			text: "Area is inhabited by Demons",
			type: "explicit"
		},
		{
			id: "explicit.stat_1619923327",
			text: "1% increased Claw Physical Damage per # Dexterity Allocated in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_2777278657",
			text: "#% chance to Poison on Hit during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1154827254",
			text: "#% to Critical Strike Multiplier per 10 Strength on Unallocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_3413085237",
			text: "#% increased Skeleton Attack Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_4082111882",
			text: "# to Evasion Rating while on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_135378852",
			text: "Socketed Spells have #% to Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_504366827",
			text: "# to Armour while Frozen",
			type: "explicit"
		},
		{
			id: "explicit.stat_4047895119",
			text: "#% increased Minion Attack Speed per 50 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_311030839",
			text: "Adds # to # Physical Damage to Axe Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_4133552694",
			text: "#% increased Effect of non-Damaging Ailments per Elder Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_1198418726",
			text: "Grants Level # Blight Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4215039317",
			text: "# to Level of Socketed Active Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3013430129",
			text: "# second to Summon Skeleton Cooldown",
			type: "explicit"
		},
		{
			id: "explicit.stat_3088991881",
			text: "With at least 40 Intelligence in Radius, Summon Skeletons can Summon up to # Skeleton Mages",
			type: "explicit"
		},
		{
			id: "explicit.stat_1810011556",
			text: "Reflects # Lightning Damage to Attackers on Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_443525707",
			text: "Nearby Enemies have #% increased Effect of Curses on them",
			type: "explicit"
		},
		{
			id: "explicit.stat_17526298",
			text: "Attacks with this Weapon have #% increased Elemental Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_85576425",
			text: "Elemental Resistances are Zero",
			type: "explicit"
		},
		{
			id: "explicit.stat_1916706958",
			text: "#% chance to Avoid interruption from Stuns while Casting",
			type: "explicit"
		},
		{
			id: "explicit.stat_794830148",
			text: "Adds # to # Fire Damage against Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_860668586",
			text: "#% increased Cold Damage with Attack Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3979476531",
			text: "Critical Strikes do not inherently Freeze",
			type: "explicit"
		},
		{
			id: "explicit.stat_2614321687",
			text: "#% of Damage Leeched as Life against Shocked Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2134166669",
			text: "#% increased Effect of Chilled Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_3741365813",
			text: "Grants Perfect Agony during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_25085466",
			text: "Area is inhabited by Sea Witches and their Spawn",
			type: "explicit"
		},
		{
			id: "explicit.stat_4026156644",
			text: "#% to all maximum Elemental Resistances during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2196695640",
			text: "#% increased Attack Critical Strike Chance per 200 Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_3206381437",
			text: "#% chance to gain Fortify when you Stun an Enemy with Melee Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_825352061",
			text: "Grants Level # Death Aura Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1950806024",
			text: "#% to Cold Damage over Time Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_747037697",
			text: "#% increased Totem Life per 10 Strength Allocated in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_552705983",
			text: "# Strength per 1 Strength on Allocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_3804297142",
			text: "#% chance to Curse non-Cursed Enemies with Enfeeble on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_208447205",
			text: "Trigger Level # Fog of War when your Trap is triggered",
			type: "explicit"
		},
		{
			id: "explicit.stat_2503253050",
			text: "Cannot gain Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2138434718",
			text: "#% increased Rarity of Items Dropped by Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_262301496",
			text: "#% reduced Mana Cost of Raise Spectre",
			type: "explicit"
		},
		{
			id: "explicit.stat_807955413",
			text: "Shocks you cause are reflected back to you",
			type: "explicit"
		},
		{
			id: "explicit.stat_335735137",
			text: "Totems cannot be Stunned",
			type: "explicit"
		},
		{
			id: "explicit.stat_398702949",
			text: "Gain a Frenzy Charge on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1625103793",
			text: "#% increased Damage taken per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_748813744",
			text: "#% of Attack Damage Leeched as Life against Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2064503808",
			text: "You gain an Endurance Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3714207489",
			text: "You gain Onslaught for # second per Endurance Charge when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_199362230",
			text: "Minions convert #% of Physical Damage to Chaos Damage per White Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_968369591",
			text: "#% increased Attack Speed during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2233361223",
			text: "Adds # to # Cold Damage against Chilled or Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1585280892",
			text: "Mortal Conviction",
			type: "explicit"
		},
		{
			id: "explicit.stat_1785942004",
			text: "#% Chance to Trigger Level 18 Summon Spectral Wolf on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_715256302",
			text: "Socketed Gems are Supported by Level # Brutality",
			type: "explicit"
		},
		{
			id: "explicit.stat_243713911",
			text: "Grants Level # Lightning Warp Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_273476097",
			text: "Gain #% of Physical Attack Damage as Extra Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2590715472",
			text: "Take # Physical Damage when you use a Movement Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2492660287",
			text: "Reserves #% of Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3085465082",
			text: "Mines have #% increased Detonation Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1489905076",
			text: "Allies' Aura Buffs do not affect you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1276712564",
			text: "# to Maximum Mana per 10 Dexterity on Unallocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_899329924",
			text: "Gems can be Socketed in this Item ignoring Socket Colour",
			type: "explicit"
		},
		{
			id: "explicit.stat_4170725899",
			text: "Blight has #% increased Hinder Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1601181226",
			text: "#% increased Fire Damage with Hits and Ailments against Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1891782369",
			text: "#% increased Damage with Ignite inflicted on Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1457679290",
			text: "Enemy Projectiles Pierce you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1939202111",
			text: "#% increased Critical Strike Chance against Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_891277550",
			text: "Socketed Gems are supported by Level # Life Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_963261439",
			text: "#% increased Elemental Damage per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1699499433",
			text: "Lose #% of Energy Shield on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3192592092",
			text: "Sockets cannot be modified",
			type: "explicit"
		},
		{
			id: "explicit.stat_1936544447",
			text: "#% chance to gain a Power Charge when you Throw a Trap",
			type: "explicit"
		},
		{
			id: "explicit.stat_3635566977",
			text: "#% to all maximum Resistances while you have no Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2195137717",
			text: "Half of your Strength is added to your Minions",
			type: "explicit"
		},
		{
			id: "explicit.stat_1112135314",
			text: "#% chance to Trigger a Socketed Warcry Skill when you lose Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_4004298002",
			text: "Unaffected by Desecrated Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_3762784591",
			text: "#% reduced Chaos Damage taken over time",
			type: "explicit"
		},
		{
			id: "explicit.stat_3101915418",
			text: "You have Onslaught while at maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_720395808",
			text: "#% of Elemental Damage Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2443713073",
			text: "With at least 40 Dexterity in Radius, Burning Arrow can inflict\nan additional Ignite on an Enemy and cannot apply its Burning Debuff",
			type: "explicit"
		},
		{
			id: "explicit.stat_1070347065",
			text: "# Intelligence per 1 Intelligence on Allocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_2560038623",
			text: "With at least 40 Intelligence in Radius, Cold Snap grants Power Charges instead of Frenzy Charges when Enemies die in its Area\nWith at least 40 Intelligence in Radius, Cold Snap's Cooldown can be bypassed by Power Charges instead of Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_496822696",
			text: "#% chance to gain a Frenzy Charge on Killing an Enemy affected by at least 5 Poisons",
			type: "explicit"
		},
		{
			id: "explicit.stat_2437193018",
			text: "All Attack Damage Chills when you Stun",
			type: "explicit"
		},
		{
			id: "explicit.stat_3442107889",
			text: "Gain Maddening Presence for 10 seconds when you Kill a Rare or Unique Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2593773031",
			text: "Socketed Gems are Supported by Level # Generosity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3849523464",
			text: "# to Maximum Life per Elder Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_1743759111",
			text: "Adds # to # Chaos Damage to Spells while wielding a Two Handed Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_2022724400",
			text: "#% increased Dexterity if Strength is higher than Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_623651254",
			text: "Cannot be used with Chaos Inoculation",
			type: "explicit"
		},
		{
			id: "explicit.stat_2609768284",
			text: "Area is inhabited by the Vaal",
			type: "explicit"
		},
		{
			id: "explicit.stat_3590104875",
			text: "You lose all Endurance Charges on reaching maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_3304763863",
			text: "#% increased Quantity of Items Dropped by Slain Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_50381303",
			text: "Celestial Footprints",
			type: "explicit"
		},
		{
			id: "explicit.stat_1282978314",
			text: "#% increased Melee Damage against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_54812069",
			text: "#% of Damage from Hits is taken from your Spectres' Life before you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2457517302",
			text: "Area is inhabited by Solaris fanatics",
			type: "explicit"
		},
		{
			id: "explicit.stat_4207939995",
			text: "#% increased Intelligence for each Unique Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3417711605",
			text: "Damage Penetrates #% Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2609732382",
			text: "Area has # seconds between monster waves",
			type: "explicit"
		},
		{
			id: "explicit.stat_1478247313",
			text: "#% to Critical Strike Multiplier if you haven't dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_56225773",
			text: "Golems have #% increased Attack and Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3024242403",
			text: "Cannot be Shocked if Intelligence is higher than Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_4182502594",
			text: "Area has # waves of monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_1367987042",
			text: "With 40 Intelligence in Radius, Glacial Cascade has an additional Burst",
			type: "explicit"
		},
		{
			id: "explicit.stat_2434293916",
			text: "An Enemy Writhing Worms escape the Flask when used\nWrithing Worms are destroyed when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_285624304",
			text: "Skills Chain an additional time while at maximum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1917661185",
			text: "Skills which throw Mines throw up to 1 additional Mine if you have at least 800 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2865989731",
			text: "Adds 1 to Maximum Life per # Intelligence Allocated in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_1221011086",
			text: "#% increased Damage with Poison per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2651141461",
			text: "Area is inhabited by Humanoids",
			type: "explicit"
		},
		{
			id: "explicit.stat_990335387",
			text: "Life Leech effects are not removed at Full Life\nLife Leech effects Recover Energy Shield instead while on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1250317014",
			text: "With at least 40 Strength in Radius, #% increased\nRarity of Items dropped by Enemies Shattered by Glacial Hammer",
			type: "explicit"
		},
		{
			id: "explicit.stat_529432426",
			text: "#% increased Damage while Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_3836017971",
			text: "Light Radius is based on Energy Shield instead of Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1175213674",
			text: "#% of Elemental Damage from Hits taken as Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3188291252",
			text: "#% increased Rarity of Items Dropped by Slain Shocked Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4084331136",
			text: "#% increased Chaos Damage per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_3981960937",
			text: "#% chance to Avoid being Shocked while Chilled",
			type: "explicit"
		},
		{
			id: "explicit.stat_1631928082",
			text: "Increases and Reductions to Minion Damage also affect you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2337295272",
			text: "Minions deal #% increased Damage if you've Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3899352861",
			text: "#% increased maximum Life, Mana and Global Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2229840047",
			text: "Chaos Damage does not bypass Energy Shield during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_690135178",
			text: "#% increased total Recovery per second from Mana Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_648019518",
			text: "Removes #% of Life Recovered from Mana when used",
			type: "explicit"
		},
		{
			id: "explicit.stat_2383388829",
			text: "#% chance to gain a Power Charge when you use a Vaal Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_288651645",
			text: "Your spells have #% chance to Shock against Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3221550523",
			text: "Consumes Socketed Support Gems when they reach Maximum Level\nCan Consume # Support Gem\nHas not Consumed any Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3285021988",
			text: "# Life gained for each Enemy Hit if you have used a Vaal Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2350411833",
			text: "You lose #% of Energy Shield per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_2994477068",
			text: "You lose all Endurance Charges when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1054322244",
			text: "#% chance to gain an Endurance Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3591359751",
			text: "You have no Armour or Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1285587221",
			text: "Intelligence from Passives in Radius is Transformed to Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_2416869319",
			text: "Grants #% of Life Recovery to Minions",
			type: "explicit"
		},
		{
			id: "explicit.stat_2241560081",
			text: "#% increased Attack Speed per 25 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3684879618",
			text: "#% increased Movement Speed while Phasing",
			type: "explicit"
		},
		{
			id: "explicit.stat_1358422215",
			text: "1% increased Attack Damage per 300 of the lowest of Armour and Evasion Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_2604619892",
			text: "#% increased Duration of Elemental Ailments on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1053326368",
			text: "#% chance to Avoid being Chilled during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2135899247",
			text: "Lose all Power Charges on reaching Maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1195849808",
			text: "You gain Onslaught for # seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_864879045",
			text: "#% chance to Chill Attackers for 4 seconds on Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_913919528",
			text: "Socketed Gems are Supported by Level # Spell Echo",
			type: "explicit"
		},
		{
			id: "explicit.stat_2658399404",
			text: "Bleeding you inflict is Reflected to you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1695720239",
			text: "#% chance to gain a Frenzy Charge when you Stun an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_90012347",
			text: "Adds # to # Lightning Damage against Shocked Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_308618188",
			text: "Take # Chaos Damage per Second during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3900877792",
			text: "Deal no Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3516340048",
			text: "Area is inhabited by Ghosts",
			type: "explicit"
		},
		{
			id: "explicit.stat_3484267929",
			text: "Nearby allies Recover #% of your Maximum Life when you Die",
			type: "explicit"
		},
		{
			id: "explicit.stat_3408048164",
			text: "Adds # minimum Cold Damage to Spells per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_93696421",
			text: "#% increased Attack Damage per 450 Evasion Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_2546417825",
			text: "#% increased Movement Speed if you've used a Warcry Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_847575654",
			text: "With at least 40 Intelligence in Radius, #% of Damage taken gained as Mana over 4 seconds when Hit during Rallying Cry for you and Allies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3110554274",
			text: "#% to Elemental Resistances during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_530280833",
			text: "With at least 40 Strength in Radius, Vigilant Strike\nFortifies you and Nearby Allies for # seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_254728692",
			text: "Socketed Gems are Supported by Level # Pierce",
			type: "explicit"
		},
		{
			id: "explicit.stat_632761194",
			text: "Zealot's Oath",
			type: "explicit"
		},
		{
			id: "explicit.stat_3811649872",
			text: "Increases and Reductions to Spell Damage also apply to Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3513180117",
			text: "#% increased Mana Recovery rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_3587013273",
			text: "Socketed Gems are Supported by Level # Item Rarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2387539034",
			text: "Attacks with this Weapon Penetrate #% Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_625682777",
			text: "#% of Physical Damage from Hits taken as Cold Damage during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3821472155",
			text: "Adds # to # Physical Damage to Attacks per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_3772485866",
			text: "Increases and Reductions to Cold Damage in Radius are Transformed to apply to Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_144887967",
			text: "#% chance to gain Phasing for # seconds when your Trap is triggered by an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2771016039",
			text: "#% increased Projectile Attack Damage during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2253286128",
			text: "#% Chance to Block Spell Damage while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_4109038270",
			text: "Elemental Hit deals #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1669220541",
			text: "Your Skills have no Mana Cost during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3919557483",
			text: "#% increased Burning Damage if you've Ignited an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_31415336",
			text: "Lose all Frenzy, Endurance, and Power Charges when you Move",
			type: "explicit"
		},
		{
			id: "explicit.stat_889691035",
			text: "#% increased Attack Speed per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2374357674",
			text: "Poison you inflict is Reflected to you if you have fewer than 100 Poisons on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_281201999",
			text: "Knockback direction is reversed",
			type: "explicit"
		},
		{
			id: "explicit.stat_407317553",
			text: "Socketed Gems are Supported by Level # Increased Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1060540099",
			text: "Adds # to # Fire Damage to Attacks with this Weapon per 10 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_2872815301",
			text: "#% chance to Avoid being Frozen during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3914740665",
			text: "Grants Level # Aspect of the Avian Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2387423236",
			text: "Adds # to # Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4056985119",
			text: "+1 to maximum number of Raised Zombies per # Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_4147897060",
			text: "#% reduced Chance to Block Attack and Spell Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2661163721",
			text: "Gain #% of Physical Damage as Extra Cold Damage during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4224965099",
			text: "Lightning Damage from Enemies Hitting you is Lucky",
			type: "explicit"
		},
		{
			id: "explicit.stat_1637928656",
			text: "#% to all Elemental Resistances while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_73272763",
			text: "#% reduced Mana Cost of Skills when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1367119630",
			text: "Your Curses can apply to Hexproof Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2021420128",
			text: "Curse Enemies with Level # Warlord's Mark on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1165023334",
			text: "Your hits can't be Evaded",
			type: "explicit"
		},
		{
			id: "explicit.stat_3607154250",
			text: "#% chance to gain a Power Charge on Killing a Frozen Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_1420236871",
			text: "Ignites you inflict with Attacks deal Damage #% faster",
			type: "explicit"
		},
		{
			id: "explicit.stat_1493090598",
			text: "35% chance to avoid being Stunned for each Herald Skill affecting you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1665492921",
			text: "Grants Level # Herald of Thunder Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_816458107",
			text: "#% Chance to Block Spell Damage per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_849085925",
			text: "Enemies Frozen by you take 20% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3577316952",
			text: "Lose Souls gained from Soul Eater when you use a Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_3753703249",
			text: "Gain #% of Physical Damage as Extra Damage of a random Element",
			type: "explicit"
		},
		{
			id: "explicit.stat_886366428",
			text: "#% increased Damage for each Magic Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_1964333391",
			text: "# Lightning Damage taken per second per Power Charge if\nyour Skills have dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3706656107",
			text: "#% chance to Avoid being Frozen or Chilled if you have used a Fire Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2192181096",
			text: "1% increased Armour per # Strength when in Off Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_1332534089",
			text: "#% increased Melee Physical Damage against Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_881645355",
			text: "Transfiguration of Body",
			type: "explicit"
		},
		{
			id: "explicit.stat_2053992416",
			text: "With 40 total Dexterity and Strength in Radius, Elemental Hit and Wild Strike deal 50% less Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1939175721",
			text: "#% increased Effect of Shrine Buffs on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3398283493",
			text: "Attacks with this Weapon Penetrate #% Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1898967950",
			text: "Regenerate # Life per second per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_4129825612",
			text: "#% of Physical Damage from Hits taken as Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2816901897",
			text: "Socketed Gems have #% reduced Mana Cost",
			type: "explicit"
		},
		{
			id: "explicit.stat_1493590317",
			text: "You have Onslaught while you have Fortify",
			type: "explicit"
		},
		{
			id: "explicit.stat_1217476473",
			text: "Recover #% of Life when you Kill an Enemy during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4169623196",
			text: "#% increased Critical Strike Chance with arrows that Fork",
			type: "explicit"
		},
		{
			id: "explicit.stat_4085417083",
			text: "Adds # to # Lightning Damage to Spells per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_906997920",
			text: "Socketed Gems are Supported by Level # Iron Will",
			type: "explicit"
		},
		{
			id: "explicit.stat_3457687358",
			text: "Enemies killed explode dealing #% of their Life as Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2562665460",
			text: "Stun Threshold is based on Energy Shield instead of Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2666795121",
			text: "#% increased Mana Regeneration Rate per Raised Spectre",
			type: "explicit"
		},
		{
			id: "explicit.stat_3213407110",
			text: "# to Accuracy Rating while at Maximum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2419712247",
			text: "#% increased Duration of Ailments on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_175362265",
			text: "#% to Chaos Resistance per Poison on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3799930101",
			text: "Gems Socketed in Green Sockets have #% to Quality",
			type: "explicit"
		},
		{
			id: "explicit.stat_1214532298",
			text: "#% Chance to Block Attack Damage if there are at least 5 nearby Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1813544255",
			text: "Area is inhabited by Goatmen",
			type: "explicit"
		},
		{
			id: "explicit.stat_3814876985",
			text: "#% chance to gain a Power Charge on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_2230931659",
			text: "#% chance to gain a Frenzy Charge on Killing a Frozen Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3492297134",
			text: "Gain #% of Physical Damage as Extra Chaos Damage while at maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_3418772",
			text: "Socketed Gems have #% chance to cause Enemies to Flee on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_637033100",
			text: "With 40 total Dexterity and Strength in Radius, Elemental Hit and Wild Strike cannot choose Lightning",
			type: "explicit"
		},
		{
			id: "explicit.stat_3585572043",
			text: "With at least 40 Dexterity in Radius, Animate Weapon can Animate up to # Ranged Weapons",
			type: "explicit"
		},
		{
			id: "explicit.stat_3286480398",
			text: "With 40 total Strength and Intelligence in Radius, Elemental Hit and Wild Strike deal 50% less Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2864618930",
			text: "With 40 total Strength and Intelligence in Radius, Elemental Hit and Wild Strike cannot choose Cold",
			type: "explicit"
		},
		{
			id: "explicit.stat_655871604",
			text: "Nearby Allies' Damage with Hits is Lucky",
			type: "explicit"
		},
		{
			id: "explicit.stat_1165847826",
			text: "#% reduced Spell Damage taken from Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1023752508",
			text: "No Chance to Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_721014846",
			text: "You cannot be Hindered",
			type: "explicit"
		},
		{
			id: "explicit.stat_3996149330",
			text: "# to Accuracy Rating per 10 Intelligence on Unallocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_1840985759",
			text: "#% increased Area of Effect for Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2894297982",
			text: "Your Chaos Damage has #% chance to Poison Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_738100799",
			text: "Increases and Reductions to Physical Damage in Radius are Transformed to apply to Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3853996752",
			text: "#% chance for Energy Shield Recharge to start when you use a Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4120779321",
			text: "Removes all but one Life on use\nRemoved life is Regenerated as Energy Shield over # seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_1488891279",
			text: "Chill Enemies for # second on Hit with this Weapon when in Off Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_4092697134",
			text: "Iron Will",
			type: "explicit"
		},
		{
			id: "explicit.stat_2896346114",
			text: "Point Blank",
			type: "explicit"
		},
		{
			id: "explicit.stat_1765389199",
			text: "Life Leech from Hits with this Weapon is instant",
			type: "explicit"
		},
		{
			id: "explicit.stat_306443498",
			text: "Minions convert #% of Physical Damage to Cold Damage per Green Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_4196775867",
			text: "Your Aura Buffs do not affect allies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3121133045",
			text: "Your Lightning Damage can Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_2917587077",
			text: "Remove an Ailment when you use a Flask if all Equipped Items are Elder Items",
			type: "explicit"
		},
		{
			id: "explicit.stat_3442976749",
			text: "Players are Cursed with Frostbite",
			type: "explicit"
		},
		{
			id: "explicit.stat_1352418057",
			text: "#% chance to Curse Enemies with Socketed Curse Gem on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3477833022",
			text: "Enemies Ignited by you during Flask Effect take #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1186934478",
			text: "#% reduced Maximum number of Summoned Raging Spirits",
			type: "explicit"
		},
		{
			id: "explicit.stat_2262736444",
			text: "Eldritch Battery",
			type: "explicit"
		},
		{
			id: "explicit.stat_2557247391",
			text: "Recharges # Charge when you Consume an Ignited corpse",
			type: "explicit"
		},
		{
			id: "explicit.stat_625037258",
			text: "Attacks with this Weapon deal Double Damage to Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4198346809",
			text: "Area is inhabited by Animals",
			type: "explicit"
		},
		{
			id: "explicit.stat_1109700751",
			text: "Adds # to # Cold Damage to Counterattacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2021058489",
			text: "#% chance to Evade Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_881917501",
			text: "Bleeding Enemies you Kill with Hits Shatter",
			type: "explicit"
		},
		{
			id: "explicit.stat_645841425",
			text: "Area is inhabited by ranged monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_1877661946",
			text: "#% increased Duration of Shrine Effects on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_555311393",
			text: "#% increased Physical Damage Over Time per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1030835421",
			text: "#% increased Bleeding Duration per 12 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_1010340836",
			text: "#% chance to Trigger Level 1 Create Lesser Shrine when you Kill an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2445675562",
			text: "#% Chance to Block Attack Damage per Summoned Skeleton",
			type: "explicit"
		},
		{
			id: "explicit.stat_1702195217",
			text: "#% Chance to Block Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1540840",
			text: "Grants Level # Scorching Ray Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3718597497",
			text: "Socketed Gems are Supported by Level # Controlled Destruction",
			type: "explicit"
		},
		{
			id: "explicit.stat_1607849541",
			text: "#% increased Burning Damage for each time you have Shocked a Non-Shocked Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4127720801",
			text: "Cannot Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3247931236",
			text: "Recover #% of Mana when you Kill an Enemy during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3291999509",
			text: "Shock Reflection",
			type: "explicit"
		},
		{
			id: "explicit.stat_3446950357",
			text: "Increases and Reductions to other Damage Types in Radius are Transformed to apply to Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_398940995",
			text: "Non-Chilled Enemies you inflict Bleeding on are Chilled",
			type: "explicit"
		},
		{
			id: "explicit.stat_757315075",
			text: "Gain Unholy Might for # second on Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1478305007",
			text: "With 40 Intelligence in Radius, #% of Glacial Cascade Physical Damage\nConverted to Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2538694749",
			text: "#% Chance to Block Attack Damage while Dual Wielding Claws",
			type: "explicit"
		},
		{
			id: "explicit.stat_953314356",
			text: "#% chance to create a Smoke Cloud when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2325632050",
			text: "Socketed Gems are supported by Level # Cast On Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_4070157876",
			text: "#% increased Area of Effect per Enemy killed recently, up to 50%",
			type: "explicit"
		},
		{
			id: "explicit.stat_3321583955",
			text: "Creates a Smoke Cloud on Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4058681894",
			text: "Your Critical Strikes do not deal extra Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4164870816",
			text: "#% to Critical Strike Multiplier per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3544527742",
			text: "You take #% reduced Extra Damage from Critical Strikes while you have no Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2841618445",
			text: "Regenerate #% of Life per second for each Raised Zombie",
			type: "explicit"
		},
		{
			id: "explicit.stat_989228672",
			text: "Players are Cursed with Flammability",
			type: "explicit"
		},
		{
			id: "explicit.stat_702909553",
			text: "#% increased Scorching Ray beam length",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_cadiro",
			text: "Commissioned # coins to commemorate Cadiro",
			type: "explicit"
		},
		{
			id: "explicit.stat_306104305",
			text: "#% increased Effect of Buffs on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2095084973",
			text: "Cannot Knock Enemies Back",
			type: "explicit"
		},
		{
			id: "explicit.stat_1024189516",
			text: "Trigger Level # Feast of Flesh every 5 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_2332726055",
			text: "#% chance to Freeze during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2390273715",
			text: "With at least 40 Intelligence in Radius, Raised Spectres have a #% chance to gain Soul Eater for 20 seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2217962305",
			text: "#% increased Maximum Life if no Equipped Items are Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_3504652942",
			text: "#% to Damage over Time Multiplier for Poison per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1456464057",
			text: "#% of Spell Damage Leeched as Energy Shield during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3346092312",
			text: "Leech Energy Shield instead of Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2497198283",
			text: "Regenerate # Life per second if no Equipped Items are Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_458438597",
			text: "#% of Damage is taken from Mana before Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_679194784",
			text: "1% increased Damage per # Strength when in Main Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_3358745905",
			text: "Attacks have Blood Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_1453197917",
			text: "#% chance to gain a Power Charge on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2961018200",
			text: "Area is inhabited by Abominations",
			type: "explicit"
		},
		{
			id: "explicit.stat_542923416",
			text: "#% increased Movement Speed while Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_796406325",
			text: "#% chance to Shock during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4222857095",
			text: "Adds # to # Lightning Damage for each Shocked Enemy you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4091848539",
			text: "# Armour if you've Blocked Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1344805487",
			text: "# to Level of Socketed Herald Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2048643052",
			text: "Applies Level 15 Elemental Weakness on Blocking a Spell, ignoring Curse Limit",
			type: "explicit"
		},
		{
			id: "explicit.stat_4069101408",
			text: "#% chance to Shock Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4228951304",
			text: "#% reduced Enemy Stun Threshold during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_172076472",
			text: "# Dexterity per 1 Dexterity on Allocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_4256314560",
			text: "Shocks you when you reach Maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_3237923082",
			text: "Socketed Gems are Supported by Level # Onslaught",
			type: "explicit"
		},
		{
			id: "explicit.stat_1600707273",
			text: "# to Level of all Physical Spell Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_854030602",
			text: "Melee and Melee Weapon Type modifiers in Radius are Transformed to Bow Modifiers",
			type: "explicit"
		},
		{
			id: "explicit.stat_3880462354",
			text: "Grants Level # Herald of Ash Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2391255504",
			text: "You have Zealot's Oath if you haven't been hit recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2918150296",
			text: "Grants Malachai's Endurance, Frenzy and Power for 6 seconds each, in sequence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3470535775",
			text: "#% chance to gain a Power Charge when you Stun",
			type: "explicit"
		},
		{
			id: "explicit.stat_782230869",
			text: "#% increased Effect of non-Damaging Ailments on Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2378065031",
			text: "Curse Skills have #% increased Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_347220474",
			text: "#% increased Spell Damage for each 200 total Mana you have Spent Recently, up to 2000%",
			type: "explicit"
		},
		{
			id: "explicit.stat_4102318278",
			text: "Grants Level # Aspect of the Crab Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_4078194486",
			text: "Recover #% of Life at the end of the Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2072206041",
			text: "#% Chance to cause Bleeding Enemies to Flee on hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2052379536",
			text: "#% of Physical Damage Converted to Fire while you have Avatar of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_3434279150",
			text: "Adds # to # Fire Spell Damage per Buff on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2933625540",
			text: "Your Elemental Damage can Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_1924041432",
			text: "Projectiles gain #% of Non-Chaos Damage as extra Chaos Damage per Chain",
			type: "explicit"
		},
		{
			id: "explicit.stat_458002333",
			text: "Adds # to # Lightning Damage to Unarmed Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_736847554",
			text: "Totems fire # additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_1096897481",
			text: "Gain #% of Physical Attack Damage as Extra Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2922377850",
			text: "Applies Level 15 Punishment on Blocking a Melee Attack, ignoring Curse Limit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2262007777",
			text: "Non-instant Mana Recovery from Flasks is also Recovered as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2809802678",
			text: "Skills fire an additional Projectile if you've used a Movement Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1170386874",
			text: "# to Level of Socketed Vaal Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2347201221",
			text: "Recover #% of Energy Shield when you Kill an Enemy during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3846248551",
			text: "Grants Level # Herald of Ice Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2066426995",
			text: "Adds # to # Physical Damage to Attacks per 25 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1052583507",
			text: "You cannot Regenerate Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_victario",
			text: "Commissioned # coins to commemorate Victario",
			type: "explicit"
		},
		{
			id: "explicit.stat_1436284579",
			text: "Cannot be Blinded",
			type: "explicit"
		},
		{
			id: "explicit.stat_2650053239",
			text: "#% increased Mana Cost of Skills for each 200 total Mana you have Spent Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3597806437",
			text: "Adds # to # Lightning Damage to Spells while Unarmed",
			type: "explicit"
		},
		{
			id: "explicit.stat_676967140",
			text: "Minions Recover #% of their Life when they Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_2920230984",
			text: "#% additional chance for Slain monsters to drop Scrolls of Wisdom",
			type: "explicit"
		},
		{
			id: "explicit.stat_3636098185",
			text: "# to Maximum Energy Shield per 5 Armour on Equipped Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3968454273",
			text: "Gain Soul Eater during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2474196346",
			text: "# Mana gained for each Enemy Hit by your Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_4077035099",
			text: "Passives in Radius can be Allocated without being connected to your tree",
			type: "explicit"
		},
		{
			id: "explicit.stat_3952196842",
			text: "Recover # Life when your Trap is triggered by an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3835570161",
			text: "Minions gain Unholy Might for # seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_19803471",
			text: "#% Chance to Block Spell Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2571899044",
			text: "Transfiguration of Mind",
			type: "explicit"
		},
		{
			id: "explicit.stat_3521117619",
			text: "Evasion Rating is increased by Uncapped Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_670136258",
			text: "With 40 total Dexterity and Strength in Radius, Spectral Shield Throw fires Shard Projectiles when Chaining",
			type: "explicit"
		},
		{
			id: "explicit.stat_3503466234",
			text: "#% increased Damage with Hits and Ailments against Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3888064854",
			text: "#% chance to Ignite during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_347328113",
			text: "# Energy Shield gained on Killing a Shocked Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_1736403946",
			text: "Minions' Hits can only Kill Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2418574586",
			text: "#% increased Damage with Ailments per Elder Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_chitus",
			text: "Commissioned # coins to commemorate Chitus",
			type: "explicit"
		},
		{
			id: "explicit.stat_373964381",
			text: "Mind Over Matter",
			type: "explicit"
		},
		{
			id: "explicit.stat_4252630904",
			text: "Area is inhabited by Cultists of Kitava",
			type: "explicit"
		},
		{
			id: "explicit.stat_3163738488",
			text: "#% increased Elemental Damage per Grand Spectrum",
			type: "explicit"
		},
		{
			id: "explicit.stat_968694760",
			text: "With at least 40 Dexterity in Radius, Burning Arrow has a #% chance to spread Tar if it does not Ignite an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_1926816773",
			text: "Recover #% of Life when you use a Mana Flask",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_xibaqua",
			text: "Bathed in the blood of # sacrificed in the name of Xibaqua",
			type: "explicit"
		},
		{
			id: "explicit.stat_2222938936",
			text: "With at least 40 Dexterity in Radius, Burning Arrow has a #% chance to spread Burning Ground if it Ignites an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_688802590",
			text: "Your Minions spread Caustic Ground on Death, dealing #% of their maximum Life as Chaos Damage per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3839163699",
			text: "Socketed Gems are Supported by Level # Advanced Traps",
			type: "explicit"
		},
		{
			id: "explicit.stat_2802263253",
			text: "With at least 1000 Strength, #% of Damage dealt by your Raised Zombies is Leeched to you as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3345955207",
			text: "Every 8 seconds, gain Avatar of Fire for 4 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_1314617696",
			text: "#% to Physical Damage over Time Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_777246604",
			text: "#% increased Minion Duration per Raised Zombie",
			type: "explicit"
		},
		{
			id: "explicit.stat_729367217",
			text: "#% increased Minion Attack and Cast Speed per Skeleton you own",
			type: "explicit"
		},
		{
			id: "explicit.stat_3191537057",
			text: "#% increased Minion Damage per Raised Spectre",
			type: "explicit"
		},
		{
			id: "explicit.stat_2998305364",
			text: "Deal no Elemental Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2681416653",
			text: "Area contains additional waves of Phantasms",
			type: "explicit"
		},
		{
			id: "explicit.stat_528422616",
			text: "#% increased Damage with Hits and Ailments against Hindered Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3397728378",
			text: "Area contains additional waves of Ghosts",
			type: "explicit"
		},
		{
			id: "explicit.stat_2803182108",
			text: "#% increased Elemental Damage if you've used a Warcry Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1669135888",
			text: "#% increased Elemental Damage per Sextant affecting the area",
			type: "explicit"
		},
		{
			id: "explicit.stat_67132951",
			text: "You are Chilled while you are Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_zerphi",
			text: "Bathed in the blood of # sacrificed in the name of Zerphi",
			type: "explicit"
		},
		{
			id: "explicit.stat_18234720",
			text: "#% increased Intelligence Requirement",
			type: "explicit"
		},
		{
			id: "explicit.stat_662803072",
			text: "#% increased Flask Charges gained during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_173438493",
			text: "Adds # to # Physical Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_622678123",
			text: "Monsters gain # Endurance Charge every 20 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_2654043939",
			text: "You gain Onslaught for # seconds on using a Vaal Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3788706881",
			text: "# maximum Energy Shield per 5 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_4270096386",
			text: "Hits have #% increased Critical Strike Chance against you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1471600638",
			text: "Socketed Curse Gems have #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1285172810",
			text: "#% increased Movement Speed if you have used a Vaal Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1133453872",
			text: "# Dexterity Requirement",
			type: "explicit"
		},
		{
			id: "explicit.stat_710372469",
			text: "Curse Enemies with Level # Conductivity on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2816098341",
			text: "Trigger Socketed Minion Spells on Kill with this Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_696659555",
			text: "#% increased Movement Speed while Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_3462113315",
			text: "Your Raised Spectres also gain Arcane Surge when you do",
			type: "explicit"
		},
		{
			id: "explicit.stat_70389693",
			text: "Monsters gain # Power Charge every 20 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_899293871",
			text: "Trigger Level # Consecrate when you deal a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1962922582",
			text: "#% chance to gain an additional Vaal Soul on Kill",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_kiloava",
			text: "Commanded leadership over # warriors under Kiloava",
			type: "explicit"
		},
		{
			id: "explicit.stat_67280387",
			text: "Gain #% of Maximum Life as Extra Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_304970526",
			text: "#% increased Movement Speed during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3816512110",
			text: "#% increased Projectile Damage per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2034658008",
			text: "#% increased Damage per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_rakiata",
			text: "Commanded leadership over # warriors under Rakiata",
			type: "explicit"
		},
		{
			id: "explicit.stat_2908111053",
			text: "#% of Damage Leeched as Mana against Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2922737717",
			text: "#% chance to gain a Siphoning Charge when you use a Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3112776239",
			text: "Recover #% of Life when you Ignite an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_187998220",
			text: "Iron Reflexes while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_1862097882",
			text: "Spectres have #% increased Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_4066711249",
			text: "Socketed Gems are Supported by Level # Knockback",
			type: "explicit"
		},
		{
			id: "explicit.stat_2328588114",
			text: "#% to Critical Strike Multiplier if Dexterity is higher than Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_kaom",
			text: "Commanded leadership over # warriors under Kaom",
			type: "explicit"
		},
		{
			id: "explicit.stat_21824003",
			text: "#% increased Rarity of Items Dropped by Enemies killed with a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_4164247992",
			text: "You cannot Recharge Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3184053924",
			text: "#% increased Armour while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_262773569",
			text: "Mana Reservation of Herald Skills is always 45%",
			type: "explicit"
		},
		{
			id: "explicit.stat_3354027870",
			text: "Socketed Gems are Supported by Level # Lightning Penetration",
			type: "explicit"
		},
		{
			id: "explicit.stat_4070519133",
			text: "#% Chance to Block Spell Damage while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_607548408",
			text: "#% increased Effect of non-Keystone Passive Skills in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_769192511",
			text: "While your Passive Skill Tree connects to a class' starting location, you gain:\nMarauder: Melee Skills have #% increased Area of Effect\nDuelist: #% of Attack Damage Leeched as Life\nRanger: #% increased Movement Speed\nShadow: #% to Critical Strike Chance\nWitch: #% of Mana Regenerated per second\nTemplar: Damage Penetrates #% Elemental Resistances\nScion: # to All Attributes",
			type: "explicit"
		},
		{
			id: "explicit.stat_2340173293",
			text: "#% increased Item Quantity per White Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_1759630226",
			text: "Cannot Leech Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_3384291300",
			text: "#% increased Damage if you Summoned a Golem in the past 8 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_3686711832",
			text: "Grants Last Breath when you Use a Skill during Flask Effect, for #% of Mana Cost",
			type: "explicit"
		},
		{
			id: "explicit.stat_3924539382",
			text: "Socketed Gems are Supported by Level # Efficacy",
			type: "explicit"
		},
		{
			id: "explicit.stat_4210076836",
			text: "+# to Maximum Life per Red Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3748879662",
			text: "#% chance to cover Enemies in Ash when they Hit you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1528823952",
			text: "# Cold Damage taken per second per Frenzy Charge while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_723388324",
			text: "Trigger Socketed Spells when\nyou Spend at least # Mana to Use a Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_896299992",
			text: "+# to Maximum Mana per Green Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_989800292",
			text: "Regenerate #% of Life per second per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2663376056",
			text: "Gain #% of Maximum Mana as Extra Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_575111651",
			text: "#% chance to Shock Attackers for 4 seconds on Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_1795756125",
			text: "Trigger Level # Abyssal Cry on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_988207959",
			text: "Skills fire an additional Projectile if you've been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1073310669",
			text: "#% increased Evasion Rating if you have been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2155513095",
			text: "Critical Strike Chance is increased by Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_252194507",
			text: "#% increased Cast Speed during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1649883131",
			text: "#% chance to Avoid Elemental Damage from Hits per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2869193493",
			text: "Golems Summoned in the past 8 seconds deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3159161267",
			text: "#% increased Projectile Speed per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1498954300",
			text: "#% increased Quantity of Items found with a Magic Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_1704905020",
			text: "#% increased Damage while on Consecrated Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_1818900806",
			text: "#% Critical Strike Chance per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3271016161",
			text: "Kills grant an additional Vaal Soul if you have Rampaged Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2906522048",
			text: "+# to Maximum Energy Shield per Blue Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3452269808",
			text: "#% chance to avoid Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_2627243269",
			text: "Notable Passive Skills in Radius grant nothing",
			type: "explicit"
		},
		{
			id: "explicit.stat_2870108850",
			text: "Adds # to # Lightning Damage to Hits against Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3433724931",
			text: "Curse Enemies with Level # Temporal Chains on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3400437584",
			text: "#% increased Damage per 1% Chance to Block Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_doryani",
			text: "Bathed in the blood of # sacrificed in the name of Doryani",
			type: "explicit"
		},
		{
			id: "explicit.stat_1454377049",
			text: "#% of Lightning Damage Leeched as Mana during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1194648995",
			text: "Chill Effect and Freeze Duration on you are based on #% of Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_541329769",
			text: "Applies Level 15 Temporal Chains on Blocking a Projectile Attack, ignoring Curse Limit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1115914670",
			text: "# to Evasion Rating per 5 Maximum Energy Shield on Equipped Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3062763405",
			text: "#% Global Critical Strike Multiplier while you have no Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_607839150",
			text: "Nearby Enemies are Hindered, with #% reduced Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_4151190513",
			text: "#% increased Rarity of Items found with a Normal Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3837366401",
			text: "#% additional Physical Damage Reduction from Hits per Siphoning Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2498303876",
			text: "Grants Level # Doryani's Touch Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3848047105",
			text: "Your Physical Damage can Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_3165492062",
			text: "#% increased Vaal Skill Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1328548975",
			text: "#% to Quality of Socketed Support Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1672793731",
			text: "# to Level of Socketed Warcry Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3678841229",
			text: "#% increased Movement Speed on Shocked Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_4157767905",
			text: "#% increased Projectile Attack Damage per 200 Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_413362507",
			text: "While at maximum Frenzy Charges, Attacks Poison Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3451369192",
			text: "Gain Armour equal to your Reserved Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_209387074",
			text: "Enemies you kill are Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_3682009780",
			text: "#% chance to Trigger Level 20 Animate Guardian's Weapon when Animated Guardian Kills an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_526251910",
			text: "Cannot Leech Life from Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_346029096",
			text: "Avatar of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_2629689891",
			text: "# to Monster Level of Area",
			type: "explicit"
		},
		{
			id: "explicit.stat_3298440988",
			text: "#% less Mine Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3865999868",
			text: "#% Chance to Block Attack Damage while on Consecrated Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_2155467472",
			text: "#% chance to be inflicted with Bleeding when Hit by an Attack",
			type: "explicit"
		},
		{
			id: "explicit.stat_3734640451",
			text: "Adds # to # Cold Damage against Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_710105516",
			text: "Regenerate #% of Life per second on Chilled Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_919960234",
			text: "#% chance to Trigger Level 18 Animate Guardian's Weapon when Animated Weapon Kills an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_149574107",
			text: "Adds # to # Cold Damage to Attacks with this Weapon per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2886998024",
			text: "Gems Socketed in Red Sockets have # to Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_1531241759",
			text: "Strength's Damage Bonus instead grants 3% increased Melee\nPhysical Damage per 10 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_3229976559",
			text: "#% increased Mana Reserved per 250 total Attributes",
			type: "explicit"
		},
		{
			id: "explicit.stat_513221334",
			text: "# to Armour per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3922006600",
			text: "Socketed Gems are Supported by Level # Blood Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_2295303426",
			text: "Trigger a Socketed Cold Spell on Melee Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_99487834",
			text: "Your Skills deal you #% of Mana Spent on Skill Mana Costs as Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_706246936",
			text: "#% increased Armour against Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_1934713036",
			text: "Area is inhabited by Solaris fanatics",
			type: "explicit"
		},
		{
			id: "explicit.stat_3566242751",
			text: "Grants Level # Decoy Totem Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3767939384",
			text: "Nearby Allies have #% increased Defences per 100 Strength you have",
			type: "explicit"
		},
		{
			id: "explicit.stat_1271338211",
			text: "Grants Level # Abyssal Cry Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3549040753",
			text: "Your Chaos Damage Poisons Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2208857094",
			text: "#% chance to Poison on Hit against Cursed Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_990219738",
			text: "#% increased Lightning Damage per 10 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3657377047",
			text: "#% chance to Trigger Socketed Curse Skill when you cast a Curse Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3408601861",
			text: "Area is inhabited by Lunaris fanatics",
			type: "explicit"
		},
		{
			id: "explicit.stat_2458962764",
			text: "#% of Maximum Life Converted to Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2466912132",
			text: "#% increased Armour while Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1055188639",
			text: "You gain Onslaught for # seconds on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_4294267596",
			text: "Take no Extra Damage from Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_2035759353",
			text: "Shocks you inflict spread to other Enemies within a Radius of #",
			type: "explicit"
		},
		{
			id: "explicit.stat_3807518091",
			text: "With 4 Notables Allocated in Radius, When you Kill a Rare monster, you gain # of its Modifiers for 20 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_3241494164",
			text: "Trigger Level # Lightning Bolt when you deal a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_67637087",
			text: "#% less Damage taken if you have not been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2006370586",
			text: "Enemies you Attack Reflect # Physical Damage to you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2280313599",
			text: "Deals # Chaos Damage per second to nearby Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1079148723",
			text: "Socketed Gems are supported by Level # Cast when Stunned",
			type: "explicit"
		},
		{
			id: "explicit.stat_1852317988",
			text: "Insufficient Mana doesn't prevent your Melee Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_2628721358",
			text: "#% of Attack Damage Leeched as Mana per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3699490848",
			text: "#% increased Critical Strike Chance against Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2135370196",
			text: "#% increased Maximum Mana per Abyss Jewel affecting you",
			type: "explicit"
		},
		{
			id: "explicit.stat_356456977",
			text: "Socketed Attacks have #% to Critical Strike Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_986397080",
			text: "#% reduced Ignite Duration on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3633399302",
			text: "#% of Fire Damage Leeched as Life while Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_4089413281",
			text: "You gain Phasing for # seconds on using a Vaal Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2630708439",
			text: "#% chance to inflict Cold Exposure on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_4208907162",
			text: "#% increased Lightning Damage with Attack Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3308936917",
			text: "#% chance to Trigger Level 20 Shade Form when you Use a Socketed Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_869436347",
			text: "#% increased Area of Effect for Skills used by Totems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3037553757",
			text: "#% increased Warcry Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_298173317",
			text: "#% increased Impale Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_63111803",
			text: "With 40 total Intelligence and Dexterity in Radius, Elemental Hit and Wild Strike cannot choose Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_2487643588",
			text: "Socketed Gems are Supported by Level # Less Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3185671537",
			text: "#% increased Maximum Life per Abyss Jewel affecting you",
			type: "explicit"
		},
		{
			id: "explicit.stat_759294825",
			text: "Animated Guardian deals #% increased Damage per Animated Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_713266390",
			text: "Armour is increased by Uncapped Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_avarius",
			text: "Carved to glorify # new faithful converted by High Templar Avarius",
			type: "explicit"
		},
		{
			id: "explicit.stat_2227042420",
			text: "Your Physical Damage can Chill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3344568504",
			text: "#% chance to Trigger Level 20 Arcane Wake after Spending a total of 200 Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_576760472",
			text: "Passive Skills in Radius also grant: Traps and Mines deal # to # added Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2737492258",
			text: "Recover #% of Life on Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2518598473",
			text: "Take # Fire Damage when you Ignite an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2199099676",
			text: "Gain an Endurance, Frenzy or Power charge when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3098087057",
			text: "#% increased Damage on Burning Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_289885185",
			text: "Chaos Skills have #% increased Skill Effect Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3630426972",
			text: "Summoned Golems are Aggressive",
			type: "explicit"
		},
		{
			id: "explicit.stat_1345113611",
			text: "Inflict non-Damaging Ailments as though dealing #% more Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1549868759",
			text: "# to Evasion Rating and Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1750735210",
			text: "Golems have #% increased Maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3304801725",
			text: "# Mana gained on Killing a Frozen Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_761505024",
			text: "Adds # to # Fire Attack Damage per Buff on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1510714129",
			text: "Attacks have #% chance to Maim on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3188455409",
			text: "Regenerate #% of Mana per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_2495041954",
			text: "Enemies have #% to Total Physical Damage Reduction against your Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_3734213780",
			text: "#% of Spell Damage Leeched as Energy Shield for each Curse on Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3262369040",
			text: "Consumes a Void Charge to Trigger Level # Void Shot when you fire Arrows",
			type: "explicit"
		},
		{
			id: "explicit.stat_1166487805",
			text: "Gain # Armour per Grand Spectrum",
			type: "explicit"
		},
		{
			id: "explicit.stat_2477735984",
			text: "#% of Lightning Damage is taken from Mana before Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2674336304",
			text: "Nearby Enemies have #% to Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3295031203",
			text: "#% increased Skeleton Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3133579934",
			text: "#% increased Attack and Cast Speed per Summoned Raging Spirit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2659463225",
			text: "Curse Enemies with Level # Poacher's Mark on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3913265126",
			text: "Gain #% of Weapon Physical Damage as Extra Damage of each Element",
			type: "explicit"
		},
		{
			id: "explicit.stat_165218607",
			text: "Hits have #% increased Critical Strike Chance against you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3648858570",
			text: "# to # Cold Damage per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1209237645",
			text: "# Maximum Void Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_3206652215",
			text: "#% chance to be Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_698336758",
			text: "#% increased Attack Damage for each Map Item Modifier affecting the Area",
			type: "explicit"
		},
		{
			id: "explicit.stat_3812562802",
			text: "#% of Damage dealt by your Totems is Leeched to you as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3134790305",
			text: "Enemies you Shock have #% reduced Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3985468650",
			text: "Grants Level # Blood Offering Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1813069390",
			text: "With 40 total Intelligence and Dexterity in Radius, Elemental Hit and Wild Strike deal 50% less Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3712145967",
			text: "Gain a Void Charge every second",
			type: "explicit"
		},
		{
			id: "explicit.stat_547412107",
			text: "#% increased Vaal Skill Effect Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1031644844",
			text: "Grants Level # Enduring Cry Skill",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_venarius",
			text: "Carved to glorify # new faithful converted by High Templar Venarius",
			type: "explicit"
		},
		{
			id: "explicit.stat_2696557965",
			text: "Socketed Gems are Supported by Level # Volley",
			type: "explicit"
		},
		{
			id: "explicit.stat_3263216405",
			text: "Socketed Movement Skills have no Mana Cost",
			type: "explicit"
		},
		{
			id: "explicit.stat_4210011075",
			text: "#% to Chaos Resistance per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1087710344",
			text: "#% Chance for Traps to Trigger an additional time",
			type: "explicit"
		},
		{
			id: "explicit.stat_2105355711",
			text: "With 40 total Dexterity and Strength in Radius, Spectral Shield Throw Chains +# times",
			type: "explicit"
		},
		{
			id: "explicit.stat_1217730254",
			text: "Enemies take #% increased Damage for each type of Ailment you have inflicted on them",
			type: "explicit"
		},
		{
			id: "explicit.stat_2713357573",
			text: "#% additional Physical Damage Reduction while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_4076910393",
			text: "Cannot Block Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_660386148",
			text: "#% of Physical Damage Converted to Lightning during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_584144941",
			text: "Socketed Gems are Supported by Level # Lesser Multiple Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_1633381214",
			text: "#% chance to gain an additional Vaal Soul per Enemy Shattered",
			type: "explicit"
		},
		{
			id: "explicit.stat_1920234902",
			text: "# Fire Damage taken per second per Endurance Charge if you've been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1686913105",
			text: "#% reduced Elemental Damage taken from Hits per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_186383409",
			text: "Golems have #% increased Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1904419785",
			text: "Grants Level # Petrification Statue Skill",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_dominus",
			text: "Carved to glorify # new faithful converted by High Templar Dominus",
			type: "explicit"
		},
		{
			id: "explicit.stat_654971543",
			text: "Trigger a Socketed Lightning Spell on Hit\nSocketed Lightning Spells deal 100% increased Spell Damage if Triggered",
			type: "explicit"
		},
		{
			id: "explicit.stat_1285056331",
			text: "Melee Attacks have #% chance to cause Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_842363566",
			text: "Dexterity and Intelligence from passives in Radius count towards Strength Melee Damage bonus",
			type: "explicit"
		},
		{
			id: "explicit.stat_4095169720",
			text: "Projectile Attack Skills have #% increased Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_894768849",
			text: "With 40 total Dexterity and Strength in Radius, Spectral Shield Throw fires #% more Shard Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_24977021",
			text: "With at least 40 Intelligence in Radius, Fireball Projectiles gain Area as they travel farther, up to #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1974445926",
			text: "Minions have #% chance to Poison Enemies on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_918170065",
			text: "#% Monster Mana Leech Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_4292531291",
			text: "Adds # to # Lightning Damage to Attacks during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4107150355",
			text: "Enemies you Shock have #% reduced Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_505678789",
			text: "Modifiers to Claw Damage also apply to Unarmed Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2264586521",
			text: "Socketed Attacks have # to Total Mana Cost",
			type: "explicit"
		},
		{
			id: "explicit.stat_1524882321",
			text: "Counts as all One Handed Melee Weapon Types",
			type: "explicit"
		},
		{
			id: "explicit.stat_2395088636",
			text: "Throw an additional Mine",
			type: "explicit"
		},
		{
			id: "explicit.stat_2524029637",
			text: "Recover #% of Mana when you Shock an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_328131617",
			text: "Gain a Spirit Charge every second",
			type: "explicit"
		},
		{
			id: "explicit.stat_33065250",
			text: "Melee Attacks have #% chance to Poison on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2592799343",
			text: "Gain # Mana per Grand Spectrum",
			type: "explicit"
		},
		{
			id: "explicit.stat_3651611160",
			text: "#% increased Taunt Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2725259389",
			text: "#% increased Skeleton Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3375208082",
			text: "Socketed Gems are Supported by Level # Endurance Charge on Melee Stun",
			type: "explicit"
		},
		{
			id: "explicit.stat_2212731469",
			text: "#% to Damage over Time Multiplier for Ailments per Elder Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_1901158930",
			text: "Bleeding cannot be inflicted on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1173558568",
			text: "#% of Attack Damage Leeched as Life during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3864993324",
			text: "# Maximum Energy Shield per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_512074347",
			text: "#% to Unarmed Attack Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1994143317",
			text: "Socketed Gems are Supported by Level # Elemental Penetration",
			type: "explicit"
		},
		{
			id: "explicit.stat_983989924",
			text: "#% reduced Elemental Damage taken while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_4108305628",
			text: "Adds # to # Lightning Damage to Spells during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_91242932",
			text: "Animated Minions' Melee Attacks deal Splash Damage to surrounding targets",
			type: "explicit"
		},
		{
			id: "explicit.stat_3801128794",
			text: "#% increased Damage per 15 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3681057026",
			text: "Replenishes Energy Shield by #% of Armour when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_942938211",
			text: "Projectiles Fork",
			type: "explicit"
		},
		{
			id: "explicit.stat_960081730",
			text: "Adds # to # Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2993091567",
			text: "#% increased Mana Regeneration Rate during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4091709362",
			text: "#% of Damage Leeched as Energy Shield against Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2373999301",
			text: "Nearby Allies have #% increased Cast Speed per 100 Intelligence you have",
			type: "explicit"
		},
		{
			id: "explicit.stat_3642528642",
			text: "Affects Passives in Small Ring",
			type: "explicit"
		},
		{
			id: "explicit.stat_162742068",
			text: "+#% Monster Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2813516522",
			text: "#% increased Effect of Buffs granted by Socketed Golem Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_2907156609",
			text: "Poisons you inflict deal Damage #% faster",
			type: "explicit"
		},
		{
			id: "explicit.stat_2878779644",
			text: "Grants Level 20 Summon Bestial # Skill",
			type: "explicit",
			option: {
				options: [
					{
						id: "1",
						text: "Rhoa"
					},
					{
						id: "2",
						text: "Ursa"
					},
					{
						id: "3",
						text: "Snake"
					}
				]
			}
		},
		{
			id: "explicit.stat_3562211447",
			text: "#% chance to gain Unholy Might for 3 seconds on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2106756686",
			text: "#% of Physical Damage Converted to Lightning Damage while affected by Wrath",
			type: "explicit"
		},
		{
			id: "explicit.stat_999511066",
			text: "#% increased Minion Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2776975640",
			text: "Phase Acrobatics",
			type: "explicit"
		},
		{
			id: "explicit.stat_850729424",
			text: "Triggers Level # Lightning Aegis when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_2238471448",
			text: "Minions deal #% increased Damage per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2861397339",
			text: "Golems Deal #% less Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2951564010",
			text: "Modifiers to Claw Attack Speed also apply to Unarmed Attack Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2563691316",
			text: "# Maximum Mana per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_614758785",
			text: "# Fire Damage taken from Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_1114351662",
			text: "# to Maximum Life per 10 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2905429068",
			text: "You have Resolute Technique while you do not have Elemental Overload",
			type: "explicit"
		},
		{
			id: "explicit.stat_3918947537",
			text: "Triggers Level # Cold Aegis when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_956038713",
			text: "Shared Suffering",
			type: "explicit"
		},
		{
			id: "explicit.stat_4164990693",
			text: "Damage Penetrates #% Lightning Resistance during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_959641748",
			text: "Removes #% of Mana Recovered from Life when used",
			type: "explicit"
		},
		{
			id: "explicit.stat_2815652613",
			text: "#% increased Critical Strike Chance while you have Avatar of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_694123963",
			text: "You are Cursed with Level # Vulnerability",
			type: "explicit"
		},
		{
			id: "explicit.stat_2255914633",
			text: "Gain #% of Physical Damage as Extra Lightning Damage while affected by Wrath",
			type: "explicit"
		},
		{
			id: "explicit.stat_3101897388",
			text: "#% increased Maximum Recovery per Life Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2410613176",
			text: "Grants Level # Vitality Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1791875585",
			text: "Gain an Endurance Charge when you lose a Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3511815065",
			text: "Grants Level # Clarity Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2763710567",
			text: "Gain Unholy Might for 2 seconds on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_2062174346",
			text: "#% increased Damage per 15 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2558253923",
			text: "Hits with this Weapon have Culling Strike against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4075957192",
			text: "Poisonous Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3779771090",
			text: "Temporal Chains has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1064778484",
			text: "Arrows that Pierce have #% to Critical Strike Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_1606263610",
			text: "Recover #% of Energy Shield when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3750917270",
			text: "#% of Attack Damage Leeched as Life against Taunted Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2589482056",
			text: "Regenerate # Life per Second while you have Avian's Flight",
			type: "explicit"
		},
		{
			id: "explicit.stat_4050593908",
			text: "Skills used by Traps have #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3537762266",
			text: "Herald of Ice has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_2462976337",
			text: "Socketed Melee Gems have #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_446027070",
			text: "#% chance to Gain Arcane Surge when you deal a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3703926412",
			text: "#% increased Fire Damage with Hits and Ailments against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_520731232",
			text: "Modifiers to Claw Critical Strike Chance also apply to Unarmed Attack Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1220800126",
			text: "Skills which Throw Traps throw up to 1 additional Trap",
			type: "explicit"
		},
		{
			id: "explicit.stat_3281591194",
			text: "Ignites you inflict spread to other Enemies within a Radius of #",
			type: "explicit"
		},
		{
			id: "explicit.stat_1188846263",
			text: "Grants Level # Haste Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1811130680",
			text: "#% increased Mana Recovered",
			type: "explicit"
		},
		{
			id: "explicit.stat_3388448323",
			text: "Socketed Gems are Supported by Level # Greater Spell Echo",
			type: "explicit"
		},
		{
			id: "explicit.stat_38715141",
			text: "Summon Raging Spirit has #% increased Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3375415245",
			text: "#% increased Physical Damage with Hits and Ailments against Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1091613629",
			text: "Gain Shaper's Presence for 10 seconds when you kill a Rare or Unique Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3243062554",
			text: "#% of Attack Damage Leeched as Life per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3769211656",
			text: "#% chance to gain a Frenzy Charge when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_2451774989",
			text: "Hits with this Weapon always Ignite, Freeze, and Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_1220105149",
			text: "You cannot have non-Animated Minions",
			type: "explicit"
		},
		{
			id: "explicit.stat_2442647190",
			text: "Recover #% of Life when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_2687017988",
			text: "#% to Lightning Resistance while affected by Herald of Thunder",
			type: "explicit"
		},
		{
			id: "explicit.stat_2638352064",
			text: "When you Kill an Ignited Enemy, inflict an equivalent Ignite on each nearby Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2007746338",
			text: "Grants Level # Rallying Cry Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3967845372",
			text: "Curse Enemies with Level # Vulnerability on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3259396413",
			text: "#% to maximum Lightning Resistance while affected by Herald of Thunder",
			type: "explicit"
		},
		{
			id: "explicit.stat_3039589351",
			text: "#% Chance to Block Attack Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3049436415",
			text: "Gain Onslaught for # seconds when you Warcry",
			type: "explicit"
		},
		{
			id: "explicit.stat_883169830",
			text: "Projectiles deal #% increased Damage for each Enemy Pierced",
			type: "explicit"
		},
		{
			id: "explicit.stat_346351023",
			text: "Socketed Gems have #% more Attack and Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_478698670",
			text: "Animated Minions' Melee Attacks deal #% less Damage to surrounding targets",
			type: "explicit"
		},
		{
			id: "explicit.stat_3624529132",
			text: "#% of Physical Damage Converted to Fire Damage while affected by Anger",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_asenath",
			text: "Denoted service of # dekhara in the akhara of Asenath",
			type: "explicit"
		},
		{
			id: "explicit.stat_1128763150",
			text: "Triggers Level # Fire Aegis when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3560157887",
			text: "Fortify Buffs you create instead grant 30% more Evasion Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_3332055899",
			text: "#% increased cooldown recovery speed of Movement Skills used while affected by Haste",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_deshret",
			text: "Denoted service of # dekhara in the akhara of Deshret",
			type: "explicit"
		},
		{
			id: "explicit.stat_991194404",
			text: "Regenerate #% of Energy Shield per Second while affected by Discipline",
			type: "explicit"
		},
		{
			id: "explicit.pseudo_timeless_jewel_nasima",
			text: "Denoted service of # dekhara in the akhara of Nasima",
			type: "explicit"
		},
		{
			id: "explicit.stat_3893109186",
			text: "#% of Spell Damage Leeched as Life if Equipped Shield has at least 30% Chance to Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3969608626",
			text: "Flask Effect is not removed at Full Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1710207583",
			text: "#% of Physical Damage from Hits taken as Cold Damage while affected by Purity of Elements",
			type: "explicit"
		},
		{
			id: "explicit.stat_405941409",
			text: "Regenerate # Life per second for each Uncorrupted Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_2319127046",
			text: "+#% Monster Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1430380429",
			text: "+#% Monster Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_769783486",
			text: "Adds # to # Cold Damage to Attacks per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1745952865",
			text: "#% reduced Elemental Ailment Duration on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2629366488",
			text: "Socketed Red Gems get #% Physical Damage as Extra Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_969576725",
			text: "#% chance to Evade Attacks while affected by Grace",
			type: "explicit"
		},
		{
			id: "explicit.stat_3999870307",
			text: "Summoned Raging Spirits have #% increased maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1982144275",
			text: "# Maximum Life per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_2764915899",
			text: "Curse Enemies with Level # Despair on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3127641775",
			text: "Flasks apply to your Raised Zombies and Spectres",
			type: "explicit"
		},
		{
			id: "explicit.stat_3207781478",
			text: "Unaffected by Vulnerability while affected by Determination",
			type: "explicit"
		},
		{
			id: "explicit.stat_1826605755",
			text: "You cannot have non-Golem Minions",
			type: "explicit"
		},
		{
			id: "explicit.stat_3357049845",
			text: "#% increased Critical Strike Chance while affected by Wrath",
			type: "explicit"
		},
		{
			id: "explicit.stat_178057093",
			text: "Socketed Golem Skills have #% chance to Taunt on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_68673913",
			text: "Adds # to # Fire Damage to Attacks per 10 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_4031851097",
			text: "Deal no Non-Elemental Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2576412389",
			text: "#% reduced Golem Size",
			type: "explicit"
		},
		{
			id: "explicit.stat_2732344760",
			text: "Gain a Frenzy Charge on reaching Maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2265307453",
			text: "Grants Level # Wrath Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2970307386",
			text: "Reflects # to # Physical Damage to Melee Attackers",
			type: "explicit"
		},
		{
			id: "explicit.stat_3041288981",
			text: "Recover #% of your maximum Mana when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_1077131949",
			text: "Damage Penetrates #% Lightning Resistance while affected by Wrath",
			type: "explicit"
		},
		{
			id: "explicit.stat_1313498929",
			text: "#% Chance to Block Spell Damage while affected by Discipline",
			type: "explicit"
		},
		{
			id: "explicit.stat_1979658770",
			text: "Socketed Gems are Supported by Level # Fire Penetration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2179619644",
			text: "#% chance to gain a Power Charge if you Knock an Enemy Back with Melee Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1238227257",
			text: "Debuffs on you expire #% faster",
			type: "explicit"
		},
		{
			id: "explicit.stat_2867050084",
			text: "Grants Level # Grace Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1587137379",
			text: "#% of Damage Leeched as Life per Siphoning Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3730242558",
			text: "Golems have #% less Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3580556037",
			text: "Monsters gain # Frenzy Charge every 20 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_1169422227",
			text: "Socketed Gems are Supported by Level # Elemental Focus",
			type: "explicit"
		},
		{
			id: "explicit.stat_4078952782",
			text: "# Armour while you do not have Avatar of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_3716758077",
			text: "#% to maximum Fire Resistance while affected by Herald of Ash",
			type: "explicit"
		},
		{
			id: "explicit.stat_2365917222",
			text: "Unaffected by Enfeeble while affected by Grace",
			type: "explicit"
		},
		{
			id: "explicit.stat_1996775727",
			text: "Recover #% of Energy Shield when you lose a Spirit Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2632954025",
			text: "You have Phasing if Energy Shield Recharge has started Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_650630047",
			text: "Sentinels of Purity deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_561861132",
			text: "Remove Shock when you use a Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_3368671817",
			text: "Adds # to # Physical Damage to Attacks and Spells per Siphoning Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_811582994",
			text: "#% chance to Dodge Attack Hits if you have Blocked Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1567542124",
			text: "Unaffected by Conductivity while affected by Purity of Lightning",
			type: "explicit"
		},
		{
			id: "explicit.stat_679632038",
			text: "#% chance to Dodge Attack Hits while Phasing",
			type: "explicit"
		},
		{
			id: "explicit.stat_3835899275",
			text: "Socketed Gems deal #% more Elemental Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2388362438",
			text: "With a Ghastly Eye Jewel Socketed, Minions have +# to Accuracy Rating",
			type: "explicit"
		},
		{
			id: "explicit.stat_1063920218",
			text: "Summoned Raging Spirits take #% of their Maximum Life per second as Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2663792764",
			text: "You lose all Spirit Charges when taking a Savage Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3296019532",
			text: "Gain #% of Non-Chaos Damage as extra Chaos Damage per Siphoning Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3003321700",
			text: "Flasks do not apply to you",
			type: "explicit"
		},
		{
			id: "explicit.stat_3088183606",
			text: "# to Armour per 5 Evasion Rating on Equipped Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_739274558",
			text: "#% increased Chaos Damage while affected by Herald of Agony",
			type: "explicit"
		},
		{
			id: "explicit.stat_1217959763",
			text: "Area contains additional waves of Raging Spirits",
			type: "explicit"
		},
		{
			id: "explicit.stat_1517357911",
			text: "Grants Level # Summon Doedre's Effigy Skill\nSocketed Curses are Triggered by Doedre's Effigy when Summoned\nSocketed Curses ignore Curse Limit",
			type: "explicit"
		},
		{
			id: "explicit.stat_47271484",
			text: "#% increased Experience Gain for Corrupted Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3450276548",
			text: "Blind Chilled Enemies on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3362665206",
			text: "#% increased Mine Arming Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2440172920",
			text: "Take # Physical Damage per Second per Siphoning Charge if you've used a Skill Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1477032229",
			text: "Damage Penetrates #% Cold Resistance against Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4261620841",
			text: "Area contains additional waves of Oriathan Zombies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2602664175",
			text: "Minions Recover #% of Life on Killing a Poisoned Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3995612171",
			text: "#% increased Arctic Armour Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_536957",
			text: "#% increased Lightning Damage while affected by Herald of Thunder",
			type: "explicit"
		},
		{
			id: "explicit.stat_1997151732",
			text: "Arrows Pierce all Targets after Chaining",
			type: "explicit"
		},
		{
			id: "explicit.stat_1812251528",
			text: "Arrows that Pierce have 50% chance to inflict Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_2429546158",
			text: "Grants Level # Hatred Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3961014595",
			text: "#% increased Spell Damage per 16 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2233726619",
			text: "Arctic Armour has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_2957407601",
			text: "Offering Skills have #% increased Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3036440332",
			text: "Socketed Gems are Supported by Level # Cast when Damage Taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_1959256242",
			text: "You have Onslaught while not on Low Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1779027621",
			text: "#% of Physical Damage from Hits taken as Cold Damage while affected by Purity of Ice",
			type: "explicit"
		},
		{
			id: "explicit.stat_2156210979",
			text: "Gain an Endurance Charge every 4 seconds while Stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_2138799639",
			text: "Arrows Pierce all Targets after Forking",
			type: "explicit"
		},
		{
			id: "explicit.stat_2457540491",
			text: "#% reduced Reflected Physical Damage taken while affected by Determination",
			type: "explicit"
		},
		{
			id: "explicit.stat_2758554648",
			text: "Damage from Enemies Hitting you is Unlucky while you are Cursed with Vulnerability",
			type: "explicit"
		},
		{
			id: "explicit.stat_556659145",
			text: "#% increased Mana Recovery Rate while affected by Clarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2459809121",
			text: "Chill Enemy for # second when Hit, reducing their Action Speed by 30%",
			type: "explicit"
		},
		{
			id: "explicit.stat_1195319608",
			text: "#% increased Energy Shield from Body Armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_1849749435",
			text: "Nearby Enemies have #% to Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1173690938",
			text: "Unaffected by Flammability while affected by Purity of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_4259701244",
			text: "# Life gained for each Enemy Hit while affected by Vitality",
			type: "explicit"
		},
		{
			id: "explicit.stat_2443132097",
			text: "Poisons on you expire #% slower",
			type: "explicit"
		},
		{
			id: "explicit.stat_2591028853",
			text: "Attacks have 25% chance to inflict Bleeding when Hitting Cursed Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1232004574",
			text: "#% chance that if you would gain Power Charges, you instead gain up to\nyour maximum number of Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_4265392510",
			text: "Grants Level # Determination Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1030987123",
			text: "#% to all maximum Resistances while Poisoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_418293304",
			text: "#% increased Lightning Damage while affected by Wrath",
			type: "explicit"
		},
		{
			id: "explicit.stat_1994549323",
			text: "Minions have #% chance to Freeze, Shock and Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_706212417",
			text: "Socketed Golem Skills have #% increased Attack and Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1495376076",
			text: "Regenerate # Mana per Second while you have Avian's Flight",
			type: "explicit"
		},
		{
			id: "explicit.stat_2724985127",
			text: "Area contains additional waves of Zombies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1693676706",
			text: "Gain Onslaught for # seconds when you Cast Socketed Golem Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2481080006",
			text: "Area contains additional waves of Ravager Maws",
			type: "explicit"
		},
		{
			id: "explicit.stat_1011373762",
			text: "Spells fire an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_693460617",
			text: "Socketed Golem Skills have Minions Regenerate #% of Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_1251945210",
			text: "# seconds to Avian's Might Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1266553505",
			text: "Weapons you Animate create an additional copy",
			type: "explicit"
		},
		{
			id: "explicit.stat_1196902248",
			text: "#% increased Damage with Hits against Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_950661692",
			text: "#% to maximum Cold Resistance while affected by Herald of Ice",
			type: "explicit"
		},
		{
			id: "explicit.stat_1902595112",
			text: "Nearby Enemies have #% to Chaos Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_65331133",
			text: "#% reduced Reflected Elemental Damage taken while affected by Purity of Elements",
			type: "explicit"
		},
		{
			id: "explicit.stat_608963131",
			text: "Gain Her Embrace for # seconds when you Ignite an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2116087952",
			text: "Players are Cursed with Projectile Weakness",
			type: "explicit"
		},
		{
			id: "explicit.stat_2933024469",
			text: "Right ring slot: Projectiles from Spells cannot Fork",
			type: "explicit"
		},
		{
			id: "explicit.stat_2442112158",
			text: "While in Her Embrace, take #% of your total Maximum Life and Energy Shield as Fire Damage per second per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_1431238626",
			text: "#% of Physical Damage from Hits with this Weapon is Converted to a random Element",
			type: "explicit"
		},
		{
			id: "explicit.stat_1872128565",
			text: "# to Maximum Siphoning Charges per Elder or Shaper Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_2736829661",
			text: "When you Kill a Rare Monster, #% chance to gain one of its Modifiers for 10 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_3699494172",
			text: "Socketed Gems are Supported by Level # Unbound Ailments",
			type: "explicit"
		},
		{
			id: "explicit.stat_2210267337",
			text: "Area contains additional waves of Bone Rhoas",
			type: "explicit"
		},
		{
			id: "explicit.stat_207573834",
			text: "Gain Unholy Might during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2241902512",
			text: "#% increased Fire Damage per 20 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_613752285",
			text: "Sacrifice #% of Life to gain that much Energy Shield when you Cast a Spell",
			type: "explicit"
		},
		{
			id: "explicit.stat_1798459983",
			text: "#% of Physical Damage from Hits taken as Fire Damage while affected by Purity of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_3743375737",
			text: "#% chance to Avoid Cold Damage from Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_708913352",
			text: "Every 16 seconds you gain Elemental Overload for 8 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_414991155",
			text: "#% less Animate Weapon Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_247168950",
			text: "Minions gain #% of Elemental Damage as Extra Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2977774856",
			text: "Gain a Frenzy Charge on Hit while Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_1365052901",
			text: "#% increased Attack Speed during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3576153145",
			text: "Burning Hoofprints",
			type: "explicit"
		},
		{
			id: "explicit.stat_4089969970",
			text: "If you Consumed a corpse Recently, you and nearby Allies Regenerate #% of Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_2513293614",
			text: "Socketed Gems are Supported by Level # Vicious Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_1506185293",
			text: "Attacks with this Weapon deal Double Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1555918911",
			text: "Right ring slot: Projectiles from Spells Chain +# times",
			type: "explicit"
		},
		{
			id: "explicit.stat_3227159962",
			text: "Regenerate # Life per second if you have at least 1500 Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_74338099",
			text: "Skills fire an additional Projectile",
			type: "explicit"
		},
		{
			id: "explicit.stat_3035514623",
			text: "Spectres have #% increased maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_4204954479",
			text: "Mana Recovery occurs instantly at the end of the Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2200407711",
			text: "Minions have #% to Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3296873305",
			text: "Remove Chill and Freeze when you use a Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_1199118714",
			text: "Socketed Golem Skills gain #% of Maximum Life as Extra Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1244003614",
			text: "Adds # to # Physical Damage against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_430248187",
			text: "#% increased Area of Effect if you have Stunned an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4118945608",
			text: "Gain # Power Charges when you Warcry",
			type: "explicit"
		},
		{
			id: "explicit.stat_768537671",
			text: "#% of Life Leech applies to Enemies as Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1236638414",
			text: "Minions gain #% of Physical Damage as Extra Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_206243615",
			text: "Cannot gain Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_42242677",
			text: "#% chance to Avoid Fire Damage from Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_2072625596",
			text: "#% increased Cast Speed if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3294232483",
			text: "#% increased Physical Damage while affected by Herald of Purity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2434030180",
			text: "Consecrated Ground you create while affected by Zealotry causes enemies to take #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_858460086",
			text: "Socketed Gems are Supported by Level # Meat Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2238174408",
			text: "#% chance to inflict Brittle",
			type: "explicit"
		},
		{
			id: "explicit.stat_2894704558",
			text: "# to Maximum number of Crab Barriers",
			type: "explicit"
		},
		{
			id: "explicit.stat_820827484",
			text: "When you Cast a Spell, Sacrifice all Mana to gain Added Maximum Lightning Damage\nequal to #% of Sacrificed Mana for 4 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_2542650946",
			text: "#% chance to gain an Endurance Charge on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_683273571",
			text: "#% increased Mana Cost of Skills during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_329974315",
			text: "#% increased Cold Damage per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3914021960",
			text: "Nearby Enemies have #% to Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1162425204",
			text: "Remove Ignite and Burning when you use a Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_818329660",
			text: "Trigger Level # Storm Cascade when you Attack",
			type: "explicit"
		},
		{
			id: "explicit.stat_376158712",
			text: "Players are Cursed with Conductivity",
			type: "explicit"
		},
		{
			id: "explicit.stat_311641062",
			text: "#% chance for Flasks you use to not consume Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_3750572810",
			text: "# to Total Mana Cost of Skills for each Corrupted Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3255961830",
			text: "# to Melee Weapon Range if you have Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2137878565",
			text: "#% increased Damage with Hits against Rare monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_3647242059",
			text: "Left ring slot: Projectiles from Spells cannot Chain",
			type: "explicit"
		},
		{
			id: "explicit.stat_2731416566",
			text: "#% increased Maximum total Recovery per second from Energy Shield Leech while affected by Zealotry",
			type: "explicit"
		},
		{
			id: "explicit.stat_3250579936",
			text: "Triggers Level # Abberath's Fury when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_653107703",
			text: "#% Chance to Block Attack Damage while you have at least 10 Crab Barriers",
			type: "explicit"
		},
		{
			id: "explicit.stat_1251731548",
			text: "# seconds to Avian's Flight Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2913235441",
			text: "When you Kill a Rare monster, you gain its Modifiers for # seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_2544408546",
			text: "Aspect of the Avian also grants Avian's Might and Avian's Flight to nearby Allies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2223565123",
			text: "Socketed Gems are Supported by Level # Greater Volley",
			type: "explicit"
		},
		{
			id: "explicit.stat_1973890509",
			text: "#% chance to Trigger Level 20 Animate Weapon on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2721815210",
			text: "Grants Level # Precision Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2437476305",
			text: "Left ring slot: Projectiles from Spells Fork",
			type: "explicit"
		},
		{
			id: "explicit.stat_3627458291",
			text: "#% to Critical Strike Multiplier while affected by Anger",
			type: "explicit"
		},
		{
			id: "explicit.stat_2280488002",
			text: "Stun Threshold is based on #% of your Mana instead of Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3978164317",
			text: "All Attacks with this Weapon are Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_4250009622",
			text: "#% chance to be Poisoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_2517031897",
			text: "#% increased Cold Damage per 1% Cold Resistance above 75%",
			type: "explicit"
		},
		{
			id: "explicit.stat_495095219",
			text: "#% increased Critical Strike Chance for Spells per Raised Spectre",
			type: "explicit"
		},
		{
			id: "explicit.stat_484879947",
			text: "Grants Level # Anger Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3252082366",
			text: "Trigger Level # Summon Phantasm Skill when you Consume a corpse",
			type: "explicit"
		},
		{
			id: "explicit.stat_2170294665",
			text: "Unique Boss drops divination cards",
			type: "explicit"
		},
		{
			id: "explicit.stat_3565956680",
			text: "#% increased Damage with Hits and Ailments against Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3312593243",
			text: "Socketed Gems are Supported by Level # Cast On Melee Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3765507527",
			text: "# Energy Shield gained for each Enemy Hit while affected by Discipline",
			type: "explicit"
		},
		{
			id: "explicit.stat_854225133",
			text: "You have no Life Regeneration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3656959867",
			text: "#% of Damage leeched as Life while affected by Vitality",
			type: "explicit"
		},
		{
			id: "explicit.stat_1970606344",
			text: "#% increased Cold Damage while affected by Herald of Ice",
			type: "explicit"
		},
		{
			id: "explicit.stat_3168149399",
			text: "Adds # to # Lightning Damage to Attacks per 10 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2647344903",
			text: "Unaffected by Chilled Ground while affected by Purity of Ice",
			type: "explicit"
		},
		{
			id: "explicit.stat_4118987751",
			text: "#% increased Maximum total Recovery per second from Life Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2889664727",
			text: "#% chance to Avoid Lightning Damage from Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_996483959",
			text: "#% chance to Maim Enemies on Critical Strike with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1829869055",
			text: "#% chance that if you would gain a Crab Barrier, you instead gain up to\nyour maximum number of Crab Barriers",
			type: "explicit"
		},
		{
			id: "explicit.stat_512740886",
			text: "#% more Elemental Damage taken per Raised Zombie",
			type: "explicit"
		},
		{
			id: "explicit.stat_3992636701",
			text: "#% to Critical Strike Chance while affected by Aspect of the Cat",
			type: "explicit"
		},
		{
			id: "explicit.stat_3153744598",
			text: "With a Hypnotic Eye Jewel Socketed, gain Arcane Surge on Hit with Spells",
			type: "explicit"
		},
		{
			id: "explicit.stat_2025297472",
			text: "#% increased Attack Speed for each Map Item Modifier affecting the Area",
			type: "explicit"
		},
		{
			id: "explicit.stat_990377349",
			text: "Cannot inflict Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_2775776604",
			text: "#% increased Fire Damage while affected by Herald of Ash",
			type: "explicit"
		},
		{
			id: "explicit.stat_1746347097",
			text: "#% increased Aspect of the Avian Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2181129193",
			text: "#% additional Physical Damage Reduction while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_4229711086",
			text: "#% increased Damage with Hits and Ailments per Freeze, Shock and Ignite on Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_855634301",
			text: "Adds # to # Lightning Damage while you have Avian's Might",
			type: "explicit"
		},
		{
			id: "explicit.stat_2485187927",
			text: "Create a Blighted Spore when your Skills or Minions Kill a Rare Monster",
			type: "explicit"
		},
		{
			id: "explicit.stat_3868443508",
			text: "#% increased Damage per Raised Zombie",
			type: "explicit"
		},
		{
			id: "explicit.stat_615884286",
			text: "Reflect Shocks applied to you to all Nearby Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4139135963",
			text: "Curse Enemies with Temporal Chains on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_4245204226",
			text: "Gain #% of Physical Damage as Extra Fire Damage while affected by Anger",
			type: "explicit"
		},
		{
			id: "explicit.stat_3329402420",
			text: "#% increased Movement Speed while affected by Grace",
			type: "explicit"
		},
		{
			id: "explicit.stat_1429385513",
			text: "# Armour per Summoned Totem",
			type: "explicit"
		},
		{
			id: "explicit.stat_3111519953",
			text: "Damage Penetrates #% Fire Resistance while affected by Anger ",
			type: "explicit"
		},
		{
			id: "explicit.stat_80470845",
			text: "#% increased Energy Shield Recovery Rate while affected by Discipline",
			type: "explicit"
		},
		{
			id: "explicit.stat_2753985507",
			text: "#% to Critical Strike Chance while affected by Hatred",
			type: "explicit"
		},
		{
			id: "explicit.stat_1336164384",
			text: "Cannot Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2675641469",
			text: "#% to Fire Resistance while affected by Herald of Ash",
			type: "explicit"
		},
		{
			id: "explicit.stat_2701327257",
			text: "#% reduced Mana Cost of Totem Skills that cast an Aura",
			type: "explicit"
		},
		{
			id: "explicit.stat_2054257693",
			text: "#% chance to inflict Bleeding on Critical Strike with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_3492654051",
			text: "You have Phasing if you have Blocked Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2341269061",
			text: "Grants Level # Discipline Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_241251790",
			text: "Cannot lose Crab Barriers if you have lost Crab Barriers Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4012281889",
			text: "Unaffected by Frostbite while affected by Purity of Ice",
			type: "explicit"
		},
		{
			id: "explicit.stat_4235333770",
			text: "#% increased Duration of Curses on you per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_2383304564",
			text: "#% of Damage taken from Mana before Life while affected by Clarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_4122367945",
			text: "Grants Level # Vengeance Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3692646597",
			text: "#% Chance to Block Attack Damage while affected by Determination",
			type: "explicit"
		},
		{
			id: "explicit.stat_273206351",
			text: "#% chance to gain a Power Charge on hitting an Enemy affected by a Spider's Web",
			type: "explicit"
		},
		{
			id: "explicit.stat_4116409626",
			text: "#% increased Elemental Damage with Attack Skills per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1345136012",
			text: "#% chance to Dodge Spell Hits while affected by Haste",
			type: "explicit"
		},
		{
			id: "explicit.stat_1424006185",
			text: "You gain Onslaught for # seconds on Kill while affected by Haste",
			type: "explicit"
		},
		{
			id: "explicit.stat_948687156",
			text: "Regenerate # Energy Shield per Second per Poison on you, up to 250 per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_622203853",
			text: "Conductivity has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_3808469650",
			text: "#% increased Minion Attack and Cast Speed per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_3846088475",
			text: "Socketed Gems deal #% more Damage over Time",
			type: "explicit"
		},
		{
			id: "explicit.stat_4234677275",
			text: "Hits ignore Enemy Monster Chaos Resistance if all Equipped Items are Shaper Items",
			type: "explicit"
		},
		{
			id: "explicit.stat_2567659895",
			text: "Unaffected by Shocked Ground while affected by Purity of Lightning",
			type: "explicit"
		},
		{
			id: "explicit.stat_68410701",
			text: "You take #% reduced Extra Damage from Critical Strikes while affected by Determination",
			type: "explicit"
		},
		{
			id: "explicit.stat_2328234364",
			text: "Herald of Ash has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1222888897",
			text: "Damage Penetrates #% Cold Resistance while affected by Hatred",
			type: "explicit"
		},
		{
			id: "explicit.stat_33348259",
			text: "Gain #% of Elemental Damage as Extra Chaos Damage per Shaper Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_970844066",
			text: "Channelling Skills deal #% increased Damage per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_2959020308",
			text: "Gain Unholy Might for 4 seconds on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_327253797",
			text: "#% chance when Hit for double Armour effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1016185292",
			text: "#% faster start of Energy Shield Recharge while affected by Discipline",
			type: "explicit"
		},
		{
			id: "explicit.stat_1346311588",
			text: "You have Phasing while affected by Haste",
			type: "explicit"
		},
		{
			id: "explicit.stat_873224517",
			text: "#% of Physical Damage from Hits taken as Lightning Damage while affected by Purity of Elements",
			type: "explicit"
		},
		{
			id: "explicit.stat_2218252147",
			text: "#% chance to Dodge Attack Hits while affected by Grace",
			type: "explicit"
		},
		{
			id: "explicit.stat_1546046884",
			text: "Gain a Flask Charge when you deal a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_2522672898",
			text: "#% of Fire Damage from Hits taken as Cold Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2690790844",
			text: "#% increased Life Recovery Rate while affected by Vitality",
			type: "explicit"
		},
		{
			id: "explicit.stat_1873457881",
			text: "#% additional Physical Damage Reduction while affected by Determination",
			type: "explicit"
		},
		{
			id: "explicit.stat_2585926696",
			text: "#% increased effect of Non-Curse Auras per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_843854434",
			text: "Critical Strikes have #% chance to Blind Enemies while you have Cat's Stealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_1237693206",
			text: "#% less Poison Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3223142064",
			text: "Unaffected by Elemental Weakness while affected by Purity of Elements",
			type: "explicit"
		},
		{
			id: "explicit.stat_2566390555",
			text: "#% increased Totem Damage per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_1722775216",
			text: "#% of Physical Damage from Hits taken as Fire Damage while affected by Purity of Elements",
			type: "explicit"
		},
		{
			id: "explicit.stat_3141831683",
			text: "#% chance to Trigger Level 20 Glimpse of Eternity when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1468606528",
			text: "10% Chance to Trigger Level 18 Summon Spectral Wolf on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_207635700",
			text: "Debuffs on you expire #% faster while affected by Haste",
			type: "explicit"
		},
		{
			id: "explicit.stat_3826125995",
			text: "Projectiles from Spells cannot Pierce",
			type: "explicit"
		},
		{
			id: "explicit.stat_3799299052",
			text: "Chaos Damage does not bypass Energy Shield while not on Low Life or Low Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_3545269928",
			text: "#% increased Effect of Elusive on you per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2572910724",
			text: "Herald of Agony has #% increased Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3573591118",
			text: "Your Cold Damage can Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_4272260340",
			text: "Frostbite has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1138813382",
			text: "#% to Chaos Resistance while affected by Purity of Elements",
			type: "explicit"
		},
		{
			id: "explicit.stat_532324017",
			text: "#% chance to Sap Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3772841281",
			text: "Gain a Flask Charge when you deal a Critical Strike while affected by Precision",
			type: "explicit"
		},
		{
			id: "explicit.stat_3489570622",
			text: "Regenerate # Life per Second while affected by Vitality",
			type: "explicit"
		},
		{
			id: "explicit.stat_2312747856",
			text: "#% of Fire Damage Leeched as Life while affected by Anger",
			type: "explicit"
		},
		{
			id: "explicit.stat_1699077932",
			text: "#% chance to Recover 10% of Mana when you use a Skill while affected by Clarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1869144397",
			text: "Trigger Level # Void Gaze when you use a Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2830135449",
			text: "Minions have +# to Accuracy Rating per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_2308278768",
			text: "Travel Skills have #% increased Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1724614884",
			text: "#% increased Area Damage per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_1798031916",
			text: "Vulnerability has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_2806391472",
			text: "Unaffected by Temporal Chains while affected by Haste",
			type: "explicit"
		},
		{
			id: "explicit.stat_958088871",
			text: "#% of Damage Leeched as Life on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1512695141",
			text: "Immune to Freeze and Chill while Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_2443492284",
			text: "Ignites you inflict deal Damage #% faster",
			type: "explicit"
		},
		{
			id: "explicit.stat_2341811700",
			text: "Damage Penetrates #% of Fire Resistance if you have Blocked Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1103902353",
			text: "Regenerate # Life per second if you have at least 500 Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1073447019",
			text: "# to # Fire Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_654274615",
			text: "Curse Enemies with Flammability on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3523867985",
			text: "#% increased Armour, Evasion and Energy Shield (Local)",
			type: "explicit"
		},
		{
			id: "explicit.stat_3029185248",
			text: "#% more Maximum Physical Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2968301430",
			text: "Gain # Life when you Stun an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3337107517",
			text: "#% increased Fire Damage while affected by Anger",
			type: "explicit"
		},
		{
			id: "explicit.stat_3659983276",
			text: "Notable Passive Skills in Radius are Transformed to\ninstead grant: Minions take #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_455217103",
			text: "You only lose # Crab Barriers when you take Physical Damage from a Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3835551335",
			text: "Cannot be Poisoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_3593797653",
			text: "Socketed Gems are Supported by Level # Ignite Proliferation",
			type: "explicit"
		},
		{
			id: "explicit.stat_281949611",
			text: "Immune to Shock while affected by Purity of Lightning",
			type: "explicit"
		},
		{
			id: "explicit.stat_2831391506",
			text: "Gain #% of Maximum Mana as Extra Maximum Energy Shield while affected by Clarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1354504703",
			text: "#% Chance to Block Attack Damage while you have at least 5 Crab Barriers",
			type: "explicit"
		},
		{
			id: "explicit.stat_3832130495",
			text: "Aspect of the Spider inflicts Spider's Webs and Hinder every # Seconds instead",
			type: "explicit"
		},
		{
			id: "explicit.stat_902747843",
			text: "#% increased Damage per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_254131992",
			text: "#% of Physical Damage from Hits taken as Lightning Damage while affected by Purity of Lightning",
			type: "explicit"
		},
		{
			id: "explicit.stat_2992087211",
			text: "#% chance to Poison per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_143510471",
			text: "#% chance to Avoid Elemental Damage from Hits while Phasing",
			type: "explicit"
		},
		{
			id: "explicit.stat_3485231932",
			text: "Adds # to # Cold Damage while you have Avian's Might",
			type: "explicit"
		},
		{
			id: "explicit.stat_2671550669",
			text: "Enemies you inflict Bleeding on grant #% increased Flask Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_3225265684",
			text: "With # Corrupted Items Equipped: 50% of Chaos Damage does not bypass Energy Shield, and 50% of Physical Damage bypasses Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3954735777",
			text: "#% chance to Poison on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_1711683262",
			text: "Non-critical strikes deal #% Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2589042711",
			text: "Lose # Mana per Second",
			type: "explicit"
		},
		{
			id: "explicit.stat_451866048",
			text: "Shock Enemies as though dealing #% more Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_380220671",
			text: "#% of Damage taken gained as Mana over 4 seconds when Hit while affected by Clarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2803981661",
			text: "#% increased Defences from Equipped Shield per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_1910205563",
			text: "#% to all Elemental Resistances per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_2636728487",
			text: "You always Ignite while Burning",
			type: "explicit"
		},
		{
			id: "explicit.stat_2059771038",
			text: "Attacks always inflict Bleeding while you have Cat's Stealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_2269396414",
			text: "# to Accuracy against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2042813020",
			text: "Regenerate # Mana per Second per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_3152149523",
			text: "Flammability has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_3103189267",
			text: "#% increased Elemental Damage per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_4199402748",
			text: "#% increased Chill Duration on Enemies when in Off Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_730530528",
			text: "#% reduced Elemental Ailment Duration on you per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_1953432004",
			text: "Unaffected by Poison",
			type: "explicit"
		},
		{
			id: "explicit.stat_2355615476",
			text: "#% to Critical Strike Multiplier against Enemies that are on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2733285506",
			text: "Channelling Skills deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_783864527",
			text: "Right ring slot: You cannot Regenerate Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1790172543",
			text: "#% increased Damage with Hits and Ailments against Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4268822436",
			text: "Tormented Spirits drop 1 additional Rare Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_2548097895",
			text: "#% chance to Blind Enemies which Hit you while affected by Grace",
			type: "explicit"
		},
		{
			id: "explicit.stat_371612541",
			text: "Immune to Ignite while affected by Purity of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_3736628755",
			text: "Precision has 50% less Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1316646496",
			text: "Socketed Gems are Supported by Level # Cast While Channelling",
			type: "explicit"
		},
		{
			id: "explicit.stat_4192058279",
			text: "With # Corrupted Items Equipped: Life Leech recovers based on your Chaos Damage instead",
			type: "explicit"
		},
		{
			id: "explicit.stat_982177653",
			text: "Adds # to # Chaos Damage for each Spider's Web on the Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_103928310",
			text: "#% increased Damage with Hits and Ailments against Enemies affected by 3 Spider's Webs",
			type: "explicit"
		},
		{
			id: "explicit.stat_3293275880",
			text: "#% increased Mana Cost of Skills per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_3178542354",
			text: "#% increased Movement Speed if you've Hit an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_426847518",
			text: "Curse Enemies with Level # Frostbite on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1663239249",
			text: "Trigger Level # Bone Offering, Flesh Offering or Spirit Offering every 5 seconds\nOffering Skills Triggered this way also affect you",
			type: "explicit"
		},
		{
			id: "explicit.stat_877233648",
			text: "Cannot be Stunned if you have at least 10 Crab Barriers",
			type: "explicit"
		},
		{
			id: "explicit.stat_2697019412",
			text: "#% increased Damage with Brand Skills per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_3081076859",
			text: "#% increased Global Critical Strike Chance per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_1890969167",
			text: "Players have no Life or Mana Regeneration",
			type: "explicit"
		},
		{
			id: "explicit.stat_362838683",
			text: "#% increased Life Recovery from Flasks while affected by Vitality",
			type: "explicit"
		},
		{
			id: "explicit.stat_3515686789",
			text: "#% increased Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_926444104",
			text: "Passives granting Lightning Resistance or all Elemental Resistances in Radius\nalso grant an equal chance to gain a Power Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_121436064",
			text: "#% of Lightning Damage is Leeched as Energy Shield while affected by Wrath",
			type: "explicit"
		},
		{
			id: "explicit.stat_1810368194",
			text: "#% increased Effect of non-Damaging Ailments on Enemies per 10 Devotion",
			type: "explicit"
		},
		{
			id: "explicit.stat_935623115",
			text: "Adds # to # Lightning Damage if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3308185931",
			text: "Unaffected by Burning Ground while affected by Purity of Fire",
			type: "explicit"
		},
		{
			id: "explicit.stat_1438488526",
			text: "Nearby Allies have #% to Critical Strike Multiplier per 100 Dexterity you have",
			type: "explicit"
		},
		{
			id: "explicit.stat_2602585351",
			text: "Triggers Level # Elemental Aegis when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_4263540840",
			text: "Left ring slot: You cannot Recharge or Regenerate Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1413864591",
			text: "#% increased Cold Damage while affected by Hatred",
			type: "explicit"
		},
		{
			id: "explicit.stat_1444556985",
			text: "#% of Damage taken gained as Life over 4 seconds when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3268519799",
			text: "Transfiguration of Soul",
			type: "explicit"
		},
		{
			id: "explicit.stat_2643562209",
			text: "Adds # to # Cold Damage while affected by Hatred",
			type: "explicit"
		},
		{
			id: "explicit.stat_2162097452",
			text: "# to Level of all Minion Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2048747572",
			text: "#% increased Attack Damage while affected by Precision",
			type: "explicit"
		},
		{
			id: "explicit.stat_3520223758",
			text: "Increases and Reductions to Cast Speed also Apply to Trap Throwing Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2947215268",
			text: "#% increased Damage during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_291644318",
			text: "Spell Skills deal no Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1981749265",
			text: "Your Spells are disabled",
			type: "explicit"
		},
		{
			id: "explicit.stat_2720072724",
			text: "Immune to Freeze while affected by Purity of Ice",
			type: "explicit"
		},
		{
			id: "explicit.stat_785655723",
			text: "Enemies affected by your Spider's Webs have #% to All Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_1330109706",
			text: "Regenerate # Energy Shield per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_664849247",
			text: "#% of Physical Damage Converted to Cold Damage while affected by Hatred",
			type: "explicit"
		},
		{
			id: "explicit.stat_2970902024",
			text: "Enemies you hit are destroyed on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1258679667",
			text: "#% increased Physical Damage while you have Resolute Technique",
			type: "explicit"
		},
		{
			id: "explicit.stat_282757414",
			text: "Socketed Gems are Supported by Level # Pulverise",
			type: "explicit"
		},
		{
			id: "explicit.stat_3205239847",
			text: "#% of Fire Damage from Hits taken as Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3948776386",
			text: "#% increased Damage per 15 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_3729445224",
			text: "Auras from your Skills grant #% increased Damage to you and Allies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4015918489",
			text: "Socketed Gems are Supported by Level # Power Charge On Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1704843611",
			text: "Regenerate # Life per second if you have at least 1000 Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_4006301249",
			text: "Socketed Minion Gems are Supported by Level # Life Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2939409392",
			text: "Minions have #% chance to Blind Enemies on hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3742808908",
			text: "# to Armour while affected by Determination",
			type: "explicit"
		},
		{
			id: "explicit.stat_2554328719",
			text: "#% chance to Trigger Level 20 Tornado when you gain Avian's Might or Avian's Flight",
			type: "explicit"
		},
		{
			id: "explicit.stat_3020069394",
			text: "Found Magic Items drop Identified",
			type: "explicit"
		},
		{
			id: "explicit.stat_242822230",
			text: "Adds #-# Physical Damage to Attacks while you have a Bestial Minion",
			type: "explicit"
		},
		{
			id: "explicit.stat_3360430812",
			text: "Rhoa Feather Lure",
			type: "explicit"
		},
		{
			id: "explicit.stat_4230767876",
			text: "#% increased Damage with Poison per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2636403786",
			text: "Projectiles Pierce all Targets while you have Phasing",
			type: "explicit"
		},
		{
			id: "explicit.stat_3610263531",
			text: "Focus has #% increased Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_4266201818",
			text: "Poison Cursed Enemies on hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2684385509",
			text: "Minions cannot be Blinded",
			type: "explicit"
		},
		{
			id: "explicit.stat_920385757",
			text: "# to maximum number of Summoned Golems if you have 3 Primordial Items Socketed or Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3184880507",
			text: "#% chance to gain Unholy Might on block for 3 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_608438307",
			text: "You can only Socket Corrupted Gems in this item",
			type: "explicit"
		},
		{
			id: "explicit.stat_2249211872",
			text: "#% increased Lightning Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_2762046953",
			text: "Minions have #% Chance to Block Spell Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_52953650",
			text: "Grants Level # Envy Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1827657795",
			text: "#% increased Energy Shield Recharge Rate during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1019038967",
			text: "#% increased Damage per Crab Barrier",
			type: "explicit"
		},
		{
			id: "explicit.stat_383557755",
			text: "Acrobatics",
			type: "explicit"
		},
		{
			id: "explicit.stat_1560880986",
			text: "#% chance for Bleeding inflicted with this Weapon to deal 100% more Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2152491486",
			text: "Adds #-# Chaos Damage to Attacks while you have a Bestial Minion",
			type: "explicit"
		},
		{
			id: "explicit.stat_332854027",
			text: "#% increased Aspect of the Spider Debuff Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3828375170",
			text: "Bleeding you inflict deals Damage #% faster",
			type: "explicit"
		},
		{
			id: "explicit.stat_1464115829",
			text: "If you've Warcried Recently, you and nearby allies have #% increased Attack, Cast and Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1536266147",
			text: "#% chance to gain an Endurance Charge when you Hit a Bleeding Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_415837237",
			text: "Nearby Enemies take #% increased Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_59547568",
			text: "Melee Movement Skills have #% chance to Fortify on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_612223930",
			text: "Cannot inflict Freeze or Chill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3676958605",
			text: "Right ring slot: Regenerate #% of Energy Shield per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3705740723",
			text: "Immune to Burning Ground, Shocked Ground and Chilled Ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_549215295",
			text: "Gain # Energy Shield for each Enemy you Hit which is affected by a Spider's Web",
			type: "explicit"
		},
		{
			id: "explicit.stat_2523146878",
			text: "#% chance for Poisons inflicted with this Weapon to deal 100% more Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3747189159",
			text: "#% increased Damage with Hits and Ailments against Chilled Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1678831767",
			text: "Recover # Life when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_1715495976",
			text: "#% less Minimum Physical Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_304032021",
			text: "#% more Damage with Arrow Hits at Close Range while you have Iron Reflexes",
			type: "explicit"
		},
		{
			id: "explicit.stat_1753916791",
			text: "Projectiles from Attacks have #% chance to Maim on Hit while\nyou have a Bestial Minion",
			type: "explicit"
		},
		{
			id: "explicit.stat_3802667447",
			text: "#% increased Quantity of Fish Caught",
			type: "explicit"
		},
		{
			id: "explicit.stat_3151397056",
			text: "#% increased Onslaught Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_251446805",
			text: "Socketed Gems are Supported by Level # Iron Grip",
			type: "explicit"
		},
		{
			id: "explicit.stat_2213584313",
			text: "#% chance to Curse Enemies with Level 10 Vulnerability on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1509532587",
			text: "Aspect of the Spider can inflict Spider's Web on Enemies an additional time",
			type: "explicit"
		},
		{
			id: "explicit.stat_3892608176",
			text: "Trigger Level # Intimidating Cry when you lose Cat's Stealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_2089652545",
			text: "#% chance to Intimidate Enemies for 4 seconds on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_387596329",
			text: "# seconds to Cat's Stealth Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2445618239",
			text: "# to Total Mana Cost of Skills while affected by Clarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_509677462",
			text: "Passives granting Cold Resistance or all Elemental Resistances in Radius\nalso grant an equal chance to gain a Frenzy Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1834455446",
			text: "You have Phasing while you have Cat's Stealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_2028847114",
			text: "Curse Enemies with Level # Elemental Weakness on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3476327198",
			text: "#% increased Attack, Cast and Movement Speed while you do not have Iron Reflexes",
			type: "explicit"
		},
		{
			id: "explicit.stat_2562564343",
			text: "Despair has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1138742368",
			text: "Increases and Reductions to Light Radius also apply to Area of Effect at #% of their value",
			type: "explicit"
		},
		{
			id: "explicit.stat_2154349925",
			text: "Herald of Ash has #% increased Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2916634441",
			text: "#% increased Maximum total Recovery per second from Life Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2446580062",
			text: "Gain up to your maximum number of Frenzy and Power Charges when you gain Cat's Stealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_117667746",
			text: "#% increased Mine Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_4058504226",
			text: "Projectiles from Attacks have #% chance to inflict Bleeding on Hit while\nyou have a Bestial Minion",
			type: "explicit"
		},
		{
			id: "explicit.stat_3788235244",
			text: "Area has a #% chance to contain Cadiro Perandus",
			type: "explicit"
		},
		{
			id: "explicit.stat_2444534954",
			text: "#% increased Cast Speed while affected by Zealotry",
			type: "explicit"
		},
		{
			id: "explicit.stat_214835567",
			text: "#% increased Critical Strike Chance against Enemies on Consecrated Ground while affected by Zealotry",
			type: "explicit"
		},
		{
			id: "explicit.stat_3850409117",
			text: "Aspect of the Cat Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1658498488",
			text: "Corrupted Blood cannot be inflicted on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_1345659139",
			text: "#% increased Critical Strike Chance against Poisoned Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3422445312",
			text: "Monsters from Beyond have #% more Quantity and Rarity of Dropped Items",
			type: "explicit"
		},
		{
			id: "explicit.stat_2634885412",
			text: "Trigger Level # Bone Nova when you Kill a Bleeding Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2551779822",
			text: "# Armour while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_2434330144",
			text: "Grants Level # Reckoning Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1999711879",
			text: "# to Minimum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_3231424461",
			text: "Enemies affected by your Spider's Webs deal #% reduced Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1626712767",
			text: "#% to Critical Strike Multiplier if you've dealt a Non-Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3998191356",
			text: "Non-Chilled Enemies you Poison are Chilled",
			type: "explicit"
		},
		{
			id: "explicit.stat_606940191",
			text: "#% chance to Scorch Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2964800094",
			text: "Socketed Skills deal #% more Spell Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2611023406",
			text: "#% increased Area of Effect per 50 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_3844016207",
			text: "#% chance to Trigger Level 1 Raise Spiders on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2736708072",
			text: "#% to Damage over Time Multiplier while affected by Malevolence",
			type: "explicit"
		},
		{
			id: "explicit.stat_762154651",
			text: "#% chance for Energy Shield Recharge to start when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_3321235265",
			text: "Grants Level # Gluttony of Elements Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2841027131",
			text: "Regenerate # Life per second while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_1114411822",
			text: "Projectiles from Attacks have #% chance to Poison on Hit while\nyou have a Bestial Minion",
			type: "explicit"
		},
		{
			id: "explicit.stat_2494069187",
			text: "#% to Cold Resistance while affected by Herald of Ice",
			type: "explicit"
		},
		{
			id: "explicit.stat_1497601437",
			text: "Left ring slot: # to maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3241234878",
			text: "Left ring slot: Regenerate # Mana per Second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3274973940",
			text: "Socketed Gems are Supported by Level # Blessing",
			type: "explicit"
		},
		{
			id: "explicit.stat_673704994",
			text: "#% increased Movement Speed while you have Cat's Stealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_1064477264",
			text: "#% increased Damage if you've Frozen an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1645524575",
			text: "Passives granting Fire Resistance or all Elemental Resistances in Radius\nalso grant an equal chance to gain an Endurance Charge on Kill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2287264161",
			text: "Socketed Gems are Supported by Level # Arcane Surge",
			type: "explicit"
		},
		{
			id: "explicit.stat_550012797",
			text: "Area contains # additional Animated Weapon Packs",
			type: "explicit"
		},
		{
			id: "explicit.stat_2091518682",
			text: "Critical Strikes Penetrate #% of Enemy Elemental Resistances while affected by Zealotry",
			type: "explicit"
		},
		{
			id: "explicit.stat_1401233515",
			text: "Talismans found in this Area are Rare",
			type: "explicit"
		},
		{
			id: "explicit.stat_2889601846",
			text: "#% of Lightning Damage is Leeched as Mana while affected by Wrath",
			type: "explicit"
		},
		{
			id: "explicit.stat_1896269067",
			text: "Deal no Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3686780108",
			text: "#% increased Aspect of the Spider Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3597737983",
			text: "#% increased Attack and Movement Speed while you have a Bestial Minion",
			type: "explicit"
		},
		{
			id: "explicit.stat_956384511",
			text: "#% to Critical Strike Multiplier per 1% Chance to Block Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2935409762",
			text: "Trigger Level # Rain of Arrows when you Attack with a Bow",
			type: "explicit"
		},
		{
			id: "explicit.stat_3560379096",
			text: "Area is inhabited by Redblade Warbands",
			type: "explicit"
		},
		{
			id: "explicit.stat_2384145996",
			text: "Chill nearby Enemies when you Focus, causing 30% reduced Action Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1820083363",
			text: "Manifest Dancing Dervish also manifests a copy of Dancing Dervish",
			type: "explicit"
		},
		{
			id: "explicit.stat_3602667353",
			text: "#% chance to inflict Fire Exposure on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_798853218",
			text: "You cannot be Shocked while Frozen",
			type: "explicit"
		},
		{
			id: "explicit.stat_1649099067",
			text: "# Life gained for each Blinded Enemy Hit by this Weapon",
			type: "explicit"
		},
		{
			id: "explicit.stat_2810286377",
			text: "Area contains an additional pack with a Rare monster",
			type: "explicit"
		},
		{
			id: "explicit.stat_3245481061",
			text: "Critical Strikes deal no Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_467806158",
			text: "#% increased Spell Damage if you've dealt a Critical Strike in the past 8 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_358040686",
			text: "#% chance to create Chilled Ground when Hit with an Attack",
			type: "explicit"
		},
		{
			id: "explicit.stat_150668988",
			text: "# to Level of Socketed Trap or Mine Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_97064873",
			text: "#% chance to Freeze, Shock and Ignite during Flask effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_737702863",
			text: "Grants all bonuses of Unallocated Small Passive Skills in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_1912660783",
			text: "#% slower start of Energy Shield Recharge during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1773891268",
			text: "Enemies have #% reduced Evasion if you have Hit them Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_325204898",
			text: "Allocated Small Passive Skills in Radius grant nothing",
			type: "explicit"
		},
		{
			id: "explicit.stat_3284029342",
			text: "You have Far Shot while you do not have Iron Reflexes",
			type: "explicit"
		},
		{
			id: "explicit.stat_1802660259",
			text: "You are Chilled when you are Poisoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_3456816469",
			text: "#% to Chaos Resistance while affected by Herald of Agony",
			type: "explicit"
		},
		{
			id: "explicit.stat_3461563650",
			text: "When used in the Synthesiser, the new item will have an additional Herald Modifier",
			type: "explicit"
		},
		{
			id: "explicit.stat_3492797685",
			text: "You have Crimson Dance while you have Cat's Stealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_2200114771",
			text: "Every 16 seconds you gain Iron Reflexes for 8 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_4253105373",
			text: "Herald of Agony has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_690707482",
			text: "#% increased Damage with Ailments",
			type: "explicit"
		},
		{
			id: "explicit.stat_1263384098",
			text: "Traps from Socketed Skills create a Smoke Cloud when triggered",
			type: "explicit"
		},
		{
			id: "explicit.stat_2126027382",
			text: "Herald of Purity has #% increased Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2424717327",
			text: "Fire Skills have #% chance to Poison on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2163419452",
			text: "Effects of Consecrated Ground you create while affected by Zealotry Linger for # seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_3827349913",
			text: "#% increased Global Armour while you have no Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1919069577",
			text: "Gain Arcane Surge for 4 seconds when you create Consecrated Ground while affected by Zealotry",
			type: "explicit"
		},
		{
			id: "explicit.stat_158779585",
			text: "#% increased Effect of Fortify on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2723101291",
			text: "Adds # to # Physical Damage if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2614654450",
			text: "#% increased Global Physical Damage while Frozen",
			type: "explicit"
		},
		{
			id: "explicit.stat_1153966848",
			text: "Map has # additional random Suffix",
			type: "explicit"
		},
		{
			id: "explicit.stat_417509375",
			text: "Right ring slot: # to maximum Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_4198497576",
			text: "Cannot inflict Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_3527458221",
			text: "#% to Critical Strike Multiplier if you have Blocked Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3519807287",
			text: "Increases and Reductions to Light Radius also apply to Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2228913626",
			text: "Skills used by Mines have #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4173751044",
			text: "#% chance to Impale Enemies on Hit with Attacks while using Pride",
			type: "explicit"
		},
		{
			id: "explicit.stat_1827636152",
			text: "Your Minions use your Flasks when summoned",
			type: "explicit"
		},
		{
			id: "explicit.stat_2373079502",
			text: "Cold Skills have #% chance to Poison on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3936926420",
			text: "Removes Bleeding when you use a Warcry",
			type: "explicit"
		},
		{
			id: "explicit.stat_1080855680",
			text: "Rogue Exiles deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3308030688",
			text: "#% increased Mana Regeneration Rate while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_824024007",
			text: "Your Critical Strike Multiplier is 300%",
			type: "explicit"
		},
		{
			id: "explicit.stat_751847284",
			text: "Warbands have #% more Rarity of Items Dropped",
			type: "explicit"
		},
		{
			id: "explicit.stat_678245679",
			text: "#% reduced Soul Cost of Vaal Skills",
			type: "explicit"
		},
		{
			id: "explicit.stat_121093551",
			text: "Warbands have #% more Quantity of Items Dropped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3100457893",
			text: "Gain Immunity to Physical Damage for # second on Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_399295164",
			text: "Rogue Exiles have #% increased Attack, Cast and Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1817023621",
			text: "#% to Critical Strike Multiplier while affected by Precision",
			type: "explicit"
		},
		{
			id: "explicit.stat_3322709337",
			text: "Your Hits inflict Decay, dealing 500 Chaos Damage per second for 8 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_2008953542",
			text: "Rogue Exiles have #% more Rarity of Items Dropped",
			type: "explicit"
		},
		{
			id: "explicit.stat_2057712935",
			text: "Modifiers to number of Projectiles instead apply\nto the number of targets Projectiles Split towards",
			type: "explicit"
		},
		{
			id: "explicit.stat_1917107159",
			text: "# to # Lightning Damage per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2202639361",
			text: "Attacks with this Weapon deal # to # added Physical Damage to Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_4096052153",
			text: "Zealotry has #% increased Aura Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3148418088",
			text: "Attacks with this Weapon have #% chance to inflict Bleeding against Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2453554491",
			text: "Attacks with this Weapon deal # to # added Fire Damage to Bleeding Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1657549833",
			text: "#% chance to gain an Endurance Charge when you Taunt an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3468843137",
			text: "Damaging Ailments you inflict deal Damage #% faster while affected by Malevolence",
			type: "explicit"
		},
		{
			id: "explicit.stat_1680060098",
			text: "#% increased Fire Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3970432307",
			text: "Grants Level # Purity of Fire Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_627889781",
			text: "Removes Elemental Ailments on Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3706959521",
			text: "# to Minimum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1064067689",
			text: "# Mana gained on Kill per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_294153754",
			text: "# Energy Shield gained on Kill per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_3941376120",
			text: "Players have a #% chance when they Kill a Rare Monster to gain 1 of its Modifiers for 20 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_3392890360",
			text: "Damage Penetrates #% Elemental Resistances during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_548721233",
			text: "Minions Leech #% of Damage as Life against Poisoned Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2108380422",
			text: "Life Leech effects are not removed at Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1917124426",
			text: "Your Cold Damage can Poison",
			type: "explicit"
		},
		{
			id: "explicit.stat_2415497478",
			text: "#% chance to Avoid Physical Damage from Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_578121324",
			text: "#% increased Critical Strike Chance while you have at least 200 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_122450405",
			text: "#% increased Attack Speed while you have Fortify",
			type: "explicit"
		},
		{
			id: "explicit.stat_581013336",
			text: "Area contains an additional Magic Monster pack",
			type: "explicit"
		},
		{
			id: "explicit.stat_3822878124",
			text: "Grants Level # Purity of Lightning Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3089506271",
			text: "Strongboxes each contain an additional random Rare Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_34059570",
			text: "Unaffected by Poison while affected by Malevolence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3775574601",
			text: "#% increased Critical Strike Chance for Spells per 100 Player Maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1101403182",
			text: "#% reduced Damage taken from Damage Over Time",
			type: "explicit"
		},
		{
			id: "explicit.stat_3481736410",
			text: "#% increased Area of Effect if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1335713735",
			text: "Monsters Imprisoned around Essences in Area are Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_3806100539",
			text: "# to Maximum Life per 10 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_786460697",
			text: "Agony Crawler deals #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1161337167",
			text: "Can be modified while Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_2622251413",
			text: "#% chance to double Stun Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1871938116",
			text: "You have Onslaught while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1862926389",
			text: "Herald of Ice has #% increased Buff Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1985969957",
			text: "Your Fire Damage can Poison",
			type: "explicit"
		},
		{
			id: "explicit.stat_755922799",
			text: "Minions have #% chance to deal Double Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1681904129",
			text: "Socketed Gems have +3.5% Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3679287686",
			text: "Monsters with Silver Coins drop an additional Silver Coin",
			type: "explicit"
		},
		{
			id: "explicit.stat_658456881",
			text: "# to Minimum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1604984482",
			text: "Your Lightning Damage can Poison",
			type: "explicit"
		},
		{
			id: "explicit.stat_3371719014",
			text: "#% chance to deal Double Damage while using Pride",
			type: "explicit"
		},
		{
			id: "explicit.stat_3772848194",
			text: "Your Hits Intimidate Enemies for 4 seconds while you are using Pride",
			type: "explicit"
		},
		{
			id: "explicit.stat_4228691877",
			text: "# Life gained on Kill per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_2094646950",
			text: "#% increased Elemental Damage per Level",
			type: "explicit"
		},
		{
			id: "explicit.stat_763611529",
			text: "#% chance to Unnerve Enemies for 4 seconds on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2448279015",
			text: "#% increased Area of Effect per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1819739544",
			text: "Monsters initially carrying a Talisman drop an additional Rare Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_4104891138",
			text: "Unaffected by Bleeding while affected by Malevolence",
			type: "explicit"
		},
		{
			id: "explicit.stat_1653848515",
			text: "Cannot be Blinded while affected by Precision",
			type: "explicit"
		},
		{
			id: "explicit.stat_1032751668",
			text: "You have Vaal Pact if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3643449791",
			text: "#% increased Recovery rate of Life and Energy Shield while affected by Malevolence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3195625581",
			text: "Creates Consecrated Ground on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3242537102",
			text: "You have Vaal Pact while all Socketed Gems are Red",
			type: "explicit"
		},
		{
			id: "explicit.stat_1866211373",
			text: "Consecrated Ground created during Effect applies #% increased Damage taken to Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1135194732",
			text: "Can have a second Enchantment Modifier",
			type: "explicit"
		},
		{
			id: "explicit.stat_1061545609",
			text: "Players have #% increased Attack, Cast and Movement Speed while they have Onslaught",
			type: "explicit"
		},
		{
			id: "explicit.stat_576528026",
			text: "#% increased Attack Physical Damage while using Pride",
			type: "explicit"
		},
		{
			id: "explicit.stat_3861913659",
			text: "#% of Damage Leeched as Life against Cursed Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_200113086",
			text: "Nova Spells have #% more Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_949718413",
			text: "Lightning Skills have #% chance to Poison on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2304300603",
			text: "You count as on Low Life while you are Cursed with Vulnerability",
			type: "explicit"
		},
		{
			id: "explicit.stat_3128318472",
			text: "You can only deal Damage with this Weapon and Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_4194900521",
			text: "#% increased Damage with Hits against Shocked Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1822142649",
			text: "#% increased Projectile Attack Damage while you have at least 200 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3629143471",
			text: "Damage from Enemies Hitting you is Unlucky while you are on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_4007740198",
			text: "Your Shocks can increase Damage taken by up to a maximum of #%",
			type: "explicit"
		},
		{
			id: "explicit.stat_4077883829",
			text: "A Monster in this Area will summon a Unique Monster from Beyond when Slain",
			type: "explicit"
		},
		{
			id: "explicit.stat_2013799819",
			text: "#% increased Maximum total Recovery per second from Energy Shield Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_180240697",
			text: "Minions have #% reduced Flask Charges used",
			type: "explicit"
		},
		{
			id: "explicit.stat_2016708976",
			text: "#% to Quality",
			type: "explicit"
		},
		{
			id: "explicit.stat_1984366275",
			text: "Invasion Bosses have #% more Quantity and Rarity of dropped Items",
			type: "explicit"
		},
		{
			id: "explicit.stat_2519848087",
			text: "#% additional Physical Damage Reduction per 10 Strength on Allocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_1043982313",
			text: "Gain 1 Rage on Critical Hit with attacks, no more than once every # seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_3163114700",
			text: "#% additional Physical Damage Reduction while affected by Herald of Purity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3051860083",
			text: "Monsters have #% increased chance to spawn a Beyond Portal",
			type: "explicit"
		},
		{
			id: "explicit.stat_3738127245",
			text: "Monsters guarding Shrines are Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_966400988",
			text: "Herald of Thunder has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1730304831",
			text: "Herald of Purity has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_4212372504",
			text: "Unaffected by Temporal Chains",
			type: "explicit"
		},
		{
			id: "explicit.stat_2955966707",
			text: "The Effect of Chill on you is reversed",
			type: "explicit"
		},
		{
			id: "explicit.stat_931560398",
			text: "Glows while in an Area containing a Unique Fish",
			type: "explicit"
		},
		{
			id: "explicit.stat_3951269079",
			text: "Your Raised Zombies count as corpses",
			type: "explicit"
		},
		{
			id: "explicit.stat_927817294",
			text: "Raised Zombies have #% increased maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1748657990",
			text: "Damage Penetrates #% Fire Resistance against Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_1535051459",
			text: "#% to Critical Strike Chance against Enemies on Consecrated Ground during Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3491815140",
			text: "#% increased Spell Damage per 100 Player Maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3251948367",
			text: "#% chance to Trigger Commandment of Inferno on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3303114033",
			text: "#% reduced Cold Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_1301765461",
			text: "#% to maximum Chaos Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_531937370",
			text: "Unique Monsters from Beyond have a #% chance to Summon\nanother Unique Monster from Beyond when Slain",
			type: "explicit"
		},
		{
			id: "explicit.stat_1654414582",
			text: "You cannot be Cursed with Silence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3005800306",
			text: "Area contains a Stone Circle",
			type: "explicit"
		},
		{
			id: "explicit.stat_679682964",
			text: "Imprisoned Monsters have an additional Essence",
			type: "explicit"
		},
		{
			id: "explicit.stat_2800333900",
			text: "Talismans found in this Area are 1 Tier higher",
			type: "explicit"
		},
		{
			id: "explicit.stat_979288792",
			text: "Enemies inflict Elemental Ailments on you instead of nearby Allies",
			type: "explicit"
		},
		{
			id: "explicit.stat_985999215",
			text: "Adds # to # Lightning Damage to Spells while no Life is Reserved",
			type: "explicit"
		},
		{
			id: "explicit.stat_3470457445",
			text: "Chaos Damage can Ignite, Chill and Shock",
			type: "explicit"
		},
		{
			id: "explicit.stat_2071120096",
			text: "Your Offerings have #% increased Effect on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2854183975",
			text: "Socketed Gems are Supported by Level # Cluster Trap",
			type: "explicit"
		},
		{
			id: "explicit.stat_2978408106",
			text: "Area contains a Voidspawn of Abaxoth Bloodline Pack",
			type: "explicit"
		},
		{
			id: "explicit.stat_1726444796",
			text: "#% chance to Curse non-Cursed Enemies with a random Curse on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3209835461",
			text: "Invasion Bosses are guarded by a Magic Pack",
			type: "explicit"
		},
		{
			id: "explicit.stat_3097206473",
			text: "Rare Breach Monsters drop an additional Splinter",
			type: "explicit"
		},
		{
			id: "explicit.stat_806698863",
			text: "Consecrated Ground created by this Flask has Tripled Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_161058250",
			text: "Gain Soul Eater for # seconds when you use a Vaal Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1210760818",
			text: "Breaches have #% increased Monster density",
			type: "explicit"
		},
		{
			id: "explicit.stat_411986876",
			text: "Increases and Reductions to Light Radius also apply to Accuracy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3547189490",
			text: "Nearby Enemies grant #% increased Flask Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1406039617",
			text: "#% increased Rampage Streak Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_4157714333",
			text: "Rare Monsters from Breaches have a #% chance to Drop a Breach Ring",
			type: "explicit"
		},
		{
			id: "explicit.stat_545408899",
			text: "Sacrifice #% of your Life when you Use or Trigger a Spell Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2896192589",
			text: "#% chance to gain Elusive on Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_3945685369",
			text: "Your Movement Speed is #% of its base value",
			type: "explicit"
		},
		{
			id: "explicit.stat_4252311791",
			text: "#% increased Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3931143552",
			text: "Passives granting Fire Resistance or all Elemental Resistances in Radius\nalso grant Chance to Block Attack Damage at #% of its value",
			type: "explicit"
		},
		{
			id: "explicit.stat_3045094957",
			text: "Players with at least 50 Rampage Kills take #% reduced Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_952897668",
			text: "Regenerate # Life per second while Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_3945147290",
			text: "#% chance to gain a Power Charge when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_1037449707",
			text: "Strongboxes are Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_663610248",
			text: "Tormented Spirits have #% increased Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_3462132936",
			text: "When you Kill a Shocked Enemy, inflict an equivalent Shock on each nearby Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_2367560235",
			text: "#% chance to Dodge Attack and Spell Hits per 500 Maximum Mana, up to 20%",
			type: "explicit"
		},
		{
			id: "explicit.stat_1483753325",
			text: "#% increased Attack and Cast Speed if you've Hit an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3232695173",
			text: "You and Nearby Allies have # to # added Chaos Damage per White Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3977907993",
			text: "Adds # to # Fire Damage to Hits with this Weapon against Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_90597215",
			text: "Your Hits can't be Evaded by Blinded Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2962051214",
			text: "An additional Currency Item drops when the first Invasion Boss is slain",
			type: "explicit"
		},
		{
			id: "explicit.stat_3757930834",
			text: "Monsters have #% chance to Avoid being Shocked",
			type: "explicit"
		},
		{
			id: "explicit.stat_4072582319",
			text: "Warbands in this Area have an additional Member",
			type: "explicit"
		},
		{
			id: "explicit.stat_2299389484",
			text: "Area contains an additional Perandus Coffer",
			type: "explicit"
		},
		{
			id: "explicit.stat_1722463112",
			text: "Nearby Allies have #% increased Item Rarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1970781345",
			text: "Socketed Skills deal #% more Attack Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1939452467",
			text: "#% of Cold Damage Leeched as Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3279574030",
			text: "Grants Level # Illusory Warp Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1302700515",
			text: "Attack Skills gain #% of Physical Damage as Extra Fire Damage per Socketed Red Gem",
			type: "explicit"
		},
		{
			id: "explicit.stat_3095345438",
			text: "Hits with this Weapon deal #% increased Damage to Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3387914367",
			text: "Area contains a Bearers of the Guardian Bloodline Pack",
			type: "explicit"
		},
		{
			id: "explicit.stat_1549898151",
			text: "Grace has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1532770406",
			text: "Perandus Chests have #% more Quantity of Items Dropped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3535403838",
			text: "Perandus Chests have #% more Rarity of Items Dropped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3045897926",
			text: "Players take #% reduced Damage from Monsters from Beyond",
			type: "explicit"
		},
		{
			id: "explicit.stat_2576546039",
			text: "Players have Onslaught while using Flasks",
			type: "explicit"
		},
		{
			id: "explicit.stat_4193390599",
			text: "Grants Level # Purity of Ice Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1560540713",
			text: "Nearby Allies have Culling Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_1623397857",
			text: "You take Chaos Damage instead of Physical Damage from Bleeding",
			type: "explicit"
		},
		{
			id: "explicit.stat_897996059",
			text: "Adds # to # Cold Damage to Spells while no Life is Reserved",
			type: "explicit"
		},
		{
			id: "explicit.stat_833719670",
			text: "Adds # to # Fire Damage to Spells while no Life is Reserved",
			type: "explicit"
		},
		{
			id: "explicit.stat_2936435999",
			text: "Lose #% of Mana per Second",
			type: "explicit"
		},
		{
			id: "explicit.stat_196313911",
			text: "Hits with this Weapon deal #% increased Damage to Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2668070396",
			text: "Trigger Level # Shock Ground when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1470894892",
			text: "Hits with this Weapon deal #% increased Damage to Shocked Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3563824294",
			text: "Players have a #% chance to gain Onslaught on Kill For 4 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_124131830",
			text: "# to Level of all Spell Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1011863394",
			text: "Impales you inflict last # additional Hits while using Pride",
			type: "explicit"
		},
		{
			id: "explicit.stat_3389184522",
			text: "Life and Mana Leech from Critical Strikes are instant",
			type: "explicit"
		},
		{
			id: "explicit.stat_86122490",
			text: "Players have Blood Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_1282689888",
			text: "Players have #% chance to Dodge Spell Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_600723636",
			text: "Rogue Exiles drop # additional Currency Items",
			type: "explicit"
		},
		{
			id: "explicit.stat_2653164718",
			text: "Rogue Exiles each have a Rogue Exile ally",
			type: "explicit"
		},
		{
			id: "explicit.stat_3310914132",
			text: "#% increased Rarity of Fish Caught",
			type: "explicit"
		},
		{
			id: "explicit.stat_1853636813",
			text: "Non-Channelling Skills have # to Total Mana Cost while affected by Clarity",
			type: "explicit"
		},
		{
			id: "explicit.stat_1575519214",
			text: "Gain Accuracy Rating equal to your Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_250961191",
			text: "Pride has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1416455556",
			text: "Players have #% increased Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2521269624",
			text: "Minions have #% chance to Dodge Spell Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_2930706364",
			text: "Permanently Intimidate Enemies on Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_4169430079",
			text: "#% increased Maximum Life for each Corrupted Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_2130441002",
			text: "Area contains an Uul-Netol Breach",
			type: "explicit"
		},
		{
			id: "explicit.stat_3362879252",
			text: "Notable Passive Skills in Radius are Transformed to\ninstead grant: Minions have #% increased Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_4143730600",
			text: "Rogue Exiles drop an additional Jewel",
			type: "explicit"
		},
		{
			id: "explicit.stat_407139870",
			text: "# to Level of Socketed Trap Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3169825297",
			text: "Nearby Enemies have #% reduced Stun and Block Recovery",
			type: "explicit"
		},
		{
			id: "explicit.stat_4249521944",
			text: "#% increased Spell Damage per 16 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_2056575682",
			text: "# to maximum number of Summoned Holy Relics",
			type: "explicit"
		},
		{
			id: "explicit.stat_3896241826",
			text: "Hits against Nearby Enemies have #% increased Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_1509756274",
			text: "Enemies near corpses affected by your Curses are Blinded\nEnemies Killed near corpses affected by your Curses explode, dealing\n#% of their Life as Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2489070122",
			text: "Has an additional Implicit Mod",
			type: "explicit"
		},
		{
			id: "explicit.stat_847744351",
			text: "Non-Aura Curses you inflict are not removed from Dying Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_979973117",
			text: "Grants Level # Smite Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1489997462",
			text: "Players have #% increased Rarity of Items Found per 15 Rampage Kills",
			type: "explicit"
		},
		{
			id: "explicit.stat_3789765926",
			text: "#% Chance to Block Attack Damage if you have Blocked Attack Damage Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_1932583315",
			text: "Minions have #% increased Flask Effect Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2189382346",
			text: "#% increased Energy Shield per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_67169579",
			text: "# to Level of all Chaos Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_810166817",
			text: "Trigger Level # Elemental Warding when you Hit an Enemy while Cursed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1842038569",
			text: "#% increased Fishing Line Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_125312907",
			text: "Triggers Level # Blinding Aura when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3171958921",
			text: "#% chance to Trigger a Socketed Bow Skill when you Attack with a Bow",
			type: "explicit"
		},
		{
			id: "explicit.stat_1271391587",
			text: "Number of Perandus Coins dropped in this Area is Doubled",
			type: "explicit"
		},
		{
			id: "explicit.stat_74462130",
			text: "Life Recovery from Flasks also applies to Energy Shield during Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1942151132",
			text: "Lightning Resistance is #%",
			type: "explicit"
		},
		{
			id: "explicit.stat_760855772",
			text: "#% increased Quantity of Items found when on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1795365307",
			text: "#% increased Movement Speed per 10 Dexterity on Allocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_3916980068",
			text: "#% increased Maximum Energy Shield for each Corrupted Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3100523498",
			text: "#% to all Resistances for each Corrupted Item Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_1633583023",
			text: "Passives granting Cold Resistance or all Elemental Resistances in Radius\nalso grant Chance to Dodge Attack Hits at #% of its value",
			type: "explicit"
		},
		{
			id: "explicit.stat_1756017808",
			text: "You have Crimson Dance if you have dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2546599258",
			text: "Intelligence provides no bonus to Maximum Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_3809896400",
			text: "Unaffected by Curses",
			type: "explicit"
		},
		{
			id: "explicit.stat_16924183",
			text: "Raise Zombie does not require a corpse",
			type: "explicit"
		},
		{
			id: "explicit.stat_1834588299",
			text: "Gain # Mana when you hit a Taunted Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_763311546",
			text: "Fire Resistance is #%",
			type: "explicit"
		},
		{
			id: "explicit.stat_1945607273",
			text: "If this Area contains any Unique Monsters, one is Possessed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3689836025",
			text: "Perandus Monsters have a #% chance to drop Perandus Coins",
			type: "explicit"
		},
		{
			id: "explicit.stat_200299748",
			text: "When a Bloodline Pack is Slain, it drops a Currency Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_3302736916",
			text: "#% chance to Trigger a Socketed Spell when you Attack with a Bow",
			type: "explicit"
		},
		{
			id: "explicit.stat_4284915962",
			text: "# to Maximum Life per 2 Intelligence",
			type: "explicit"
		},
		{
			id: "explicit.stat_1285430327",
			text: "Purity of Lightning has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_2305944553",
			text: "Shrines drop a Currency Item when used",
			type: "explicit"
		},
		{
			id: "explicit.stat_648923098",
			text: "The first Strongbox Opened in this Area is guarded by an additional Rare Monster",
			type: "explicit"
		},
		{
			id: "explicit.stat_2612056840",
			text: "#% increased Spell Damage per 16 Dexterity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2580101523",
			text: "You gain Onslaught for # seconds on Killing Taunted Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_2812925691",
			text: "Trigger Level # Icicle Burst when you Kill a Frozen Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_995332031",
			text: "Socketed Gems are Supported by Level # Minion Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_249545292",
			text: "Critical Strikes do not inherently apply non-Damaging Ailments",
			type: "explicit"
		},
		{
			id: "explicit.stat_338643834",
			text: "Unique Boss is augmented by Player choices",
			type: "explicit"
		},
		{
			id: "explicit.stat_1594755360",
			text: "Shrines grant a random additional Shrine Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_710805027",
			text: "#% chance to gain an Endurance, Frenzy or Power Charge when any\nof your Traps are Triggered by an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_108334292",
			text: "#% chance to gain a Divine Charge on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1960833438",
			text: "Regenerate #% of Life per second per 500 Maximum Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1550221644",
			text: "#% reduced Fishing Pool Consumption",
			type: "explicit"
		},
		{
			id: "explicit.stat_2589977608",
			text: "Area contains a Rare Monster carrying a Tier 2 Talisman",
			type: "explicit"
		},
		{
			id: "explicit.stat_3885409671",
			text: "#% of Fire Damage Leeched as Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3551025193",
			text: "Chance to Block Spell Damage is Unlucky",
			type: "explicit"
		},
		{
			id: "explicit.stat_1583498502",
			text: "Summoned Holy Relics have #% reduced Cooldown Recovery Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2290031712",
			text: "Strength provides no bonus to Maximum Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_195090426",
			text: "Left ring slot: #% increased Mana Regeneration Rate",
			type: "explicit"
		},
		{
			id: "explicit.stat_2642525868",
			text: "#% increased Lightning Damage per 1% Lightning Resistance above 75%",
			type: "explicit"
		},
		{
			id: "explicit.stat_2420786978",
			text: "Skills which throw Traps have Blood Magic",
			type: "explicit"
		},
		{
			id: "explicit.stat_1436593527",
			text: "#% More Quantity of Items Dropped by Imprisoned Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_1224928411",
			text: "Passives granting Lightning Resistance or all Elemental Resistances in Radius\nalso grant Chance to Block Spell Damage at #% of its value",
			type: "explicit"
		},
		{
			id: "explicit.stat_615595418",
			text: "Regenerate #% of Energy Shield per Second for\nevery 10 Intelligence on Allocated Passives in Radius",
			type: "explicit"
		},
		{
			id: "explicit.stat_719626796",
			text: "Strike Skills also target the previous location they were Used",
			type: "explicit"
		},
		{
			id: "explicit.stat_354080151",
			text: "Inner Conviction",
			type: "explicit"
		},
		{
			id: "explicit.stat_2788729902",
			text: "Socketed Gems Chain # additional times",
			type: "explicit"
		},
		{
			id: "explicit.stat_2339012908",
			text: "# to Level of all Strength Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3726536628",
			text: "Gain # Life when you Taunt an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_496075050",
			text: "Cold Resistance is #%",
			type: "explicit"
		},
		{
			id: "explicit.stat_660404777",
			text: "#% increased Evasion Rating per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_308127151",
			text: "#% of Lightning Damage Leeched as Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_592020238",
			text: "#% increased Damage when on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3877259945",
			text: "Monsters with Silver Coins drop an additional Rare Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_1177959871",
			text: "Nearby Enemies cannot deal Critical Strikes",
			type: "explicit"
		},
		{
			id: "explicit.stat_1866911844",
			text: "Socketed Gems are Supported by Level # Inspiration",
			type: "explicit"
		},
		{
			id: "explicit.stat_2665149933",
			text: "You and Nearby Allies have # to # added Cold Damage per Green Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_482341163",
			text: "Area contains Yama the White",
			type: "explicit"
		},
		{
			id: "explicit.stat_2156472123",
			text: "Perandus Chests are guarded by additional Rare monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_445906009",
			text: "#% chance to lose a Frenzy Charge when you use a Travel Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_230941555",
			text: "You can have an Offering of each type",
			type: "explicit"
		},
		{
			id: "explicit.stat_329336318",
			text: "The first time a Player reaches # Rampage Kills in this Area, they will encounter a Powerful Monster",
			type: "explicit"
		},
		{
			id: "explicit.stat_438351187",
			text: "#% chance for Kills to count twice for Rampage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3130378100",
			text: "#% more Rarity of Items Dropped by Imprisoned Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_4040152475",
			text: "Hits ignore Enemy Monster Fire Resistance while you are Ignited",
			type: "explicit"
		},
		{
			id: "explicit.stat_3726585224",
			text: "You and Nearby Allies have # to # added Lightning Damage per Blue Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_668145148",
			text: "Nearby Enemies have #% to all Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_1859937391",
			text: "Socketed Gems gain #% of Physical Damage as extra Lightning Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_414379784",
			text: "#% increased Damage when you have no Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3600749521",
			text: "Wrath has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_49998574",
			text: "Area contains a Gemcutter's Strongbox",
			type: "explicit"
		},
		{
			id: "explicit.stat_1666896662",
			text: "You and Nearby Allies have # to # added Fire Damage per Red Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_2760138143",
			text: "Regenerate # Mana per second if all Equipped Items are Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_170497091",
			text: "#% increased Fishing Range",
			type: "explicit"
		},
		{
			id: "explicit.stat_120895749",
			text: "# Life gained for each Ignited Enemy hit by your Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_4003821677",
			text: "Imprisoned Monsters take #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_712621072",
			text: "Imprisoned Monsters have #% reduced Action Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_898094766",
			text: "Items dropped by Rogue Exiles are fully Linked",
			type: "explicit"
		},
		{
			id: "explicit.stat_3083201633",
			text: "#% increased Cooldown Recovery of Travel Skills per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3266549586",
			text: "Rare Monsters have #% chance to drop a Rare Prismatic Ring",
			type: "explicit"
		},
		{
			id: "explicit.stat_2116250000",
			text: "#% increased Movement Speed per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_637101875",
			text: "Monsters Fracture",
			type: "explicit"
		},
		{
			id: "explicit.stat_4156715241",
			text: "Regenerate # Energy Shield per second if all Equipped items are Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_2119664154",
			text: "#% chance that if you would gain Frenzy Charges, you instead gain up to your maximum number of Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1755438602",
			text: "Players take #% reduced Damage from Breach Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_2908391015",
			text: "Players deal #% increased Damage with Hits to Breach Monsters",
			type: "explicit"
		},
		{
			id: "explicit.stat_3192966873",
			text: "Purity of Ice has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1324450398",
			text: "#% chance to gain Onslaught when you use a Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_3031766225",
			text: "Players take # Chaos Damage per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_607308532",
			text: "Strongboxes in Area have #% chance to contain an additional Vaal Orb",
			type: "explicit"
		},
		{
			id: "explicit.stat_3550460467",
			text: "Enemies on Fungal Ground you Kill have #% chance to Explode, dealing 5% of their Life as Chaos Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1688834903",
			text: "Socketed Spells have #% reduced Mana Cost",
			type: "explicit"
		},
		{
			id: "explicit.stat_2608186870",
			text: "Area contains # additional packs of Elder Fiends",
			type: "explicit"
		},
		{
			id: "explicit.stat_1351748677",
			text: "Skills supported by Unleash have # to maximum number of Seals",
			type: "explicit"
		},
		{
			id: "explicit.stat_2894567787",
			text: "Spreads Tar when you Block",
			type: "explicit"
		},
		{
			id: "explicit.stat_1183247801",
			text: "Monsters with Silver Coins drop an additional Currency Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_2713233613",
			text: "#% chance that if you would gain Endurance Charges, you instead gain up to your maximum number of Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_244825991",
			text: "Nearby Allies have Fortify",
			type: "explicit"
		},
		{
			id: "explicit.stat_1431402553",
			text: "Gain #% of Physical Damage as Extra Fire Damage per 1 Rage",
			type: "explicit"
		},
		{
			id: "explicit.stat_4147528862",
			text: "Vaal Skills deal #% more Damage during Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1819086604",
			text: "#% chance to lose a Power Charge when you gain Elusive",
			type: "explicit"
		},
		{
			id: "explicit.stat_799872465",
			text: "You have Fungal Ground around you while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_3774108776",
			text: "#% increased Movement Speed per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3159312340",
			text: "Trigger Level # Contaminate when you Kill an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_1621470436",
			text: "#% chance to Cast Level 20 Fire Burst on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2418322751",
			text: "#% more Attack Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2309624770",
			text: "When a Bloodline Pack is Slain, it drops a Rare Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_3190223614",
			text: "Rare Monsters drop an additional Rare Item",
			type: "explicit"
		},
		{
			id: "explicit.stat_1260064327",
			text: "Players gain Onslaught for # seconds when they Kill a Rare Monster",
			type: "explicit"
		},
		{
			id: "explicit.stat_3425934849",
			text: "Socketed Skills have #% increased Cast Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_1550015622",
			text: "#% increased Spell Damage if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2054162825",
			text: "Karui Stone Hook",
			type: "explicit"
		},
		{
			id: "explicit.stat_3795004497",
			text: "Rogue Exiles each drop a Skill Gem with Quality",
			type: "explicit"
		},
		{
			id: "explicit.stat_1447080724",
			text: "#% increased Armour per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2473016979",
			text: "Monsters near Shrines are Chilled",
			type: "explicit"
		},
		{
			id: "explicit.stat_1092546321",
			text: "#% increased Recovery rate of Life and Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_1061631617",
			text: "#% Chance to Block Attack Damage per 50 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_3152714748",
			text: "Nearby Allies have #% to Critical Strike Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_2344590267",
			text: "Vaal Skills used during effect do not apply Soul Gain Prevention",
			type: "explicit"
		},
		{
			id: "explicit.stat_3375743050",
			text: "#% increased Attack Speed while affected by Precision",
			type: "explicit"
		},
		{
			id: "explicit.stat_1731620212",
			text: "Cannot gain Life during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_4120821275",
			text: "Malevolence has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_987588151",
			text: "#% increased Attack and Cast Speed per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1102362593",
			text: "Life and Mana Leech are instant during effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3997368968",
			text: "# to maximum Divine Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_768124628",
			text: "#% chance for Poisons inflicted with this Weapon to deal 300% more Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_301214136",
			text: "#% to maximum Chance to Dodge Attack Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_2047177714",
			text: "Items dropped by Rogue Exiles are Mirrored",
			type: "explicit"
		},
		{
			id: "explicit.stat_1029319062",
			text: "#% of Fire Damage from Hits taken as Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3848992177",
			text: "#% increased Maximum total Recovery per second from Energy Shield Leech while affected by Zealotry",
			type: "explicit"
		},
		{
			id: "explicit.stat_1170556324",
			text: "With at least 40 Dexterity in Radius, Galvanic Arrow deals #% increased Area Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_787958710",
			text: "#% to Cold Damage over Time Multiplier while affected by Malevolence",
			type: "explicit"
		},
		{
			id: "explicit.stat_3618888098",
			text: "#% increased Attack and Cast Speed per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2266636761",
			text: "#% Chaos Resistance against Damage Over Time",
			type: "explicit"
		},
		{
			id: "explicit.stat_115109959",
			text: "Regenerate #% of Energy Shield per second while on Low Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3884309250",
			text: "Area contains a Tormented Embezzler",
			type: "explicit"
		},
		{
			id: "explicit.stat_1874553720",
			text: "#% reduced Chill Duration on you",
			type: "explicit"
		},
		{
			id: "explicit.stat_2748763342",
			text: "Gains no Charges during effect of any Soul Ripper Flask",
			type: "explicit"
		},
		{
			id: "explicit.stat_2471600316",
			text: "Area contains a Keepers of the Trove Bloodline Pack",
			type: "explicit"
		},
		{
			id: "explicit.stat_3856468419",
			text: "Adds # to # Physical Damage to Attacks against Frozen Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_604671218",
			text: "#% increased Recovery rate of Life and Energy Shield per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_495713612",
			text: "#% increased Duration of Shrine Effects on Players",
			type: "explicit"
		},
		{
			id: "explicit.stat_604298782",
			text: "#% of Physical Attack Damage Leeched as Mana per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2881124988",
			text: "Socketed Skills have #% increased Attack Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_261224780",
			text: "Monsters Possessed by Tormented Spirits take #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2996332612",
			text: "Essences found in this Area are a higher level",
			type: "explicit"
		},
		{
			id: "explicit.stat_2132807290",
			text: "Map has # additional Synthesis Global Modifier",
			type: "explicit"
		},
		{
			id: "explicit.stat_3900181441",
			text: "Area contains an additional Magic Pack of Wealth",
			type: "explicit"
		},
		{
			id: "explicit.stat_470688636",
			text: "Triggers Level 20 Spectral Spirits when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_3056215807",
			text: "Magic Monsters take #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3879236300",
			text: "Magic Monsters are Maimed",
			type: "explicit"
		},
		{
			id: "explicit.stat_176085824",
			text: "If you have Blocked Recently, you and nearby Allies Regenerate #% of Life per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_468681962",
			text: "Area contains a Tormented Vaal Cultist",
			type: "explicit"
		},
		{
			id: "explicit.stat_807450540",
			text: "#% of Damage dealt by your Mines is Leeched to you as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1826480903",
			text: "Purity of Elements Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2238831336",
			text: "Your Maximum Frenzy Charges is equal to your Maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_992435560",
			text: "Hits against Nearby Enemies have 50% increased Critical Strike Chance",
			type: "explicit"
		},
		{
			id: "explicit.stat_23537505",
			text: "Map has # additional random Prefix",
			type: "explicit"
		},
		{
			id: "explicit.stat_1105638781",
			text: "Area contains an additional Perandus Jewellery Box",
			type: "explicit"
		},
		{
			id: "explicit.stat_3072066782",
			text: "Players Regenerate #% of Life per second per 25 Rampage Kills",
			type: "explicit"
		},
		{
			id: "explicit.stat_1077576866",
			text: "Area contains a Tormented Seditionist",
			type: "explicit"
		},
		{
			id: "explicit.stat_1093704472",
			text: "#% chance to Avoid being Frozen, Chilled or Ignited with Her Blessing",
			type: "explicit"
		},
		{
			id: "explicit.stat_2327728343",
			text: "#% chance to Blind nearby Enemies when gaining Her Blessing",
			type: "explicit"
		},
		{
			id: "explicit.stat_4203400545",
			text: "#% chance to gain Her Blessing for 3 seconds when you Ignite an Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_3530865840",
			text: "Lose a Power Charge each second if you have not Detonated Mines Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_627339348",
			text: "Adds # to # Fire Damage to Attacks against Ignited Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_3112480888",
			text: "Players gain #% chance to Dodge Attack Hits while under a Shrine Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_754005431",
			text: "Gain #% of Sword Physical Damage as Extra Fire Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3643076184",
			text: "Tempest Effects have #% increased Area of Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2968804751",
			text: "#% increased Attack and Movement Speed with Her Blessing",
			type: "explicit"
		},
		{
			id: "explicit.stat_478341845",
			text: "#% increased frequency of Tempest effects",
			type: "explicit"
		},
		{
			id: "explicit.stat_1471580517",
			text: "You can catch Exotic Fish",
			type: "explicit"
		},
		{
			id: "explicit.stat_3072232736",
			text: "Determination has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_3984519770",
			text: "Socketed Gems have #% chance to Ignite",
			type: "explicit"
		},
		{
			id: "explicit.stat_1356468153",
			text: "Nearby Allies' Action Speed cannot be modified to below base value",
			type: "explicit"
		},
		{
			id: "explicit.stat_1773553795",
			text: "Warbands in the Area have an additional Support Member",
			type: "explicit"
		},
		{
			id: "explicit.stat_4272453892",
			text: "# Strength and Intelligence Requirement",
			type: "explicit"
		},
		{
			id: "explicit.stat_2856326982",
			text: "#% Chance to Block Attack Damage per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_442509523",
			text: "Invasion Bosses are Duplicated",
			type: "explicit"
		},
		{
			id: "explicit.stat_3628993863",
			text: "Rare Monsters are Hindered, with #% reduced Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2449723897",
			text: "#% of Damage Leeched as Life for Skills used by Totems",
			type: "explicit"
		},
		{
			id: "explicit.stat_244107556",
			text: "Warcry Skills' Cooldown Time is 2 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_321765853",
			text: "# Physical Damage taken from Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_1174243390",
			text: "You gain Divinity for # seconds on reaching maximum Divine Charges\nLose all Divine Charges when you gain Divinity",
			type: "explicit"
		},
		{
			id: "explicit.stat_3916799917",
			text: "Gain #% of Cold Damage as Extra Chaos Damage per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_370321141",
			text: "Area contains a Chayula Breach",
			type: "explicit"
		},
		{
			id: "explicit.stat_4137521191",
			text: "#% increased Attack Speed if you've been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2517911661",
			text: "A Strongbox in this Area is Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_1220361974",
			text: "Killed Enemies Explode, dealing #% of their Life as Physical Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1073314277",
			text: "#% increased Spell Damage per 10 Strength",
			type: "explicit"
		},
		{
			id: "explicit.stat_729430714",
			text: "#% to Critical Strike Multiplier for Spells if you haven't Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3708588508",
			text: "Discipline Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1719423857",
			text: "# to Level of Socketed Intelligence Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_112201073",
			text: "#% of Damage against Shocked Enemies Leeched as Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_707887043",
			text: "#% increased Critical Strike Chance per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_593279674",
			text: "#% of Damage against Frozen Enemies Leeched as Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2244724505",
			text: "Area contains 3 additional Magic Packs which\nhave #% increased Attack, Cast and Movement Speed, and drop #% more items",
			type: "explicit"
		},
		{
			id: "explicit.stat_1384838464",
			text: "Essences found in this Area are Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_1226049915",
			text: "#% additional Physical Damage Reduction per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_133340941",
			text: "Area has patches of burning ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_881914531",
			text: "#% chance to gain a Frenzy Charge when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1391583476",
			text: "Hatred Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2278589942",
			text: "Purity of Fire Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1109745356",
			text: "Gain #% of Fire Damage as Extra Chaos Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1243114410",
			text: "#% increased Critical Strike Chance for Spells if you've Killed Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2257141320",
			text: "Vaal Skills deal #% increased Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3381731475",
			text: "Area contains an additional Fangjaw Talisman",
			type: "explicit"
		},
		{
			id: "explicit.stat_1415399260",
			text: "Area is controlled by a Warband Boss",
			type: "explicit"
		},
		{
			id: "explicit.stat_2189891129",
			text: "Anger Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2250543633",
			text: "Clarity Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2270693644",
			text: "Area contains an additional Clutching Talisman",
			type: "explicit"
		},
		{
			id: "explicit.stat_1622979279",
			text: "Purity of Ice Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2148784747",
			text: "#% Chance to Block Attack Damage per Frenzy Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_272791075",
			text: "Drops Burning Ground while moving, dealing # Fire Damage per second",
			type: "explicit"
		},
		{
			id: "explicit.stat_3628411738",
			text: "Warbands in the Area have an additional Elite Member",
			type: "explicit"
		},
		{
			id: "explicit.stat_3592330380",
			text: "Cannot be Shocked or Ignited while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_2503479316",
			text: "Envy Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_424026624",
			text: "Adds # to # Physical Damage against Poisoned Enemies",
			type: "explicit"
		},
		{
			id: "explicit.stat_438083873",
			text: "Vitality Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2547511866",
			text: "#% increased Critical Strike Chance per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_279246355",
			text: "Areas are inhabited by an additional Invasion Boss",
			type: "explicit"
		},
		{
			id: "explicit.stat_4048158159",
			text: "The first time a Player reaches # Rampage Kills in this Area, 6 Currency Items will drop",
			type: "explicit"
		},
		{
			id: "explicit.stat_2355741828",
			text: "#% Chance to Block Attack Damage per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3955574239",
			text: "Area contains an additional Perandus Treasury",
			type: "explicit"
		},
		{
			id: "explicit.stat_2930404958",
			text: "Grace Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_341698555",
			text: "At least one Perandus Chest is guarded by a Unique Monster",
			type: "explicit"
		},
		{
			id: "explicit.stat_1865987277",
			text: "Wrath Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_3941271999",
			text: "Frostblink has #% increased Duration",
			type: "explicit"
		},
		{
			id: "explicit.stat_1959271744",
			text: "Area is a Maze",
			type: "explicit"
		},
		{
			id: "explicit.stat_511024200",
			text: "#% reduced Physical Damage taken over time",
			type: "explicit"
		},
		{
			id: "explicit.stat_3115319277",
			text: "Gain #% of Lightning Damage as Extra Chaos Damage per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_1893852470",
			text: "#% chance to Dodge Attack Hits per Endurance Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_3961213398",
			text: "Regenerate #% of Life per second per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_2163273007",
			text: "#% chance to Dodge Attack Hits per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_663447087",
			text: "Items dropped by Rogue Exiles are Corrupted",
			type: "explicit"
		},
		{
			id: "explicit.stat_2308225900",
			text: "Purity of Lightning Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_3355479537",
			text: "#% chance to create Shocked Ground when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2911866787",
			text: "Grants Level # Frostblink Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1741242318",
			text: "Zealotry Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_433293234",
			text: "Minion Instability",
			type: "explicit"
		},
		{
			id: "explicit.stat_3049760680",
			text: "#% chance to gain Onslaught for 3 seconds when Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_1661253443",
			text: "Strike Skills target # additional nearby Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_1592278124",
			text: "Anger has #% increased Aura Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1358697130",
			text: "Determination Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2935548106",
			text: "# to Evasion Rating if Hit an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2606808909",
			text: "Arrow Dancing",
			type: "explicit"
		},
		{
			id: "explicit.stat_308309328",
			text: "#% chance to Recover 10% of Mana when you use a Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_1263158408",
			text: "Elemental Equilibrium",
			type: "explicit"
		},
		{
			id: "explicit.stat_1012100113",
			text: "Area is #% larger",
			type: "explicit"
		},
		{
			id: "explicit.stat_751322171",
			text: "Haste Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1877984956",
			text: "Players are Cursed with Warlord's Mark",
			type: "explicit"
		},
		{
			id: "explicit.stat_1276918229",
			text: "#% reduced Lightning Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_588560583",
			text: "Regenerate #% of Energy Shield per second if you've Hit an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_571003610",
			text: "Area contains an Arcanist's Strongbox",
			type: "explicit"
		},
		{
			id: "explicit.stat_445988468",
			text: "Area contains an Essence of Hysteria",
			type: "explicit"
		},
		{
			id: "explicit.stat_3986347319",
			text: "#% additional Physical Damage Reduction per Power Charge",
			type: "explicit"
		},
		{
			id: "explicit.stat_761598374",
			text: "You can apply an additional Curse while at maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1311723478",
			text: "Ignore all Movement Penalties from Armour",
			type: "explicit"
		},
		{
			id: "explicit.stat_4179663748",
			text: "#% chance to gain a Frenzy Charge when you Hit a Rare or Unique Enemy",
			type: "explicit"
		},
		{
			id: "explicit.stat_488900289",
			text: "Breaches contain a Breachlord's Clasped Hand",
			type: "explicit"
		},
		{
			id: "explicit.stat_2960683632",
			text: "#% reduced Chaos Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_3574189159",
			text: "Elemental Overload",
			type: "explicit"
		},
		{
			id: "explicit.stat_585622486",
			text: "Malevolence Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_1876857497",
			text: "You have Mind over Matter while at maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_598809739",
			text: "Monsters grant #% increased Experience",
			type: "explicit"
		},
		{
			id: "explicit.stat_3909654181",
			text: "Monsters have #% increased Attack, Cast and Movement Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_3943945975",
			text: "Resolute Technique",
			type: "explicit"
		},
		{
			id: "explicit.stat_1386808918",
			text: "Breaches each contain a Breachlord",
			type: "explicit"
		},
		{
			id: "explicit.stat_3884934810",
			text: "Perfect Agony",
			type: "explicit"
		},
		{
			id: "explicit.stat_1314418188",
			text: "You have Vaal Pact while at maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_301625329",
			text: "#% increased Rarity of Items found during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_2368149582",
			text: "# to Armour if you've Hit an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4272248216",
			text: "Ghost Reaver",
			type: "explicit"
		},
		{
			id: "explicit.stat_2648570028",
			text: "Ancestral Bond",
			type: "explicit"
		},
		{
			id: "explicit.stat_88817332",
			text: "#% increased Global Evasion Rating when on Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_1990354706",
			text: "You have Iron Reflexes while at maximum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2181791238",
			text: "Wrath has #% increased Aura Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_3554614456",
			text: "Pride Reserves no Mana",
			type: "explicit"
		},
		{
			id: "explicit.stat_2004028089",
			text: "Items dropped by Invasion Bosses are fully Linked",
			type: "explicit"
		},
		{
			id: "explicit.stat_2257118425",
			text: "Vaal Pact",
			type: "explicit"
		},
		{
			id: "explicit.stat_2408544213",
			text: "#% chance to Gain Onslaught for 4 seconds on Hit while at maximum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_300702212",
			text: "Crimson Dance",
			type: "explicit"
		},
		{
			id: "explicit.stat_359450079",
			text: "Socketed Gems are Supported by Level # Greater Multiple Projectiles",
			type: "explicit"
		},
		{
			id: "explicit.stat_899928542",
			text: "Invasion Bosses drop an additional Vaal Orb",
			type: "explicit"
		},
		{
			id: "explicit.stat_4080245957",
			text: "Runebinder",
			type: "explicit"
		},
		{
			id: "explicit.stat_3371432622",
			text: "#% chance to gain a Flask Charge when you deal a Critical Strike while at maximum Frenzy Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_2602865453",
			text: "Regenerate #% of Mana per second if you've Hit an Enemy Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_444117960",
			text: "Items dropped by Invasion Bosses have an additional Socket",
			type: "explicit"
		},
		{
			id: "explicit.stat_3846810663",
			text: "#% reduced Reflected Damage taken",
			type: "explicit"
		},
		{
			id: "explicit.stat_2530071726",
			text: "Area contains an additional Three Rat Talisman",
			type: "explicit"
		},
		{
			id: "explicit.stat_1479533453",
			text: "# uses remaining",
			type: "explicit"
		},
		{
			id: "explicit.stat_3246076198",
			text: "Area has patches of shocking ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_514705332",
			text: "Socketed Gems are Supported by Level # Elemental Army Support",
			type: "explicit"
		},
		{
			id: "explicit.stat_2269282877",
			text: "Socketed Gems are Supported by Level # Feeding Frenzy",
			type: "explicit"
		},
		{
			id: "explicit.stat_326965591",
			text: "Iron Reflexes",
			type: "explicit"
		},
		{
			id: "explicit.stat_11106713",
			text: "#% of Spell Damage Leeched as Energy Shield",
			type: "explicit"
		},
		{
			id: "explicit.stat_2894476716",
			text: "Gain an Endurance Charge every second if you've been Hit Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3057529096",
			text: "Area contains a Rare Monster with Inner Treasure",
			type: "explicit"
		},
		{
			id: "explicit.stat_1636220212",
			text: "Socketed Gems are Supported by Level # Swift Affliction",
			type: "explicit"
		},
		{
			id: "explicit.stat_1866583932",
			text: "Socketed Gems are Supported by Level # Void Manipulation",
			type: "explicit"
		},
		{
			id: "explicit.stat_2877370216",
			text: "#% chance to Intimidate Enemies for 4 seconds on Hit with Attacks while at maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_813119588",
			text: "#% chance to Gain Arcane Surge on Hit with Spells while at maximum Power Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_1928796626",
			text: "A Beyond Unique drops when the first Unique Monster from Beyond is slain",
			type: "explicit"
		},
		{
			id: "explicit.stat_3780437763",
			text: "You cannot be Stunned while at maximum Endurance Charges",
			type: "explicit"
		},
		{
			id: "explicit.stat_619213329",
			text: "# to Level of all Physical Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2323242761",
			text: "#% chance to gain a Frenzy Charge on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2693266036",
			text: "#% additional Physical Damage Reduction during any Flask Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_628032624",
			text: "Cannot be Chilled or Frozen while moving",
			type: "explicit"
		},
		{
			id: "explicit.stat_194037675",
			text: "Area contains a Unique Strongbox",
			type: "explicit"
		},
		{
			id: "explicit.stat_2200030809",
			text: "Discipline has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_4175197580",
			text: "Malevolence has #% increased Aura Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_464535071",
			text: "#% increased Trap and Mine Throwing Speed",
			type: "explicit"
		},
		{
			id: "explicit.stat_2017682521",
			text: "+#% Monster pack size",
			type: "explicit"
		},
		{
			id: "explicit.stat_3451043685",
			text: "Triggers Level # Reflection when Equipped",
			type: "explicit"
		},
		{
			id: "explicit.stat_643741006",
			text: "Area is inhabited by Bandits",
			type: "explicit"
		},
		{
			id: "explicit.stat_1135493957",
			text: "Socketed Gems are Supported by Level # Culling Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_2700934265",
			text: "Grants Level # Vaal Impurity of Fire Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_3581578643",
			text: "Socketed Gems are Supported by Level # Empower",
			type: "explicit"
		},
		{
			id: "explicit.stat_3859593448",
			text: "#% reduced Elemental Damage Taken while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_3155072742",
			text: "Socketed Gems are Supported by Level # Summon Phantasm",
			type: "explicit"
		},
		{
			id: "explicit.stat_1669870438",
			text: "A Monster in this Area will summon Abaxoth when Slain",
			type: "explicit"
		},
		{
			id: "explicit.stat_1109343199",
			text: "Wicked Ward",
			type: "explicit"
		},
		{
			id: "explicit.stat_1828254451",
			text: "Socketed Gems are Supported by Level # Combustion",
			type: "explicit"
		},
		{
			id: "explicit.stat_1296614065",
			text: "#% increased Fish Bite Sensitivity",
			type: "explicit"
		},
		{
			id: "explicit.stat_2813626504",
			text: "Spells have a #% chance to deal Double Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_1521863824",
			text: "#% increased Movement speed while on Burning, Chilled or Shocked ground",
			type: "explicit"
		},
		{
			id: "explicit.stat_1300125165",
			text: "Grants Level # Vaal Impurity of Ice Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2959369472",
			text: "Grants Level # Vaal Impurity of Lightning Skill",
			type: "explicit"
		},
		{
			id: "explicit.stat_2201102274",
			text: "Socketed Gems are Supported by Level # Infernal Legion",
			type: "explicit"
		},
		{
			id: "explicit.stat_388696990",
			text: "Socketed Gems are Supported by Level # Decay",
			type: "explicit"
		},
		{
			id: "explicit.stat_2710898947",
			text: "#% more Monster Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_4048257027",
			text: "Socketed Gems are Supported by Level # Infused Channelling",
			type: "explicit"
		},
		{
			id: "explicit.stat_2126431157",
			text: "Socketed Gems are Supported by Level # Damage On Full Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_3294034100",
			text: "Area contains an additional Perandus Archive",
			type: "explicit"
		},
		{
			id: "explicit.stat_4197398087",
			text: "Area contains a Cartographer's Strongbox",
			type: "explicit"
		},
		{
			id: "explicit.stat_411810300",
			text: "Area contains an additional Perandus Locker",
			type: "explicit"
		},
		{
			id: "explicit.stat_3956623857",
			text: "Area contains an additional Unique Talisman",
			type: "explicit"
		},
		{
			id: "explicit.stat_2433615566",
			text: "Socketed Gems are supported by Level # Pierce",
			type: "explicit"
		},
		{
			id: "explicit.stat_1519665289",
			text: "Projectiles from Socketed Gems Fork",
			type: "explicit"
		},
		{
			id: "explicit.stat_807186595",
			text: "Socketed Gems are Supported by Level # Multiple Totems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2697741965",
			text: "Socketed Gems are Supported by Level # Curse On Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_3327487371",
			text: "Socketed Gems are Supported by Level # Physical To Lightning",
			type: "explicit"
		},
		{
			id: "explicit.stat_3191123893",
			text: "#% increased effect of Modifiers on non-unique Maps",
			type: "explicit"
		},
		{
			id: "explicit.stat_3623716321",
			text: "Adds # to # Fire Damage if you've Blocked Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_2032386732",
			text: "Socketed Gems are Supported by Level # Life Gain On Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2643665787",
			text: "Socketed Gems are Supported by Level # Chain",
			type: "explicit"
		},
		{
			id: "explicit.stat_2065361612",
			text: "Socketed Gems are Supported by Level # Enlighten",
			type: "explicit"
		},
		{
			id: "explicit.stat_804508379",
			text: "Socketed Gems are Supported by Level # Bloodlust",
			type: "explicit"
		},
		{
			id: "explicit.stat_3215042347",
			text: "Purity of Fire has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_1263311755",
			text: "#% more Monster Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_689720069",
			text: "Socketed Gems are supported by Level # Stun",
			type: "explicit"
		},
		{
			id: "explicit.stat_3356013982",
			text: "Socketed Gems are Supported by Level # Unleash",
			type: "explicit"
		},
		{
			id: "explicit.stat_4082662318",
			text: "Socketed Gems are Supported by Level # Deathmark",
			type: "explicit"
		},
		{
			id: "explicit.stat_2556436882",
			text: "Socketed Gems are Supported by Level # Enhance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3640956958",
			text: "Projectiles Pierce 2 additional Targets",
			type: "explicit"
		},
		{
			id: "explicit.stat_1365328494",
			text: "Socketed Gems are Supported by Level # Charged Mines",
			type: "explicit"
		},
		{
			id: "explicit.stat_3739863694",
			text: "#% chance to Impale Enemies on Hit with Attacks",
			type: "explicit"
		},
		{
			id: "explicit.stat_4263513561",
			text: "#% Chance to Block Spell Damage if you have Blocked Spell Damage Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3827538724",
			text: "Socketed Gems are Supported by Level # Barrage",
			type: "explicit"
		},
		{
			id: "explicit.stat_3144358296",
			text: "Adds # to # Fire Damage if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4265906483",
			text: "#% chance to inflict Lightning Exposure on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_943553365",
			text: "Each Summoned Phantasm grants you Phantasmal Might",
			type: "explicit"
		},
		{
			id: "explicit.stat_3967028570",
			text: "#% of Chaos Damage is taken from Mana before Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_2805586447",
			text: "Socketed Gems are Supported by Level # Minefield",
			type: "explicit"
		},
		{
			id: "explicit.stat_3579673398",
			text: "Enemies have #% to Total Physical Damage Reduction against this Weapon's Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_4270089231",
			text: "# to maximum Energy Shield per 100 Reserved Life",
			type: "explicit"
		},
		{
			id: "explicit.stat_479453859",
			text: "Socketed Gems are Supported by Level # Charged Traps",
			type: "explicit"
		},
		{
			id: "explicit.stat_1242155304",
			text: "Every 5 seconds, Regenerate #% of Life over one second",
			type: "explicit"
		},
		{
			id: "explicit.stat_2584264074",
			text: "You are at Maximum Chance to Block Attack Damage if you have not Blocked Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_4003278965",
			text: "Map has # additional random Modifier",
			type: "explicit"
		},
		{
			id: "explicit.stat_3350228283",
			text: "Poisoned Enemies you Kill with Hits Shatter",
			type: "explicit"
		},
		{
			id: "explicit.stat_1740229525",
			text: "Attacks with this Weapon Penetrate #% Cold Resistance",
			type: "explicit"
		},
		{
			id: "explicit.stat_3738001379",
			text: "#% chance to gain a Flask Charge when you deal a Critical Strike",
			type: "explicit"
		},
		{
			id: "explicit.stat_78985352",
			text: "#% chance to Intimidate Enemies for 4 seconds on Hit",
			type: "explicit"
		},
		{
			id: "explicit.stat_2528440851",
			text: "Area contains # additional packs of Shaper Creations",
			type: "explicit"
		},
		{
			id: "explicit.stat_3239503729",
			text: "Socketed Gems are Supported by Level # Mirage Archer",
			type: "explicit"
		},
		{
			id: "explicit.stat_4273356746",
			text: "Nearby Enemies have #% increased Fire and Cold Resistances",
			type: "explicit"
		},
		{
			id: "explicit.stat_3287477747",
			text: "Socketed Gems are Supported by Level # Withering Touch",
			type: "explicit"
		},
		{
			id: "explicit.stat_1190121450",
			text: "You have Chilling Conflux for 3 seconds every 8 seconds",
			type: "explicit"
		},
		{
			id: "explicit.stat_146924886",
			text: "# to Level of all Dexterity Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_3191479793",
			text: "#% increased effect of Offerings",
			type: "explicit"
		},
		{
			id: "explicit.stat_1147690586",
			text: "# to Level of all Lightning Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_2003753577",
			text: "Anger has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_3835483564",
			text: "Hatred has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_3980924189",
			text: "#% to maximum Chance to Dodge Spell Hits",
			type: "explicit"
		},
		{
			id: "explicit.stat_880970200",
			text: "You have Consecrated Ground around you while stationary",
			type: "explicit"
		},
		{
			id: "explicit.stat_1473444150",
			text: "#% increased Attack and Cast Speed while you have Fortify",
			type: "explicit"
		},
		{
			id: "explicit.stat_493812998",
			text: "# to Level of all Intelligence Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_599749213",
			text: "# to Level of all Fire Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_478612089",
			text: "Zealotry has #% reduced Mana Reservation",
			type: "explicit"
		},
		{
			id: "explicit.stat_3370223014",
			text: "Adds # to # Cold Damage if you've dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_3742945352",
			text: "Hatred has #% increased Aura Effect",
			type: "explicit"
		},
		{
			id: "explicit.stat_1900098804",
			text: "Socketed Gems are Supported by Level # Impale",
			type: "explicit"
		},
		{
			id: "explicit.stat_2388574377",
			text: "#% to maximum Chance to Block Spell Damage",
			type: "explicit"
		},
		{
			id: "explicit.stat_103909236",
			text: "Socketed Gems are Supported by Level # Deadly Ailments",
			type: "explicit"
		},
		{
			id: "explicit.stat_2116100988",
			text: "Socketed Gems are Supported by Level # High-Impact Mine",
			type: "explicit"
		},
		{
			id: "explicit.stat_369650395",
			text: "Socketed Gems are Supported by Level # Rage",
			type: "explicit"
		},
		{
			id: "explicit.stat_2861649515",
			text: "Socketed Gems are Supported by Level # Nightblade",
			type: "explicit"
		},
		{
			id: "explicit.stat_799443127",
			text: "Socketed Gems are Supported by Level # Energy Leech",
			type: "explicit"
		},
		{
			id: "explicit.stat_2062753054",
			text: "Socketed Gems are supported by Level # Fork",
			type: "explicit"
		},
		{
			id: "explicit.stat_1876637240",
			text: "Socketed Gems are Supported by Level # Intensify",
			type: "explicit"
		},
		{
			id: "explicit.stat_3016436615",
			text: "Socketed Gems are Supported by Level # Multiple Traps",
			type: "explicit"
		},
		{
			id: "explicit.stat_3988349707",
			text: "#% to Damage over Time Multiplier",
			type: "explicit"
		},
		{
			id: "explicit.stat_1078455967",
			text: "# to Level of all Cold Skill Gems",
			type: "explicit"
		},
		{
			id: "explicit.stat_1161341806",
			text: "Can have a up to 1 Implicit Modifier while Item has this Modifier",
			type: "explicit"
		},
		{
			id: "explicit.stat_1085545682",
			text: "You have Tailwind if you have dealt a Critical Strike Recently",
			type: "explicit"
		},
		{
			id: "explicit.stat_728246008",
			text: "Nova Spells Cast at the targeted location instead of around you",
			type: "explicit"
		},
		{
			id: "explicit.stat_694651314",
			text: "Socketed Gems are Supported by Level # Close Combat",
			type: "explicit"
		},
		{
			id: "explicit.stat_4021476585",
			text: "Socketed Gems are Supported by Level # Swift Assembly",
			type: "explicit"
		}
	],
	implicit: [
		{
			id: "implicit.stat_3299347043",
			text: "# to maximum Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_587431675",
			text: "#% increased Global Critical Strike Chance",
			type: "implicit"
		},
		{
			id: "implicit.stat_2974417149",
			text: "#% increased Spell Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3917489142",
			text: "#% increased Rarity of Items found",
			type: "implicit"
		},
		{
			id: "implicit.stat_3141070085",
			text: "#% increased Elemental Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_4080418644",
			text: "# to Strength",
			type: "implicit"
		},
		{
			id: "implicit.stat_3489782002",
			text: "# to maximum Energy Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_624954515",
			text: "#% increased Global Accuracy Rating",
			type: "implicit"
		},
		{
			id: "implicit.stat_1379411836",
			text: "# to all Attributes",
			type: "implicit"
		},
		{
			id: "implicit.stat_3441501978",
			text: "#% to Fire and Lightning Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_3556824919",
			text: "#% to Global Critical Strike Multiplier",
			type: "implicit"
		},
		{
			id: "implicit.stat_3032590688",
			text: "Adds # to # Physical Damage to Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_4077843608",
			text: "Has 1 Socket",
			type: "implicit"
		},
		{
			id: "implicit.stat_3527617737",
			text: "Has # Abyssal Sockets",
			type: "implicit"
		},
		{
			id: "implicit.stat_1310194496",
			text: "#% increased Global Physical Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1535626285",
			text: "# to Strength and Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_3372524247",
			text: "#% to Fire Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_1671376347",
			text: "#% to Lightning Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_4220027924",
			text: "#% to Cold Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_2901986750",
			text: "#% to all Elemental Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_538848803",
			text: "# to Strength and Dexterity",
			type: "implicit"
		},
		{
			id: "implicit.stat_1001829678",
			text: "#% Chance to Block Attack Damage while wielding a Staff (Staves)",
			type: "implicit"
		},
		{
			id: "implicit.stat_4277795662",
			text: "#% to Cold and Lightning Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_821021828",
			text: "# Life gained for each Enemy hit by Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_3261801346",
			text: "# to Dexterity",
			type: "implicit"
		},
		{
			id: "implicit.stat_2915988346",
			text: "#% to Fire and Cold Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_2300185227",
			text: "# to Dexterity and Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_2517001139",
			text: "#% increased Stun Duration on Enemies",
			type: "implicit"
		},
		{
			id: "implicit.stat_2250533757",
			text: "#% increased Movement Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_1443060084",
			text: "#% reduced Enemy Stun Threshold",
			type: "implicit"
		},
		{
			id: "implicit.stat_3325883026",
			text: "Regenerate # Life per second",
			type: "implicit"
		},
		{
			id: "implicit.stat_2923486259",
			text: "#% to Chaos Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_328541901",
			text: "# to Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_2375316951",
			text: "#% increased Critical Strike Chance",
			type: "implicit"
		},
		{
			id: "implicit.stat_789117908",
			text: "#% increased Mana Regeneration Rate",
			type: "implicit"
		},
		{
			id: "implicit.stat_2511217560",
			text: "#% increased Stun and Block Recovery",
			type: "implicit"
		},
		{
			id: "implicit.stat_1050105434",
			text: "# to maximum Mana",
			type: "implicit"
		},
		{
			id: "implicit.stat_202275580",
			text: "Properties are doubled while in a Breach",
			type: "implicit"
		},
		{
			id: "implicit.stat_2994708956",
			text: "Can roll Minion Modifiers",
			type: "implicit"
		},
		{
			id: "implicit.stat_691932474",
			text: "# to Accuracy Rating (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_387439868",
			text: "#% increased Elemental Damage with Attack Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_3593843976",
			text: "#% of Physical Attack Damage Leeched as Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_2146730404",
			text: "Creates Consecrated Ground on Use",
			type: "implicit"
		},
		{
			id: "implicit.stat_1760576992",
			text: "Adds # to # Physical Damage to Bow Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_369183568",
			text: "#% increased Block Recovery",
			type: "implicit"
		},
		{
			id: "implicit.stat_836936635",
			text: "Regenerate #% of Life per second",
			type: "implicit"
		},
		{
			id: "implicit.stat_3423006863",
			text: "Arrows Pierce an additional Target",
			type: "implicit"
		},
		{
			id: "implicit.stat_538730182",
			text: "Creates a Smoke Cloud on Use",
			type: "implicit"
		},
		{
			id: "implicit.stat_1589917703",
			text: "Minions deal #% increased Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1652515349",
			text: "# to maximum number of Raised Zombies",
			type: "implicit"
		},
		{
			id: "implicit.stat_1002362373",
			text: "#% increased Melee Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_280731498",
			text: "#% increased Area of Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_736967255",
			text: "#% increased Chaos Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3291658075",
			text: "#% increased Cold Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_299373046",
			text: "Area is infested with Fungal Growths",
			type: "implicit"
		},
		{
			id: "implicit.stat_2749862839",
			text: "#% chance to Dodge Attack Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_2748665614",
			text: "#% increased maximum Mana",
			type: "implicit"
		},
		{
			id: "implicit.stat_2162876159",
			text: "#% increased Projectile Attack Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3120164895",
			text: "Adds # to # Fire Damage to Bow Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_2843214518",
			text: "#% increased Attack Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2797971005",
			text: "# Life gained for each Enemy hit by your Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_2656027173",
			text: "Natural inhabitants of this area have been removed",
			type: "implicit"
		},
		{
			id: "implicit.stat_983749596",
			text: "#% increased maximum Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_2672805335",
			text: "#% increased Attack and Cast Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_2154246560",
			text: "#% increased Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1654414582",
			text: "You cannot be Cursed with Silence",
			type: "implicit"
		},
		{
			id: "implicit.stat_2316658489",
			text: "# to Armour and Evasion Rating",
			type: "implicit"
		},
		{
			id: "implicit.stat_721014846",
			text: "You cannot be Hindered",
			type: "implicit"
		},
		{
			id: "implicit.stat_884586851",
			text: "#% increased Quantity of Items found",
			type: "implicit"
		},
		{
			id: "implicit.stat_734614379",
			text: "#% increased Strength",
			type: "implicit"
		},
		{
			id: "implicit.stat_640052854",
			text: "# Mana gained for each Enemy hit by Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_1126826428",
			text: "You cannot be Maimed",
			type: "implicit"
		},
		{
			id: "implicit.stat_2227180465",
			text: "#% increased Mana Reserved",
			type: "implicit"
		},
		{
			id: "implicit.stat_2891184298",
			text: "#% increased Cast Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_782230869",
			text: "#% increased Effect of non-Damaging Ailments on Enemies",
			type: "implicit"
		},
		{
			id: "implicit.stat_2843100721",
			text: "# to Level of Socketed Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_696707743",
			text: "#% chance to Dodge Spell Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_1658498488",
			text: "Corrupted Blood cannot be inflicted on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_2067062068",
			text: "Projectiles Pierce # additional Targets",
			type: "implicit"
		},
		{
			id: "implicit.stat_4139681126",
			text: "#% increased Dexterity",
			type: "implicit"
		},
		{
			id: "implicit.stat_656461285",
			text: "#% increased Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_2530372417",
			text: "#% Chance to Block Attack Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_800141891",
			text: "#% chance to Freeze, Shock and Ignite",
			type: "implicit"
		},
		{
			id: "implicit.stat_3962278098",
			text: "#% increased Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3311869501",
			text: "Creates Chilled Ground on Use",
			type: "implicit"
		},
		{
			id: "implicit.stat_2231156303",
			text: "#% increased Lightning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_4078695",
			text: "# to Maximum Frenzy Charges",
			type: "implicit"
		},
		{
			id: "implicit.stat_2101383955",
			text: "Damage Penetrates #% Elemental Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_2482852589",
			text: "#% increased maximum Energy Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_210067635",
			text: "#% increased Attack Speed (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_3143208761",
			text: "#% increased Attributes",
			type: "implicit"
		},
		{
			id: "implicit.stat_1519615863",
			text: "#% chance to cause Bleeding on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_3624393862",
			text: "Map is occupied by #",
			type: "implicit",
			option: {
				options: [
					{
						id: "1",
						text: "The Enslaver"
					},
					{
						id: "2",
						text: "The Eradicator"
					},
					{
						id: "3",
						text: "The Constrictor"
					},
					{
						id: "4",
						text: "The Purifier"
					}
				]
			}
		},
		{
			id: "implicit.stat_3742945352",
			text: "Hatred has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_2115168758",
			text: "# to Level of Socketed Duration Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3767873853",
			text: "Reflects # Physical Damage to Melee Attackers",
			type: "implicit"
		},
		{
			id: "implicit.stat_681332047",
			text: "#% increased Attack Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_1389153006",
			text: "#% increased Global Defences",
			type: "implicit"
		},
		{
			id: "implicit.stat_788317702",
			text: "Discipline has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_2551600084",
			text: "# to Level of Socketed AoE Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_2176571093",
			text: "# to Level of Socketed Projectile Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3771516363",
			text: "#% additional Physical Damage Reduction",
			type: "implicit"
		},
		{
			id: "implicit.stat_3653400807",
			text: "Determination has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_80079005",
			text: "#% of Lightning Damage Leeched as Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_2452998583",
			text: "# to Level of Socketed Aura Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_1900164129",
			text: "Area contains a Monster possessed by an Ancient Talisman",
			type: "implicit"
		},
		{
			id: "implicit.stat_1050286373",
			text: "Area contains up to 1 Monster imprisoned by Essences",
			type: "implicit"
		},
		{
			id: "implicit.stat_2181791238",
			text: "Wrath has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_392469782",
			text: "Area contains a Breach",
			type: "implicit"
		},
		{
			id: "implicit.stat_548865797",
			text: "Area contains a Rogue Exile",
			type: "implicit"
		},
		{
			id: "implicit.stat_3999401129",
			text: "#% of Cold Damage Leeched as Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_1837040413",
			text: "Slaying Enemies close together can attract monsters from Beyond this realm",
			type: "implicit"
		},
		{
			id: "implicit.stat_1592278124",
			text: "Anger has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_1515657623",
			text: "# to Maximum Endurance Charges",
			type: "implicit"
		},
		{
			id: "implicit.stat_2949489150",
			text: "Area contains a Tormented Spirit",
			type: "implicit"
		},
		{
			id: "implicit.stat_3377888098",
			text: "#% increased Skill Effect Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_3848282610",
			text: "#% of Fire Damage Leeched as Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_3691695237",
			text: "# to Level of Socketed Curse Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3907094951",
			text: "Area contains at least 1 Warband Pack",
			type: "implicit"
		},
		{
			id: "implicit.stat_397427740",
			text: "Grace has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_4175197580",
			text: "Malevolence has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_1672793731",
			text: "# to Level of Socketed Warcry Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_4096052153",
			text: "Zealotry has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_30642521",
			text: "You can apply an additional Curse",
			type: "implicit"
		},
		{
			id: "implicit.stat_3967845372",
			text: "Curse Enemies with Level # Vulnerability on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_2570943032",
			text: "Area contains a Strongbox",
			type: "implicit"
		},
		{
			id: "implicit.stat_452077019",
			text: "Slaying Enemies in a kill streak grants Rampage bonuses",
			type: "implicit"
		},
		{
			id: "implicit.stat_49787903",
			text: "Area contains a Perandus Chest",
			type: "implicit"
		},
		{
			id: "implicit.stat_2878321598",
			text: "Area contains up to 1 Shrine",
			type: "implicit"
		},
		{
			id: "implicit.stat_97115311",
			text: "Magic Monster Packs each have a Bloodline Mod",
			type: "implicit"
		},
		{
			id: "implicit.stat_581013336",
			text: "Area contains an additional Magic Monster pack",
			type: "implicit"
		},
		{
			id: "implicit.stat_3788235244",
			text: "Area has a #% chance to contain Cadiro Perandus",
			type: "implicit"
		},
		{
			id: "implicit.stat_585159631",
			text: "Area contains a Silver Coin",
			type: "implicit"
		},
		{
			id: "implicit.stat_2028847114",
			text: "Curse Enemies with Level # Elemental Weakness on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_1170386874",
			text: "# to Level of Socketed Vaal Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_742529963",
			text: "Bow Attacks fire an additional Arrow",
			type: "implicit"
		},
		{
			id: "implicit.stat_150668988",
			text: "# to Level of Socketed Trap or Mine Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3511815065",
			text: "Grants Level # Clarity Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3441651621",
			text: "# Physical Damage taken from Attack Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_2524254339",
			text: "Culling Strike",
			type: "implicit"
		},
		{
			id: "implicit.stat_674553446",
			text: "Adds # to # Chaos Damage to Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_569299859",
			text: "#% to all maximum Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_2810286377",
			text: "Area contains an additional pack with a Rare monster",
			type: "implicit"
		},
		{
			id: "implicit.stat_2391261970",
			text: "Rare Monsters each have a Nemesis Mod",
			type: "implicit"
		},
		{
			id: "implicit.stat_2223678961",
			text: "Adds # to # Chaos Damage (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_240289863",
			text: "#% to Critical Strike Multiplier during any Flask Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_3433724931",
			text: "Curse Enemies with Level # Temporal Chains on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_1792283443",
			text: "Area is influenced by #",
			type: "implicit",
			option: {
				options: [
					{
						id: "1",
						text: "The Shaper"
					},
					{
						id: "2",
						text: "The Elder"
					}
				]
			}
		},
		{
			id: "implicit.stat_2898434123",
			text: "#% increased Critical Strike Chance during any Flask Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_3849207804",
			text: "Area contains an Invasion Boss",
			type: "implicit"
		},
		{
			id: "implicit.stat_561307714",
			text: "#% Chance to Block Spell Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1277237365",
			text: "Monsters have Onslaught",
			type: "implicit"
		},
		{
			id: "implicit.stat_3513534186",
			text: "Item sells for much more to vendors",
			type: "implicit"
		},
		{
			id: "implicit.stat_105466375",
			text: "Grants Level # Purity of Elements Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_304970526",
			text: "#% increased Movement Speed during any Flask Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_252194507",
			text: "#% increased Cast Speed during any Flask Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_472520716",
			text: "#% of Damage taken gained as Mana over 4 seconds when Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_3753703249",
			text: "Gain #% of Physical Damage as Extra Damage of a random Element",
			type: "implicit"
		},
		{
			id: "implicit.stat_1365052901",
			text: "#% increased Attack Speed during any Flask Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_1509134228",
			text: "#% increased Physical Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2257141320",
			text: "Vaal Skills deal #% increased Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_4247488219",
			text: "Pride has #% increased Aura Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_3336890334",
			text: "Adds # to # Lightning Damage (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_3814876985",
			text: "#% chance to gain a Power Charge on Critical Strike",
			type: "implicit"
		},
		{
			id: "implicit.stat_3023957681",
			text: "#% chance to gain Onslaught for 4 seconds on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_4193390599",
			text: "Grants Level # Purity of Ice Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3822878124",
			text: "Grants Level # Purity of Lightning Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1625819882",
			text: "Curse Enemies with Level # Enfeeble on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_2572042788",
			text: "Attacks have #% to Critical Strike Chance",
			type: "implicit"
		},
		{
			id: "implicit.stat_3943945975",
			text: "Resolute Technique",
			type: "implicit"
		},
		{
			id: "implicit.stat_4015621042",
			text: "#% increased Energy Shield (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_709508406",
			text: "Adds # to # Fire Damage (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_1940865751",
			text: "Adds # to # Physical Damage (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_2839036860",
			text: "#% increased Endurance, Frenzy and Power Charge Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_2764915899",
			text: "Curse Enemies with Level # Despair on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_3815042054",
			text: "#% increased total Recovery per second from Life Leech for each Corrupted Item Equipped",
			type: "implicit"
		},
		{
			id: "implicit.stat_1037193709",
			text: "Adds # to # Cold Damage (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_2896346114",
			text: "Point Blank",
			type: "implicit"
		},
		{
			id: "implicit.stat_2224292784",
			text: "Can have up to # additional Trap placed at a time",
			type: "implicit"
		},
		{
			id: "implicit.stat_791835907",
			text: "Spells have #% to Critical Strike Chance ",
			type: "implicit"
		},
		{
			id: "implicit.stat_4004011170",
			text: "#% increased Chaos Damage for each Corrupted Item Equipped",
			type: "implicit"
		},
		{
			id: "implicit.stat_3970432307",
			text: "Grants Level # Purity of Fire Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_227523295",
			text: "# to Maximum Power Charges",
			type: "implicit"
		},
		{
			id: "implicit.stat_2679819855",
			text: "#% increased total Recovery per second from Mana Leech for each Corrupted Item Equipped",
			type: "implicit"
		},
		{
			id: "implicit.stat_1826802197",
			text: "#% chance to gain a Frenzy Charge on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_2325632050",
			text: "Socketed Gems are supported by Level # Cast On Critical Strike",
			type: "implicit"
		},
		{
			id: "implicit.stat_1783006896",
			text: "#% chance to Avoid being Ignited",
			type: "implicit"
		},
		{
			id: "implicit.stat_4052037485",
			text: "# to maximum Energy Shield (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_1017730114",
			text: "#% of Lightning Damage from Hits taken as Cold Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_4212255859",
			text: "Cannot be Knocked Back",
			type: "implicit"
		},
		{
			id: "implicit.stat_2483795307",
			text: "#% chance to gain a Power Charge on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1166417447",
			text: "Grants Fortify on Melee hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_1871765599",
			text: "#% chance to Avoid being Shocked",
			type: "implicit"
		},
		{
			id: "implicit.stat_350598685",
			text: "# to Weapon range",
			type: "implicit"
		},
		{
			id: "implicit.stat_1054322244",
			text: "#% chance to gain an Endurance Charge on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3582580206",
			text: "#% increased Damage while Dead",
			type: "implicit"
		},
		{
			id: "implicit.stat_2522672898",
			text: "#% of Fire Damage from Hits taken as Cold Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1188846263",
			text: "Grants Level # Haste Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1040269876",
			text: "Adds # to # Lightning Damage to Bow Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_3375859421",
			text: "#% of Lightning Damage from Hits taken as Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_883169830",
			text: "Projectiles deal #% increased Damage for each Enemy Pierced",
			type: "implicit"
		},
		{
			id: "implicit.stat_1874553720",
			text: "#% reduced Chill Duration on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_99927264",
			text: "#% reduced Shock Duration on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_2160282525",
			text: "#% reduced Freeze Duration on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_986397080",
			text: "#% reduced Ignite Duration on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_2106365538",
			text: "#% increased Evasion Rating",
			type: "implicit"
		},
		{
			id: "implicit.stat_215124030",
			text: "Adds # to # Cold Damage to Bow Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_2902845638",
			text: "Projectiles Pierce # additional Targets",
			type: "implicit"
		},
		{
			id: "implicit.stat_1189760108",
			text: "#% of Cold Damage from Hits taken as Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_165218607",
			text: "Hits have #% increased Critical Strike Chance against you",
			type: "implicit"
		},
		{
			id: "implicit.stat_1923210508",
			text: "Projectiles deal #% increased Damage for each time they have Chained",
			type: "implicit"
		},
		{
			id: "implicit.stat_1420170973",
			text: "# Life and Mana gained for each Enemy hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_2865550257",
			text: "Socketed Skill Gems get a #% Mana Multiplier",
			type: "implicit"
		},
		{
			id: "implicit.stat_1079148723",
			text: "Socketed Gems are supported by Level # Cast when Stunned",
			type: "implicit"
		},
		{
			id: "implicit.stat_1313503107",
			text: "#% of Cold Damage from Hits taken as Lightning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_219391121",
			text: "Gain #% of Physical Damage as Extra Lightning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2181129193",
			text: "#% additional Physical Damage Reduction while stationary",
			type: "implicit"
		},
		{
			id: "implicit.stat_461472247",
			text: "Grants Level # Conductivity Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1408638732",
			text: "#% increased Character Size",
			type: "implicit"
		},
		{
			id: "implicit.stat_3855016469",
			text: "You take #% reduced Extra Damage from Critical Strikes",
			type: "implicit"
		},
		{
			id: "implicit.stat_3825877290",
			text: "# to Global Evasion Rating while moving",
			type: "implicit"
		},
		{
			id: "implicit.stat_3736925508",
			text: "Grants Level # Assassin's Mark Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_2166444903",
			text: "#% Chance to Block Attack Damage while Dual Wielding",
			type: "implicit"
		},
		{
			id: "implicit.stat_369494213",
			text: "Gain #% of Physical Damage as Extra Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1169502663",
			text: "Grants Level # Frostbite Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_2841027131",
			text: "Regenerate # Life per second while moving",
			type: "implicit"
		},
		{
			id: "implicit.stat_1514829491",
			text: "#% chance to Avoid being Frozen",
			type: "implicit"
		},
		{
			id: "implicit.stat_2885144362",
			text: "Adds # to # Lightning Damage to Spells and Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_3181974858",
			text: "#% chance to Cause Monsters to Flee",
			type: "implicit"
		},
		{
			id: "implicit.stat_940324562",
			text: "Grants Level # Temporal Chains Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3868549606",
			text: "Gain a Frenzy Charge after Spending a total of 200 Mana",
			type: "implicit"
		},
		{
			id: "implicit.stat_261654754",
			text: "# Cold Damage taken from Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_3237923082",
			text: "Socketed Gems are Supported by Level # Onslaught",
			type: "implicit"
		},
		{
			id: "implicit.stat_2429546158",
			text: "Grants Level # Hatred Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_845428765",
			text: "#% chance to Dodge Attack Hits while moving",
			type: "implicit"
		},
		{
			id: "implicit.stat_3562211447",
			text: "#% chance to gain Unholy Might for 3 seconds on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1504091975",
			text: "#% of Fire Damage from Hits taken as Lightning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_682182849",
			text: "#% chance to Dodge Spell Hits while moving",
			type: "implicit"
		},
		{
			id: "implicit.stat_2410613176",
			text: "Grants Level # Vitality Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_2209668839",
			text: "Grants Level # Flammability Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1662717006",
			text: "Adds # to # Cold Damage to Spells and Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_3964634628",
			text: "Adds # to # Fire Damage to Spells and Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_74338099",
			text: "Skills fire an additional Projectile",
			type: "implicit"
		},
		{
			id: "implicit.stat_2960683632",
			text: "#% reduced Chaos Damage taken",
			type: "implicit"
		},
		{
			id: "implicit.stat_1276918229",
			text: "#% reduced Lightning Damage taken",
			type: "implicit"
		},
		{
			id: "implicit.stat_2551779822",
			text: "# Armour while stationary",
			type: "implicit"
		},
		{
			id: "implicit.stat_1645459191",
			text: "# to Level of Socketed Cold Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_820939409",
			text: "# Mana gained for each Enemy hit by your Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_1811422871",
			text: "Socketed Gems are supported by Level # Melee Splash",
			type: "implicit"
		},
		{
			id: "implicit.stat_2044547677",
			text: "Grants Level # Despair Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_979246511",
			text: "Gain #% of Physical Damage as Extra Cold Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_828179689",
			text: "#% increased Effect of Chill",
			type: "implicit"
		},
		{
			id: "implicit.stat_484879947",
			text: "Grants Level # Anger Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3303114033",
			text: "#% reduced Cold Damage taken",
			type: "implicit"
		},
		{
			id: "implicit.stat_2339757871",
			text: "#% increased Energy Shield Recharge Rate",
			type: "implicit"
		},
		{
			id: "implicit.stat_1573130764",
			text: "Adds # to # Fire Damage to Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_1582887649",
			text: "#% chance to gain an Endurance Charge when you Stun an Enemy",
			type: "implicit"
		},
		{
			id: "implicit.stat_2148556029",
			text: "Grants Level # Malevolence Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1619454789",
			text: "Onslaught",
			type: "implicit"
		},
		{
			id: "implicit.stat_3743301799",
			text: "#% increased Fire Damage taken",
			type: "implicit"
		},
		{
			id: "implicit.stat_2265307453",
			text: "Grants Level # Wrath Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1290399200",
			text: "#% increased Damage with Poison",
			type: "implicit"
		},
		{
			id: "implicit.stat_339179093",
			text: "# to Level of Socketed Fire Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_690707482",
			text: "#% increased Damage with Ailments",
			type: "implicit"
		},
		{
			id: "implicit.stat_1436284579",
			text: "Cannot be Blinded",
			type: "implicit"
		},
		{
			id: "implicit.stat_2866361420",
			text: "#% increased Armour",
			type: "implicit"
		},
		{
			id: "implicit.stat_1263695895",
			text: "#% increased Light Radius",
			type: "implicit"
		},
		{
			id: "implicit.stat_3536689603",
			text: "Grants Level # Projectile Weakness Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3835551335",
			text: "Cannot be Poisoned",
			type: "implicit"
		},
		{
			id: "implicit.stat_3240769289",
			text: "#% of Physical Damage Converted to Lightning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_4291461939",
			text: "Regenerate # Mana per second",
			type: "implicit"
		},
		{
			id: "implicit.stat_107118693",
			text: "Socketed Gems are Supported by Level # Fortify",
			type: "implicit"
		},
		{
			id: "implicit.stat_124859000",
			text: "#% increased Evasion Rating (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_1533563525",
			text: "#% of Physical Damage Converted to Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1175385867",
			text: "#% increased Burning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_53045048",
			text: "# to Evasion Rating (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_174664100",
			text: "Minions have #% increased Movement Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_3591306273",
			text: "#% increased Damage while Leeching Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_2133341901",
			text: "#% of Physical Damage Converted to Cold Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_465051235",
			text: "# Lightning Damage taken from Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_3736589033",
			text: "# to Total Mana Cost of Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_3695891184",
			text: "# Life gained on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3484657501",
			text: "# to Armour (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_3224664127",
			text: "Grants Level # Zealotry Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_4043416969",
			text: "# to Level of Socketed Lightning Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_1062208444",
			text: "#% increased Armour (Local)",
			type: "implicit"
		},
		{
			id: "implicit.stat_2527686725",
			text: "#% increased Effect of Shock",
			type: "implicit"
		},
		{
			id: "implicit.stat_1754445556",
			text: "Adds # to # Lightning Damage to Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_1745952865",
			text: "#% reduced Elemental Ailment Duration on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_614758785",
			text: "# Fire Damage taken from Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_1567462963",
			text: "Socketed Gems are supported by Level # Additional Accuracy",
			type: "implicit"
		},
		{
			id: "implicit.stat_4067062424",
			text: "Adds # to # Cold Damage to Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_1871056256",
			text: "#% of Physical Damage from Hits taken as Cold Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1368271171",
			text: "# Mana gained on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3944782785",
			text: "#% increased Attack Damage against Bleeding Enemies",
			type: "implicit"
		},
		{
			id: "implicit.stat_99089516",
			text: "Socketed Gems are supported by Level # Faster Projectiles",
			type: "implicit"
		},
		{
			id: "implicit.stat_3342989455",
			text: "#% of Physical Damage from Hits taken as Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_4129825612",
			text: "#% of Physical Damage from Hits taken as Chaos Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2223640518",
			text: "Socketed Gems are supported by Level # Blind",
			type: "implicit"
		},
		{
			id: "implicit.stat_2501237765",
			text: "Socketed Gems are supported by Level # Multistrike",
			type: "implicit"
		},
		{
			id: "implicit.stat_3846810663",
			text: "#% reduced Reflected Damage taken",
			type: "implicit"
		},
		{
			id: "implicit.stat_4124805414",
			text: "#% to maximum Chance to Block Attack Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3001376862",
			text: "#% reduced Area Damage taken from Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_1170174456",
			text: "#% increased Endurance Charge Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_1425651005",
			text: "#% reduced Damage taken from Projectiles",
			type: "implicit"
		},
		{
			id: "implicit.stat_737908626",
			text: "#% increased Critical Strike Chance for Spells",
			type: "implicit"
		},
		{
			id: "implicit.stat_496011033",
			text: "# Chaos Damage taken",
			type: "implicit"
		},
		{
			id: "implicit.stat_4253454700",
			text: "#% Chance to Block (Shields)",
			type: "implicit"
		},
		{
			id: "implicit.stat_425242359",
			text: "#% of Physical Damage from Hits taken as Lightning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2881111359",
			text: "#% Chance to Block Spell Damage (Legacy)",
			type: "implicit"
		},
		{
			id: "implicit.stat_458438597",
			text: "#% of Damage is taken from Mana before Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_1787073323",
			text: "Skills Chain # times",
			type: "implicit"
		},
		{
			id: "implicit.stat_4184565463",
			text: "Grants Level # Pride Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3338298622",
			text: "#% increased Frenzy Charge Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_2929101122",
			text: "Socketed Gems are Supported by Level # Elemental Proliferation",
			type: "implicit"
		},
		{
			id: "implicit.stat_3668351662",
			text: "#% increased Shock Duration on Enemies",
			type: "implicit"
		},
		{
			id: "implicit.stat_4262448838",
			text: "#% chance to Avoid being Stunned",
			type: "implicit"
		},
		{
			id: "implicit.stat_3792821911",
			text: "Grants Level # Elemental Weakness Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3594640492",
			text: "Regenerate #% of Energy Shield per second",
			type: "implicit"
		},
		{
			id: "implicit.stat_4293455942",
			text: "Enemies Cannot Leech Life From you",
			type: "implicit"
		},
		{
			id: "implicit.stat_1220361974",
			text: "Killed Enemies Explode, dealing #% of their Life as Physical Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2341269061",
			text: "Grants Level # Discipline Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1396421504",
			text: "#% to Quality of Socketed Melee Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_891277550",
			text: "Socketed Gems are supported by Level # Life Leech",
			type: "implicit"
		},
		{
			id: "implicit.stat_2062753054",
			text: "Socketed Gems are supported by Level # Fork",
			type: "implicit"
		},
		{
			id: "implicit.stat_1294118672",
			text: "#% increased Damage with Bleeding",
			type: "implicit"
		},
		{
			id: "implicit.stat_967627487",
			text: "#% increased Damage over Time",
			type: "implicit"
		},
		{
			id: "implicit.stat_1994684426",
			text: "#% increased Damage while Leeching Mana",
			type: "implicit"
		},
		{
			id: "implicit.stat_2867050084",
			text: "Grants Level # Grace Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_4265392510",
			text: "Grants Level # Determination Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_3759663284",
			text: "#% increased Projectile Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_989800292",
			text: "Regenerate #% of Life per second per Endurance Charge",
			type: "implicit"
		},
		{
			id: "implicit.stat_1954526925",
			text: "Immune to Curses if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_3237948413",
			text: "#% of Physical Attack Damage Leeched as Mana",
			type: "implicit"
		},
		{
			id: "implicit.stat_4154259475",
			text: "# to Level of Socketed Support Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_2877754099",
			text: "#% to Quality of Socketed Dexterity Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3174776455",
			text: "#% to Quality of Socketed Intelligence Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_827329571",
			text: "#% increased Spell Damage per Power Charge",
			type: "implicit"
		},
		{
			id: "implicit.stat_122841557",
			text: "#% to Quality of Socketed Strength Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_2514424018",
			text: "You gain Onslaught for # seconds on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_4064396395",
			text: "Attacks with this Weapon Penetrate #% Elemental Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_3257279374",
			text: "#% increased Damage against Abyssal Monsters",
			type: "implicit"
		},
		{
			id: "implicit.stat_2032386732",
			text: "Socketed Gems are Supported by Level # Life Gain On Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_3922006600",
			text: "Socketed Gems are Supported by Level # Blood Magic",
			type: "implicit"
		},
		{
			id: "implicit.stat_1719423857",
			text: "# to Level of Socketed Intelligence Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3648858570",
			text: "# to # Cold Damage per Frenzy Charge",
			type: "implicit"
		},
		{
			id: "implicit.stat_1618589784",
			text: "#% chance to avoid Bleeding",
			type: "implicit"
		},
		{
			id: "implicit.stat_1962922582",
			text: "#% chance to gain an additional Vaal Soul on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_2122183138",
			text: "# Mana gained when you Block",
			type: "implicit"
		},
		{
			id: "implicit.stat_1866911844",
			text: "Socketed Gems are Supported by Level # Inspiration",
			type: "implicit"
		},
		{
			id: "implicit.stat_3438201750",
			text: "#% chance to Intimidate Enemies for 4 seconds on Hit with Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_770672621",
			text: "Minions have #% increased maximum Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_2718698372",
			text: "# to Level of Socketed Dexterity Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_2428621158",
			text: "#% to Quality of Socketed Projectile Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_803737631",
			text: "# to Accuracy Rating",
			type: "implicit"
		},
		{
			id: "implicit.stat_768982451",
			text: "#% to Quality of Socketed AoE Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_1296614065",
			text: "#% increased Fish Bite Sensitivity",
			type: "implicit"
		},
		{
			id: "implicit.stat_4208096430",
			text: "#% chance to Gain Arcane Surge on Hit with Spells",
			type: "implicit"
		},
		{
			id: "implicit.stat_2169938251",
			text: "Socketed Gems are Supported by Level # Faster Casting",
			type: "implicit"
		},
		{
			id: "implicit.stat_1133016593",
			text: "Adds # to # Fire Damage to Spells",
			type: "implicit"
		},
		{
			id: "implicit.stat_1447222021",
			text: "Grants Level # Vulnerability Skill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1065580342",
			text: "#% to Quality of Socketed Lightning Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_474294393",
			text: "#% reduced Mana Cost of Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_1782086450",
			text: "#% faster start of Energy Shield Recharge",
			type: "implicit"
		},
		{
			id: "implicit.stat_1108755349",
			text: "Socketed Gems are supported by Level # Increased Critical Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2027269580",
			text: "# to Level of Socketed Bow Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3828613551",
			text: "#% to Quality of Socketed Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_1172810729",
			text: "#% chance to deal Double Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_821241191",
			text: "#% increased Life Recovery from Flasks",
			type: "implicit"
		},
		{
			id: "implicit.stat_2831165374",
			text: "Adds # to # Lightning Damage to Spells",
			type: "implicit"
		},
		{
			id: "implicit.stat_2469416729",
			text: "Adds # to # Cold Damage to Spells",
			type: "implicit"
		},
		{
			id: "implicit.stat_2532625478",
			text: "Socketed Gems are supported by Level # Elemental Damage with Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_3492025235",
			text: "Arrows Pierce 1 additional Target",
			type: "implicit"
		},
		{
			id: "implicit.stat_3067892458",
			text: "Triggered Spells deal #% increased Spell Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3422008440",
			text: "#% to Quality of Socketed Fire Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_1702195217",
			text: "#% Chance to Block Attack Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1335054179",
			text: "#% chance to Ignite",
			type: "implicit"
		},
		{
			id: "implicit.stat_4095671657",
			text: "#% to maximum Fire Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_338121249",
			text: "Curse Enemies with Level # Flammability on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_1482572705",
			text: "#% increased Effect of Socketed Jewels",
			type: "implicit"
		},
		{
			id: "implicit.stat_3005472710",
			text: "#% chance to Avoid Elemental Ailments",
			type: "implicit"
		},
		{
			id: "implicit.stat_689720069",
			text: "Socketed Gems are supported by Level # Stun",
			type: "implicit"
		},
		{
			id: "implicit.stat_426847518",
			text: "Curse Enemies with Level # Frostbite on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_1950806024",
			text: "#% to Cold Damage over Time Multiplier",
			type: "implicit"
		},
		{
			id: "implicit.stat_2323242761",
			text: "#% chance to gain a Frenzy Charge on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_2276941637",
			text: "#% to Quality of Socketed Aura Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_2572192375",
			text: "Socketed Gems are Supported by Level # Added Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_762600725",
			text: "# Life gained when you Block",
			type: "implicit"
		},
		{
			id: "implicit.stat_1334060246",
			text: "Adds # to # Lightning Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1030153674",
			text: "Recover #% of Mana on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_2021058489",
			text: "#% chance to Evade Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_1435748744",
			text: "Curse Skills have #% increased Skill Effect Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_860668586",
			text: "#% increased Cold Damage with Attack Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_2320884914",
			text: "#% increased Attack and Cast Speed during Onslaught",
			type: "implicit"
		},
		{
			id: "implicit.stat_3801128794",
			text: "#% increased Damage per 15 Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_3165492062",
			text: "#% increased Vaal Skill Critical Strike Chance",
			type: "implicit"
		},
		{
			id: "implicit.stat_710372469",
			text: "Curse Enemies with Level # Conductivity on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_1423639565",
			text: "Minions have #% to all Elemental Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_149574107",
			text: "Adds # to # Cold Damage to Attacks with this Weapon per 10 Dexterity",
			type: "implicit"
		},
		{
			id: "implicit.stat_1164882313",
			text: "#% to Quality of Socketed Cold Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_1328548975",
			text: "#% to Quality of Socketed Support Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_2894476716",
			text: "Gain an Endurance Charge every second if you've been Hit Recently",
			type: "implicit"
		},
		{
			id: "implicit.stat_3720936304",
			text: "Socketed Gems are Supported by Level # Increased Area of Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_4208907162",
			text: "#% increased Lightning Damage with Attack Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_2479683456",
			text: "Minions Regenerate #% of Life per second",
			type: "implicit"
		},
		{
			id: "implicit.stat_1901158930",
			text: "Bleeding cannot be inflicted on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_3041288981",
			text: "Recover #% of your maximum Mana when you Block",
			type: "implicit"
		},
		{
			id: "implicit.stat_3531280422",
			text: "Adds # to # Chaos Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2011656677",
			text: "#% increased Poison Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_2468413380",
			text: "#% increased Fire Damage with Attack Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_1718147982",
			text: "#% increased Minion Accuracy Rating",
			type: "implicit"
		},
		{
			id: "implicit.stat_2034658008",
			text: "#% increased Damage per Power Charge",
			type: "implicit"
		},
		{
			id: "implicit.stat_1011760251",
			text: "#% to maximum Lightning Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_3741323227",
			text: "#% increased Flask Effect Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_2947215268",
			text: "#% increased Damage during any Flask Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_1712221299",
			text: "#% to Critical Strike Multiplier with Bows",
			type: "implicit"
		},
		{
			id: "implicit.stat_3684879618",
			text: "#% increased Movement Speed while Phasing",
			type: "implicit"
		},
		{
			id: "implicit.stat_3676141501",
			text: "#% to maximum Cold Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_3872306017",
			text: "#% increased Power Charge Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_1653010703",
			text: "#% to Non-Ailment Chaos Damage over Time Multiplier",
			type: "implicit"
		},
		{
			id: "implicit.stat_3759735052",
			text: "#% increased Attack Speed with Bows",
			type: "implicit"
		},
		{
			id: "implicit.stat_767196662",
			text: "#% increased Damage if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_644456512",
			text: "#% reduced Flask Charges used",
			type: "implicit"
		},
		{
			id: "implicit.stat_991194404",
			text: "Regenerate #% of Energy Shield per Second while affected by Discipline",
			type: "implicit"
		},
		{
			id: "implicit.stat_2062835769",
			text: "#% to Quality of Socketed Chaos Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_1896971621",
			text: "#% increased Mine Throwing Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_2023107756",
			text: "Recover #% of Life on Kill",
			type: "implicit"
		},
		{
			id: "implicit.stat_1452809865",
			text: "#% increased Flask Charges gained",
			type: "implicit"
		},
		{
			id: "implicit.stat_3280600715",
			text: "#% to Quality of Socketed Bow Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_2309614417",
			text: "#% chance to Freeze",
			type: "implicit"
		},
		{
			id: "implicit.stat_2675603254",
			text: "# to Level of Socketed Chaos Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_4055307827",
			text: "#% to Chaos Damage over Time Multiplier",
			type: "implicit"
		},
		{
			id: "implicit.stat_3828375170",
			text: "Bleeding you inflict deals Damage #% faster",
			type: "implicit"
		},
		{
			id: "implicit.stat_3764265320",
			text: "#% of Physical Damage Leeched as Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_4053951709",
			text: "#% chance to Avoid being Poisoned",
			type: "implicit"
		},
		{
			id: "implicit.stat_3390848861",
			text: "Adds # to # Lightning Damage to Attacks with this Weapon per 10 Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_402920808",
			text: "#% increased Physical Damage with Bows",
			type: "implicit"
		},
		{
			id: "implicit.stat_1959092146",
			text: "#% increased Chaos Damage with Attack Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_1999711879",
			text: "# to Minimum Power Charges",
			type: "implicit"
		},
		{
			id: "implicit.stat_3761858151",
			text: "#% increased Chaos Damage with Spell Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_169946467",
			text: "#% increased Accuracy Rating with Bows",
			type: "implicit"
		},
		{
			id: "implicit.stat_3666934677",
			text: "#% increased Experience gain",
			type: "implicit"
		},
		{
			id: "implicit.stat_829382474",
			text: "# to Level of Socketed Melee Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3293699237",
			text: "#% increased Attack Speed with Swords",
			type: "implicit"
		},
		{
			id: "implicit.stat_1060540099",
			text: "Adds # to # Fire Damage to Attacks with this Weapon per 10 Strength",
			type: "implicit"
		},
		{
			id: "implicit.stat_3935031607",
			text: "#% increased Lightning Damage with Spell Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_1683578560",
			text: "Unwavering Stance",
			type: "implicit"
		},
		{
			id: "implicit.stat_2266750692",
			text: "#% increased Physical Damage with Attack Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_1430255627",
			text: "#% increased Physical Damage with Spell Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_744082851",
			text: "#% of Chaos Damage Leeched as Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_26867112",
			text: "#% increased Attack and Cast Speed if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_3706959521",
			text: "# to Minimum Endurance Charges",
			type: "implicit"
		},
		{
			id: "implicit.stat_361162316",
			text: "#% increased Fire Damage with Spell Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_658456881",
			text: "# to Minimum Frenzy Charges",
			type: "implicit"
		},
		{
			id: "implicit.stat_2186994986",
			text: "#% increased Cold Damage with Spell Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_1538773178",
			text: "#% chance to Shock",
			type: "implicit"
		},
		{
			id: "implicit.stat_318953428",
			text: "#% chance to Blind Enemies on Hit with Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_1241396104",
			text: "#% to Critical Strike Multiplier with Wands",
			type: "implicit"
		},
		{
			id: "implicit.stat_3289633055",
			text: "Socketed Gems have #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_2907156609",
			text: "Poisons you inflict deal Damage #% faster",
			type: "implicit"
		},
		{
			id: "implicit.stat_1301765461",
			text: "#% to maximum Chaos Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_3188455409",
			text: "Regenerate #% of Mana per second",
			type: "implicit"
		},
		{
			id: "implicit.stat_3720627346",
			text: "#% increased Attack Speed with Wands",
			type: "implicit"
		},
		{
			id: "implicit.stat_1421645223",
			text: "#% increased Attack Speed with Claws",
			type: "implicit"
		},
		{
			id: "implicit.stat_1073942215",
			text: "#% increased Freeze Duration on Enemies",
			type: "implicit"
		},
		{
			id: "implicit.stat_3739863694",
			text: "#% chance to Impale Enemies on Hit with Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_720395808",
			text: "#% of Elemental Damage Leeched as Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_3550868361",
			text: "#% increased Attack Speed with Axes",
			type: "implicit"
		},
		{
			id: "implicit.stat_2451060005",
			text: "You can catch Corrupted Fish",
			type: "implicit"
		},
		{
			id: "implicit.stat_3310914132",
			text: "#% increased Rarity of Fish Caught",
			type: "implicit"
		},
		{
			id: "implicit.stat_660404777",
			text: "#% increased Evasion Rating per Frenzy Charge",
			type: "implicit"
		},
		{
			id: "implicit.stat_1678690824",
			text: "#% increased Spell Damage while Dual Wielding",
			type: "implicit"
		},
		{
			id: "implicit.stat_2538566497",
			text: "#% increased Attack Speed with Daggers",
			type: "implicit"
		},
		{
			id: "implicit.stat_3395908304",
			text: "#% increased Conductivity Curse Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_2066542501",
			text: "#% increased Cast Speed while wielding a Staff",
			type: "implicit"
		},
		{
			id: "implicit.stat_2382196858",
			text: "#% increased Cast Speed while Dual Wielding",
			type: "implicit"
		},
		{
			id: "implicit.stat_2443492284",
			text: "Ignites you inflict deal Damage #% faster",
			type: "implicit"
		},
		{
			id: "implicit.stat_430248187",
			text: "#% increased Area of Effect if you have Stunned an Enemy Recently",
			type: "implicit"
		},
		{
			id: "implicit.stat_34194642",
			text: "#% increased Effect of Auras on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_2769075491",
			text: "#% increased Physical Damage with Wands",
			type: "implicit"
		},
		{
			id: "implicit.stat_1766142294",
			text: "#% increased Spell Damage while holding a Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_3948776386",
			text: "#% increased Damage per 15 Strength",
			type: "implicit"
		},
		{
			id: "implicit.stat_916797432",
			text: "# to Level of Socketed Strength Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3814560373",
			text: "#% increased Physical Damage with Swords",
			type: "implicit"
		},
		{
			id: "implicit.stat_2880601380",
			text: "#% increased Movement Speed if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_2347923784",
			text: "#% increased Attack Damage if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_3802667447",
			text: "#% increased Quantity of Fish Caught",
			type: "implicit"
		},
		{
			id: "implicit.stat_3375935924",
			text: "Minions have #% increased Attack Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_1361343333",
			text: "Regenerate # Mana per Second while Dual Wielding",
			type: "implicit"
		},
		{
			id: "implicit.stat_3496944181",
			text: "#% increased Spell Damage while wielding a Staff",
			type: "implicit"
		},
		{
			id: "implicit.stat_3998601568",
			text: "#% to Critical Strike Multiplier with Daggers",
			type: "implicit"
		},
		{
			id: "implicit.stat_1549898151",
			text: "Grace has #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_2008219439",
			text: "#% increased Physical Damage with Axes",
			type: "implicit"
		},
		{
			id: "implicit.stat_3762868276",
			text: "Regenerate # Mana per Second while holding a Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_2442647190",
			text: "Recover #% of Life when you Block",
			type: "implicit"
		},
		{
			id: "implicit.stat_635761691",
			text: "#% increased Physical Damage with Claws",
			type: "implicit"
		},
		{
			id: "implicit.stat_3629080637",
			text: "#% to Critical Strike Multiplier for Spells while wielding a Staff",
			type: "implicit"
		},
		{
			id: "implicit.stat_3192966873",
			text: "Purity of Ice has #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_4000101551",
			text: "Minions have #% increased Cast Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_1394963553",
			text: "#% increased Attack Speed with Staves",
			type: "implicit"
		},
		{
			id: "implicit.stat_140429540",
			text: "#% increased Critical Strike Chance for Spells while wielding a Staff",
			type: "implicit"
		},
		{
			id: "implicit.stat_1218939541",
			text: "#% increased Critical Strike Chance for Spells while Dual Wielding",
			type: "implicit"
		},
		{
			id: "implicit.stat_2387423236",
			text: "Adds # to # Cold Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3882531569",
			text: "#% increased Physical Damage with Daggers",
			type: "implicit"
		},
		{
			id: "implicit.stat_1609570656",
			text: "#% increased Physical Damage while you have Unholy Might",
			type: "implicit"
		},
		{
			id: "implicit.stat_2515515064",
			text: "#% increased Attack Speed with Maces and Sceptres",
			type: "implicit"
		},
		{
			id: "implicit.stat_2090868905",
			text: "#% increased Accuracy Rating with Swords",
			type: "implicit"
		},
		{
			id: "implicit.stat_1612163368",
			text: "#% increased Cast Speed while holding a Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_310246444",
			text: "#% increased Damage while Leeching",
			type: "implicit"
		},
		{
			id: "implicit.stat_1809006367",
			text: "Totems gain #% to all Elemental Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_1388668644",
			text: "Regenerate # Mana per second while wielding a Staff",
			type: "implicit"
		},
		{
			id: "implicit.stat_2062174346",
			text: "#% increased Damage per 15 Dexterity",
			type: "implicit"
		},
		{
			id: "implicit.stat_4134865890",
			text: "#% increased Attack Damage per 500 Maximum Mana",
			type: "implicit"
		},
		{
			id: "implicit.stat_2538120572",
			text: "#% increased Accuracy Rating with Axes",
			type: "implicit"
		},
		{
			id: "implicit.stat_1459321413",
			text: "#% increased Bleeding Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_2311200892",
			text: "#% to Critical Strike Multiplier for Spells while holding a Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_1923879260",
			text: "Attacks have #% chance to cause Bleeding",
			type: "implicit"
		},
		{
			id: "implicit.stat_2349237916",
			text: "#% to Critical Strike Multiplier for Spells while Dual Wielding",
			type: "implicit"
		},
		{
			id: "implicit.stat_1599775597",
			text: "Gain #% of Fire Damage as Extra Chaos Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_118398748",
			text: "#% increased Trap Throwing Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_3319896421",
			text: "Gain #% of Physical Damage as Extra Chaos Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2811834828",
			text: "#% to Critical Strike Multiplier with Claws",
			type: "implicit"
		},
		{
			id: "implicit.stat_3961014595",
			text: "#% increased Spell Damage per 16 Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_3604946673",
			text: "# to Level of Socketed Minion Gems",
			type: "implicit"
		},
		{
			id: "implicit.stat_3774831856",
			text: "#% increased Physical Damage with Maces and Sceptres",
			type: "implicit"
		},
		{
			id: "implicit.stat_3485067555",
			text: "#% increased Chill Duration on Enemies",
			type: "implicit"
		},
		{
			id: "implicit.stat_1474913037",
			text: "#% to Critical Strike Multiplier with Staves",
			type: "implicit"
		},
		{
			id: "implicit.stat_3114492047",
			text: "#% to Critical Strike Multiplier with Swords",
			type: "implicit"
		},
		{
			id: "implicit.stat_952509814",
			text: "#% increased Critical Strike Chance for Spells while holding a Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_2054715690",
			text: "#% increased Accuracy Rating with Daggers",
			type: "implicit"
		},
		{
			id: "implicit.stat_4219746989",
			text: "#% to Critical Strike Multiplier with Axes",
			type: "implicit"
		},
		{
			id: "implicit.stat_3215042347",
			text: "Purity of Fire has #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_458899422",
			text: "#% to Critical Strike Multiplier with Maces and Sceptres",
			type: "implicit"
		},
		{
			id: "implicit.stat_795138349",
			text: "#% chance to Poison on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_4118987751",
			text: "#% increased Maximum total Recovery per second from Life Leech",
			type: "implicit"
		},
		{
			id: "implicit.stat_2915373966",
			text: "Gain #% of Cold Damage as Extra Chaos Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2150183156",
			text: "#% increased Accuracy Rating with Wands",
			type: "implicit"
		},
		{
			id: "implicit.stat_4223377453",
			text: "#% increased Brand Attachment range",
			type: "implicit"
		},
		{
			id: "implicit.stat_321077055",
			text: "Adds # to # Fire Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1297965523",
			text: "#% increased Accuracy Rating with Claws",
			type: "implicit"
		},
		{
			id: "implicit.stat_2402136583",
			text: "Gain #% of Lightning Damage as Extra Chaos Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1419713278",
			text: "You and nearby Allies deal #% increased Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_2228518621",
			text: "Raised Zombies deal #% increased Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3743375737",
			text: "#% chance to Avoid Cold Damage from Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_280213220",
			text: "#% chance to Taunt Enemies on Hit with Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_3059357595",
			text: "Skeletons deal #% increased Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3555662994",
			text: "#% increased Spell Damage per 500 Maximum Mana",
			type: "implicit"
		},
		{
			id: "implicit.stat_3522931817",
			text: "#% increased Damage taken per 250 Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_11106713",
			text: "#% of Spell Damage Leeched as Energy Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_1443108510",
			text: "#% increased Damage taken per 250 Strength",
			type: "implicit"
		},
		{
			id: "implicit.stat_2477636501",
			text: "#% increased Damage taken per 250 Dexterity",
			type: "implicit"
		},
		{
			id: "implicit.stat_3150705301",
			text: "#% increased Physical Damage with Staves",
			type: "implicit"
		},
		{
			id: "implicit.stat_3374165039",
			text: "#% increased Totem Placement speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_96977651",
			text: "#% increased Maximum total Recovery per second from Mana Leech",
			type: "implicit"
		},
		{
			id: "implicit.stat_1443215722",
			text: "#% increased Frostbite Curse Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_3002506763",
			text: "#% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed",
			type: "implicit"
		},
		{
			id: "implicit.stat_3208450870",
			text: "#% increased Accuracy Rating with Maces and Sceptres",
			type: "implicit"
		},
		{
			id: "implicit.stat_3515686789",
			text: "#% increased Damage per Endurance Charge",
			type: "implicit"
		},
		{
			id: "implicit.stat_2013799819",
			text: "#% increased Maximum total Recovery per second from Energy Shield Leech",
			type: "implicit"
		},
		{
			id: "implicit.stat_3731630482",
			text: "#% to all Elemental Resistances if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_1122074043",
			text: "Vitality has #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_1065909420",
			text: "#% increased Vulnerability Curse Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_1617235962",
			text: "#% increased Accuracy Rating with Staves",
			type: "implicit"
		},
		{
			id: "implicit.stat_42242677",
			text: "#% chance to Avoid Fire Damage from Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_988575597",
			text: "#% increased Energy Shield Recovery rate",
			type: "implicit"
		},
		{
			id: "implicit.stat_158779585",
			text: "#% increased Effect of Fortify on you",
			type: "implicit"
		},
		{
			id: "implicit.stat_2200030809",
			text: "Discipline has #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_1285430327",
			text: "Purity of Lightning has #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_3887484120",
			text: "#% increased maximum Life if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_547412107",
			text: "#% increased Vaal Skill Effect Duration",
			type: "implicit"
		},
		{
			id: "implicit.stat_3909846940",
			text: "Item drops on Death if Equipped by an Animated Guardian",
			type: "implicit"
		},
		{
			id: "implicit.stat_3309607228",
			text: "#% reduced Damage taken if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_902747843",
			text: "#% increased Damage per Frenzy Charge",
			type: "implicit"
		},
		{
			id: "implicit.stat_1086147743",
			text: "#% increased Ignite Duration on Enemies",
			type: "implicit"
		},
		{
			id: "implicit.stat_2813626504",
			text: "Spells have a #% chance to deal Double Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_3871212304",
			text: "Increases and Reductions to Damage of Vaal Skills also apply to Non-Vaal Skills",
			type: "implicit"
		},
		{
			id: "implicit.stat_1025108940",
			text: "#% increased maximum Energy Shield if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_2612056840",
			text: "#% increased Spell Damage per 16 Dexterity",
			type: "implicit"
		},
		{
			id: "implicit.stat_3645693773",
			text: "Spectres have #% increased Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_374116820",
			text: "#% increased Spell Damage if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_327253797",
			text: "#% chance when Hit for double Armour effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_2889664727",
			text: "#% chance to Avoid Lightning Damage from Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_3240073117",
			text: "#% increased Life Recovery rate",
			type: "implicit"
		},
		{
			id: "implicit.stat_3348324479",
			text: "#% increased Elemental Weakness Curse Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_2221570601",
			text: "#% Global chance to Blind Enemies on hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_3743438423",
			text: "#% of Physical Damage is taken from Mana before Life",
			type: "implicit"
		},
		{
			id: "implicit.stat_3296873305",
			text: "Remove Chill and Freeze when you use a Flask",
			type: "implicit"
		},
		{
			id: "implicit.stat_969576725",
			text: "#% chance to Evade Attacks while affected by Grace",
			type: "implicit"
		},
		{
			id: "implicit.stat_818778753",
			text: "Damage Penetrates #% Lightning Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_561861132",
			text: "Remove Shock when you use a Flask",
			type: "implicit"
		},
		{
			id: "implicit.stat_2094281311",
			text: "#% to Animated Guardian Elemental Resistances",
			type: "implicit"
		},
		{
			id: "implicit.stat_282417259",
			text: "#% increased Flammability Curse Effect",
			type: "implicit"
		},
		{
			id: "implicit.stat_67280387",
			text: "Gain #% of Maximum Life as Extra Maximum Energy Shield",
			type: "implicit"
		},
		{
			id: "implicit.stat_2089652545",
			text: "#% chance to Intimidate Enemies for 4 seconds on Hit",
			type: "implicit"
		},
		{
			id: "implicit.stat_4249521944",
			text: "#% increased Spell Damage per 16 Strength",
			type: "implicit"
		},
		{
			id: "implicit.stat_3072232736",
			text: "Determination has #% reduced Mana Reservation",
			type: "implicit"
		},
		{
			id: "implicit.stat_2653955271",
			text: "Damage Penetrates #% Fire Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_2353576063",
			text: "#% increased Effect of your Curses",
			type: "implicit"
		},
		{
			id: "implicit.stat_3980924189",
			text: "#% to maximum Chance to Dodge Spell Hits",
			type: "implicit"
		},
		{
			id: "implicit.stat_4251717817",
			text: "#% increased Area Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_301214136",
			text: "#% to maximum Chance to Dodge Attack Hits",
			type: "implicit"
		},
		{
			id: 'implicit.stat_2818518881',
			text: "#% increased Spell Damage per 10 Intelligence",
			type: "implicit"
		},
		{
			id: "implicit.stat_2388574377",
			text: "#% to maximum Chance to Block Spell Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_1073314277",
			text: "#% increased Spell Damage per 10 Strength",
			type: "implicit"
		},
		{
			id: "implicit.stat_211381198",
			text: "# Energy Shield gained for each Enemy hit by your Attacks",
			type: "implicit"
		},
		{
			id: "implicit.stat_4023723828",
			text: "#% increased Global Critical Strike Chance if Corrupted",
			type: "implicit"
		},
		{
			id: "implicit.stat_1211769158",
			text: "Damage with Weapons Penetrates #% Cold Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_1162425204",
			text: "Remove Ignite and Burning when you use a Flask",
			type: "implicit"
		},
		{
			id: "implicit.stat_3417711605",
			text: "Damage Penetrates #% Cold Resistance",
			type: "implicit"
		},
		{
			id: "implicit.stat_1839076647",
			text: "#% increased Projectile Damage",
			type: "implicit"
		},
		{
			id: "implicit.stat_287491423",
			text: "#% additional Physical Damage Reduction against Abyssal Monsters",
			type: "implicit"
		}
	],
	fractured: [
		{
			id: "fractured.stat_3299347043",
			text: "# to maximum Life",
			type: "fractured"
		},
		{
			id: "fractured.stat_4220027924",
			text: "#% to Cold Resistance",
			type: "fractured"
		},
		{
			id: "fractured.stat_1671376347",
			text: "#% to Lightning Resistance",
			type: "fractured"
		},
		{
			id: "fractured.stat_3372524247",
			text: "#% to Fire Resistance",
			type: "fractured"
		},
		{
			id: "fractured.stat_2511217560",
			text: "#% increased Stun and Block Recovery",
			type: "fractured"
		},
		{
			id: "fractured.stat_1050105434",
			text: "# to maximum Mana",
			type: "fractured"
		},
		{
			id: "fractured.stat_3261801346",
			text: "# to Dexterity",
			type: "fractured"
		},
		{
			id: "fractured.stat_4080418644",
			text: "# to Strength",
			type: "fractured"
		},
		{
			id: "fractured.stat_328541901",
			text: "# to Intelligence",
			type: "fractured"
		},
		{
			id: "fractured.stat_3325883026",
			text: "Regenerate # Life per second",
			type: "fractured"
		},
		{
			id: "fractured.stat_691932474",
			text: "# to Accuracy Rating (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_4052037485",
			text: "# to maximum Energy Shield (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_803737631",
			text: "# to Accuracy Rating",
			type: "fractured"
		},
		{
			id: "fractured.stat_3556824919",
			text: "#% to Global Critical Strike Multiplier",
			type: "fractured"
		},
		{
			id: "fractured.stat_3336890334",
			text: "Adds # to # Lightning Damage (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_210067635",
			text: "#% increased Attack Speed (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_3489782002",
			text: "# to maximum Energy Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_709508406",
			text: "Adds # to # Fire Damage (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_3917489142",
			text: "#% increased Rarity of Items found",
			type: "fractured"
		},
		{
			id: "fractured.stat_1509134228",
			text: "#% increased Physical Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1037193709",
			text: "Adds # to # Cold Damage (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_4015621042",
			text: "#% increased Energy Shield (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_53045048",
			text: "# to Evasion Rating (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_1940865751",
			text: "Adds # to # Physical Damage (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_2375316951",
			text: "#% increased Critical Strike Chance",
			type: "fractured"
		},
		{
			id: "fractured.stat_3484657501",
			text: "# to Armour (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_2517001139",
			text: "#% increased Stun Duration on Enemies",
			type: "fractured"
		},
		{
			id: "fractured.stat_3695891184",
			text: "# Life gained on Kill",
			type: "fractured"
		},
		{
			id: "fractured.stat_3639275092",
			text: "#% increased Attribute Requirements",
			type: "fractured"
		},
		{
			id: "fractured.stat_2250533757",
			text: "#% increased Movement Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_3032590688",
			text: "Adds # to # Physical Damage to Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1368271171",
			text: "# Mana gained on Kill",
			type: "fractured"
		},
		{
			id: "fractured.stat_789117908",
			text: "#% increased Mana Regeneration Rate",
			type: "fractured"
		},
		{
			id: "fractured.stat_1263695895",
			text: "#% increased Light Radius",
			type: "fractured"
		},
		{
			id: "fractured.stat_2923486259",
			text: "#% to Chaos Resistance",
			type: "fractured"
		},
		{
			id: "fractured.stat_2901986750",
			text: "#% to all Elemental Resistances",
			type: "fractured"
		},
		{
			id: "fractured.stat_3767873853",
			text: "Reflects # Physical Damage to Melee Attackers",
			type: "fractured"
		},
		{
			id: "fractured.stat_1379411836",
			text: "# to all Attributes",
			type: "fractured"
		},
		{
			id: "fractured.stat_737908626",
			text: "#% increased Critical Strike Chance for Spells",
			type: "fractured"
		},
		{
			id: "fractured.stat_821021828",
			text: "# Life gained for each Enemy hit by Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2974417149",
			text: "#% increased Spell Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1999113824",
			text: "#% increased Evasion and Energy Shield (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_124859000",
			text: "#% increased Evasion Rating (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_387439868",
			text: "#% increased Elemental Damage with Attack Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_1443060084",
			text: "#% reduced Enemy Stun Threshold",
			type: "fractured"
		},
		{
			id: "fractured.stat_3321629045",
			text: "#% increased Armour and Energy Shield (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_2891184298",
			text: "#% increased Cast Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_1062208444",
			text: "#% increased Armour (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_2451402625",
			text: "#% increased Armour and Evasion (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_1294118672",
			text: "#% increased Damage with Bleeding",
			type: "fractured"
		},
		{
			id: "fractured.stat_3291658075",
			text: "#% increased Cold Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_3962278098",
			text: "#% increased Fire Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2831165374",
			text: "Adds # to # Lightning Damage to Spells",
			type: "fractured"
		},
		{
			id: "fractured.stat_829382474",
			text: "# to Level of Socketed Melee Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_2231156303",
			text: "#% increased Lightning Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1754445556",
			text: "Adds # to # Lightning Damage to Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1573130764",
			text: "Adds # to # Fire Damage to Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1290399200",
			text: "#% increased Damage with Poison",
			type: "fractured"
		},
		{
			id: "fractured.stat_4067062424",
			text: "Adds # to # Cold Damage to Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3593843976",
			text: "#% of Physical Attack Damage Leeched as Life",
			type: "fractured"
		},
		{
			id: "fractured.stat_1133016593",
			text: "Adds # to # Fire Damage to Spells",
			type: "fractured"
		},
		{
			id: "fractured.stat_2469416729",
			text: "Adds # to # Cold Damage to Spells",
			type: "fractured"
		},
		{
			id: "fractured.stat_681332047",
			text: "#% increased Attack Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_587431675",
			text: "#% increased Global Critical Strike Chance",
			type: "fractured"
		},
		{
			id: "fractured.stat_3759663284",
			text: "#% increased Projectile Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_3237948413",
			text: "#% of Physical Attack Damage Leeched as Mana",
			type: "fractured"
		},
		{
			id: "fractured.stat_4043416969",
			text: "# to Level of Socketed Lightning Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_809229260",
			text: "# to Armour",
			type: "fractured"
		},
		{
			id: "fractured.stat_2144192055",
			text: "# to Evasion Rating",
			type: "fractured"
		},
		{
			id: "fractured.stat_624954515",
			text: "#% increased Global Accuracy Rating",
			type: "fractured"
		},
		{
			id: "fractured.stat_2011656677",
			text: "#% increased Poison Duration",
			type: "fractured"
		},
		{
			id: "fractured.stat_3604946673",
			text: "# to Level of Socketed Minion Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_2482852589",
			text: "#% increased maximum Energy Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_1459321413",
			text: "#% increased Bleeding Duration",
			type: "fractured"
		},
		{
			id: "fractured.stat_1519615863",
			text: "#% chance to cause Bleeding on Hit",
			type: "fractured"
		},
		{
			id: "fractured.stat_1175385867",
			text: "#% increased Burning Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2797971005",
			text: "# Life gained for each Enemy hit by your Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1645459191",
			text: "# to Level of Socketed Cold Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_967627487",
			text: "#% increased Damage over Time",
			type: "fractured"
		},
		{
			id: "fractured.stat_339179093",
			text: "# to Level of Socketed Fire Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_3885634897",
			text: "#% chance to Poison on Hit (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_2027269580",
			text: "# to Level of Socketed Bow Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_2866361420",
			text: "#% increased Armour",
			type: "fractured"
		},
		{
			id: "fractured.stat_2106365538",
			text: "#% increased Evasion Rating",
			type: "fractured"
		},
		{
			id: "fractured.stat_1310194496",
			text: "#% increased Global Physical Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2749862839",
			text: "#% chance to Dodge Attack Hits",
			type: "fractured"
		},
		{
			id: "fractured.stat_2675603254",
			text: "# to Level of Socketed Chaos Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_4253454700",
			text: "#% Chance to Block (Shields)",
			type: "fractured"
		},
		{
			id: "fractured.stat_2843100721",
			text: "# to Level of Socketed Gems",
			type: "fractured"
		},
		{
			id: "fractured.stat_3594640492",
			text: "Regenerate #% of Energy Shield per second",
			type: "fractured"
		},
		{
			id: "fractured.stat_2122183138",
			text: "# Mana gained when you Block",
			type: "fractured"
		},
		{
			id: "fractured.stat_983749596",
			text: "#% increased maximum Life",
			type: "fractured"
		},
		{
			id: "fractured.stat_4262448838",
			text: "#% chance to Avoid being Stunned",
			type: "fractured"
		},
		{
			id: "fractured.stat_2309614417",
			text: "#% chance to Freeze",
			type: "fractured"
		},
		{
			id: "fractured.stat_3416410609",
			text: "#% Chance to Block Projectile Attack Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2223678961",
			text: "Adds # to # Chaos Damage (Local)",
			type: "fractured"
		},
		{
			id: "fractured.stat_644456512",
			text: "#% reduced Flask Charges used",
			type: "fractured"
		},
		{
			id: "fractured.stat_4251717817",
			text: "#% increased Area Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2915373966",
			text: "Gain #% of Cold Damage as Extra Chaos Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_3741323227",
			text: "#% increased Flask Effect Duration",
			type: "fractured"
		},
		{
			id: "fractured.stat_1653010703",
			text: "#% to Non-Ailment Chaos Damage over Time Multiplier",
			type: "fractured"
		},
		{
			id: "fractured.stat_3005472710",
			text: "#% chance to Avoid Elemental Ailments",
			type: "fractured"
		},
		{
			id: "fractured.stat_1335054179",
			text: "#% chance to Ignite",
			type: "fractured"
		},
		{
			id: "fractured.stat_2402136583",
			text: "Gain #% of Lightning Damage as Extra Chaos Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_561307714",
			text: "#% Chance to Block Spell Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1599775597",
			text: "Gain #% of Fire Damage as Extra Chaos Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1538773178",
			text: "#% chance to Shock",
			type: "fractured"
		},
		{
			id: "fractured.stat_51994685",
			text: "#% increased Flask Life Recovery rate",
			type: "fractured"
		},
		{
			id: "fractured.stat_1452809865",
			text: "#% increased Flask Charges gained",
			type: "fractured"
		},
		{
			id: "fractured.stat_2672805335",
			text: "#% increased Attack and Cast Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_1040269876",
			text: "Adds # to # Lightning Damage to Bow Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3441501978",
			text: "#% to Fire and Lightning Resistances",
			type: "fractured"
		},
		{
			id: "fractured.stat_696707743",
			text: "#% chance to Dodge Spell Hits",
			type: "fractured"
		},
		{
			id: "fractured.stat_1172029298",
			text: "Minions deal # to # additional Physical Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_3319896421",
			text: "Gain #% of Physical Damage as Extra Chaos Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_3771516363",
			text: "#% additional Physical Damage Reduction",
			type: "fractured"
		},
		{
			id: "fractured.stat_4249220643",
			text: "#% increased Attack Speed while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_2300185227",
			text: "# to Dexterity and Intelligence",
			type: "fractured"
		},
		{
			id: "fractured.stat_215124030",
			text: "Adds # to # Cold Damage to Bow Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_836936635",
			text: "Regenerate #% of Life per second",
			type: "fractured"
		},
		{
			id: "fractured.stat_2915988346",
			text: "#% to Fire and Cold Resistances",
			type: "fractured"
		},
		{
			id: "fractured.stat_1839076647",
			text: "#% increased Projectile Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1535626285",
			text: "# to Strength and Intelligence",
			type: "fractured"
		},
		{
			id: "fractured.stat_4277795662",
			text: "#% to Cold and Lightning Resistances",
			type: "fractured"
		},
		{
			id: "fractured.stat_2154246560",
			text: "#% increased Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1412217137",
			text: "#% increased Flask Mana Recovery rate",
			type: "fractured"
		},
		{
			id: "fractured.stat_538848803",
			text: "# to Strength and Dexterity",
			type: "fractured"
		},
		{
			id: "fractured.stat_3805075944",
			text: "#% increased Attack Speed while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_2561836520",
			text: "Regenerate # Energy Shield per second",
			type: "fractured"
		},
		{
			id: "fractured.stat_3152982863",
			text: "Minions deal # to # additional Cold Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2930653471",
			text: "Minions deal # to # additional Lightning Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_474294393",
			text: "#% reduced Mana Cost of Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_1585344030",
			text: "#% increased Attack Speed if you've dealt a Critical Strike Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_1813451228",
			text: "#% increased Attack Speed with One Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_3023957681",
			text: "#% chance to gain Onslaught for 4 seconds on Kill",
			type: "fractured"
		},
		{
			id: "fractured.stat_3120164895",
			text: "Adds # to # Fire Damage to Bow Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3550868361",
			text: "#% increased Attack Speed with Axes",
			type: "fractured"
		},
		{
			id: "fractured.stat_3351784991",
			text: "Minions deal # to # additional Fire Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2889601781",
			text: "Minions deal # to # additional Chaos Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_2748665614",
			text: "#% increased maximum Mana",
			type: "fractured"
		},
		{
			id: "fractured.stat_2918708827",
			text: "#% chance to gain Phasing for 4 seconds on Kill",
			type: "fractured"
		},
		{
			id: "fractured.stat_1002362373",
			text: "#% increased Melee Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_4291461939",
			text: "Regenerate # Mana per second",
			type: "fractured"
		},
		{
			id: "fractured.stat_2435536961",
			text: "Adds # to # Physical Damage to Spells",
			type: "fractured"
		},
		{
			id: "fractured.stat_915908446",
			text: "#% to Critical Strike Multiplier with Cold Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_2941585404",
			text: "#% increased Trap Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_3141070085",
			text: "#% increased Elemental Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_287491423",
			text: "#% additional Physical Damage Reduction against Abyssal Monsters",
			type: "fractured"
		},
		{
			id: "fractured.stat_762600725",
			text: "# Life gained when you Block",
			type: "fractured"
		},
		{
			id: "fractured.stat_3293699237",
			text: "#% increased Attack Speed with Swords",
			type: "fractured"
		},
		{
			id: "fractured.stat_674553446",
			text: "Adds # to # Chaos Damage to Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2307547323",
			text: "#% to Critical Strike Multiplier with Fire Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_2441475928",
			text: "#% to Critical Strike Multiplier with Lightning Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_1917910910",
			text: "#% increased Attack Speed with Two Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_3851254963",
			text: "#% increased Totem Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1923879260",
			text: "Attacks have #% chance to cause Bleeding",
			type: "fractured"
		},
		{
			id: "fractured.stat_455556407",
			text: "Damage Penetrates #% Elemental Resistance if you haven't Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_2787733863",
			text: "Adds # to # Lightning Damage to Wand Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2300399854",
			text: "Adds # to # Chaos Damage to Spells",
			type: "fractured"
		},
		{
			id: "fractured.stat_1073942215",
			text: "#% increased Freeze Duration on Enemies",
			type: "fractured"
		},
		{
			id: "fractured.stat_3854949926",
			text: "#% increased Movement Speed if you haven't taken Damage Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_2546185479",
			text: "#% to Critical Strike Multiplier while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_770672621",
			text: "Minions have #% increased maximum Life",
			type: "fractured"
		},
		{
			id: "fractured.stat_2843214518",
			text: "#% increased Attack Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1760576992",
			text: "Adds # to # Physical Damage to Bow Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3257279374",
			text: "#% increased Damage against Abyssal Monsters",
			type: "fractured"
		},
		{
			id: "fractured.stat_2937483991",
			text: "#% to Critical Strike Multiplier if you've Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_908516597",
			text: "Regenerate #% of Life per second while moving",
			type: "fractured"
		},
		{
			id: "fractured.stat_1766142294",
			text: "#% increased Spell Damage while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_2137912951",
			text: "#% increased Mine Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_1237708713",
			text: "Adds # to # Lightning Damage to Sword Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_4055307827",
			text: "#% to Chaos Damage over Time Multiplier",
			type: "fractured"
		},
		{
			id: "fractured.stat_734823525",
			text: "#% increased Evasion Rating while moving",
			type: "fractured"
		},
		{
			id: "fractured.stat_938645499",
			text: "#% Chance to Block Spell Damage while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_1086147743",
			text: "#% increased Ignite Duration on Enemies",
			type: "fractured"
		},
		{
			id: "fractured.stat_138741818",
			text: "#% Chance to Block Spell Damage while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_1186596295",
			text: "#% increased Critical Strike Chance with Lightning Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_1174076861",
			text: "#% increased Cast Speed if you've dealt a Critical Strike Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_3278968597",
			text: "#% chance to Dodge Attack and Spell Hits if you've\nbeen Hit Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_3668351662",
			text: "#% increased Shock Duration on Enemies",
			type: "fractured"
		},
		{
			id: "fractured.stat_4061558269",
			text: "#% Chance to Block Attack Damage while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_1101206134",
			text: "#% Chance to Block Spell Damage if you were Damaged by a Hit Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_318953428",
			text: "#% chance to Blind Enemies on Hit with Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_4193088553",
			text: "#% increased Damage over Time while wielding a Two Handed Weapon",
			type: "fractured"
		},
		{
			id: "fractured.stat_3759735052",
			text: "#% increased Attack Speed with Bows",
			type: "fractured"
		},
		{
			id: "fractured.stat_670153687",
			text: "#% to Critical Strike Multiplier with One Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_4237442815",
			text: "#% to Melee Critical Strike Multiplier",
			type: "fractured"
		},
		{
			id: "fractured.stat_1104796138",
			text: "#% increased Critical Strike Chance with Fire Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_2856328513",
			text: "#% increased Critical Strike Chance if you haven't dealt a Critical Strike Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_2166444903",
			text: "#% Chance to Block Attack Damage while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_736967255",
			text: "#% increased Chaos Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_795138349",
			text: "#% chance to Poison on Hit",
			type: "fractured"
		},
		{
			id: "fractured.stat_1072119541",
			text: "#% increased Damage if you've Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_2383797932",
			text: "Adds # to # Cold Damage to Wand Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_972201717",
			text: "Adds # to # Cold Damage to Sword Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_83050999",
			text: "#% increased Damage with Swords",
			type: "fractured"
		},
		{
			id: "fractured.stat_1421645223",
			text: "#% increased Attack Speed with Claws",
			type: "fractured"
		},
		{
			id: "fractured.stat_4231842891",
			text: "Adds # to # Lightning Damage to Claw Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_977908611",
			text: "#% chance to Knock Enemies Back on hit",
			type: "fractured"
		},
		{
			id: "fractured.stat_1569407745",
			text: "#% to Critical Strike Multiplier with Elemental Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_928238845",
			text: "#% increased Cast Speed with Cold Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_3603666270",
			text: "#% additional Physical Damage Reduction if you weren't Damaged by a Hit Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_1589917703",
			text: "Minions deal #% increased Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_252507949",
			text: "#% to Critical Strike Multiplier with Two Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_1950806024",
			text: "#% to Cold Damage over Time Multiplier",
			type: "fractured"
		},
		{
			id: "fractured.stat_279227559",
			text: "#% increased Movement Speed if you've Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_1678690824",
			text: "#% increased Spell Damage while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_1788635023",
			text: "#% increased Cast Speed with Lightning Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_686254215",
			text: "#% increased Totem Life",
			type: "fractured"
		},
		{
			id: "fractured.stat_2096159630",
			text: "Adds # to # Lightning Damage to Mace and Sceptre Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1327522346",
			text: "#% increased Mana Regeneration Rate while moving",
			type: "fractured"
		},
		{
			id: "fractured.stat_2323739383",
			text: "Minions have #% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_2464689927",
			text: "Adds # to # Cold Damage to Spells while wielding a Two Handed Weapon",
			type: "fractured"
		},
		{
			id: "fractured.stat_1782176131",
			text: "Adds # to # Cold Damage to Axe Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_214001793",
			text: "#% increased Damage over Time while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_2382196858",
			text: "#% increased Cast Speed while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_3337344042",
			text: "#% increased Critical Strike Chance with Cold Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_2515515064",
			text: "#% increased Attack Speed with Maces and Sceptres",
			type: "fractured"
		},
		{
			id: "fractured.stat_1244360317",
			text: "#% increased Damage over Time while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_87098247",
			text: "Adds # to # Fire Damage to Wand Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3702513529",
			text: "#% increased Weapon Critical Strike Chance while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_1809006367",
			text: "Totems gain #% to all Elemental Resistances",
			type: "fractured"
		},
		{
			id: "fractured.stat_3479683016",
			text: "Adds # to # Lightning Damage to Dagger Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2848646243",
			text: "Adds # to # Cold Damage to Claw Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_187418672",
			text: "Adds # to # Cold Damage to Mace and Sceptre Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1274831335",
			text: "#% increased Physical Weapon Damage while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_1612163368",
			text: "#% increased Cast Speed while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_1334465904",
			text: "#% increased Physical Damage with One Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_852195286",
			text: "#% Chance to Block Attack Damage if you were Damaged by a Hit Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_3146788701",
			text: "Adds # to # Fire Damage to Mace and Sceptre Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_4000101551",
			text: "Minions have #% increased Cast Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_4255924189",
			text: "Adds # to # Physical Damage to Spells while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_3352373076",
			text: "Adds # to # Lightning Damage to Spells while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_3375935924",
			text: "Minions have #% increased Attack Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_1582068183",
			text: "Adds # to # Lightning Damage to Axe Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3062329212",
			text: "Minions Regenerate # Life per second",
			type: "fractured"
		},
		{
			id: "fractured.stat_3496944181",
			text: "#% increased Spell Damage while wielding a Staff",
			type: "fractured"
		},
		{
			id: "fractured.stat_2154290807",
			text: "Adds # to # Fire Damage to Claw Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1423639565",
			text: "Minions have #% to all Elemental Resistances",
			type: "fractured"
		},
		{
			id: "fractured.stat_1782086450",
			text: "#% faster start of Energy Shield Recharge",
			type: "fractured"
		},
		{
			id: "fractured.stat_1263342750",
			text: "Adds # to # Cold Damage to Dagger Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1476643878",
			text: "#% increased Cast Speed with Fire Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_3501769159",
			text: "#% increased Melee Physical Damage while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_2008219439",
			text: "#% increased Physical Damage with Axes",
			type: "fractured"
		},
		{
			id: "fractured.stat_1910361436",
			text: "Adds # to # Fire Damage to Dagger Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1199429645",
			text: "#% increased Melee Critical Strike Chance",
			type: "fractured"
		},
		{
			id: "fractured.stat_1783006896",
			text: "#% chance to Avoid being Ignited",
			type: "fractured"
		},
		{
			id: "fractured.stat_3220927448",
			text: "Adds # to # Fire Damage to Staff Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2431643207",
			text: "Minions have #% chance to Blind on Hit with Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_601249293",
			text: "Adds # to # Fire Damage to Sword Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_274716455",
			text: "#% to Critical Strike Multiplier for Spells",
			type: "fractured"
		},
		{
			id: "fractured.stat_2398198236",
			text: "Adds # to # Lightning Damage to Spells while wielding a Two Handed Weapon",
			type: "fractured"
		},
		{
			id: "fractured.stat_2538566497",
			text: "#% increased Attack Speed with Daggers",
			type: "fractured"
		},
		{
			id: "fractured.stat_3814560373",
			text: "#% increased Physical Damage with Swords",
			type: "fractured"
		},
		{
			id: "fractured.stat_211381198",
			text: "# Energy Shield gained for each Enemy hit by your Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2120297997",
			text: "#% Chance to Block Spell Damage while wielding a Staff",
			type: "fractured"
		},
		{
			id: "fractured.stat_412745376",
			text: "Minions deal #% increased Damage if you've used a Minion Skill Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_2381842786",
			text: "#% increased Critical Strike Chance with One Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_4227567885",
			text: "Minions have #% increased Attack and Cast Speed if you or your Minions have Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_2921084940",
			text: "Adds # to # Physical Damage to Spells while wielding a Two Handed Weapon",
			type: "fractured"
		},
		{
			id: "fractured.stat_1871765599",
			text: "#% chance to Avoid being Shocked",
			type: "fractured"
		},
		{
			id: "fractured.stat_118398748",
			text: "#% increased Trap Throwing Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_1261958804",
			text: "Adds # to # Cold Damage to Staff Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_662691280",
			text: "Adds # to # Fire Damage to Spells while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_1394963553",
			text: "#% increased Attack Speed with Staves",
			type: "fractured"
		},
		{
			id: "fractured.stat_2424133568",
			text: "#% increased Armour if you haven't Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_44182350",
			text: "Adds # to # Fire Damage to Spells while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_3483999943",
			text: "#% chance to Avoid being Chilled",
			type: "fractured"
		},
		{
			id: "fractured.stat_1836374041",
			text: "#% increased Damage with Two Handed Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_1778298516",
			text: "#% Chance to Block Attack Damage while wielding a Staff",
			type: "fractured"
		},
		{
			id: "fractured.stat_1865428306",
			text: "Adds # to # Chaos Damage to Spells while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_1514829491",
			text: "#% chance to Avoid being Frozen",
			type: "fractured"
		},
		{
			id: "fractured.stat_2339757871",
			text: "#% increased Energy Shield Recharge Rate",
			type: "fractured"
		},
		{
			id: "fractured.stat_1618589784",
			text: "#% chance to avoid Bleeding",
			type: "fractured"
		},
		{
			id: "fractured.stat_3720627346",
			text: "#% increased Attack Speed with Wands",
			type: "fractured"
		},
		{
			id: "fractured.stat_4053951709",
			text: "#% chance to Avoid being Poisoned",
			type: "fractured"
		},
		{
			id: "fractured.stat_1086057912",
			text: "Minions deal #% increased Damage against Abyssal Monsters",
			type: "fractured"
		},
		{
			id: "fractured.stat_2671663397",
			text: "Adds # to # Cold Damage to Spells while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_2461965653",
			text: "Adds # to # Fire Damage to Axe Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1896971621",
			text: "#% increased Mine Throwing Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_1010549321",
			text: "#% increased Damage with One Handed Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_3376452528",
			text: "Adds # to # Cold Damage to Spells while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_2135335407",
			text: "Adds # to # Fire Damage to Spells while wielding a Two Handed Weapon",
			type: "fractured"
		},
		{
			id: "fractured.stat_1743759111",
			text: "Adds # to # Chaos Damage to Spells while wielding a Two Handed Weapon",
			type: "fractured"
		},
		{
			id: "fractured.stat_2066542501",
			text: "#% increased Cast Speed while wielding a Staff",
			type: "fractured"
		},
		{
			id: "fractured.stat_3212481075",
			text: "Adds # to # Lightning Damage to Staff Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1801889979",
			text: "Adds # to # Lightning Damage to Spells while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_3314142259",
			text: "#% increased Damage with Axes",
			type: "fractured"
		},
		{
			id: "fractured.stat_2479683456",
			text: "Minions Regenerate #% of Life per second",
			type: "fractured"
		},
		{
			id: "fractured.stat_3954157711",
			text: "Adds # to # Physical Damage to Spells while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_3110907148",
			text: "#% increased Cast Speed if a Minion has been Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_444174528",
			text: "#% increased Weapon Damage while Dual Wielding",
			type: "fractured"
		},
		{
			id: "fractured.stat_2911442053",
			text: "Minions have #% chance to Taunt on Hit with Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2056783069",
			text: "#% increased Physical Damage with Two Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_764295120",
			text: "#% increased Critical Strike Chance with Two Handed Melee Weapons",
			type: "fractured"
		},
		{
			id: "fractured.stat_1040189894",
			text: "Adds # to # Physical Damage to Sword Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2806435316",
			text: "#% increased Accuracy Rating if you haven't Killed Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_3166317791",
			text: "#% chance to Gain Unholy Might for 4 seconds on Melee Kill",
			type: "fractured"
		},
		{
			id: "fractured.stat_3002506763",
			text: "#% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_2810434465",
			text: "Gain #% of Physical Damage as Extra Fire Damage if you've dealt a Critical Strike Recently",
			type: "fractured"
		},
		{
			id: "fractured.stat_820939409",
			text: "# Mana gained for each Enemy hit by your Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3303015",
			text: "Adds # to # Physical Damage to Claw Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_2527686725",
			text: "#% increased Effect of Shock",
			type: "fractured"
		},
		{
			id: "fractured.stat_3882662078",
			text: "Adds # to # Physical Damage to Mace and Sceptre Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_311030839",
			text: "Adds # to # Physical Damage to Axe Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_439950087",
			text: "#% increased Critical Strike Chance with Elemental Skills",
			type: "fractured"
		},
		{
			id: "fractured.stat_3837707023",
			text: "Minions have #% to Chaos Resistance",
			type: "fractured"
		},
		{
			id: "fractured.stat_133683091",
			text: "Adds # to # Physical Damage to Wand Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_1393393937",
			text: "#% increased Attack Damage while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_69898010",
			text: "Adds # to # Physical Damage to Staff Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3374054207",
			text: "Minions have #% Chance to Block Attack Damage",
			type: "fractured"
		},
		{
			id: "fractured.stat_280213220",
			text: "#% chance to Taunt Enemies on Hit with Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3586984690",
			text: "#% increased Damage with Daggers",
			type: "fractured"
		},
		{
			id: "fractured.stat_635761691",
			text: "#% increased Physical Damage with Claws",
			type: "fractured"
		},
		{
			id: "fractured.stat_379328644",
			text: "#% increased Damage with Wands",
			type: "fractured"
		},
		{
			id: "fractured.stat_1181129483",
			text: "Adds # to # Chaos Damage to Spells while holding a Shield",
			type: "fractured"
		},
		{
			id: "fractured.stat_2770782267",
			text: "Minions Leech #% of Damage as Life",
			type: "fractured"
		},
		{
			id: "fractured.stat_2769075491",
			text: "#% increased Physical Damage with Wands",
			type: "fractured"
		},
		{
			id: "fractured.stat_174664100",
			text: "Minions have #% increased Movement Speed",
			type: "fractured"
		},
		{
			id: "fractured.stat_828179689",
			text: "#% increased Effect of Chill",
			type: "fractured"
		},
		{
			id: "fractured.stat_4188894176",
			text: "#% increased Damage with Bows",
			type: "fractured"
		},
		{
			id: "fractured.stat_1181419800",
			text: "#% increased Damage with Maces and Sceptres",
			type: "fractured"
		},
		{
			id: "fractured.stat_1069260037",
			text: "#% increased Damage with Claws",
			type: "fractured"
		},
		{
			id: "fractured.stat_4087089130",
			text: "#% increased Damage with Staves",
			type: "fractured"
		},
		{
			id: "fractured.stat_1298238534",
			text: "Adds # to # Physical Damage to Dagger Attacks",
			type: "fractured"
		},
		{
			id: "fractured.stat_3150705301",
			text: "#% increased Physical Damage with Staves",
			type: "fractured"
		},
		{
			id: "fractured.stat_402920808",
			text: "#% increased Physical Damage with Bows",
			type: "fractured"
		},
		{
			id: "fractured.stat_3774831856",
			text: "#% increased Physical Damage with Maces and Sceptres",
			type: "fractured"
		},
		{
			id: "fractured.stat_3882531569",
			text: "#% increased Physical Damage with Daggers",
			type: "fractured"
		}
	],
	enchant: [
		{
			id: "enchant.stat_2954116742",
			text: "Allocates #",
			type: "enchant",
			option: {
				options: [
					{
						id: 30439,
						text: "Lava Lash"
					},
					{
						id: 65224,
						text: "Aspect of the Eagle"
					},
					{
						id: 27301,
						text: "Martial Experience"
					},
					{
						id: 42804,
						text: "Mind Drinker"
					},
					{
						id: 11730,
						text: "Endurance"
					},
					{
						id: 36949,
						text: "Devotion"
					},
					{
						id: 20832,
						text: "Sanctuary"
					},
					{
						id: 14606,
						text: "Butchery"
					},
					{
						id: 35663,
						text: "Strong Arm"
					},
					{
						id: 49318,
						text: "Wrecking Ball"
					},
					{
						id: 10016,
						text: "Executioner"
					},
					{
						id: 3184,
						text: "Bane of Legends"
					},
					{
						id: 17315,
						text: "Overwhelm"
					},
					{
						id: 62817,
						text: "Headsman"
					},
					{
						id: 34484,
						text: "Endless Hunger"
					},
					{
						id: 10143,
						text: "Brutal Fervour"
					},
					{
						id: 38180,
						text: "Impact"
					},
					{
						id: 16306,
						text: "Masterful Form"
					},
					{
						id: 42917,
						text: "Whirling Barrier"
					},
					{
						id: 51559,
						text: "Smashing Strikes"
					},
					{
						id: 39761,
						text: "Counterweight"
					},
					{
						id: 10542,
						text: "Diamond Skin"
					},
					{
						id: 31033,
						text: "Solidity"
					},
					{
						id: 27137,
						text: "Sanctum of Thought"
					},
					{
						id: 63150,
						text: "Ironwood"
					},
					{
						id: 544,
						text: "Surveillance"
					},
					{
						id: 61039,
						text: "Panopticon"
					},
					{
						id: 44207,
						text: "Testudo"
					},
					{
						id: 12878,
						text: "Retaliation"
					},
					{
						id: 25367,
						text: "Blade Master"
					},
					{
						id: 33082,
						text: "Razor's Edge"
					},
					{
						id: 22972,
						text: "Wandslinger"
					},
					{
						id: 16703,
						text: "Skull Cracking"
					},
					{
						id: 40645,
						text: "Bone Breaker"
					},
					{
						id: 24721,
						text: "Ribcage Crusher"
					},
					{
						id: 58218,
						text: "Purity of Flesh"
					},
					{
						id: 15085,
						text: "Ambidexterity"
					},
					{
						id: 54268,
						text: "Blade Barrier"
					},
					{
						id: 53493,
						text: "Annihilation"
					},
					{
						id: 60619,
						text: "Galvanic Hammer"
					},
					{
						id: 39657,
						text: "Pain Forger"
					},
					{
						id: 42009,
						text: "Soul of Steel"
					},
					{
						id: 25058,
						text: "Blood Siphon"
					},
					{
						id: 52157,
						text: "Soul Siphon"
					},
					{
						id: 20528,
						text: "Instability"
					},
					{
						id: 23038,
						text: "Slaughter"
					},
					{
						id: 4940,
						text: "Cleaving"
					},
					{
						id: 33725,
						text: "Swagger"
					},
					{
						id: 26096,
						text: "Hatchet Master"
					},
					{
						id: 30160,
						text: "Fending"
					},
					{
						id: 63921,
						text: "Utmost Swiftness"
					},
					{
						id: 26023,
						text: "Splitting Strikes"
					},
					{
						id: 56716,
						text: "Heart of Thunder"
					},
					{
						id: 11645,
						text: "Breath of Lightning"
					},
					{
						id: 58449,
						text: "Born to Fight"
					},
					{
						id: 54776,
						text: "Mana Flows"
					},
					{
						id: 48438,
						text: "Bravery"
					},
					{
						id: 30225,
						text: "Lightning Walker"
					},
					{
						id: 34661,
						text: "Fire Walker"
					},
					{
						id: 44955,
						text: "Frost Walker"
					},
					{
						id: 54791,
						text: "Claws of the Magpie"
					},
					{
						id: 28503,
						text: "Soul Raker"
					},
					{
						id: 15614,
						text: "Claws of the Hawk"
					},
					{
						id: 12702,
						text: "Path of the Warrior"
					},
					{
						id: 55485,
						text: "Constitution"
					},
					{
						id: 37326,
						text: "Stamina"
					},
					{
						id: 44788,
						text: "Aligned Spirits"
					},
					{
						id: 24383,
						text: "Warrior's Blood"
					},
					{
						id: 4833,
						text: "Vigour"
					},
					{
						id: 14813,
						text: "Revelry"
					},
					{
						id: 36687,
						text: "Avatar of the Hunt"
					},
					{
						id: 16243,
						text: "Fusillade"
					},
					{
						id: 41476,
						text: "Elder Power"
					},
					{
						id: 52031,
						text: "Disintegration"
					},
					{
						id: 7085,
						text: "Weapon Artistry"
					},
					{
						id: 31508,
						text: "Aspect of the Lynx"
					},
					{
						id: 24256,
						text: "Dynamo"
					},
					{
						id: 63422,
						text: "Lust for Carnage"
					},
					{
						id: 38516,
						text: "Righteous Decree"
					},
					{
						id: 50858,
						text: "Battle Cry"
					},
					{
						id: 2225,
						text: "Eagle Eye"
					},
					{
						id: 64395,
						text: "Blunt Trauma"
					},
					{
						id: 56094,
						text: "One with the River"
					},
					{
						id: 6289,
						text: "Bloodless"
					},
					{
						id: 1340,
						text: "Rampart"
					},
					{
						id: 51748,
						text: "Cursed Concoction"
					},
					{
						id: 38922,
						text: "Stun Mastery"
					},
					{
						id: 56276,
						text: "Nightstalker"
					},
					{
						id: 33545,
						text: "Harrier"
					},
					{
						id: 53802,
						text: "Essence Extraction"
					},
					{
						id: 21413,
						text: "Combat Stamina"
					},
					{
						id: 26557,
						text: "Static Blows"
					},
					{
						id: 3452,
						text: "Foresight"
					},
					{
						id: 48298,
						text: "Insightfulness"
					},
					{
						id: 63944,
						text: "Prism Weave"
					},
					{
						id: 57199,
						text: "Fangs of Frost"
					},
					{
						id: 32345,
						text: "Alacrity"
					},
					{
						id: 20835,
						text: "Brinkmanship"
					},
					{
						id: 6615,
						text: "Arcing Blows"
					},
					{
						id: 7555,
						text: "Crackling Speed"
					},
					{
						id: 63207,
						text: "Tempest Blast"
					},
					{
						id: 10511,
						text: "Singular Focus"
					},
					{
						id: 38849,
						text: "Searing Heat"
					},
					{
						id: 19897,
						text: "Death Attunement"
					},
					{
						id: 36490,
						text: "Flaying"
					},
					{
						id: 8920,
						text: "Backstabbing"
					},
					{
						id: 47471,
						text: "Overcharged"
					},
					{
						id: 19506,
						text: "Path of the Hunter"
					},
					{
						id: 56648,
						text: "Claws of the Falcon"
					},
					{
						id: 65053,
						text: "Essence Sap"
					},
					{
						id: 61982,
						text: "Grave Intentions"
					},
					{
						id: 36915,
						text: "Sacrifice"
					},
					{
						id: 42649,
						text: "Snowforged"
					},
					{
						id: 27611,
						text: "Lord of the Dead"
					},
					{
						id: 27308,
						text: "Gravepact"
					},
					{
						id: 50029,
						text: "Unnatural Calm"
					},
					{
						id: 21634,
						text: "Arcane Chemistry"
					},
					{
						id: 34173,
						text: "Overcharge"
					},
					{
						id: 35958,
						text: "Faith and Steel"
					},
					{
						id: 63357,
						text: "Path of the Duelist"
					},
					{
						id: 24798,
						text: "Duelist Ascendancy"
					},
					{
						id: 58198,
						text: "Fingers of Frost"
					},
					{
						id: 60501,
						text: "Heart of Flame"
					},
					{
						id: 11924,
						text: "Breath of Flames"
					},
					{
						id: 2550,
						text: "Arsonist"
					},
					{
						id: 5430,
						text: "Magmatic Strikes"
					},
					{
						id: 62577,
						text: "Essence Surge"
					},
					{
						id: 37078,
						text: "Path of the Savant"
					},
					{
						id: 8833,
						text: "Heart of Ice"
					},
					{
						id: 21460,
						text: "Breath of Rime"
					},
					{
						id: 25411,
						text: "Infused"
					},
					{
						id: 32176,
						text: "Soul Thief"
					},
					{
						id: 29049,
						text: "Holy Fire"
					},
					{
						id: 46842,
						text: "Arcane Potency"
					},
					{
						id: 61308,
						text: "Amplify"
					},
					{
						id: 24362,
						text: "Deep Thoughts"
					},
					{
						id: 21958,
						text: "Cruel Preparation"
					},
					{
						id: 21330,
						text: "Quick Recovery"
					},
					{
						id: 4242,
						text: "Unstable Infusion"
					},
					{
						id: 48239,
						text: "Deadly Infusion"
					},
					{
						id: 21264,
						text: "Ambush and Assassinate"
					},
					{
						id: 19083,
						text: "Opportunistic"
					},
					{
						id: 19598,
						text: "Toxic Delivery"
					},
					{
						id: 1945,
						text: "Noxious Strike"
					},
					{
						id: 28782,
						text: "Mistwalker"
					},
					{
						id: 10835,
						text: "Dreamer"
					},
					{
						id: 42795,
						text: "Arcane Focus"
					},
					{
						id: 27163,
						text: "Arcane Will"
					},
					{
						id: 47306,
						text: "Throatseeker"
					},
					{
						id: 9788,
						text: "Nimbleness"
					},
					{
						id: 62094,
						text: "Lucidity"
					},
					{
						id: 9432,
						text: "Mental Rapidity"
					},
					{
						id: 26620,
						text: "Corruption"
					},
					{
						id: 9261,
						text: "Disciple of the Forbidden"
					},
					{
						id: 11784,
						text: "Gemini"
					},
					{
						id: 45067,
						text: "Thrill Seeker"
					},
					{
						id: 1006,
						text: "Potency of Will"
					},
					{
						id: 53042,
						text: "Exceptional Performance"
					},
					{
						id: 15842,
						text: "Precise Interception"
					},
					{
						id: 38246,
						text: "Aspect of the Panther"
					},
					{
						id: 21973,
						text: "Decay Ward"
					},
					{
						id: 56359,
						text: "Red Storm"
					},
					{
						id: 32227,
						text: "Adder's Touch"
					},
					{
						id: 59151,
						text: "Brutal Blade"
					},
					{
						id: 1568,
						text: "Fatal Blade"
					},
					{
						id: 529,
						text: "Poisonous Fangs"
					},
					{
						id: 7136,
						text: "Master Sapper"
					},
					{
						id: 1405,
						text: "From the Shadows"
					},
					{
						id: 37504,
						text: "Claws of the Pride"
					},
					{
						id: 42720,
						text: "Heavy Draw"
					},
					{
						id: 48823,
						text: "Deadly Draw"
					},
					{
						id: 49459,
						text: "King of the Hill"
					},
					{
						id: 51881,
						text: "Master Fletcher"
					},
					{
						id: 63635,
						text: "Primal Manifestation"
					},
					{
						id: 9535,
						text: "Hunter's Gambit"
					},
					{
						id: 48614,
						text: "Fervour"
					},
					{
						id: 42443,
						text: "Frenetic"
					},
					{
						id: 27788,
						text: "Blood Drinker"
					},
					{
						id: 23066,
						text: "Savagery"
					},
					{
						id: 21435,
						text: "Cloth and Chain"
					},
					{
						id: 10115,
						text: "Prodigal Perfection"
					},
					{
						id: 18174,
						text: "Mystic Bulwark"
					},
					{
						id: 19858,
						text: "Herbalism"
					},
					{
						id: 44103,
						text: "Reflexes"
					},
					{
						id: 48556,
						text: "Thunderous Salvos"
					},
					{
						id: 65308,
						text: "Deflection"
					},
					{
						id: 65210,
						text: "Heart of Oak"
					},
					{
						id: 25178,
						text: "Primal Spirit"
					},
					{
						id: 51440,
						text: "Druidic Rite"
					},
					{
						id: 2715,
						text: "Quickstep"
					},
					{
						id: 40743,
						text: "Crystal Skin"
					},
					{
						id: 49416,
						text: "Adamant"
					},
					{
						id: 25456,
						text: "Dervish"
					},
					{
						id: 570,
						text: "Dazzling Strikes"
					},
					{
						id: 49621,
						text: "Acuity"
					},
					{
						id: 17171,
						text: "Flash Freeze"
					},
					{
						id: 43385,
						text: "Winter Spirit"
					},
					{
						id: 52230,
						text: "Weathered Hunter"
					},
					{
						id: 47484,
						text: "Depth Perception"
					},
					{
						id: 50338,
						text: "Ballistic Mastery"
					},
					{
						id: 1382,
						text: "Spirit Void"
					},
					{
						id: 39530,
						text: "Vitality Void"
					},
					{
						id: 26866,
						text: "Sanctity"
					},
					{
						id: 60002,
						text: "Fury Bolts"
					},
					{
						id: 13922,
						text: "Steadfast"
					},
					{
						id: 61198,
						text: "Heart of the Warrior"
					},
					{
						id: 12795,
						text: "Versatility"
					},
					{
						id: 47743,
						text: "Farsight"
					},
					{
						id: 57900,
						text: "Command of Steel"
					},
					{
						id: 65502,
						text: "Heartseeker"
					},
					{
						id: 7263,
						text: "Swift Venoms"
					},
					{
						id: 34666,
						text: "Destroyer"
					},
					{
						id: 31667,
						text: "Arohongui, Moon's Presence"
					},
					{
						id: 48480,
						text: "Tasalio, Cleansing Water"
					},
					{
						id: 53095,
						text: "Tukohama, War's Herald"
					},
					{
						id: 5029,
						text: "Tawhoa, Forest's Strength"
					},
					{
						id: 32249,
						text: "Valako, Storm's Embrace"
					},
					{
						id: 41119,
						text: "Lethality"
					},
					{
						id: 27203,
						text: "Heart and Soul"
					},
					{
						id: 8135,
						text: "Practical Application"
					},
					{
						id: 58831,
						text: "Disemboweling"
					},
					{
						id: 59866,
						text: "Honed Edge"
					},
					{
						id: 30693,
						text: "Divine Fervour"
					},
					{
						id: 33435,
						text: "Holy Dominion"
					},
					{
						id: 54694,
						text: "Light of Divinity"
					},
					{
						id: 5289,
						text: "Battle Rouse"
					},
					{
						id: 43689,
						text: "Spiritual Command"
					},
					{
						id: 52714,
						text: "Prowess"
					},
					{
						id: 9567,
						text: "Light Eater"
					},
					{
						id: 15027,
						text: "Beef"
					},
					{
						id: 27929,
						text: "Deep Wisdom"
					},
					{
						id: 32059,
						text: "Titanic Impacts"
					},
					{
						id: 55772,
						text: "Blacksmith's Clout"
					},
					{
						id: 922,
						text: "Divine Guidance"
					},
					{
						id: 29026,
						text: "Sanctuary of Thought"
					},
					{
						id: 1105,
						text: "Pursuit of Faith"
					},
					{
						id: 34434,
						text: "Ritual of Awakening"
					},
					{
						id: 25651,
						text: "Conviction of Power"
					},
					{
						id: 60462,
						text: "Illuminated Devotion"
					},
					{
						id: 40510,
						text: "Arcane Blessing"
					},
					{
						id: 51492,
						text: "Sign of Purpose"
					},
					{
						id: 33287,
						text: "Juggernaut"
					},
					{
						id: 44988,
						text: "Stabbing Thirst"
					},
					{
						id: 44562,
						text: "Shaman's Dominion"
					},
					{
						id: 7688,
						text: "Enduring Bond"
					},
					{
						id: 53992,
						text: "Path of the Shadow"
					},
					{
						id: 772,
						text: "Shadow Ascendancy"
					},
					{
						id: 65093,
						text: "Bladedancer"
					},
					{
						id: 18703,
						text: "Graceful Assault"
					},
					{
						id: 19103,
						text: "Righteous Army"
					},
					{
						id: 15046,
						text: "Redemption"
					},
					{
						id: 4177,
						text: "Spiritual Aid"
					},
					{
						id: 56722,
						text: "Path of the Witch"
					},
					{
						id: 51782,
						text: "Witch Ascendancy"
					},
					{
						id: 39790,
						text: "Sanctuary"
					},
					{
						id: 10153,
						text: "Physique"
					},
					{
						id: 55146,
						text: "Time of Need"
					},
					{
						id: 42264,
						text: "Radiant Faith"
					},
					{
						id: 39728,
						text: "Bastion of Hope"
					},
					{
						id: 61372,
						text: "Harmony of Purpose"
					},
					{
						id: 64768,
						text: "Unwavering Faith"
					},
					{
						id: 4494,
						text: "Radiant Crusade"
					},
					{
						id: 19641,
						text: "Unwavering Crusade"
					},
					{
						id: 34009,
						text: "Master of the Arena"
					},
					{
						id: 48807,
						text: "Art of the Gladiator"
					},
					{
						id: 56029,
						text: "Agility"
					},
					{
						id: 15711,
						text: "Blast Radius"
					},
					{
						id: 22356,
						text: "Hematophagy"
					},
					{
						id: 5456,
						text: "Might"
					},
					{
						id: 6237,
						text: "Precision"
					},
					{
						id: 41472,
						text: "Discipline and Training"
					},
					{
						id: 39743,
						text: "Mysticism"
					},
					{
						id: 15852,
						text: "Ethereal Feast"
					},
					{
						id: 34601,
						text: "Proficiency"
					},
					{
						id: 61689,
						text: "Blast Cascade"
					},
					{
						id: 21389,
						text: "Runesmith"
					},
					{
						id: 32245,
						text: "Expertise"
					},
					{
						id: 50197,
						text: "Ancestral Knowledge"
					},
					{
						id: 65273,
						text: "Enigmatic Reach"
					},
					{
						id: 53118,
						text: "Barbarism"
					},
					{
						id: 11420,
						text: "Arcanist's Dominion"
					},
					{
						id: 60180,
						text: "Thief's Craft"
					},
					{
						id: 54877,
						text: "Path of the Templar"
					},
					{
						id: 15435,
						text: "Templar Ascendancy"
					},
					{
						id: 33582,
						text: "Forceful Skewering"
					},
					{
						id: 64588,
						text: "Beacon of Ruin"
					},
					{
						id: 51391,
						text: "Shaper of Desolation"
					},
					{
						id: 56461,
						text: "Liege of the Primordial"
					},
					{
						id: 61259,
						text: "Mastermind of Discord"
					},
					{
						id: 57197,
						text: "Pendulum of Destruction"
					},
					{
						id: 4917,
						text: "Paragon of Calamity"
					},
					{
						id: 258,
						text: "Elemancer"
					},
					{
						id: 21297,
						text: "High Explosives"
					},
					{
						id: 55380,
						text: "Clever Construction"
					},
					{
						id: 33777,
						text: "Devastating Devices"
					},
					{
						id: 53114,
						text: "Revenge of the Hunted"
					},
					{
						id: 63251,
						text: "Charging Offensive"
					},
					{
						id: 6770,
						text: "Arcane Guarding"
					},
					{
						id: 35685,
						text: "Fearsome Force"
					},
					{
						id: 37647,
						text: "Dismembering"
					},
					{
						id: 21228,
						text: "Piercing Shots"
					},
					{
						id: 36874,
						text: "Wisdom of the Glade"
					},
					{
						id: 18025,
						text: "Hard Knocks"
					},
					{
						id: 59556,
						text: "Expeditious Munitions"
					},
					{
						id: 15400,
						text: "Skittering Runes"
					},
					{
						id: 64077,
						text: "Ophidian Aim"
					},
					{
						id: 5823,
						text: "Coordination"
					},
					{
						id: 36281,
						text: "Primeval Force"
					},
					{
						id: 63976,
						text: "Shaper"
					},
					{
						id: 49254,
						text: "Retribution"
					},
					{
						id: 16246,
						text: "Tranquility"
					},
					{
						id: 8001,
						text: "Lethal Assault"
					},
					{
						id: 41989,
						text: "Resourcefulness"
					},
					{
						id: 31359,
						text: "Fatal Toxins"
					},
					{
						id: 54142,
						text: "Finesse"
					},
					{
						id: 28754,
						text: "Assassination"
					},
					{
						id: 46965,
						text: "Saboteur"
					},
					{
						id: 42686,
						text: "Elemental Focus"
					},
					{
						id: 18707,
						text: "Method to the Madness"
					},
					{
						id: 12809,
						text: "Berserking"
					},
					{
						id: 6,
						text: "Twin Terrors"
					},
					{
						id: 32251,
						text: "War Bringer"
					},
					{
						id: 57560,
						text: "Rite of Ruin"
					},
					{
						id: 9271,
						text: "Pain Reaver"
					},
					{
						id: 38999,
						text: "Flawless Savagery"
					},
					{
						id: 24528,
						text: "Crave the Slaughter"
					},
					{
						id: 59920,
						text: "Aspect of Carnage"
					},
					{
						id: 29630,
						text: "Blitz"
					},
					{
						id: 61981,
						text: "Doom Cast"
					},
					{
						id: 35894,
						text: "Trickery"
					},
					{
						id: 60737,
						text: "Sleight of Hand"
					},
					{
						id: 51212,
						text: "Entropy"
					},
					{
						id: 33903,
						text: "Will of Blades"
					},
					{
						id: 57839,
						text: "Blade of Cunning"
					},
					{
						id: 1325,
						text: "Golem's Blood"
					},
					{
						id: 64217,
						text: "Aspect of Stone"
					},
					{
						id: 24133,
						text: "Survivalist"
					},
					{
						id: 19069,
						text: "Thick Skin"
					},
					{
						id: 49969,
						text: "Bludgeon Blitz"
					},
					{
						id: 18769,
						text: "Written in Blood"
					},
					{
						id: 53759,
						text: "Cleansed Thoughts"
					},
					{
						id: 49538,
						text: "Defiance"
					},
					{
						id: 22535,
						text: "Whispers of Doom"
					},
					{
						id: 39986,
						text: "Hex Master"
					},
					{
						id: 32932,
						text: "Sovereignty"
					},
					{
						id: 6799,
						text: "Charisma"
					},
					{
						id: 12143,
						text: "Influence"
					},
					{
						id: 65097,
						text: "Leadership"
					},
					{
						id: 33718,
						text: "Champion of the Cause"
					},
					{
						id: 24050,
						text: "Coldhearted Calculation"
					},
					{
						id: 36859,
						text: "Steelwood Stance"
					},
					{
						id: 46408,
						text: "Fangs of the Viper"
					},
					{
						id: 24324,
						text: "Explosive Impact"
					},
					{
						id: 4481,
						text: "Forces of Nature"
					},
					{
						id: 32947,
						text: "Swift Killer"
					},
					{
						id: 55867,
						text: "Patient Reaper"
					},
					{
						id: 28884,
						text: "Ghost Dance"
					},
					{
						id: 29825,
						text: "Escape Artist"
					},
					{
						id: 41891,
						text: "Prolonged Pain"
					},
					{
						id: 23225,
						text: "Weave the Arcane"
					},
					{
						id: 57331,
						text: "Harness the Void"
					},
					{
						id: 30471,
						text: "True Strike"
					},
					{
						id: 48698,
						text: "Void Barrier"
					},
					{
						id: 22702,
						text: "Serpent Stance"
					},
					{
						id: 6967,
						text: "Command of the Elements"
					},
					{
						id: 16940,
						text: "Pyromaniac"
					},
					{
						id: 5087,
						text: "Born in the Shadows"
					},
					{
						id: 14103,
						text: "Explosives Expert"
					},
					{
						id: 51462,
						text: "Bomb Specialist"
					},
					{
						id: 28535,
						text: "Perfect Crime"
					},
					{
						id: 39834,
						text: "Demolitions Specialist"
					},
					{
						id: 38918,
						text: "Chain Reaction"
					},
					{
						id: 53757,
						text: "Shamanistic Fury"
					},
					{
						id: 63933,
						text: "Totemic Zeal"
					},
					{
						id: 9055,
						text: "Volatile Mines"
					},
					{
						id: 25409,
						text: "Indomitable Army"
					},
					{
						id: 19144,
						text: "Sentinel"
					},
					{
						id: 23690,
						text: "Arcane Vision"
					},
					{
						id: 31257,
						text: "Words of Glory"
					},
					{
						id: 32455,
						text: "Storm Weaver"
					},
					{
						id: 27190,
						text: "Hasty Reconstruction"
					},
					{
						id: 45317,
						text: "Ash, Frost and Storm"
					},
					{
						id: 42041,
						text: "Profane Chemistry"
					},
					{
						id: 47065,
						text: "Master of Force"
					},
					{
						id: 49379,
						text: "Hired Killer"
					},
					{
						id: 18865,
						text: "Melding"
					},
					{
						id: 13164,
						text: "Divine Judgement"
					},
					{
						id: 44347,
						text: "Divine Fury"
					},
					{
						id: 14665,
						text: "Divine Wrath"
					},
					{
						id: 65108,
						text: "Tireless"
					},
					{
						id: 26294,
						text: "Bloodletting"
					},
					{
						id: 40849,
						text: "Transcendence"
					},
					{
						id: 46904,
						text: "Arcane Swiftness"
					},
					{
						id: 62595,
						text: "Unyielding"
					},
					{
						id: 44297,
						text: "Undeniable"
					},
					{
						id: 1734,
						text: "Unflinching"
					},
					{
						id: 56789,
						text: "Unrelenting"
					},
					{
						id: 5819,
						text: "Unstoppable"
					},
					{
						id: 53816,
						text: "Unbreakable"
					},
					{
						id: 50692,
						text: "Ngamahu, Flame's Advance"
					},
					{
						id: 1731,
						text: "Hinekora, Death's Fury"
					},
					{
						id: 61355,
						text: "Ramako, Sun's Light"
					},
					{
						id: 31364,
						text: "Way of the Poacher"
					},
					{
						id: 16848,
						text: "Avatar of the Slaughter"
					},
					{
						id: 4849,
						text: "Rapid Assault"
					},
					{
						id: 11597,
						text: "Avatar of the Chase"
					},
					{
						id: 33645,
						text: "Quartz Infusion"
					},
					{
						id: 55509,
						text: "Avatar of the Veil"
					},
					{
						id: 5443,
						text: "Fast and Deadly"
					},
					{
						id: 61627,
						text: "Ricochet"
					},
					{
						id: 26067,
						text: "Endless Munitions"
					},
					{
						id: 45313,
						text: "Far Shot"
					},
					{
						id: 44482,
						text: "Rupture"
					},
					{
						id: 21455,
						text: "Powerful Precision"
					},
					{
						id: 24848,
						text: "Gathering Winds"
					},
					{
						id: 27864,
						text: "Gratuitous Violence"
					},
					{
						id: 15616,
						text: "Blood in the Eyes"
					},
					{
						id: 52575,
						text: "Outmatch and Outlast"
					},
					{
						id: 8419,
						text: "Painforged"
					},
					{
						id: 63490,
						text: "Violent Retaliation"
					},
					{
						id: 2598,
						text: "Versatile Combatant"
					},
					{
						id: 758,
						text: "Arena Challenger"
					},
					{
						id: 51101,
						text: "Nature's Adrenaline"
					},
					{
						id: 63293,
						text: "Master Surgeon"
					},
					{
						id: 65296,
						text: "Nature's Boon"
					},
					{
						id: 61805,
						text: "Master Alchemist"
					},
					{
						id: 6038,
						text: "Veteran Bowyer"
					},
					{
						id: 40813,
						text: "Nature's Reprisal"
					},
					{
						id: 1697,
						text: "Master Toxicist"
					},
					{
						id: 37127,
						text: "Profane Bloom"
					},
					{
						id: 31344,
						text: "Malediction"
					},
					{
						id: 37492,
						text: "Vile Bastion"
					},
					{
						id: 27096,
						text: "Void Beacon"
					},
					{
						id: 62504,
						text: "Forbidden Power"
					},
					{
						id: 25309,
						text: "Withering Presence"
					},
					{
						id: 47630,
						text: "Frigid Wake"
					},
					{
						id: 54159,
						text: "Mindless Aggression"
					},
					{
						id: 65153,
						text: "Unnatural Strength"
					},
					{
						id: 14603,
						text: "Bone Barrier"
					},
					{
						id: 48719,
						text: "Mistress of Sacrifice"
					},
					{
						id: 36017,
						text: "Commander of Darkness"
					},
					{
						id: 11490,
						text: "Plaguebringer"
					},
					{
						id: 23572,
						text: "Corpse Pact"
					},
					{
						id: 3554,
						text: "Essence Glutton"
					},
					{
						id: 31700,
						text: "Fortitude"
					},
					{
						id: 33940,
						text: "Unstoppable Hero"
					},
					{
						id: 35750,
						text: "Conqueror"
					},
					{
						id: 56967,
						text: "Worthy Foe"
					},
					{
						id: 11412,
						text: "Inspirational"
					},
					{
						id: 27604,
						text: "First to Strike, Last to Fall"
					},
					{
						id: 13374,
						text: "Master of Metal"
					},
					{
						id: 48214,
						text: "Inevitable Judgement"
					},
					{
						id: 40059,
						text: "Augury of Penitence"
					},
					{
						id: 3154,
						text: "Instruments of Virtue"
					},
					{
						id: 32816,
						text: "Pious Path"
					},
					{
						id: 53884,
						text: "Righteous Providence"
					},
					{
						id: 7618,
						text: "Path of the Ranger"
					},
					{
						id: 49532,
						text: "Ranger Ascendancy"
					},
					{
						id: 24755,
						text: "Path of the Marauder"
					},
					{
						id: 61437,
						text: "Marauder Ascendancy"
					},
					{
						id: 9864,
						text: "Growth and Decay"
					},
					{
						id: 53013,
						text: "Atrophy"
					},
					{
						id: 54713,
						text: "Force Shaper"
					},
					{
						id: 59605,
						text: "Unstable Munitions"
					},
					{
						id: 21602,
						text: "Destructive Apparatus"
					},
					{
						id: 59766,
						text: "Dirty Techniques"
					},
					{
						id: 16236,
						text: "Toxic Strikes"
					},
					{
						id: 29861,
						text: "Explosive Runes"
					},
					{
						id: 44824,
						text: "Dark Arts"
					},
					{
						id: 7918,
						text: "Enigmatic Defence"
					},
					{
						id: 53573,
						text: "Arcane Expanse"
					},
					{
						id: 63727,
						text: "Gladiator's Perseverance"
					},
					{
						id: 3309,
						text: "Fleetfoot"
					},
					{
						id: 17608,
						text: "Silent Steps"
					},
					{
						id: 15344,
						text: "Freedom of Movement"
					},
					{
						id: 54629,
						text: "Inexorable"
					},
					{
						id: 2959,
						text: "Unpredictable Offensive"
					},
					{
						id: 9194,
						text: "Swift Skewering"
					},
					{
						id: 58921,
						text: "Disciple of the Slaughter"
					},
					{
						id: 64882,
						text: "Disciple of the Unyielding"
					},
					{
						id: 8458,
						text: "Longshot"
					},
					{
						id: 49772,
						text: "Utmost Might"
					},
					{
						id: 55114,
						text: "Utmost Intellect"
					},
					{
						id: 60031,
						text: "Harvester of Foes"
					},
					{
						id: 52090,
						text: "Feller of Foes"
					},
					{
						id: 5126,
						text: "Spinecruncher"
					},
					{
						id: 35436,
						text: "Kinetic Impacts"
					},
					{
						id: 861,
						text: "Aggressive Bastion"
					},
					{
						id: 51108,
						text: "Arcane Capacitor"
					},
					{
						id: 29381,
						text: "Ravenous Horde"
					},
					{
						id: 34506,
						text: "Golem Commander"
					},
					{
						id: 41137,
						text: "Aqueous Accelerant"
					},
					{
						id: 6233,
						text: "Blast Waves"
					},
					{
						id: 45608,
						text: "Successive Detonations"
					},
					{
						id: 44102,
						text: "Efficient Explosives"
					},
					{
						id: 9015,
						text: "Dire Torment"
					},
					{
						id: 15290,
						text: "Watchtowers"
					},
					{
						id: 38706,
						text: "Way of the Warrior"
					},
					{
						id: 41307,
						text: "Deadly Inclinations"
					},
					{
						id: 62596,
						text: "Mystic Talents"
					},
					{
						id: 57006,
						text: "Vengeant Cascade"
					},
					{
						id: 27119,
						text: "Tribal Fury"
					},
					{
						id: 52282,
						text: "Tenacity"
					},
					{
						id: 5624,
						text: "Crusader"
					},
					{
						id: 56207,
						text: "Hardened Scars"
					},
					{
						id: 36736,
						text: "Burning Brutality"
					},
					{
						id: 46471,
						text: "Shocking Strikes"
					}
				]
			}
		},
		{
			id: "enchant.stat_3010587200",
			text: "#% increased Critical Strike Chance if you haven't Crit Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_308396001",
			text: "#% increased Movement Speed if you haven't been Hit Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_412905518",
			text: "#% chance to Avoid being Stunned if you've Killed Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_4135304575",
			text: "#% increased Attack and Cast Speed if you've Killed Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_1222329688",
			text: "#% chance to Dodge Spell Hits if you've\ntaken Spell Damage Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_3077703716",
			text: "Adds # to # Fire Damage if you've Killed Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_1293597434",
			text: "Adds # to # Lightning Damage if you haven't Killed Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_3414398924",
			text: "#% Chance to Dodge Attack Hits if you've taken a Critical Strike Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_3693451031",
			text: "#% reduced Mana Cost of Skills if you've been Hit Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_1122635070",
			text: "Regenerate #% of Life per second if you were Hit Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_3915210550",
			text: "#% chance to Freeze, Shock and Ignite if you haven't Crit Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_4291115328",
			text: "#% of Damage Leeched as Life if you've Killed Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_884399432",
			text: "Adds # to # Cold Damage if you've been Hit Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_1409388882",
			text: "#% increased Mana Regeneration Rate if you've cast a Spell Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_926530613",
			text: "Your Chilling Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3012437250",
			text: "#% chance to Trigger Word of Fury on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1906144841",
			text: "#% chance to Trigger Word of War on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_3992962185",
			text: "#% chance to Trigger Word of Spite when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_281254371",
			text: "Damage Penetrates #% of Enemy Elemental Resistances if you haven't Killed Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_756653426",
			text: "#% chance to Trigger Word of Blades on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_891161612",
			text: "#% chance to Trigger Word of Flames on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3302747233",
			text: "#% chance to Trigger Word of Frost on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_2472584898",
			text: "#% chance to Trigger Word of Ire when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1162506883",
			text: "#% chance to Trigger Word of Force on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3901337328",
			text: "#% chance to Trigger Word of Inferno on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_3111060801",
			text: "#% chance to Trigger Word of Light when you take a Critical Strike",
			type: "enchant"
		},
		{
			id: "enchant.stat_2527140156",
			text: "#% chance to Trigger Word of the Grave when your Skills or Minions Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_3610104224",
			text: "#% chance to Trigger Word of the Tempest on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_2634094270",
			text: "#% chance to Trigger Word of Reflection when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1354248411",
			text: "#% chance to Trigger Word of Winter when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1580810115",
			text: "Tornado Shot fires an additional secondary Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_995860222",
			text: "Molten Strike fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_1350605126",
			text: "#% chance to Trigger Word of Thunder on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1084180630",
			text: "Your Meteor Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_391609701",
			text: "Adds # to # Chaos Damage if you've taken a Critical Strike Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_3009270704",
			text: "Barrage fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_1901955093",
			text: "Lightning Arrow hits an additional Enemy",
			type: "enchant"
		},
		{
			id: "enchant.stat_1478321338",
			text: "Your Flamethrower Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1153637043",
			text: "#% chance to Trigger Edict of Fury on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_4228580629",
			text: "#% chance to Trigger Edict of Reflection when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3105097589",
			text: "Kinetic Blast has a #% chance for an additional explosion",
			type: "enchant"
		},
		{
			id: "enchant.stat_3645693773",
			text: "Spectres have #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_257027296",
			text: "#% chance to Trigger Edict of Spite when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3359178310",
			text: "#% increased Righteous Fire Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3685345485",
			text: "#% increased Barrage Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4109038270",
			text: "Elemental Hit deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1815368527",
			text: "#% increased Tornado Shot Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2160886943",
			text: "#% chance to Trigger Edict of Blades on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3024867180",
			text: "#% increased Blade Vortex Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_186513618",
			text: "Spark fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_271342637",
			text: "#% chance to Trigger Edict of Light when you take a Critical Strike",
			type: "enchant"
		},
		{
			id: "enchant.stat_90942364",
			text: "#% chance to Trigger Edict of Frost on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_2246143608",
			text: "#% chance to Trigger Edict of Inferno on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_451037529",
			text: "#% increased Glacial Cascade Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_786149615",
			text: "#% chance to Trigger Edict of Flames on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_835592326",
			text: "#% increased Cyclone Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_603658709",
			text: "#% chance to Trigger Edict of Thunder on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1833626118",
			text: "#% chance for Discharge to deal Damage without removing Charges",
			type: "enchant"
		},
		{
			id: "enchant.stat_3755794090",
			text: "#% increased Spectral Throw Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1151217691",
			text: "#% increased Elemental Hit Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1711789839",
			text: "#% chance to Trigger Edict of the Tempest on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1213035889",
			text: "Lightning Strike fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_3285719520",
			text: "#% chance to Trigger Edict of Ire when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1154155584",
			text: "#% of Glacial Cascade Physical Damage Converted to Cold Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_754797886",
			text: "#% increased Blade Flurry Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2760193888",
			text: "#% chance to Trigger Edict of Force on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_78239163",
			text: "#% increased Ancestral Warchief Totem Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2589980605",
			text: "Magma Orb Chains an additional time",
			type: "enchant"
		},
		{
			id: "enchant.stat_3469967347",
			text: "#% increased Essence Drain Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3418033798",
			text: "Blood Rage grants additional #% increased Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1662974426",
			text: "#% increased Temporal Chains Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_4221797807",
			text: "#% increased Blade Vortex Spell Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2740567252",
			text: "#% increased Arc Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_464448327",
			text: "#% increased Flicker Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_192534517",
			text: "Scourge Arrow deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2252338738",
			text: "#% chance to Trigger Decree of Fury on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_2038865857",
			text: "#% increased Molten Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2328234364",
			text: "Herald of Ash has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_4137556603",
			text: "Spectres have #% increased Attack and Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3701991680",
			text: "#% increased Flicker Strike Damage per Frenzy Charge",
			type: "enchant"
		},
		{
			id: "enchant.stat_3537762266",
			text: "Herald of Ice has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_147678606",
			text: "#% chance to Trigger Edict of Winter when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_4253105373",
			text: "Herald of Agony has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_2748553775",
			text: "#% increased Blade Vortex Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_862824495",
			text: "#% increased Reave Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1935930829",
			text: "#% increased Discharge Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1573799461",
			text: "#% increased Dark Pact Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_889695873",
			text: "#% chance to Trigger Decree of Spite when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_2085855914",
			text: "Summoned Raging Spirits deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4033078288",
			text: "#% increased Sunder Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1454162553",
			text: "#% increased Cyclone Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2461552986",
			text: "Arc Chains an additional time",
			type: "enchant"
		},
		{
			id: "enchant.stat_3059357595",
			text: "Skeletons deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2250111474",
			text: "#% increased Effect of the Buff granted by your Ice Golems",
			type: "enchant"
		},
		{
			id: "enchant.stat_3318254108",
			text: "Storm Brand Damage Penetrates #% of Branded Enemy's Lightning Resistance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2246425134",
			text: "#% increased Incinerate Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3131492956",
			text: "#% increased Lightning Trap Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3641868987",
			text: "#% chance to Trigger Decree of Light when you take a Critical Strike",
			type: "enchant"
		},
		{
			id: "enchant.stat_3316822388",
			text: "Righteous Fire grants #% increased Spell Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3543257184",
			text: "Ancestral Warchief Totem grants #% increased Melee Damage while Active",
			type: "enchant"
		},
		{
			id: "enchant.stat_990408262",
			text: "#% chance to Trigger Decree of Flames on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1106926438",
			text: "#% chance to Trigger Decree of War on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1697080607",
			text: "#% increased Earthquake Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3293830776",
			text: "#% increased Enfeeble Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_865511246",
			text: "Toxic Rain deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_308154324",
			text: "#% chance to Trigger Edict of the Grave when your Skills or Minions Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_3835483564",
			text: "Hatred has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_2925650365",
			text: "#% chance to Trigger Decree of Force on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1792647120",
			text: "#% chance to Trigger Decree of Reflection when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3698833303",
			text: "#% increased Essence Drain Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2187415468",
			text: "#% chance to Trigger Decree of the Grave when your Skills or Minions Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_2499559911",
			text: "Raised Zombies have #% increased Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1539846779",
			text: "Detonate Dead has a #% chance to detonate an additional corpse",
			type: "enchant"
		},
		{
			id: "enchant.stat_3655654928",
			text: "Desecrate Spawns an additional corpse",
			type: "enchant"
		},
		{
			id: "enchant.stat_4152292551",
			text: "#% chance to Trigger Decree of Thunder on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1065909420",
			text: "#% increased Vulnerability Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_966400988",
			text: "Herald of Thunder has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_165958462",
			text: "#% chance to Trigger Decree of Blades on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_2896672990",
			text: "#% increased Lightning Arrow Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1268512925",
			text: "#% chance to Trigger Decree of Frost on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_3514973342",
			text: "#% increased Ethereal Knives Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3034788766",
			text: "Volatile Dead Consumes up to # additional corpse",
			type: "enchant"
		},
		{
			id: "enchant.stat_2527931375",
			text: "#% increased Effect of the Buff granted by your Lightning Golems",
			type: "enchant"
		},
		{
			id: "enchant.stat_2729530556",
			text: "#% increased Dual Strike Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_3473724367",
			text: "Minions summoned by Your Scout Towers have #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1555251",
			text: "Icicle Mine has #% to Critical Strike Multiplier",
			type: "enchant"
		},
		{
			id: "enchant.stat_3555919553",
			text: "#% increased Tornado Shot Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1366391108",
			text: "#% chance to Trigger Decree of Inferno on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1666713639",
			text: "#% increased Wild Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1471796012",
			text: "Cobra Lash Chains an additional time",
			type: "enchant"
		},
		{
			id: "enchant.stat_1044970549",
			text: "Scourge Arrow creates an additional spore pod at Maximum Stages",
			type: "enchant"
		},
		{
			id: "enchant.stat_297308603",
			text: "Blast Rain has a #% chance to fire an additional Arrow",
			type: "enchant"
		},
		{
			id: "enchant.stat_3109915337",
			text: "#% chance to Trigger Commandment of Light when you take a Critical Strike",
			type: "enchant"
		},
		{
			id: "enchant.stat_3036365740",
			text: "#% chance to Trigger Commandment of Reflection when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_2033463878",
			text: "#% chance to Trigger Edict of War on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_91821600",
			text: "Haste has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_513715594",
			text: "Flesh Offering grants an additional #% increased Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3432170876",
			text: "#% increased Rain of Arrows Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2555469486",
			text: "#% increased Split Arrow Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_775200811",
			text: "Holy Flame Totem fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_2584129062",
			text: "Divine Ire deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1040958896",
			text: "#% chance to Summon an additional Skeleton Warrior with Summon Skeleton",
			type: "enchant"
		},
		{
			id: "enchant.stat_200942664",
			text: "#% increased Vortex Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_269930125",
			text: "#% increased Effect of the Buff granted by your Flame Golems",
			type: "enchant"
		},
		{
			id: "enchant.stat_2523298357",
			text: "#% increased Barrage Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1818525360",
			text: "#% chance to Trigger Decree of Ire when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1844721010",
			text: "#% increased Lacerate Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3630274354",
			text: "#% increased Lightning Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2746213081",
			text: "#% increased Blade Flurry Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1671985305",
			text: "#% chance to Trigger Decree of the Tempest on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_2205814812",
			text: "#% increased Rain of Arrows Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1359058534",
			text: "#% increased Cleave Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1943147282",
			text: "#% of Galvanic Arrow Physical Damage gained as extra Lightning Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3600749521",
			text: "Wrath has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_345703394",
			text: "#% increased Fire Trap Burning Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1007135105",
			text: "#% increased Kinetic Blast Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_444686294",
			text: "#% reduced Spectral Throw Projectile Deceleration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3395096718",
			text: "#% increased Scorching Ray Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_181307038",
			text: "#% increased Fire Trap Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1961975107",
			text: "#% increased Assassin's Mark Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3608981617",
			text: "Spectral Shield Throw fires an additional Shard Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_3734339018",
			text: "Winter Orb has +# Maximum Stages",
			type: "enchant"
		},
		{
			id: "enchant.stat_4157143640",
			text: "Animated Guardians deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4047323043",
			text: "Consecrated Path deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3229261553",
			text: "Spirit Offering grants #% of Physical Damage as Extra Chaos Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2226973351",
			text: "Burning Arrow Always Ignites",
			type: "enchant"
		},
		{
			id: "enchant.stat_2200030809",
			text: "Discipline has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_3703722637",
			text: "#% chance to Trigger Commandment of Flames on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_531461618",
			text: "Storm Brand deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1794090421",
			text: "#% increased Ice Crash Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3449510470",
			text: "#% increased Frost Blades Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4014289250",
			text: "Blast Rain deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2278715446",
			text: "Split Arrow fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_2020183428",
			text: "#% chance to Trigger Commandment of Inferno on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_195463427",
			text: "Arc has #% chance to Shock",
			type: "enchant"
		},
		{
			id: "enchant.stat_620045439",
			text: "#% chance to Trigger Commandment of Ire when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_558298545",
			text: "#% increased Herald of Thunder Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2600498881",
			text: "#% increased Fireball Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1554500307",
			text: "#% chance to Trigger Commandment of Fury on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3825617457",
			text: "#% increased Rain of Arrows Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3106577499",
			text: "#% increased Cleave Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_767884542",
			text: "#% increased Herald of Ash Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_494477497",
			text: "#% chance to Trigger Commandment of War on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_2200744772",
			text: "Winter Orb deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_38715141",
			text: "Summon Raging Spirit has #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1336543283",
			text: "#% increased Immortal Call Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3628984170",
			text: "Explosive Arrow deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2363866815",
			text: "Icicle Mine deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2515273888",
			text: "#% chance to Trigger Decree of Winter when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3652051346",
			text: "Shock Nova ring deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3222886961",
			text: "#% chance to Trigger Commandment of Winter when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1208019382",
			text: "#% increased Spark Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1843506018",
			text: "#% reduced Storm Call Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3205997967",
			text: "Elemental Hit Always Freezes, Shocks and Ignites",
			type: "enchant"
		},
		{
			id: "enchant.stat_3510848926",
			text: "#% increased Ice Spear Critical Strike Chance in second form",
			type: "enchant"
		},
		{
			id: "enchant.stat_4074562940",
			text: "#% increased Vortex Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_578067404",
			text: "#% increased Lacerate Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_3734756042",
			text: "#% increased Viper Strike Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_1028884162",
			text: "#% increased Split Arrow Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_3729006707",
			text: "#% increased Cold Snap Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2094069860",
			text: "#% increased Dual Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3867484047",
			text: "Incinerate has # to maximum stages",
			type: "enchant"
		},
		{
			id: "enchant.stat_1648511635",
			text: "#% increased Effect of the Buff granted by your Chaos Golems",
			type: "enchant"
		},
		{
			id: "enchant.stat_1715805151",
			text: "Armageddon Brand Damage Penetrates #% of Branded Enemy's Fire Resistance",
			type: "enchant"
		},
		{
			id: "enchant.stat_3078026860",
			text: "Explosive Trap causes an additional smaller explosion",
			type: "enchant"
		},
		{
			id: "enchant.stat_3185156108",
			text: "#% increased Despair Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1809965314",
			text: "#% increased Double Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1962401751",
			text: "#% increased Ice Shot Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3215042347",
			text: "Purity of Fire has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_2284801675",
			text: "#% increased Effect of the Buff granted by your Stone Golems",
			type: "enchant"
		},
		{
			id: "enchant.stat_3764410821",
			text: "Lightning Trap pierces an additional Target",
			type: "enchant"
		},
		{
			id: "enchant.stat_1062615953",
			text: "#% increased Spectral Throw Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2524620107",
			text: "#% increased Molten Strike Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_169405468",
			text: "#% increased Flameblast Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2896357741",
			text: "Siege Ballista has #% increased Totem Placement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_648343221",
			text: "#% increased Shield Charge Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_168538372",
			text: "#% increased Orb of Storms Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_1877374369",
			text: "#% chance to Trigger Commandment of Frost on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_760994068",
			text: "#% increased Ethereal Knives Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2871777604",
			text: "Raised Zombies have #% to Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_2233726619",
			text: "Arctic Armour has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_3910961021",
			text: "#% increased Herald of Ice Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1063173946",
			text: "#% increased Spirit Offering Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3026752303",
			text: "#% increased Ice Shot Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1623552446",
			text: "#% increased Blight Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3026109282",
			text: "Your Fireball Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2833482311",
			text: "#% increased Bladefall Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_522780692",
			text: "#% increased Frenzy Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3998182656",
			text: "Arc deals #% increased Damage for each time it has Chained",
			type: "enchant"
		},
		{
			id: "enchant.stat_1259277978",
			text: "#% chance to Trigger Commandment of Spite when Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1212590278",
			text: "#% increased Volatile Dead Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1819674879",
			text: "Animated Weapons deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2003753577",
			text: "Anger has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_2505115650",
			text: "Chaos Golems deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3069740560",
			text: "#% increased Bladefall Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1510381560",
			text: "Storm Brand has a #% chance to Chain an additional time",
			type: "enchant"
		},
		{
			id: "enchant.stat_3320271130",
			text: "#% increased Ancestral Warchief Totem Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1087923932",
			text: "#% increased Frost Blades Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_841281094",
			text: "Pyroclast Mine fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_4203647216",
			text: "#% chance to Trigger Commandment of the Tempest on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_1095160683",
			text: "Dominating Blow can summon an additional Magic Sentinel of Dominance",
			type: "enchant"
		},
		{
			id: "enchant.stat_1999307054",
			text: "#% increased Sunder Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1255310381",
			text: "#% increased Frenzy Damage per Frenzy Charge",
			type: "enchant"
		},
		{
			id: "enchant.stat_2257652056",
			text: "Scourge Arrow has #% chance to Poison per Stage",
			type: "enchant"
		},
		{
			id: "enchant.stat_147952811",
			text: "#% chance to Trigger Commandment of Blades on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3152806535",
			text: "Blood Rage grants additional #% chance to gain a Frenzy Charge on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_3172519570",
			text: "#% increased Cleave Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1917107304",
			text: "#% increased Dual Strike Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3999206457",
			text: "#% increased Tectonic Slam Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1988467615",
			text: "#% chance to Trigger Commandment of Thunder on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1557531966",
			text: "Lightning Trap Damage Penetrates #% Lightning Resistance",
			type: "enchant"
		},
		{
			id: "enchant.stat_3087527696",
			text: "#% increased Detonate Dead Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2201904285",
			text: "#% increased Firestorm Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_954135826",
			text: "#% increased Heavy Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1017161280",
			text: "Winter Orb has #% increased Area of Effect per Stage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1549898151",
			text: "Grace has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_2634945088",
			text: "#% increased Galvanic Arrow Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2206071316",
			text: "Bane deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1122074043",
			text: "Vitality has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_101788216",
			text: "#% increased Flesh Offering Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3490662882",
			text: "#% increased Shield Charge Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2666843091",
			text: "#% chance to Trigger Commandment of Force on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_155429578",
			text: "Summoned Agony Crawler fires # additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_1575282859",
			text: "Flame Golems have #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3152812191",
			text: "#% increased Ball Lightning Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_478612089",
			text: "Zealotry has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_684174846",
			text: "#% increased Earthquake Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3096183736",
			text: "Tempest Shield chains an additional time",
			type: "enchant"
		},
		{
			id: "enchant.stat_2228518621",
			text: "Raised Zombies deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3283028259",
			text: "Artillery Ballista fires an additional Arrow",
			type: "enchant"
		},
		{
			id: "enchant.stat_702909553",
			text: "#% increased Scorching Ray beam length",
			type: "enchant"
		},
		{
			id: "enchant.stat_2583039202",
			text: "Blade Vortex has #% to Critical Strike Multiplier for each blade",
			type: "enchant"
		},
		{
			id: "enchant.stat_2447447843",
			text: "Wild Strike's Beam Chains an additional time",
			type: "enchant"
		},
		{
			id: "enchant.stat_1491182794",
			text: "#% increased Flame Surge Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3465202861",
			text: "#% of Ice Crash Physical Damage gained as Extra Cold Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4243904146",
			text: "#% Chance on Frenzy to gain an additional Frenzy Charge",
			type: "enchant"
		},
		{
			id: "enchant.stat_2596239449",
			text: "Ancestral Protector Totem deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_430890565",
			text: "#% increased Flame Surge Damage against Burning Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_3280107027",
			text: "Lightning Golems deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3949159285",
			text: "Explosive Arrow has #% increased Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3316767657",
			text: "#% increased Sunder Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1303996723",
			text: "Ancestral Protector Totem grants #% increased Attack Speed while Active",
			type: "enchant"
		},
		{
			id: "enchant.stat_2313072099",
			text: "Shattering Steel deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_387490713",
			text: "#% increased Caustic Arrow Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_819852672",
			text: "#% increased Freezing Pulse Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3371538704",
			text: "#% increased Cold Snap Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_253870897",
			text: "#% increased Sweep Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2753191013",
			text: "#% increased Power Siphon Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1902197291",
			text: "#% increased Whirling Blades Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1477213724",
			text: "Divine Ire Damages an additional nearby Enemy when gaining Stages",
			type: "enchant"
		},
		{
			id: "enchant.stat_648647905",
			text: "Ground Slam has a #% increased angle",
			type: "enchant"
		},
		{
			id: "enchant.stat_4136186767",
			text: "Mirror Arrow and Mirror Arrow Clones deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2846773529",
			text: "#% increased Arctic Breath Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1381908541",
			text: "Summon Raging Spirit has #% chance to summon an extra Minion",
			type: "enchant"
		},
		{
			id: "enchant.stat_524936200",
			text: "#% increased Wild Strike Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1486490067",
			text: "#% increased Reave Radius",
			type: "enchant"
		},
		{
			id: "enchant.stat_3917881666",
			text: "#% reduced Earthquake Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_39356080",
			text: "#% increased Lightning Tendrils Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3359777583",
			text: "#% increased Storm Call Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1532964880",
			text: "#% increased Flameblast Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3948894096",
			text: "#% increased Shock Nova Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_282417259",
			text: "#% increased Flammability Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2224580362",
			text: "Cobra Lash deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1798919988",
			text: "Toxic Rain gains #% of Physical Damage as Extra Chaos Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3053448465",
			text: "#% increased Flameblast Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_242838571",
			text: "#% increased Infernal Blow Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2295263113",
			text: "Vortex has #% increased Area of Effect when Cast on Frostbolt",
			type: "enchant"
		},
		{
			id: "enchant.stat_2287764959",
			text: "#% increased Vigilant Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2003026405",
			text: "#% increased Freezing Pulse Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_340193547",
			text: "#% increased Tectonic Slam Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2843908086",
			text: "#% increased Effect of Curses applied by Bane",
			type: "enchant"
		},
		{
			id: "enchant.stat_2556095677",
			text: "#% increased Phase Run Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_303359279",
			text: "Soulrend also Hinders Enemies, with #% reduced Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2078274993",
			text: "#% increased Frostbolt Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_12756171",
			text: "#% increased Lightning Tendrils Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_1898356067",
			text: "Storm Burst has a #% chance to create an additional Orb",
			type: "enchant"
		},
		{
			id: "enchant.stat_3192966873",
			text: "Purity of Ice has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_3367298564",
			text: "#% increased Ice Trap Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3760588941",
			text: "Heavy Strike has a #% chance to deal Double Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1086309398",
			text: "#% increased Ice Nova Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3072232736",
			text: "Determination has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_1810898461",
			text: "Wither has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3723124286",
			text: "#% increased Whirling Blades Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3031985694",
			text: "Lancing Steel's primary Projectile Pierces 1 additional Target",
			type: "enchant"
		},
		{
			id: "enchant.stat_3730999759",
			text: "#% increased Leap Slam Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1496334795",
			text: "#% increased Caustic Arrow Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3854556792",
			text: "#% increased Caustic Arrow Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_482660590",
			text: "#% increased Detonate Dead Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1691710359",
			text: "#% increased Firestorm Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_343849491",
			text: "#% increased Heavy Strike Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2565809961",
			text: "#% increased Contagion Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_27640220",
			text: "#% to Raised Spectre Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_4117042530",
			text: "Soulrend deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1609523492",
			text: "#% increased Assassin's Mark Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_609478942",
			text: "#% reduced Lightning Warp Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3278819254",
			text: "#% increased Poacher's Mark Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3061969105",
			text: "#% increased Ground Slam Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_4048820315",
			text: "Pyroclast Mine deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_209345940",
			text: "#% increased Lightning Warp Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4170725899",
			text: "Blight has #% increased Hinder Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2600949388",
			text: "#% increased Ice Shot Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_4071708873",
			text: "#% increased Riposte Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_683073695",
			text: "#% increased Despair Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_4084540709",
			text: "#% increased Orb of Storms Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_131320052",
			text: "Converted Enemies have #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2789561878",
			text: "#% increased Projectile Weakness Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2555366825",
			text: "#% of Glacial Hammer Physical Damage gained as Extra Cold Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_444858149",
			text: "Siege Ballista has #% increased Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_4129421630",
			text: "#% increased Lightning Arrow Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_288248772",
			text: "Glacial Hammer has #% chance to Freeze",
			type: "enchant"
		},
		{
			id: "enchant.stat_3930497977",
			text: "#% increased Ice Crash Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3869217625",
			text: "#% increased Viper Strike Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3134777190",
			text: "Lightning Strike pierces an additional Target",
			type: "enchant"
		},
		{
			id: "enchant.stat_1041365824",
			text: "Explosive Arrow has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_551375258",
			text: "#% increased Static Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1374371477",
			text: "#% chance to Trigger Commandment of the Grave when your Skills or Minions Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1201942540",
			text: "#% increased Double Strike Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_78767457",
			text: "#% increased Power Siphon Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3233607638",
			text: "Bone Offering grants an additional #% Chance to Block Attack Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3496292484",
			text: "#% increased Puncture Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_840189382",
			text: "Siege Ballista deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2875508213",
			text: "#% increased Orb of Storms Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1949390531",
			text: "#% increased Molten Shell Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_68809719",
			text: "#% increased Ice Nova Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_599289531",
			text: "Bladestorm deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2298223148",
			text: "#% increased Searing Bond Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1894493605",
			text: "#% increased Freezing Pulse Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_4231484190",
			text: "#% increased Frostbolt Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1056396846",
			text: "#% increased Contagion Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_4207255685",
			text: "Explosive Trap deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1528965411",
			text: "#% increased Warlord's Mark Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1549594869",
			text: "#% increased Dark Pact Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_277116504",
			text: "#% increased Contagion Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2289367813",
			text: "#% increased Cold Snap Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_308326229",
			text: "#% increased Reckoning Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_957864706",
			text: "#% increased Dark Pact Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1646093658",
			text: "#% increased Magma Orb Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_516587640",
			text: "#% increased Enfeeble Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2054059315",
			text: "#% increased Convocation Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2562208244",
			text: "Incinerate has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2287986752",
			text: "#% increased Riposte Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2906742892",
			text: "#% increased Static Strike Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2094281311",
			text: "#% to Animated Guardian Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_2166622264",
			text: "#% increased Flammability Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_103922739",
			text: "#% increased Spark Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1607493537",
			text: "#% increased Bone Offering Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3279758713",
			text: "#% increased Scorching Ray Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3901016205",
			text: "Smite deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3738339949",
			text: "Burning Arrow has #% increased Debuff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2413715772",
			text: "#% increased Bladefall Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1433838252",
			text: "#% chance to Dodge Attack Hits while at maximum Blade Flurry stages",
			type: "enchant"
		},
		{
			id: "enchant.stat_4102483123",
			text: "Steelskin Buff can take #% increased amount of Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1967208066",
			text: "Plague Bearer Buff grants #% to Poison Damage over Time Multiplier while Infecting",
			type: "enchant"
		},
		{
			id: "enchant.stat_2140127102",
			text: "Toxic Rain fires # additional Arrow",
			type: "enchant"
		},
		{
			id: "enchant.stat_3026568825",
			text: "Summoned Holy Relics have #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2471636515",
			text: "Blood and Sand has #% increased Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2231403318",
			text: "#% increased Fireball Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_244125450",
			text: "#% Chance for Puncture to Maim on hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_2484188706",
			text: "#% of Infernal Blow Physical Damage gained as Extra Fire Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1347575155",
			text: "#% increased Lightning Warp Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_780453137",
			text: "#% increased Abyssal Cry Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1730304831",
			text: "Herald of Purity has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_2690620076",
			text: "#% increased Elemental Weakness Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1660758870",
			text: "#% increased Kinetic Blast Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3961497709",
			text: "#% increased Storm Burst Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3229878341",
			text: "#% increased Vulnerability Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_250961191",
			text: "Pride has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_1030003515",
			text: "#% increased Flame Surge Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2983274404",
			text: "#% increased Blink Arrow Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_341054435",
			text: "#% increased Bodyswap Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3564777492",
			text: "Smoke Mine grants additional #% increased Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3804575865",
			text: "#% increased Arctic Breath Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3798244977",
			text: "Summon Skitterbots has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_1561141582",
			text: "#% increased Spectral Shield Throw Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3946561324",
			text: "Smite has a #% chance for lightning to strike another target",
			type: "enchant"
		},
		{
			id: "enchant.stat_3850775143",
			text: "#% increased Leap Slam Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2801853811",
			text: "Holy Flame Totem deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1743954272",
			text: "#% increased Discharge Radius",
			type: "enchant"
		},
		{
			id: "enchant.stat_3738398726",
			text: "Clarity has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_3617955571",
			text: "#% increased Enduring Cry Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_108883700",
			text: "#% increased Ground Slam Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2834109076",
			text: "Your Freezebolt Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4202548383",
			text: "#% increased Sweep Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3348324479",
			text: "#% increased Elemental Weakness Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3772643988",
			text: "#% increased Sentinel of Dominance Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_241781316",
			text: "#% increased Enduring Cry Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_788307702",
			text: "#% increased Ball Lightning Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_600891507",
			text: "#% increased Magma Orb Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1734517294",
			text: "Artillery Ballista Damage Penetrates #% Fire Resistance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2585271359",
			text: "#% increased Viper Strike Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3229580299",
			text: "#% of Burning Arrow Physical Damage gained as Extra Fire Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3269321994",
			text: "Ice Nova Always Freezes",
			type: "enchant"
		},
		{
			id: "enchant.stat_2430635444",
			text: "#% increased Righteous Fire Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3214665792",
			text: "Tectonic Slam has #% chance to create a Charged Slam",
			type: "enchant"
		},
		{
			id: "enchant.stat_1972101281",
			text: "#% increased Vengeance Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3125201823",
			text: "Double Strike has a #% chance to deal Double Damage to Bleeding Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_760606760",
			text: "Perforate creates # Spike",
			type: "enchant"
		},
		{
			id: "enchant.stat_3995612171",
			text: "#% increased Arctic Armour Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1452255482",
			text: "Flamethrower Trap has an additional Flame",
			type: "enchant"
		},
		{
			id: "enchant.stat_4224384031",
			text: "#% increased Ice Trap Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1781106044",
			text: "#% increased Mirror Arrow Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_819890745",
			text: "#% increased Conductivity Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1398394628",
			text: "#% increased Flicker Strike Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3420683028",
			text: "Ball Lightning fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_2143519574",
			text: "#% increased Conversion Trap Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_4147746721",
			text: "Dash travels #% increased distance",
			type: "enchant"
		},
		{
			id: "enchant.stat_944311193",
			text: "Purifying Flame deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3590425794",
			text: "Explosive Arrow has #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2774873427",
			text: "Frostbolt has #% chance to Freeze",
			type: "enchant"
		},
		{
			id: "enchant.stat_4255043252",
			text: "Molten Shell has #% increased Skill Effect Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1152784934",
			text: "Summoned Holy Relics deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1924239636",
			text: "#% increased Punishment Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3285061858",
			text: "Consecrated Path has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1877863115",
			text: "#% increased Bear Trap Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2511915418",
			text: "#% increased Blight Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3503624267",
			text: "Cremation can have up to # additional Geyser at a time",
			type: "enchant"
		},
		{
			id: "enchant.stat_2070247068",
			text: "#% increased Storm Call Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3013068851",
			text: "#% increased Flame Dash Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1934891174",
			text: "#% increased Abyssal Cry Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1601558321",
			text: "#% to Stone Golem Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_2512194486",
			text: "Armageddon Brand has #% increased Activation Frequency",
			type: "enchant"
		},
		{
			id: "enchant.stat_1443215722",
			text: "#% increased Frostbite Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3080391193",
			text: "Summoned Holy Relics have #% increased Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_287319069",
			text: "Dread Banner has #% increased Aura Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2520825974",
			text: "#% to Ice Golem Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_2685860927",
			text: "#% increased Static Strike Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_696995312",
			text: "#% increased Burning Arrow Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1177831984",
			text: "Power Siphon fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_1265055278",
			text: "#% increased Charged Dash Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2420972973",
			text: "#% increased Effect of the Buff granted by your Carrion Golems",
			type: "enchant"
		},
		{
			id: "enchant.stat_88796379",
			text: "#% increased Glacial Cascade Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1698558866",
			text: "Galvanic Arrow has #% increased Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1153159301",
			text: "#% increased Shockwave Totem Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_732320584",
			text: "Lacerate deals # to # added Physical Damage against Bleeding Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_2732675053",
			text: "#% increased Glacial Hammer Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2338484156",
			text: "#% to Lightning Golem Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_1946386823",
			text: "#% to Chaos Golem Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_1803063132",
			text: "Gain #% of Rejuvenation Totem Life Regeneration as extra Mana Regeneration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1588572574",
			text: "#% increased Rejuvenation Totem Aura Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3338074370",
			text: "#% increased Animate Weapon Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2778301298",
			text: "Orb of Storms has #% increased Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_574378310",
			text: "Blast Rain has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3816022821",
			text: "#% increased Arctic Breath Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3367800526",
			text: "#% increased Leap Slam Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_618920318",
			text: "Lancing Steel's additional Projectiles have #% chance to Impale Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_1694915226",
			text: "Explosive Trap has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2387717928",
			text: "#% increased Unearth Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_4259029320",
			text: "#% chance for Phase Run to increase Duration without removing Frenzy Charges",
			type: "enchant"
		},
		{
			id: "enchant.stat_2273926362",
			text: "Withering Step inflicts # additional Withered Debuffs",
			type: "enchant"
		},
		{
			id: "enchant.stat_1220207954",
			text: "#% to Ancestral Protector Totem Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_982975385",
			text: "Lightning Spire Trap deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4147277532",
			text: "#% increased Rallying Cry Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_592861938",
			text: "#% increased Ancestral Protector Totem Placement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2432759583",
			text: "Pyroclast Mine has #% increased Throwing Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2592211591",
			text: "War Banner has #% increased Aura Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2121581717",
			text: "#% increased Tempest Shield Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3854723321",
			text: "#% increased Lacerate Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_775034903",
			text: "#% increased Frost Wall Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1298820272",
			text: "#% to increased Flame Golem Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_3766479096",
			text: "#% increased Warlord's Mark Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2588242810",
			text: "Chain Hook has a #% chance to grant +1 Rage if it Hits Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_2844206732",
			text: "#% increased Punishment Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2948719994",
			text: "#% increased Storm Burst Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3295914630",
			text: "Ice Spear travels #% reduced distance before changing forms",
			type: "enchant"
		},
		{
			id: "enchant.stat_2519689029",
			text: "#% increased Searing Bond Totem Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_3371533847",
			text: "Soulrend fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_3468905159",
			text: "Precision has #% increased Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_4189505564",
			text: "Devouring Totem has #% Chance to Consume an additional corpse",
			type: "enchant"
		},
		{
			id: "enchant.stat_804983774",
			text: "#% increased Reckoning Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2779309910",
			text: "#% increased Double Strike Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_289027663",
			text: "Chain Hook deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_565901339",
			text: "#% increased Shock Nova Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1440798870",
			text: "#% increased Flame Dash Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1171483499",
			text: "Stone Golems deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2882048906",
			text: "Your Shock Nova Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2157671820",
			text: "Venom Gyre has a #% chance to inflict Withered for 2 seconds on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_586167247",
			text: "Unearth Spawns corpses with # Level",
			type: "enchant"
		},
		{
			id: "enchant.stat_3653459847",
			text: "Mirror Arrow and Mirror Arrow Clones have #% increased Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_321894708",
			text: "Stormblast Mine has #% increased Throwing Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_4199670252",
			text: "#% increased Rallying Cry Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3162144587",
			text: "Icicle Mine has #% increased Throwing Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_397438226",
			text: "#% increased Bodyswap Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1447427508",
			text: "#% increased Vengeance Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_918308703",
			text: "#% increased Bear Trap Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2412561418",
			text: "Wave of Conviction has #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2294732229",
			text: "Smite has #% increased Aura Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2791271819",
			text: "Ensnaring Arrow has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3395908304",
			text: "#% increased Conductivity Curse Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1663783758",
			text: "Berserk has #% increased Buff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3536566359",
			text: "Perforate has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_309198891",
			text: "Wave of Conviction deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_494231298",
			text: "Stormblast Mine deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_888039248",
			text: "#% increased Temporal Chains Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2275055843",
			text: "#% increased Vigilant Strike Fortify Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3698446010",
			text: "Ice Trap Damage Penetrates #% Cold Resistance",
			type: "enchant"
		},
		{
			id: "enchant.stat_3953599026",
			text: "#% increased Unearth Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1631824124",
			text: "#% increased Decoy Totem Life",
			type: "enchant"
		},
		{
			id: "enchant.stat_1019790379",
			text: "Berserk has #% reduced Rage loss per second",
			type: "enchant"
		},
		{
			id: "enchant.stat_3505939359",
			text: "Rain of Arrows has #% chance to fire an additional sequence of arrows",
			type: "enchant"
		},
		{
			id: "enchant.stat_1175282728",
			text: "Seismic Trap deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3040033697",
			text: "Bladefall has an additional Volley",
			type: "enchant"
		},
		{
			id: "enchant.stat_4227497218",
			text: "#% increased Poacher's Mark Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1993913925",
			text: "Caustic Arrow has #% chance to inflict Withered on Hit for # second base Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_644285691",
			text: "Chills from Ice Nova Hits always reduce Action Speed by at least #%",
			type: "enchant"
		},
		{
			id: "enchant.stat_1554597333",
			text: "Blink Arrow and Blink Arrow Clones have #% increased Attack Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1849664701",
			text: "Purity of Elements has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_105839441",
			text: "Infernal Blow Debuff deals an additional #% of Damage per Charge",
			type: "enchant"
		},
		{
			id: "enchant.stat_3711386843",
			text: "#% chance to create an additional Animate Weapon copy",
			type: "enchant"
		},
		{
			id: "enchant.stat_2614099660",
			text: "Fire Nova Mine repeats an additional # times",
			type: "enchant"
		},
		{
			id: "enchant.stat_3609207587",
			text: "#% Chance to gain an additional Power Charge on Kill with Power Siphon",
			type: "enchant"
		},
		{
			id: "enchant.stat_2098790581",
			text: "Fireball Always Ignites",
			type: "enchant"
		},
		{
			id: "enchant.stat_447560345",
			text: "Wither has #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_4082863126",
			text: "Holy Flame Totem has #% increased Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1285430327",
			text: "Purity of Lightning has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_3719728947",
			text: "#% increased Smoke Mine Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3816405721",
			text: "Ice Golems deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3100629498",
			text: "Consecrated Ground from Purifying Flame applies #% increased Damage taken to Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_3801130154",
			text: "Ice Spear fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_4031295671",
			text: "#% increased Infernal Blow Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1730598557",
			text: "# Blight Chests are Lucky",
			type: "enchant"
		},
		{
			id: "enchant.stat_2440551805",
			text: "#% increased Shockwave Totem Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_354556858",
			text: "#% increased Galvanic Arrow Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3139672534",
			text: "Wave of Conviction's Exposure applies #% Elemental Resistance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2109176627",
			text: "Frost Bomb has #% increased Debuff Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1615912303",
			text: "Seismic Trap has #% increased Skill Effect Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3931013900",
			text: "#% increased Firestorm explosion Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3787328468",
			text: "Pestilent Strike has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1405738574",
			text: "Ensnaring Arrow has #% increased Debuff Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3011405513",
			text: "Your Arc Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1230050013",
			text: "#% increased Lightning Tendrils Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1260718722",
			text: "#% chance for Blight Chests to drop an additional Reward",
			type: "enchant"
		},
		{
			id: "enchant.stat_708179348",
			text: "#% increased Searing Bond Totem Placement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1270423035",
			text: "Your Meteor Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_1967878868",
			text: "Blink Arrow and Blink Arrow Clones have #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3232905239",
			text: "#% Chance to gain a Power Charge on Critical Strike with Ice Spear",
			type: "enchant"
		},
		{
			id: "enchant.stat_4120821275",
			text: "Malevolence has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_1783696476",
			text: "#% increased Frostbite Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_797408710",
			text: "Charged Dash has #% more Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2048678824",
			text: "Consecrated Path has #% increased teleport range",
			type: "enchant"
		},
		{
			id: "enchant.stat_3317752680",
			text: "#% increased Devouring Totem Leech per second",
			type: "enchant"
		},
		{
			id: "enchant.stat_525771896",
			text: "Flamethrower Trap has #% increased Skill Effect Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2953109663",
			text: "#% chance to Dodge Attack Hits if you have finished Channelling Charged Dash Recently",
			type: "enchant"
		},
		{
			id: "enchant.stat_2380598805",
			text: "#% increased Frost Bomb Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_680880155",
			text: "Steelskin grants #% additional Physical Damage Reduction",
			type: "enchant"
		},
		{
			id: "enchant.stat_2259906777",
			text: "#% increased Shockwave Totem Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3186938438",
			text: "#% increased Puncture Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2680060124",
			text: "#% increased Convocation Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_4151555126",
			text: "#% increased Incinerate Damage for each stage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2575601188",
			text: "#% increased Fire Nova Mine Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3672666316",
			text: "Plague Bearer deals Damage based on an additional #% of Plague Value",
			type: "enchant"
		},
		{
			id: "enchant.stat_1891516164",
			text: "#% increased Spectral Shield Throw Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2159486200",
			text: "Lancing Steel deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_59544006",
			text: "Summoned Carrion Golems have #% to all Elemental Resistances",
			type: "enchant"
		},
		{
			id: "enchant.stat_1654191578",
			text: "#% increased Projectile Weakness Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1570047087",
			text: "Lightning Spire Trap has #% increased Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2337005967",
			text: "Dominating Blow can summon an additional Rare Sentinel of Dominance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2109921176",
			text: "Your Temporal Towers have #% increased Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_4175469673",
			text: "#% increased Cremation Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3179781611",
			text: "#% increased Volatile Dead Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2479762395",
			text: "#% increased Frost Wall Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1556508042",
			text: "Sand Bladestorms move with #% increased speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2938856716",
			text: "#% increased Cremation Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2207890291",
			text: "Lightning Spire Trap has #% increased Skill Effect Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3279786746",
			text: "#% increased Fire Trap Burning Ground Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1451372148",
			text: "#% increased Frost Bomb Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_64670441",
			text: "Pestilent Strike has #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1582085030",
			text: "Your Seismic Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_611022108",
			text: "Shattering Steel grants Fortify on Hitting an Enemy at Close Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_1769497634",
			text: "# to maximum number of Bladestorms",
			type: "enchant"
		},
		{
			id: "enchant.stat_4264622444",
			text: "Ethereal Knives Pierces an additional Target ",
			type: "enchant"
		},
		{
			id: "enchant.stat_1686675991",
			text: "#% increased Decoy Totem Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1056655244",
			text: "Your Glacial Cage Towers have #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_4118537428",
			text: "#% Sweep Knockback Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2836937264",
			text: "# to maximum number of Sentinels of Purity",
			type: "enchant"
		},
		{
			id: "enchant.stat_2844839137",
			text: "Summoned Skitterbots have #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1389191919",
			text: "Seismic Trap releases an additional Wave",
			type: "enchant"
		},
		{
			id: "enchant.stat_740609357",
			text: "#% increased Desecrate Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3524326896",
			text: "#% increased Frost Bomb Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2962501808",
			text: "Flamethrower Trap has #% increased Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3211417111",
			text: "#% increased Fire Nova Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2530563277",
			text: "Siphoning Trap has #% increased Chill Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2933995134",
			text: "Freeze Mine causes Enemies to lose an additional #% Cold Resistance while Frozen",
			type: "enchant"
		},
		{
			id: "enchant.stat_1330754855",
			text: "Towers deal #% more Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_281958409",
			text: "Withering Step has #% increased Elusive Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2423221070",
			text: "#% increased Ice Spear Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2035168499",
			text: "#% increased Freeze Mine Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2550660356",
			text: "Your Summoning Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_1699139870",
			text: "Armageddon Brand deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1953644681",
			text: "#% chance for Immortal Call to increase Duration without removing Endurance Charges",
			type: "enchant"
		},
		{
			id: "enchant.stat_535507671",
			text: "Lightning Spire Trap has #% increased Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_815390778",
			text: "#% increased Molten Shell Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1494168614",
			text: "Shrapnel Ballista Pierces an additional Target",
			type: "enchant"
		},
		{
			id: "enchant.stat_1730614496",
			text: "#% increased Vortex Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2898302567",
			text: "Charged Dash has # to Radius of each Wave's last damage Area",
			type: "enchant"
		},
		{
			id: "enchant.stat_1243906675",
			text: "#% reduced Ball Lightning Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_850390248",
			text: "Minions summoned by Your Summoning Towers have #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4210927948",
			text: "#% increased Lightning Trap Shock Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2931005730",
			text: "Flamethrower Trap has #% increased Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_815588902",
			text: "Frostblink has #% reduced Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1819243251",
			text: "Your Meteor Towers always Stun",
			type: "enchant"
		},
		{
			id: "enchant.stat_2537202749",
			text: "Static Strike has # maximum Beam Targets",
			type: "enchant"
		},
		{
			id: "enchant.stat_1678345858",
			text: "Enemies affected by Bear Trap take #% increased Damage from Trap or Mine Hits",
			type: "enchant"
		},
		{
			id: "enchant.stat_4040760803",
			text: "Summoned Sentinels of Dominance deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2461424099",
			text: "Vortex has #% increased Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_4162139595",
			text: "Flamethrower Trap deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2833259811",
			text: "Shattering Steel fires an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_4224588066",
			text: "Bane has #% increased Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2661979205",
			text: "#% increased Dominating Blow Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_856157011",
			text: "Pestilent Strike deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3269147016",
			text: "Chain Hook has +# Radius per 12 Rage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3070497632",
			text: "Frostblink has #% increased maximum travel distance",
			type: "enchant"
		},
		{
			id: "enchant.stat_2781179464",
			text: "Arctic Breath's Chilling Area has #% increased Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2212298325",
			text: "Divine Ire's beam has #% increased width",
			type: "enchant"
		},
		{
			id: "enchant.stat_2013536039",
			text: "Minions summoned by Your Sentinel Towers have #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1404787106",
			text: "Venom Gyre deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3434272371",
			text: "Your Freezebolt Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_2020183023",
			text: "#% chance to create a Charged Slam",
			type: "enchant"
		},
		{
			id: "enchant.stat_1537296847",
			text: "Flesh and Stone has #% reduced Mana Reservation",
			type: "enchant"
		},
		{
			id: "enchant.stat_3459808765",
			text: "Allocates # (Additional)",
			type: "enchant",
			option: {
				options: [
					{
						id: 30439,
						text: "Lava Lash"
					},
					{
						id: 65224,
						text: "Aspect of the Eagle"
					},
					{
						id: 27301,
						text: "Martial Experience"
					},
					{
						id: 42804,
						text: "Mind Drinker"
					},
					{
						id: 11730,
						text: "Endurance"
					},
					{
						id: 36949,
						text: "Devotion"
					},
					{
						id: 20832,
						text: "Sanctuary"
					},
					{
						id: 14606,
						text: "Butchery"
					},
					{
						id: 35663,
						text: "Strong Arm"
					},
					{
						id: 49318,
						text: "Wrecking Ball"
					},
					{
						id: 10016,
						text: "Executioner"
					},
					{
						id: 3184,
						text: "Bane of Legends"
					},
					{
						id: 17315,
						text: "Overwhelm"
					},
					{
						id: 62817,
						text: "Headsman"
					},
					{
						id: 34484,
						text: "Endless Hunger"
					},
					{
						id: 10143,
						text: "Brutal Fervour"
					},
					{
						id: 38180,
						text: "Impact"
					},
					{
						id: 16306,
						text: "Masterful Form"
					},
					{
						id: 42917,
						text: "Whirling Barrier"
					},
					{
						id: 51559,
						text: "Smashing Strikes"
					},
					{
						id: 39761,
						text: "Counterweight"
					},
					{
						id: 10542,
						text: "Diamond Skin"
					},
					{
						id: 31033,
						text: "Solidity"
					},
					{
						id: 27137,
						text: "Sanctum of Thought"
					},
					{
						id: 63150,
						text: "Ironwood"
					},
					{
						id: 544,
						text: "Surveillance"
					},
					{
						id: 61039,
						text: "Panopticon"
					},
					{
						id: 44207,
						text: "Testudo"
					},
					{
						id: 12878,
						text: "Retaliation"
					},
					{
						id: 25367,
						text: "Blade Master"
					},
					{
						id: 33082,
						text: "Razor's Edge"
					},
					{
						id: 22972,
						text: "Wandslinger"
					},
					{
						id: 16703,
						text: "Skull Cracking"
					},
					{
						id: 40645,
						text: "Bone Breaker"
					},
					{
						id: 24721,
						text: "Ribcage Crusher"
					},
					{
						id: 58218,
						text: "Purity of Flesh"
					},
					{
						id: 15085,
						text: "Ambidexterity"
					},
					{
						id: 54268,
						text: "Blade Barrier"
					},
					{
						id: 53493,
						text: "Annihilation"
					},
					{
						id: 60619,
						text: "Galvanic Hammer"
					},
					{
						id: 39657,
						text: "Pain Forger"
					},
					{
						id: 42009,
						text: "Soul of Steel"
					},
					{
						id: 25058,
						text: "Blood Siphon"
					},
					{
						id: 52157,
						text: "Soul Siphon"
					},
					{
						id: 20528,
						text: "Instability"
					},
					{
						id: 23038,
						text: "Slaughter"
					},
					{
						id: 4940,
						text: "Cleaving"
					},
					{
						id: 33725,
						text: "Swagger"
					},
					{
						id: 26096,
						text: "Hatchet Master"
					},
					{
						id: 30160,
						text: "Fending"
					},
					{
						id: 63921,
						text: "Utmost Swiftness"
					},
					{
						id: 26023,
						text: "Splitting Strikes"
					},
					{
						id: 56716,
						text: "Heart of Thunder"
					},
					{
						id: 11645,
						text: "Breath of Lightning"
					},
					{
						id: 58449,
						text: "Born to Fight"
					},
					{
						id: 54776,
						text: "Mana Flows"
					},
					{
						id: 48438,
						text: "Bravery"
					},
					{
						id: 30225,
						text: "Lightning Walker"
					},
					{
						id: 34661,
						text: "Fire Walker"
					},
					{
						id: 44955,
						text: "Frost Walker"
					},
					{
						id: 54791,
						text: "Claws of the Magpie"
					},
					{
						id: 28503,
						text: "Soul Raker"
					},
					{
						id: 15614,
						text: "Claws of the Hawk"
					},
					{
						id: 12702,
						text: "Path of the Warrior"
					},
					{
						id: 55485,
						text: "Constitution"
					},
					{
						id: 37326,
						text: "Stamina"
					},
					{
						id: 44788,
						text: "Aligned Spirits"
					},
					{
						id: 24383,
						text: "Warrior's Blood"
					},
					{
						id: 4833,
						text: "Vigour"
					},
					{
						id: 14813,
						text: "Revelry"
					},
					{
						id: 36687,
						text: "Avatar of the Hunt"
					},
					{
						id: 16243,
						text: "Fusillade"
					},
					{
						id: 41476,
						text: "Elder Power"
					},
					{
						id: 52031,
						text: "Disintegration"
					},
					{
						id: 7085,
						text: "Weapon Artistry"
					},
					{
						id: 31508,
						text: "Aspect of the Lynx"
					},
					{
						id: 24256,
						text: "Dynamo"
					},
					{
						id: 63422,
						text: "Lust for Carnage"
					},
					{
						id: 38516,
						text: "Righteous Decree"
					},
					{
						id: 50858,
						text: "Battle Cry"
					},
					{
						id: 2225,
						text: "Eagle Eye"
					},
					{
						id: 64395,
						text: "Blunt Trauma"
					},
					{
						id: 56094,
						text: "One with the River"
					},
					{
						id: 6289,
						text: "Bloodless"
					},
					{
						id: 1340,
						text: "Rampart"
					},
					{
						id: 51748,
						text: "Cursed Concoction"
					},
					{
						id: 38922,
						text: "Stun Mastery"
					},
					{
						id: 56276,
						text: "Nightstalker"
					},
					{
						id: 33545,
						text: "Harrier"
					},
					{
						id: 53802,
						text: "Essence Extraction"
					},
					{
						id: 21413,
						text: "Combat Stamina"
					},
					{
						id: 26557,
						text: "Static Blows"
					},
					{
						id: 3452,
						text: "Foresight"
					},
					{
						id: 48298,
						text: "Insightfulness"
					},
					{
						id: 63944,
						text: "Prism Weave"
					},
					{
						id: 57199,
						text: "Fangs of Frost"
					},
					{
						id: 32345,
						text: "Alacrity"
					},
					{
						id: 20835,
						text: "Brinkmanship"
					},
					{
						id: 6615,
						text: "Arcing Blows"
					},
					{
						id: 7555,
						text: "Crackling Speed"
					},
					{
						id: 63207,
						text: "Tempest Blast"
					},
					{
						id: 10511,
						text: "Singular Focus"
					},
					{
						id: 38849,
						text: "Searing Heat"
					},
					{
						id: 19897,
						text: "Death Attunement"
					},
					{
						id: 36490,
						text: "Flaying"
					},
					{
						id: 8920,
						text: "Backstabbing"
					},
					{
						id: 47471,
						text: "Overcharged"
					},
					{
						id: 19506,
						text: "Path of the Hunter"
					},
					{
						id: 56648,
						text: "Claws of the Falcon"
					},
					{
						id: 65053,
						text: "Essence Sap"
					},
					{
						id: 61982,
						text: "Grave Intentions"
					},
					{
						id: 36915,
						text: "Sacrifice"
					},
					{
						id: 42649,
						text: "Snowforged"
					},
					{
						id: 27611,
						text: "Lord of the Dead"
					},
					{
						id: 27308,
						text: "Gravepact"
					},
					{
						id: 50029,
						text: "Unnatural Calm"
					},
					{
						id: 21634,
						text: "Arcane Chemistry"
					},
					{
						id: 34173,
						text: "Overcharge"
					},
					{
						id: 35958,
						text: "Faith and Steel"
					},
					{
						id: 63357,
						text: "Path of the Duelist"
					},
					{
						id: 24798,
						text: "Duelist Ascendancy"
					},
					{
						id: 58198,
						text: "Fingers of Frost"
					},
					{
						id: 60501,
						text: "Heart of Flame"
					},
					{
						id: 11924,
						text: "Breath of Flames"
					},
					{
						id: 2550,
						text: "Arsonist"
					},
					{
						id: 5430,
						text: "Magmatic Strikes"
					},
					{
						id: 62577,
						text: "Essence Surge"
					},
					{
						id: 37078,
						text: "Path of the Savant"
					},
					{
						id: 8833,
						text: "Heart of Ice"
					},
					{
						id: 21460,
						text: "Breath of Rime"
					},
					{
						id: 25411,
						text: "Infused"
					},
					{
						id: 32176,
						text: "Soul Thief"
					},
					{
						id: 29049,
						text: "Holy Fire"
					},
					{
						id: 46842,
						text: "Arcane Potency"
					},
					{
						id: 61308,
						text: "Amplify"
					},
					{
						id: 24362,
						text: "Deep Thoughts"
					},
					{
						id: 21958,
						text: "Cruel Preparation"
					},
					{
						id: 21330,
						text: "Quick Recovery"
					},
					{
						id: 4242,
						text: "Unstable Infusion"
					},
					{
						id: 48239,
						text: "Deadly Infusion"
					},
					{
						id: 21264,
						text: "Ambush and Assassinate"
					},
					{
						id: 19083,
						text: "Opportunistic"
					},
					{
						id: 19598,
						text: "Toxic Delivery"
					},
					{
						id: 1945,
						text: "Noxious Strike"
					},
					{
						id: 28782,
						text: "Mistwalker"
					},
					{
						id: 10835,
						text: "Dreamer"
					},
					{
						id: 42795,
						text: "Arcane Focus"
					},
					{
						id: 27163,
						text: "Arcane Will"
					},
					{
						id: 47306,
						text: "Throatseeker"
					},
					{
						id: 9788,
						text: "Nimbleness"
					},
					{
						id: 62094,
						text: "Lucidity"
					},
					{
						id: 9432,
						text: "Mental Rapidity"
					},
					{
						id: 26620,
						text: "Corruption"
					},
					{
						id: 9261,
						text: "Disciple of the Forbidden"
					},
					{
						id: 11784,
						text: "Gemini"
					},
					{
						id: 45067,
						text: "Thrill Seeker"
					},
					{
						id: 1006,
						text: "Potency of Will"
					},
					{
						id: 53042,
						text: "Exceptional Performance"
					},
					{
						id: 15842,
						text: "Precise Interception"
					},
					{
						id: 38246,
						text: "Aspect of the Panther"
					},
					{
						id: 21973,
						text: "Decay Ward"
					},
					{
						id: 56359,
						text: "Red Storm"
					},
					{
						id: 32227,
						text: "Adder's Touch"
					},
					{
						id: 59151,
						text: "Brutal Blade"
					},
					{
						id: 1568,
						text: "Fatal Blade"
					},
					{
						id: 529,
						text: "Poisonous Fangs"
					},
					{
						id: 7136,
						text: "Master Sapper"
					},
					{
						id: 1405,
						text: "From the Shadows"
					},
					{
						id: 37504,
						text: "Claws of the Pride"
					},
					{
						id: 42720,
						text: "Heavy Draw"
					},
					{
						id: 48823,
						text: "Deadly Draw"
					},
					{
						id: 49459,
						text: "King of the Hill"
					},
					{
						id: 51881,
						text: "Master Fletcher"
					},
					{
						id: 63635,
						text: "Primal Manifestation"
					},
					{
						id: 9535,
						text: "Hunter's Gambit"
					},
					{
						id: 48614,
						text: "Fervour"
					},
					{
						id: 42443,
						text: "Frenetic"
					},
					{
						id: 27788,
						text: "Blood Drinker"
					},
					{
						id: 23066,
						text: "Savagery"
					},
					{
						id: 21435,
						text: "Cloth and Chain"
					},
					{
						id: 10115,
						text: "Prodigal Perfection"
					},
					{
						id: 18174,
						text: "Mystic Bulwark"
					},
					{
						id: 19858,
						text: "Herbalism"
					},
					{
						id: 44103,
						text: "Reflexes"
					},
					{
						id: 48556,
						text: "Thunderous Salvos"
					},
					{
						id: 65308,
						text: "Deflection"
					},
					{
						id: 65210,
						text: "Heart of Oak"
					},
					{
						id: 25178,
						text: "Primal Spirit"
					},
					{
						id: 51440,
						text: "Druidic Rite"
					},
					{
						id: 2715,
						text: "Quickstep"
					},
					{
						id: 40743,
						text: "Crystal Skin"
					},
					{
						id: 49416,
						text: "Adamant"
					},
					{
						id: 25456,
						text: "Dervish"
					},
					{
						id: 570,
						text: "Dazzling Strikes"
					},
					{
						id: 49621,
						text: "Acuity"
					},
					{
						id: 17171,
						text: "Flash Freeze"
					},
					{
						id: 43385,
						text: "Winter Spirit"
					},
					{
						id: 52230,
						text: "Weathered Hunter"
					},
					{
						id: 47484,
						text: "Depth Perception"
					},
					{
						id: 50338,
						text: "Ballistic Mastery"
					},
					{
						id: 1382,
						text: "Spirit Void"
					},
					{
						id: 39530,
						text: "Vitality Void"
					},
					{
						id: 26866,
						text: "Sanctity"
					},
					{
						id: 60002,
						text: "Fury Bolts"
					},
					{
						id: 13922,
						text: "Steadfast"
					},
					{
						id: 61198,
						text: "Heart of the Warrior"
					},
					{
						id: 12795,
						text: "Versatility"
					},
					{
						id: 47743,
						text: "Farsight"
					},
					{
						id: 57900,
						text: "Command of Steel"
					},
					{
						id: 65502,
						text: "Heartseeker"
					},
					{
						id: 7263,
						text: "Swift Venoms"
					},
					{
						id: 34666,
						text: "Destroyer"
					},
					{
						id: 31667,
						text: "Arohongui, Moon's Presence"
					},
					{
						id: 48480,
						text: "Tasalio, Cleansing Water"
					},
					{
						id: 53095,
						text: "Tukohama, War's Herald"
					},
					{
						id: 5029,
						text: "Tawhoa, Forest's Strength"
					},
					{
						id: 32249,
						text: "Valako, Storm's Embrace"
					},
					{
						id: 41119,
						text: "Lethality"
					},
					{
						id: 27203,
						text: "Heart and Soul"
					},
					{
						id: 8135,
						text: "Practical Application"
					},
					{
						id: 58831,
						text: "Disemboweling"
					},
					{
						id: 59866,
						text: "Honed Edge"
					},
					{
						id: 30693,
						text: "Divine Fervour"
					},
					{
						id: 33435,
						text: "Holy Dominion"
					},
					{
						id: 54694,
						text: "Light of Divinity"
					},
					{
						id: 5289,
						text: "Battle Rouse"
					},
					{
						id: 43689,
						text: "Spiritual Command"
					},
					{
						id: 52714,
						text: "Prowess"
					},
					{
						id: 9567,
						text: "Light Eater"
					},
					{
						id: 15027,
						text: "Beef"
					},
					{
						id: 27929,
						text: "Deep Wisdom"
					},
					{
						id: 32059,
						text: "Titanic Impacts"
					},
					{
						id: 55772,
						text: "Blacksmith's Clout"
					},
					{
						id: 922,
						text: "Divine Guidance"
					},
					{
						id: 29026,
						text: "Sanctuary of Thought"
					},
					{
						id: 1105,
						text: "Pursuit of Faith"
					},
					{
						id: 34434,
						text: "Ritual of Awakening"
					},
					{
						id: 25651,
						text: "Conviction of Power"
					},
					{
						id: 60462,
						text: "Illuminated Devotion"
					},
					{
						id: 40510,
						text: "Arcane Blessing"
					},
					{
						id: 51492,
						text: "Sign of Purpose"
					},
					{
						id: 33287,
						text: "Juggernaut"
					},
					{
						id: 44988,
						text: "Stabbing Thirst"
					},
					{
						id: 44562,
						text: "Shaman's Dominion"
					},
					{
						id: 7688,
						text: "Enduring Bond"
					},
					{
						id: 53992,
						text: "Path of the Shadow"
					},
					{
						id: 772,
						text: "Shadow Ascendancy"
					},
					{
						id: 65093,
						text: "Bladedancer"
					},
					{
						id: 18703,
						text: "Graceful Assault"
					},
					{
						id: 19103,
						text: "Righteous Army"
					},
					{
						id: 15046,
						text: "Redemption"
					},
					{
						id: 4177,
						text: "Spiritual Aid"
					},
					{
						id: 56722,
						text: "Path of the Witch"
					},
					{
						id: 51782,
						text: "Witch Ascendancy"
					},
					{
						id: 39790,
						text: "Sanctuary"
					},
					{
						id: 10153,
						text: "Physique"
					},
					{
						id: 55146,
						text: "Time of Need"
					},
					{
						id: 42264,
						text: "Radiant Faith"
					},
					{
						id: 39728,
						text: "Bastion of Hope"
					},
					{
						id: 61372,
						text: "Harmony of Purpose"
					},
					{
						id: 64768,
						text: "Unwavering Faith"
					},
					{
						id: 4494,
						text: "Radiant Crusade"
					},
					{
						id: 19641,
						text: "Unwavering Crusade"
					},
					{
						id: 34009,
						text: "Master of the Arena"
					},
					{
						id: 48807,
						text: "Art of the Gladiator"
					},
					{
						id: 56029,
						text: "Agility"
					},
					{
						id: 15711,
						text: "Blast Radius"
					},
					{
						id: 22356,
						text: "Hematophagy"
					},
					{
						id: 5456,
						text: "Might"
					},
					{
						id: 6237,
						text: "Precision"
					},
					{
						id: 41472,
						text: "Discipline and Training"
					},
					{
						id: 39743,
						text: "Mysticism"
					},
					{
						id: 15852,
						text: "Ethereal Feast"
					},
					{
						id: 34601,
						text: "Proficiency"
					},
					{
						id: 61689,
						text: "Blast Cascade"
					},
					{
						id: 21389,
						text: "Runesmith"
					},
					{
						id: 32245,
						text: "Expertise"
					},
					{
						id: 50197,
						text: "Ancestral Knowledge"
					},
					{
						id: 65273,
						text: "Enigmatic Reach"
					},
					{
						id: 53118,
						text: "Barbarism"
					},
					{
						id: 11420,
						text: "Arcanist's Dominion"
					},
					{
						id: 60180,
						text: "Thief's Craft"
					},
					{
						id: 54877,
						text: "Path of the Templar"
					},
					{
						id: 15435,
						text: "Templar Ascendancy"
					},
					{
						id: 33582,
						text: "Forceful Skewering"
					},
					{
						id: 64588,
						text: "Beacon of Ruin"
					},
					{
						id: 51391,
						text: "Shaper of Desolation"
					},
					{
						id: 56461,
						text: "Liege of the Primordial"
					},
					{
						id: 61259,
						text: "Mastermind of Discord"
					},
					{
						id: 57197,
						text: "Pendulum of Destruction"
					},
					{
						id: 4917,
						text: "Paragon of Calamity"
					},
					{
						id: 258,
						text: "Elemancer"
					},
					{
						id: 21297,
						text: "High Explosives"
					},
					{
						id: 55380,
						text: "Clever Construction"
					},
					{
						id: 33777,
						text: "Devastating Devices"
					},
					{
						id: 53114,
						text: "Revenge of the Hunted"
					},
					{
						id: 63251,
						text: "Charging Offensive"
					},
					{
						id: 6770,
						text: "Arcane Guarding"
					},
					{
						id: 35685,
						text: "Fearsome Force"
					},
					{
						id: 37647,
						text: "Dismembering"
					},
					{
						id: 21228,
						text: "Piercing Shots"
					},
					{
						id: 36874,
						text: "Wisdom of the Glade"
					},
					{
						id: 18025,
						text: "Hard Knocks"
					},
					{
						id: 59556,
						text: "Expeditious Munitions"
					},
					{
						id: 15400,
						text: "Skittering Runes"
					},
					{
						id: 64077,
						text: "Ophidian Aim"
					},
					{
						id: 5823,
						text: "Coordination"
					},
					{
						id: 36281,
						text: "Primeval Force"
					},
					{
						id: 63976,
						text: "Shaper"
					},
					{
						id: 49254,
						text: "Retribution"
					},
					{
						id: 16246,
						text: "Tranquility"
					},
					{
						id: 8001,
						text: "Lethal Assault"
					},
					{
						id: 41989,
						text: "Resourcefulness"
					},
					{
						id: 31359,
						text: "Fatal Toxins"
					},
					{
						id: 54142,
						text: "Finesse"
					},
					{
						id: 28754,
						text: "Assassination"
					},
					{
						id: 46965,
						text: "Saboteur"
					},
					{
						id: 42686,
						text: "Elemental Focus"
					},
					{
						id: 18707,
						text: "Method to the Madness"
					},
					{
						id: 12809,
						text: "Berserking"
					},
					{
						id: 6,
						text: "Twin Terrors"
					},
					{
						id: 32251,
						text: "War Bringer"
					},
					{
						id: 57560,
						text: "Rite of Ruin"
					},
					{
						id: 9271,
						text: "Pain Reaver"
					},
					{
						id: 38999,
						text: "Flawless Savagery"
					},
					{
						id: 24528,
						text: "Crave the Slaughter"
					},
					{
						id: 59920,
						text: "Aspect of Carnage"
					},
					{
						id: 29630,
						text: "Blitz"
					},
					{
						id: 61981,
						text: "Doom Cast"
					},
					{
						id: 35894,
						text: "Trickery"
					},
					{
						id: 60737,
						text: "Sleight of Hand"
					},
					{
						id: 51212,
						text: "Entropy"
					},
					{
						id: 33903,
						text: "Will of Blades"
					},
					{
						id: 57839,
						text: "Blade of Cunning"
					},
					{
						id: 1325,
						text: "Golem's Blood"
					},
					{
						id: 64217,
						text: "Aspect of Stone"
					},
					{
						id: 24133,
						text: "Survivalist"
					},
					{
						id: 19069,
						text: "Thick Skin"
					},
					{
						id: 49969,
						text: "Bludgeon Blitz"
					},
					{
						id: 18769,
						text: "Written in Blood"
					},
					{
						id: 53759,
						text: "Cleansed Thoughts"
					},
					{
						id: 49538,
						text: "Defiance"
					},
					{
						id: 22535,
						text: "Whispers of Doom"
					},
					{
						id: 39986,
						text: "Hex Master"
					},
					{
						id: 32932,
						text: "Sovereignty"
					},
					{
						id: 6799,
						text: "Charisma"
					},
					{
						id: 12143,
						text: "Influence"
					},
					{
						id: 65097,
						text: "Leadership"
					},
					{
						id: 33718,
						text: "Champion of the Cause"
					},
					{
						id: 24050,
						text: "Coldhearted Calculation"
					},
					{
						id: 36859,
						text: "Steelwood Stance"
					},
					{
						id: 46408,
						text: "Fangs of the Viper"
					},
					{
						id: 24324,
						text: "Explosive Impact"
					},
					{
						id: 4481,
						text: "Forces of Nature"
					},
					{
						id: 32947,
						text: "Swift Killer"
					},
					{
						id: 55867,
						text: "Patient Reaper"
					},
					{
						id: 28884,
						text: "Ghost Dance"
					},
					{
						id: 29825,
						text: "Escape Artist"
					},
					{
						id: 41891,
						text: "Prolonged Pain"
					},
					{
						id: 23225,
						text: "Weave the Arcane"
					},
					{
						id: 57331,
						text: "Harness the Void"
					},
					{
						id: 30471,
						text: "True Strike"
					},
					{
						id: 48698,
						text: "Void Barrier"
					},
					{
						id: 22702,
						text: "Serpent Stance"
					},
					{
						id: 6967,
						text: "Command of the Elements"
					},
					{
						id: 16940,
						text: "Pyromaniac"
					},
					{
						id: 5087,
						text: "Born in the Shadows"
					},
					{
						id: 14103,
						text: "Explosives Expert"
					},
					{
						id: 51462,
						text: "Bomb Specialist"
					},
					{
						id: 28535,
						text: "Perfect Crime"
					},
					{
						id: 39834,
						text: "Demolitions Specialist"
					},
					{
						id: 38918,
						text: "Chain Reaction"
					},
					{
						id: 53757,
						text: "Shamanistic Fury"
					},
					{
						id: 63933,
						text: "Totemic Zeal"
					},
					{
						id: 9055,
						text: "Volatile Mines"
					},
					{
						id: 25409,
						text: "Indomitable Army"
					},
					{
						id: 19144,
						text: "Sentinel"
					},
					{
						id: 23690,
						text: "Arcane Vision"
					},
					{
						id: 31257,
						text: "Words of Glory"
					},
					{
						id: 32455,
						text: "Storm Weaver"
					},
					{
						id: 27190,
						text: "Hasty Reconstruction"
					},
					{
						id: 45317,
						text: "Ash, Frost and Storm"
					},
					{
						id: 42041,
						text: "Profane Chemistry"
					},
					{
						id: 47065,
						text: "Master of Force"
					},
					{
						id: 49379,
						text: "Hired Killer"
					},
					{
						id: 18865,
						text: "Melding"
					},
					{
						id: 13164,
						text: "Divine Judgement"
					},
					{
						id: 44347,
						text: "Divine Fury"
					},
					{
						id: 14665,
						text: "Divine Wrath"
					},
					{
						id: 65108,
						text: "Tireless"
					},
					{
						id: 26294,
						text: "Bloodletting"
					},
					{
						id: 40849,
						text: "Transcendence"
					},
					{
						id: 46904,
						text: "Arcane Swiftness"
					},
					{
						id: 62595,
						text: "Unyielding"
					},
					{
						id: 44297,
						text: "Undeniable"
					},
					{
						id: 1734,
						text: "Unflinching"
					},
					{
						id: 56789,
						text: "Unrelenting"
					},
					{
						id: 5819,
						text: "Unstoppable"
					},
					{
						id: 53816,
						text: "Unbreakable"
					},
					{
						id: 50692,
						text: "Ngamahu, Flame's Advance"
					},
					{
						id: 1731,
						text: "Hinekora, Death's Fury"
					},
					{
						id: 61355,
						text: "Ramako, Sun's Light"
					},
					{
						id: 31364,
						text: "Way of the Poacher"
					},
					{
						id: 16848,
						text: "Avatar of the Slaughter"
					},
					{
						id: 4849,
						text: "Rapid Assault"
					},
					{
						id: 11597,
						text: "Avatar of the Chase"
					},
					{
						id: 33645,
						text: "Quartz Infusion"
					},
					{
						id: 55509,
						text: "Avatar of the Veil"
					},
					{
						id: 5443,
						text: "Fast and Deadly"
					},
					{
						id: 61627,
						text: "Ricochet"
					},
					{
						id: 26067,
						text: "Endless Munitions"
					},
					{
						id: 45313,
						text: "Far Shot"
					},
					{
						id: 44482,
						text: "Rupture"
					},
					{
						id: 21455,
						text: "Powerful Precision"
					},
					{
						id: 24848,
						text: "Gathering Winds"
					},
					{
						id: 27864,
						text: "Gratuitous Violence"
					},
					{
						id: 15616,
						text: "Blood in the Eyes"
					},
					{
						id: 52575,
						text: "Outmatch and Outlast"
					},
					{
						id: 8419,
						text: "Painforged"
					},
					{
						id: 63490,
						text: "Violent Retaliation"
					},
					{
						id: 2598,
						text: "Versatile Combatant"
					},
					{
						id: 758,
						text: "Arena Challenger"
					},
					{
						id: 51101,
						text: "Nature's Adrenaline"
					},
					{
						id: 63293,
						text: "Master Surgeon"
					},
					{
						id: 65296,
						text: "Nature's Boon"
					},
					{
						id: 61805,
						text: "Master Alchemist"
					},
					{
						id: 6038,
						text: "Veteran Bowyer"
					},
					{
						id: 40813,
						text: "Nature's Reprisal"
					},
					{
						id: 1697,
						text: "Master Toxicist"
					},
					{
						id: 37127,
						text: "Profane Bloom"
					},
					{
						id: 31344,
						text: "Malediction"
					},
					{
						id: 37492,
						text: "Vile Bastion"
					},
					{
						id: 27096,
						text: "Void Beacon"
					},
					{
						id: 62504,
						text: "Forbidden Power"
					},
					{
						id: 25309,
						text: "Withering Presence"
					},
					{
						id: 47630,
						text: "Frigid Wake"
					},
					{
						id: 54159,
						text: "Mindless Aggression"
					},
					{
						id: 65153,
						text: "Unnatural Strength"
					},
					{
						id: 14603,
						text: "Bone Barrier"
					},
					{
						id: 48719,
						text: "Mistress of Sacrifice"
					},
					{
						id: 36017,
						text: "Commander of Darkness"
					},
					{
						id: 11490,
						text: "Plaguebringer"
					},
					{
						id: 23572,
						text: "Corpse Pact"
					},
					{
						id: 3554,
						text: "Essence Glutton"
					},
					{
						id: 31700,
						text: "Fortitude"
					},
					{
						id: 33940,
						text: "Unstoppable Hero"
					},
					{
						id: 35750,
						text: "Conqueror"
					},
					{
						id: 56967,
						text: "Worthy Foe"
					},
					{
						id: 11412,
						text: "Inspirational"
					},
					{
						id: 27604,
						text: "First to Strike, Last to Fall"
					},
					{
						id: 13374,
						text: "Master of Metal"
					},
					{
						id: 48214,
						text: "Inevitable Judgement"
					},
					{
						id: 40059,
						text: "Augury of Penitence"
					},
					{
						id: 3154,
						text: "Instruments of Virtue"
					},
					{
						id: 32816,
						text: "Pious Path"
					},
					{
						id: 53884,
						text: "Righteous Providence"
					},
					{
						id: 7618,
						text: "Path of the Ranger"
					},
					{
						id: 49532,
						text: "Ranger Ascendancy"
					},
					{
						id: 24755,
						text: "Path of the Marauder"
					},
					{
						id: 61437,
						text: "Marauder Ascendancy"
					},
					{
						id: 9864,
						text: "Growth and Decay"
					},
					{
						id: 53013,
						text: "Atrophy"
					},
					{
						id: 54713,
						text: "Force Shaper"
					},
					{
						id: 59605,
						text: "Unstable Munitions"
					},
					{
						id: 21602,
						text: "Destructive Apparatus"
					},
					{
						id: 59766,
						text: "Dirty Techniques"
					},
					{
						id: 16236,
						text: "Toxic Strikes"
					},
					{
						id: 29861,
						text: "Explosive Runes"
					},
					{
						id: 44824,
						text: "Dark Arts"
					},
					{
						id: 7918,
						text: "Enigmatic Defence"
					},
					{
						id: 53573,
						text: "Arcane Expanse"
					},
					{
						id: 63727,
						text: "Gladiator's Perseverance"
					},
					{
						id: 3309,
						text: "Fleetfoot"
					},
					{
						id: 17608,
						text: "Silent Steps"
					},
					{
						id: 15344,
						text: "Freedom of Movement"
					},
					{
						id: 54629,
						text: "Inexorable"
					},
					{
						id: 2959,
						text: "Unpredictable Offensive"
					},
					{
						id: 9194,
						text: "Swift Skewering"
					},
					{
						id: 58921,
						text: "Disciple of the Slaughter"
					},
					{
						id: 64882,
						text: "Disciple of the Unyielding"
					},
					{
						id: 8458,
						text: "Longshot"
					},
					{
						id: 49772,
						text: "Utmost Might"
					},
					{
						id: 55114,
						text: "Utmost Intellect"
					},
					{
						id: 60031,
						text: "Harvester of Foes"
					},
					{
						id: 52090,
						text: "Feller of Foes"
					},
					{
						id: 5126,
						text: "Spinecruncher"
					},
					{
						id: 35436,
						text: "Kinetic Impacts"
					},
					{
						id: 861,
						text: "Aggressive Bastion"
					},
					{
						id: 51108,
						text: "Arcane Capacitor"
					},
					{
						id: 29381,
						text: "Ravenous Horde"
					},
					{
						id: 34506,
						text: "Golem Commander"
					},
					{
						id: 41137,
						text: "Aqueous Accelerant"
					},
					{
						id: 6233,
						text: "Blast Waves"
					},
					{
						id: 45608,
						text: "Successive Detonations"
					},
					{
						id: 44102,
						text: "Efficient Explosives"
					},
					{
						id: 9015,
						text: "Dire Torment"
					},
					{
						id: 15290,
						text: "Watchtowers"
					},
					{
						id: 38706,
						text: "Way of the Warrior"
					},
					{
						id: 41307,
						text: "Deadly Inclinations"
					},
					{
						id: 62596,
						text: "Mystic Talents"
					},
					{
						id: 57006,
						text: "Vengeant Cascade"
					},
					{
						id: 27119,
						text: "Tribal Fury"
					},
					{
						id: 52282,
						text: "Tenacity"
					},
					{
						id: 5624,
						text: "Crusader"
					},
					{
						id: 56207,
						text: "Hardened Scars"
					},
					{
						id: 36736,
						text: "Burning Brutality"
					},
					{
						id: 46471,
						text: "Shocking Strikes"
					}
				]
			}
		},
		{
			id: "enchant.stat_4172171622",
			text: "Dash has # Cooldown",
			type: "enchant"
		},
		{
			id: "enchant.stat_2673745094",
			text: "Siphoning Trap's beam to you grants #% reduced Damage taken for each other beam",
			type: "enchant"
		},
		{
			id: "enchant.stat_27499777",
			text: "Your Chilling Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_3686368306",
			text: "Siphoning Trap deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3618430531",
			text: "Seismic Trap has #% increased Cooldown Recovery Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3346280197",
			text: "Your Imbuing Towers have #% increased Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_1104507216",
			text: "Lightning Spire Trap strikes an additional area",
			type: "enchant"
		},
		{
			id: "enchant.stat_4166695945",
			text: "Siphoning Trap has #% increased Skill Effect Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_1139911029",
			text: "Your Chilling Towers have #% increased effect of Chill",
			type: "enchant"
		},
		{
			id: "enchant.stat_1572544406",
			text: "Your Arc Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_1954529734",
			text: "Purifying Flame has #% increased Area of Effect if targeting Consecrated Ground",
			type: "enchant"
		},
		{
			id: "enchant.stat_2396402660",
			text: "Your Meteor Towers drop an additional Meteor",
			type: "enchant"
		},
		{
			id: "enchant.stat_2078691497",
			text: "#% increased Cost of Building and Upgrading Towers",
			type: "enchant"
		},
		{
			id: "enchant.stat_339673147",
			text: "Storm Burst has a 15% chance to create an additional Orb",
			type: "enchant"
		},
		{
			id: "enchant.stat_2563177940",
			text: "Venom Gyre has a #% chance to keep caught Projectiles fired by using Whirling Blades",
			type: "enchant"
		},
		{
			id: "enchant.stat_2454791895",
			text: "Your Glacial Cage Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_2306522833",
			text: "#% increased Monster Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1213017413",
			text: "Shrapnel Ballista has #% increased Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1960580674",
			text: "Your Lightning Storm Towers deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_634375806",
			text: "20% chance to Summon an additional Skeleton Warrior with Summon Skeleton",
			type: "enchant"
		},
		{
			id: "enchant.stat_691673624",
			text: "Immortal Call has #% increased Buff Duration per Endurance Charge removed",
			type: "enchant"
		},
		{
			id: "enchant.stat_884220218",
			text: "#% chance to Avoid interruption from Stuns while Casting Storm Burst",
			type: "enchant"
		},
		{
			id: "enchant.stat_2807947",
			text: "Consecrated Ground from Holy Flame Totem applies #% increased Damage taken to Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_246356360",
			text: "Your Empowering Towers have #% increased Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_3781924200",
			text: "Ice Shot has #% increased Area of Effect angle",
			type: "enchant"
		},
		{
			id: "enchant.stat_3593547682",
			text: "Summoned Carrion Golems deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4048897123",
			text: "Your Scout Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_2005440071",
			text: "Pyroclast Mine has #% increased Throwing Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3976295500",
			text: "#% increased Icicle Mine Throwing Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2718657160",
			text: "Stormblast Mine has #% increased Aura Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2410280305",
			text: "Your Fireball Towers have #% increased Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1797913614",
			text: "Your Freezebolt Towers fire an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_1035680542",
			text: "Your Glacial Cage Towers have #% increased Cooldown Recovery",
			type: "enchant"
		},
		{
			id: "enchant.stat_4089551985",
			text: "Your Temporal Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_665179774",
			text: "Your Flamethrower Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_2679945072",
			text: "#% increased Desecrate Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_2097223452",
			text: "Your Empowering Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_732631533",
			text: "Cobra Lash has #% increased Projectile Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3687716368",
			text: "Your Flamethrower Towers deal full damage to Fire Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_2541263647",
			text: "Your Freezebolt Tower deal full damage to Cold Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_1357120250",
			text: "Your Chilling Towers freeze enemies for # seconds while they are affected by chilling beams",
			type: "enchant"
		},
		{
			id: "enchant.stat_57434274",
			text: "#% increased Experience gain (Maps)",
			type: "enchant"
		},
		{
			id: "enchant.stat_1843683045",
			text: "Your Sentinel Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_117905700",
			text: "Your Fireball Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_1008350423",
			text: "Your Fireball Towers fire an additional Projectile",
			type: "enchant"
		},
		{
			id: "enchant.stat_971955285",
			text: "Minions summoned by Your Scout Towers have #% increased Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2410117075",
			text: "Your Seismic Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_1789548201",
			text: "Your Lightning Storm Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_3044601282",
			text: "Your Imbuing Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_495713612",
			text: "#% increased Duration of Shrine Effects on Players",
			type: "enchant"
		},
		{
			id: "enchant.stat_4006050359",
			text: "Volatile Dead Consumes up to 1 additional corpse",
			type: "enchant"
		},
		{
			id: "enchant.stat_4173465567",
			text: "Your Arc Towers repeats # additional Times",
			type: "enchant"
		},
		{
			id: "enchant.stat_453789911",
			text: "Players have #% increased Movement Speed for each Poison on them",
			type: "enchant"
		},
		{
			id: "enchant.stat_573352991",
			text: "Your Stone Gaze Towers have #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_726779274",
			text: "Your Smothering Towers have #% increased Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_2166020726",
			text: "Your Empowering Towers also grant #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4039396512",
			text: "Your Flamethrower Towers have #% increased Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_2911217910",
			text: "Your Stone Gaze Cage Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_2329255938",
			text: "Nemesis Monsters drop # additional Currency Item",
			type: "enchant"
		},
		{
			id: "enchant.stat_3006815533",
			text: "Your Seismic Towers have #% increased Stun Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_889454763",
			text: "Your Chilling Towers have #% increased Duration",
			type: "enchant"
		},
		{
			id: "enchant.stat_3640837971",
			text: "Minions summoned by Your Sentinel Towers have #% increased Life",
			type: "enchant"
		},
		{
			id: "enchant.stat_118036057",
			text: "Your Smothering Towers also grant #% increased Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3384161880",
			text: "Enemies inside Glacial Cage take #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3522828354",
			text: "Strongboxes in Areas are at least Magic Rarity",
			type: "enchant"
		},
		{
			id: "enchant.stat_197351228",
			text: "Your Lightning Storm Towers have #% increased Impact Delay",
			type: "enchant"
		},
		{
			id: "enchant.stat_639766324",
			text: "Your Imbuing Towers also grant #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1959522666",
			text: "All Towers in range of your Empowering Towers have #% chance to deal Double Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1508220097",
			text: "Unique Bosses drop additional Currency Shards",
			type: "enchant"
		},
		{
			id: "enchant.stat_1274634881",
			text: "Areas contain an extra Resonating Shrine",
			type: "enchant"
		},
		{
			id: "enchant.stat_2731937118",
			text: "Your Shock Nova Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_1378482149",
			text: "Minions summoned by Your Summoning Towers have #% increased Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3208939528",
			text: "#% increased Shield Charge Damage per Enemy Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_3989543665",
			text: "Areas contain # additional packs of Monsters that deal Physical Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1480568810",
			text: "The First 3 Possessed Monsters have a #% chance to drop an additional Gilded Scarab",
			type: "enchant"
		},
		{
			id: "enchant.stat_1261917923",
			text: "Your Summoning Towers summon # additional Minions",
			type: "enchant"
		},
		{
			id: "enchant.stat_1971866993",
			text: "Minions summoned by Your Sentinel Towers have #% increased Movement Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3564606017",
			text: "Your Empowering Towers also grant #% increased Cast Speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_1520798835",
			text: "Players deal #% increased Damage for each Poison on them",
			type: "enchant"
		},
		{
			id: "enchant.stat_1714706956",
			text: "#% increased Magic Pack Size",
			type: "enchant"
		},
		{
			id: "enchant.stat_3651039490",
			text: "Minions summoned by Your Summoning Towers have #% increased Life",
			type: "enchant"
		},
		{
			id: "enchant.stat_2242331554",
			text: "Your Shock Nova Towers deal full damage to Lightning Enemies",
			type: "enchant"
		},
		{
			id: "enchant.stat_290368246",
			text: "# uses remaining",
			type: "enchant"
		},
		{
			id: "enchant.stat_1070816711",
			text: "Areas contain an additional Abyss",
			type: "enchant"
		},
		{
			id: "enchant.stat_3198887051",
			text: "Your Temporal Towers also grant you #% reduced action speed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3891165938",
			text: "Your Imbuing Towers also grant #% increased Critical Strike Chance",
			type: "enchant"
		},
		{
			id: "enchant.stat_906446422",
			text: "Harbingers drop additional Currency Shards",
			type: "enchant"
		},
		{
			id: "enchant.stat_373209496",
			text: "Areas contain an additional Tormented Heretic",
			type: "enchant"
		},
		{
			id: "enchant.stat_3207852985",
			text: "Players and Monsters take #% increased Cold Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1854137416",
			text: "Strongbox Monsters have #% increased Item Quantity",
			type: "enchant"
		},
		{
			id: "enchant.stat_2731606134",
			text: "Perforate deals #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3747734818",
			text: "Areas contain hunted traitors",
			type: "enchant"
		},
		{
			id: "enchant.stat_1619284089",
			text: "Your Stone Gaze Towers have #% increased Cooldown Recovery",
			type: "enchant"
		},
		{
			id: "enchant.stat_2563159607",
			text: "Your Smothering Towers also grant #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2764047332",
			text: "Your Smothering Towers have #% increased Range",
			type: "enchant"
		},
		{
			id: "enchant.stat_3830917556",
			text: "Your Seismic Towers have #% increased length and range of Cascades",
			type: "enchant"
		},
		{
			id: "enchant.stat_1207515735",
			text: "Areas contain # additional Clusters of Mysterious Barrels",
			type: "enchant"
		},
		{
			id: "enchant.stat_3541635261",
			text: "Players and Monsters take #% increased Physical Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_977063976",
			text: "Players' Vaal Skills do not apply Soul Gain Prevention",
			type: "enchant"
		},
		{
			id: "enchant.stat_1468737867",
			text: "Areas contain an extra Shrine",
			type: "enchant"
		},
		{
			id: "enchant.stat_439316158",
			text: "Your Shock Nova Towers have #% increased effect of Shock",
			type: "enchant"
		},
		{
			id: "enchant.stat_6032025",
			text: "Your Arc Towers have # additional chains",
			type: "enchant"
		},
		{
			id: "enchant.stat_1282857477",
			text: "Minions summoned by Your Scout Towers have #% increased Life",
			type: "enchant"
		},
		{
			id: "enchant.stat_1867024035",
			text: "Areas contain # additional packs of Corrupted Vaal Monsters",
			type: "enchant"
		},
		{
			id: "enchant.stat_3564826949",
			text: "Areas can contain Abysses",
			type: "enchant"
		},
		{
			id: "enchant.stat_1992047981",
			text: "Areas contain an extra Gloom Shrine",
			type: "enchant"
		},
		{
			id: "enchant.stat_425606182",
			text: "Maps have #% Quality",
			type: "enchant"
		},
		{
			id: "enchant.stat_4024383498",
			text: "Your Temporal Towers effects decay #% faster",
			type: "enchant"
		},
		{
			id: "enchant.stat_804187877",
			text: "Unique Monsters drop Corrupted Items",
			type: "enchant"
		},
		{
			id: "enchant.stat_124877078",
			text: "Unique Bosses deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3352207460",
			text: "Your Stone Gaze Towers have #% increased Petrification Delay",
			type: "enchant"
		},
		{
			id: "enchant.stat_307092526",
			text: "Your Shock Nova Towers repeats # additional Times",
			type: "enchant"
		},
		{
			id: "enchant.stat_2649372092",
			text: "Area has #% chance to contain Gifts of the Sacrificed per Sacrifice Fragment used",
			type: "enchant"
		},
		{
			id: "enchant.stat_3416709884",
			text: "Players gain an additional Vaal Soul on Kill",
			type: "enchant"
		},
		{
			id: "enchant.stat_471027242",
			text: "Rogue Exiles have #% increased Maximum Life",
			type: "enchant"
		},
		{
			id: "enchant.stat_3123392503",
			text: "Strongbox Monsters are Enraged",
			type: "enchant"
		},
		{
			id: "enchant.stat_1959158336",
			text: "Unique Bosses have #% increased Life",
			type: "enchant"
		},
		{
			id: "enchant.stat_4008016019",
			text: "Beyond Portals have a #% chance to spawn an additional Beyond Demon",
			type: "enchant"
		},
		{
			id: "enchant.stat_696413077",
			text: "An additional Map drops on Completing Areas",
			type: "enchant"
		},
		{
			id: "enchant.stat_2056176052",
			text: "Artillery Ballista Projectiles fall in two perpendicular lines instead",
			type: "enchant"
		},
		{
			id: "enchant.stat_3728052911",
			text: "Areas contain # additional packs of Monsters that deal Chaos Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_4143730600",
			text: "Rogue Exiles drop an additional Jewel",
			type: "enchant"
		},
		{
			id: "enchant.stat_728267040",
			text: "Found Items have a #% chance to drop Corrupted in Areas",
			type: "enchant"
		},
		{
			id: "enchant.stat_3550168289",
			text: "Areas are inhabited by # additional Rogue Exile",
			type: "enchant"
		},
		{
			id: "enchant.stat_1080855680",
			text: "Rogue Exiles deal #% increased Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3045497140",
			text: "Items dropped by Corrupted Vaal Monsters in Areas have #% chance to be Corrupted",
			type: "enchant"
		},
		{
			id: "enchant.stat_3849821286",
			text: "Your Lightning Storm Towers have #% increased explosion Area of Effect",
			type: "enchant"
		},
		{
			id: "enchant.stat_4265846487",
			text: "Quality bonus of Maps also applies to Rarity of Items found",
			type: "enchant"
		},
		{
			id: "enchant.stat_504023787",
			text: "Areas contain an additional Tormented Betrayer",
			type: "enchant"
		},
		{
			id: "enchant.stat_3151377452",
			text: "Players cannot take Reflected Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_609916976",
			text: "Sweep has a #% chance to grant an Endurance Charge on Hit",
			type: "enchant"
		},
		{
			id: "enchant.stat_839907382",
			text: "Magic Maps contain # additional packs of Magic Monsters",
			type: "enchant"
		},
		{
			id: "enchant.stat_3059368202",
			text: "Areas contain # additional packs of Monsters that Heal",
			type: "enchant"
		},
		{
			id: "enchant.stat_3798342608",
			text: "Areas contain # additional Clusters of Mysterious Barrels",
			type: "enchant"
		},
		{
			id: "enchant.stat_1984484581",
			text: "Players and Monsters take #% increased Chaos Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3094365680",
			text: "Areas contain # additional packs of Poisonous Monsters",
			type: "enchant"
		},
		{
			id: "enchant.stat_397012377",
			text: "Unique Bosses are accompanied by a mysterious Harbinger",
			type: "enchant"
		},
		{
			id: "enchant.stat_2180286756",
			text: "Areas can contain Breaches",
			type: "enchant"
		},
		{
			id: "enchant.stat_2202161594",
			text: "Slaying Enemies close together has a #% chance to attract monsters from Beyond",
			type: "enchant"
		},
		{
			id: "enchant.stat_3897451709",
			text: "Areas contain an additional Legion Encounter",
			type: "enchant"
		},
		{
			id: "enchant.stat_2685482716",
			text: "Your Fireball Towers Projectiles fire in a circle",
			type: "enchant"
		},
		{
			id: "enchant.stat_3137138073",
			text: "Player's Life and Mana Recovery from Flasks are instant",
			type: "enchant"
		},
		{
			id: "enchant.stat_21993405",
			text: "Areas contain # additional Packs with Mirrored Rare Monsters",
			type: "enchant"
		},
		{
			id: "enchant.stat_3893420071",
			text: "Normal Maps contain # additional packs of Normal Monsters",
			type: "enchant"
		},
		{
			id: "enchant.stat_3672378181",
			text: "Rare Maps contain # additional Rare Monster packs",
			type: "enchant"
		},
		{
			id: "enchant.stat_2862290356",
			text: "Areas are Alluring",
			type: "enchant"
		},
		{
			id: "enchant.stat_2681419531",
			text: "Strongboxes in Areas are Corrupted",
			type: "enchant"
		},
		{
			id: "enchant.stat_3194736016",
			text: "Areas contain # additional packs of Monsters that deal Cold Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_395808938",
			text: "Areas contain an additional Essence",
			type: "enchant"
		},
		{
			id: "enchant.stat_2400448724",
			text: "Players and Monsters take #% increased Lightning Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_1080470148",
			text: "Areas contain # additional Clusters of Mysterious Barrels",
			type: "enchant"
		},
		{
			id: "enchant.stat_4019701925",
			text: "Areas contain # additional Clusters of Mysterious Barrels",
			type: "enchant"
		},
		{
			id: "enchant.stat_3760667977",
			text: "Unique Bosses drop # additional Unique Item",
			type: "enchant"
		},
		{
			id: "enchant.stat_2392278281",
			text: "The First 3 Possessed Monsters have a #% chance to drop an additional Unique Item",
			type: "enchant"
		},
		{
			id: "enchant.stat_545950479",
			text: "Areas contain # additional packs of Monsters that deal Lightning Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3187151138",
			text: "Areas contain Einhar",
			type: "enchant"
		},
		{
			id: "enchant.stat_279246355",
			text: "Areas are inhabited by an additional Invasion Boss",
			type: "enchant"
		},
		{
			id: "enchant.stat_1317250154",
			text: "The First 3 Possessed Monsters have a #% chance to drop an additional Polished Scarab",
			type: "enchant"
		},
		{
			id: "enchant.stat_3789079511",
			text: "The First 3 Possessed Monsters have a #% chance to drop an additional Rusted Scarab",
			type: "enchant"
		},
		{
			id: "enchant.stat_959534996",
			text: "Shrapnel Ballista fires an additional Arrow",
			type: "enchant"
		},
		{
			id: "enchant.stat_1463704577",
			text: "Areas contain an additional Tormented Graverobber",
			type: "enchant"
		},
		{
			id: "enchant.stat_1669553893",
			text: "Areas contain # additional Clusters of Mysterious Barrels",
			type: "enchant"
		},
		{
			id: "enchant.stat_4166834934",
			text: "#% increased Ancestral Blademaster Totem Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_21144785",
			text: "Your Shock Nova Towers have #% increased area of effect per repeat",
			type: "enchant"
		},
		{
			id: "enchant.stat_2366645974",
			text: "Areas contain # additional packs of Monsters that deal Fire Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_2187439577",
			text: "Players and Monsters take #% increased Fire Damage",
			type: "enchant"
		},
		{
			id: "enchant.stat_3481854423",
			text: "Unique Bosses are accompanied by Bodyguards",
			type: "enchant"
		},
		{
			id: "enchant.stat_1076056376",
			text: "Area has #% chance to contain Gifts of the Red Queen per Mortal Fragment used",
			type: "enchant"
		},
		{
			id: "enchant.stat_3240183538",
			text: "Areas contain an extra Strongbox",
			type: "enchant"
		},
		{
			id: "enchant.stat_1439991839",
			text: "Monsters Imprisoned by Essences have a #% chance to contain a Remnant of Corruption",
			type: "enchant"
		},
		{
			id: "enchant.stat_249139784",
			text: "Areas contain additional Monsters that Convert when Killed",
			type: "enchant"
		},
		{
			id: "enchant.stat_3224819794",
			text: "Areas contain an additional Breach",
			type: "enchant"
		},
		{
			id: "enchant.stat_3094610721",
			text: "Your Seismic Towers have an additional Cascade",
			type: "enchant"
		},
		{
			id: "enchant.stat_3340686967",
			text: "The First 3 Possessed Monsters have a #% chance to drop an additional Map",
			type: "enchant"
		}
	],
	crafted: [
		{
			id: "crafted.stat_3299347043",
			text: "# to maximum Life",
			type: "crafted"
		},
		{
			id: "crafted.stat_1671376347",
			text: "#% to Lightning Resistance",
			type: "crafted"
		},
		{
			id: "crafted.stat_3372524247",
			text: "#% to Fire Resistance",
			type: "crafted"
		},
		{
			id: "crafted.stat_4220027924",
			text: "#% to Cold Resistance",
			type: "crafted"
		},
		{
			id: "crafted.stat_387439868",
			text: "#% increased Elemental Damage with Attack Skills",
			type: "crafted"
		},
		{
			id: "crafted.stat_4015621042",
			text: "#% increased Energy Shield (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_1509134228",
			text: "#% increased Physical Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1859333175",
			text: "Can have up to 3 Crafted Modifiers",
			type: "crafted"
		},
		{
			id: "crafted.stat_2915988346",
			text: "#% to Fire and Cold Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_2250533757",
			text: "#% increased Movement Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_210067635",
			text: "#% increased Attack Speed (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_2974417149",
			text: "#% increased Spell Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1940865751",
			text: "Adds # to # Physical Damage (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_4052037485",
			text: "# to maximum Energy Shield (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_2901986750",
			text: "#% to all Elemental Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_3441501978",
			text: "#% to Fire and Lightning Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_3032590688",
			text: "Adds # to # Physical Damage to Attacks",
			type: "crafted"
		},
		{
			id: "crafted.stat_1050105434",
			text: "# to maximum Mana",
			type: "crafted"
		},
		{
			id: "crafted.stat_2154246560",
			text: "#% increased Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1062208444",
			text: "#% increased Armour (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_587431675",
			text: "#% increased Global Critical Strike Chance",
			type: "crafted"
		},
		{
			id: "crafted.stat_124859000",
			text: "#% increased Evasion Rating (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_3489782002",
			text: "# to maximum Energy Shield",
			type: "crafted"
		},
		{
			id: "crafted.stat_2375316951",
			text: "#% increased Critical Strike Chance",
			type: "crafted"
		},
		{
			id: "crafted.stat_4277795662",
			text: "#% to Cold and Lightning Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_4080418644",
			text: "# to Strength",
			type: "crafted"
		},
		{
			id: "crafted.stat_2482852589",
			text: "#% increased maximum Energy Shield",
			type: "crafted"
		},
		{
			id: "crafted.stat_328541901",
			text: "# to Intelligence",
			type: "crafted"
		},
		{
			id: "crafted.stat_681332047",
			text: "#% increased Attack Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2016708976",
			text: "#% to Quality",
			type: "crafted"
		},
		{
			id: "crafted.stat_1754445556",
			text: "Adds # to # Lightning Damage to Attacks",
			type: "crafted"
		},
		{
			id: "crafted.stat_3261801346",
			text: "# to Dexterity",
			type: "crafted"
		},
		{
			id: "crafted.stat_3556824919",
			text: "#% to Global Critical Strike Multiplier",
			type: "crafted"
		},
		{
			id: "crafted.stat_677564538",
			text: "Non-Channelling Skills have # to Total Mana Cost",
			type: "crafted"
		},
		{
			id: "crafted.stat_2891184298",
			text: "#% increased Cast Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_280731498",
			text: "#% increased Area of Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_2451402625",
			text: "#% increased Armour and Evasion (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_1652515349",
			text: "# to maximum number of Raised Zombies",
			type: "crafted"
		},
		{
			id: "crafted.stat_2428829184",
			text: "# to maximum number of Skeletons",
			type: "crafted"
		},
		{
			id: "crafted.stat_2387423236",
			text: "Adds # to # Cold Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_3393628375",
			text: "#% to Cold and Chaos Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_1999113824",
			text: "#% increased Evasion and Energy Shield (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_2264295449",
			text: "# to Melee Weapon and Unarmed Attack range",
			type: "crafted"
		},
		{
			id: "crafted.stat_3465022881",
			text: "#% to Lightning and Chaos Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_3962278098",
			text: "#% increased Fire Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_4251717817",
			text: "#% increased Area Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2231156303",
			text: "#% increased Lightning Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1334060246",
			text: "Adds # to # Lightning Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_3321629045",
			text: "#% increased Armour and Energy Shield (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_983749596",
			text: "#% increased maximum Life",
			type: "crafted"
		},
		{
			id: "crafted.stat_4067062424",
			text: "Adds # to # Cold Damage to Attacks",
			type: "crafted"
		},
		{
			id: "crafted.stat_321077055",
			text: "Adds # to # Fire Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_737908626",
			text: "#% increased Critical Strike Chance for Spells",
			type: "crafted"
		},
		{
			id: "crafted.stat_736967255",
			text: "#% increased Chaos Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2063695047",
			text: "Gain #% of Non-Chaos Damage as extra Chaos Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_3736589033",
			text: "# to Total Mana Cost of Skills",
			type: "crafted"
		},
		{
			id: "crafted.stat_1573130764",
			text: "Adds # to # Fire Damage to Attacks",
			type: "crafted"
		},
		{
			id: "crafted.stat_4064396395",
			text: "Attacks with this Weapon Penetrate #% Elemental Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_1519615863",
			text: "#% chance to cause Bleeding on Hit",
			type: "crafted"
		},
		{
			id: "crafted.stat_1782086450",
			text: "#% faster start of Energy Shield Recharge",
			type: "crafted"
		},
		{
			id: "crafted.stat_725880290",
			text: "#% chance to Impale Enemies on Hit with Attacks",
			type: "crafted"
		},
		{
			id: "crafted.stat_4291461939",
			text: "Regenerate # Mana per second",
			type: "crafted"
		},
		{
			id: "crafted.stat_3759663284",
			text: "#% increased Projectile Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_3291658075",
			text: "#% increased Cold Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_674553446",
			text: "Adds # to # Chaos Damage to Attacks",
			type: "crafted"
		},
		{
			id: "crafted.stat_2144192055",
			text: "# to Evasion Rating",
			type: "crafted"
		},
		{
			id: "crafted.stat_1002362373",
			text: "#% increased Melee Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2551600084",
			text: "# to Level of Socketed AoE Gems",
			type: "crafted"
		},
		{
			id: "crafted.stat_1310194496",
			text: "#% increased Global Physical Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_809229260",
			text: "# to Armour",
			type: "crafted"
		},
		{
			id: "crafted.stat_2301191210",
			text: "#% chance to Blind Enemies on hit",
			type: "crafted"
		},
		{
			id: "crafted.stat_3523867985",
			text: "#% increased Armour, Evasion and Energy Shield (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_1172810729",
			text: "#% chance to deal Double Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2831165374",
			text: "Adds # to # Lightning Damage to Spells",
			type: "crafted"
		},
		{
			id: "crafted.stat_658456881",
			text: "# to Minimum Frenzy Charges",
			type: "crafted"
		},
		{
			id: "crafted.stat_378817135",
			text: "#% to Fire and Chaos Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_536929014",
			text: "#% to Critical Strike Multiplier if you've Shattered an Enemy Recently",
			type: "crafted"
		},
		{
			id: "crafted.stat_3484657501",
			text: "# to Armour (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_538848803",
			text: "# to Strength and Dexterity",
			type: "crafted"
		},
		{
			id: "crafted.stat_1589917703",
			text: "Minions deal #% increased Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_3375935924",
			text: "Minions have #% increased Attack Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_53045048",
			text: "# to Evasion Rating (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_829382474",
			text: "# to Level of Socketed Melee Gems",
			type: "crafted"
		},
		{
			id: "crafted.stat_1839076647",
			text: "#% increased Projectile Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_472520716",
			text: "#% of Damage taken gained as Mana over 4 seconds when Hit",
			type: "crafted"
		},
		{
			id: "crafted.stat_2300185227",
			text: "# to Dexterity and Intelligence",
			type: "crafted"
		},
		{
			id: "crafted.stat_1379411836",
			text: "# to all Attributes",
			type: "crafted"
		},
		{
			id: "crafted.stat_789117908",
			text: "#% increased Mana Regeneration Rate",
			type: "crafted"
		},
		{
			id: "crafted.stat_3023957681",
			text: "#% chance to gain Onslaught for 4 seconds on Kill",
			type: "crafted"
		},
		{
			id: "crafted.stat_2672805335",
			text: "#% increased Attack and Cast Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2748665614",
			text: "#% increased maximum Mana",
			type: "crafted"
		},
		{
			id: "crafted.stat_2176571093",
			text: "# to Level of Socketed Projectile Gems",
			type: "crafted"
		},
		{
			id: "crafted.stat_967627487",
			text: "#% increased Damage over Time",
			type: "crafted"
		},
		{
			id: "crafted.stat_3325883026",
			text: "Regenerate # Life per second",
			type: "crafted"
		},
		{
			id: "crafted.stat_114734841",
			text: "Flasks applied to you have #% increased Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_3031766858",
			text: "Shock nearby Enemies for # Seconds when you Focus",
			type: "crafted"
		},
		{
			id: "crafted.stat_3593843976",
			text: "#% of Physical Attack Damage Leeched as Life",
			type: "crafted"
		},
		{
			id: "crafted.stat_4000101551",
			text: "Minions have #% increased Cast Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_1999711879",
			text: "# to Minimum Power Charges",
			type: "crafted"
		},
		{
			id: "crafted.stat_1535626285",
			text: "# to Strength and Intelligence",
			type: "crafted"
		},
		{
			id: "crafted.stat_691932474",
			text: "# to Accuracy Rating (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_2067062068",
			text: "Projectiles Pierce # additional Targets",
			type: "crafted"
		},
		{
			id: "crafted.stat_51994685",
			text: "#% increased Flask Life Recovery rate",
			type: "crafted"
		},
		{
			id: "crafted.stat_4154259475",
			text: "# to Level of Socketed Support Gems",
			type: "crafted"
		},
		{
			id: "crafted.stat_2947215268",
			text: "#% increased Damage during any Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_3336890334",
			text: "Adds # to # Lightning Damage (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_3706959521",
			text: "# to Minimum Endurance Charges",
			type: "crafted"
		},
		{
			id: "crafted.stat_3917489142",
			text: "#% increased Rarity of Items found",
			type: "crafted"
		},
		{
			id: "crafted.stat_3885634897",
			text: "#% chance to Poison on Hit (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_1177358866",
			text: "#% increased Movement Speed if you haven't been Hit Recently",
			type: "crafted"
		},
		{
			id: "crafted.stat_310246444",
			text: "#% increased Damage while Leeching",
			type: "crafted"
		},
		{
			id: "crafted.stat_573223427",
			text: "#% chance to gain Arcane Surge when you Kill an Enemy",
			type: "crafted"
		},
		{
			id: "crafted.stat_1037193709",
			text: "Adds # to # Cold Damage (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_3992439283",
			text: "#% Critical Strike Multiplier while a Rare or Unique Enemy is Nearby",
			type: "crafted"
		},
		{
			id: "crafted.stat_3741323227",
			text: "#% increased Flask Effect Duration",
			type: "crafted"
		},
		{
			id: "crafted.stat_1452809865",
			text: "#% increased Flask Charges gained",
			type: "crafted"
		},
		{
			id: "crafted.stat_2008255263",
			text: "#% increased Critical Strike Chance during Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_2379781920",
			text: "#% increased Elemental Damage if you've dealt a Critical Strike Recently",
			type: "crafted"
		},
		{
			id: "crafted.stat_1896971621",
			text: "#% increased Mine Throwing Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_1538773178",
			text: "#% chance to Shock",
			type: "crafted"
		},
		{
			id: "crafted.stat_2908886986",
			text: "#% chance to deal Double Damage while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_1335054179",
			text: "#% chance to Ignite",
			type: "crafted"
		},
		{
			id: "crafted.stat_4055307827",
			text: "#% to Chaos Damage over Time Multiplier",
			type: "crafted"
		},
		{
			id: "crafted.stat_2866361420",
			text: "#% increased Armour",
			type: "crafted"
		},
		{
			id: "crafted.stat_30642521",
			text: "You can apply an additional Curse",
			type: "crafted"
		},
		{
			id: "crafted.stat_3079007202",
			text: "#% chance to Trigger a Socketed Spell when you Use a Skill",
			type: "crafted"
		},
		{
			id: "crafted.stat_782230869",
			text: "#% increased Effect of non-Damaging Ailments on Enemies",
			type: "crafted"
		},
		{
			id: "crafted.stat_709508406",
			text: "Adds # to # Fire Damage (Local)",
			type: "crafted"
		},
		{
			id: "crafted.stat_474294393",
			text: "#% reduced Mana Cost of Skills",
			type: "crafted"
		},
		{
			id: "crafted.stat_2469416729",
			text: "Adds # to # Cold Damage to Spells",
			type: "crafted"
		},
		{
			id: "crafted.stat_2133341901",
			text: "#% of Physical Damage Converted to Cold Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_803737631",
			text: "# to Accuracy Rating",
			type: "crafted"
		},
		{
			id: "crafted.stat_4122424929",
			text: "Cannot roll Attack Modifiers",
			type: "crafted"
		},
		{
			id: "crafted.stat_3828613551",
			text: "#% to Quality of Socketed Gems",
			type: "crafted"
		},
		{
			id: "crafted.stat_2309614417",
			text: "#% chance to Freeze",
			type: "crafted"
		},
		{
			id: "crafted.stat_3500911418",
			text: "Regenerate #% of Life per second during any Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_696707743",
			text: "#% chance to Dodge Spell Hits",
			type: "crafted"
		},
		{
			id: "crafted.stat_311641062",
			text: "#% chance for Flasks you use to not consume Charges",
			type: "crafted"
		},
		{
			id: "crafted.stat_3374165039",
			text: "#% increased Totem Placement speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2022851697",
			text: "You have Vaal Pact while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_289885185",
			text: "Chaos Skills have #% increased Skill Effect Duration",
			type: "crafted"
		},
		{
			id: "crafted.stat_205619502",
			text: "#% chance to Trigger Level 1 Blood Rage when you Kill an Enemy",
			type: "crafted"
		},
		{
			id: "crafted.stat_2238019079",
			text: "Regenerate # Energy Shield per second while a Rare or Unique Enemy is Nearby",
			type: "crafted"
		},
		{
			id: "crafted.stat_770672621",
			text: "Minions have #% increased maximum Life",
			type: "crafted"
		},
		{
			id: "crafted.stat_2316658489",
			text: "# to Armour and Evasion Rating",
			type: "crafted"
		},
		{
			id: "crafted.stat_4126210832",
			text: "Hits can't be Evaded",
			type: "crafted"
		},
		{
			id: "crafted.stat_836936635",
			text: "Regenerate #% of Life per second",
			type: "crafted"
		},
		{
			id: "crafted.stat_3324747104",
			text: "#% of Damage Leeched as Life while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_1149326139",
			text: "Cannot roll Caster Modifiers",
			type: "crafted"
		},
		{
			id: "crafted.stat_3237948413",
			text: "#% of Physical Attack Damage Leeched as Mana",
			type: "crafted"
		},
		{
			id: "crafted.stat_2062792091",
			text: "#% chance to Trigger Socketed Spells when you Focus",
			type: "crafted"
		},
		{
			id: "crafted.stat_3483999943",
			text: "#% chance to Avoid being Chilled",
			type: "crafted"
		},
		{
			id: "crafted.stat_1533563525",
			text: "#% of Physical Damage Converted to Fire Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2106365538",
			text: "#% increased Evasion Rating",
			type: "crafted"
		},
		{
			id: "crafted.stat_1539825365",
			text: "# to Armour during Soul Gain Prevention",
			type: "crafted"
		},
		{
			id: "crafted.stat_3240769289",
			text: "#% of Physical Damage Converted to Lightning Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1583385065",
			text: "Non-Vaal Skills deal #% increased Damage during Soul Gain Prevention",
			type: "crafted"
		},
		{
			id: "crafted.stat_1133016593",
			text: "Adds # to # Fire Damage to Spells",
			type: "crafted"
		},
		{
			id: "crafted.stat_4223377453",
			text: "#% increased Brand Attachment range",
			type: "crafted"
		},
		{
			id: "crafted.stat_2590156965",
			text: "#% chance to Dodge Attack Hits while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_1004011302",
			text: "#% increased Cooldown Recovery Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_871270154",
			text: "Regenerate #% of Life per second during Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_1785942004",
			text: "#% Chance to Trigger Level 18 Summon Spectral Wolf on Kill",
			type: "crafted"
		},
		{
			id: "crafted.stat_2628163981",
			text: "#% increased Attack and Cast Speed while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_3032585258",
			text: "#% chance to gain a Frenzy Charge on Critical Strike",
			type: "crafted"
		},
		{
			id: "crafted.stat_4262448838",
			text: "#% chance to Avoid being Stunned",
			type: "crafted"
		},
		{
			id: "crafted.stat_3182498570",
			text: "#% increased Movement Speed during Flask effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_902747843",
			text: "#% increased Damage per Frenzy Charge",
			type: "crafted"
		},
		{
			id: "crafted.stat_314741699",
			text: "#% increased Attack Speed while a Rare or Unique Enemy is Nearby",
			type: "crafted"
		},
		{
			id: "crafted.stat_2421446548",
			text: "Channelling Skills have # to Total Mana Cost",
			type: "crafted"
		},
		{
			id: "crafted.stat_3005472710",
			text: "#% chance to Avoid Elemental Ailments",
			type: "crafted"
		},
		{
			id: "crafted.stat_3753650187",
			text: "#% additional Physical Damage Reduction while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2992263716",
			text: "Recover #% of Mana and Energy Shield when you Focus",
			type: "crafted"
		},
		{
			id: "crafted.stat_849152640",
			text: "Skills Cost no Mana while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2137912951",
			text: "#% increased Mine Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_3515686789",
			text: "#% increased Damage per Endurance Charge",
			type: "crafted"
		},
		{
			id: "crafted.stat_3267282390",
			text: "#% increased Effect of Fortify on you while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_1572897579",
			text: "You have Onslaught during Soul Gain Prevention",
			type: "crafted"
		},
		{
			id: "crafted.stat_3382807662",
			text: "#% to Fire Damage over Time Multiplier",
			type: "crafted"
		},
		{
			id: "crafted.stat_1950806024",
			text: "#% to Cold Damage over Time Multiplier",
			type: "crafted"
		},
		{
			id: "crafted.stat_3143208761",
			text: "#% increased Attributes",
			type: "crafted"
		},
		{
			id: "crafted.stat_1101403182",
			text: "#% reduced Damage taken from Damage Over Time",
			type: "crafted"
		},
		{
			id: "crafted.stat_2312652600",
			text: "#% Chance to avoid being Stunned during Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_1514829491",
			text: "#% chance to Avoid being Frozen",
			type: "crafted"
		},
		{
			id: "crafted.stat_2915373966",
			text: "Gain #% of Cold Damage as Extra Chaos Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1840751341",
			text: "#% increased Duration of Ailments you inflict while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_67280387",
			text: "Gain #% of Maximum Life as Extra Maximum Energy Shield",
			type: "crafted"
		},
		{
			id: "crafted.stat_3342989455",
			text: "#% of Physical Damage from Hits taken as Fire Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2523334466",
			text: "Adds # to # Chaos Damage if you've dealt a Critical Strike Recently",
			type: "crafted"
		},
		{
			id: "crafted.stat_174664100",
			text: "Minions have #% increased Movement Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2530372417",
			text: "#% Chance to Block Attack Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2941585404",
			text: "#% increased Trap Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_118398748",
			text: "#% increased Trap Throwing Speed",
			type: "crafted"
		},
		{
			id: "crafted.stat_720398262",
			text: "#% chance to Avoid Elemental Damage from Hits during Soul Gain Prevention",
			type: "crafted"
		},
		{
			id: "crafted.stat_1349659520",
			text: "Your Critical Strike Chance is Lucky while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_3762412853",
			text: "Attacks with this Weapon Penetrate #% Chaos Resistance",
			type: "crafted"
		},
		{
			id: "crafted.stat_1653010703",
			text: "#% to Non-Ailment Chaos Damage over Time Multiplier",
			type: "crafted"
		},
		{
			id: "crafted.stat_3824033729",
			text: "#% of Damage Taken from Hits is Leeched as Life during Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_3922006600",
			text: "Socketed Gems are Supported by Level # Blood Magic",
			type: "crafted"
		},
		{
			id: "crafted.stat_3319896421",
			text: "Gain #% of Physical Damage as Extra Chaos Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1588539856",
			text: "#% of Damage is taken from Mana before Life while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_3251705960",
			text: "#% increased Rarity of Items found during Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_1412217137",
			text: "#% increased Flask Mana Recovery rate",
			type: "crafted"
		},
		{
			id: "crafted.stat_2161689853",
			text: "#% increased Rarity of Items Dropped by Slain Rare or Unique Enemies",
			type: "crafted"
		},
		{
			id: "crafted.stat_683273571",
			text: "#% increased Mana Cost of Skills during Flask Effect",
			type: "crafted"
		},
		{
			id: "crafted.stat_4253454700",
			text: "#% Chance to Block (Shields)",
			type: "crafted"
		},
		{
			id: "crafted.stat_2353576063",
			text: "#% increased Effect of your Curses",
			type: "crafted"
		},
		{
			id: "crafted.stat_3500359417",
			text: "Minions Recover #% of their Life when you Focus",
			type: "crafted"
		},
		{
			id: "crafted.stat_1599775597",
			text: "Gain #% of Fire Damage as Extra Chaos Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_2034658008",
			text: "#% increased Damage per Power Charge",
			type: "crafted"
		},
		{
			id: "crafted.stat_3244118730",
			text: "#% of Evasion Rating is Regenerated as Life per second while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2402136583",
			text: "Gain #% of Lightning Damage as Extra Chaos Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_80079005",
			text: "#% of Lightning Damage Leeched as Life",
			type: "crafted"
		},
		{
			id: "crafted.stat_350598685",
			text: "# to Weapon range",
			type: "crafted"
		},
		{
			id: "crafted.stat_1423639565",
			text: "Minions have #% to all Elemental Resistances",
			type: "crafted"
		},
		{
			id: "crafted.stat_3848282610",
			text: "#% of Fire Damage Leeched as Life",
			type: "crafted"
		},
		{
			id: "crafted.stat_3999401129",
			text: "#% of Cold Damage Leeched as Life",
			type: "crafted"
		},
		{
			id: "crafted.stat_2797971005",
			text: "# Life gained for each Enemy hit by your Attacks",
			type: "crafted"
		},
		{
			id: "crafted.stat_429867172",
			text: "# to maximum number of Summoned Totems",
			type: "crafted"
		},
		{
			id: "crafted.stat_1766730250",
			text: "You are Immune to Ailments while Focussed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2477381238",
			text: "#% reduced Enemy Block Chance",
			type: "crafted"
		},
		{
			id: "crafted.stat_301104070",
			text: "Flasks gain a Charge when you take a Critical Strike",
			type: "crafted"
		},
		{
			id: "crafted.stat_561307714",
			text: "#% Chance to Block Spell Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_1435748744",
			text: "Curse Skills have #% increased Skill Effect Duration",
			type: "crafted"
		},
		{
			id: "crafted.stat_3767873853",
			text: "Reflects # Physical Damage to Melee Attackers",
			type: "crafted"
		},
		{
			id: "crafted.stat_3464137628",
			text: "Suffixes Cannot Be Changed",
			type: "crafted"
		},
		{
			id: "crafted.stat_2879723104",
			text: "Prefixes Cannot Be Changed",
			type: "crafted"
		},
		{
			id: "crafted.stat_1578737937",
			text: "Attack Projectiles Return to you from final Target",
			type: "crafted"
		},
		{
			id: "crafted.stat_2166444903",
			text: "#% Chance to Block Attack Damage while Dual Wielding",
			type: "crafted"
		},
		{
			id: "crafted.stat_3909846940",
			text: "Item drops on Death if Equipped by an Animated Guardian",
			type: "crafted"
		},
		{
			id: "crafted.stat_1702195217",
			text: "#% Chance to Block Attack Damage",
			type: "crafted"
		},
		{
			id: "crafted.stat_832404842",
			text: "#% reduced Enemy Stun Threshold with this Weapon",
			type: "crafted"
		},
		{
			id: "crafted.stat_1445684883",
			text: "Reflects # Physical Damage to Attackers on Block",
			type: "crafted"
		},
		{
			id: "crafted.stat_2517001139",
			text: "#% increased Stun Duration on Enemies",
			type: "crafted"
		},
		{
			id: "crafted.stat_3485067555",
			text: "#% increased Chill Duration on Enemies",
			type: "crafted"
		},
		{
			id: "crafted.stat_1073942215",
			text: "#% increased Freeze Duration on Enemies",
			type: "crafted"
		},
		{
			id: "crafted.stat_3668351662",
			text: "#% increased Shock Duration on Enemies",
			type: "crafted"
		},
		{
			id: "crafted.stat_1086147743",
			text: "#% increased Ignite Duration on Enemies",
			type: "crafted"
		},
		{
			id: "crafted.stat_1871765599",
			text: "#% chance to Avoid being Shocked",
			type: "crafted"
		},
		{
			id: "crafted.stat_1783006896",
			text: "#% chance to Avoid being Ignited",
			type: "crafted"
		},
		{
			id: "crafted.stat_238314698",
			text: "Cannot roll Modifiers with Required Level above #",
			type: "crafted"
		},
		{
			id: "crafted.stat_2362265695",
			text: "#% chance to Avoid being Knocked Back",
			type: "crafted"
		}
	],
};

const PROPERTIES_FLAT = Object.values(PROPERTIES).flat().map((({id, text, type}) => ({id, text: `${text} (${type})`}))); // todo sort
const PROPERTIES_TEXT_TO_ID = Object.fromEntries(PROPERTIES_FLAT.map(({id, text}) => [text, id]));
const PROPERTIES_ID_TO_TEXT = Object.fromEntries(PROPERTIES_FLAT.map(({id, text}) => [id, text]));

const SHORT_PROPERTIES = {
	totalEleRes: 'pseudo.pseudo_total_elemental_resistance',
	flatLife: 'pseudo.pseudo_total_life',
};

const SORT = {
	value: {'statgroup.0': 'desc'},
	price: {price: 'asc'},
};

// todo update per poe.ninja
const CURRENCIES = {
	mirror: {id: 'mir', chaos: 10000},
	exalted: {id: 'exa', chaos: 130},
	divine: {id: 'divine', chaos: 12},
	vaal: {id: 'vaal', chaos: 2},
	regal: {id: 'regal', chaos: 1},
	chaos: {id: 'chaos', chaos: 1},
	gemcuttersPrism: {id: 'gcp', chaos: 1},
	regret: {id: 'regret', chaos: 1},
	fusing: {id: 'fuse', chaos: 1 / 2},
	alchemy: {id: 'alch', chaos: 1 / 2},
	scouring: {id: 'scour', chaos: 1 / 2},
	cartographersChisel: {id: 'chisel', chaos: 1 / 2},
	blessed: {id: 'blessed', chaos: 1 / 2},
	silver: {id: 'silver', chaos: 1 / 3},
	jewellers: {id: 'jew', chaos: 1 / 6},
	chromatic: {id: 'chrom', chaos: 1 / 8},
	alteration: {id: 'alt', chaos: 1 / 8},
	chance: {id: 'chance', chaos: 1 / 8},
	perandus: {id: 'p', chaos: 1 / 100},
	fatedConnectionsProphecy: {chaos: 475},
};

module.exports = {
	TYPES, TYPES_TEXT_TO_ID, TYPES_ID_TO_TEXT,
	PROPERTIES, PROPERTIES_FLAT, PROPERTIES_TEXT_TO_ID, PROPERTIES_ID_TO_TEXT, SHORT_PROPERTIES,
	SORT, CURRENCIES,
};
