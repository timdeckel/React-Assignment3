
function faction (factionName, backgroundURL) {
  this.factionName = factionName,
  this.backgroundURL = backgroundURL
}

function subFaction (name, allegiance, imageURL, quote, description ) {
  this.name = name,
  this.allegiance = allegiance,
  this.imageURL = imageURL,
  this.quote = quote,
  this.description = description
}

const Ultramarines = new subFaction( "Ultramarines", "Imperium", "ultramarines.png", "Courage and Honor!", "The Ultramarines are one of the most renowned Space Marine Chapters, known for their tactical prowess and adherence to the Codex Astartes. Hailing from the realm of Ultramar, they exemplify the ideals of duty, honor, and loyalty to the Emperor.");
const BloodAngels = new subFaction(  "Blood Angels", "Imperium", "blood_angels.png", "For Sanguinius and the Emperor!", "The Blood Angels are noble but haunted Space Marines, bearing the genetic legacy of their Primarch Sanguinius. They are known for their fierce combat prowess and struggle against the flaws of their gene-seed.");
const AstraMilitarum = new subFaction( "Astra Militarum", "Imperium", "astra_militarum.png", "For the Emperor and the Imperium!", "The Astra Militarum, also known as the Imperial Guard, represents the countless armies of humanity fighting to defend the Imperium. Their soldiers are drawn from countless worlds, united in their loyalty to the Emperor.");
const BlackLegion = new subFaction(  "Black Legion", "Chaos", "chaos_space_marines.png", "Death to the False Emperor!", "The Black Legion are traitorous Astartes who turned against the Imperium in the service of the Ruinous Powers. They are twisted reflections of their former selves, serving the dark gods of Chaos in their eternal war against the Imperium.");
const ThousandSons = new subFaction(  "Thousand Sons", "Chaos", "thousand_sons.png","All is Dust!", "The Thousand Sons are sorcerous Chaos Space Marines, dedicated to the pursuit of arcane knowledge. They were once a proud Legion, but their allegiance to Tzeentch has cursed them with mutation and madness.");
const WorldEaters = new subFaction(  "World Eaters", "Chaos", "world_eaters.png","Blood for the Blood God!", "The World Eaters are berserkers of Khorne, consumed by an insatiable thirst for battle and slaughter. They eschew tactics and strategy in favor of mindless violence, seeking only to spill blood in the name of their dark god.");
const DeathGuard = new subFaction(  "Death Guard","Chaos", "death_guard.png", "Nurgle's Rot!", "The Death Guard are plague-ridden warriors dedicated to Nurgle, the Chaos God of decay and pestilence. They spread disease and corruption wherever they go, their bodies bloated and festering with the gifts of their foul deity.");
const AlphaLegion = new subFaction(  "Alpha Legion", "Chaos", "alpha_legion.png", "For the Hydra and the Serpent!", "The Alpha Legion is a mysterious and enigmatic Chaos warband, known for their subterfuge, deception, and infiltration. They sow discord and confusion within the ranks of the Imperium, serving their own inscrutable agenda.");
const NightLords = new subFaction(  "Night Lords","Chaos","night_lords.png", "Fear the Night!", "The Night Lords are terror-inducing Chaos Space Marines, masters of fear and intimidation. They strike from the shadows, instilling terror in their enemies and spreading chaos and anarchy across the galaxy.");
const SpaceWolves = new subFaction("Space Wolves", "Imperium", "space_wolves.png", "For Russ and the Allfather!", "The Space Wolves are fierce and savage warriors, known for their close connection to Fenrisian wolves and their unyielding loyalty to their Primarch, Leman Russ.");
const ImperialFists = new subFaction("Imperial Fists", "Imperium", "imperial_fists.png", "Primarch's Fury!", "The Imperial Fists are stalwart defenders of the Imperium, specializing in siege warfare and fortification. They are known for their unyielding determination and unbreakable resolve.");
const DarkAngels = new subFaction("Dark Angels", "Imperium", "dark_angels.png", "Repent! For tomorrow you die!", "The Dark Angels are a secretive and enigmatic Chapter, haunted by their past and the mysterious Fallen. They pursue the truth behind their Primarch Lion El'Jonson's disappearance.");
const GreyKnights = new subFaction("Grey Knights", "Imperium", "grey_knights.png", "Purge the Unclean!", "The Grey Knights are the Emperor's daemon hunters, specializing in combating the forces of Chaos. They are among the most elite and incorruptible warriors in the Imperium.");
const SistersOfBattle = new subFaction("Sisters of Battle", "Imperium", "sisters_of_battle.png", "Blessed is the mind too small for doubt!", "The Sisters of Battle are devout warriors of the Ecclesiarchy, wielding faith and fire in service to the Emperor. They are fervent defenders of the Imperial Creed and the faithful.");
const Custodes = new subFaction("Custodes", "Imperium", "custodes.png", "Shield of the Emperor!", "The Adeptus Custodes are the guardians of the Emperor himself, tasked with protecting the Golden Throne and the heart of the Imperium. They are unmatched in martial skill and prowess.");
const AdeptusMechanicus = new subFaction("Adeptus Mechanicus", "Imperium", "adeptus_mechanicus.png", "Knowledge is power, guard it well!", "The Adeptus Mechanicus is the priesthood of Mars, dedicated to the pursuit of knowledge and the mysteries of technology. They maintain the Imperium's vast war machines and seek to unlock the secrets of the universe.");
const ImperialKnights = new subFaction("Imperial Knights", "Imperium", "imperial_knights.png", "Till Death!", "The Imperial Knights are towering war machines piloted by noble houses in service to the Imperium. They are symbols of honor and duty, towering over the battlefield and striking fear into the hearts of their enemies.");
const Inquisition = new subFaction("Inquisition", "Imperium", "inquisition.png", "Innocence proves nothing!", "The Inquisition is the secret police of the Imperium, tasked with rooting out heresy, mutation, and corruption wherever it may be found. They operate in the shadows, wielding absolute authority in the Emperor's name.");
const OfficioAssassinorum = new subFaction("Officio Assassinorum", "Imperium", "officio_assassinorum.png", "Silent death!", "The Officio Assassinorum is an organization of deadly assassins, each specializing in a different method of killing. They are the silent blades of the Emperor, eliminating threats to the Imperium with ruthless efficiency.");
const WordBearers = new subFaction("Word Bearers", "Chaos", "word_bearers.png", "Lorgar's Chosen!", "The Word Bearers are fanatical worshippers of Chaos, dedicated to spreading the influence of the Dark Gods throughout the galaxy. Led by their Primarch Lorgar, they seek to bring about the downfall of the Imperium and establish a new order under Chaos.");
const EmperorChildren = new subFaction("Emperor's Children", "Chaos", "emperors_children.png", "Perfection through Excess!", "The Emperor's Children are hedonistic warriors who revel in excess and sensation. Once noble warriors of the Imperium, they now serve Slaanesh, the Dark Prince, seeking perfection through indulgence and depravity.");
const RedCorsairs = new subFaction("Red Corsairs", "Chaos", "red_corsairs.png", "To the Void!", "The Red Corsairs are a notorious band of Chaos Space Marines, led by the infamous Huron Blackheart. They are feared raiders and pirates, preying upon the Imperium's shipping lanes and frontier worlds with ruthless efficiency.");
const IronWarriors = new subFaction("Iron Warriors", "Chaos", "iron_warriors.png", "Iron Within, Iron Without!", "The Iron Warriors are siege specialists, masters of siegecraft and relentless assault. They excel at breaking enemy fortifications and reducing entire worlds to rubble in the name of Chaos.");
const TraitorisMilitarum = new subFaction("Traitoris Militarum", "Chaos", "traitoris_militarum.png", "For the Dark Gods!", "The Traitoris Militarum are renegade regiments of the Imperial Guard who have turned against the Imperium, embracing the powers of Chaos. They are ruthless and brutal warriors, wielding the dark forces of Chaos in their bid for power.");
const ChaosCultists = new subFaction("Chaos Cultists", "Chaos", "chaos_cultists.png", "Blood for the Blood God!", "Chaos Cultists are fanatical worshippers of Chaos, drawn from all walks of life and species. They serve as foot soldiers and cannon fodder for the Chaos warbands, spreading terror and destruction wherever they go.");

const Imperium = new faction("Imperium", "SM-background.png");
const Chaos = new faction("Chaos", "CSM-background.png");



export const factionList = [Imperium, Chaos];
export const subFactionList = [
  Ultramarines,
  BloodAngels,
  AstraMilitarum,
  BlackLegion,
  ThousandSons,
  WorldEaters,
  DeathGuard,
  AlphaLegion,
  NightLords,
  WordBearers,
  EmperorChildren,
  RedCorsairs,
  IronWarriors,
  TraitorisMilitarum,
  ChaosCultists,
  SpaceWolves,
  ImperialFists,
  DarkAngels,
  GreyKnights,
  SistersOfBattle,
  Custodes,
  AdeptusMechanicus,
  ImperialKnights,
  Inquisition,
  OfficioAssassinorum
];
