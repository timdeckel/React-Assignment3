
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

const Imperium = new faction("Imperium", "SM-background.png");
const Chaos = new faction("Chaos", "CSM-background.png");



export const factionList = [Imperium, Chaos];