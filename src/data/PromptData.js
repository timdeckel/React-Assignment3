
function factionPrompt (factionName,backgroundURL ) {
  this.factionName = factionName
  this.backgroundURL = backgroundURL
}

const loyalists = new factionPrompt("Loyalists", "SM-background.png");
const Chaos = new factionPrompt("Chaos", "CSM-background.png");

export const factionList = [loyalists, Chaos];