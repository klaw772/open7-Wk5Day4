const Pokemon = require("./Pokemon.js");
const Trainer = require("./Trainer.js");
const Badge = require("./Badge.js");

// trainer <-> pokemon
Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer);
// trainer <-> badge
Trainer.belongsToMany(Badge, { through: 'TrainerBadges' })
Badge.belongsToMany(Trainer, { through: 'TrainerBadges' })

module.exports = {
  Pokemon,
  Trainer,
  Badge,
};